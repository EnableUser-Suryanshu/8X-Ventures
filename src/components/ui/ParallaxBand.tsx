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

/**
 * A full-bleed photographic band that is a window onto a picture held still
 * behind the page.
 *
 * The band publishes `--par-fix`: how far the plate has to be moved, in
 * pixels, for its top to sit a tenth of a screen above the top of the viewport
 * — wherever the band itself currently is. The plate is viewport-tall and
 * reads that every frame, so it stays put on screen while the band slides over
 * it, and what changes as you scroll is which part of the photograph the band
 * is showing. That is `position: fixed` behind a window, done on a property so
 * the band keeps a normal containing block and nothing has to be clipped out
 * of the page's own stacking.
 *
 * This is the whole of the effect. Translating a plate inside the band, which
 * is what this did before, moves the picture at some fraction of scroll speed
 * and has to be pointed out to be seen; holding it still against a band that
 * moves is the thing people mean by parallax.
 *
 * It also publishes `--par`, the band's position relative to the viewport: -1
 * as it comes in at the bottom, 0 with the band centred, +1 as it leaves at the
 * top. The plate takes a small drift off that on top of the hold, and the copy
 * takes a little of it the other way, which is what separates the two into
 * layers rather than sliding a photograph about behind fixed text. `--par-mid`
 * is how nearly centred the band is — 0 at either end of the pass, 1 at the
 * middle — and the plate rides that as a slight swell, so the picture closes on
 * its framing as it arrives rather than merely sliding through it.
 *
 * Written to the element rather than held in state, so the picture tracks the
 * scroll every frame without re-rendering the band. Under
 * `prefers-reduced-motion`, before hydration and with JavaScript off, all three
 * are simply absent, the plate is the band's own size, and the band is exactly
 * what the artboard composes.
 */
export function ParallaxBand({ src, labelledBy, className, children }: ParallaxBandProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.style.removeProperty("--par");
      el.style.removeProperty("--par-mid");
      el.style.removeProperty("--par-fix");
      return;
    }

    let raf = 0;
    let running = false;

    /* Read on a frame loop rather than from scroll events: those arrive in
       coarse, uneven jumps, and a picture painted straight from them steps
       rather than drifts. The loop only runs while the band is on screen. */
    const frame = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const span = (vh + r.height) / 2;
      if (span > 0) {
        const raw = (vh / 2 - (r.top + r.height / 2)) / span;
        const p = Math.max(-1, Math.min(1, raw));
        el.style.setProperty("--par", p.toFixed(4));
        el.style.setProperty("--par-mid", (1 - Math.abs(p)).toFixed(4));
        /* The plate is laid out at the band's own top, so cancelling the
           band's distance from the top of the viewport is what pins the
           picture to the screen. The tenth of a screen on top is the overhang
           the drift and the swell are then free to move within. */
        el.style.setProperty("--par-fix", (-r.top - vh * 0.1).toFixed(2));
      }
      raf = requestAnimationFrame(frame);
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
      stop();
    };
  }, [reduced]);

  return (
    <section
      ref={ref}
      aria-labelledby={labelledBy}
      className={cn("parallax-band relative isolate overflow-hidden", className)}
    >
      {/* The plate is a screenful tall and `object-cover` scales the picture to
          fill it, which on anything but a very wide window means scaling by
          height — so the picture is laid out a good deal wider than the
          viewport and `100vw` here would ask the browser for an image a
          fraction of the size it is about to paint. The upscale that follows
          from that is the whole of the softness this band used to have. */}
      <div aria-hidden="true" className="parallax-plate -z-10">
        <Image suppressHydrationWarning src={src} alt="" fill sizes="200vw" className="object-cover" />
      </div>

      <div className="parallax-fore">{children}</div>
    </section>
  );
}
