"use client";

import { useEffect, useRef } from "react";

import { CarouselControls } from "@/components/ui/CarouselControls";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { journey, journeyIntro } from "@/content/home";
import { useCarousel } from "@/hooks/useCarousel";
import { StageIcon } from "@/components/home/StageIcon";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* --------------------------------------------------------------------------
   The arc

   Node centres traced from the source artboard fall on the parabola
   y = 232 − 0.00033125·(x − 960)², plotted in a 1920 × 420 viewBox whose
   origin sits at y = −80. The connecting line is the equivalent quadratic
   Bézier through the same vertex.
   -------------------------------------------------------------------------- */

const VIEW = { w: 1920, h: 420, top: -80 };
const NODE_X = [160, 380, 620, 960, 1300, 1540, 1760];
const arcY = (x: number) => 232 - 0.00033125 * (x - 960) ** 2;

const NODES = NODE_X.map((x) => ({
  x,
  y: arcY(x),
  leftPct: (x / VIEW.w) * 100,
  topPct: ((arcY(x) - VIEW.top) / VIEW.h) * 100,
}));

/** A resting node against the featured one: the artboard's 3.45% over 7.2%.
 *  Every node is laid out at the larger size and scaled to this, so the size
 *  change is a transform rather than a width and costs no layout. */
const NODE_SCALE = 3.45 / 7.2;

const ARC_PATH = `M 0 ${arcY(0).toFixed(1)} Q 960 ${(4 * 232 - 2 * arcY(0)) / 2} 1920 ${arcY(0).toFixed(1)}`;

/** Shortest signed distance from `from` to `to` around a ring of `length`. */
const ringOffset = (from: number, to: number, length: number) => {
  let d = to - from;
  if (d > length / 2) d -= length;
  if (d < -length / 2) d += length;
  return d;
};


/* -------------------------------------------------------------------------- */

