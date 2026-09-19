import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: ReactNode;
  /** Light text + light rule, for use on navy / photographic backgrounds. */
  tone?: "dark" | "light";
  className?: string;
};

/** Where the link goes, which decides which arrow it wears. */
function destination(href: string) {
  if (href.startsWith("#")) return "anchor" as const;
  if (href.startsWith("/")) return "internal" as const;
  return "external" as const;
}

/* Drawn on the same 24-box as the rest of the site's icons.
   Every move within the site — further down this page or along to another —
   carries the one forward arrow, so a call to action always reads as "go on".
   An in-page link used to wear a downward arrow that slid down on hover,
   which read as a download control rather than an invitation to continue.
   A link that leaves the site keeps its own outward glyph, since that is a
   different promise and worth saying. */
const ARROW_PATH = {
  forward: "M5 12h14M13 6l6 6-6 6",
  external: "M7 17 17 7M9 7h8v8",
} as const;

/**
 * The design's signature call to action: a plain label sitting on a short
 * brand-blue rule, with an arrow that arrives on hover and on focus.
 *
 * The rule is two segments rather than one. The label carries the first, which
 * is all that shows at rest; the arrow is hung off the label's right edge, out
 * of flow, and carries the second, scaled to nothing. Hover grows it, so the
 * line runs to the right to meet the arrow as it fades in. See "UNDERLINE
 * LINK" in `globals.css` for why the arrow being out of flow is the whole
 * trick — it is what makes the rule at rest exactly the label's width.
 *
 * `.group` on the anchor is what both states hang off, so hovering anywhere on
 * the link and tabbing to it do the same thing.
 */
export function UnderlineLink({
  href,
  children,
  tone = "dark",
  className,
}: Props) {
  const kind = destination(href);
  /* Anchors and internal routes are both a move onward through the site, so
     they share one glyph and one direction of travel. */
  const glyph = kind === "external" ? "external" : "forward";

  const content = (
    <span className="ul-link" data-tone={tone}>
      <span className="ul-seg">{children}</span>
      <span aria-hidden="true" className="ul-seg ul-arrow" data-icon={glyph}>
        <svg viewBox="0 0 24 24" fill="none" focusable="false">
          <path
            d={ARROW_PATH[glyph]}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );

  const classes = cn(
    "group inline-flex text-[length:var(--text-body-lg)] font-light",
    "transition-colors duration-300 ease-[var(--ease-out-soft)]",
    tone === "light"
      ? "text-white"
      : "text-ink-900 hover:text-brand-deep focus-visible:text-brand-deep",
    className,
  );

  if (kind === "external") {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer noopener"
      >
        {content}
        <span className="sr-only-8x"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
