"use client";

import Image from "next/image";
import Link from "next/link";
import { MentorRail } from "@/components/team/MentorRail";
import { ScrollPin } from "@/components/ui/ScrollPin";
import { Reveal } from "@/components/ui/Reveal";
import { PointerField } from "@/components/ui/PointerField";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { teamCta, teamGroup, teamHero, teamMentors, teamPartners, type Person } from "@/content/team";
import { cn } from "@/lib/cn";

/* The inner pages' scale — 27 / 32 / 82 at 1920. */
const EYEBROW = "text-[length:var(--ab-eyebrow)]";
const BODY = "text-[length:var(--ab-body)]";
const DISPLAY = "text-[length:var(--ab-display)] leading-[1.2] font-bold tracking-normal";

/**
 * A portrait card: the cut-out portrait, and a panel carrying the name, the
 * role, a line of biography and the two ways on, which arrives on hover and on
 * keyboard focus. It is the same panel the featured card in the homepage strip
 * wears — see "The panel" in `globals.css`.
 *
 * The card is the grid's own item, not wrapped in one — the grids size their
 * children with `.tm-pt-grid .tm-card { width: ... }`, so an intermediate
 * element takes that width instead and the card, which has only an aspect
 * ratio, collapses to nothing.
 *
 * Two links go to the profile and only one of them is real. The card-sized one
 * is there so that clicking anywhere works, and is hidden from assistive tech
 * and taken out of the tab order; "Know More" in the panel is the one a screen
 * reader and a keyboard find. That way the card is wholly clickable without
 * announcing the same destination twice, and without an anchor nested inside
 * another.
 */
