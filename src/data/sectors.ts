export interface SectorResource {
  name: string;
  url: string;
  useFor: string;
}

export interface SectorTierCompanies {
  tier: 1 | 2 | 3;
  companies: string;
  locations: string;
}

export interface Sector {
  id: string;
  slug: string;
  priority: number;
  starred: boolean;
  title: string;
  shortLabel: string;
  tagline: string;
  whatItIs: string;
  howItWorks: string[];
  moneyFlow: string;
  valueChainNotes?: string[];
  businessProblems: string[];
  whereDataAi: { title: string; detail: string }[];
  roles: string[];
  skills: string[];
  companiesByTier: SectorTierCompanies[];
  hubs: { city: string; note: string }[];
  outlook2027_2028: string[];
  howItHelpsMe: string[];
  myGameNotes: string[];
  localLeipzig: string;
  resources: SectorResource[];
}

export const sectors: Sector[] = [
  {
    id: "s1",
    slug: "software-consulting",
    priority: 1,
    starred: true,
    title: "Software / Consulting",
    shortLabel: "Software / Consulting",
    tagline: "Priority #1 — best fresher entry for me",
    whatItIs:
      "This sector is companies whose product is technology or advice itself — they build software, run IT systems, or consult other industries on digital/AI transformation. They sit on top of all other sectors, so I get exposure to automotive, finance, logistics, retail, and more through client work.",
    howItWorks: [
      "Software companies build a product once and sell many times (SaaS subscription or license).",
      "IT service providers get paid to build, run, and maintain tech for clients (project or ongoing contract).",
      "Consulting firms sell expertise and people — they send teams into client companies to solve problems (strategy, data, AI, cloud, compliance).",
    ],
    moneyFlow:
      "Money flow I track here: licenses/subscriptions, project fees, and time-based consulting fees.",
    businessProblems: [
      "Companies cannot adopt AI alone — they need help integrating GenAI, agents, cloud, and compliance.",
      "Legacy IT must be modernized (many German firms still run old SAP/on-prem).",
      "EU AI Act + DORA + GDPR — regulated clients need AI that is compliant, not just clever.",
      "Skills gap — ~109k IT jobs unfilled in Germany; demand is for production-grade AI, not demos.",
      "Cost pressure — weak economy means clients want AI that removes cost, not adds headcount.",
    ],
    whereDataAi: [
      {
        title: "Data platforms & pipelines",
        detail: "Cloud, warehouse, dbt — building the data backbone clients need.",
      },
      {
        title: "GenAI / agents in workflows",
        detail: "RAG, LangChain, MCP — integrating agents into real business processes.",
      },
      {
        title: "Process mining",
        detail:
          "Celonis-style analysis of how companies actually work and where they waste time.",
      },
      {
        title: "Cybersecurity + data governance",
        detail: "Especially for regulated clients who need safe, auditable AI.",
      },
      {
        title: "Cross-industry analytics",
        detail:
          "Same data skills applied to finance, auto, energy, and retail clients — my notes also call GenAI + AI agents a game changer in consulting delivery.",
      },
      {
        title: "Building data products",
        detail: "Dashboards, ML features, and client-facing analytics products.",
      },
    ],
    roles: [
      "Data / Analytics Engineer",
      "Data Engineer",
      "ML / MLOps Engineer",
      "Business / Data Analyst",
      "Digital Transformation Consultant",
      "AI Engineer (GenAI/agents)",
      "AI Solutions Architect",
      "Cloud Engineer",
      "Cybersecurity Specialist",
      "Emerging: AI Governance, Analytics Translator, AI Product Analyst",
    ],
    skills: [
      "SQL",
      "Python",
      "Cloud (Azure #1 in DE, AWS, GCP)",
      "Power BI / Tableau",
      "Data modeling / dbt",
      "GenAI/LLM (RAG, agents, LangChain)",
      "MLOps",
      "Communication + stakeholder management",
      "German B2 helps; many consultancies/tech use English in Berlin/Munich",
    ],
    companiesByTier: [
      {
        tier: 1,
        companies:
          "SAP, Microsoft, Google, Amazon/AWS, IBM, T-Systems, Accenture, Deloitte, KPMG, PwC, Capgemini, McKinsey (QuantumBlack), BCG (BCG X)",
        locations: "Munich, Berlin, Frankfurt, Walldorf, Bonn, Dresden, Leipzig",
      },
      {
        tier: 2,
        companies:
          "Celonis, Personio, DeepL, Aleph Alpha, n8n, Parloa, GFT, Adesso, Bechtle, msg, Reply, Tietoevry",
        locations: "Munich, Berlin, Cologne, Heidelberg, Dortmund, Leipzig",
      },
      {
        tier: 3,
        companies: "MAIA, KnowFab, deepmentation, deepset, Langdock, Jina AI",
        locations: "Leipzig, Berlin",
      },
    ],
    hubs: [
      { city: "Berlin", note: "Startups, AI, FinTech clients" },
      { city: "Munich", note: "SAP-region, Siemens, big tech, consulting" },
      { city: "Frankfurt", note: "Finance clients, Accenture HQ-region" },
      { city: "Karlsruhe / Darmstadt", note: "Research + deep tech" },
      {
        city: "Leipzig / Dresden",
        note: "Smaller but growing — Amazon Dresden, SAP, local AI startups",
      },
    ],
    outlook2027_2028: [
      "German IT services market grew only ~2.9% in 2025 (weak economy), but ~55% of CIOs expect higher IT budgets in 2026–27 (Lünendonk 2026).",
      "AI-specific job postings +52% YoY while overall digital jobs −11% — the market splits into winners/losers (Digital Job Monitor Q2 2026).",
      "~54% of IT providers expect fewer pure software developers by 2028 — shift toward AI architects, data engineers, compliance-aware AI engineers.",
      "Germany hiring is recovering (software roles from −35% toward −10% YoY by mid-2026).",
      "My timing is good: companies stabilize budgets → reopen roles → I enter with Werkstudent in 2027 as recovery continues.",
      "From my notes: consulting market size is predicted to grow strongly (≈€9–10bn toward €37–40bn by 2031) with GenAI + AI agents as a game changer.",
    ],
    howItHelpsMe: [
      "Best first door for me as a fresher — grad programs, Werkstudent volume, English-friendly options.",
      "My DevOps + full-stack + ML CV fits IT services and product companies directly.",
      "It rotates me across industries so I can discover which of my other sectors I actually enjoy.",
      "It builds my Data + AI + Business profile fastest — consulting forces business framing.",
    ],
    myGameNotes: [
      "This is my Priority #1 entry lane.",
      "I use this sector to learn how other industries buy and run AI — then I specialize with clearer conviction.",
    ],
    localLeipzig: "SAP, Amazon Dresden, Adesso, MAIA and other local AI startups",
    resources: [
      {
        name: "Lünendonk IT Rankings 2026",
        url: "https://www.luenendonk.de/en/luenendonk-rankings-2026-it-services-market-shows-little-momentum/",
        useFor: "IT services market size, CIO budgets",
      },
      {
        name: "heise — IT Services Market 2026",
        url: "https://www.heise.de/en/news/IT-Services-Market-Economy-Weakens-Demand-AI-Pressures-Fees-11330518.html",
        useFor: "AI impact on IT services",
      },
      {
        name: "Source Group — Germany Tech Hiring 2026",
        url: "https://www.sourcegroupinternational.com/insights/germany-tech-hiring-outlook-2026/",
        useFor: "Which tech roles are hiring",
      },
      {
        name: "Bitkom — KI Studie 2025",
        url: "https://bitkom-research.de/studien/kuenstliche-intelligenz-2025",
        useFor: "German AI adoption",
      },
      {
        name: "GTAI — AI in Germany",
        url: "https://www.gtai.de/en/invest/industries/digital-economy/artificial-intelligence",
        useFor: "Market size, investment",
      },
      {
        name: "appliedAI Landscape 2025",
        url: "https://www.appliedai-institute.de/en/publications/ai-startup-landscape-2025/",
        useFor: "935 AI startups map",
      },
      {
        name: "Dealroom — German unicorns",
        url: "https://dealroom.co/unicorns/germany/",
        useFor: "Scale-up valuations",
      },
      {
        name: "PwC AI Jobs Barometer",
        url: "https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html",
        useFor: "How roles evolve",
      },
    ],
  },
  {
    id: "s2",
    slug: "logistics-mobility",
    priority: 2,
    starred: true,
    title: "Logistics / Mobility",
    shortLabel: "Logistics / Mobility",
    tagline: "Priority #2 — my DB project fit",
    whatItIs:
      "This sector moves goods and people — parcels, freight, containers, trains, trucks, ships, passengers. Germany is Europe’s logistics hub because of location and dense infrastructure.",
    howItWorks: [
      "Pickup / first mile — goods collected from factory or shop.",
      "Hub sorting & warehousing — sorted by destination in massive automated warehouses.",
      "Long-haul transport — truck, train, ship, plane across country/world.",
      "Last mile — final delivery to the door (often the most expensive step).",
    ],
    moneyFlow:
      "Paid per shipment, by subscription, or through network efficiency at scale.",
    valueChainNotes: [
      "From my notes: Parcel & Express (DHL), Rail & Passenger (DB), Freight forwarders (Kühne+Nagel, DB Schenker), and digital freight startups (sennder, Forto, Flexport) modernize trucking and shipping with software/data.",
    ],
    businessProblems: [
      "Driver & skilled-worker shortage — ~68% of logistics firms struggle to fill vacancies (BVL/ifo 2024).",
      "Last-mile cost — most expensive and hardest to optimize.",
      "Delays & unpredictability — weather, congestion, supply shocks.",
      "Emissions / decarbonisation — electric fleets, green routing.",
      "Thin margins — every 1% efficiency gain is real money.",
    ],
    whereDataAi: [
      {
        title: "Route optimization",
        detail: "Cheapest/fastest routes — saves fuel and time.",
      },
      {
        title: "Demand forecasting",
        detail: "Predict parcel/container volumes so warehouses are staffed correctly.",
      },
      {
        title: "ETA / delay prediction",
        detail:
          "Predict when a shipment or train arrives — my Deutsche Bahn / ICE delay project is exactly this.",
      },
      {
        title: "Warehouse automation & robotics",
        detail: "Where to store goods and how robots should move.",
      },
      {
        title: "Predictive maintenance",
        detail: "Trucks, trains, sorting machines — fail less, cost less.",
      },
      {
        title: "Digital twins / network planning",
        detail: "Simulate the logistics network before changing it.",
      },
    ],
    roles: [
      "Data Analyst",
      "Data / Analytics Engineer",
      "Operations Research Analyst",
      "ML Engineer (forecasting, optimization)",
      "Supply Chain Analyst",
      "BI Developer",
      "Digital Logistics Specialist",
    ],
    skills: [
      "SQL",
      "Python",
      "Time-series forecasting",
      "Geospatial data",
      "Power BI",
      "Optimization algorithms",
      "IoT / sensor data",
      "Cloud (Azure common)",
      "Domain: supply-chain basics; German helps for Mittelstand",
    ],
    companiesByTier: [
      {
        tier: 1,
        companies:
          "DHL Group (hub Leipzig), Deutsche Bahn / DB Systel, DB Schenker, Kühne+Nagel, Lufthansa, Maersk",
        locations: "Leipzig, Bonn, Hamburg, Cologne, Frankfurt",
      },
      {
        tier: 2,
        companies: "Dachser, Hermes, DB Cargo, Hapag-Lloyd, GLS, ORSOFT",
        locations: "Kempten, Hamburg, Leipzig",
      },
      {
        tier: 3,
        companies: "sennder, Forto, cargo.one, Flexport, Kopernikus Automotive",
        locations: "Berlin, Amsterdam, Leipzig",
      },
    ],
    hubs: [
      { city: "Leipzig", note: "DHL global air hub, DB, ORSOFT — my strongest local logistics lane" },
      { city: "Hamburg", note: "Ports, Hapag-Lloyd, maritime" },
      { city: "Bonn", note: "DHL HQ" },
      { city: "Frankfurt", note: "Air freight, DB Systel" },
      { city: "Dortmund", note: "Digital Hub Logistics / Fraunhofer IML" },
      { city: "Duisburg", note: "From my notes — inland logistics hub to watch" },
    ],
    outlook2027_2028: [
      "German logistics market baseline: ~€540bn revenue, ~2.3M employees (2023).",
      "E-commerce logistics growth toward ~€65bn (strong CAGR narrative).",
      "~58% of German logistics firms use AI route optimization; ~41% use AI demand forecasting.",
      "Logistics analytics market growing ~15% CAGR (2023–2028).",
      "~5% job growth projected by 2028 in logistics.",
      "Digital logistics expanding — DHL + IBM Watson style partnerships; DB investing in AI.",
      "My DB delay project is a direct, credible entry ticket for 2027 Werkstudent/thesis.",
    ],
    howItHelpsMe: [
      "This is my strongest sector-specific asset — ICE Train Delay Prediction uses real Deutsche Bahn data.",
      "DHL hub + DB both in/near Leipzig — realistic local Werkstudent targets.",
      "Problems are practical and measurable — easy to explain business value in interviews.",
      "It combines my ML + Python + forecasting skills perfectly.",
    ],
    myGameNotes: [
      "Digital freight startups (sennder / Forto / Flexport) are an in-depth lane I marked in my notes.",
      "I treat delay prediction and forecasting as my logistics proof points.",
    ],
    localLeipzig: "DHL, DB, ORSOFT, Kopernikus Automotive",
    resources: [
      {
        name: "GTAI — AI in Logistics",
        url: "https://www.gtai.de/en/invest/service/publications/markets-germany/ai-driven-innovation-in-logistics-2009714",
        useFor: "Market overview, 60k+ logistics firms",
      },
      {
        name: "BVL (German Logistics Association)",
        url: "https://www.bvl.de/en",
        useFor: "Industry reports, events",
      },
      {
        name: "Digital Hub Logistics Dortmund",
        url: "https://logistics.digital/hub/en/",
        useFor: "Innovation hub, startups",
      },
      {
        name: "Fraunhofer IML",
        url: "https://www.iml.fraunhofer.de/en/",
        useFor: "Research, thesis opportunities",
      },
      {
        name: "ZipDo — Germany Logistics Stats 2026",
        url: "https://zipdo.co/germany-logistics-industry-statistics/",
        useFor: "Market size, AI adoption %",
      },
      {
        name: "lagerflaeche.de — Skills shortage logistics",
        url: "https://www.lagerflaeche.de/en/warehouse-blog/shortage-skilled-workers-logistics/",
        useFor: "Worker shortage data",
      },
      {
        name: "KOFA",
        url: "https://www.kofa.de",
        useFor: "Skilled-worker gap by region",
      },
    ],
  },
  {
    id: "s3",
    slug: "retail-ecommerce",
    priority: 3,
    starred: true,
    title: "Retail / E-commerce",
    shortLabel: "Retail / E-commerce",
    tagline: "Priority #3 — analytics-native, underrated for me",
    whatItIs:
      "Companies that sell products to consumers — online and/or physical shops. This is one of the most data-driven sectors because every click, purchase, return, and delivery is a data point.",
    howItWorks: [
      "Source/buy products from suppliers.",
      "Store in warehouses.",
      "Sell via online store, app, or physical shop.",
      "Fulfil & deliver — pick, pack, ship, handle returns.",
      "Profit = repeat customers (acquiring new ones is expensive).",
    ],
    moneyFlow:
      "Margins are thin; conversion, pricing, loyalty, and fulfilment efficiency decide who wins.",
    valueChainNotes: [
      "From my notes: Pure online (Zalando — Europe’s most data-obsessive fashion player), big traditional retail with huge tech arms (Schwarz/Lidl/Kaufland, Otto, Aldi, REWE), and marketplaces (Amazon, eBay).",
    ],
    businessProblems: [
      "Thin margins — small improvements in conversion/pricing = millions.",
      "Returns — especially fashion; huge cost.",
      "Customer churn — keeping buyers loyal.",
      "Pricing wars — dynamic pricing needed.",
      "Agentic commerce shift — AI agents starting to make purchase decisions, not only humans.",
      "GDPR/trust — German consumers are cautious about sharing data for AI.",
    ],
    whereDataAi: [
      {
        title: "Recommendation engines",
        detail: "Customers who bought X also bought Y.",
      },
      {
        title: "Demand forecasting",
        detail: "Predict what sells — stock the right products.",
      },
      {
        title: "Dynamic pricing",
        detail: "Optimal price in real time.",
      },
      {
        title: "Customer analytics",
        detail: "Segment, predict churn, target marketing.",
      },
      {
        title: "Return prediction",
        detail: "Predict which orders will be returned.",
      },
      {
        title: "Inventory & supply chain",
        detail: "Right product, place, and time.",
      },
      {
        title: "Marketing analytics / A-B testing",
        detail: "Which ad, email, or layout works.",
      },
      {
        title: "Conversational / GenAI shopping",
        detail: "Shopping assistants and agentic commerce.",
      },
    ],
    roles: [
      "Data Analyst",
      "Business Analyst",
      "Data Scientist",
      "Analytics Engineer",
      "BI Developer",
      "Product Analyst",
      "Marketing Analyst",
      "Pricing Analyst",
    ],
    skills: [
      "SQL",
      "Python",
      "Power BI / Tableau / Looker",
      "Statistics",
      "A/B testing",
      "ML (recommendation systems)",
      "E-commerce platforms",
      "Cloud",
      "Communication — present insights to marketing/product teams",
    ],
    companiesByTier: [
      {
        tier: 1,
        companies: "Schwarz Group (Lidl/Kaufland tech), Otto Group, Amazon, REWE, Aldi",
        locations: "Neckarsulm, Hamburg, Cologne, Essen",
      },
      {
        tier: 2,
        companies:
          "Zalando, About You, Douglas, Flaconi, Zooplus, Delivery Hero, Spread Group",
        locations: "Berlin, Hamburg, Leipzig",
      },
      {
        tier: 3,
        companies: "BirdsView, Choco, Flink, D2C startups",
        locations: "Leipzig, Berlin",
      },
    ],
    hubs: [
      { city: "Berlin", note: "Zalando, About You, Delivery Hero, many e-commerce startups" },
      { city: "Hamburg", note: "Otto Group HQ" },
      { city: "Neckarsulm", note: "Schwarz Group (Lidl/Kaufland — huge tech arm)" },
      { city: "Leipzig", note: "Spread Group, BirdsView" },
    ],
    outlook2027_2028: [
      "German B2C e-commerce around ~€321–330bn in 2026 with moderate growth.",
      "AI becoming standard — Otto, Zalando, MediaMarktSaturn, About You expanding AI.",
      "Agentic commerce rising — ~52% of German consumers already use AI shopping agents (Deloitte 2026).",
      "Competition shifting from price to digital capability — personalization, fulfilment, loyalty.",
      "Retail AI market growing — demand forecasting, dynamic pricing, fraud detection.",
      "Smaller retailers adopt AI via platform providers → more analyst/engineer roles at tech vendors too.",
    ],
    howItHelpsMe: [
      "Analytics is the core business here — analyst roles are plentiful and central.",
      "Best business-analytics training ground for me — every project has an obvious € story.",
      "English-friendly — Zalando, Otto, Spread Group, BirdsView.",
      "Spread Group + BirdsView in Leipzig — local Werkstudent options.",
      "A recommendation-engine or demand-forecast project becomes a perfect portfolio piece for me.",
    ],
    myGameNotes: [
      "From my notes: volume of analyst jobs is higher and often English-friendly.",
      "I treat Zalando-style data culture as the gold standard to learn from.",
    ],
    localLeipzig: "Spread Group, BirdsView",
    resources: [
      {
        name: "KPMG — GenAI in Retail 2026",
        url: "https://kpmg.com/de/en/insights/digital-transformation/artificial-intelligence/study-generative-ai-in-the-german-economy-in-2026/retail-industry-report.html",
        useFor: "Retail AI adoption",
      },
      {
        name: "Deloitte — KI-Agenten im Einzelhandel",
        url: "https://www.deloitte.com/de/de/Industries/consumer/perspectives/ki-agenten-im-einzelhandel.html",
        useFor: "Agentic commerce trends",
      },
      {
        name: "HDE (German Retail Association)",
        url: "https://www.hde.de/en/",
        useFor: "Industry data, events",
      },
      {
        name: "BEVH (German E-Commerce Association)",
        url: "https://www.bevh.org/",
        useFor: "E-commerce market stats",
      },
      {
        name: "Mintel — Germany Online Retail",
        url: "https://store.mintel.com/report/germany-state-of-retail-online-retailing-market-report",
        useFor: "Consumer trends",
      },
      {
        name: "ResearchAndMarkets — DE B2C E-commerce",
        url: "https://www.researchandmarkets.com/reports/6191221/germany-b2c-ecommerce-market-size-and-forecast",
        useFor: "Market size forecast",
      },
    ],
  },
  {
    id: "s4",
    slug: "banking-fintech",
    priority: 4,
    starred: true,
    title: "Banking / FinTech",
    shortLabel: "Banking / FinTech",
    tagline: "Priority #4 — best for business analytics for me",
    whatItIs:
      "Companies that handle money and risk — banks (hold/lend money), insurers (protect against risk), FinTechs (modern app-based money services). I call this analytics-native because the entire business is numbers and data.",
    howItWorks: [
      "Banks: take deposits → lend at higher interest → profit from spread + fees.",
      "Insurers: collect premiums from many → pay claims to few → profit if priced correctly.",
      "FinTechs: same activities, lower cost, app-first (N26, Trade Republic, Scalable Capital).",
      "Payment companies handle online transactions.",
    ],
    moneyFlow:
      "Interest margin, premiums, fees, and increasingly platform/API economics in FinTech.",
    businessProblems: [
      "Fraud — digital payments create more fraud to fight.",
      "Risk & regulatory compliance — EU AI Act (Aug 2026), DORA, MiCA, PSD3.",
      "Legacy IT — old core banking systems need modernizing.",
      "Margin pressure — competition from FinTechs and cost of compliance.",
      "Agentic Banking — shift from AI that assists to AI that acts (negotiates rates, executes trades).",
    ],
    whereDataAi: [
      {
        title: "Fraud detection",
        detail: "Spot suspicious transactions in real time.",
      },
      {
        title: "Credit scoring",
        detail: "Predict if a borrower will pay back.",
      },
      {
        title: "Risk & pricing models",
        detail: "Insurers use data to price premiums correctly.",
      },
      {
        title: "Customer analytics",
        detail: "Churn, segmentation, product recommendation.",
      },
      {
        title: "Automated advisory / robo-investing",
        detail: "Apps that invest money with model support.",
      },
      {
        title: "Claims automation",
        detail: "Insurers use AI/algorithms to process claims faster.",
      },
      {
        title: "Regulatory reporting",
        detail: "Data pipelines that prove compliance to authorities.",
      },
      {
        title: "Agentic AI workflows",
        detail: "Autonomous loan processing, liquidity management.",
      },
    ],
    roles: [
      "Business / Data Analyst",
      "Risk Analyst",
      "Fraud Analyst",
      "Data Scientist",
      "ML Engineer",
      "AI Engineer (GenAI/agents)",
      "Quant Analyst",
      "Financial Analyst",
      "AI Architect",
      "Emerging: AI Governance, AI Compliance Officer",
    ],
    skills: [
      "SQL",
      "Python",
      "Statistics",
      "ML",
      "Power BI",
      "Risk modeling",
      "A/B testing",
      "Regulatory knowledge (EU AI Act, DORA) — rising fast",
      "Communication — explain models to non-technical stakeholders",
      "German B2 helps; FinTechs often English",
    ],
    companiesByTier: [
      {
        tier: 1,
        companies:
          "Deutsche Bank, Commerzbank, Allianz, Munich Re, DZ Bank, Deutsche Börse",
        locations: "Frankfurt, Munich",
      },
      {
        tier: 2,
        companies: "ING-DiBa, DKB, Taktile, GFT (banking focus)",
        locations: "Frankfurt, Berlin, Stuttgart",
      },
      {
        tier: 3,
        companies: "N26, Trade Republic, Scalable Capital, Solaris, wefox, Taxfix",
        locations: "Berlin, Munich",
      },
    ],
    hubs: [
      { city: "Frankfurt", note: "Banking/insurance capital" },
      { city: "Berlin", note: "FinTechs — N26, Trade Republic, Solaris" },
      { city: "Munich", note: "Insurance — Allianz, Munich Re" },
      { city: "Stuttgart", note: "LBBW agentic AI hiring" },
      { city: "Cologne", note: "From my notes — also watch Köln" },
    ],
    outlook2027_2028: [
      "Agentic Banking is the 2026–28 buzzword — AI that acts, not just answers (Commerzbank Ava, LBBW blue.gpt, Deutsche Bank Kora).",
      "EU AI Act high-risk rules effective Aug 2026 → surge in AI compliance/governance hiring.",
      "FinTech IPO wave possible — Trade Republic, N26.",
      "B2B embedded finance replacing retail BNPL as a growth frontier.",
      "Real hiring signals: Deutsche Börse AI Engineer (agents, RAG, EU AI Act); LBBW Agentic AI; Capco AI Architect (Frankfurt).",
      "FinTech Engineer ranks among WEF fastest-growing roles globally.",
    ],
    howItHelpsMe: [
      "Best match for business + data analytics — analytics is the product.",
      "Pays well — Frankfurt salaries sit at top German ranges.",
      "English-friendly entry via Berlin FinTechs.",
      "A fraud-detection or credit-scoring project is a strong portfolio piece for me here.",
      "Regulatory AI (EU AI Act) is an emerging niche my CS/AI path can grow into later.",
    ],
    myGameNotes: [
      "From my notes: mainly business + analytics, easier communication, more English-friendly and well-paid analyst jobs — I marked this as my game.",
      "I treat Berlin FinTech as my English entry and Frankfurt as my long-term scale lane.",
    ],
    localLeipzig: "Mostly Frankfurt/Berlin remote or travel — not my strongest local hub",
    resources: [
      {
        name: "Contextual Solutions — German FinTech 2026",
        url: "https://www.contextualsolutions.de/blog/german-fintech-market-report-2026",
        useFor: "Market trends, regulation",
      },
      {
        name: "FinanceX — FinTech & Banking 2026",
        url: "https://www.financexmagazine.com/post/germany-s-fintech-and-banking-market-in-2026-the-era-of-intelligent-resilience",
        useFor: "Agentic banking",
      },
      {
        name: "Fintech Careers",
        url: "https://www.fintechcareers.com/",
        useFor: "FinTech-specific job board",
      },
      {
        name: "BaFin",
        url: "https://www.bafin.de/EN/Home/home_node.html",
        useFor: "Regulation context",
      },
      {
        name: "AI Governance Jobs — EU AI Act",
        url: "https://www.ai-governance-jobs.com/eu-ai-act-jobs/",
        useFor: "Compliance roles",
      },
      {
        name: "Deutsche Börse careers",
        url: "https://careers.deutsche-boerse.com/",
        useFor: "Real AI job example (Frankfurt)",
      },
    ],
  },
  {
    id: "s5",
    slug: "industrial-automotive",
    priority: 5,
    starred: true,
    title: "Industrial / Manufacturing / Automotive",
    shortLabel: "Industrial / Auto",
    tagline: "Priority #5 — Germany’s core, durable bet for me",
    whatItIs:
      "Companies that physically make things — cars, machines, industrial equipment, parts. This is Germany’s export backbone (~¼ of GDP). It includes automotive OEMs, Tier-1 suppliers, and Maschinenbau (machine builders). From my notes: flagship industries + Industrial AI Cloud, clean & cutting emissions.",
    howItWorks: [
      "OEMs (VW, BMW, Porsche) design and assemble the final vehicle.",
      "Tier-1 suppliers (Bosch, Continental, ZF) make systems — braking, steering, electronics.",
      "Machine & equipment builders (Siemens, Zeiss, Trumpf) build the machines and robots factories run on.",
      "Raw materials arrive → suppliers make parts → OEM assembles → sold B2B/B2C → after-sales service and increasingly embedded software.",
    ],
    moneyFlow:
      "Product sales + after-sales & service — that is how money is made here (from my notes).",
    businessProblems: [
      "Decarbonisation / EV transition — ~71% of automotive firms say emissions-reduction will transform them (WEF).",
      "Chinese competition — cheaper EVs create cost pressure on German automakers.",
      "Aging workforce + Fachkräftemangel — not enough skilled factory workers.",
      "Cost pressure → higher need for data & AI efficiency (this is my game chain from the notes).",
      "Supply-chain shocks — chips, materials, geopolitics.",
    ],
    whereDataAi: [
      {
        title: "Predictive maintenance",
        detail: "Predict when a machine will break before it does — avoid downtime cost.",
      },
      {
        title: "Computer-vision quality control",
        detail: "Cameras + AI spot defects / anomalies on the line.",
      },
      {
        title: "Digital twins",
        detail: "Virtual copy of the factory to test changes safely.",
      },
      {
        title: "Supply-chain forecasting",
        detail: "Predict demand and parts shortages.",
      },
      {
        title: "Process optimization",
        detail: "Run the factory faster with less energy/waste.",
      },
      {
        title: "Autonomous driving / ADAS",
        detail: "Longer-term product AI, but hiring now.",
      },
    ],
    roles: [
      "Data Engineer",
      "ML Engineer",
      "Analytics Engineer",
      "Data / BI Analyst",
      "Computer Vision Engineer",
      "MLOps Engineer",
      "Digital Twin Specialist",
      "Azure-focused industrial data roles",
    ],
    skills: [
      "Python",
      "SQL",
      "Time-series",
      "Computer vision (OpenCV)",
      "Azure (common in German industry)",
      "IoT / sensor data",
      "MLOps",
      "Docker / CI/CD",
      "German B2/C1 — heavily needed in Mittelstand/industrial",
    ],
    companiesByTier: [
      {
        tier: 1,
        companies: "BMW, Porsche, Mercedes-Benz, VW/CARIAD, Siemens, Bosch, ABB",
        locations: "Munich, Stuttgart, Wolfsburg, Leipzig, Gerlingen",
      },
      {
        tier: 2,
        companies:
          "ZF, Continental, Schaeffler, Trumpf, Zeiss, Festo, SICK, KUKA, Konux",
        locations: "Friedrichshafen, Hanover, Ditzingen, Augsburg",
      },
      {
        tier: 3,
        companies: "KnowFab, Sereact, MAIA, Kopernikus",
        locations: "Leipzig, Stuttgart",
      },
    ],
    hubs: [
      { city: "Stuttgart", note: "Mercedes, Porsche, Bosch — automotive core" },
      { city: "Munich", note: "BMW, Siemens" },
      { city: "Wolfsburg / Ingolstadt", note: "VW, Audi" },
      { city: "Leipzig", note: "BMW plant + Porsche plant — local Werkstudent" },
      { city: "Berlin", note: "Also listed in my hubs notes for industrial AI/data" },
      { city: "Augsburg / Ditzingen", note: "KUKA, Trumpf" },
    ],
    outlook2027_2028: [
      "Industrial AI for automotive factories is a fast-growing market.",
      "Predictive maintenance market: strong multi-year CAGR into 2031.",
      "Digital twin market: steep growth narrative into 2030.",
      "Govt €5.5bn High-Tech Agenda + NVIDIA + Deutsche Telekom Industrial AI Cloud (Europe’s industrial AI cloud / AI chips narrative) = heavy public/private investment — from my notes.",
      "Apprenticeships rise where AI is adopted — German labour model trains, not only fires.",
      "EV + green transition = durable multi-year demand for data/AI in factories.",
      "Mainly digitalisation / Industry 4.0 — runs on data & AI — I marked this as my game.",
    ],
    howItHelpsMe: [
      "Most durable German bet for me — won’t disappear; government-funded angle is strong.",
      "My DevOps + ML + Python combo fits Industry 4.0 / factory data.",
      "BMW + Porsche plants in Leipzig — realistic local Werkstudent/thesis.",
      "Forest Guard (satellite) + Vital Guard (IoT) relate to industrial/sustainability angles.",
      "Catch for me: more German-heavy — I need to push B2 German to unlock most roles.",
    ],
    myGameNotes: [
      "China cheaper EVs → cost pressure → ↑ need for data & AI — that chain is my industrial thesis.",
      "Clean & cutting emissions + Industrial AI Cloud are the policy/tech flags I follow.",
    ],
    localLeipzig: "BMW, Porsche, KnowFab, MAIA, Kopernikus",
    resources: [
      {
        name: "GTAI — AI in Manufacturing",
        url: "https://www.gtai.de/en/invest/industries/digital-economy/artificial-intelligence",
        useFor: "Industrial AI investment",
      },
      {
        name: "VDMA",
        url: "https://www.vdma.org/en",
        useFor: "Machinery industry data",
      },
      {
        name: "VDA",
        url: "https://www.vda.de/en",
        useFor: "Automotive production stats",
      },
      {
        name: "acatech — Industry 4.0",
        url: "https://www.acatech.de/en/topic/industry-4-0/",
        useFor: "Policy, roadmap",
      },
      {
        name: "Trade.gov — Germany AI Manufacturing",
        url: "https://www.trade.gov/market-intelligence/germany-ai-manufacturing",
        useFor: "Industrial AI Cloud",
      },
      {
        name: "Plattform Industrie 4.0",
        url: "https://www.plattform-i40.de/IP/Navigation/EN/Home/home.html",
        useFor: "Official Industry 4.0 platform",
      },
      {
        name: "MarketsandMarkets — Predictive Maintenance DE",
        url: "https://www.marketsandmarkets.com/Market-Reports/geography/ai-driven-predictive-maintenance-market/Germany",
        useFor: "Market size forecast",
      },
    ],
  },
  {
    id: "s6",
    slug: "energy-greentech",
    priority: 6,
    starred: false,
    title: "Energy / GreenTech",
    shortLabel: "Energy / GreenTech",
    tagline: "Priority #6 — optional for me, growing fast",
    whatItIs:
      "Companies that produce, move, and sell energy (electricity, gas) plus GreenTech firms built around clean energy, storage, and cutting carbon — driven by Germany’s Energiewende.",
    howItWorks: [
      "Generation — coal/gas/nuclear (phasing out) + renewables (solar, wind, hydro).",
      "Transmission — high-voltage grids move power nationally (50Hertz, TenneT, Amprion).",
      "Distribution — local networks to homes/factories.",
      "Retail/supply — companies bill for electricity used.",
      "Services — solar install, batteries, EV charging, energy-management software.",
      "Core challenge from my notes: electricity must be balanced every second — supply must match demand or the grid fails; renewables make this harder because sun/wind are not constant.",
    ],
    moneyFlow:
      "Energy sales, network tariffs, project development, and increasingly flexibility/services markets.",
    businessProblems: [
      "Energiewende — shift toward high renewables share and large solar/wind build-out.",
      "Grid stability — intermittent renewables need forecasting + storage.",
      "AI/data-center electricity demand rising sharply — energy becomes infrastructure for AI, not only climate niche.",
      "Hydrogen (H2) backbone — new infrastructure being built.",
      "Skilled-worker shortage in energy — HVDC, offshore wind, electrolysis roles in high demand.",
    ],
    whereDataAi: [
      {
        title: "Demand & generation forecasting",
        detail: "Predict how much power is needed and how much renewables will generate.",
      },
      {
        title: "Smart-grid optimization",
        detail: "Decide in real time where to send power.",
      },
      {
        title: "Predictive maintenance",
        detail: "Know when turbines/transformers fail before they do.",
      },
      {
        title: "Energy trading analytics",
        detail: "Buy/sell on hourly markets with better models.",
      },
      {
        title: "Consumption analytics",
        detail: "Help households and factories use less energy.",
      },
      {
        title: "Virtual power plants",
        detail: "Aggregate distributed energy resources.",
      },
    ],
    roles: [
      "Data Analyst / Scientist",
      "Energy Analyst",
      "Grid Optimization Specialist",
      "Forecasting Engineer",
      "ML Engineer (time-series)",
      "Emerging: AI Solutions Engineer (energy), Digital Twin Specialist, Hybrid Energy Professional",
    ],
    skills: [
      "Python",
      "Time-series forecasting",
      "Optimization",
      "SQL",
      "Statistics",
      "Cloud",
      "Domain knowledge (energy markets, grid basics) — learnable",
      "German helps (utilities/Mittelstand)",
    ],
    companiesByTier: [
      {
        tier: 1,
        companies: "E.ON, RWE, EnBW, Siemens Energy, 50Hertz, Ørsted",
        locations: "Essen, Karlsruhe, Berlin, Denmark",
      },
      {
        tier: 2,
        companies: "VNG, Leipziger Stadtwerke, Vestas, 1KOMMA5°, Enpal, Reverion",
        locations: "Leipzig, Berlin, Hamburg, Aarhus, Karlsruhe",
      },
      {
        tier: 3,
        companies: "GreenTech startups (hundreds of energy startups in Germany)",
        locations: "Berlin, Munich, Leipzig",
      },
    ],
    hubs: [
      { city: "Essen", note: "E.ON, RWE" },
      { city: "Karlsruhe", note: "EnBW" },
      { city: "Berlin", note: "50Hertz + many GreenTech startups" },
      { city: "Leipzig", note: "VNG, Leipziger Stadtwerke" },
      { city: "Northern Germany", note: "Offshore wind — Bremen/Hamburg coast" },
    ],
    outlook2027_2028: [
      "Energy analytics market growing with solid CAGR into 2031.",
      "Thousands of GreenTech startups in Germany; energy is a dominant sub-sector of new foundings.",
      "AI + energy convergence — AI boom drives electricity demand → GreenTech becomes industrial infrastructure.",
      "Hybrid energy professional emerging — part engineer, part data analyst (IEA).",
      "From my notes: climate-change adaptation predicted among top job sectors by 2030.",
      "Salaries for energy specialists have been rising in recent years (Gehaltsatlas Energie).",
    ],
    howItHelpsMe: [
      "Mission-driven + fast-growing — good for me if sustainability motivates my work.",
      "Forest Guard project (satellite/deforestation) is a credible GreenTech story for me.",
      "Time-series forecasting is a core skill here and transferable everywhere.",
      "VNG + Leipziger Stadtwerke in Leipzig — local option.",
      "Catch for me: some roles need domain depth; slower entry than software/retail; more German-heavy.",
    ],
    myGameNotes: [
      "The balancing problem with renewables is where AI/data becomes the game — that is my energy thesis from the notes.",
      "I keep this as Priority #6: strong optional lane, not my first door.",
    ],
    localLeipzig: "VNG, Leipziger Stadtwerke",
    resources: [
      {
        name: "BDEW",
        url: "https://www.bdew.de/en/",
        useFor: "Industry data, policy",
      },
      {
        name: "BWE (Wind Energy Association)",
        url: "https://www.wind-energie.de/english/",
        useFor: "Wind market stats",
      },
      {
        name: "BSW Solar",
        url: "https://www.solarwirtschaft.de/en/",
        useFor: "Solar market data",
      },
      {
        name: "GreenTech Monitor 2026",
        url: "https://www.startuprad.io/post/germany-ai-bottleneck-electricity-greentech-infrastructure",
        useFor: "GreenTech startup landscape",
      },
      {
        name: "EnergyCareer.net",
        url: "https://www.energycareer.net/",
        useFor: "Energy-specific job board",
      },
      {
        name: "Gehaltsatlas Energie 2026",
        url: "https://gehaltsatlas.de/energie/",
        useFor: "Energy role salaries",
      },
      {
        name: "IEA — Energy and AI",
        url: "https://www.iea.org/reports/energy-and-ai",
        useFor: "Global energy + AI trends",
      },
      {
        name: "GTAI — Energy industry",
        url: "https://www.gtai.de/en/invest/industries/energy-industry",
        useFor: "Investment overview",
      },
      {
        name: "Fraunhofer ISE",
        url: "https://www.ise.fraunhofer.de/en.html",
        useFor: "Research, thesis",
      },
    ],
  },
];

