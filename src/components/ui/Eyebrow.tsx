import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * The small uppercase blue label that sits above most section headings.
 * Purely presentational — headings carry the document structure.
 */
/** The artboard uses one blue for eyebrows on every surface. On white and the
 *  pale tints that is `brand`, taken down the ramp to clear 4.5:1; on the navy
 *  and photographic surfaces (`tone="light"`) the artboard's own brighter blue
 *  is the one that clears 3:1 (see the tokens in globals.css). */
const TONES = {
  dark: "text-brand",
  light: "text-brand-on-dark",
  tint: "text-brand",
} as const;

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[length:var(--text-eyebrow)] font-bold tracking-[0.06em] uppercase",
        TONES[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}
