/**
 * Homepage content, section by section, in the order it appears in the
 * "8x Website v5.0" design.
 */

import { teamGroup, teamPartners } from "@/content/team";

/* --- Hero ---------------------------------------------------------------- */

export const hero = {
  headline: {
    line1: "Backing DeepTech founders",
    line2: "before the world catches up.",
  },
  subhead:
    "8X Ventures invests in companies building the technological foundations of the next economy.",
  cta: { label: "Let’s Explore", href: "#manifesto" },
} as const;

export type Sector = {
  name: string;
  /**
   * Shown in the hero popup. Written from 8X's own sector language in the
   * website copy deck and from what the portfolio actually does in each
   * sector — one sentence, 12–15 words, to fit the panel.
   */
  description: string;
  /**
   * Where the popup's hotspot sits on `/images/hero-infinity.png`, as a
   * percentage of the image's own box (not the viewport), so the map holds at
   * every width.
   *
   * The mark is a flat raster with no regions to hook into, so these were read
   * off the file: its ink runs x 122–1814 of 2000 and y 215–1051 of 1250, and
   * each point below sits on the ribbon rather than in one of the two holes.
   * To retune one, change x/y here — nothing else needs to move.
   *
   * Keep every pair at least ~17% of the width apart: at the narrowest layout
   * (a 294px mark at a 320px viewport) that is what keeps the 44px targets
   * from overlapping (WCAG 2.5.8).
   *
   * `place` puts the popup above or below its hotspot — outward, away from the
   * ribbon, so the popup never covers the point it belongs to.
   */
  x: number;
  y: number;
  place: "top" | "bottom";
};

export const sectors: readonly Sector[] = [
  {
    name: "Semiconductors",
    description:
      "Chip-level security, photonics and interconnects that decide what every other technology can do.",
    x: 17,
    y: 55,
    place: "top",
  },
  {
    name: "Robotics",
    description:
      "Machines that see, decide and act — in fields, in pipelines and on factory floors.",
    x: 27,
    y: 30,
    place: "top",
  },
  {
    name: "Powertrains",
    description:
      "Clean hydrogen, thermal systems and materials moving industry off fossil fuels.",
    x: 36,
    y: 72,
    place: "bottom",
  },
  {
    name: "Manufacturing",
    description:
      "Indigenous components, connectors and processes that India currently has to import.",
    x: 50,
    y: 48,
    place: "bottom",
  },
  {
    name: "Sensors",
    description:
      "Instruments that read heat, corrosion and flow where conventional sensing fails.",
    x: 68,
    y: 31,
    place: "top",
  },
  {
    name: "Industrial Systems",
    description:
      "Software and hardware tying plants, assets and supply chains into one system.",
    x: 78,
    y: 72,
    place: "bottom",
  },
];

/* --- Manifesto banner ---------------------------------------------------- */

/**
 * The sectors as they read inside a sentence. Same list as `sectors` above,
 * lower-cased — the artboard sets the rotating word in running text.
 */
export const sectorsInline = [
  "semiconductors",
  "robotics",
  "powertrains",
  "manufacturing",
  "sensors",
  "industrial systems",
] as const;

/** Index the rotation starts on, so first paint matches the artboard. */
export const sectorsInlineStart = sectorsInline.indexOf("manufacturing");

export const manifesto = {
  line1: "The future will not be inherited.",
  line2: "It will be engineered.",
  supportPre: "We back founders turning ",
  supportPost: " into companies that matter.",
  /**
   * The whole sentence, with every sector spelled out. The rotating word is
   * hidden from assistive tech and this is exposed instead, so the full
   * meaning arrives in one reading rather than changing under the user.
   */
  supportScreenReader:
    "We back founders turning semiconductors, robotics, powertrains, manufacturing, sensors and industrial systems into companies that matter.",
} as const;

/* --- Vision / By the Year 2047 ------------------------------------------- */

export const vision = {
  eyebrow: "By the Year",
  year: "2047",
  body: "India will move from consuming innovation to creating it. From importing progress to inventing the future.",
  closingLine1: "8X Ventures exists",
  closingLine2: "to help build them.",
} as const;

/* --- Stats --------------------------------------------------------------- */

