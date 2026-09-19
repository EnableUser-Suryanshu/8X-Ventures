"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { stats, statsHeadline } from "@/content/home";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const format = (n: number, prefix = "", suffix = "") =>
  `${prefix}${n.toLocaleString("en-IN")}${suffix}`;

/**
 * How much of a block's own segment each handover takes.
 *
 * A block leaves over the last `HANDOVER` of its segment and the next arrives
 * over the same stretch, so the two cross rather than following one another —
 * without the overlap there is a moment with nothing on the panel at all. The
 * rest of the segment is a hold, which is what gives each figure time to be
 * read rather than merely seen going past.
 */
const HANDOVER = 0.22;

/** How far a block sits from its resting place while it is off. */
const OFFSET = 1;

/**
 * How hard the painted position chases the scroll, per second. Higher tracks
 * the scroll more tightly; lower glides longer after it stops. 9 lands close
 * enough to feel attached to the wheel while still smoothing a notch out.
 */
const CHASE_RATE = 9;

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

/**
 * "Early signals. Serious scale." — 8X's three published figures, carried past
 * on the reader's own scrolling.
 *
 * The section is given spare height and its panel sticks to the top, so the
 * composition holds still while the page scrolls through it. The figures are
 * stacked in one grid cell and run as a conveyor: each rises into place from
 * below, holds while it is read, and carries on up and out as the next one
 * arrives. Nothing counts — the numbers are set as published and it is the
 * block that moves, which is what keeps the panel a thing being read rather
 * than a meter being watched.
 *
 * See "The pinned scroll stage" in `globals.css` for the layout, and for why
 * this is native `position: sticky` rather than an intercepted scroll: the
 * page never stops responding normally to the scrollbar, the keyboard, or
 * Page Down.
 *
 * Without the pin — reduced motion, no JavaScript, or a viewport too short to
 * hold a screenful still — the conveyor does not apply and the three simply
 * list down the panel, which is the whole set at once and needs no scrolling
 * to reach. A screen reader gets that list either way: the blocks are an
 * ordinary `<ul>` and stay in the accessibility tree whatever the panel is
 * doing, so nothing here is announced twice or hidden from it.
 *
 * Positions are written to the elements rather than held in state, so the
 * conveyor tracks the scroll every frame without re-rendering the section.
 */
export function StatsSection() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    /** Back to the artboard's composition: the first figure, in place. */
    const settle = () => {
      blocksRef.current.forEach((el, i) => {
        if (!el) return;
        el.style.setProperty("--o", i === 0 ? "1" : "0");
        el.style.setProperty("--y", i === 0 ? "0" : String(OFFSET));
      });
    };

    /**
     * Paint the conveyor at `p`, its 0..1 progress through the whole run.
     *
     * `d` is a block's progress through its own segment: 0 as it settles, 1 as
     * it has finished leaving. The first block never plays its arrival and the
     * last never plays its exit — the panel opens on one figure and rests on
     * another, rather than fading up from nothing and out to nothing.
     */
    const paint = (p: number) => {
      const n = stats.length;
      const last = n - 1;

      blocksRef.current.forEach((el, i) => {
        if (!el) return;
        let d = clamp01(p) * n - i;
        if (i === 0) d = Math.max(d, 0);
        if (i === last) d = Math.min(d, 1 - HANDOVER);

        let o: number;
        let y: number;
        if (d < -HANDOVER) {
          o = 0;
          y = OFFSET;
        } else if (d < 0) {
          const t = (d + HANDOVER) / HANDOVER;
          o = t;
          y = (1 - t) * OFFSET;
        } else if (d < 1 - HANDOVER) {
          o = 1;
          y = 0;
        } else if (d < 1) {
          const t = (d - (1 - HANDOVER)) / HANDOVER;
          o = 1 - t;
          y = -t * OFFSET;
        } else {
          o = 0;
          y = -OFFSET;
        }

        el.style.setProperty("--o", o.toFixed(3));
        el.style.setProperty("--y", y.toFixed(3));
      });
    };

    if (reduced) {
      wrap.style.removeProperty("--p");
      settle();
      return;
    }

    /* --- The scroll position is the animation's clock --------------------
       Rather than paint the raw scroll offset, a rendered value chases the
       target a fixed fraction per frame. Scroll events arrive in coarse,
       uneven jumps -- a wheel notch is tens of pixels -- and painting them
       straight through makes the handover stutter in steps. Chasing turns
       those jumps into a continuous glide that still settles exactly on
       target.

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
        paint(shown);

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

    /* The driver has to follow the pin exactly, so this is the same condition
       the stylesheet gates it on — a viewport tall enough to hold a screenful
       still, whatever its width. Read the query rather than a copy of the
       number: if the two ever disagree, the conveyor either runs against a
       scroll that is not being held or sits frozen while the section is.

       Unpinned there is nothing to drive: the blocks are an ordinary list and
       every figure is already on the panel. */
    const pinned = window.matchMedia("(min-height: 40rem)");
    let stop = () => {};
    const attach = () => {
      stop();
      wrap.style.removeProperty("--p");
      if (pinned.matches) {
        stop = driveByScroll();
      } else {
        stop = () => {};
        settle();
      }
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

          <div className="stats-content">
            <Reveal
              as="h2"
              id="stats-heading"
              /* No tracking: the artboard sets these at their natural widths,
                 and any negative tracking measurably narrows them against it. */
              className="stats-headline text-[length:var(--text-display)] leading-none font-bold text-white"
            >
              {statsHeadline}
            </Reveal>

            {/* A list, and left as one. Pinned, the blocks are stacked in a
                single grid cell and only one is on screen at a time — but
                opacity is not `visibility`, so all three stay in the
                accessibility tree and the set is read in full however the
                panel happens to be behaving. */}
            <ul role="list" className="stats-blocks">
              {stats.map((stat, i) => (
                <li
                  key={stat.label}
                  ref={(el) => {
                    blocksRef.current[i] = el;
                  }}
                  className="stats-block"
                >
                  <p className="stats-figure text-[length:var(--text-stat)] leading-none font-bold text-white">
                    {format(stat.value, stat.prefix, stat.suffix)}
                  </p>
                  <p className="stats-label text-[length:clamp(1.125rem,0.841rem+2.2vw,3.48rem)] leading-none font-bold text-white">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

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
