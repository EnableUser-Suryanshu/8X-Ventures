/**
 * The per-company detail page, traced from the Figma prototype's
 * `Portfolio / Company` frame (node 302-213, drawn for Neuralzome).
 *
 * The frame is one template applied to all twelve companies, so everything it
 * sets per company lives here and everything it sets once — the 8X View band
 * and the closing panel — lives at the bottom of the file.
 *
 * The prose is the client's own, from the twelve briefs in the Drive folder
 * "Portfolio companies' details": `descriptor` is each brief's "Website
 * descriptor" line, `intro` is its own three paragraphs, `environments` and
 * `snapshot` are drawn from its "Technology highlights", and `why` restates
 * the brief's market paragraph in the frame's voice. Nothing here is invented
 * about a company; where the frame asks for a line the brief does not carry —
 * the two-line statement, say — it is written from that brief's own sentences
 * rather than from outside knowledge.
 *
 * `intro` used to be a condensed pair, which read as a summary of a summary
 * and lost whatever each brief said about the company's flagship product:
 * Pantherun's Pepper platform, Trishul's Harpy-1, Armory's Surge, the Chitti
 * ATV. It now carries the brief's paragraphs as they are written.
 */

export type CompanyDetail = {
  /**
   * The hero's standfirst. `highlight` is the run the frame sets in brand
   * blue inside it ("off-road robotics" in the prototype); it must appear in
   * `text` verbatim or it is simply not highlighted.
   */
  descriptor: { text: string; highlight: string };

  /** The info strip's third and fourth columns. Sector and fund are read from
   *  the company record so the strip and the card cannot disagree. */
  investedAt: string;
  status: string;

  /** The centred statement: line one in ink, line two in brand blue. */
  statement: { line1: string; line2: string };

  /**
   * The centred paragraphs below the statement: each brief's own prose,
   * which runs to three. The frame draws two, and two is what this used to
   * carry — a condensed pair that dropped whatever the brief said about the
   * company's flagship product. The band maps over whatever it is given, so
   * carrying all three is a longer read in the same type at the same stagger.
   */
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

  /** The "Company snapshot" panel's four rows. Sector is read from the record. */
  snapshot: {
    technologyArea: string;
    useCase: string;
    marketRelevance: string;
  };

  /**
   * This company's artwork.
   *
   * `figure` every company has — see the note on it below. The other three
   * are the frame's own fills, lifted from the Figma file, and only
   * Neuralzome's exist: the frame was drawn for Neuralzome and the other
   * eleven have never been art-directed to that depth. Anything missing falls
   * back to the company's mark on the designed bloom, and to the navy field
   * the environment photograph is graded to — so a page without them is still
   * the design, just without that photography. Filling them in is a
   * three-line edit per company; the briefs carry between three and nine
   * usable photographs each.
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
    /**
     * The wide plate under the intro. Unlike the four above, every company
     * has one: they are the photographs embedded in the briefs themselves —
     * the company's own people, hardware and sites — and they replace the
     * stock photograph of strangers in an office that used to stand on all
     * twelve pages. `detailArt.team` is still the fallback for a company
     * added without one.
     */
    figure?: string;
  };
};

/**
 * The two plates the frame repeats on every company page rather than varying:
 * the photograph under the statement, and the circuit field behind 8X's own
 * thesis. Both are the Figma file's own fills.
 */
export const detailArt = {
  team: "/images/portfolio-detail/team.jpg",
  circuit: "/images/portfolio-detail/circuit.jpg",
} as const;