export type Stat = {
  /** Numeric portion used to drive the count-up animation. */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const statsHeadline = "Early signals. Serious scale.";

/**
 * The three figures 8X publishes under "Proof" in its website copy deck.
 * The homepage section renders `stats[0]` as the live figure and `stats[1]`
 * ghosted behind it, exactly as the artboard composes them; `stats[2]` is
 * the third published figure, carried here so the set stays whole.
 */
export const stats: Stat[] = [
  { value: 400, prefix: "₹", suffix: "+Cr", label: "Portfolio revenue generated" },
  { value: 70, suffix: "+", label: "Patents across portfolio companies" },
  { value: 2000, prefix: "₹", suffix: "+Cr", label: "Portfolio order book" },
  /* Not from the copy deck's "Proof" figures like the three above — it is the
     length of `portfolio` below, which is the same twelve companies the
     carousel and the portfolio grid are built from. Kept as a literal because
     the panel publishes a figure and a figure should not quietly change when
     a company is added: adding the thirteenth means saying so here. */
  { value: 12, label: "Deep-tech companies backed" },
];

/* --- Portfolio ----------------------------------------------------------- */

export type PortfolioCompany = {
  id: string;
  name: string;
  /** The short sector label on the card's first pill. */
  sector: string;
  /** The fund shown on the card's second pill. */
  vehicle: string;
  /** Every fund the company sits in — what the portfolio filters read. */
  vehicles?: string[];
  /**
   * The card's figure line: a bold value with a lighter word beside it — the
   * slot the artboard fills with "$4M Raised". 8X does not publish a raise
   * amount per company, so this carries the company's current stage, which
   * their own portfolio brochure states.
   */
  metric: { value: string; label: string };
  /** 8X's own one-line website descriptor for the company. */
  description: string;
  /** Optional pull quote. None are set — see the note above `portfolio`. */
  quote?: { text: string; attribution: string };
  /** The company's own site. Not on the card in v5.0; kept for later use. */
  website: string;
  image: string;
  /** Empty string renders the tinted placeholder panel used in the design. */
  imageAlt: string;
};

export const portfolioHeadline = { lead: "Founders at", accent: "the Frontier" } as const;

/**
 * 8X's portfolio — all twelve companies, from the per-company briefs in the
 * client's Drive ("Portfolio companies' details") and their own portfolio
 * brochure. Each `description` is the brief's own "Website descriptor"; each
 * `metric`, and the founding line in `content/portfolio.ts`, is the
 * brochure's.
 *
 * `image` is the company's logo from the Drive's "Logos of Portfolio
 * Companies" folder. It is the only company-specific artwork the client has
 * supplied — the briefs send anyone wanting photography to each company's own
 * site — so the card's picture panel now holds the logo on a white plate
 * instead of the single stock photograph that stood in for every company.
 *
 * **No quotes.** The entries here used to carry invented founder quotes
 * attributed to real, named companies; those are gone. 8X's copy deck does
 * have three real founder quotes, but publishes them unattributed and in a
 * homepage section the v5.0 design does not contain, so there is nowhere
 * honest to put them yet.
 *
 * **Fund attribution needs 8X to confirm.** The artboard's pills are "Fund I"
 * and "Fund II - Coming Soon" (greyed out), so every card is tagged Fund I as
 * the build already did, with Solinas also in the SPV portfolio. 8X's own
 * material shows Fund II is in fact investing, so both the pill and the
 * per-company tags should be reviewed before launch.
 */
export const portfolio: PortfolioCompany[] = [
  {
    id: "pantherun",
    name: "Pantherun Technologies",
    sector: "Cybersecurity",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Series A", label: "stage" },
    description: "High-speed data protection and encryption technology.",
    website: "https://pantherun.com/",
    image: "/images/portfolio/pantherun.png",
    imageAlt: "Pantherun Technologies logo.",
  },
  {
    id: "tiea-connectors",
    name: "TIEA Connectors",
    sector: "Electronics",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Series A", label: "stage" },
    description: "Indigenous electrical and electronic connectors for demanding applications.",
    website: "https://www.tieaconnectors.com/",
    image: "/images/portfolio/tiea.png",
    imageAlt: "TIEA Connectors logo.",
  },
  {
    id: "solinas-integrity",
    name: "Solinas Integrity",
    sector: "WaterTech",
    vehicle: "SPV Portfolio",
    vehicles: ["SPV Portfolio", "Fund I"],
    metric: { value: "Series A+", label: "stage" },
    description: "Robotics and intelligence for water and sanitation infrastructure.",
    website: "https://solinas.in/",
    image: "/images/portfolio/solinas.png",
    imageAlt: "Solinas Integrity logo.",
  },
  {
    id: "xyma-analytics",
    name: "XYMA Analytics",
    sector: "Industrial IoT",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Series A", label: "stage" },
    description: "Ultrasonic sensing and Industrial IoT for extreme industrial environments.",
    website: "https://xyma.in/",
    image: "/images/portfolio/xyma.png",
    imageAlt: "XYMA Analytics logo.",
  },
  {
    id: "lightspeed-photonics",
    name: "LightSpeed Photonics",
    sector: "Photonics",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Series A", label: "stage" },
    description: "Optical interconnects for high-performance and AI computing.",
    website: "https://lightspeedphotonics.com/",
    image: "/images/portfolio/lightspeed.png",
    imageAlt: "LightSpeed Photonics logo.",
  },
  {
    id: "sanchiconnect",
    name: "SanchiConnect",
    sector: "Ecosystem",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Pre-Series A", label: "stage" },
    description:
      "A deep-tech enablement network connecting startups, capital and innovation ecosystems.",
    website: "https://sanchiconnect.com/",
    image: "/images/portfolio/sanchiconnect.png",
    imageAlt: "SanchiConnect logo.",
  },
  {
    id: "neuralzome",
    name: "Neuralzome Cybernetics",
    sector: "Robotics",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Pre-Seed", label: "stage" },
    description: "Teachable autonomy for agriculture and off-road operations.",
    website: "https://www.neuralzome.com/",
    image: "/images/portfolio/neuralzome.png",
    imageAlt: "Neuralzome Cybernetics logo.",
  },
  {
    id: "trishul-space",
    name: "Trishul Space",
    sector: "SpaceTech",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Pre-Seed", label: "stage" },
    description: "Advanced liquid propulsion for next-generation launch vehicles.",
    website: "https://trishulspace.com/",
    image: "/images/portfolio/trishul.png",
    imageAlt: "Trishul Space logo.",
  },
  {
    id: "enerzi",
    name: "Enerzi",
    sector: "ClimateTech",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Seed", label: "stage" },
    description: "Microwave and plasma systems for cleaner industrial processes.",
    website: "https://enerzi.co/",
    image: "/images/portfolio/enerzi.png",
    imageAlt: "Enerzi Microwave Systems logo.",
  },
  {
    id: "kcat-enzymatic",
    name: "Kcat Enzymatic",
    sector: "BioTech",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Pre-Series A", label: "stage" },
    description: "AI-enabled enzyme engineering for sustainable chemical manufacturing.",
    website: "https://kcat.co.in/",
    image: "/images/portfolio/kcat.png",
    imageAlt: "Kcat Enzymatic logo.",
  },
  {
    id: "armory",
    name: "Armory",
    sector: "DefenceTech",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Pre-Series A", label: "stage" },
    description: "Counter-drone systems designed to defend Bharat.",
    website: "https://www.armory.in/",
    image: "/images/portfolio/armory.png",
    imageAlt: "Armory logo.",
  },
  {
    id: "thermistance",
    name: "Thermistance Technologies",
    sector: "Thermal Tech",
    vehicle: "Fund I",
    vehicles: ["Fund I"],
    metric: { value: "Seed", label: "stage" },
    description:
      "Passive cooling systems for high-performance electronics and industrial equipment.",
    website: "https://thermistance.com/",
    image: "/images/portfolio/thermistance.png",
    imageAlt: "Thermistance Technologies logo.",
  },
];

/* --- Founder journey ------------------------------------------------------
   The artboard renders only the active node ("Technology Validation"). The
   arc has seven, and its geometry depends on that count, so seven is what
   this is: 8X's own five — "technology validation, customer access, capital
   strategy, governance, and long-term scale", from the Founder Proposition
   in their website copy deck — opened by the two steps their own approach
   copy names before an investment, Discovery and Research.
   ------------------------------------------------------------------------ */

export type JourneyStage = {
  id: string;
  title: string;
  description: string;
  /** Key into `GLYPHS` in `StageIcon.tsx`. The three the client supplied
   *  artwork for are named for what they depict. */
  icon: "search" | "beaker" | "chip" | "access" | "governance" | "chart" | "globe";
};

export const journeyIntro = {
  eyebrow: "Founder Journey",
  line1: "Capital is available.",
  line2: "Conviction is rare.",
} as const;

export const journey: JourneyStage[] = [
  {
    id: "discovery",
    title: "Discovery",
    description:
      "The founders we partner with are rare. We look for them before consensus forms.",
    icon: "search",
  },
  {
    id: "research",
    title: "Research",
    description:
      "We study the science, the market and the moat before we commit to anything.",
    icon: "beaker",
  },
  {
    id: "technology-validation",
    title: "Technology Validation",
    description:
      "We test what the technology really does, and what it will take to make it work at scale.",
    icon: "chip",
  },
  {
    id: "customer-access",
    title: "Customer Access",
    description:
      "We open doors — to customers, corporates, research institutions and the wider ecosystem.",
    icon: "access",
  },
  {
    id: "capital-strategy",
    title: "Capital Strategy",
    description:
      "We help plan the rounds ahead, not only the one immediately in front of you.",
    icon: "chart",
  },
  {
    id: "governance",
    title: "Governance",
    description:
      "Board discipline, compliance and reporting built for institutional scale from the start.",
    icon: "governance",
  },
  {
    id: "long-term-scale",
    title: "Long-Term Scale",
    description:
      "We are not investors passing through. We partner for the long arc of the company.",
    icon: "globe",
  },
];

/* --- Team ---------------------------------------------------------------- */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  /** Shown on hover / focus. */
  bio: string;
  /** Four of the team have none on file; the panel leaves the link out. */
  linkedin?: string;
};

