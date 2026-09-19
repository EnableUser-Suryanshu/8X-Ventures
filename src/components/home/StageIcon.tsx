import type { ReactNode } from "react";
import type { JourneyStage } from "@/content/home";

/* --------------------------------------------------------------------------
   Stage icons

   Two kinds live here and they are drawn to different rulers, which is why an
   icon carries its own box rather than sharing one.

   Three are the client's own artwork, supplied as Inkscape SVGs and kept as
   drawn: a 682.67 box, a flip matrix, and strokes of 30. Only the colour is
   changed — black to `currentColor` — so the glyph takes the node's own white,
   and the no-op clip path (a rectangle the size of the whole canvas) is
   dropped. Nothing is redrawn or re-scaled: re-tracing supplied artwork onto
   this file's own grid is how a logo ends up subtly wrong.

   The other four are this file's, drawn on a 24 box at stroke 1.5 for the
   stages the client has not supplied art for. Normalised, the supplied
   strokes are 1.06 of a 24 box against these 1.5 — a little finer, which is
   visible if you put them side by side, and not worth thickening someone
   else's drawing over.
   -------------------------------------------------------------------------- */

type Glyph = {
  /** The box the artwork was drawn on. */
  viewBox: string;
  /** In that box's units. */
  strokeWidth: number;
  body: ReactNode;
};

