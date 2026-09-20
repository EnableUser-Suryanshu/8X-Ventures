import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { mentors, mentorsIntro } from "@/content/home";

/**
 * The advisory board, under the team strip it belongs with.
 *
 * The card is the site's card: `.tm-card` with `.tm-card-overlay`, the same
 * one the person cards on /team and the featured card in the strip above
 * wear, so it rises in on scroll, lifts under the pointer, grows its artwork
 * by 4% and turns over to its written side exactly as they do.
 *
 * The portraits are cut out and stand on the card's blue, as the team's do.
 * Each file is already the card's shape with the head placed on it, so the
 * picture is simply the card — see `content/home.ts` for how six photographs
 * from six different cameras were brought to one framing.
 *
 * No links: mentors have no page of their own, so the panel is what it has —
 * a name, a position and a line — and nothing that goes nowhere.
 */
export function MentorStrip() {
  return (
    <section
      aria-labelledby="mentors-heading"
      className="on-dark relative bg-[#023363]"
    >
      <div className="mn-stage">
        <Reveal className="text-center">
          <Eyebrow tone="light">{mentorsIntro.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal className="mn-heading text-center">
          <h2
            id="mentors-heading"
            className="text-[length:var(--text-display)] leading-[1.16] font-bold text-white"
          >
            {mentorsIntro.line1}{" "}
            <span className="block text-brand">{mentorsIntro.line2}</span>
          </h2>
        </Reveal>

        <ul role="list" className="mn-grid">
          {mentors.map((m, i) => (
            <Reveal
              as="li"
              key={m.id}
              variant="card"
              delay={Math.min(i, 5) * 90}
              className="tm-card tm-card-sm mn-card"
            >
              <div className="tm-card-photo mn-card-photo">
                <Image suppressHydrationWarning
                  src={m.image}
                  alt=""
                  fill
                  sizes="(max-width: 48rem) 90vw, (max-width: 64rem) 32vw, 21vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="tm-card-overlay">
                <h3 className="tm-card-name">{m.name}</h3>
                <p className="tm-card-role">{m.role}</p>
                <p className="tm-card-highlight">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
