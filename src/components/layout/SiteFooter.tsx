import Image from "next/image";
import Link from "next/link";
import {
  footerBlurb,
  footerColumns,
  footerDisclaimer,
  footerRegistration,
  sebiLine,
  siteConfig,
  socialLinks,
} from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

/* Keyed by `short` in `socialLinks`. */
const socialIcons: Record<string, React.ReactNode> = {
  X: (
    <path d="M17.3 3.75h2.82l-6.16 7.04L21.2 20.4h-5.66l-4.44-5.8-5.07 5.8H3.2l6.59-7.53L3 3.75h5.8l4.01 5.3zm-.99 14.97h1.56L7.75 5.34H6.08z" />
  ),
  LinkedIn: (
    <path d="M6.94 8.5H4.06V20h2.88zM5.5 3.6a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34M20 13.44c0-2.9-1.55-4.25-3.62-4.25a3.12 3.12 0 0 0-2.84 1.56h-.04V8.5H10.7V20h2.88v-5.69c0-1.5.29-2.95 2.15-2.95 1.83 0 1.86 1.71 1.86 3.05V20H20z" />
  ),
  YouTube: (
    <path d="M21.13 7.66a2.39 2.39 0 0 0-1.68-1.7C17.96 5.56 12 5.56 12 5.56s-5.96 0-7.45.4a2.39 2.39 0 0 0-1.68 1.7A25.1 25.1 0 0 0 2.47 12c0 1.47.13 2.93.4 4.34a2.39 2.39 0 0 0 1.68 1.7c1.49.4 7.45.4 7.45.4s5.96 0 7.45-.4a2.39 2.39 0 0 0 1.68-1.7c.27-1.41.4-2.87.4-4.34s-.13-2.93-.4-4.34M10.05 14.85V9.15L15.03 12z" />
  ),
};

/** Column x positions are traced; see `FOOTER` in globals.css. Explore keeps
 *  the first slot and Offices the third; the registration details take the
 *  middle one, where the Legal links were. */
const COL_CLASS = ["footer-col-1", "footer-col-3"];