export const teamIntro = {
  eyebrow: "Our Team",
  line1: "Operators. Investors.",
  line2: "Technologists. Institution builders.",
  body: "We partner with founders through all stages of their growth journey.",
  cta: { label: "Meet the Team", href: "/team" },
} as const;

/**
 * The whole roster, partners first — read from `content/team.ts`, which is
 * where it is kept, rather than held as a second list here. This used to be
 * five people with their own copies of the copy; the two lists had already
 * drifted on Rashi's title and the strip was missing the six who joined.
 *
 * The strip opens on Chirag — see `TeamCarousel` — and shows the featured
 * card in colour, so each person's `colour` cut-out is preferred where one
 * exists. The role and biography are the team page's, from the client's
 * Fund II teaser.
 */
export const team: TeamMember[] = [...teamPartners.people, ...teamGroup.people].map((p) => ({
  id: p.id,
  name: p.name,
  role: p.role ?? "",
  image: p.colour ?? p.image,
  bio: p.bio ?? "",
  linkedin: p.linkedin,
}));

/* --- Mentors ------------------------------------------------------------- */

export type Mentor = {
  id: string;
  name: string;
  /**
   * The client's Fund II teaser lists all eight of its advisory board as
   * "External Advisor", which says nothing about any one of them and the same
   * nothing six times over. So this carries the position the same page states
   * beside the name, and `bio` carries the rest of what it says. Where the
   * deck gives no position — Bony Niranjan Dalal — the line it does give
   * stands. Nothing here is written about a mentor from outside that deck.
   */
  role: string;
  bio: string;
  image: string;
};

