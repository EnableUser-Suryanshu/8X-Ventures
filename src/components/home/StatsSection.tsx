"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { stats, statsHeadline } from "@/content/home";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const format = (n: number, prefix = "", suffix = "") =>
  `${prefix}${n.toLocaleString("en-IN")}${suffix}`;

const final = (i: number) =>
  format(stats[i].value, stats[i].prefix, stats[i].suffix);

/** The one behind the live figure: the next in the set, so the two never
 *  read as the same number printed twice. */
const ghostOf = (i: number) => (i + 1) % stats.length;

/** How much of the run each figure gets, including its hold. */
const SEGMENT = 1 / stats.length;

/**
 * Where in a figure's own segment its count resolves. The rest of the segment
 * holds the finished number, so it is read before the set moves on.
 */
const COUNT_ENDS_AT = 0.72;

/** The unpinned fallback's length per figure — count, then hold. */
const COUNT_MS = 1600;
const SEGMENT_MS = COUNT_MS / COUNT_ENDS_AT;

/**
 * How hard the painted value chases the scroll, per second. Higher tracks the
 * scroll more tightly; lower glides longer after it stops. 9 lands close
 * enough to feel attached to the wheel while still smoothing a notch out.
 */
const CHASE_RATE = 9;

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

/**
 * The value to paint at `e` of the way through the count.
 *
 * Floored at 1, because zero is not a figure. At the head of a segment the
 * count has not started, and rounding straight off the progress left the panel
 * resting on "₹0+Cr" with "0+" ghosted behind it — read as a published number
 * rather than as a count waiting to begin, which is the one thing this panel
 * must not say. The run is otherwise untouched: it still starts at the bottom
 * and lands exactly on the figure.
 */
const count = (e: number, value: number) => Math.max(1, Math.round(e * value));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * "Early signals. Serious scale." — the artboard's composition, played out
 * against the scroll.
 *
 * The section is given spare height and its panel sticks to the top, so the
 * composition holds still while the page scrolls past it and 8X's three
 * published figures count up under the reader's own scrolling. See "The pinned
 * scroll stage" in `globals.css` for the layout, and for why this is native
 * `position: sticky` rather than an intercepted scroll: the page never stops
 * responding normally to the scrollbar, the keyboard, or Page Down.
 *
 * The run is split evenly between the figures, and the caption under the
 * numeral turns over with it — each figure is a different claim, so the number
 * alone does not say what has been counted.
 *
 * Below the traced composition's height there is no pin, so the set falls back
 * to stepping through itself once on view, on a timer.
 *
 * The digits are written straight to the DOM rather than held in state: the
 * server renders the first figure resolved, so it is correct before hydration,
 * with JavaScript disabled and under `prefers-reduced-motion` — and there is no
 * render-per-frame while the page scrolls. Only the caption is React state,
 * which changes twice in a pass rather than every frame.
 *
 * The whole rotating block is hidden from assistive tech and a static line
 * carrying all three figures with their captions is exposed instead, so a
 * screen reader hears the set once rather than every intermediate frame of it.
 */
