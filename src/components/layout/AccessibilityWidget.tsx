"use client";

import { useEffect } from "react";

/**
 * The colour the widget is themed in: the site's own `--color-brand`
 * (globals.css), so the launcher, the menu's accents, highlights and focus
 * rings match the eyebrows, headings and card fills around them. The widget
 * derives its whole palette from this one value. It is the shade that clears
 * WCAG 1.4.3 at 4.75:1 with white, so the white launcher glyph and the white
 * type on the widget's active controls pass as well.
 *
 * Kept in step with the token by hand — the widget reads a hex, not a CSS
 * variable, because it has to know its colour before it builds its stylesheet.
 */
const WIDGET_PRIMARY = "#0077c2";

/**
 * The EnableUser accessibility widget (`enablestack-widget`, installed from
 * `vendor/`). It builds its own launcher and menu in a Shadow DOM and starts
 * itself when its module first runs. Loading it here, after hydration, keeps
 * its ~350 KB out of the first paint; a module only ever evaluates once, so
 * client-side navigations and Strict Mode's double effects can't start a
 * second copy. Renders nothing itself.
 *
 * The colour is set here, at runtime, through `ENABLESTACK_CONFIG`, which the
 * widget reads ahead of whatever was baked into its build at install time.
 * That makes the theme a property of this code rather than of the machine
 * that ran `npm install` — before this, the build on Vercel took its colour
 * from an ENABLESTACK_PRIMARY environment variable, and shipped the widget's
 * default purple whenever that was unset.
 */
export function AccessibilityWidget() {
  useEffect(() => {
    const existing = window.ENABLESTACK_CONFIG ?? {};
    window.ENABLESTACK_CONFIG = {
      ...existing,
      colors: { ...existing.colors, primary: WIDGET_PRIMARY },
      icon: existing.icon ?? "default",
    };

    void import("enablestack-widget").then(() => {
      /* The widget drops an invisible <svg> of colour-vision filters into the
         page for its contrast tools. It is pure plumbing, not a picture, so
         mark it decorative for assistive tech and for checkers that would
         otherwise count it as an unlabelled image (WCAG 1.1.1). */
      document
        .querySelectorAll<SVGElement>("svg.eu-accessibility-filters")
        .forEach((svg) => svg.setAttribute("aria-hidden", "true"));
    });
  }, []);

  return null;
}