export function FounderJourney() {
  const { index, previousIndex, goTo, next, prev, onKeyDown, offsetOf } = useCarousel({
    length: journey.length,
  });

  const active = journey[index];
  const centre = Math.floor(journey.length / 2);
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  /* `autoPlay` is what actually starts the loop; this is the retry for the
     browsers that decline it on first paint and then allow it once the
     element has settled. `catch` because a refused play() rejects, and a
     decorative ribbon that will not start is not worth an unhandled error. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;
    video.play().catch(() => {});
  }, [reduced]);

  /* The arc has one slot per stage, so advancing recycles the node that falls
     off one end round to the other. Animating `left` across that wrap would
     fly the node back over the whole arc, so it is repositioned without a
     transition while every other node glides one slot. Every node shifts by
     `-step` slots; the ones that do not are the ones that wrapped. */
  const step = ringOffset(previousIndex, index, journey.length);

  return (
    /* Ground set to the loop's own plate colour (#F0F0F1, measured off the
       rendered frame) so the video does not read as a panel laid on the
       section. */
    <section aria-labelledby="journey-heading" className="relative overflow-hidden bg-[#F0F0F1]">
      <div className="container-8x pt-20 pb-16 lg:pt-32 lg:pb-24">
        {/* Above the ribbon: `float-3d` lifts the loop by up to 1.75rem, which
            is enough to carry its plate over the headline's last line. */}
        <Reveal className="relative z-10 text-center">
          <Eyebrow>{journeyIntro.eyebrow}</Eyebrow>
          <h2
            id="journey-heading"
            className="mt-4 text-[length:var(--text-display)] leading-[1.1] font-bold tracking-normal text-balance text-ink-900"
          >
            {journeyIntro.line1}{" "}
            <span className="text-brand lg:block">{journeyIntro.line2}</span>
          </h2>
        </Reveal>

        {/* --- Floating ribbon (MP4 loop) --- */}
        <Reveal variant="scale" delay={120} className="mx-auto mt-8 w-[78%] max-w-[900px] lg:mt-2">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            preload="auto"
            aria-hidden="true"
            className="journey-ribbon animate-float-3d h-auto w-full"
          >
            <source src="/videos/loop-02.mp4" type="video/mp4" />
          </video>
        </Reveal>

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Founder journey stages"
          onKeyDown={onKeyDown}
          className="relative"
        >
          {/* --- Arc (wide screens) --------------------------------------
              The curve itself is decorative; the buttons layered over it are
              the real controls and carry the accessible names. --- */}
          <div
            className="journey-arc relative -mt-10 hidden w-full lg:block"
            style={{ aspectRatio: `${VIEW.w} / ${VIEW.h}` }}
          >
            <svg
              viewBox={`0 ${VIEW.top} ${VIEW.w} ${VIEW.h}`}
              aria-hidden="true"
              focusable="false"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <path d={ARC_PATH} fill="none" stroke="#9aa4ad" strokeWidth="1.2" />
            </svg>

            {journey.map((stage, i) => {
              const slot = centre + offsetOf(i);
              const pos = NODES[slot];
              if (!pos) return null;
              const isActive = i === index;
              const wrapped =
                slot - (centre + ringOffset(previousIndex, i, journey.length)) !== -step;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={isActive ? "true" : undefined}
                  /* A node that wrapped round the ring is put in its new place
                     without a transition; see `step` above. */
                  data-wrapped={wrapped ? "" : undefined}
                  className={cn(
                    "journey-node absolute top-0 left-0 grid place-items-center rounded-full",
                    /* Every node is laid out at the featured size and the
                       smaller ones are scaled down, so the size change rides
                       the same transform as the move. `aspect-square` keeps
                       them circular whatever the strip's ratio. */
                    "aspect-square w-[7.2%]",
                    isActive
                      ? "bg-[radial-gradient(circle_at_32%_28%,#7fc0f8_0%,#4b95e5_62%,#3b84d6_100%)] text-white"
                      : "bg-[radial-gradient(circle_at_32%_28%,#a9d4ff_0%,#5aa8f0_55%,#3f8fdd_100%)] hover:ring-4 hover:ring-brand/35",
                  )}
                  style={
                    {
                      "--node-x": pos.leftPct,
                      "--node-y": pos.topPct,
                      "--node-scale": isActive ? 1 : NODE_SCALE,
                    } as React.CSSProperties
                  }
                >
                  {isActive && <StageIcon icon={stage.icon} className="w-[52%]" />}
                  <span className="sr-only-8x">
                    {isActive
                      ? `Current stage: ${stage.title}`
                      : `Show stage ${i + 1}: ${stage.title}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* --- Compact indicator (small screens) --- */}
          <div className="mt-6 flex justify-center lg:hidden">
            <span
              aria-hidden="true"
              className="grid h-20 w-20 place-items-center rounded-full bg-[radial-gradient(circle_at_32%_28%,#7fc0f8_0%,#4b95e5_62%,#3b84d6_100%)] text-white"
            >
              <StageIcon icon={active.icon} className="h-9 w-9" />
            </span>
          </div>

          {/* --- Active stage --- */}
          <Reveal delay={160} className="mt-8 text-center lg:mt-2">
            <h3 className="text-[length:var(--text-display-sm)] leading-tight font-bold tracking-normal text-balance text-brand">
              {active.title}
            </h3>
            <p className="mx-auto mt-5 max-w-[52ch] text-[length:var(--text-body-lg)] leading-[1.4] font-light text-pretty text-ink-900">
              {active.description}
            </p>
          </Reveal>

          <CarouselControls
            className="mt-8 lg:mt-10"
            labels={journey.map((s) => s.title)}
            index={index}
            onPrev={prev}
            onNext={next}
            onSelect={goTo}
            subject="journey stage"
          />

          <p aria-live="polite" className="sr-only-8x">
            {`Stage ${index + 1} of ${journey.length}: ${active.title}. ${active.description}`}
          </p>
        </div>
      </div>
    </section>
  );
}
