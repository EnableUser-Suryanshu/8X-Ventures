/**
 * Perspectives — the article pages behind `/media/[slug]`.
 *
 * Traced from the Figma prototype's perspective frame (node 317-759), which is
 * drawn for "DeepTech Commercialisation Is Not a Straight Line". That piece's
 * body is the frame's own copy, verbatim; its hero and the three related
 * cards' artwork are the frame's own image fills.
 *
 * `/media/[slug]` was a "this gallery is being prepared" placeholder before
 * this, so every article link on the site was a dead end.
 *
 * The three "Articles" are 8X's own posts from the old site
 * (8xventures.co/blog), brought over with their text as published so the
 * cards open here instead of sending the reader to the old domain.
 */

export type ArticleBlock =
  | { kind: "p"; text: string }
  /** The frame's bold run-in headings inside the body. */
  | { kind: "h"; text: string }
  /** A bulleted list, as the 8X blog posts set their criteria and steps. */
  | { kind: "list"; items: readonly string[] };

export type Article = {
  slug: string;
  /** The frame's meta line: kicker, date, reading time. */
  kicker: string;
  date: string;
  readingTime: string;
  /** The title breaks across two lines, the second in brand blue. */
  title: { line1: string; line2: string };
  /** Flattened for `<title>`, metadata and the related cards. */
  titlePlain: string;
  image: string;
  imageAlt: string;
  body: readonly ArticleBlock[];
};

export const perspectiveLabels = {
  related: { lead: "Related", accent: "articles" },
} as const;

