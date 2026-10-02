import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { footerDisclaimer, footerRegistration } from "@/content/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important notices about the information published on the 8X Ventures website, and the fund's SEBI registration details.",
};

/**
 * The disclaimer from the client's copy deck, verbatim, with the fund's SEBI
 * registration details beneath it — the same two the footer carries.
 */
export default function Page() {
  return (
    <section aria-labelledby="page-heading" className="bg-white">
      <div className="container-8x flex min-h-[70vh] flex-col justify-center py-32 lg:py-44">
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
        </Reveal>
        <Reveal
          as="h1"
          id="page-heading"
          delay={80}
          className="mt-4 max-w-[18ch] text-[length:var(--text-display)] leading-[1.08] font-bold tracking-normal text-balance text-ink-900"
        >
          Disclaimer
        </Reveal>
        <Reveal
          as="p"
          delay={160}
          className="mt-8 max-w-[62ch] text-[length:var(--text-body-lg)] leading-[1.45] font-light text-pretty text-ink-700"
        >
          {footerDisclaimer}
        </Reveal>

        <Reveal delay={240} className="mt-12">
          <h2 className="text-[length:var(--text-body-lg)] font-bold tracking-[0.06em] text-brand-deep uppercase">
            {footerRegistration.heading}
          </h2>
          <ul role="list" className="mt-4 grid gap-1.5 text-[length:clamp(1rem,1.1vw,1.25rem)] leading-[1.45] text-ink-700">
            {footerRegistration.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={320} className="mt-12">
          <UnderlineLink href="/">Back to home</UnderlineLink>
        </Reveal>
      </div>
    </section>
  );
}