export function StatsSection() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLElement>(null);
  const figureRef = useRef<HTMLSpanElement>(null);
  const ghostRef = useRef<HTMLSpanElement>(null);

  /* Which figure is live. Mirrored in a ref so the frame loop can tell whether
     the caption actually needs a render without reading state through a stale
     closure. */
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const show = (i: number) => {
      if (indexRef.current === i) return;
      indexRef.current = i;
      setIndex(i);
    };

    const settle = () => {
      show(0);
      if (figureRef.current) figureRef.current.textContent = final(0);
      if (ghostRef.current) ghostRef.current.textContent = final(ghostOf(0));
    };

    /**
     * Paint the set at `p`, its 0..1 progress through the whole run.
     *
     * `eased` curves each figure's own count — wanted for the timed fallback,
     * which has no other shape, and not wanted when the scroll is already
     * supplying the motion.
     */
    const paint = (p: number, eased = true) => {
      const i = Math.min(Math.floor(clamp01(p) / SEGMENT), stats.length - 1);
      const within = clamp01((clamp01(p) - i * SEGMENT) / SEGMENT);
      const c = clamp01(within / COUNT_ENDS_AT);
      const e = eased ? easeOutCubic(c) : c;

      const live = stats[i];
      const behind = stats[ghostOf(i)];
      if (figureRef.current) {
        figureRef.current.textContent = format(
          count(e, live.value),
          live.prefix,
          live.suffix,
        );
      }
      if (ghostRef.current) {
        ghostRef.current.textContent = format(
          count(e, behind.value),
          behind.prefix,
          behind.suffix,
        );
      }
      show(i);
    };

    if (reduced) {
      wrap.style.removeProperty("--p");
      settle();
      return;
    }

    /* --- Pinned: the scroll position is the animation's clock -----------
       Rather than paint the raw scroll offset, a rendered value chases the
       target a fixed fraction per frame. Scroll events arrive in coarse,
       uneven jumps -- a wheel notch is tens of pixels -- and painting them
       straight through makes the figure stutter in steps. Chasing turns those
       jumps into a continuous glide that still settles exactly on target.

       Frame-rate corrected, so the glide takes the same time on a 60Hz and a
       144Hz display instead of running twice as fast on the latter. */
    const driveByScroll = () => {
      let raf = 0;
      let shown = -1; // -1 = nothing painted yet, so the first frame snaps
      let last = 0;

      /** Where the scroll actually is, 0..1 across the section's spare run. */
      const target = () => {
        const spare = wrap.offsetHeight - window.innerHeight;
        return spare > 0
          ? clamp01(-wrap.getBoundingClientRect().top / spare)
          : 1;
      };

      const frame = (now: number) => {
        const t = target();
        const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
        last = now;

        if (shown < 0) {
          shown = t;
        } else {
          /* 1 - e^(-k*dt) is the same exponential ease, sampled correctly for
             however long this frame actually took. */
          shown += (t - shown) * (1 - Math.exp(-CHASE_RATE * dt));
          if (Math.abs(t - shown) < 0.0002) shown = t;
        }

        wrap.style.setProperty("--p", shown.toFixed(4));
        /* Linear against the scroll: the reader's own movement is the easing,
           and a curve on top of it reads as the number lagging behind. */
        paint(shown, false);

        raf = requestAnimationFrame(frame);
      };

      /* The loop only runs while the section is near the viewport. */
      const observer =
        typeof IntersectionObserver === "undefined"
          ? null
          : new IntersectionObserver(
              (entries) => {
                const near = entries.some((e) => e.isIntersecting);
                if (near && !raf) {
                  last = 0;
                  raf = requestAnimationFrame(frame);
                } else if (!near && raf) {
                  cancelAnimationFrame(raf);
                  raf = 0;
                }
              },
              { rootMargin: "100% 0px" },
            );

      if (observer) observer.observe(wrap);
      else raf = requestAnimationFrame(frame);

      return () => {
        cancelAnimationFrame(raf);
        observer?.disconnect();
      };
    };

    /* --- Not pinned: step through the set once, on a timer, when it comes
       into view. One pass and then a stop, not a loop: nothing here updates
       itself for as long as the reader is on the page, so there is no
       auto-playing content to give a pause control to. */
    const stepOnce = () => {
      if (typeof IntersectionObserver === "undefined") return () => {};

      let raf = 0;
      let cancelled = false;
      const run = SEGMENT_MS * stats.length;

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          observer.disconnect();

          const start = performance.now();
          const tick = (now: number) => {
            if (cancelled) return;
            const p = Math.min((now - start) / run, 1);
            paint(p);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        },
        { threshold: 0.4 },
      );

      observer.observe(wrap);

      return () => {
        cancelled = true;
        cancelAnimationFrame(raf);
        observer.disconnect();
      };
    };

    /* The driver has to follow the pin exactly, so this is the same condition
       the stylesheet gates it on — a viewport tall enough to hold a screenful
       still, whatever its width. Read the query rather than a copy of the
       number: if the two ever disagree, the figures either count against a
       scroll that is not being held or sit frozen while the section is. */
    const pinned = window.matchMedia("(min-height: 40rem)");
    let stop = () => {};
    const attach = () => {
      stop();
      wrap.style.removeProperty("--p");
      stop = pinned.matches ? driveByScroll() : stepOnce();
    };

    attach();
    pinned.addEventListener("change", attach);

    return () => {
      pinned.removeEventListener("change", attach);
      stop();
      settle();
    };
  }, [reduced]);

  return (
    <section
      ref={wrapRef}
      aria-labelledby="stats-heading"
      className="stats-scroll"
    >
      <div className="stats-pin on-dark relative isolate overflow-hidden">
        {/* The field lives on the stage, not on the panel. It is cut to the
            stage's exact ratio, so sitting on the same box is what keeps it
            uncropped and keeps its light where the type was graded around
            it — see the pinned scroll stage in `globals.css`. */}
        <div className="stats-stage isolate">
          <Image suppressHydrationWarning
            src="/images/stats-bg.jpg"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <Reveal
            as="h2"
            id="stats-heading"
            /* No tracking: the artboard sets these at their natural widths, and
               any negative tracking measurably narrows them against it. */
            className="stats-headline text-[length:var(--text-display)] leading-none font-bold text-white"
          >
            {statsHeadline}
          </Reveal>

          {/* The outgoing figure, carried over from the artboard as a flourish.
              It has no caption, so it is decoration rather than information. */}
          <p
            aria-hidden="true"
            className="stats-ghost leading-none font-bold text-white/35 select-none"
          >
            <span ref={ghostRef}>{final(ghostOf(0))}</span>
          </p>

          <p
            aria-hidden="true"
            className="stats-figure text-[length:var(--text-stat)] leading-none font-bold text-white"
          >
            <span ref={figureRef}>{final(0)}</span>
          </p>

          <p
            aria-hidden="true"
            className="stats-label text-[length:clamp(1.125rem,0.841rem+2.2vw,3.48rem)] leading-none font-bold text-white"
          >
            {/* Keyed, so each caption plays the same arrival the rotating word
                in the manifesto does rather than swapping in place. */}
            <span key={index} className="stats-caption">
              {stats[index].label}
            </span>
          </p>

          {/* The whole set, at once and in order — see the note above. */}
          <p className="sr-only-8x">
            {stats.map((s, i) => `${final(i)}: ${s.label}.`).join(" ")}
          </p>

          <div aria-hidden="true" className="stats-hand pointer-events-none">
            <Image suppressHydrationWarning
              src="/images/robot-hand.png"
              alt=""
              width={1100}
              height={733}
              sizes="27vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* How much of the run is left, so the pin reads as a section with a
            length rather than as a stuck page. */}
        <div aria-hidden="true" className="stats-progress" />
      </div>
    </section>
  );
}
