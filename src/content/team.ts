/**
 * Team page content, traced from artboard page 4 (1920 × 5947) and the Figma
 * prototype of the same frame.
 *
 * The people are 8X's own — four partners and board advisors, then seven in
 * the team. The partners and the three longest-standing of the team come from
 * 8xventures.co/team with their portraits from the same source; the rest of
 * the roster is the client's "Photos of Team Members" folder on Drive, which
 * is where the four newest arrived and where the two who left stopped being
 * listed. The artboard fills its team grid with eight cards by repeating four
 * placeholder names ("Akash Patel", "Karan Wadhwani"); these are the real ones.
 */

export type Person = {
  id: string;
  name: string;
  image: string;
  /**
   * How the portrait meets the card.
   *
   * "cutout" is the house style and the default: the subject keyed off its
   * ground, standing on the card's blue. "plate" is for the photographs whose
   * ground will not key — a cafe behind one, a soft wall the same value as the
   * face in front of it against another — where the choice is a photograph
   * filling the card or no portrait at all. See `.tm-card-photo` in
   * globals.css for the top fade that keeps a plate from reading as a
   * rectangle dropped on the card.
   */
  portrait?: "cutout" | "plate";
  /**
   * The same cut-out in colour, for the home page's strip, where the
   * featured card is shown in colour and only the cards behind it are
   * greyed. The team page bakes its portraits grey, so those files cannot
   * serve both. Absent, the strip falls back to `image`.
   */
  colour?: string;
  /**
   * Everything below is optional, and four people are missing all of it. Drive
   * supplied them as a photograph and a name and nothing else; the card and
   * the member page leave out what is not there rather than render an empty
   * role line or a link to nowhere. Nothing here is written about a person
   * from outside the client's own material.
   */
  role?: string;
  /** Shown on hover and on keyboard focus. 8X's own words, from their site. */
  bio?: string;
  linkedin?: string;
  /**
   * The long-form biography, one string per paragraph, for the member's own
   * page. The frame sets three paragraphs; only Chirag's is written that way
   * so far — it is the one the prototype fills in, verbatim. Everyone else
   * falls back to the single paragraph in `bio`, which is 8X's own copy from
   * their site. Nothing here is written about a person from outside those two
   * sources.
   */
  profile?: readonly string[];
  /**
   * The address behind the frame's mail button.
   *
   * Only `shreya.kothari@8xventures.co` is attested — it appears once in the
   * client's "8x Existing Content" doc. The rest are that sample's pattern,
   * `firstname.lastname@8xventures.co`, applied to the roster at the client's
   * instruction; 8X publish no per-person address on their own site, where the
   * only one is the shared `pitch@8xventures.co`. Treat the six derived
   * entries as needing confirmation before this goes public — a wrong address
   * bounces, or reaches the wrong person. The four who arrived from Drive have
   * no address here at all, derived or otherwise.
   */
  email?: string;
};

export const teamHero = {
  line1: "A Team Built",
  line2: "for Complexity",
  body: "Deep-tech needs investors who understand technology, markets, capital, and time.",
} as const;

