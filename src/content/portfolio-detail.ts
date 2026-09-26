/**
 * The per-company detail page, traced from the Figma prototype's
 * `Portfolio / Company` frame (node 302-213, drawn for Neuralzome).
 *
 * The frame is one template applied to every company, so everything it sets
 * per company lives here and everything it sets once — the 8X View band and
 * the closing panel — lives at the bottom of the file.
 *
 * Each company's copy follows its brief in the Drive folder "Portfolio
 * companies' details", which all share one layout: a website descriptor, a
 * category, the founders with their roles, three paragraphs, and five
 * technology highlights (SanchiConnect's are "service highlights"). The page
 * carries that layout as written — `descriptor` is the descriptor line,
 * `intro` the three paragraphs verbatim, and `profile` the category, founders
 * and highlights, which the "Company snapshot" panel lists in the brief's own
 * order. Only `statement` and `why` are the frame's voice rather than the
 * brief's, and both are written from the brief's own sentences rather than
 * from outside knowledge.
 *
 * `gallery` is three photographs per company: the founders first, then two of
 * what the company makes or does. Most come from the photographs embedded in
 * the briefs; where a brief had no product shot, from the company's own
 * website (Pantherun's boards, XYMA's sensors, Neuralzome's robot, Trishul's
 * hot-fire test and engine). Anuna Labs has no founder photograph anywhere —
 * not in its brief, not on its site — so its three are its products.
 */

export type Founder = { name: string; role: string };

export type GalleryPhoto = {
  src: string;
  /** The small label over the caption: "Founders", "What they build"… */
  label: string;
  caption: string;
  alt: string;
};

export type CompanyDetail = {
  /**
   * The hero's standfirst: the brief's "Website descriptor". `highlight` is
   * the run the frame sets in brand blue inside it; it must appear in `text`
   * verbatim or it is simply not highlighted.
   */
  descriptor: { text: string; highlight: string };

  /** The info strip's third and fourth columns. Sector and fund are read from
   *  the company record so the strip and the card cannot disagree. */
  investedAt: string;
  status: string;

  /** The centred statement: line one in ink, line two in brand blue. */
  statement: { line1: string; line2: string };

  /** The brief's three paragraphs, verbatim. */
  intro: readonly string[];

  /** The dark "Why we invested" band. */
  why: {
    line1: string;
    line2: string;
    body: string;
    /** The listed environments/applications, in the frame's order. */
    environments: readonly string[];
    /** The bold line that closes the band. */
    close: string;
  };

  /** The brief's header block and highlights, for the "Company snapshot". */
  profile: {
    category: string;
    founders: readonly Founder[];
    highlightsLabel: string;
    highlights: readonly string[];
  };

  /** Three photographs: the founders, then two of the work. */
  gallery: readonly GalleryPhoto[];

  /**
   * The frame's own fills, lifted from the Figma file. Only Neuralzome's
   * exist — the frame was drawn for it. Anything missing falls back to the
   * company's mark on the designed bloom, and to the navy field the
   * environment photograph is graded to.
   */
  art?: {
    /** The product shot beside the name. */
    hero?: string;
    /** The company's logo lockup, set over that shot. */
    lockup?: string;
    /** The environment photograph behind "Why we invested". */
    why?: string;
    /** The product shot beside the snapshot rows. */
    snapshot?: string;
  };
};

/**
 * The circuit field behind 8X's own thesis, repeated on every company page.
 * The Figma file's own fill.
 */
export const detailArt = {
  circuit: "/images/portfolio-detail/circuit.jpg",
} as const;

