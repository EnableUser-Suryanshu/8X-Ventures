"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type ParallaxBandProps = {
  /** The full-bleed photograph behind the band. Decorative, so it takes no alt. */
  src: string;
  /** `id` of the heading the band is named by. */
  labelledBy: string;
  className?: string;
  children: ReactNode;
};

/* The motion, in one place.

   These used to live in the stylesheet as percentages inside the transform.
   They are here now because of what that cost per frame — see the note on
   the loop below — and because a percentage in a transform is a share of the
   element's own box, which is a number this file already has. */

/** How far above the viewport the plate's top is held, in screens. The rest
 *  of its overhang falls below, and is what the drift and the swell move
 *  within without ever bringing an edge into view. */
const OVERHANG = 0.1;
/** The drift, as a share of the plate: a twenty-fifth either side of the
 *  hold on the window, an eighth of the shorter plate below it. Enough that
 *  the picture does not read as glued to the glass; not so much that it
 *  undoes the hold, which is the whole effect. */
const DRIFT_WIDE = 0.04;
const DRIFT_NARROW = 0.12;
/** The swell: widest as the band arrives, gone by the time it is centred, so
 *  the picture settles onto its framing at the moment it is looked at. */
const SWELL = 0.05;
/** The copy travels against the picture by a fraction of the band's own
 *  height. That opposition is what actually reads as depth — the eye measures
 *  the picture against the heading in front of it, not against the band's
 *  edges — and it is small enough that the traced composition still lands
 *  where it was measured. */
const FORE = -0.08;

/** The width the window effect starts at: the artboard's own. Matches the
 *  `(width >= 64rem)` block that gives the plate its viewport height. */
const WIDE = "(min-width: 64rem)";

/**
 * A full-bleed photographic band that is a window onto a picture held still
 * behind the page.
 *
 * The plate is moved so its top sits a tenth of a screen above the top of the
 * viewport, wherever the band currently is. It is viewport-tall and re-reads
 * that every frame, so it stays put on screen while the band slides over it,
 * and what changes as you scroll is which part of the photograph the band is
 * showing. That is `position: fixed` behind a window, done on a transform so
 * the band keeps a normal containing block and nothing has to be clipped out
 * of the page's own stacking.
 *
 * On top of the hold the plate takes a small drift and a slight swell, and the
 * copy takes a little of the drift the other way, which is what separates the
 * two into layers rather than sliding a photograph about behind fixed text.
 *
 * Under `prefers-reduced-motion`, before hydration and with JavaScript off,
 * none of it is applied: the plate is the band's own size and the band is
 * exactly what the artboard composes.
 */
export function ParallaxBand({ src, labelledBy, className, children }: ParallaxBandProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const foreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const plate = plateRef.current;
    const fore = foreRef.current;
    if (!el || !plate || !fore) return;

    if (reduced) {
      plate.style.transform = "";
      fore.style.transform = "";
      return;
    }

    /* Heights are read when they change, not per frame. They are only needed
       to turn the shares above into pixels, and a ResizeObserver says when
       that answer is stale far more cheaply than measuring every frame. */
    let plateH = plate.offsetHeight;
    let foreH = fore.offsetHeight;
    const sizes = new ResizeObserver(() => {
      plateH = plate.offsetHeight;
      foreH = fore.offsetHeight;
    });
    sizes.observe(plate);
    sizes.observe(fore);

    const wide = window.matchMedia(WIDE);

    let raf = 0;
    let running = false;
    /* What was last written. A scroll that has not moved the band — a
       horizontal one, a rubber-band at the end of the page, a frame where
       nothing changed — then costs nothing at all. */
    let lastPlate = "";
    let lastFore = "";

    /* Read on a frame loop rather than from scroll events: those arrive in
       coarse, uneven jumps, and a picture painted straight from them steps
       rather than drifts. The loop only runs while the band is on screen.
       Every frame reads the band's box and writes one transform to each of
       two elements, in that order, so there is a single layout flush.

       It used to publish three custom properties on the section instead, and
       let the stylesheet compose them into a transform. That is the expensive
       shape: an unregistered custom property is an inherited token, so each
       write invalidated style for the whole band including the heading and
       the copy inside it, and the `calc()` reading it had a percentage in it,
       which cannot be resolved without the element's box. Writing the
       finished transform is one style mutation on one element with nothing to
       resolve and no subtree to dirty. */
    const frame = () => {
      raf = requestAnimationFrame(frame);

      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const span = (vh + r.height) / 2;
      if (span <= 0) return;

      const p = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / span));

      let next: string;
      if (wide.matches) {
        /* The plate is laid out at the band's own top, so cancelling the
           band's distance from the top of the viewport is what pins the
           picture to the screen. */
        const hold = -r.top - vh * OVERHANG;
        const swell = 1 + Math.abs(p) * SWELL;
        next = `translate3d(0,${(hold + p * plateH * DRIFT_WIDE).toFixed(2)}px,0) scale(${swell.toFixed(4)})`;
      } else {
        next = `translate3d(0,${(p * plateH * DRIFT_NARROW).toFixed(2)}px,0)`;
      }
      if (next !== lastPlate) {
        plate.style.transform = next;
        lastPlate = next;
      }

      const f = `translate3d(0,${(p * foreH * FORE).toFixed(2)}px,0)`;
      if (f !== lastFore) {
        fore.style.transform = f;
        lastFore = f;
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      /* A little early, so the picture is already in the right place by the
         time the band's first pixel appears. */
      { rootMargin: "15% 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      sizes.disconnect();
      stop();
      plate.style.transform = "";
      fore.style.transform = "";
    };
  }, [reduced]);

  return (
    <section
      ref={ref}
      aria-labelledby={labelledBy}
      className={cn("parallax-band relative isolate overflow-hidden", className)}
    >
      {/* `object-cover` scales the picture to fill the plate, and on anything
          but a very wide window that means scaling by height — so the picture
          is laid out wider than the viewport and `100vw` would ask the browser
          for a fraction of what it is about to paint. The two figures are the
          two plates: near the band's own height below the artboard's width,
          and a screen and a third of it above, where the picture is painted
          about 1.74 times the window's height across. */}
      <div ref={plateRef} aria-hidden="true" className="parallax-plate -z-10">
        <Image
          suppressHydrationWarning
          src={src}
          alt=""
          fill
          sizes="(max-width: 1023px) 140vw, 175vw"
          className="object-cover"
        />
      </div>

      <div ref={foreRef} className="parallax-fore">
        {children}
      </div>
    </section>
  );
}