/* 25px at 1920, the artboard's size for the headings, links and blurb. */
const BODY_SIZE = "text-[length:clamp(0.9375rem,1.302vw,1.5625rem)]";

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="footer-stage">
        {/* --- Identity ---
            The artwork is cropped to its own ink. It used to carry the
            artboard's whitespace inside the file — 11.4% of the width down the
            left, 21.8% of the height off the top — which put the lock-up a
            painted 28px inside a gutter every other block in the footer sits
            flush against, and made the gap under it 27px larger than the one
            the stylesheet asks for. Worse on the desktop stage, where the box
            is a share of the width and the stage's height stops growing at
            1920: past that the invisible padding grew with the logo until the
            ink reached down into the blurb and the two overlapped. Cropping the
            file is what lets the element's box *be* the logo, so it can be
            placed and measured like anything else here. */}
        <Reveal className="footer-logo max-lg:w-[12.1rem]">
          <Link href="/" aria-label={`${siteConfig.name} — home`} className="block">
            <Image suppressHydrationWarning
              src="/images/logo-footer.png"
              alt=""
              width={774}
              height={283}
              className="h-auto w-full"
            />
          </Link>
        </Reveal>

        {/* Blurb and social row are one column: traced 33px apart at 1920, they
            drifted to 103px on a 2560 screen when each was placed on its own
            percentage of a stage that keeps growing after the type has
            stopped. The logo above stays placed — its artwork carries its own
            whitespace, and flowing it would shift the block by that much. */}
        <div className="footer-identity at-col max-lg:mt-8">
          <Reveal
            as="p"
            delay={80}
            className={cn(
              "footer-blurb leading-[1.2] font-light text-ink-300 max-lg:max-w-[34ch]",
              BODY_SIZE,
            )}
          >
            {footerBlurb}
          </Reveal>

          <Reveal
            as="ul"
            role="list"
            delay={160}
            className="footer-socials at-tail max-lg:gap-5"
          >
          {socialLinks.map((social) => (
            <li key={social.short}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="fc-border grid aspect-square w-[clamp(2.75rem,2.76vw,3.3125rem)] place-items-center rounded-full border border-ink-900/20 text-ink-800 transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand-deep hover:bg-brand-tint hover:text-brand-deep active:translate-y-0 active:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-[62%]"
                >
                  {socialIcons[social.short]}
                </svg>
                <span className="sr-only-8x">
                  {social.label} (opens in a new tab)
                </span>
              </a>
              </li>
            ))}
          </Reveal>
        </div>

        {/* --- Link columns --- */}
        {footerColumns.map((column, i) => (
          <Reveal
            as="nav"
            key={column.heading}
            aria-labelledby={`footer-${column.heading}`}
            delay={200 + i * 90}
            className={cn("footer-col", COL_CLASS[i], "max-lg:mt-12")}
          >
            <h2
              id={`footer-${column.heading}`}
              className={cn(
                "leading-[1.2] font-bold tracking-[0.06em] text-brand uppercase",
                BODY_SIZE,
              )}
            >
              {column.heading}
            </h2>
            <ul role="list" className="footer-links max-lg:mt-5 max-lg:gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      /* `brand` is 2.86:1 on white; `brand-deep` clears 4.5:1
                         (WCAG 1.4.3), which body-size link text needs. */
                      "group inline-flex items-center gap-[0.35em] leading-[1.2] font-light text-ink-700 transition-colors duration-300 hover:text-brand-deep",
                      BODY_SIZE,
                    )}
                  >
                    {/* The rule is `.u-line`, the same one the navigation
                        wears — see "UNDERLINE LINK" in globals.css. It sits on
                        the label rather than the anchor so it stops at the
                        word and does not run on under the arrow's reserved
                        space. */}
                    <span className="u-line">{link.label}</span>
                    {/* Space is reserved at rest, so the column does not
                        reflow when the arrow arrives. */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                      className="h-[0.7em] w-[0.7em] shrink-0 -translate-x-1 opacity-0 transition-[opacity,transform] duration-400 ease-[var(--ease-out-expo)] group-focus-visible:translate-x-0 group-focus-visible:opacity-100 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        {/* --- Registration details --- */}
        <Reveal
          as="section"
          aria-labelledby="footer-registration"
          delay={290}
          className="footer-col footer-col-2 footer-reg max-lg:mt-12"
        >
          <h2
            id="footer-registration"
            className={cn(
              "leading-[1.2] font-bold tracking-[0.06em] text-brand uppercase",
              BODY_SIZE,
            )}
          >
            {footerRegistration.heading}
          </h2>
          <ul role="list" className="footer-reg-lines max-lg:mt-5">
            {footerRegistration.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <Link
            href={footerRegistration.link.href}
            className="footer-reg-link group inline-flex items-center font-light text-ink-700 transition-colors duration-300 hover:text-brand-deep"
          >
            <span className="u-line">{footerRegistration.link.label}</span>
          </Link>
        </Reveal>

        <Reveal className="footer-rule h-px bg-[#A5D7FA] max-lg:mt-16" />

        <Reveal
          as="p"
          delay={80}
          /* Set in sentence case at normal tracking so the line reads exactly
             as the notice is specified: "© Copyright <Company Name>". The
             artboard's uppercase + 0.2em treatment was built for the old
             "© 8X Ventures 2026" lock-up and rendered this as
             "© C O P Y R I G H T   8 X   V E N T U R E S". */
          className="footer-copy text-center text-[length:clamp(0.8125rem,1.125vw,1.35rem)] leading-[1.2] font-light tracking-[0.02em] text-ink-950 max-lg:mt-8"
        >
          © Copyright {siteConfig.name}
        </Reveal>
      </div>

      {/* The disclaimer and the SEBI registration, below the traced footer
          rather than inside it, so the artboard's fixed-height stage is left
          as drawn. */}
      <div className="footer-legal">
        <p className="footer-legal-sebi">{sebiLine}</p>
        <p className="footer-legal-text">
          <span className="font-bold">Disclaimer: </span>
          {footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