export const articles: readonly Article[] = [
  {
    slug: "deep-tech-commercialisation",
    kicker: "Perspective",
    date: "Aug 12, 2026",
    readingTime: "5 min read",
    title: {
      line1: "DeepTech Commercialisation",
      line2: "Is Not a Straight Line",
    },
    titlePlain: "DeepTech Commercialisation Is Not a Straight Line",
    image: "/images/perspectives/deep-tech-commercialisation.jpg",
    imageAlt:
      "Two engineers in cleanroom suits inspecting a semiconductor wafer on a fabrication line.",
    body: [
      {
        kind: "p",
        text: "DeepTech companies are not built like conventional startups. The technology cycle is longer, the diligence is deeper, the customer is harder to win and the market may not yet have language for the product. That is what makes the opportunity meaningful.",
      },
      { kind: "h", text: "The first risk is technical. The second is commercial." },
      {
        kind: "p",
        text: "Most DeepTech founders begin with a breakthrough. A sensor that can operate in extreme conditions. A diagnostic platform that changes testing economics. A robotics system that works outside controlled environments. A compute architecture that improves performance at the infrastructure layer.",
      },
      {
        kind: "p",
        text: "But a breakthrough is not yet a company. The work begins when the technology meets the market.",
      },
      { kind: "h", text: "Customers do not buy science. They buy outcomes." },
      {
        kind: "p",
        text: "DeepTech founders must translate complexity into value: lower downtime, higher accuracy, better yield, lower cost, faster deployment, higher resilience, stronger compliance.",
      },
      {
        kind: "p",
        text: "The more complex the technology, the clearer the commercial case must be.",
      },
      { kind: "h", text: "Capital must understand time." },
      {
        kind: "p",
        text: "DeepTech companies often need longer timelines than software-first companies. There may be pilots, certifications, hardware cycles, manufacturing constraints, enterprise procurement and regulatory pathways to work through.",
      },
      {
        kind: "p",
        text: "This does not make the company weaker. It makes the investor's role more important.",
      },
      { kind: "h", text: "India has the ingredients." },
      {
        kind: "p",
        text: "India has engineering talent, research depth, cost advantage, industrial demand and large domestic markets. What the ecosystem needs is focused capital, patient conviction and stronger bridges between research, industry and venture.",
      },
      { kind: "p", text: "That is the work ahead." },
      { kind: "h", text: "DeepTech is not a category. It is a foundation." },
      {
        kind: "p",
        text: "The next generation of Indian companies will not only serve digital markets. They will build the physical layer underneath them.",
      },
    ],
  },
  {
    slug: "why-startups-must-invest-in-a-strong-patent-strategy",
    kicker: "Articles",
    date: "Jun 13, 2023",
    readingTime: "6 min read",
    title: {
      line1: "Why Startups Must Invest",
      line2: "In A Strong Patent Strategy",
    },
    titlePlain: "Why Startups Must Invest In A Strong Patent Strategy",
    image: "/images/perspectives/patent-strategy.jpg",
    imageAlt: "Layered technical blueprints of mechanical assemblies, lit in blue.",
    body: [
      {
        kind: "p",
        text: "Patents became a sideline topic from the ’80s to the 2010s. Thanks to legal battles and public squabbles between tech giants, it is becoming mainstream again. Thanks to ignorant startups who think “all patents are important”, a lot of sneaky IP lawyers are making ridiculous money by luring startups to pay them for the intellectual property work. 8X Ventures took up this trivial battle recently, did some endless googling and spoke to a lot of crazy folks. Read on to know it all now. Before we say more crazy things, let’s understand the basics first. For an invention to be patentable, it should meet four basic criteria:",
      },
      {
        kind: "list",
        items: [
          "Novelty — it’s new in the world",
          "Non-obvious — it’s not obvious to someone skilled in the relevant field",
          "Usefulness — it has use in the industry or day-to-day life",
          "Patentable subject matter — it should not be restricted by law.",
        ],
      },
      { kind: "h", text: "Where Exactly Does The Problem Lie?" },
      {
        kind: "p",
        text: "The above criteria do not stop anyone from filing a patent application, even if it is just a minor improvement over the existing solution, as long as it is novel and solves a problem. This might not be a problem today or for everyone, but it could be tomorrow and already is for many.",
      },
      {
        kind: "p",
        text: "An even broader problem is that many companies fail to create valuable patents because they focus too much on technical details instead of broader conceptual protection. Even if a patent is just a slight improvement over core technology, it shall be able to block competitors from offering competing products with their slight technical patented differentiation. Almost two decades old, Amazon’s “one-click ordering” patent is a 19-page patent filing and is mostly made up of flow chart diagrams that show the sequence of events that enable buyers to place an order with a single click and not just the algorithm itself. Many people in technology hate this type of broad patent since they can’t find a turnaround for such a strongly defensible patent.",
      },
      {
        kind: "p",
        text: "According to Esha Arya, Vice-Chairperson at JBM Group and Partner at 8X Ventures, “Companies should adopt a business-driven approach to patenting. It is always good to work with a patent strategist skilled in conceptual protection to identify key patent assets. This way, they can avoid wasting money on patents.”",
      },
      {
        kind: "p",
        text: "Moreover, as per an analyst’s report, more than 95% of patents are worthless.",
      },
      { kind: "h", text: "The Importance Of Defensible Patents" },
      {
        kind: "p",
        text: "A strong patent provides a competitive advantage by preventing others from using or selling the invention, thereby allowing the patent holder to capture market share and generate revenue. Moreover, patents provide startups with a source of revenue through licencing and enable them to attract investors by demonstrating that they have a strong IP portfolio.",
      },
      {
        kind: "p",
        text: "Drawing further on Amazon’s example, estimates suggest that since 1999, the 1-Click patent has generated billions of dollars in revenue for Amazon.com. Even Apple licenced the technology from Amazon and used it on its iTunes Store and iPhoto.",
      },
      {
        kind: "p",
        text: "Another example is Pfizer’s Lipitor patent, which recently expired, minted double-digit billion dollars annually for several years for the company. The patent covered the drug atorvastatin, which is used to lower cholesterol levels. Undoubtedly, it turned out to be highly profitable and helped establish Pfizer as a leader in the pharmaceutical industry.",
      },
      {
        kind: "p",
        text: "“Indian startups should also closely monitor the expected overhaul of India’s patent laws, which was recently announced by the Central Government. These changes may significantly impact future DeepTech patenting, ” says Dedipyaman Shukla, Legal & Policy Consultant.",
      },
      { kind: "h", text: "Why Should Companies Build A Formidable Patent Strategy?" },
      {
        kind: "p",
        text: "A portfolio of patents with one core technology and other minor improvements on this technology, along with use cases, form a formidable protection from competitors.",
      },
      {
        kind: "p",
        text: "Patent portfolio creation strategies can be used to force competitors to licence their technology. For example, a competitor has a core technology patent, and your company fences them in by patenting all potential uses of the patent. To use the core technology, the competitor will have to licence your technology while you can get their core technology.",
      },
      {
        kind: "p",
        text: "8X Ventures reviews 350+ DeepTech startups each month before making investments. In their eagerness to impress investors, startups often pitch their patents as defensible when, in reality, a slight deep dive by 8X Ventures often proves that it is a standalone patent without a clear patent portfolio or strategy.",
      },
      {
        kind: "p",
        text: "According to Govind Kedia, Managing Director of Arctic Invent, “Every field has a few core innovations, and then technology is built on top of this innovation. Patents follow the S-Curve of technology maturation and saturation. Less than 5% of all technology created (patented or otherwise) can be called core innovation. 95% of technology built is either a use case or incremental innovation. 99% of companies would not exist if a business was only focused on core innovation. Besides, universities are in the business of scientific breakthroughs and core technology innovations.”",
      },
      {
        kind: "p",
        text: "Govind further suggests that startups should use patent data to identify opportunities and look at the big picture to see what are possible areas and innovation spaces in the technology space. Visualising data in different domains, such as in these studies: electric vehicle landscape, drone technology, and gaming technology, can help in finding direction.",
      },
      { kind: "h", text: "What Can DeepTech Startups Do To Improve Their Patent Strategy?" },
      {
        kind: "p",
        text: "Here are a few strategies that DeepTech startups can use to defend themselves using patents:",
      },
      {
        kind: "list",
        items: [
          "There is a need to balance quality vs quantity, and it is ok to have improvement patents along with a few core ones. However, together it should create a portfolio which is monetisable and defensible. Slight improvement patents can serve as a foundation for building a broader IP portfolio. Patents are important in the DeepTech startup journey, but the business model and the road to profitability must be well-defined.",
          "Conduct thorough patent searches before filing for a patent. This can help startups identify potential legal challenges.",
          "Invest in skilled patent attorneys who can ensure your patents are defensible and align with your business strategy.",
          "Be proactive in patent enforcement and taking legal action against infringers, which means keeping a watch on patents by competitors or new entrants. This can help you protect your innovations and send a clear message to competitors that you are serious about protecting their intellectual property.",
          "Conduct timely intellectual property audits. A general-purpose intellectual property audit can help better align the patenting strategy with the overall business strategy of the company. Further, limited-purpose audits can be useful when bracing for patent litigation.",
          "Use a bouquet of IP assets such as patents, trademarks, designs, copyrights, and strong legal agreements with IP clauses.",
        ],
      },
    ],
  },
  {
    slug: "transforming-indias-water-sanitation-and-hygiene-landscape",
    kicker: "Articles",
    date: "Jun 13, 2023",
    readingTime: "4 min read",
    title: {
      line1: "Transforming India's Water,",
      line2: "Sanitation, And Hygiene Landscape",
    },
    titlePlain: "Transforming India's Water, Sanitation, And Hygiene Landscape",
    image: "/images/perspectives/wash-landscape.jpg",
    imageAlt: "A skid-mounted water treatment unit installed outside village housing.",
    body: [
      { kind: "h", text: "What is going on?" },
      {
        kind: "p",
        text: "According to a recent report by India's government's policy think tank, the NITI Aayog, the country constitutes 18% of the world's population but only 4% of the planet's water resources. India is one of the most water-stressed nations globally, and a significant proportion of its citizens confront severe to extreme water scarcity. Numerous independent research studies show that more than 5 million sanitation workers are employed nationwide in various sanitation-related jobs. Of this group, nearly 2 million workers are responsible for undertaking high-risk tasks such as cleaning sewers and septic tanks. This degrading, inhumane, a form of untouchability, and severe disease-causing practice got prohibited in India in 1993. But it wasn't until two decades later that the legal definition was expanded to encompass the manual cleaning of drains, sewers, and septic tanks. The situation on the ground is much more gruesome than what is often reported, and many deaths and sicknesses of sanitation workers go unreported. Now, nearly a decade has again gone by, but the numbers above and the reality of their miserable lives still stand firm.",
      },
      { kind: "h", text: "What does it mean?" },
      {
        kind: "p",
        text: "Water, sanitation and hygiene come under the basic necessities of any developed civilization in the modern world. According to a survey conducted in 2018, nearly 80% of Indian households do not have piped water connections. Nearly 70% of urban households are not connected to a central sewer system, let alone talk about the situation of rural households. If we compare it to a developed nation such as Japan, the vast majority of the population has access to an upgraded water source. Approximately 97% of individuals receive piped water supply from public utilities, and around 99.8% of the population is covered by the public sewerage system. Thanks to India's huge workforce, emerging technologies and geopolitical shift, India is projected to be among the next top contenders for a super economic power globally. However, without establishing a solid basic infrastructure, that projection might just remain a dream.",
      },
      { kind: "h", text: "Why does it matter?" },
      {
        kind: "p",
        text: "Non-revenue water is the water lost in the distribution system before it reaches the customers and for which no revenue is generated. This could include water lost due to leaks, theft, and metering inaccuracies, among other reasons. In developing countries, if the current NRW is reduced to even half, it could generate ~3bn in cash yearly for the water sector. India's NRW is 38%, just above the global average range of 30% to 35%, as reported by the World Bank. African countries are in much worse conditions, with NRW falling between 40 to 50%. On the other hand, comparatively, Japan has it under 10% and water leakage under 4%.",
      },
      {
        kind: "p",
        text: "Besides generating big revenue, NRW reduction could help reduce carbon emissions in agricultural practices, as more than 60% of the country's irrigated agriculture supplies depend on groundwater. Indian agriculture continues to be a crucial sector in the country's economy and is among the world's leading rice producers. However, rice paddies are responsible for generating considerable methane emissions in the agricultural industry. Due to contaminated groundwater, anaerobic bacteria can thrive in rice paddies, producing methane that contributes to greenhouse gas emissions and global warming. The International Rice Research Institute (IRRI) estimates that approximately 10-20% of India's overall greenhouse gas emissions come from methane generated by rice cultivation, a substantial amount that can not be ignored.",
      },
      {
        kind: "p",
        text: "India has consistently enhanced access to piped water and sanitation services while maintaining comparatively low tariffs. However, utility records from 12 provinces in 2009 showed unsatisfactory service continuity, substantial system losses, and insufficient revenue recovery. Factors such as better sewer systems, improved water quality, and lesser carbon emissions mean better quality of life for its citizens, lesser environmental harm, and more business opportunities. In addition, the combined efforts of government initiatives and emerging technologies can potentially eliminate age-old discrimination based on caste that has plagued the most marginalized communities. Let us delve into how this can be achieved.",
      },
      {
        kind: "p",
        text: "The government's flagship initiatives in the WASH sector, including Swachh Bharat Abhiyan, Jal Jeevan Mission, and Har Ghar Jal, have significantly improved sanitation and water access in India by prioritizing sustainable practices such as waste management, sustainable water usage, and decentralized distribution and maintenance of water, offering long-term solutions for WASH challenges.",
      },
      {
        kind: "p",
        text: "On the technology front, Indian deeptech startups such as Solinas Integrity, creating robotic solutions for the pipeline and sanitation industry, are addressing challenges such as water leakages and eliminating manual scavenging. Overall, the WASH sector is undergoing a significant transformation worldwide, driven by the emergence of advanced technologies in connectivity, mobility, automation, and analytics.",
      },
    ],
  },
  {
    slug: "me-too-drone-startups-a-boon-or-bane-for-the-industry",
    kicker: "Articles",
    date: "Apr 11, 2023",
    readingTime: "5 min read",
    title: {
      line1: "Me Too Drone Startups:",
      line2: "A Boon Or Bane For The Industry?",
    },
    titlePlain: "Me Too Drone Startups: A Boon Or Bane For The Industry?",
    image: "/images/perspectives/drone-startups.jpg",
    imageAlt: "A camera drone in flight against a dusk sky.",
    body: [
      { kind: "h", text: "What is going on?" },
      {
        kind: "p",
        text: "From nano drones that could feature as the potential supporting cast in futuristic Bond movies to autonomous ones that could fly a 200 kg payload like a superman buddy without a sweat, are all already here. Good enough to impress a bond girl! The question is if drones have been around for almost a century, why don’t we encounter their presence often? This is a simple question that’s easier to answer but harder to realise and find a turnaround for if you were building a drone startup and maybe pitching to a VC.",
      },
      {
        kind: "p",
        text: "Over the past decade, the use of drones has become increasingly popular in various industries, including construction, agriculture, law enforcement, defence, telecom, logistics, et cetera, you name it. To offer some context, Statista estimated that the global helicopter market as of 2021 was worth US$48.2 billion. The drone industry is projected to reach the same valuation in less than a decade. This Fast Company article says the drone market revenue figure could reach over $500 billion by 2030. Who could say? Now with the advent of affordable drone technology, its widespread availability, and progressive government regulations across the globe, a surge of new startups has emerged in the market, competing to offer innovative and cost-effective solutions for various applications. However, this bandwagon effect has led to a lot of Me Too drone startups - those that replicate existing technologies or business models without offering any substantial improvements or differentiation.",
      },
      { kind: "h", text: "What does it mean?" },
      {
        kind: "p",
        text: "The rise of Me Too drone startups has both positive and negative implications for the global market. On the one hand, it reflects the democratization of technology and entrepreneurship, allowing more people to start businesses and create jobs. By January, 2022, the USA had 340,000 commercial and 500,000 recreational drones. In the coming years, India would need nearly 100,000 drone pilots. Apart from creating these jobs, this Me too rise also fosters competition, which can drive innovation and improve existing technologies. However, the proliferation of Me Too companies can also stifle innovation, saturate the market, and create confusion for customers who have difficulty distinguishing between similar offerings. Additionally, these startups may not have the financial resources or expertise to sustain their operations over the long term, leading to a high failure rate. A report by CB Insights analyzed 70 drone startups that raised over $1M in funding between 2014 and 2019, around 61% of them failed or exited the market, while only 5% of them achieved unicorn status (i.e. Zipline, Shield AI, Skydio and Epirus). Besides, irrespective of how convincing your storytelling sounds or how exciting the fantasy world one promises to create, the complete shutdown or bankruptcy of Lily Robotics, Airware, 3D Robotics and GoPro Karma could not compensate for the nightmares of people employed, invested and customers who paid in advance to buy the product.",
      },
      { kind: "h", text: "Why does it matter?" },
      { kind: "h", text: "For markets: Foresight prevents bubble bursts." },
      {
        kind: "p",
        text: "The surge of Me Too drone startups has significant implications for both developing and developed nations. In developing nations, where access to technology and capital is limited, the rise of these startups can provide opportunities for local entrepreneurs to enter new markets and leverage existing technologies. However, these startups must also contend with challenges such as regulatory barriers, lack of infrastructure, and competition from established players. In India, Reliance Industries has put together an aggressive plan to become a key player in the expected $5 billion market in India by the end of the decade. In developed nations, where the drone industry is more mature, the emergence of Me Too drone companies can exacerbate the challenges faced by existing players, who may struggle to differentiate themselves from competitors and maintain market share. In the past 10 years, drone-delivery companies in the major markets have received over $1 billion in funding, resulting in a fiercely competitive segment with more than 100 players, all of whom have been able to enter the market with relatively low barriers. This has led to a race to the bottom, with companies engaging in price wars to gain market share, which can erode profitability and sustainability over the long term.",
      },
      { kind: "h", text: "For society: Public acceptance & low-cost accessibility." },
      {
        kind: "p",
        text: "In terms of public acceptance, in a survey of over 4,500 people across six countries, most viewed drone delivery in a highly favourable light, with a ratio of 3.5 adopters for every non-adopter. This does not imply drone accidents don’t happen, they might not be just properly communicated or reported. In terms of accessibility, if all other factors are equal, consumers favour deliveries with the lowest cost option when compared to electric cars, autonomous cars, and ground robots, which are continuously decreasing in cost as they mature.",
      },
      { kind: "h", text: "What’s next? Speed and sound judgment are key." },
      {
        kind: "p",
        text: "To address the challenges posed by Me Too drone startups, stakeholders must take a collaborative approach to foster innovation and sustainable growth in the industry. Governments can play a role in developing regulatory frameworks that promote competition and innovation while ensuring safety and privacy. Investors and incubators can support startups that offer unique and differentiated solutions rather than simply replicating existing technologies. Established players can focus on building brand loyalty and developing long-term partnerships with customers based on quality and value rather than price. Consumers can educate themselves on the different offerings in the market and make informed decisions based on their needs and preferences.",
      },
      {
        kind: "p",
        text: "In conclusion, the rise of Me Too drone startups presents both opportunities and challenges for the global market, particularly in the context of developing and developed nations. To ensure sustainable growth and innovation, stakeholders must take a collaborative and forward-thinking approach that prioritizes differentiation, value, and quality over short-term gains.",
      },
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

/** What an article card needs, wherever it is shown. */
export type ArticleCardData = {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  href: string;
  /** The card's kicker. The client's doc files all three blog items under
   *  "Articles"; the piece written for the frame is a "Perspective". */
  kicker: string;
};

/** Every article the site has, newest first — what the `/media` listing and
 *  each article's "Related articles" shelf read. */
export const articleIndex: readonly ArticleCardData[] = articles.map((a) => ({
  title: a.titlePlain,
  date: a.date,
  image: a.image,
  imageAlt: a.imageAlt,
  href: `/media/${a.slug}`,
  kicker: a.kicker,
}));