function PersonCard({
  person,
  variant,
  index = 0,
}: {
  person: Person;
  variant: "partner" | "team";
  /** Position in its grid, so a row of cards arrives one after another. */
  index?: number;
}) {
  return (
    <Reveal
      as="article"
      variant="card"
      delay={Math.min(index, 5) * 90}
      className={cn("tm-card", variant === "team" && "tm-card-sm")}
    >
      {/* The whole card, as a target for the pointer only. See `.tm-card-hit`
          in globals.css for why it is hidden from assistive tech and out of
          the tab order: "Know More" below goes to the same place, and is the
          one a screen reader and a keyboard should find. */}
      <Link
        href={`/team/${person.id}`}
        aria-hidden="true"
        tabIndex={-1}
        className="tm-card-hit"
      />

      <div className="tm-card-photo">
        <Image suppressHydrationWarning
          src={person.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 45vw, 21vw"
          className="object-contain object-bottom"
        />
      </div>

      <div className="tm-card-overlay">
        <h3 className="tm-card-name">{person.name}</h3>
        <p className="tm-card-role">{person.role}</p>
        <p className="tm-card-highlight">{person.bio}</p>
        <div className="tm-card-actions">
          <UnderlineLink href={`/team/${person.id}`} tone="light">
            Know More
            <span className="sr-only-8x">{` about ${person.name}`}</span>
          </UnderlineLink>
          <UnderlineLink href={person.linkedin} tone="light">
            LinkedIn
            <span className="sr-only-8x">{` profile for ${person.name}`}</span>
          </UnderlineLink>
        </div>
      </div>
    </Reveal>
  );
}

export function TeamPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        aria-labelledby="team-heading"
        data-tilt="scene"
        className="tm-hero-section relative overflow-x-clip bg-white"
      >
        <div className="tm-stage tm-hero">
          <div className="tm-hero-copy at-col">
            <Reveal as="h1" id="team-heading" className={cn("text-ink-950", DISPLAY)}>
              {teamHero.line1} <span className="block text-brand-sky">{teamHero.line2}</span>
            </Reveal>

            <Reveal className="at-body">
              <p className={cn("leading-[1.2] font-light text-pretty text-ink-800", BODY)}>
                {teamHero.body}
              </p>
            </Reveal>
          </div>

          {/* Runs on down into the band below, as in the artboard */}
          <div
            aria-hidden="true"
            className="tm-at tm-hero-engine pointer-events-none z-10 max-lg:absolute max-lg:-top-6 max-lg:right-0 max-lg:w-[52%]"
          >
            <Image suppressHydrationWarning
              src="/images/team-engine.png"
              alt=""
              width={1500}
              height={1500}
              priority
              sizes="(max-width: 1024px) 52vw, 57vw"
              className="art-3d animate-float-3d h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= PARTNERS & BOARD ================= */}
      <section aria-labelledby="partners-heading" className="on-dark relative isolate overflow-hidden bg-[#144a7e]">
        <div aria-hidden="true" className="tm-partners-bg">
          <Image suppressHydrationWarning src="/images/team-gradient.jpg" alt="" width={2400} height={1600} sizes="140vw" priority />
        </div>

        <div className="tm-stage tm-partners">
          <div className="tm-pt-copy at-col text-center">
            <Reveal>
              <p className={cn("font-bold tracking-[0.02em] text-brand-sky uppercase", EYEBROW)}>
                {teamPartners.eyebrow}
              </p>
            </Reveal>

            <Reveal
              as="h2"
              id="partners-heading"
              className={cn("at-title text-white", DISPLAY)}
            >
              {teamPartners.line1} <span className="text-brand-sky">{teamPartners.line2}</span>
            </Reveal>

            <Reveal className="at-body tm-pt-body">
              <p className={cn("leading-[1.35] font-light text-pretty text-white/95", BODY)}>
                {teamPartners.body}
              </p>
            </Reveal>

            <div className="at-tail tm-pt-grid">
              {teamPartners.people.map((p, i) => (
                <PersonCard key={p.id} person={p} variant="partner" index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE TEAM ================= */}
      <section aria-labelledby="the-team-heading" className="relative bg-white">
        <div className="tm-stage tm-group">
          <div className="tm-gp-copy at-col text-center">
            <Reveal>
              <p className={cn("font-bold tracking-[0.02em] text-brand uppercase", EYEBROW)}>
                {teamGroup.eyebrow}
              </p>
            </Reveal>

            <Reveal
              as="h2"
              id="the-team-heading"
              className={cn("at-title text-ink-950", DISPLAY)}
            >
              {teamGroup.line1} <span className="text-brand-sky">{teamGroup.line2}</span>
            </Reveal>

            <Reveal className="at-body">
              <p className={cn("leading-[1.2] font-light text-pretty text-ink-800", BODY)}>
                {teamGroup.body}
              </p>
            </Reveal>

            <div className="at-tail tm-gp-grid">
              {teamGroup.people.map((p, i) => (
                <PersonCard key={p.id} person={p} variant="team" index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENTORS =================
          Held while its five bands are read, the same way the philosophy
          section on `/about` is — the list and the section are one movement. */}
      <ScrollPin
        labelledBy="mentors-heading"
        className="tm-mt-pin on-dark bg-[#023363]"
        /* The band's blue belongs on the stage as well as the section, and not
           for tidiness: the infinity plate is `mix-blend-mode: screen`, which
           drops its black ground out against whatever is behind it. The stage
           is `position: sticky`, so it forms a stacking context of its own and
           the blend can only see backdrop inside it — with the colour left on
           the section outside, the plate had nothing to lighten against and
           its ground showed as a black block. The section keeps it too, for
           the runway either side of the pinned screenful. */
        stageClassName="isolate bg-[#023363]"
      >
        {/* Inside the band, not the stage. The artboard places it as a share
            of this band — 8.63% down, 50.94% wide — and the pinned stage is a
            whole viewport, so hanging it off the stage sized and placed it
            against the wrong box entirely. */}
        <div className="tm-stage tm-mentor-band">
          <div aria-hidden="true" className="tm-mentors-art">
            <Image suppressHydrationWarning
              src="/images/team-infinity.jpg"
              alt=""
              width={1200}
              height={1500}
              sizes="(max-width: 1024px) 80vw, 51vw"
              className="h-auto w-full"
            />
          </div>

          <div className="tm-at tm-mt-copy at-col">
            <Reveal>
              <p className={cn("font-bold tracking-[0.02em] text-brand-sky uppercase", EYEBROW)}>
                {teamMentors.eyebrow}
              </p>
            </Reveal>

            <Reveal
              as="h2"
              id="mentors-heading"
              className={cn("at-title text-white", DISPLAY)}
            >
              {teamMentors.line1} <span className="block">{teamMentors.line2}</span>
            </Reveal>

            <Reveal delay={120} className="at-body tm-mt-list">
              <MentorRail />
            </Reveal>

            <Reveal className="at-tail">
              <p className="tm-mt-closing-text font-bold text-white">
                {teamMentors.closing1}
                <span className="block">{teamMentors.closing2}</span>
              </p>
            </Reveal>
          </div>
        </div>
      </ScrollPin>

      {/* ================= CLOSING ================= */}
      <section aria-labelledby="team-cta-heading" className="on-dark relative isolate overflow-hidden bg-[#0096d0]">
        <div aria-hidden="true" className="tm-cta-bg">
          <Image suppressHydrationWarning src="/images/team-gradient.jpg" alt="" width={2400} height={1600} sizes="180vw" />
        </div>
        <PointerField />

        <div className="tm-stage tm-cta">
          <div className="tm-cta-copy at-col text-center">
            <Reveal
              as="h2"
              id="team-cta-heading"
              className="tm-cta-title leading-[1.2] text-white"
            >
              <span className="block font-light">{teamCta.line1}</span>
              <span className="block font-bold">{teamCta.line2}</span>
            </Reveal>

            <Reveal className="at-tail flex justify-center">
              <UnderlineLink href={teamCta.link.href} tone="light">
                {teamCta.link.label}
              </UnderlineLink>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
