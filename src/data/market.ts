export interface MarketSource {
  id: string;
  number: string;
  name: string;
  url: string;
  symbol: string;
  category: "trends" | "jobs";
  whatItIs: string;
  howItHelpedMe: string;
  myTakeaway: string;
}

export interface MarketInsight {
  id: string;
  title: string;
  body: string;
  linkedSourceNumbers: string[];
}

/** STEP 1 — Market & Trends sources I researched for this roadmap */
export const marketTrendSources: MarketSource[] = [
  {
    id: "wef-future-jobs",
    number: "01",
    name: "WEF — Future of Jobs Report 2025",
    url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
    symbol: "🌐",
    category: "trends",
    whatItIs:
      "World Economic Forum report on global job and skill trends from 2025 toward 2030 — including Germany country insights.",
    howItHelpedMe:
      "This helped me because it confirmed that AI, big data, and technology literacy sit at the top of rising skill demand. It is good for me because I can align my multi-year plan (roles → skills → thesis → job) with what employers themselves say they will hire for — not with random blog advice.",
    myTakeaway:
      "I treat this as my north-star labour-market map: Germany expects AI and information-processing tools to transform operations for most employers, and growing roles include AI/ML specialists, data specialists, and software developers.",
  },
  {
    id: "wef-pdf",
    number: "02",
    name: "WEF — Full PDF",
    url: "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf",
    symbol: "📄",
    category: "trends",
    whatItIs:
      "Full Future of Jobs 2025 PDF with detailed tables, country notes, and role/skill rankings.",
    howItHelpedMe:
      "This helped me because the PDF gives the hard numbers and Germany-specific pages I can cite when I justify why I focus on Data/AI. It is useful for me when I write applications or thesis motivation — I can point to official figures instead of vague claims.",
    myTakeaway:
      "I use the PDF when I need exact wording on fastest-growing skills (AI & big data, cybersecurity, tech literacy) and Germany employer expectations (high AI transformation intent + active hiring for new capabilities).",
  },
  {
    id: "bitkom-ki-2025",
    number: "03",
    name: "Bitkom — KI Studie 2025",
    url: "https://bitkom-research.de/studien/kuenstliche-intelligenz-2025",
    symbol: "🇩🇪",
    category: "trends",
    whatItIs:
      "Bitkom research on artificial intelligence adoption and maturity inside German companies.",
    howItHelpedMe:
      "This helped me because it shows the German AI reality — not Silicon Valley hype. It is good for me because I am targeting DE/EU employers; I need to know where German firms actually stand on KI so I pick sectors and problems that match local demand.",
    myTakeaway:
      "I read Bitkom as my reality check: German companies are investing in AI, but skills gaps and implementation maturity still create openings for people who can deliver practical Data/AI work.",
  },
  {
    id: "bitkom-hub",
    number: "04",
    name: "Bitkom — Publications hub",
    url: "https://www.bitkom.org/Bitkom/Publikationen",
    symbol: "📚",
    category: "trends",
    whatItIs:
      "Central library of Bitkom digital-economy publications for Germany.",
    howItHelpedMe:
      "This helped me because I can return here whenever I need a fresher German digital/AI report. It is practical for me as a living shelf — I do not depend on one PDF forever.",
    myTakeaway:
      "I keep this hub bookmarked so I can refresh my market view each semester without rebuilding my source list from scratch.",
  },
  {
    id: "gtai-ai",
    number: "05",
    name: "GTAI — AI in Germany",
    url: "https://www.gtai.de/en/invest/industries/digital-economy/artificial-intelligence",
    symbol: "🏛️",
    category: "trends",
    whatItIs:
      "Germany Trade & Invest overview of the AI industry landscape, policy, and investment narrative in Germany.",
    howItHelpedMe:
      "This helped me because it frames Germany as a serious AI market with public agenda and industry focus. It is good for me because it supports my decision to build a Germany-first roadmap (Leipzig + DACH + nearby EU) rather than only chasing US job boards.",
    myTakeaway:
      "I use GTAI to remind myself that the German AI market is policy-backed and industry-linked — which fits industrial, logistics, and enterprise software problems I care about.",
  },
  {
    id: "gtai-factsheet",
    number: "06",
    name: "GTAI — AI Fact Sheet PDF",
    url: "https://www.gtai.de/resource/blob/1933706/3f08e55b13f37918caf4cb87d9588874/20250930_FactSheet_AI_WEB.pdf",
    symbol: "🧾",
    category: "trends",
    whatItIs:
      "Compact GTAI fact sheet with German AI market figures and agenda highlights (including the ~€5.5bn AI agenda narrative).",
    howItHelpedMe:
      "This helped me because short fact sheets are easy to re-check before interviews or thesis proposals. It is useful for me when I need one clean page of German AI numbers without reading a 200-page report again.",
    myTakeaway:
      "I treat the fact sheet as my quick evidence card for “why Germany + AI now” in my roadmap story.",
  },
  {
    id: "statista-ai-de",
    number: "07",
    name: "Statista — AI Germany outlook",
    url: "https://www.statista.com/outlook/tmo/artificial-intelligence/germany",
    symbol: "📈",
    category: "trends",
    whatItIs:
      "Statista market outlook for artificial intelligence in Germany (forecast charts and segment views).",
    howItHelpedMe:
      "This helped me because I can see growth direction for AI spend in Germany over the coming years. It is good for me because growth markets justify long-term skill investment — I am not building skills for a shrinking niche.",
    myTakeaway:
      "I use Statista Germany AI outlook when I need a forecast chart to support my 2–3 year learning and job strategy.",
  },
  {
    id: "statista-general",
    number: "08",
    name: "Statista (general)",
    url: "https://www.statista.com/",
    symbol: "📊",
    category: "trends",
    whatItIs:
      "Broad statistics platform for sector and country charts beyond AI-only views.",
    howItHelpedMe:
      "This helped me because after I pick a sector (logistics, auto, software, energy), I can pull supporting market charts. It is useful for me when I move from Market → Sector and need evidence for that sector’s size or digitalization pressure.",
    myTakeaway:
      "I keep Statista as my general chart toolkit for sector deep-dives that come after this Market step.",
  },
  {
    id: "stanford-ai-index",
    number: "09",
    name: "Stanford AI Index 2025",
    url: "https://aiindex.stanford.edu/report/",
    symbol: "🎓",
    category: "trends",
    whatItIs:
      "Annual Stanford AI Index covering global investment, research, jobs, and skills signals.",
    howItHelpedMe:
      "This helped me because it places Germany/Europe inside a global AI race. It is good for me because I understand which skills and investment themes are worldwide — then I localize them with Bitkom/GTAI for Germany.",
    myTakeaway:
      "I use the AI Index for global context, then I map it back to my DACH employer list so my plan stays locally actionable.",
  },
  {
    id: "mckinsey-quantumblack",
    number: "10",
    name: "McKinsey QuantumBlack / State of AI",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights",
    symbol: "💼",
    category: "trends",
    whatItIs:
      "McKinsey / QuantumBlack insights on where AI creates measurable business value across functions and industries.",
    howItHelpedMe:
      "This helped me because it connects AI to € business problems (operations, customer, risk, product). It is important for me because my next steps are Business Problems → Role — I need value themes, not only technology buzzwords.",
    myTakeaway:
      "I pull McKinsey/QuantumBlack themes when I ask: where can Data/AI create value inside the companies I already listed in Tier 1–3.",
  },
  {
    id: "oecd-ai",
    number: "11",
    name: "OECD.AI",
    url: "https://oecd.ai",
    symbol: "🧭",
    category: "trends",
    whatItIs:
      "OECD AI policy and labour observatory with country-by-country indicators and policy context.",
    howItHelpedMe:
      "This helped me because Germany’s AI labour and policy context matters for long-term career planning (skills, regulation, public programmes). It is useful for me when I compare Germany with nearby markets I may also apply to.",
    myTakeaway:
      "I use OECD.AI when I need a policy-aware view of AI labour demand — especially for regulated industries in my company list (banking, health, energy).",
  },
  {
    id: "appliedai-landscape",
    number: "12",
    name: "appliedAI — German AI Startup Landscape 2025",
    url: "https://www.appliedai-institute.de/en/publications/ai-startup-landscape-2025/",
    symbol: "🗺️",
    category: "trends",
    whatItIs:
      "Map of ~935 German AI startups by industry and city — bridge from market trends into real company discovery.",
    howItHelpedMe:
      "This helped me because it turns “AI is growing” into a concrete Tier 3 pipeline. It is good for me because I can filter toward Leipzig/Berlin/Munich and industrial AI use-cases that match my location and interests.",
    myTakeaway:
      "I treat appliedAI as the market → company bridge for startups, especially when I refresh Tier 3.",
  },
  {
    id: "iw-koeln",
    number: "13",
    name: "IW Köln / KOFA (Fachkräftemangel)",
    url: "https://www.iwkoeln.de/en",
    symbol: "👷",
    category: "trends",
    whatItIs:
      "IW Köln research on skilled-worker shortage (Fachkräftemangel) in Germany.",
    howItHelpedMe:
      "This helped me because shortage data explains why companies hire and train. It is good for me because a shortage market improves my odds if I build the right scarce skills (Data/AI for industry and digital roles).",
    myTakeaway:
      "I use IW/KOFA logic to stay realistic: Germany has shortages in skilled digital/technical roles — my roadmap should aim at those scarce intersections.",
  },
  {
    id: "kofa",
    number: "14",
    name: "KOFA data portal",
    url: "https://www.kofa.de",
    symbol: "📍",
    category: "trends",
    whatItIs:
      "KOFA portal for regional shortage indicators by occupation.",
    howItHelpedMe:
      "This helped me because I can check shortage signals closer to Leipzig/Saxony and other cities I target. It is practical for me when I decide whether a role family is regionally scarce or only nationally discussed.",
    myTakeaway:
      "I use KOFA when I want location-aware shortage checks before I over-index on a job title.",
  },
  {
    id: "pwc-ai-jobs",
    number: "15",
    name: "PwC — AI Jobs Barometer 2026",
    url: "https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html",
    symbol: "🛰️",
    category: "trends",
    whatItIs:
      "PwC barometer on how roles and wage/ skill premiums change as AI spreads through the labour market.",
    howItHelpedMe:
      "This helped me because it shows how existing jobs change with AI — not only brand-new job titles. It is good for me because I may enter via Data Analyst / Engineer / Werkstudent paths that evolve into AI-heavy work.",
    myTakeaway:
      "I use PwC to keep my role strategy flexible: I prepare for AI-augmented versions of data and software roles, not only “AI Specialist” labels.",
  },
  {
    id: "linkedin-jobs-rise",
    number: "16",
    name: "LinkedIn — Jobs on the Rise",
    url: "https://www.linkedin.com/pulse/topics/jobs-on-the-rise",
    symbol: "🔗",
    category: "trends",
    whatItIs:
      "LinkedIn signal set on rising jobs and skills from real hiring activity.",
    howItHelpedMe:
      "This helped me because it is closer to live hiring than annual PDFs alone. It is useful for me as a monthly check — I can see whether AI/data roles keep rising in the regions I watch.",
    myTakeaway:
      "I use LinkedIn Jobs on the Rise as my near-real-time validation layer after I read WEF/Bitkom.",
  },
  {
    id: "neuronfeed",
    number: "17",
    name: "NeuronFeed Germany",
    url: "https://neuronfeed.com/country/germany",
    symbol: "📰",
    category: "trends",
    whatItIs:
      "Germany-focused funding and growth news feed for tech and scale-ups.",
    howItHelpedMe:
      "This helped me because I can see who is raising or hiring now in Germany — including NRW — instead of waiting for an annual report. It is useful for me as a weekly news layer on top of WEF/Bitkom.",
    myTakeaway:
      "I use NeuronFeed to catch German company news that may change my Tier 2/3 list or NRW job map.",
  },
  {
    id: "tech-eu",
    number: "18",
    name: "Tech.eu",
    url: "https://tech.eu",
    symbol: "🗞️",
    category: "trends",
    whatItIs:
      "European tech funding and startup journalism across DACH and nearby EU.",
    howItHelpedMe:
      "This helped me because my job map is Germany plus Zurich / Zug, not only one city. It is useful for me when I need a news source for European rounds, not only German PDFs.",
    myTakeaway:
      "I keep Tech.eu as the European news layer next to NeuronFeed for Germany.",
  },
];