export const portfolioDetails: Record<string, CompanyDetail> = {
  pantherun: {
    descriptor: {
      text: "High-speed data protection and encryption for systems that cannot trade security for throughput.",
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
      "A core part of Pantherun’s product strategy is chip-based security. Its Pepper chip-and-software ecosystem is designed for high-speed encryption and embedded and edge deployments, making the company relevant to customers protecting sensitive data while retaining the speed connected systems require.",
    ],
    why: {
      line1: "Security will stop being",
      line2: "a performance tax.",
      body: "Encryption is still treated as something you pay for in latency and throughput. As connected systems carry more sensitive data, protection has to run at line rate, in place, without rewriting the formats and workflows around it.",
      environments: ["DEFENCE", "AEROSPACE", "TELECOMMUNICATIONS", "INDUSTRIAL SYSTEMS", "SMART-CITY INFRASTRUCTURE"],
      close: "Pantherun is building for that world.",
    },
    snapshot: {
      technologyArea: "Real-Time Encryption And Hardware-Assisted Security",
      useCase: "AES-Based Data Protection For Embedded And Networked Systems",
      marketRelevance: "Defence, Aerospace, Telecom, Industrial Automation, IoT",
    },
    art: {
      figure: "/images/portfolio-detail/pantherun/figure.jpg",
    },
  },

  "tiea-connectors": {
    descriptor: {
      text: "Indigenous electrical and electronic connectors for demanding applications.",
      highlight: "connectors",
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
      "The company supports OEMs and system integrators with connector solutions tailored to performance requirements, operating environments and production needs, and holds ISO 9001 and IATF 16949 certification.",
    ],
    why: {
      line1: "Electrification runs on parts",
      line2: "nobody sees.",
      body: "Connectors and harnesses are foundational to India's manufacturing and electrification ambitions, and they are still largely imported. Building them locally, to ISO 9001 and IATF 16949 quality, is infrastructure work.",
      environments: ["AUTOMOTIVE", "ELECTRIC MOBILITY", "AEROSPACE", "DEFENCE PROGRAMMES", "INDUSTRIAL ELECTRONICS"],
      close: "TIEA is building for that world.",
    },
    snapshot: {
      technologyArea: "Interconnect Engineering And Precision Manufacturing",
      useCase: "Connectors, Cable Harnesses And Custom Interconnect Assemblies",
      marketRelevance: "Automotive, EV, Aerospace, Defence, Industrial Equipment",
    },
    art: {
      figure: "/images/portfolio-detail/tiea-connectors/figure.jpg",
    },
  },

  "solinas-integrity": {
    descriptor: {
      text: "Robotics and intelligence for water and sanitation infrastructure.",
      highlight: "Robotics",
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
    snapshot: {
      technologyArea: "Robotics And AI-Enabled Diagnostics",
      useCase: "Inspection, Cleaning And Monitoring Of Underground Assets",
      marketRelevance: "Municipal Utilities, Industrial Operators, Urban Sanitation",
    },
    art: {
      figure: "/images/portfolio-detail/solinas-integrity/figure.jpg",
    },
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
    snapshot: {
      technologyArea: "Waveguide Ultrasonic Sensing And Analytics",
      useCase: "Multi-Parameter Process And Condition Monitoring",
      marketRelevance: "Process Industries, Energy, Metals, Industrial IoT",
    },
    art: {
      figure: "/images/portfolio-detail/xyma-analytics/figure.jpg",
    },
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
      "As AI workloads and data-centre architectures become increasingly compute- and bandwidth-intensive, data movement between processors, memory and systems has become a major performance bottleneck. LightSpeed Photonics addresses this through compact, energy-efficient optical solutions designed for near-chip integration and scalable compute architectures.",
      "The company’s technology is relevant to cloud computing, AI clusters, high-performance computing and modular data-centre design — areas where throughput, latency, energy efficiency and system density are critical.",
    ],
    why: {
      line1: "Compute is no longer",
      line2: "the bottleneck.",
      body: "As AI workloads scale, the limit is data movement between processors, memory and systems. Near-chip photonics attacks that bottleneck at the point where throughput, latency, energy and density all collide.",
      environments: ["AI CLUSTERS", "DATA CENTRES", "HIGH-PERFORMANCE COMPUTING", "CLOUD INFRASTRUCTURE", "MODULAR COMPUTE SYSTEMS"],
      close: "LightSpeed is building for that world.",
    },
    snapshot: {
      technologyArea: "Silicon Photonics And Optical Interconnects",
      useCase: "Near-Chip, High-Bandwidth Data Movement",
      marketRelevance: "AI Compute, HPC, Data Centres, Cloud Infrastructure",
    },
    art: {
      figure: "/images/portfolio-detail/lightspeed-photonics/figure.jpg",
    },
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
    snapshot: {
      technologyArea: "Deep-Tech Enablement Platform",
      useCase: "Accelerator Programmes, Fundraising And Ecosystem Access",
      marketRelevance: "Startups, Investors, Corporates, Institutions, Government",
    },
    art: {
      figure: "/images/portfolio-detail/sanchiconnect/figure.jpg",
    },
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
    snapshot: {
      technologyArea: "Teachable Autonomy, Perception And Robotic Control",
      useCase: "Autonomous Mowing, Weeding, Soil Sensing And Material Movement",
      marketRelevance: "Agriculture, Field Operations, Off-Road Robotics",
    },
    art: {
      figure: "/images/portfolio-detail/neuralzome/figure.jpg",
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
      "Its flagship Harpy-1 programme is a high-performance liquid rocket engine. The company’s approach is relevant to an expanding commercial-space ecosystem, where satellite deployments, launch cadence and domestic propulsion capability are increasingly important.",
    ],
    why: {
      line1: "Access to space depends",
      line2: "on indigenous propulsion.",
      body: "Propulsion is the most technically demanding layer of the space ecosystem, and the one that decides cost, cadence and sovereignty. High-performance engine design built at home changes what a launch programme can attempt.",
      environments: ["LAUNCH VEHICLES", "SATELLITE DEPLOYMENT", "COMMERCIAL SPACE", "DEFENCE PROGRAMMES", "PROPULSION TEST INFRASTRUCTURE"],
      close: "Trishul Space is building for that world.",
    },
    snapshot: {
      technologyArea: "Liquid And Cryogenic Rocket Propulsion",
      useCase: "Integration-Ready Engines For Launch Vehicles",
      marketRelevance: "Commercial Space, Satellite Launch, Defence, Aerospace",
    },
    art: {
      figure: "/images/portfolio-detail/trishul-space/figure.jpg",
    },
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
    snapshot: {
      technologyArea: "Microwave Heating And Microwave-Plasma Systems",
      useCase: "High-Temperature Processing, Drying And Clean-Hydrogen Production",
      marketRelevance: "Industrial Manufacturing, ClimateTech, Advanced Materials, Energy",
    },
    art: {
      figure: "/images/portfolio-detail/enerzi/figure.jpg",
    },
  },

  "kcat-enzymatic": {
    descriptor: {
      text: "AI-enabled enzyme engineering for sustainable chemical manufacturing.",
      highlight: "enzyme engineering",
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
    snapshot: {
      technologyArea: "Protein And Enzyme Engineering",
      useCase: "Customised Biocatalysts For Industrial Processes",
      marketRelevance: "Chemicals, Pharmaceuticals, Food, Materials, Sustainability",
    },
    art: {
      figure: "/images/portfolio-detail/kcat-enzymatic/figure.jpg",
    },
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
      "Armory is a defence-technology company building counter-unmanned aircraft system solutions to protect military and civilian assets against the growing threat of rogue drones. The company develops systems intended to detect, identify, track and neutralise unauthorised drones across a range of operational environments.",
      "As drones become cheaper, more autonomous and more widely available, they pose a growing challenge to borders, critical infrastructure, public events and sensitive installations. Armory’s product strategy uses a layered defence approach that combines detection, electronic countermeasures and hard-kill capabilities.",
      "Its portfolio includes Surge, a handheld or vehicle-mounted smart detection-and-jamming system; radar for detecting difficult targets, including stealth and encrypted-communication drones; and hard-kill concepts such as software-defined ammunition, interceptor drones and laser-based systems.",
    ],
    why: {
      line1: "Drones changed what",
      line2: "has to be defended.",
      body: "As drones become cheaper, more autonomous and more widely available, they threaten borders, critical infrastructure, public events and sensitive installations. A layered answer — detection, electronic countermeasures and hard kill — is the only one that holds.",
      environments: ["BORDERS", "CRITICAL INFRASTRUCTURE", "MILITARY INSTALLATIONS", "PUBLIC EVENTS", "SENSITIVE SITES"],
      close: "Armory is building for that world.",
    },
    snapshot: {
      technologyArea: "Counter-UAS Detection And Response",
      useCase: "Detection, Jamming And Interception Of Rogue Drones",
      marketRelevance: "Defence, Homeland Security, Critical Infrastructure, Public Safety",
    },
    art: {
      figure: "/images/portfolio-detail/armory/figure.jpg",
    },
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
      "The company provides end-to-end development, from thermal design to embedded product integration, enabling OEMs to manage heat within compact, high-performance systems where conventional cooling approaches may be insufficient or impractical.",
    ],
    why: {
      line1: "Power density is rising",
      line2: "faster than cooling.",
      body: "As electronics, EV systems, satellites and computing hardware pack more power into less space, active cooling runs out of room. Passive thermal IP — heat pipes, thermosyphons, vapour chambers — is what lets those products keep shrinking.",
      environments: ["ELECTRIC VEHICLES", "SATELLITES", "DATA CENTRES", "CONSUMER ELECTRONICS", "INDUSTRIAL EQUIPMENT"],
      close: "Thermistance is building for that world.",
    },
    snapshot: {
      technologyArea: "Passive Thermal Management",
      useCase: "Heat Pipes, Thermosyphons, Vapour Chambers And Loop Heat Pipes",
      marketRelevance: "EVs, Space, Electronics, High-Performance Computing, Industrial OEMs",
    },
    art: {
      figure: "/images/portfolio-detail/thermistance/figure.jpg",
    },
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
