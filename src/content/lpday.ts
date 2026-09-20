/**
 * LP Day — traced from the Figma prototype's frame (node 320-55).
 *
 * Eight bands: the auditorium hero, the intro, the dark "why it exists" field
 * with its scrolling list, the programme grid, the gallery with a carousel per
 * edition, the quotes field, and the closing panel.
 *
 * The frame's copy, except where the client's own photographs say otherwise —
 * see `lpDayGallery` and `lpDayProgramme`, which name what actually happened
 * at each edition rather than describing a gathering in general.
 *
 * Every photograph on this page is now the client's, from the Drive folder
 * "LP Day highlights". The band backgrounds used to be the frame's image
 * fills — a stock auditorium, a stock semiconductor line, a stock arena —
 * and those were the last stock photographs on the page.
 */

export const lpDayHero = {
  eyebrow: "LP Day · An annual gathering for India's deep-tech builders",
  line1: "Where capital",
  line2: "meets conviction",
  body: "LP Day is 8X Ventures' annual gathering for India's deep-tech builders, investors, founders, mentors and ecosystem leaders",
  image: "/images/lpday/hero.jpg",
  imageAlt:
    "A full auditorium at DeepTech Industry Connect 2026, the front rows turned towards the camera.",
} as const;

export const lpDayIntro = {
  line1: "Operators. Investors.",
  line2: "Technologists.",
  sub1: "One room. One ecosystem.",
  sub2: "One conversation around India's deep-tech future.",
  body: "LP Day brings together the people backing, building and enabling the next generation of frontier companies from India.",
} as const;

export const lpDayWhy = {
  eyebrow: "Why LP Day exists",
  line1: "Deep-tech needs",
  line2: "more than capital",
  /** The frame lights the third and dims the rest — the same device as
   *  `/about`'s philosophy list, so it is built the same way. */
  items: [
    "Patient investors",
    "Technical mentors",
    "Industry access",
    "Policy awareness",
    "Commercial pathways",
    "Long-term conviction",
  ],
  activeIndex: 2,
  close: "LP Day is designed to bring these forces closer together.",
  image: "/images/lpday/why.jpg",
} as const;

export const lpDayProgramme = {
  eyebrow: "The Programme",
  line1: "What happens",
  line2: "at LP Day",
  /* Written from the client's photographs of the two editions rather than
     from the frame, which described a gathering in general. The count of
     stands is what the 2026 photographs show; there may have been more than
     the camera reached. */
  items: [
    {
      title: "Portfolio showcases",
      body: "Every company takes a stand. Ten of the twelve exhibited at IIT Gandhinagar in 2026, alongside other deep-tech teams and the host campus.",
    },
    {
      title: "Sessions and panels",
      body: "Investors and operators on stage — 2026 ran “Startups and the Disruption Conundrum” and “Understanding the Disruption Cycle”.",
    },
    {
      title: "Inside the research ecosystem",
      body: "Each edition is held in one: IIT Madras Research Park in 2025, IIT Gandhinagar and the ISRO Space Applications Centre in 2026.",
    },
    {
      title: "Ecosystem exchange",
      body: "Mentors, operators, institutions and founders connect around real company-building needs",
    },
  ],
} as const;

export type GalleryImage = { src: string; alt: string };

export type LpDayEdition = {
  year: string;
  body: string;
  images: readonly GalleryImage[];
};

export const lpDayGallery = {
  eyebrow: "Gallery & Highlights",
  line1: "Moments from",
  line2: "the 8X ecosystem",
  body: "Founders, investors, mentors and partners in conversation around India's frontier technology opportunity.",
  /* The client's own photography, from the Drive folder "LP Day highlights",
     eight frames an edition — the frame's order, 2026 first.

     Each edition has a name of its own on the standees in these photographs,
     and the standfirsts now carry it: the two are not the same event twice.
     2025 is the Annual Investors Meet, one day at IIT Madras Research Park;
     2026 is DeepTech Industry Connect, two days across IIT Gandhinagar and
     the ISRO Space Applications Centre. */
  editions: [
    {
      year: "2026",
      body: "DeepTech Industry Connect 2026: 12 February at IIT Gandhinagar, 13 February at the ISRO Space Applications Centre. Ten of the twelve portfolio companies took a stand, alongside other deep-tech teams and the host campus.",
      images: [
        { src: "/images/lpday/2026-1.jpg", alt: "The DeepTech Industry Connect standee on the lawn, listing both days and both venues." },
        { src: "/images/lpday/2026-2.jpg", alt: "The Enerzi Microwave Systems stand." },
        { src: "/images/lpday/2026-3.jpg", alt: "A drone on the IIT Gandhinagar stand." },
        { src: "/images/lpday/2026-4.jpg", alt: "Guests examining hardware brought to one of the stands." },
        { src: "/images/lpday/2026-5.jpg", alt: "The ceremonial lamp lit under the DeepTech Industry Connect backdrop." },
        { src: "/images/lpday/2026-6.jpg", alt: "The audience in the open-air conference area." },
        { src: "/images/lpday/2026-7.jpg", alt: "A session on the disruption cycle, the slide up behind the panel." },
        { src: "/images/lpday/2026-8.jpg", alt: "Delegates talking between the stands." },
      ],
    },
    {
      year: "2025",
      body: "8X Ventures' Annual Investors Meet, at IIT Madras Research Park on 7 March 2025: company showcases, laboratory visits across the park, and the investors, founders and mentors behind them in one room.",
      images: [
        { src: "/images/lpday/2025-1.jpg", alt: "The ceremonial lamp lit in front of the Annual Investors Meet screen." },
        { src: "/images/lpday/2025-2.jpg", alt: "A speaker opening the meet from the lectern, the 8X Ventures mark beside him." },
        { src: "/images/lpday/2025-3.jpg", alt: "Delegates gathered in the Research Park atrium before the programme." },
        { src: "/images/lpday/2025-4.jpg", alt: "The gathering photographed together in the atrium." },
        { src: "/images/lpday/2025-5.jpg", alt: "Guests at a laboratory bench during the tour of the park." },
        { src: "/images/lpday/2025-6.jpg", alt: "A student-built formula car shown to guests on the tour." },
        { src: "/images/lpday/2025-7.jpg", alt: "The welcome walkway, Annual Investors Meet standees along it." },
        { src: "/images/lpday/2025-8.jpg", alt: "Guests in conversation between sessions." },
      ],
    },
  ] as readonly LpDayEdition[],
} as const;

/**
 * The three the client publishes under "What our ecosystem says" in their
 * own website copy deck, verbatim. They replace three the frame invented,
 * which read plausibly and came from nowhere. 8X publish them unattributed,
 * so they are unattributed here too.
 */
export const lpDayQuotes = {
  heading: "What the ecosystem says.",
  items: [
    "8X is building a serious platform for India's deep-tech opportunity.",
    "They combine founder empathy with institutional discipline.",
    "Deep-tech needs long-term capital. 8X understands that.",
  ],
  image: "/images/lpday/quotes.jpg",
} as const;

export const lpDayCta = {
  line1: "India's deep-tech story",
  line2: "is being built now.",
  line3: "Be part of the room.",
  link: { label: "Connect With Us", href: "/contact" },
  /* The frame's own plate (node fill, 4096x2458): a dark crescent sweeping in
     from the left with the indigo opening out to the right. */
  image: "/images/lpday/cta-panel.jpg",
} as const;