/** Market research via 50–100 job ads — boards I use to read real postings */
export const marketJobSources: MarketSource[] = [
  {
    id: "bundesagentur",
    number: "38",
    name: "Bundesagentur — Jobsuche",
    url: "https://www.arbeitsagentur.de/jobsuche/",
    symbol: "🗂️",
    category: "jobs",
    whatItIs:
      "Official German Federal Employment Agency job board.",
    howItHelpedMe:
      "This helped me because official postings show what German employers formally ask for. It is good for me when I collect 50–100 ads — I get clean title, location, and requirement language for Germany.",
    myTakeaway:
      "I start many DE searches here so my skill list is grounded in official German job wording.",
  },
  {
    id: "entgeltatlas",
    number: "39",
    name: "Entgeltatlas",
    url: "https://web.arbeitsagentur.de/entgeltatlas/",
    symbol: "💶",
    category: "jobs",
    whatItIs:
      "Official pay benchmark tool from the Federal Employment Agency.",
    howItHelpedMe:
      "This helped me because salary expectations should be evidence-based. It is useful for me when I compare role families and regions before I negotiate or filter internships/jobs.",
    myTakeaway:
      "I check Entgeltatlas after I shortlist role titles so my compensation picture stays realistic for Germany.",
  },
  {
    id: "stepstone",
    number: "40",
    name: "StepStone",
    url: "https://www.stepstone.de",
    symbol: "🪜",
    category: "jobs",
    whatItIs:
      "Major German job portal with ads and salary/content pages.",
    howItHelpedMe:
      "This helped me because StepStone volume is high for corporate and Mittelstand roles. It is good for me for Tier 1/2 style postings and recurring skill phrases I can count across ads.",
    myTakeaway:
      "I use StepStone heavily when I mine repeated skills and tools from German job ads.",
  },
  {
    id: "kununu",
    number: "41",
    name: "kununu",
    url: "https://www.kununu.com",
    symbol: "◎",
    category: "jobs",
    whatItIs:
      "Employer review and salary platform widely used in DACH.",
    howItHelpedMe:
      "This helped me because culture and pay signals matter before I invest application energy. It is useful for me as a soft filter after I like a company on paper.",
    myTakeaway:
      "I check kununu when I shortlist companies from my Tier lists — especially before Werkstudent/internship outreach.",
  },
  {
    id: "linkedin-jobs",
    number: "42",
    name: "LinkedIn Jobs",
    url: "https://www.linkedin.com/jobs/",
    symbol: "💼",
    category: "jobs",
    whatItIs:
      "International and German job marketplace with recruiter-driven postings.",
    howItHelpedMe:
      "This helped me because many AI/data roles appear here first, including English-friendly postings. It is good for me for Berlin/Munich/EU comparisons next to German-only boards.",
    myTakeaway:
      "I use LinkedIn Jobs for international + DE AI/data ads and to watch which companies post repeatedly.",
  },
  {
    id: "it-jobs-dk",
    number: "43",
    name: "IT-Jobs Denmark (work permit guide)",
    url: "https://www.it-jobs-dk.com/how-to-get-a-work-permit-in-denmark/",
    symbol: "🇩🇰",
    category: "jobs",
    whatItIs:
      "Denmark tech jobs context plus work-permit orientation for international candidates.",
    howItHelpedMe:
      "This helped me because nearby EU options (e.g. Denmark tech) are part of my broader European map. It is useful for me so I understand visa/work-permit paths if I compare DE vs DK opportunities later.",
    myTakeaway:
      "I keep Denmark as a secondary market lane — not my primary focus, but researched enough that I am not blind to it.",
  },
  {
    id: "scaleup-nrw",
    number: "44",
    name: "Scale-up.NRW / wirtschaft.nrw",
    url: "https://www.wirtschaft.nrw/nrw-verlaengert-wachstums-und-skalierungsprogramm-bis-2029",
    symbol: "📍",
    category: "jobs",
    whatItIs:
      "NRW state programme and news on foundings and scale-ups through 2029.",
    howItHelpedMe:
      "This helped me because I am not hunting a job in Leipzig — I study there. NRW is a job region I research. It is useful for me to see which companies are scaling in Düsseldorf, Cologne, and the Ruhr.",
    myTakeaway:
      "I use this as my NRW job-region source next to the national boards.",
  },
  {
    id: "fin-connect-nrw",
    number: "45",
    name: "Fin.Connect.NRW — AI start-ups",
    url: "https://www.fin-connect-nrw.de/en/studies/the-relevance-of-ai-start-ups-for-nrw",
    symbol: "📍",
    category: "jobs",
    whatItIs:
      "NRW study on AI start-up density around Cologne and Düsseldorf.",
    howItHelpedMe:
      "This helped me because appliedAI shows NRW has fewer AI startups than Berlin but more corporate buyers. It is useful for me when I compare Cologne / Düsseldorf to Berlin.",
    myTakeaway:
      "I read this when I want an NRW-specific AI company signal, not a Berlin-only view.",
  },
  {
    id: "gza",
    number: "46",
    name: "Greater Zurich Area",
    url: "https://www.greaterzuricharea.com/",
    symbol: "📍",
    category: "jobs",
    whatItIs:
      "Official Zurich / Zug hub map for companies, sectors, and the labour region.",
    howItHelpedMe:
      "This helped me because Zurich / Zug is a later job region I research, not a 2027 Werkstudent plan. It is useful for me to keep the company map (Google, UBS, Swiss Re, ABB, K+N) in one place.",
    myTakeaway:
      "I use Greater Zurich Area as the destination-hub source next to German boards.",
  },
  {
    id: "sem-ch",
    number: "47",
    name: "SEM — working in Switzerland",
    url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit.html",
    symbol: "📍",
    category: "jobs",
    whatItIs:
      "Swiss State Secretariat for Migration page on working in Switzerland.",
    howItHelpedMe:
      "This helped me because Switzerland has no EU Blue Card — an employer must sponsor. It is useful for me so I do not treat Zurich as a 2027 walk-in market.",
    myTakeaway:
      "I keep SEM as the permit rule next to the Zurich company list.",
  },
  {
    id: "techleap",
    number: "48",
    name: "Techleap",
    url: "https://www.techleap.nl/",
    symbol: "📍",
    category: "jobs",
    whatItIs:
      "Netherlands scale-up map for product, payments, and logistics companies.",
    howItHelpedMe:
      "This helped me because Amsterdam / Rotterdam is a later English job region, not a Semester 3 move. It is useful for me to keep Booking, Adyen, Picnic, and Mollie in one place next to the Zurich list.",
    myTakeaway:
      "I use Techleap as the NL destination-hub source next to Greater Zurich Area.",
  },
  {
    id: "iamsterdam-business",
    number: "49",
    name: "I amsterdam — business",
    url: "https://www.iamsterdam.com/en/business",
    symbol: "📍",
    category: "jobs",
    whatItIs:
      "Amsterdam business and talent page for the Randstad labour market.",
    howItHelpedMe:
      "This helped me because I want the later English product / payments door after NRW. It is useful for me so I do not mix Amsterdam into the Semester 3 German job hunt.",
    myTakeaway:
      "I keep I amsterdam next to Techleap when I research the later NL destination.",
  },
];

