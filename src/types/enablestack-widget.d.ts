/** A side-effect-only browser script: importing it starts the widget. */
declare module "enablestack-widget";

/**
 * The widget's runtime configuration, read from `window.ENABLESTACK_CONFIG`
 * when its module first runs — so it has to be set before the import. Only
 * the options this site uses are typed; the package README lists the rest.
 */
interface EnablestackWidgetConfig {
  colors?: {
    /** Exact hex. Overrides the colour baked in at install time. */
    primary?: string;
    secondary?: string;
    optionBg?: string;
    optionText?: string;
    optionIcon?: string;
  };
  /** A named preset, used only when `colors.primary` is not set. */
  theme?: string;
  /** Launcher glyph. */
  icon?: "default" | "wheelchair" | "person" | "eye";
  widgetPosition?: { side?: "left" | "right"; bottom?: string; left?: string; right?: string };
  language?: string;
  accessibilityStatementUrl?: string;
}

interface Window {
  ENABLESTACK_CONFIG?: EnablestackWidgetConfig;
}