export const teamPartners = {
  eyebrow: "Partners & Board",
  line1: "Partners With",
  line2: "Operating Depth",
  body: "Our partners and board advisors bring experience across venture capital, industry, technology, global markets, and governance.",
  people: [
    {
      id: "chirag-gupta",
      email: "chirag.gupta@8xventures.co",
      name: "Chirag Gupta",
      role: "Managing Partner",
      image: "/images/team/chirag-gupta.png",
      bio: "Leadership positions at 500 Global, Careem (acquired by Uber at $3.1bn), McKinsey, PwC and Korn Ferry, across 11 countries.",
      linkedin: "https://www.linkedin.com/in/chirag-gupta/",
      /* Verbatim from the prototype's member frame (node 311-514). */
      profile: [
        "Chirag has held leadership positions at 500 Global, a venture capital firm with over $2bn in assets under management, Careem, acquired by Uber at $3.1bn, McKinsey, PwC and Korn Ferry. Across those roles he has worked in eleven countries.",
        "He began his journey as the “youngest coder in India” and has represented India in global DeepTech forums. He built proprietary simulation AI models to address Saudi Arabia's civil defence challenges and is now part of the advisory board of the innovation committee at IIT Chennai.",
        "He holds an MBA from Chicago Booth and NTU Singapore and a BBS from Delhi University. He also received a scholarship to attend the Harvard Business Analytics Program.",
      ],
    },
    {
      id: "vinod-agarwal",
      email: "vinod.agarwal@8xventures.co",
      name: "Vinod Agarwal",
      role: "Partner & Board Advisor",
      image: "/images/team/vinod-agarwal.png",
      bio: "20+ years across multiple entrepreneurial ventures, with success in the polymer and steel industries, and an active investor worldwide in public and private markets.",
      linkedin: "https://www.linkedin.com/in/vinod-agarwal-aba3231b3/",
    },
    {
      id: "ajay-singh-rajput",
      email: "ajay.rajput@8xventures.co",
      name: "Ajay Singh Rajput",
      role: "Partner & Board Advisor",
      image: "/images/team/ajay-singh-rajput.png",
      bio: "25+ years across white goods, plastic processing and petrochemicals. He spearheads several polymers and petrochemicals businesses and has invested in startups across the Middle East, Asia and Europe.",
      linkedin: "https://www.linkedin.com/in/ajaysingh-rajput-6406146/",
      /* From the team detail pages in the client's "8x Existing Content" doc. */
      profile: [
        "Ajay has 25+ years of experience across white goods, plastic processing and petrochemicals. He spearheads several polymers and petrochemicals businesses and has invested in startups across the Middle East, Asia and Europe.",
        "He studied engineering at Jawaharlal Nehru Engineering College and holds an MBA from Dr Babasaheb Ambedkar University.",
      ],
    },
    {
      id: "esha-arya",
      email: "esha.arya@8xventures.co",
      name: "Esha Arya",
      role: "Partner & Board Advisor",
      image: "/images/team/esha-arya.png",
      bio: "Vice-Chairman of JBM Group, a $2.7bn conglomerate operating in 10 countries, where she is involved in executive decisions across automotive, sustainable technologies, AgriTech and deep-tech.",
      linkedin: "https://www.linkedin.com/in/eshaarya/",
      /* From the team detail pages in the client's "8x Existing Content" doc. */
      profile: [
        "Esha is the Vice-Chairman of JBM Group, a $2.7bn global conglomerate with operations across 10 countries. At JBM Group she is involved in executive decision-making for the manufacturing and deployment of automotive, sustainable technologies, AgriTech and DeepTech solutions. She led the development and deployment of manufacturing facilities for steel, automotive, textiles and many more industries, and has been a keynote speaker for NASSCOM and led multiple CII Tech discussions.",
        "She is actively mentoring early-stage DeepTech startups and is part of advisory boards across the USA, India, the UK and Singapore. She holds an MBA from INSEAD and a BBA from Boston University.",
      ],
    },
  ] as Person[],
} as const;