export const marketInsights: MarketInsight[] = [
  {
    id: "insight-1",
    title: "Why I follow the market first",
    body: "I start with Market & Trends because my roadmap is long-term: Market → Sector → Business Problems → Role → Skills → Project/Internship → Master's Thesis → Job. If I skip the market, I risk learning skills that companies are not hiring for. WEF, Bitkom, GTAI, and Stanford give me the trend layer; job boards give me the hiring layer.",
    linkedSourceNumbers: ["01", "02", "03", "05", "09", "38", "40", "42"],
  },
  {
    id: "insight-2",
    title: "What the Germany signal tells me",
    body: "From WEF Germany notes and German AI sources, I see strong employer intent to use AI and information-processing tools, plus demand for AI/ML, data, and software roles. Bitkom and GTAI keep me honest about local adoption and public agenda. This is why my company tiers emphasize DE/EU AI, industrial software, logistics, and enterprise data problems — markets where I can grow from Leipzig outward.",
    linkedSourceNumbers: ["01", "02", "03", "05", "06", "07", "12"],
  },
  {
    id: "insight-3",
    title: "How I convert trends into skills and roles",
    body: "McKinsey/QuantumBlack and PwC show me where AI creates business value and how roles change. IW/KOFA remind me that Fachkräftemangel exists in skilled digital work. Then I validate everything by reading 50–100 ads on Bundesagentur, StepStone, and LinkedIn — counting repeated tools, domain words, and degree expectations. That loop is how I keep Skills (tech + business) tied to real demand.",
    linkedSourceNumbers: ["10", "13", "14", "15", "16", "38", "39", "40", "42"],
  },
  {
    id: "insight-4",
    title: "What I do next after Market",
    body: "With Market done, my next deep pass is Sector — using the same professional format. Market told me AI/data demand is real in Germany/Europe; Sector will tell me which industries I personally want to solve problems in, before I refine Business Problems → Role again with fresher detail.",
    linkedSourceNumbers: ["08", "12", "16"],
  },
  {
    id: "insight-5",
    title: "Where I place myself after Market — NRW, Zurich / Zug, later Amsterdam / Rotterdam",
    body: "Market told me AI/data demand is real in Germany/Europe. I do not hunt a job in Leipzig — I study there. Job locations I research: NRW first, then Zurich / Zug, then later Amsterdam / Rotterdam (English logistics + product, no German required). Heidelberg / Walldorf / Karlsruhe stay on the company map (SAP, EnBW, dm), not as Target Location cities. Switzerland has no EU Blue Card — Zurich is a sponsored later door.",
    linkedSourceNumbers: ["03", "05", "12", "17", "18", "38", "44", "46", "47", "48", "49"],
  },
];

export const roadmapPattern = [
  { key: "market", label: "Market", done: true },
  { key: "sector", label: "Sector", done: true },
  { key: "problems", label: "Business Problems", done: true },
  { key: "role", label: "Role", done: true },
  { key: "skills", label: "Skills", done: true },
  { key: "project", label: "Project / Internship", done: false },
  { key: "thesis", label: "Master's Thesis", done: false },
  { key: "job", label: "Job", done: false },
] as const;
