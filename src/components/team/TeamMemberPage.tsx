import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { type Person } from "@/content/team";

/**
 * A team member's own page, traced from the Figma prototype's member frame
 * (node 311-514, drawn for Chirag Gupta).
 *
 * One band: the way back, the name split across two colours, the role over a
 * short rule, the biography, and the portrait beside it on its blue plate,
 * with the social buttons closing the column. The frame carries nothing else
 * before the footer — no "more team members" rail — so neither does this.
 */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M6.94 8.5H4.06V20h2.88zM5.5 3.6a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34M20 13.44c0-2.9-1.55-4.25-3.62-4.25a3.12 3.12 0 0 0-2.84 1.56h-.04V8.5H10.7V20h2.88v-5.69c0-1.5.29-2.95 2.15-2.95 1.83 0 1.86 1.71 1.86 3.05V20H20z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect
        x="3"
        y="5.5"
        width="18"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4 8 7.4 5.2a1 1 0 0 0 1.2 0L20 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** The frame sets the given name in ink and the family name in brand blue. */
/** One contact button's slot: a list item inside the list, nothing on its own. */
function SocialItem({ list, children }: { list: boolean; children: React.ReactNode }) {
  return list ? <li>{children}</li> : <>{children}</>;
}

function splitName(name: string) {
  const [first, ...rest] = name.split(" ");
  if (rest.length === 0) return <span>{first}</span>;
  return (
    <>
      <span>{first}</span> <span className="tmm-name-2">{rest.join(" ")}</span>
    </>
  );
}

export function TeamMemberPage({ person }: { person: Person }) {
  /* The frame's three paragraphs where they have been written, the card's own
     line where they have not, and nothing at all for the four the client sent
     as a photograph and a name — never an invented biography. */
  const paragraphs = person.profile ?? (person.bio ? [person.bio] : []);
  const hasSocial = Boolean(person.linkedin || person.email);
  const socialCount = Number(Boolean(person.linkedin)) + Number(Boolean(person.email));

  return (
    <section aria-labelledby="member-heading" className="tmm">
      <Reveal className="tmm-back">
        <Link href="/team" className="tmm-back-link">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
            className="tmm-back-arrow"
          >
            <path
              d="M19 12H5M11 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          View all team members
        </Link>
      </Reveal>

      <Reveal as="h1" id="member-heading" className="tmm-name">
        {splitName(person.name)}
      </Reveal>

      <div className="tmm-body">
        <div className="tmm-copy">
          {/* The frame's short rule sits under the role, so it goes where the
              role does — on its own it is a mark under nothing. */}
          {person.role && (
            <>
              <Reveal as="p" className="tmm-role">
                {person.role}
              </Reveal>
              <Reveal aria-hidden="true" className="tmm-rule" />
            </>
          )}

          {paragraphs.map((para, i) => (
            <Reveal key={i} as="p" delay={Math.min(i, 3) * 90} className="tmm-para">
              {para}
            </Reveal>
          ))}

          {/* The whole block goes where neither button has anywhere to point.
              It is a list only when both buttons are present — a single
              LinkedIn button is a link, not a list of one (WCAG 1.3.1). */}
          {hasSocial && (
            <Reveal
              as={socialCount > 1 ? "ul" : "div"}
              className="tmm-social"
              aria-label={socialCount > 1 ? `Contact ${person.name}` : undefined}
            >
              {person.linkedin && (
                <SocialItem list={socialCount > 1}>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="tmm-social-btn"
                  >
                    <LinkedInIcon />
                    <span className="sr-only-8x">
                      {`${person.name} on LinkedIn (opens in a new tab)`}
                    </span>
                  </a>
                </SocialItem>
              )}
              {/* The frame draws a mail button beside it; it is rendered only
                  where an address is actually on file. */}
              {person.email && (
                <SocialItem list={socialCount > 1}>
                  <a href={`mailto:${person.email}`} className="tmm-social-btn">
                    <MailIcon />
                    <span className="sr-only-8x">{`Email ${person.name}`}</span>
                  </a>
                </SocialItem>
              )}
            </Reveal>
          )}
        </div>

        <Reveal variant="scale" className="tmm-portrait">
          <Image suppressHydrationWarning
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 1024px) 72vw, 27vw"
            className="tmm-portrait-img"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
