"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CarouselControls } from "@/components/ui/CarouselControls";
import { type LpDayEdition } from "@/content/lpday";

/**
 * One edition's gallery: the year, its standfirst, and the photographs on a
 * strip the reader can move.
 *
 * The strip is a real scroll container with snap points rather than a
 * transformed track. That way it clamps at both ends on its own however many
 * photographs there are and however many fit at the current width, it can be
 * swiped or trackpad-scrolled directly, and the arrows and the segmented
 * track are just another way to drive the same thing. `CarouselControls` is
 * the site's own, so this reads exactly like the other carousels.
 *
 * The controls are drawn under every edition, as the frame draws them — they
 * are part of the band's composition, not something that comes and goes with
 * the window width.
 */
/** One mark on the track: where the strip stops, and what is on screen there. */
type Stop = { left: number; from: number; to: number };

export function LpDayGallery({ edition }: { edition: LpDayEdition }) {
  const stripRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [stops, setStops] = useState<Stop[]>([{ left: 0, from: 0, to: 0 }]);

  /* Where the strip can actually stop, which is not once per photograph.
     The track used to draw one segment for each, and four of the eight in an
     edition were dead: the strip is four wide, so the fifth photograph is
     the last that can reach the left edge and the arrows ran out three
     short of the end of the bar. The stops are measured instead — every
     photograph that can lead, plus the end of the scroll if it lies past the
     last of them — so every mark on the track goes somewhere, and the last
     one is the end of the strip. Re-measured on resize, because how many fit
     is what decides how many stops there are. */
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const measure = () => {
      const kids = [...strip.children] as HTMLElement[];
      if (!kids.length) return;
      const left = (el: HTMLElement) => el.offsetLeft - strip.offsetLeft;
      const max = strip.scrollWidth - strip.clientWidth;

      const lefts: number[] = [];
      for (const el of kids) if (left(el) <= max + 1) lefts.push(left(el));
      if (max - (lefts.at(-1) ?? 0) > 2) lefts.push(max);

      setStops(
        lefts.map((l) => {
          /* What a reader sees standing at this stop: the first photograph
             at or past the left edge, and the last one wholly inside the
             right. That is what the segment's label promises. */
          const from = Math.max(0, kids.findIndex((el) => left(el) + 1 >= l));
          let to = from;
          for (let i = from; i < kids.length; i++) {
            if (left(kids[i]) + kids[i].offsetWidth <= l + strip.clientWidth + 1) to = i;
          }
          return { left: l, from, to };
        }),
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(strip);
    return () => ro.disconnect();
  }, [edition.images.length]);

  const scrollTo = useCallback(
    (i: number) => {
      const strip = stripRef.current;
      const stop = stops[i];
      if (!strip || !stop) return;
      strip.scrollTo({ left: stop.left, behavior: "smooth" });
    },
    [stops],
  );

  /* Which stop the strip is nearest — the one the controls consider current.
     Read from the scroll rather than stored alongside it, so a swipe and a
     button press can never disagree. */
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    let frame = 0;
    const read = () => {
      frame = 0;
      let nearest = 0;
      let best = Infinity;
      for (const [i, stop] of stops.entries()) {
        const d = Math.abs(stop.left - strip.scrollLeft);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      setIndex(nearest);
    };

    read();
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    strip.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      strip.removeEventListener("scroll", onScroll);
    };
  }, [stops]);

  const labels = stops.map(({ from, to }) =>
    from === to ? `Photograph ${from + 1}` : `Photographs ${from + 1} to ${to + 1}`,
  );

  /* --- the enlarged view ------------------------------------------------
     A photograph on a strip is small by necessity; opening it is the only way
     to actually look at one. `showModal` carries the focus trap, the Escape
     key and the inert page behind it, so the only things left to add are the
     step buttons and the arrow keys, which a gallery is expected to answer to.
     Stepping here also moves the strip underneath, so closing leaves the
     reader where the photograph they were looking at actually is. */
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState<number | null>(null);

  const openAt = useCallback((i: number) => {
    setZoomed(i);
    dialogRef.current?.showModal();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setZoomed((current) =>
        current === null
          ? current
          : (current + delta + edition.images.length) % edition.images.length,
      );
    },
    [edition.images.length],
  );

  /* The strip follows the enlarged view rather than the updater above moving
     it: a state updater has to be free of side effects — React is entitled to
     call it twice, or not at all — and one written there simply did not run. */
  useEffect(() => {
    if (zoomed !== null) scrollTo(zoomed);
  }, [zoomed, scrollTo]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClose = () => setZoomed(null);
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  const shown = zoomed === null ? null : edition.images[zoomed];

  return (
    <div className="lp-edition">
      <div className="lp-edition-head">
        <h3 className="lp-edition-year">
          <span>LP Day</span> <span className="lp-accent">{edition.year}</span>
        </h3>
        <p className="lp-edition-body">{edition.body}</p>
      </div>

      <ul role="list" ref={stripRef} className="lp-strip">
        {edition.images.map((img, i) => (
          /* The slide keeps its own class: it is the strip's grid child and
             carries the snap point, the ratio and the corner radius. The
             button is the whole of it, laid over the top. */
          <li key={img.src} className="lp-slide">
            <button
              type="button"
              onClick={() => openAt(i)}
              className="lp-slide-open"
              aria-label={`${img.alt} — view larger`}
            >
              <Image suppressHydrationWarning
                src={img.src}
                alt=""
                fill
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 21vw"
                className="lp-slide-img"
              />
            </button>
          </li>
        ))}
      </ul>

      <CarouselControls
        labels={labels}
        index={index}
        onPrev={() => scrollTo(Math.max(0, index - 1))}
        onNext={() => scrollTo(Math.min(stops.length - 1, index + 1))}
        onSelect={scrollTo}
        subject={`LP Day ${edition.year} photographs`}
        className="lp-controls"
      />

      <dialog
        ref={dialogRef}
        aria-label={`LP Day ${edition.year} photographs, enlarged`}
        className="lightbox lightbox--photo"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="lightbox-close"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only-8x">Close</span>
        </button>

        {shown && (
          <figure className="lp-lightbox-figure">
            <Image suppressHydrationWarning
              src={shown.src}
              alt={shown.alt}
              width={992}
              height={744}
              sizes="(max-width: 1024px) 92vw, 60rem"
            />

            {edition.images.length > 1 && (
              <>
                <button
                  type="button"
                  data-dir="prev"
                  onClick={() => step(-1)}
                  className="lp-lightbox-step"
                >
                  <span aria-hidden="true">‹</span>
                  <span className="sr-only-8x">Previous photograph</span>
                </button>
                <button
                  type="button"
                  data-dir="next"
                  onClick={() => step(1)}
                  className="lp-lightbox-step"
                >
                  <span aria-hidden="true">›</span>
                  <span className="sr-only-8x">Next photograph</span>
                </button>
              </>
            )}
          </figure>
        )}
        {shown && (
          <p className="lp-lightbox-caption">
            {shown.alt}
            <span className="sr-only-8x">{` (${(zoomed ?? 0) + 1} of ${edition.images.length})`}</span>
          </p>
        )}
      </dialog>
    </div>
  );
}