const GLYPHS: Record<JourneyStage["icon"], Glyph> = {
  /* --- this file's own, on a 24 box --- */
  "search": {
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    body: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 4.5 4.5" />
      </>
    ),
  },
  "beaker": {
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    body: (
      <>
        <path d="M9 3v6.2L4.6 17.4A2 2 0 0 0 6.35 20.4h11.3a2 2 0 0 0 1.75-3L15 9.2V3" />
        <path d="M8 3h8M7.5 14h9" />
      </>
    ),
  },
  "chart": {
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    body: (
      <>
        <path d="M4 20V4M4 20h16" />
        <path d="m7.5 15.5 3.5-4 3 2.5 5-6.5" />
        <path d="M19.5 7.5H16M19.5 7.5V11" />
      </>
    ),
  },
  "globe": {
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    body: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.3 2.4 3.5 5.3 3.5 8.5S14.3 18.2 12 20.5c-2.3-2.3-3.5-5.3-3.5-8.5S9.7 5.9 12 3.5" />
      </>
    ),
  },

  /* --- the client's, on their own 682.67 box --- */
  "chip": {
    viewBox: "0 0 682.66669 682.66669",
    strokeWidth: 30,
    body: (
      <>
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><path d="M 436,76 H 76 v 360 h 360 z" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /><path d="M 376,136 H 136 v 240 h 240 z" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /><g transform="translate(256,136)"><path d="m 0,0 v 90 l 60,30" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(256,376)"><path d="m 0,0 v -90 l -60,-30" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(196,376)"><path d="M 0,0 V -60" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(316,136)"><path d="M 0,0 V 60" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(136,196)"><path d="M 0,0 H 60" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(316,316)"><path d="M 0,0 H 60" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g><g><g transform="translate(136,15)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(196,15)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(256,15)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(316,15)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(376,15)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(136,436)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(196,436)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(256,436)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(316,436)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(376,436)"><path d="M 0,0 V 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(15,376)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(15,316)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(15,256)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(15,196)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(15,136)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(436,376)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(436,316)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(436,256)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(436,196)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(436,136)"><path d="M 0,0 H 61" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g></g></g></g>
      </>
    ),
  },
  "access": {
    viewBox: "0 0 682.66669 682.66669",
    strokeWidth: 30,
    body: (
      <>
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g><g><g transform="translate(91.5386,108.25)"><path d="M 0,0 V 0 C -42.271,0 -76.539,-34.268 -76.539,-76.538 V -93.25 H 76.538 v 16.712 C 76.538,-34.268 42.271,0 0,0 Z" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(136.5386,153.25)"><path d="m 0,0 c 0,-24.853 -20.147,-45 -45,-45 -24.853,0 -45,20.147 -45,45 0,24.853 20.147,45 45,45 C -20.147,45 0,24.853 0,0 Z" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(420.4614,108.25)"><path d="M 0,0 V 0 C -42.271,0 -76.538,-34.268 -76.538,-76.538 V -93.25 H 76.539 v 16.712 C 76.539,-34.268 42.271,0 0,0 Z" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(465.4614,153.25)"><path d="m 0,0 c 0,-24.853 -20.147,-45 -45,-45 -24.853,0 -45,20.147 -45,45 0,24.853 20.147,45 45,45 C -20.147,45 0,24.853 0,0 Z" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(256,407)"><path d="M 0,0 V 0 C -42.271,0 -76.539,-34.268 -76.539,-76.538 V -93.25 H 76.539 v 16.712 C 76.539,-34.268 42.271,0 0,0 Z" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(301,452)"><path d="m 0,0 c 0,-24.853 -20.147,-45 -45,-45 -24.853,0 -45,20.147 -45,45 0,24.853 20.147,45 45,45 C -20.147,45 0,24.853 0,0 Z" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(191.2402,118.0098)"><path d="m 0,0 c 19.98,-6.319 41.5,-9.76 63.94,-9.76 23.25,0 45.52,3.691 66.1,10.45" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(128.1401,376.8906)"><path d="M 0,0 C -15.087,-14.543 -28.379,-31.814 -39.086,-51.535 -50.18,-71.968 -57.564,-93.3 -61.443,-114.611" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(445.3027,262.2793)"><path d="m 0,0 c -3.879,21.312 -11.263,42.644 -22.356,63.076 -10.708,19.721 -23.999,36.992 -39.087,51.535" fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" /></g></g></g></g>
      </>
    ),
  },
  "governance": {
    viewBox: "0 0 682.66669 682.66669",
    strokeWidth: 30,
    body: (
      <>
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g><g><g transform="translate(17.2319,357.8667)"><path d="m 0,0 v 0 c -13.116,6.186 -12.934,24.909 0.301,30.837 l 231.74,103.811 c 4.417,1.979 9.47,1.977 13.886,-0.004 L 477.245,30.846 C 490.471,24.911 490.648,6.197 477.536,0.013 L 477.508,0 c -2.264,-1.067 -4.736,-1.621 -7.238,-1.621 H 7.239 C 4.736,-1.621 2.264,-1.067 0,0 Z" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(7.9229,36.6255)"><path d="m 0,0 v -11.682 c 0,-3.834 3.108,-6.942 6.941,-6.942 h 482.695 c 3.833,0 6.941,3.108 6.941,6.942 V 0 c 0,8.99 -7.287,16.278 -16.277,16.278 H 16.278 C 7.288,16.278 0,8.99 0,0 Z" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(286.958,416.7378)"><path d="m 0,0 c 0,-17.105 -13.867,-30.972 -30.972,-30.972 -17.105,0 -30.972,13.867 -30.972,30.972 0,17.105 13.867,30.972 30.972,30.972 C -13.867,30.972 0,17.105 0,0 Z" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(26.6426,356.2456)"><path d="m 0,0 v -18.778 c 0,-8.669 7.027,-15.696 15.696,-15.696 h 427.295 c 8.669,0 15.696,7.027 15.696,15.696 V 0" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(485.3301,52.9033)"><path d="m 0,0 v 23.857 c 0,4.804 -3.894,8.698 -8.698,8.698 H -449.99 c -4.803,0 -8.697,-3.894 -8.697,-8.698 V 0" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(133.998,85.458)"><path d="m 0,0 v 18.222 c 0,7.54 -6.113,13.653 -13.653,13.653 H -68.73 c -7.541,0 -13.653,-6.113 -13.653,-13.653 V 0" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(51.6147,321.7715)"><path d="m 0,0 v -19.294 c 0,-7.54 6.112,-13.653 13.653,-13.653 H 68.73 c 7.541,0 13.653,6.113 13.653,13.653 V 0" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(68.8301,225.0542)"><path d="M 0,0 V -107.722" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(68.8301,288.8247)"><path d="M 0,0 V -28.736" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(116.7827,117.3325)"><path d="M 0,0 V 171.492" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(297.1914,85.458)"><path d="m 0,0 v 18.222 c 0,7.54 -6.112,13.653 -13.653,13.653 H -68.73 c -7.541,0 -13.653,-6.113 -13.653,-13.653 V 0" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(214.8086,321.7715)"><path d="m 0,0 v -19.294 c 0,-7.54 6.112,-13.653 13.653,-13.653 H 68.73 c 7.541,0 13.653,6.113 13.653,13.653 V 0" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(232.0234,288.8247)"><path d="M 0,0 V -171.492" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(279.9766,117.3325)"><path d="M 0,0 V 171.492" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(460.3579,85.458)"><path d="m 0,0 v 18.222 c 0,7.54 -6.112,13.653 -13.653,13.653 H -68.73 c -7.541,0 -13.653,-6.113 -13.653,-13.653 V 0" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(377.9751,321.7715)"><path d="m 0,0 v -19.294 c 0,-7.54 6.112,-13.653 13.653,-13.653 H 68.73 c 7.541,0 13.653,6.113 13.653,13.653 V 0" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(395.1899,145.3701)"><path d="M 0,0 V -28.038" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(395.1899,288.8247)"><path d="M 0,0 V -108.421" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g><g transform="translate(443.1431,117.3325)"><path d="M 0,0 V 171.492" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></g></g></g></g>
      </>
    ),
  },
};

/**
 * One stage's glyph, sized by the caller. Every glyph is stroked in
 * `currentColor`, so it takes the colour of the node it sits in.
 */
export function StageIcon({
  icon,
  className,
}: {
  icon: JourneyStage["icon"];
  className?: string;
}) {
  const glyph = GLYPHS[icon];

  return (
    <svg
      viewBox={glyph.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={glyph.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {glyph.body}
    </svg>
  );
}
