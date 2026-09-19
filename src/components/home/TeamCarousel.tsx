"use client";

import Image from "next/image";
import { CarouselControls } from "@/components/ui/CarouselControls";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { team, teamIntro } from "@/content/home";
import { useCarousel } from "@/hooks/useCarousel";
import { cn } from "@/lib/cn";

/** Left edge of each slot, as a percentage of the 1920 artboard. Index 2 is
 *  the featured position. */
const SLOT_LEFT = [6.406, 23.021, 39.74, 61.562, 78.385];

/** The card's own width, as a percentage of the stage — the featured card's,
 *  since every card is laid out at that box and scaled down from it. */
const CARD_WIDTH = 20.208;

export function TeamCarousel() {
  const centre = Math.floor(team.length / 2);
  /* Opens on the member the artboard features in the centre slot. */
  const { index, goTo, next, prev, onKeyDown, offsetOf } = useCarousel({
    length: team.length,
    initialIndex: centre,
  });
  const active = team[index];

  return (
    <section
      aria-labelledby="team-heading"
      className="on-dark relative isolate overflow-hidden"
    >
      <Image suppressHydrationWarning src="/images/team-bg.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />

      <div className="team-stage">
        <Reveal className="team-eyebrow text-center">
          <Eyebrow tone="light">{teamIntro.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal className="team-heading text-center">
          <h2
            id="team-heading"
            className="text-[length:var(--text-display)] leading-[1.16] font-bold text-white"
          >
            {teamIntro.line1}{" "}
            <span className="block text-brand">{teamIntro.line2}</span>
          </h2>
        </Reveal>

        <Reveal className="team-body text-center">
          <p className="mx-auto max-w-[62ch] text-[length:var(--text-body-lg)] leading-[1.4] font-light text-pretty text-white">
            {teamIntro.body}
          </p>
        </Reveal>

        {/* --- Cards --- */}
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="The 8X Ventures team"
          onKeyDown={onKeyDown}
          className="team-strip"
        >
          {team.map((member, i) => {
            const slot = centre + offsetOf(i);
            const featured = i === index;
            const left = SLOT_LEFT[slot];
            /* Off-strip members are removed from layout rather than parked
               out of view, so they never widen the document. */
            if (left === undefined) return null;

            return (
              <div
                key={member.id}
                data-featured={featured}
                /* How far this card sits from the featured slot, signed. The
                   stylesheet reads it to drain the colour and the light out of
                   a card by its distance from the centre, so the strip carries
                   the eye inwards without anything having to move. */
                data-offset={offsetOf(i)}
                /* The slot as a multiple of the card's own width, so the
                   stylesheet can carry it on `translate` — a percentage
                   translate resolves against the element, not the stage, and
                   the card is exactly `CARD_WIDTH` of the stage wide. Passed
                   as a custom property rather than as `left` so the slot only
                   applies where the traced composition does: an inline `left`
                   would also shift the relatively-positioned card on narrow
                   screens. */
                style={
                  { "--slot-k": left / CARD_WIDTH } as React.CSSProperties
                }
                className={cn(
                  "team-card w-[min(78vw,320px)]",
                  featured ? "bg-gradient-to-b from-[#6FBEE6] to-[#3FA3D8]" : "bg-[#4f4f4f]",
                )}
              >
                <div className="relative min-h-0 flex-1">
                  <Image suppressHydrationWarning
                    src={member.image}
                    alt=""
                    /* A keyframed arrival would fight the card's own fade, so
                       the picture only ever crossfades in. */
                    data-img-in="fade"
                    fill
                    sizes="(max-width: 1024px) 78vw, 21vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Only the featured card carries a panel. The side cards are
                    photographs and nothing else, which is what leaves the
                    centre of the strip the only thing with anything to read on
                    it. The panel is the one the person cards on /team wear —
                    see "The panel" in globals.css; its type is sized in `cqw`,
                    so it scales with the card and not the window. */}
                {featured && (
                  <div className="tm-card-overlay">
                    <h3 className="tm-card-name">{member.name}</h3>
                    <p className="tm-card-role">{member.role}</p>
                    <p className="tm-card-highlight">{member.bio}</p>
                    <div className="tm-card-actions">
                      <UnderlineLink href={`/team/${member.id}`} tone="light">
                        Know More
                        <span className="sr-only-8x">{` about ${member.name}`}</span>
                      </UnderlineLink>
                      <UnderlineLink href={member.linkedin} tone="light">
                        LinkedIn
                        <span className="sr-only-8x">{` profile for ${member.name}`}</span>
                      </UnderlineLink>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* The stage positions the strip and the controls separately, so they
            cannot share a wrapper. The same key handler is attached to both so
            arrow keys work wherever focus sits within the carousel. */}
        <div className="team-controls" onKeyDown={onKeyDown}>
          <CarouselControls
            labels={team.map((m) => `${m.name}, ${m.role}`)}
            index={index}
            onPrev={prev}
            onNext={next}
            onSelect={goTo}
            subject="team member"
            tone="light"
          />
          <p aria-live="polite" className="sr-only-8x">
            {`Showing ${active.name}, ${active.role}. ${index + 1} of ${team.length}.`}
          </p>
        </div>

        <Reveal className="team-cta mt-10 flex justify-center lg:mt-0">
          <UnderlineLink href={teamIntro.cta.href} tone="light">
            {teamIntro.cta.label}
          </UnderlineLink>
        </Reveal>
      </div>
    </section>
  );
}
