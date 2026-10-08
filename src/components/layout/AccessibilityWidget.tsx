"use client";

import { useEffect } from "react";

/**
 * The EnableUser accessibility widget (`enablestack-widget`, installed from
 * `vendor/`). Its colour and launcher icon were chosen at install time and
 * baked into the package's build: 8X navy `#023363` — the brand blue would
 * put the white icon at under 3:1 — and the default accessibility figure. To
 * change them, run `npx enablestack-widget-theme <hex> [icon]`; Vercel's
 * install takes them from ENABLESTACK_PRIMARY / ENABLESTACK_ICON.
 *
 * The widget builds its own launcher and menu in a Shadow DOM and starts
 * itself when its module first runs. Loading it here, after hydration, keeps
 * its ~350 KB out of the first paint; a module only ever evaluates once, so
 * client-side navigations and Strict Mode's double effects can't start a
 * second copy. Renders nothing itself.
 */
export function AccessibilityWidget() {
  useEffect(() => {
    void import("enablestack-widget");
  }, []);

  return null;
}