export const portfolioDetails: Record<string, CompanyDetail> = {
  pantherun: {
    descriptor: {
      text: "High-speed data protection and encryption technology.",
      highlight: "encryption",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Encryption that keeps pace with",
      line2: "the data it protects.",
    },
    intro: [
      "Pantherun Technologies is a cybersecurity company building high-performance encryption and data-protection solutions for data-intensive and security-critical environments. Its approach combines hardware and software to secure data in real time, with a focus on high throughput and compatibility with existing infrastructure.",
      "The company’s technology is designed for organisations that cannot compromise on performance or security, including applications across defence, aerospace, telecommunications, smart-city infrastructure, industrial systems and IoT. Pantherun positions its products around AES-based encryption, real-time operation and minimal disruption to data formats and workflows.",
      "A core part of Pantherun’s product strategy is chip-based security. Its Pepper chip-and-software ecosystem is designed for high-speed encryption and embedded/edge deployments, making the company relevant to customers protecting sensitive data while retaining the speed required by connected systems.",
    ],
    why: {
      line1: "Security will stop being",
      line2: "a performance tax.",
      body: "Encryption is still treated as something you pay for in latency and throughput. As connected systems carry more sensitive data, protection has to run at line rate, in place, without rewriting the formats and workflows around it.",
      environments: ["DEFENCE", "AEROSPACE", "TELECOMMUNICATIONS", "INDUSTRIAL SYSTEMS", "SMART-CITY INFRASTRUCTURE"],
      close: "Pantherun is building for that world.",
    },
    profile: {
      category: "Cybersecurity / Advanced Computing",
      founders: [
        { name: "Srinivas Shekar", role: "Co-Founder & CEO" },
        { name: "Tiffany Chan", role: "Co-Founder & COO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Real-time encryption and data protection",
        "Hardware-assisted security architecture",
        "AES-based encryption for enterprise and critical-infrastructure contexts",
        "Chip and software platform for embedded and networked deployments",
        "Relevant to defence, aerospace, telecom, industrial automation and IoT",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/pantherun/g1.jpg", label: "Founders", caption: "Srinivas Shekar and Tiffany Chan", alt: "Portraits of Pantherun co-founders Srinivas Shekar and Tiffany Chan." },
      { src: "/images/portfolio-detail/pantherun/g2.jpg", label: "What they build", caption: "An encryption board from Pantherun’s hardware line", alt: "A Pantherun encryption circuit board." },
      { src: "/images/portfolio-detail/pantherun/g3.jpg", label: "What they build", caption: "A rack-mounted Pantherun encryption unit", alt: "A rack-mounted Pantherun encryption appliance." },
    ],
  },

  "tiea-connectors": {
    descriptor: {
      text: "Indigenous electrical and electronic connectors for demanding applications.",
      highlight: "electrical and electronic connectors",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "The components everything else",
      line2: "is assumed to plug into.",
    },
    intro: [
      "TIEA Connectors designs and manufactures electrical and electronic connectors, cable assemblies and related interconnect solutions. The company serves applications that require dependable signal integrity, mechanical reliability and consistent performance under demanding operating conditions.",
      "Its products are relevant across automotive, electric mobility, industrial electronics, aerospace and other equipment-intensive sectors. By focusing on locally engineered, high-quality interconnect products, TIEA is building domestic capability in a component category that is foundational to India’s manufacturing and electrification ambitions.",
      "The company supports OEMs and system integrators with connector solutions tailored to performance requirements, operating environments and production needs. Its official website presents ISO 9001 and IATF 16949 certifications, reflecting its quality-oriented manufacturing position.",
    ],
    why: {
      line1: "Electrification runs on parts",
      line2: "nobody sees.",
      body: "Connectors and harnesses are foundational to India's manufacturing and electrification ambitions, and they are still largely imported. Building them locally, to ISO 9001 and IATF 16949 quality, is infrastructure work.",
      environments: ["AUTOMOTIVE", "ELECTRIC MOBILITY", "AEROSPACE", "DEFENCE PROGRAMMES", "INDUSTRIAL ELECTRONICS"],
      close: "TIEA is building for that world.",
    },
    profile: {
      category: "Advanced Manufacturing / Electronic Components",
      founders: [
        { name: "Ajith Sasidharan", role: "Founder & CEO" },
        { name: "Punit Shridhar Joshi", role: "Founder & CTO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Electrical and electronic connectors",
        "Cable harnesses and custom interconnect assemblies",
        "Automotive and industrial connector systems",
        "Engineering support for OEM-specific requirements",
        "High-reliability manufacturing processes",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/tiea-connectors/g1.jpg", label: "Founders", caption: "Ajith Sasidharan and Punit Shridhar Joshi", alt: "TIEA founders Ajith Sasidharan and Punit Shridhar Joshi." },
      { src: "/images/portfolio-detail/tiea-connectors/g2.jpg", label: "What they build", caption: "TIEA’s manufacturing floor", alt: "Workstations on TIEA’s connector manufacturing floor." },
      { src: "/images/portfolio-detail/tiea-connectors/g3.jpg", label: "What they build", caption: "Connectors from TIEA’s range", alt: "Three connectors from TIEA’s product range." },
    ],
  },

  "solinas-integrity": {
    descriptor: {
      text: "Robotics and intelligence for water and sanitation infrastructure.",
      highlight: "water and sanitation infrastructure",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Seeing inside the infrastructure",
      line2: "nobody can reach.",
    },
    intro: [
      "Solinas Integrity is an IIT Madras-incubated deep-tech company transforming water, sewer and underground infrastructure through robotics, AI and digital intelligence. The company develops solutions to inspect, clean, monitor and manage critical water and sanitation assets more safely, efficiently and proactively.",
      "Its technology addresses difficult, hazardous and often invisible infrastructure challenges: pipeline inspection, sewer and septic-system operations, cleaning, compliance and preventive maintenance. By combining robotics with data-led diagnostics, Solinas helps municipal bodies, industrial customers and utility operators improve operational visibility and reduce reliance on manual intervention.",
      "Solinas is helping infrastructure operators move from reactive response to predictive, technology-enabled maintenance. Its work is especially relevant to India’s need for reliable urban water, wastewater and sanitation systems.",
    ],
    why: {
      line1: "Maintenance will move from",
      line2: "reactive to predictive.",
      body: "Water, sewer and underground assets fail out of sight, and the work of inspecting them is still hazardous and manual. Robotics and diagnostics turn invisible infrastructure into something operators can actually see and plan around.",
      environments: ["WATER PIPELINES", "SEWER NETWORKS", "SEPTIC SYSTEMS", "MUNICIPAL UTILITIES", "INDUSTRIAL PLANTS"],
      close: "Solinas is building for that world.",
    },
    profile: {
      category: "WaterTech / Robotics / AI",
      founders: [
        { name: "Divanshu Kumar", role: "Co-Founder & CEO" },
        { name: "Moinak Banerjee", role: "Co-Founder & CTO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Robotic inspection and cleaning systems",
        "AI-enabled diagnostics for underground assets",
        "Solutions for water pipelines, sewers and septic systems",
        "Monitoring and maintenance support for municipal and industrial users",
        "Safer alternatives to hazardous manual sanitation work",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/solinas-integrity/g1.jpg", label: "Founders", caption: "Divanshu Kumar and Moinak Banerjee", alt: "Solinas co-founders Divanshu Kumar and Moinak Banerjee." },
      { src: "/images/portfolio-detail/solinas-integrity/g2.jpg", label: "What they build", caption: "A Solinas pipe-inspection robot", alt: "A tracked Solinas pipe-inspection robot." },
      { src: "/images/portfolio-detail/solinas-integrity/g3.jpg", label: "In the field", caption: "Solinas equipment deployed on a sewer line", alt: "A field operator deploying Solinas inspection equipment into a sewer line." },
    ],
  },

  "xyma-analytics": {
    descriptor: {
      text: "Ultrasonic sensing and Industrial IoT for extreme industrial environments.",
      highlight: "Ultrasonic sensing",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Measuring what conventional",
      line2: "sensors cannot survive.",
    },
    intro: [
      "XYMA Analytics is a deep-tech sensing company that combines waveguide ultrasonic sensors, process models and data analytics on a secure Industrial IoT platform. Its technology is designed to deliver continuous, high-precision monitoring of critical industrial processes and assets, including those operating at extreme temperatures or in difficult-to-access environments.",
      "The company’s sensing platform enables plant operators to measure multiple process parameters and use actionable data to improve visibility, reliability and decision-making. XYMA is relevant where conventional sensing technologies struggle because of heat, safety constraints, location or process complexity.",
      "By combining proprietary sensor hardware, analytics and connected software, XYMA is building a complete industrial-monitoring stack for predictive maintenance, process optimisation and improved operational control.",
    ],
    why: {
      line1: "Plants will be run on",
      line2: "continuous measurement.",
      body: "Conventional sensing struggles where it matters most — extreme heat, hazardous access, complex processes. Continuous, multi-parameter measurement is what turns predictive maintenance and process optimisation from a slide into an operation.",
      environments: ["HIGH-TEMPERATURE PROCESSES", "REFINERIES", "POWER GENERATION", "METALS AND MATERIALS", "HARSH-ACCESS ASSETS"],
      close: "XYMA is building for that world.",
    },
    profile: {
      category: "Industrial IoT / Precision Sensing",
      founders: [
        { name: "Dr. Nishanth Raja", role: "Co-Founder & CEO" },
        { name: "Aswin Kumar Kathirvel", role: "Co-Founder & CTO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Waveguide ultrasonic sensing technology",
        "Multi-parameter process monitoring",
        "Industrial IoT platform integrating sensors, process models and analytics",
        "Monitoring in high-temperature and harsh environments",
        "Support for condition monitoring and process optimisation",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/xyma-analytics/g1.jpg", label: "Founders", caption: "Dr. Nishanth Raja and Aswin Kumar Kathirvel", alt: "Portraits of XYMA co-founders Dr. Nishanth Raja and Aswin Kumar Kathirvel." },
      { src: "/images/portfolio-detail/xyma-analytics/g2.jpg", label: "What they build", caption: "XYMA’s ultrasonic sensing hardware", alt: "XYMA’s ultrasonic sensing units and monitoring console." },
      { src: "/images/portfolio-detail/xyma-analytics/g3.jpg", label: "In the field", caption: "An XYMA sensor set up for testing", alt: "An engineer setting up an XYMA sensor on industrial test equipment." },
    ],
  },

  "lightspeed-photonics": {
    descriptor: {
      text: "Optical interconnects for high-performance and AI computing.",
      highlight: "Optical interconnects",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Moving data faster than",
      line2: "copper ever will.",
    },
    intro: [
      "LightSpeed Photonics is building next-generation optical interconnect technology for high-performance computing, data centres and AI infrastructure. The company focuses on moving data into and around computing chips at very high bandwidth while reducing the power and physical constraints associated with conventional electrical interconnects.",
      "As AI workloads and data-centre architectures become increasingly compute- and bandwidth-intensive, data movement between processors, memory and systems has become a major performance bottleneck. LightSpeed Photonics addresses this challenge through compact, energy-efficient optical solutions designed for near-chip integration and scalable compute architectures.",
      "The company’s technology is relevant to cloud computing, AI clusters, high-performance computing and modular data-centre design—areas where throughput, latency, energy efficiency and system density are critical.",
    ],
    why: {
      line1: "Compute is no longer",
      line2: "the bottleneck.",
      body: "As AI workloads scale, the limit is data movement between processors, memory and systems. Near-chip photonics attacks that bottleneck at the point where throughput, latency, energy and density all collide.",
      environments: ["AI CLUSTERS", "DATA CENTRES", "HIGH-PERFORMANCE COMPUTING", "CLOUD INFRASTRUCTURE", "MODULAR COMPUTE SYSTEMS"],
      close: "LightSpeed is building for that world.",
    },
    profile: {
      category: "Advanced Computing / Photonics",
      founders: [
        { name: "Dr. Rohin Y", role: "Founder & CEO" },
        { name: "Ramana V Pamidighantam", role: "Co-Founder & CTO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Optical interconnects for high-bandwidth data movement",
        "Near-chip photonics and laser-enabled communication",
        "Solutions for AI compute, HPC and data centres",
        "Compact, low-power architectures for scalable systems",
        "Addresses electrical interconnect bottlenecks",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/lightspeed-photonics/g1.jpg", label: "Founders", caption: "Dr. Rohin Y and Ramana V Pamidighantam", alt: "Portraits of LightSpeed Photonics founders Dr. Rohin Y and Ramana V Pamidighantam." },
      { src: "/images/portfolio-detail/lightspeed-photonics/g2.jpg", label: "What they build", caption: "Demonstrating LightSpeed’s optical interconnects", alt: "The LightSpeed Photonics team demonstrating its optical interconnects at an exhibition stand." },
      { src: "/images/portfolio-detail/lightspeed-photonics/g3.jpg", label: "What they build", caption: "The LightSpeed Photonics stand", alt: "The LightSpeed Photonics exhibition stand with its team." },
    ],
  },

  sanchiconnect: {
    descriptor: {
      text: "A deep-tech enablement network connecting startups, capital and innovation ecosystems.",
      highlight: "deep-tech enablement network",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Deep tech needs more",
      line2: "than capital.",
    },
    intro: [
      "SanchiConnect is a deep-tech enablement network that helps emerging technology companies access the ecosystem required to build and scale. It connects startups with investors, mentors, corporates, government bodies, deep-tech labs, universities and other strategic partners.",
      "The platform operates across accelerator programmes, startup enablement, corporate innovation, fundraising support, ecosystem building and advisory services. Its model recognises that deep-tech companies need more than capital: they need access to specialised talent, testbeds, early customers, technical institutions and long-term strategic relationships.",
      "SanchiConnect makes these connections more structured and scalable, supporting early-growth-stage companies building hardware and software products with core intellectual property.",
    ],
    why: {
      line1: "Ecosystems are built,",
      line2: "not waited for.",
      body: "Deep-tech companies need specialised talent, testbeds, early customers and technical institutions long before they need a term sheet. Making those connections structured and repeatable is what lets hard companies get started at all.",
      environments: ["ACCELERATOR PROGRAMMES", "INVESTOR NETWORKS", "CORPORATE INNOVATION", "RESEARCH LABS AND UNIVERSITIES", "GOVERNMENT PROGRAMMES"],
      close: "SanchiConnect is building for that world.",
    },
    profile: {
      category: "DeepTech Ecosystem / Platform",
      founders: [
        { name: "Dr. Sunil K Shekhawat", role: "Co-Founder & CEO" },
        { name: "Baltej Singh", role: "Co-Founder & CTO" },
      ],
      highlightsLabel: "Service highlights",
      highlights: [
        "Deep-tech accelerator and startup-enablement programmes",
        "Investor outreach, fundraising support and mentorship",
        "Corporate innovation and ecosystem collaboration",
        "Access to government, lab, university and industry networks",
        "Community-led programmes for deep-tech founders",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/sanchiconnect/g1.jpg", label: "Founders", caption: "Dr. Sunil K Shekhawat and Baltej Singh", alt: "Portraits of SanchiConnect co-founders Dr. Sunil K Shekhawat and Baltej Singh." },
      { src: "/images/portfolio-detail/sanchiconnect/g2.jpg", label: "What they do", caption: "A SanchiConnect working session", alt: "A SanchiConnect team working session around a conference table." },
      { src: "/images/portfolio-detail/sanchiconnect/g3.jpg", label: "What they do", caption: "The SanchiConnect team", alt: "Members of the SanchiConnect team together." },
    ],
  },

  neuralzome: {
    descriptor: {
      /* The other eleven carry their brief's "Website descriptor" line. This
         one carried the prototype's, because the frame was drawn for
         Neuralzome and its placeholder was about this company. */
      text: "Teachable autonomy for agriculture and off-road operations.",
      highlight: "Teachable autonomy",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Engineering intelligence for machines",
      line2: "that move through the real world.",
    },
    intro: [
      "Neuralzome Cybernetics develops AI-driven robotics and a teachable-autonomy platform for farm operations and other real-world, off-road use cases. Its systems are intended to enable machines to understand their environment, adapt to tasks and operate with increasing autonomy.",
      "The company addresses persistent agricultural challenges including labour availability, safety, operating efficiency and the need for more precise, scalable farm operations. Neuralzome combines autonomous hardware, perception, software and simulation to create practical robotic tools for field environments.",
      "Its technology includes autonomous platforms for mowing, weeding, soil sensing, agricultural operations and material movement. The Chitti autonomous ATV illustrates this flexible platform approach across varied off-road tasks.",
    ],
    why: {
      line1: "Autonomy will move beyond",
      line2: "controlled environments.",
      body: "Farm work is short of labour, hard on the people doing it, and unforgiving of imprecision — and it happens on ground that is uneven, poorly lit and rarely mapped. A machine that works there has to be taught the task rather than programmed for it.",
      /* The Figma frame was drawn for Neuralzome, so this company is the one
         whose placeholder copy read plausibly enough to survive: mines,
         infrastructure sites and "defense-adjacent systems" were the
         prototype's, not the brief's, and the brief is agriculture first —
         its category is Robotics / AI / AgriTech and every application it
         names is a farm one. */
      environments: ["FARMS", "ORCHARDS", "FIELD OPERATIONS", "OFF-ROAD TERRAIN", "MATERIAL MOVEMENT"],
      close: "Neuralzome is building for that world.",
    },
    profile: {
      category: "Robotics / AI / AgriTech",
      founders: [
        { name: "Mohan Sivam", role: "Co-Founder & CEO" },
        { name: "Aditya Shriwastava", role: "Co-Founder & CTO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Teachable autonomy for real-world machines",
        "AI, vision, perception and robotic-control systems",
        "Autonomous agricultural operations including mowing and weeding",
        "Chitti ATV for soil sensing, agri operations and material movement",
        "Simulation-enabled development and deployment",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/neuralzome/g1.jpg", label: "Founders", caption: "Mohan Sivam and Aditya Shriwastava", alt: "Portraits of Neuralzome co-founders Mohan Sivam and Aditya Shriwastava." },
      { src: "/images/portfolio-detail/neuralzome/g2.jpg", label: "What they build", caption: "A Neuralzome autonomous robot", alt: "A tracked Neuralzome autonomous robot." },
      { src: "/images/portfolio-detail/neuralzome/g3.jpg", label: "In the field", caption: "Neuralzome’s robot on a working farm", alt: "A Neuralzome robot among crops on a working farm." },
    ],
    art: {
      hero: "/images/portfolio-detail/neuralzome/vehicle.png",
      lockup: "/images/portfolio-detail/neuralzome/lockup.jpg",
      why: "/images/portfolio-detail/neuralzome/why.jpg",
      snapshot: "/images/portfolio-detail/neuralzome/snapshot.jpg",
    },
  },

  "trishul-space": {
    descriptor: {
      text: "Advanced liquid propulsion for next-generation launch vehicles.",
      highlight: "liquid propulsion",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "The hardest layer of",
      line2: "the space stack.",
    },
    intro: [
      "Trishul Space is a space-tech company developing liquid rocket propulsion systems for next-generation launch vehicles. The company is focused on creating lightweight, ready-to-integrate propulsion solutions that can simplify launch-vehicle development and support more efficient access to space.",
      "Rocket propulsion is one of the most technically demanding layers of the space ecosystem. Trishul Space is developing indigenous, high-performance engine designs, including cryogenic and liquid-propulsion concepts, to address performance, reliability, cost and integration challenges for launch providers.",
      "Its flagship Harpy-1 programme is described publicly as a high-performance liquid rocket engine. The company’s approach is relevant to an expanding commercial-space ecosystem, where satellite deployments, launch cadence and domestic propulsion capability are increasingly important.",
    ],
    why: {
      line1: "Access to space depends",
      line2: "on indigenous propulsion.",
      body: "Propulsion is the most technically demanding layer of the space ecosystem, and the one that decides cost, cadence and sovereignty. High-performance engine design built at home changes what a launch programme can attempt.",
      environments: ["LAUNCH VEHICLES", "SATELLITE DEPLOYMENT", "COMMERCIAL SPACE", "DEFENCE PROGRAMMES", "PROPULSION TEST INFRASTRUCTURE"],
      close: "Trishul Space is building for that world.",
    },
    profile: {
      category: "SpaceTech / Aerospace Propulsion",
      founders: [
        { name: "Aditya Singh", role: "Co-Founder & CEO" },
        { name: "Divyam Kashyap", role: "Co-Founder" },
        { name: "Rajat Choudhary", role: "Co-Founder" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Liquid rocket propulsion systems",
        "Lightweight, integration-ready engine architectures",
        "High-performance propulsion for launch vehicles",
        "Indigenous engineering for commercial-space and defence applications",
        "Harpy-1 liquid rocket engine programme",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/trishul-space/g1.jpg", label: "Founders", caption: "Aditya Singh, Divyam Kashyap and Rajat Choudhary", alt: "The Trishul Space founders beside an engine test stand." },
      { src: "/images/portfolio-detail/trishul-space/g2.jpg", label: "What they build", caption: "A Trishul engine hot-fire test", alt: "A Trishul Space rocket engine firing on a test stand." },
      { src: "/images/portfolio-detail/trishul-space/g3.jpg", label: "What they build", caption: "Trishul engine hardware", alt: "Trishul Space engine hardware." },
    ],
  },

  enerzi: {
    descriptor: {
      text: "Microwave and plasma systems for cleaner industrial processes.",
      highlight: "Microwave and plasma systems",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Industrial heat is where",
      line2: "decarbonisation gets hard.",
    },
    intro: [
      "Enerzi Microwave Systems develops industrial microwave-heating and microwave-plasma technologies for cleaner, more efficient manufacturing processes. The company applies advanced electromagnetic engineering to industrial thermal applications, including high-temperature processing, drying and material transformation.",
      "Its technology platform is relevant to decarbonisation because industrial heat and chemical processes are often energy-intensive and difficult to electrify efficiently. Enerzi is developing systems that use microwave and plasma techniques for applications such as clean-hydrogen production, advanced carbon materials and more sustainable industrial processing.",
      "Alongside emerging climate applications, Enerzi has industrial experience in microwave machinery for process-heating and drying requirements. This mix of deployed equipment and next-generation plasma technology positions the company to address current industrial needs and longer-term clean-manufacturing transitions.",
    ],
    why: {
      line1: "Heavy industry will have",
      line2: "to be electrified.",
      body: "Industrial heat and chemical processes are energy-intensive and stubbornly difficult to electrify. Microwave and plasma techniques open a path that works for today's process lines and for clean hydrogen and advanced materials next.",
      environments: ["CLEAN HYDROGEN", "ADVANCED CARBON MATERIALS", "PROCESS HEATING", "INDUSTRIAL DRYING", "MATERIAL TRANSFORMATION"],
      close: "Enerzi is building for that world.",
    },
    profile: {
      category: "ClimateTech / Advanced Manufacturing",
      founders: [
        { name: "Kirankumar Hittalmani", role: "Co-Founder & CEO" },
        { name: "Prakash Mugali", role: "Co-Founder & CSO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Industrial microwave heating systems",
        "Microwave-plasma reactors and process technologies",
        "Clean-hydrogen and advanced-material applications",
        "High-temperature industrial processing and drying",
        "Patented industrial microwave innovation",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/enerzi/g1.jpg", label: "Founders", caption: "Kirankumar Hittalmani and Prakash Mugali", alt: "Enerzi co-founders Kirankumar Hittalmani and Prakash Mugali in their lab." },
      { src: "/images/portfolio-detail/enerzi/g2.jpg", label: "What they build", caption: "Enerzi’s continuous microwave oven", alt: "An Enerzi continuous industrial microwave oven." },
      { src: "/images/portfolio-detail/enerzi/g3.jpg", label: "What they build", caption: "An Enerzi microwave cooling system", alt: "An Enerzi industrial cooling system." },
    ],
  },

  "kcat-enzymatic": {
    descriptor: {
      text: "AI-enabled enzyme engineering for sustainable chemical manufacturing.",
      highlight: "AI-enabled enzyme engineering",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Chemistry run at lower",
      line2: "temperature and pressure.",
    },
    intro: [
      "Kcat Enzymatic is a protein and enzyme engineering company developing optimised biocatalysts for industrial applications. The company applies scientific and computational approaches to discover, design and improve enzymes that can make chemical production faster, more selective and more resource-efficient.",
      "Enzymes are biological catalysts that can enable manufacturing at lower temperatures and pressures, reduce waste and improve process precision. Kcat’s work is relevant across chemical, pharmaceutical, food, materials and other sectors requiring higher-yield and lower-impact production processes.",
      "The company combines customised enzyme development with an application-led focus: creating biocatalysts suited to a customer’s specific substrate, process condition and performance requirement. Its platform can help industrial users improve conversion, selectivity, productivity and sustainability.",
    ],
    why: {
      line1: "Biocatalysis will reshape",
      line2: "how molecules are made.",
      body: "Enzymes let manufacturing run at lower temperatures and pressures, with less waste and more precision. Designing them to a customer's specific substrate and process condition is what makes that shift practical at industrial scale.",
      environments: ["SPECIALITY CHEMICALS", "PHARMACEUTICALS", "FOOD AND NUTRITION", "MATERIALS", "SUSTAINABLE MANUFACTURING"],
      close: "Kcat is building for that world.",
    },
    profile: {
      category: "Biotech / Industrial Biocatalysis",
      founders: [
        { name: "Gladstone Sigamani", role: "Co-Founder & CEO" },
        { name: "Pravin Kumar", role: "Co-Founder & CSO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Enzyme discovery and protein engineering",
        "Customised biocatalysts for industrial processes",
        "Data- and AI-enabled enzyme optimisation",
        "Higher yield, selective chemistry and process efficiency",
        "Applications in sustainable chemical manufacturing",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/kcat-enzymatic/g1.jpg", label: "Founders", caption: "Gladstone Sigamani and Pravin Kumar", alt: "Portraits of Kcat co-founders Gladstone Sigamani and Pravin Kumar." },
      { src: "/images/portfolio-detail/kcat-enzymatic/g2.jpg", label: "What they do", caption: "Kcat’s enzyme-engineering laboratory", alt: "Scientists at work in Kcat’s laboratory." },
      { src: "/images/portfolio-detail/kcat-enzymatic/g3.jpg", label: "What they do", caption: "The Kcat team in the lab", alt: "The Kcat team together in the laboratory." },
    ],
  },

  armory: {
    descriptor: {
      text: "Counter-drone systems designed to defend Bharat.",
      highlight: "Counter-drone systems",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "The threat got cheap.",
      line2: "The defence has to keep up.",
    },
    intro: [
      "Armory is a defence-technology company building counter-unmanned aircraft system (C-UAS) solutions to protect military and civilian assets against the growing threat of rogue drones. The company develops systems intended to detect, identify, track and neutralise unauthorised drones across a range of operational environments.",
      "As drones become cheaper, more autonomous and more widely available, they pose a growing challenge to borders, critical infrastructure, public events and sensitive installations. Armory’s product strategy uses a layered defence approach that combines detection, electronic countermeasures and hard-kill capabilities.",
      "Its publicly described portfolio includes Surge, a handheld or vehicle-mounted smart detection-and-jamming system; radar capabilities for detecting difficult targets, including stealth or encrypted-communication drones; and hard-kill concepts such as software-defined ammunition, interceptor drones and laser-based systems.",
    ],
    why: {
      line1: "Drones changed what",
      line2: "has to be defended.",
      body: "As drones become cheaper, more autonomous and more widely available, they threaten borders, critical infrastructure, public events and sensitive installations. A layered answer — detection, electronic countermeasures and hard kill — is the only one that holds.",
      environments: ["BORDERS", "CRITICAL INFRASTRUCTURE", "MILITARY INSTALLATIONS", "PUBLIC EVENTS", "SENSITIVE SITES"],
      close: "Armory is building for that world.",
    },
    profile: {
      category: "DefenceTech / Counter-UAS",
      founders: [
        { name: "Amardeep Singh", role: "Founder & CEO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Counter-UAS detection and response systems",
        "Surge: handheld and vehicle-mounted smart detection/jamming",
        "Radar for challenging drone detection",
        "Electronic countermeasures and jamming",
        "Hard-kill concepts including interceptor-drone and laser-based systems",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/armory/g1.jpg", label: "Founder", caption: "Amardeep Singh", alt: "Armory founder Amardeep Singh beside one of Armory’s systems." },
      { src: "/images/portfolio-detail/armory/g2.jpg", label: "In the field", caption: "An Armory counter-drone system in the mountains", alt: "An Armory counter-drone system deployed from a vehicle in mountain terrain." },
      { src: "/images/portfolio-detail/armory/g3.jpg", label: "What they build", caption: "An Armory detection and jamming unit", alt: "An Armory counter-drone detection and jamming unit on a tripod." },
    ],
  },

  thermistance: {
    descriptor: {
      text: "Passive cooling systems for high-performance electronics and industrial equipment.",
      highlight: "Passive cooling systems",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Every watt of compute",
      line2: "becomes a watt of heat.",
    },
    intro: [
      "Thermistance Technologies designs, develops and manufactures advanced passive thermal-management solutions for industrial and commercial applications. The company focuses on moving heat away from critical components efficiently and reliably, without the energy use, noise or maintenance burden associated with active cooling systems.",
      "Its technology is particularly relevant as power density rises in electronics, EV systems, satellites, computing hardware and industrial equipment. Thermistance develops and integrates passive thermal IP into customer products through heat pipes, thermosyphons, vapour chambers and loop heat pipes.",
      "The company provides end-to-end development—from thermal design to embedded product integration—enabling OEMs to manage heat within compact, high-performance systems where conventional cooling approaches may be insufficient or impractical.",
    ],
    why: {
      line1: "Power density is rising",
      line2: "faster than cooling.",
      body: "As electronics, EV systems, satellites and computing hardware pack more power into less space, active cooling runs out of room. Passive thermal IP — heat pipes, thermosyphons, vapour chambers — is what lets those products keep shrinking.",
      environments: ["ELECTRIC VEHICLES", "SATELLITES", "DATA CENTRES", "CONSUMER ELECTRONICS", "INDUSTRIAL EQUIPMENT"],
      close: "Thermistance is building for that world.",
    },
    profile: {
      category: "Thermal Management / Advanced Manufacturing",
      founders: [
        { name: "Bhimashankar Wangaskar", role: "Co-Founder & CEO" },
        { name: "Dhananjay Kishor Gavas", role: "Co-Founder & COO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Passive thermal-management systems",
        "Heat pipes, thermosyphons and vapour chambers",
        "Miniaturised loop heat-pipe technology",
        "Solutions for EVs, satellites, electronics, gaming and high-performance computing",
        "End-to-end product development and OEM integration",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/thermistance/g1.jpg", label: "The team", caption: "The Thermistance team", alt: "The Thermistance team on stage at an industry event." },
      { src: "/images/portfolio-detail/thermistance/g2.jpg", label: "What they build", caption: "A Thermistance heat-pipe assembly", alt: "A Thermistance heat-pipe cooling assembly." },
      { src: "/images/portfolio-detail/thermistance/g3.jpg", label: "What they build", caption: "Loop heat pipes", alt: "A Thermistance loop heat pipe." },
    ],
  },
  "anuna-labs": {
    descriptor: {
      text: "Air-stable copper nanomaterials replacing silver across solar, electronics and semiconductors.",
      highlight: "copper nanomaterials",
    },
    investedAt: "Seed Stage",
    status: "Scaling from product validation to commercial deployment.",
    statement: {
      line1: "Copper that does",
      line2: "the job silver does today.",
    },
    intro: [
      "Anuna Labs is a Bengaluru-based advanced materials company that synthesises air-stable, anti-oxidative copper nanoparticles from pure copper and e-waste copper using a proprietary process, converting them into a vertical stack of products positioned as a cost-effective substitute for expensive silver-based materials used by solar PV, PCB, flexible-electronics, EV-battery and semiconductor manufacturers.",
      "Silver remains the default conductive material across these industries, but its supply is structurally constrained, solar PV alone accounted for roughly a fifth of global silver demand in 2024, and rising module manufacturing is pushing costs higher. Copper is far more abundant and cheaper, but conventional copper inks oxidise in air and typically need nitrogen atmospheres, cold-chain packaging or high-temperature sintering, hardware most manufacturers cannot easily adopt.",
      "Anuna's proprietary ink sinters at just 80°C in open air on standard screen-printing equipment, requiring no nitrogen atmosphere, no cold chain and no specialised hardware. Engineered as a drop-in replacement for silver paste, it lets OEMs capture copper's raw-material cost advantage without re-tooling existing production lines, while its low sintering temperature also unlocks heat-sensitive flexible substrates that high-temperature copper and silver inks cannot serve. The company's product portfolio spans copper nanopowder, copper conductive ink and paste, and copper foils/membranes, with early paid pilots running across printed electronics, solar, PCB manufacturing, semiconductors and automotive glass.",
    ],
    why: {
      line1: "Silver is running short.",
      line2: "Copper has to take its place.",
      body: "Silver is the default conductor across solar, PCBs and semiconductors, and its supply is structurally constrained. Copper is far more abundant and cheaper, but conventional copper inks oxidise in air and need hardware most manufacturers cannot easily adopt.",
      environments: ["SOLAR PV", "PCB MANUFACTURING", "PRINTED ELECTRONICS", "SEMICONDUCTORS", "AUTOMOTIVE GLASS"],
      close: "Anuna is building for that world.",
    },
    profile: {
      category: "Advanced Materials / Nanotechnology platform",
      founders: [
        { name: "Raghav Khandelwal", role: "Co-Founder & CEO" },
      ],
      highlightsLabel: "Technology highlights",
      highlights: [
        "Proprietary air-stable, anti-oxidative copper nanoparticle synthesis from pure and e-waste copper",
        "Copper conductive ink that sinters at 80°C in open air, no nitrogen atmosphere or cold chain required",
        "Full-stack vertical value chain from e-waste feedstock to finished conductive ink",
        "Product range spanning copper nanopowder, conductive ink, conductive paste and copper foils/membranes",
        "Applications across solar PV metallization, PCB manufacturing, printed/flexible electronics, semiconductor die-attach and automotive glass busbars",
      ],
    },
    gallery: [
      { src: "/images/portfolio-detail/anuna-labs/g1.jpg", label: "What they make", caption: "Air-stable copper nanopowder", alt: "Anuna Labs copper nanopowder in a glass dish." },
      { src: "/images/portfolio-detail/anuna-labs/g2.jpg", label: "What they make", caption: "Copper conductive ink", alt: "Anuna Labs copper conductive ink." },
      { src: "/images/portfolio-detail/anuna-labs/g3.jpg", label: "Under the microscope", caption: "An SEM image of Anuna’s copper nanoparticles", alt: "A scanning electron microscope image of Anuna Labs copper nanoparticles." },
    ],
  },
};

/**
 * The "8X View" band. The frame sets this identically on every company page —
 * it is 8X's thesis, not the company's — and changes only the closing line,
 * which names the company. That line is composed from `close`.
 */
export const eightXView = {
  eyebrow: "8X View",
  line1: "Hard environments",
  line2: "create hard companies.",
  body: "We back founders building technology where the barrier is not just software speed, but engineering depth, technical resilience and real-world deployment.",
  /** `%s` is replaced with the company's name. */
  close: "%s reflects that thesis.",
} as const;

/** The closing panel, shared by every company page. */
export const detailCta = {
  lead: "Building deep technology for real markets?",
  line1: "We would like to understand",
  line2: "what you see before others do.",
  link: { label: "Share Your Vision", href: "/contact" },
} as const;

/** The two labels the frame sets above the band content. */
export const detailLabels = {
  heroEyebrow: "Portfolio",
  whyEyebrow: "Why we invested",
  snapshot: { lead: "Company", accent: "snapshot" },
} as const;