export const mentorsIntro = {
  eyebrow: "Our Mentors",
  line1: "The People Who",
  line2: "Bring That Expertise",
} as const;

/**
 * 8X's advisory board, less the two who already appear above as partners.
 *
 * Roles and biographies from the Advisory Board page of the client's "8X
 * Ventures Fund II — India DeepTech Fund" teaser.
 *
 * The photographs are the client's "Photos of Mentors" folder on Drive
 * where that folder had a usable one, and the web where it did not. The
 * Drive copies of Dr. Jhunjhunwala (225px) and Suresh Nanda (301px) were
 * thumbnails, too soft to fill a card; the client asked for better ones
 * found online. Dr. Jhunjhunwala's is the same studio portrait at 900 ×
 * 1200 from the CIKS board-of-trustees page (ciks.org); Suresh Nanda's is
 * the headshot on UV Capital's site (uvcapital.in), 729 × 994; Ankit
 * Agarwal's is his portrait on Globe Capital's own site (globecapital.com),
 * 388 × 486, arms folded, which is the only size it is published at;
 * Virendra Somwanshi's is the press photograph Google lists first for him
 * (ET BrandEquity, and every other outlet, ran it), which is also the file
 * Drive holds at 1452 × 1218 — the largest copy of the only portrait of him
 * published anywhere; Federal Bank's site refuses automated fetches of his
 * official one. Deepak Chitnis's official Lodha Group portrait
 * is the same 375px file Drive already had, and nothing larger is
 * published. Bony Niranjan Dalal has no photograph online at all, so his is
 * still Drive's conference close-up — which arrived already cut out, and is
 * used with its own alpha, microphone and all, since cropping the
 * microphone away leaves a head with nothing under it. None of these
 * photographs is the client's own and none is licensed to 8X; publishing
 * them needs the subjects' or the publishers' say-so.
 *
 * The files in `public/images/mentors/` are cut out and set on the card's
 * own 588 × 784 canvas so that every mentor card is the team card: the
 * subject cut with macOS Vision's subject mask (Ashok Jhunjhunwala, Deepak
 * Chitnis, Virendra Somwanshi) — a colour key read Dr. Jhunjhunwala's white
 * shirt stripes and Mr. Chitnis's pale collar as ground, and a hand-traced
 * outline left Mr. Somwanshi's jaw angular — or keyed from a plain studio
 * ground where that was clean, or the client's own cut-out (Bony Niranjan
 * Dalal); where a photograph stops short of the card, its clothes are
 * carried out to the edge along the fall of the shoulder; the head at half the
 * card's height with the eyes at 37.5% — the framing of the strip above —
 * and the shoulders running off the foot of the card. Levels are set from
 * the photograph and the face brought to one brightness across the set.
 */
