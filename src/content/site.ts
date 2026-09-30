/**
 * Global site content: navigation, footer, identity.
 * Everything a copywriter might change lives in `src/content` — no strings
 * are hard-coded inside components.
 */

export type NavItem = {
  label: string;
  href: string;
  /** Rendered as the accented call-to-action at the end of the nav. */
  emphasis?: boolean;
};

export const siteConfig = {
  name: "8X Ventures",
  /** Used for <title> templates and structured data. */
  tagline: "Backing DeepTech founders before the world catches up.",
  description:
    "8X Ventures backs DeepTech founders building the technological foundations of the next economy — precision manufacturing, electronics and communication, energy and biotech.",
  url: "https://www.8xventures.co",
  locale: "en-IN",
  /** Where 8X asks founders to send a deck. */
  pitchEmail: "pitch@8xventures.co",
  /** The official lock-up, from the client's Drive, used as the social card. */
  ogImage: "/images/og-8x-ventures.png",
} as const;

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Media", href: "/media" },
  { label: "Reach Out", href: "/contact", emphasis: true },
];

/**
 * The link columns. The client asked for the Legal column to come out; its
 * Contact link moves into Explore, and the Disclaimer link sits under the
 * fund's registration details — see `footerRegistration`.
 */
export const footerColumns: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team", href: "/team" },
      { label: "Media", href: "/media" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Offices",
    links: [
      { label: "Chennai Office", href: "/contact#chennai" },
      { label: "Noida Office", href: "/contact#noida" },
      { label: "Dubai Office", href: "/contact#dubai" },
    ],
  },
];

/**
 * The fund's SEBI registration, as the client supplied it, shown in the
 * footer of every page in the column the Legal links used to occupy.
 */
export const footerRegistration = {
  heading: "Registration Details",
  lines: [
    "8X Ventures Fund I",
    "AIF Category II",
    "Registration No. IN/AIF2/23-24/1480",
    "Investment Manager: 8X Technology Management Private Limited",
  ],
  link: { label: "Disclaimer", href: "/disclaimer" },
} as const;

/**
 * 8X's three offices, as their own website copy deck and their live contact
 * page state them. The footer links point at these anchors.
 */
export const offices = [
  {
    id: "chennai",
    city: "Chennai",
    country: "India",
    label: "IIT Madras Research Park",
    address: "D403, IIT Madras Research Park, Taramani, Chennai",
  },
  {
    id: "noida",
    city: "Noida",
    country: "India",
    label: "India’s First Private DeepTech Hub",
    address: "C 44, 2nd Floor, C Block, Sector 2, Noida, Uttar Pradesh 201301",
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    label: "Business Bay",
    address: "Vision Tower, Al Khaleej Al Tejari 1st, Business Bay, Dubai",
  },
] as const;

/**
 * The accounts linked from the site footer: X, LinkedIn and YouTube, 8X's
 * live accounts from the footer of 8xventures.co. 8X do not use Facebook or
 * Instagram, so neither is linked.
 */
export const socialLinks = [
  {
    label: "8X Ventures on X (Twitter)",
    short: "X",
    href: "https://twitter.com/8xVentures",
  },
  {
    label: "8X Ventures on LinkedIn",
    short: "LinkedIn",
    href: "https://www.linkedin.com/company/80893520/",
  },
  {
    label: "8X Ventures on YouTube",
    short: "YouTube",
    href: "https://www.youtube.com/channel/UCrbRcoW-B5RqbCORkCqIQ4w",
  },
] as const;

/**
 * The copy deck's "Footer Disclaimer", verbatim, shown under the footer on
 * every page with the fund's SEBI registration number, and in full on
 * `/disclaimer`.
 */
export const footerDisclaimer =
  "The information on this website is for general informational purposes only. It should not be construed as investment advice, an offer, or a solicitation. Any investment-related communication, if applicable, will be made in accordance with applicable laws and regulations.";

export const sebiLine =
  "8X Ventures Fund I · SEBI-registered AIF Category II · Registration No. IN/AIF2/23-24/1480 · Investment Manager: 8X Technology Management Private Limited";

export const footerBlurb =
  "8X Ventures backs DeepTech founders building the technological foundations of the next economy.";

export const copyrightYear = 2026;