export const teamGroup = {
  eyebrow: "The Team",
  line1: "Operators. Investors.",
  line2: "Technologists.",
  body: "The people who work with founders every day.",
  /**
   * The three the site already carried and Drive still lists, then the four
   * Drive added. Saurabh Gunwant and Vikeesh Kesavan are gone: the client's
   * photo folder is the roster of record and neither is in it.
   *
   * Every role and every line of biography below is the team page of the
   * client's "8X Ventures Fund II — India DeepTech Fund" teaser, which
   * writes up all seven. That deck supersedes what was here for the three
   * who already had copy: it gives Shreya a portfolio-growth title rather
   * than a bare one, moves Kirthivasan from Analyst to Associate,
   * Investments, and has Rashi across investments as well as compliance.
   *
   * The deck also lists Saurabh Gunwant, Karan Wadhwani and Vikeesh
   * Kesavan. They are not in the photo folder, so they are not here.
   *
   * The order follows the deck's own, which runs the longest-standing
   * first.
   */
  people: [
    {
      id: "shreya-kothari",
  /* Attested in the client's content doc. */
      email: "shreya.kothari@8xventures.co",
      name: "Shreya Kothari",
      role: "Associate Principal, Portfolio Growth",
      image: "/images/team/shreya-kothari.png",
      colour: "/images/team/colour/shreya-kothari.png",
      bio: "Five years in financial services, driving portfolio growth and startup deal execution.",
      linkedin: "https://www.linkedin.com/in/shreyabagri/",
    },
    {
      id: "kirthivasan-suresh",
      email: "kirthivasan.suresh@8xventures.co",
      name: "Kirthivasan Suresh",
      role: "Associate, Investments",
      /* Drive has a newer photograph of him, taken on a rooftop against a
         city skyline. It cannot be keyed and the cut-out already on file is
         the better card, so this one stays until a cut-out arrives. */
      image: "/images/team/kirthivasan-suresh.png",
      bio: "A Mechanical Engineer with experience at CSIR-National Aerospace Laboratories.",
      linkedin: "https://www.linkedin.com/in/kirthivasan-suresh-747aa0202/",
    },
    {
      id: "rashi-jain",
      email: "rashi.jain@8xventures.co",
      name: "Rashi Jain",
      role: "Investments and Compliance Associate",
      image: "/images/team/rashi-jain.png",
      colour: "/images/team/colour/rashi-jain.png",
      bio: "A Chartered Accountant specialising in taxation, SEBI regulations, FEMA compliance and audits.",
      linkedin: "https://www.linkedin.com/in/ca-rashi-jain13/",
    },
    {
      id: "akash-patel",
      name: "Akash Patel",
      role: "Associate, Investments",
      image: "/images/team/akash-patel.jpg",
      portrait: "plate",
      bio: "An IIT Kanpur graduate blending founder-style execution across energy operations and startups, with significant experience at Schlumberger.",
    },
    {
      id: "madhukar-kota",
      name: "Madhukar Kota",
      role: "Operations and Compliance Associate",
      image: "/images/team/madhukar-kota.png",
      colour: "/images/team/colour/madhukar-kota.png",
      bio: "An MBA with 15+ years across private equity, fund accounting and capital markets.",
    },
    {
      id: "twinkal-janbandhu",
      name: "Twinkal Janbandhu",
      role: "Analyst, Compliance",
      image: "/images/team/twinkal-janbandhu.jpg",
      portrait: "plate",
      bio: "A law graduate and company secretary with expertise in governance, compliance and legal frameworks.",
    },
    {
      id: "priya-sathish",
      name: "Priya Sathish",
      role: "Analyst",
      image: "/images/team/priya-sathish.png",
      colour: "/images/team/colour/priya-sathish.png",
      bio: "A Biomedical Engineer with industrial experience at LifeCell and Apollo Hospitals.",
    },
  ] as Person[],
} as const;

/**
 * The mentor bands. The artboard lights one of the five and dims the rest,
 * with a rule beside it — the same device as `/about`'s philosophy list, so it
 * is built the same way: the highlight steps as the section crosses the
 * viewport, and nothing is hidden while it does.
 *
 * The eyebrow is the prototype's — the PDF export says "MENTORS" there, and
 * the prototype "OUR JOURNEY". 8X asked for the prototype's wording.
 */
export const teamMentors = {
  eyebrow: "Our Journey",
  line1: "Beyond Capital.",
  line2: "Built for DeepTech Growth.",
  items: [
    "Technology Experts",
    "Commercial Strategy",
    "Growth & Sales",
    "Industry Connections",
    "Strategic Advisors",
  ],
  /** Where the artboard's still frame sits. */
  activeIndex: 2,
  closing1: "The right expertise helps great technology",
  closing2: "become great businesses.",
} as const;

export const teamCta = {
  line1: "Founders do not need noise.",
  line2: "They need useful partners.",
  link: { label: "Pitch to Us", href: "/contact" },
} as const;