export const crossSectorResources: SectorResource[] = [
  {
    name: "WEF Future of Jobs 2025",
    url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
    useFor: "All sectors — jobs/skills trends",
  },
  {
    name: "Bitkom KI Studie 2025",
    url: "https://bitkom-research.de/studien/kuenstliche-intelligenz-2025",
    useFor: "German AI adoption",
  },
  {
    name: "GTAI Industries",
    url: "https://www.gtai.de/en/invest/industries",
    useFor: "Industry overviews",
  },
  {
    name: "Destatis",
    url: "https://www.destatis.de/EN",
    useFor: "Official statistics",
  },
  {
    name: "KOFA / IW Köln",
    url: "https://www.kofa.de",
    useFor: "Skilled-worker shortage",
  },
  {
    name: "PwC AI Jobs Barometer",
    url: "https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html",
    useFor: "How roles evolve with AI",
  },
  {
    name: "Entgeltatlas",
    url: "https://web.arbeitsagentur.de/entgeltatlas/",
    useFor: "Pay benchmarks",
  },
  {
    name: "Arbeitsagentur Jobsuche",
    url: "https://www.arbeitsagentur.de/jobsuche/",
    useFor: "Official German jobs",
  },
  {
    name: "Dealroom unicorns",
    url: "https://dealroom.co/unicorns/germany/",
    useFor: "Scale-ups",
  },
  {
    name: "appliedAI Landscape",
    url: "https://www.appliedai-institute.de/en/publications/ai-startup-landscape-2025/",
    useFor: "AI startups",
  },
  {
    name: "Startup Mitteldeutschland",
    url: "https://startup-mitteldeutschland.de/search/location/startup-datenbank/",
    useFor: "Leipzig/Saxony startups",
  },
  {
    name: "Northdata",
    url: "https://www.northdata.com/",
    useFor: "Company diligence",
  },
  {
    name: "Unternehmensregister",
    url: "https://www.unternehmensregister.de/",
    useFor: "Official filings",
  },
  {
    name: "Leipzig Wirtschaft",
    url: "https://www.leipzig.de/wirtschaft",
    useFor: "Local economy context",
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