export const mentors: Mentor[] = [
  {
    id: "ashok-jhunjhunwala",
    name: "Dr. Ashok Jhunjhunwala",
    role: "Chairman, ITEL",
    bio: "Padma Shri, 2002, for distinguished service in science, engineering and telecommunications. Lifetime achievement awards from TiE and from the India Energy Storage Alliance.",
    image: "/images/mentors/ashok-jhunjhunwala.png",
  },
  {
    id: "suresh-nanda",
    name: "Suresh Nanda",
    role: "Former MD, ING Private Bank (Dubai)",
    bio: "Former Head of International Banking at Bank One, Mauritius, and an Independent Director at Multiples Private Equity. Holds a doctorate from IIM Calcutta and an AMP from The Wharton School.",
    image: "/images/mentors/suresh-nanda.png",
  },
  {
    id: "deepak-chitnis",
    name: "Deepak Chitnis",
    role: "Chief Designer, Lodha Group",
    bio: "Leads a team of more than 200. Since 2007 he has driven end-to-end design and championed organisational growth by mentoring leaders and building cross-functional collaboration.",
    image: "/images/mentors/deepak-chitnis.png",
  },
  {
    id: "virendra-somwanshi",
    name: "Virendra Somwanshi",
    role: "Group President & Head of Wealth, Federal Bank",
    bio: "25+ years in retail and private banking, with leadership and board roles across global and Indian financial institutions.",
    image: "/images/mentors/virendra-somwanshi.png",
  },
  {
    id: "bony-niranjan-dalal",
    name: "Bony Niranjan Dalal",
    role: "External Advisor",
    bio: "An accomplished businessman in Surat whose work spans real estate development and management, asset management and franchising, and an active investor across sectors and stages.",
    image: "/images/mentors/bony-niranjan-dalal.png",
  },
  {
    id: "ankit-agarwal",
    name: "Ankit Agarwal",
    role: "Head of Fund Management, Globe Capital",
    bio: "A CA and CFA. He oversees PMS, research, institutional advisory and FII services, along with the firm's proprietary investment and arbitrage strategy.",
    image: "/images/mentors/ankit-agarwal.png",
  },
];

/* --- LP Day -------------------------------------------------------------- */

export const lpDay = {
  eyebrow: "LP Day · An annual gathering for India's deep-tech builders",
  line1: "Operators. Investors.",
  line2: "Technologists.",
  body: "LP Day brings together investors, founders, mentors, and ecosystem leaders around India's deep-tech future.",
  /* `focus` is the `object-position` each still is cropped around. Both
     plates are now cut to the card's own 16:9 in `public/images/`, so
     neither is cropped again at render and both sit centred. It stays on the
     type because the card does still crop when a plate is replaced with one
     of another shape, and a replacement is the likeliest next change here. */
  editions: [
    {
      year: "2025",
      href: "/media/lp-day-2025",
      image: "/images/lpday-2025.jpg",
      focus: "50% 50%",
      imageAlt:
        "The lamp lit at 8X Ventures' Annual Investors Meet, IIT Madras Research Park, March 2025.",
    },
    {
      year: "2026",
      href: "/media/lp-day-2026",
      image: "/images/lpday-2026.jpg",
      focus: "50% 50%",
      imageAlt:
        "Delegates gathered under the DeepTech Industry Connect backdrop at IIT Gandhinagar, February 2026.",
    },
  ],
  promo: {
    eyebrow: "LP Day",
    title: "Where Capital Meets Conviction",
    body: "An annual gathering for India's deep-tech builders, investors, founders, and mentors in one room.",
    cta: { label: "LP Day Highlights", href: "/media/lp-day" },
  },
} as const;

/* --- Closing CTA --------------------------------------------------------- */

export const closingCta = {
  line1: "Building something the",
  line2: "world is not ready for yet?",
  ghost: "Good.",
  cta: { label: "Share Your Vision", href: "/contact" },
} as const;
