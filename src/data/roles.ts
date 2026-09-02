export interface RoleResource {
  name: string;
  url: string;
  useFor: string;
}

export interface TargetRole {
  id: string;
  slug: string;
  code: string;
  title: string;
  badge: string;
  tagline: string;
  techBusiness: string;
  whatItIs: string;
  dayToDay: string;
  tools: string;
  whoYouTalkTo: string;
  decisions: string;
  growth2027_29: string;
  salary: { level: string; range: string }[];
  mustHave: string[];
  niceToHave: string[];
  sectorFit: { sector: string; fit: string; companies: string; example: string }[];
  whyItSuitsMe: string[];
  gapsOrRisk: string;
  track: "entry" | "destination" | "wildcard" | "emerging";
}

export interface MyPriority {
  rank: number;
  title: string;
  entryLevel: "best" | "strong" | "possible" | "hard" | "skip";
  entryLabel: string;
  growsTo: string;
  fit: string;
  note: string;
}

export const rolePositioning = {
  title: "What I am optimizing for",
  oneLiner:
    "I am not becoming a Data Scientist. I am becoming the person who handles the data, presents what it means, and helps leadership decide — starting as a Business Data Analyst in logistics or retail, growing into a Decision Scientist or Analytics Translator by 2029.",
  sweetSpot:
    "My sweet spot: roughly 45% technical / 55% business at entry, shifting to 35% technical / 65% business by year 3.",
  want: [
    "SQL + Python + dashboards — hands on data",
    "Present findings to managers and teams",
    "Translate business questions into analysis",
    "Influence decisions with evidence",
    "Work with technical teams, not as one of them",
  ],
};

export const marketForces = [
  {
    id: "f1",
    title: "Force 1 — Professionalised vs democratised",
    body: "Germany’s market splits into two tracks (PwC AI Jobs Barometer 2026). Professionalised roles — AI removes routine work; human judgment, domain expertise, and communication become more valuable — grow faster with higher wage growth. Democratised roles (basic reporting, simple dashboards) face wage pressure. I want professionalised roles: Business Data Analyst → Decision Scientist / Analytics Translator.",
    sourceNote: "Links: PwC AI Jobs Barometer (Global + Germany)",
  },
  {
    id: "f2",
    title: "Force 2 — Germany hires AI users, not AI builders (~8:1)",
    body: "In Germany 2025, roughly ~109,400 job ads were for roles that use AI in business processes vs ~15,400 for AI developer/builder roles. Companies need people who apply AI to logistics, retail, and finance — not people who invent new architectures.",
    sourceNote: "Links: PwC AI Jobs Barometer (Germany)",
  },
  {
    id: "f3",
    title: "Force 3 — The translation gap",
    body: "McKinsey estimated large demand for Analytics Translators globally. KPMG 2026: full AI integration in German firms remains rare — the bottleneck is people who connect data to decisions. SAP 2026: most German firms still get low-quality AI outputs — someone must validate, explain, and fix before leadership trusts it.",
    sourceNote: "Links: McKinsey · KPMG · SAP Value of AI Germany",
  },
];

export const rolesISkip = [
  {
    role: "Data Scientist",
    why: "70% modelling / 30% business. Notebooks, not weekly stakeholder ownership. Junior DE market is crowded.",
    when: "Only if a posting is explicitly “Applied DS with stakeholder work” (rare at entry).",
  },
  {
    role: "ML / AI Engineer",
    why: "Builds models and pipelines; minimal presentation. Pure engineering.",
    when: "Never as primary — my DevOps is a tool, not the career.",
  },
  {
    role: "Data Engineer",
    why: "Owns infrastructure (Kafka, Airflow, Spark). Almost zero business interaction.",
    when: "Only the “lite” version inside Analytics Engineer.",
  },
  {
    role: "Pure Business Analyst (no data)",
    why: "Requirements docs, no SQL — removes the data work I want.",
    when: "Avoid unless “IT Business Analyst with SQL”.",
  },
  {
    role: "AI Governance / Compliance",
    why: "Important by 2028 but legal/audit-heavy, not presentation/decision-focused.",
    when: "Year 3+ add-on skill, not entry role.",
  },
];

export const myPriorities: MyPriority[] = [
  {
    rank: 1,
    title: "Data / Business Analyst",
    entryLevel: "best",
    entryLabel: "Best entry",
    growsTo: "Decision Scientist → Analytics Translator",
    fit: "★★★ Core path",
    note: "Data + present + decide — my main plan.",
  },
  {
    rank: 5,
    title: "Data & BI Analyst",
    entryLevel: "strong",
    entryLabel: "Strong entry",
    growsTo: "Senior BI / metric owner → Business Data Analyst ladder",
    fit: "★★★ Same ladder",
    note: "Same path as 01, more dashboard-heavy.",
  },
  {
    rank: 3,
    title: "AI & Analytics Engineer",
    entryLevel: "possible",
    entryLabel: "Entry if hybrid",
    growsTo: "Hybrid AE + domain → Decision Scientist",
    fit: "★★★ If business-facing",
    note: "Keep stakeholder work — not pure pipeline.",
  },
  {
    rank: 6,
    title: "AI & Digital Consultant",
    entryLevel: "hard",
    entryLabel: "Hard at entry",
    growsTo: "Analytics Translator → Senior Consultant",
    fit: "★★★ Destination",
    note: "Needs 1–2 yrs proof from 01 / 03 / 05 first.",
  },
  {
    rank: 4,
    title: "Data Engineering",
    entryLevel: "skip",
    entryLabel: "Not primary",
    growsTo: "Platform Lead / Architect (if forced)",
    fit: "★ Too infra",
    note: "Skip as primary — little presenting.",
  },
  {
    rank: 2,
    title: "Full Stack Developer",
    entryLevel: "possible",
    entryLabel: "Possible fallback",
    growsTo: "Tech Lead / EM",
    fit: "★★ Wrong direction",
    note: "I have the background — not the goal.",
  },
  {
    rank: 7,
    title: "Front & Backend Developer",
    entryLevel: "possible",
    entryLabel: "Possible fallback",
    growsTo: "Same as full stack",
    fit: "★ Engineering track",
    note: "Same as 02 — not Data + Business.",
  },
];

export const targetRoles: TargetRole[] = [
  {
    id: "a",
    slug: "business-data-analyst",
    code: "A",
    title: "Business Data Analyst",
    badge: "Best entry · 2027–28",
    tagline: "From SQL to a 15-minute decision meeting",
    techBusiness: "~45% tech / 55% business",
    whatItIs:
      "I own the question “what does the data say about this business problem?” — from SQL to Power BI to a short presentation for a logistics manager or retail buyer.",
    dayToDay:
      "Stakeholder meetings → define KPIs → SQL/Python analysis → dashboard → present recommendations → iterate.",
    tools: "SQL, Python, Power BI/Tableau, Excel, sometimes dbt",
    whoYouTalkTo:
      "Operations managers, product leads, marketing, finance — not only other developers.",
    decisions:
      "Stock levels, route changes, pricing tests, delay root causes, customer segments.",
    growth2027_29:
      "AI automates basic reporting → junior chart-makers get squeezed. Analysts who define metrics, run experiments, and present grow on the professionalised track (PwC wage premium). Emerging title: AI Business Analyst — same role + evaluating AI outputs.",
    salary: [
      { level: "Junior / entry (2026 → my 2028)", range: "€41.8–52.8k → target €48–55k" },
      { level: "Mid 3–5 yrs", range: "€58–71.7k → target €62–72k" },
      { level: "Senior 5+", range: "€72.5k+ → target €75–85k" },
    ],
    mustHave: [
      "SQL (expert for mid)",
      "Python for analysis (Pandas)",
      "Power BI or Tableau",
      "Statistics basics",
      "Present insights clearly",
      "MSc or BSc + projects",
    ],
    niceToHave: [
      "dbt basics",
      "A/B testing",
      "Cloud warehouse (Snowflake/Azure)",
      "Domain knowledge (logistics/retail)",
      "German B2 (C1 for banking/industrial)",
      "Git, reproducible analysis",
    ],
    sectorFit: [
      { sector: "Logistics", fit: "95%", companies: "DHL, DB, ORSOFT", example: "Why are delays clustering on Route X?" },
      { sector: "Retail", fit: "90%", companies: "Spread Group, REWE, Zalando", example: "Which category to restock this week?" },
      { sector: "Consulting", fit: "85%", companies: "Capgemini, Accenture", example: "Client dashboard + workshop" },
      { sector: "Industrial", fit: "75%", companies: "BMW Leipzig", example: "Production KPI reporting" },
      { sector: "Banking", fit: "60%", companies: "N26", example: "Higher German bar" },
      { sector: "Energy", fit: "65%", companies: "E.ON", example: "More domain-heavy" },
    ],
    whyItSuitsMe: [
      "ICE delay project = this role’s output (forecast → insight → recommendation)",
      "Agile leadership = stakeholder management proof",
      "Full-stack background = I can ship dashboards without waiting",
      "I want to present — this role needs it weekly",
    ],
    gapsOrRisk:
      "Gap I must close: Power BI depth, 2–3 business case studies as problem → data → decision, German B2.",
    track: "entry",
  },
  {
    id: "b",
    slug: "bi-analyst",
    code: "B",
    title: "BI Analyst",
    badge: "Strong entry alternative",
    tagline: "Trusted numbers the COO and Finance both believe",
    techBusiness: "~40% tech / 60% business",
    whatItIs:
      "I make reporting trustworthy — semantic models, dashboards, and metric definitions so ops reviews run on one truth.",
    dayToDay:
      "Define KPIs with business → build semantic models → dashboards → train users → present in ops reviews.",
    tools: "Power BI / DAX, Excel, SQL, metric dictionaries",
    whoYouTalkTo: "COO office, controlling, ops leads, business users.",
    decisions: "Which KPIs are official; which dashboards drive weekly ops.",
    growth2027_29:
      "BI merges with Analytics Engineering — pure report builders decline; metric owners grow (Zalando-style data SLO thinking).",
    salary: [
      { level: "DE median 2026", range: "~€54.3k (StepStone BI Analyst)" },
      { level: "Leipzig signal", range: "~€54.9k local benchmarks" },
    ],
    mustHave: ["Power BI / Tableau", "SQL", "KPI definition", "Stakeholder training"],
    niceToHave: ["DAX depth", "Fabric / Azure", "dbt awareness"],
    sectorFit: [
      { sector: "Retail / Banking / Industrial / Consulting", fit: "82%", companies: "REWE, DHL, banks, Capgemini", example: "Ops review dashboards" },
    ],
    whyItSuitsMe: [
      "Heavy presentation and weekly ops meetings",
      "Defines what numbers mean — decision-adjacent",
      "Less coding than Business DA if I want more business time",
    ],
    gapsOrRisk:
      "Risk: becomes “dashboard factory” without decision influence. I pick companies where BI sits in ops meetings (Zalando, REWE, DHL model).",
    track: "entry",
  },
  {
    id: "c",
    slug: "analytics-engineer-hybrid",
    code: "C",
    title: "Analytics Engineer (hybrid)",
    badge: "My DevOps differentiator",
    tagline: "Pipeline + metrics + stakeholder reviews — not pure AE",
    techBusiness: "~60% tech / 40% business",
    whatItIs:
      "I own source → trusted model → dashboard: SQL, dbt, Git, tests, schedules — and I still define metrics stakeholders trust. Pure AE (80% engineering) is too technical for me long-term; hybrid is my version.",
    dayToDay:
      "dbt models → data tests → Power BI semantic layer → stakeholder metric reviews → pipeline monitoring.",
    tools: "SQL, dbt, Git, cloud warehouse, Power BI, Python",
    whoYouTalkTo: "Data platform + business metric owners.",
    decisions: "Which metrics are production-grade; what breaks trust.",
    growth2027_29:
      "Fast-growing implementation role in DACH; dbt + SQL appears in more senior analyst reqs by 2028. Hybrid data professionals are heavily hired.",
    salary: [
      { level: "Entry DE 2026", range: "~€50–60k (€4.17–5k / month gross signals)" },
      { level: "Senior", range: "€70–90k+" },
    ],
    mustHave: ["SQL", "dbt or modelling", "Git", "Cloud basics", "Translate requirements into analytics"],
    niceToHave: ["Python", "Data quality / governance", "CI/CD from DevOps"],
    sectorFit: [
      { sector: "Retail", fit: "90%", companies: "Zalando", example: "Data foundation + metrics" },
      { sector: "Consulting", fit: "88%", companies: "Capgemini client delivery", example: "Scalable analytics for DAX clients" },
      { sector: "Logistics", fit: "86%", companies: "DHL", example: "Ops data foundations" },
      { sector: "Software", fit: "84%", companies: "SAP ecosystem", example: "Trusted analytics layers" },
    ],
    whyItSuitsMe: [
      "DevOps (CI/CD, Docker, Git) is rare among analysts — direct differentiator",
      "ICE extended to scheduled pipeline + monitored dashboard = portfolio proof",
      "Still business-facing through metric definition",
    ],
    gapsOrRisk:
      "Risk: drift too technical. I keep presentation and stakeholder time in every role. Title I aim for: Analytics Engineer with business focus — not pure pipeline engineer.",
    track: "entry",
  },
  {
    id: "d",
    slug: "decision-scientist",
    code: "D",
    title: "Decision Scientist",
    badge: "2–3 year destination",
    tagline: "Sit inside the business unit and own what gets decided",
    techBusiness: "~35% tech / 65% business",
    whatItIs:
      "I sit in a business unit (revenue, logistics, pricing) and own which problems get measured, how experiments run, and what leadership should do. More strategic than analyst; less modelling than data scientist.",
    dayToDay:
      "Highest-impact problem → measurement design → analysis/experiment → present to area lead → influence product/ops decision.",
    tools: "SQL, Python, BI tools, experiment design",
    whoYouTalkTo: "Area leads, product, ops directors.",
    decisions: "What to measure, what to ship, what to stop.",
    growth2027_29:
      "Growing hybrid title in e-commerce and logistics (REWE, Otto, Zalando “decision” framing). JOBfellow DE: DS transforms toward Decision Scientist — domain becomes currency.",
    salary: [
      { level: "3–5 yrs (DE-adjusted)", range: "~€65–85k" },
      { level: "Lead", range: "€85–100k+" },
    ],
    mustHave: ["SQL + Python", "BI", "Balance depth with impact", "Influence stakeholders"],
    niceToHave: ["A/B / causal basics", "Domain ownership", "German B2+"],
    sectorFit: [
      { sector: "Logistics / Retail / Consulting", fit: "92%", companies: "DHL, DB, Spread, REWE, Zalando", example: "Ops or demand decisions" },
    ],
    whyItSuitsMe: [
      "I want to be in the decision — this role is the decision interface",
      "Weekly stakeholder influence matches how I like to work",
      "I handle data without becoming the model monk",
    ],
    gapsOrRisk:
      "Not direct entry. Path: Business Data Analyst (1–2 yrs) → Decision Scientist (yr 3+).",
    track: "destination",
  },
  {
    id: "e",
    slug: "analytics-translator",
    code: "E",
    title: "Analytics Translator",
    badge: "3–4 year ceiling",
    tagline: "Prioritise AI/data bets and make ops actually adopt them",
    techBusiness: "~25% tech / 75% business",
    whatItIs:
      "I define which business problems deserve AI/data investment, translate them for engineers/scientists, and ensure solutions get adopted.",
    dayToDay:
      "(1) Fill/prioritise AI project pipeline (2) Drive adoption (3) Communicate benefits to business users.",
    tools: "Business case literacy, light SQL, storytelling, governance awareness",
    whoYouTalkTo: "Frontline managers + data teams + leadership.",
    decisions: "Which AI projects get funded and adopted.",
    growth2027_29:
      "McKinsey-scale demand narrative; Germany’s pilot-to-production gap makes this acute by 2028.",
    salary: [
      { level: "Mid–senior", range: "€70–95k+" },
      { level: "Consulting premium", range: "Higher with travel" },
    ],
    mustHave: ["Domain credibility", "Communication", "Prioritisation", "Adoption focus"],
    niceToHave: ["EU AI Act literacy", "German C1", "Consulting delivery"],
    sectorFit: [
      { sector: "All six sectors", fit: "80%", companies: "Consulting + industry clients", example: "Bridge pilot to production" },
    ],
    whyItSuitsMe: [
      "Maximum presentation and decision involvement",
      "Agile leadership + engineering background = credible with both sides",
    ],
    gapsOrRisk:
      "Not entry — needs 2–3 yrs domain credibility. Companies will not hire a fresher as Translator.",
    track: "destination",
  },
  {
    id: "f",
    slug: "process-intelligence-consultant",
    code: "F",
    title: "Process Intelligence / Celonis Consultant",
    badge: "Wildcard · Data + Business",
    tagline: "Find bottlenecks in ERP/process data — almost no ML",
    techBusiness: "~35% tech / 65% business",
    whatItIs:
      "I analyse process data (ERP logs, SAP events) to find bottlenecks, inefficiencies, and automation opportunities. Pure Data + Business.",
    dayToDay:
      "~60% methodological (analysis, KPIs), ~30% technical (SQL, PQL), ~10% customer/org (EXXETA-style split).",
    tools: "Celonis, SQL, PQL, Power BI, SAP awareness",
    whoYouTalkTo: "Process owners, C-level sponsors, consulting clients.",
    decisions: "Where to fix process waste; what to automate.",
    growth2027_29:
      "Celonis HQ Munich — Germany is a global centre; DAX process-mining programmes continue.",
    salary: [
      { level: "Consultant entry", range: "~€55–65k" },
      { level: "Experienced", range: "~€72–88k" },
    ],
    mustHave: ["SQL", "Process thinking", "Client communication"],
    niceToHave: ["Celonis / PQL", "SAP literacy", "German B2+"],
    sectorFit: [
      { sector: "Consulting / Logistics / Industrial / Retail", fit: "85%", companies: "Celonis ecosystem, Siemens, BMW, REWE", example: "Order-to-cash, logistics processes" },
    ],
    whyItSuitsMe: [
      "Maximum business exposure — I map how companies work",
      "SQL-heavy, not ML-heavy",
      "Presentation to process owners; Celonis + SAP awareness = consulting entry",
    ],
    gapsOrRisk: "Need Celonis literacy and client-facing German over time.",
    track: "wildcard",
  },
  {
    id: "g",
    slug: "ai-business-analyst",
    code: "G",
    title: "AI Business Analyst / Product Analyst",
    badge: "Emerging · watch",
    tagline: "Analyst who judges whether AI outputs are good enough for ops",
    techBusiness: "~30% tech / 70% business",
    whatItIs:
      "Traditional analyst + ability to evaluate AI tool outputs, design workflows, and assess whether an AI feature should ship. Not AI Product Manager — too strategy-heavy for my path.",
    dayToDay:
      "Business questions + AI output evaluation + go/no-go for ops use.",
    tools: "SQL, BI, prompt/workflow literacy, EU AI Act basics",
    whoYouTalkTo: "Product, ops, risk/compliance light-touch.",
    decisions: "Ship / don’t ship AI features for business use.",
    growth2027_29:
      "AI language floods product/analyst postings; salary premium signals ~15–20% over traditional analyst in some analyses.",
    salary: [
      { level: "Premium over classic analyst", range: "+15–20% signals (market analyses)" },
    ],
    mustHave: ["Classic analyst stack", "AI literacy", "Evaluation mindset"],
    niceToHave: ["EU AI Act", "Agentic commerce awareness"],
    sectorFit: [
      { sector: "Retail / Software / Consulting", fit: "78%", companies: "REWE, SAP Joule, consultancies", example: "Evaluate AI for ops decisions" },
    ],
    whyItSuitsMe: [
      "Fits EU AI Act literacy I plan for Sem 3",
      "Keeps me in business decisions, not model research",
    ],
    gapsOrRisk: "Emerging title — I watch postings and keep classic DA proof strong.",
    track: "emerging",
  },
  {
    id: "h",
    slug: "ai-digital-consultant",
    code: "H",
    title: "AI & Digital Consultant",
    badge: "Consulting path · after proof",
    tagline: "Client-facing AI and digital delivery — after I have case proof",
    techBusiness: "~30% tech / 70% business",
    whatItIs:
      "I help clients choose, implement, and adopt data/AI solutions — workshops, roadmaps, and delivery support. This is my priority #06: strong long-term, but not my first job title. I enter via Business DA / hybrid AE / BI first, then move client-facing.",
    dayToDay:
      "Client workshops → problem framing → analysis support → adoption plans → present to sponsors.",
    tools: "SQL/BI literacy, storytelling, SAP/cloud awareness, process thinking",
    whoYouTalkTo: "Client sponsors, delivery leads, business SMEs.",
    decisions: "Which digital/AI bets a client funds and how adoption is measured.",
    growth2027_29:
      "Pilot-to-production and EU AI Act create consulting demand for people who bridge data and business. Capgemini, Accenture, Celonis-style paths stay strong in DACH.",
    salary: [
      { level: "After 1–2 yrs proof", range: "Often €55–70k+ depending on firm" },
      { level: "Mid consulting", range: "€70–95k+ with travel premium" },
    ],
    mustHave: [
      "1–2 yrs analyst / AE proof",
      "Case studies in business language",
      "Presentation under pressure",
      "German B2+ over time",
    ],
    niceToHave: ["Celonis / process mining", "SAP literacy", "EU AI Act"],
    sectorFit: [
      {
        sector: "Software / Consulting",
        fit: "95%",
        companies: "Capgemini, Accenture, Celonis, SAP partners",
        example: "Client AI/data programmes",
      },
      {
        sector: "Logistics / Industrial",
        fit: "80%",
        companies: "SI partners on DAX clients",
        example: "Ops digitalisation programmes",
      },
      {
        sector: "Retail",
        fit: "75%",
        companies: "Retail digital consultancies",
        example: "Demand and commerce AI",
      },
    ],
    whyItSuitsMe: [
      "Matches my priority for AI & Digital Consultant as a growth path",
      "Uses presenting + domain + enough tech to stay credible",
      "Natural bridge toward Analytics Translator",
    ],
    gapsOrRisk:
      "Hard at true entry — I do not chase this title first. I build proof in analyst / AE / BI roles, then move here.",
    track: "destination",
  },
];

export const sectorFitScores = [
  {
    sector: "Logistics",
    fit: 95,
    entry: "Business Data Analyst",
    mid: "Hybrid AE",
    destination: "Decision Scientist",
    companies: "DHL, DB, ORSOFT, MAIA",
  },
  {
    sector: "Retail",
    fit: 90,
    entry: "Business Data Analyst",
    mid: "Product Analyst",
    destination: "Decision Scientist",
    companies: "Spread Group, REWE, Zalando",
  },
  {
    sector: "Consulting",
    fit: 85,
    entry: "Analytics Consultant",
    mid: "AE / Celonis",
    destination: "AI Digital Consultant",
    companies: "SAP, Capgemini, Celonis, Accenture",
  },
  {
    sector: "Industrial",
    fit: 75,
    entry: "BI Analyst",
    mid: "Business DA",
    destination: "Decision Scientist",
    companies: "BMW Leipzig, Porsche, KnowFab",
  },
  {
    sector: "Energy",
    fit: 65,
    entry: "Data Analyst",
    mid: "Business DA",
    destination: "Decision Scientist",
    companies: "E.ON, EnBW",
  },
  {
    sector: "Banking",
    fit: 60,
    entry: "Data Analyst",
    mid: "AI Business Analyst",
    destination: "Translator",
    companies: "N26, Trade Republic",
  },
];

export const roleDemandScores = [
  { role: "Business DA", demand2027: 88, demand2029: 90, wageLift: 20 },
  { role: "BI Analyst", demand2027: 82, demand2029: 68, wageLift: 8 },
  { role: "Hybrid AE", demand2027: 92, demand2029: 94, wageLift: 25 },
  { role: "Decision Sci", demand2027: 70, demand2029: 88, wageLift: 30 },
  { role: "Translator", demand2027: 72, demand2029: 95, wageLift: 35 },
  { role: "Celonis / PI", demand2027: 80, demand2029: 82, wageLift: 22 },
  { role: "AI Bus. Analyst", demand2027: 65, demand2029: 85, wageLift: 18 },
  { role: "AI Dig. Consult", demand2027: 60, demand2029: 86, wageLift: 28 },
];

export const careerLadder = [
  {
    when: "2026 · Sem 2",
    focus: "Build",
    detail:
      "Power BI, dbt basics, case studies, extend ICE project into dashboard + write-up.",
  },
  {
    when: "2027 · Sem 3–4",
    focus: "First role",
    detail:
      "Business Data Analyst OR Hybrid Analytics Engineer. Companies: DHL, DB, Spread Group, SAP, Capgemini, REWE Digital. Target: Werkstudent €1,200–1,800/mo or junior €42–52k.",
  },
  {
    when: "2028 · Post-MSc",
    focus: "Solidify",
    detail:
      "Own a domain (logistics ops OR retail demand). Salary target €55–65k.",
  },
  {
    when: "2029 · Year 3",
    focus: "Destination",
    detail:
      "Decision Scientist OR Analytics Translator. Lead experiments, influence area decisions. Target €65–80k.",
  },
  {
    when: "2030+",
    focus: "Senior",
    detail:
      "Senior Decision Scientist / Lead Analytics Translator / AI Business Analyst Lead. Target €80–95k+.",
  },
];

export const consultingAltPath = [
  "Business Data Analyst at Capgemini / Celonis (2027–28)",
  "Process Intelligence Consultant (2028–29) — client-facing, cross-sector",
  "Analytics Translator at industrial / logistics client (2029+)",
];

export const sectorRoleMatrix = [
  {
    sector: "Logistics ⭐",
    entry: "Business Data Analyst",
    mid: "Analytics Engineer (hybrid)",
    destination: "Decision Scientist (ops)",
    companies: "DHL, DB, ORSOFT, MAIA",
  },
  {
    sector: "Retail ⭐",
    entry: "Business Data Analyst",
    mid: "Product Analyst",
    destination: "Decision Scientist (demand/pricing)",
    companies: "Spread Group, REWE, Zalando",
  },
  {
    sector: "Software / Consulting",
    entry: "Analytics Consultant (Werkstudent)",
    mid: "Analytics Engineer / Celonis Consultant",
    destination: "Analytics Translator",
    companies: "SAP, Capgemini, Celonis, Accenture",
  },
  {
    sector: "Industrial",
    entry: "BI Analyst (production)",
    mid: "Business Data Analyst",
    destination: "Decision Scientist (quality/supply)",
    companies: "BMW Leipzig, Porsche, KnowFab",
  },
  {
    sector: "Banking",
    entry: "Data Analyst (reporting)",
    mid: "AI Business Analyst",
    destination: "Analytics Translator (governance+)",
    companies: "N26, Trade Republic",
  },
  {
    sector: "Energy",
    entry: "Data Analyst (forecasting)",
    mid: "Business Data Analyst",
    destination: "Decision Scientist (grid/customer)",
    companies: "E.ON, EnBW",
  },
];

export const spectrumZones = [
  { label: "Data Engineer", side: "tech" as const },
  { label: "ML Engineer", side: "tech" as const },
  { label: "Data Scientist", side: "tech" as const },
  { label: "Analytics Engineer (hybrid)", side: "zone" as const },
  { label: "BI Analyst", side: "zone" as const },
  { label: "AI Business Analyst", side: "zone" as const },
  { label: "Process Intel. Consultant", side: "zone" as const },
  { label: "Business Data Analyst", side: "business" as const },
  { label: "Decision Scientist ★", side: "business" as const },
  { label: "Analytics Translator ★", side: "business" as const },
];

export const finalTargets = {
  primary:
    "Business Data Analyst (logistics or retail). Alternative titles: Data Analyst — BI, Product Analyst, Supply Chain Analyst.",
  secondary:
    "Analytics Engineer (hybrid) — pipeline + metrics + stakeholders. NOT pure AE.",
  destination:
    "Decision Scientist in logistics, retail, or consulting. Alternative: Analytics Translator on the consulting path.",
  wildcard:
    "Process Intelligence Consultant (Celonis) — Data + Business, Munich ecosystem.",
  notPursuing:
    "Data Scientist · ML Engineer · Data Engineer · Pure Business Analyst (no data).",
};

export const skillTiers = [
  {
    tier: "Tier 1 — Non-negotiable",
    rows: [
      { skill: "SQL", why: "#1 in every data ad", status: "Have — push to expert" },
      { skill: "Python (Pandas)", why: "Analysis, not engineering", status: "Have" },
      { skill: "Power BI or Tableau", why: "Presentation layer", status: "Building Sem 2" },
      { skill: "Communication / storytelling", why: "In 90%+ of ads", status: "Agile leadership proof" },
      { skill: "M.Sc. / degree + projects", why: "DE filter", status: "M.Sc. Big Data & AI" },
      { skill: "English C1", why: "EN-friendly companies", status: "Have" },
      { skill: "2–3 portfolio projects", why: "Replaces junior years", status: "ICE, ForestGuard, Toolkit" },
    ],
  },
  {
    tier: "Tier 2 — Differentiator",
    rows: [
      { skill: "Git + reproducible analysis", why: "Data as software", status: "DevOps background" },
      { skill: "dbt / modelling", why: "AE standard by 2028", status: "Sem 2–3" },
      { skill: "Azure basics", why: "#1 DE enterprise cloud", status: "Sem 2" },
      { skill: "Domain project (logistics)", why: "ICE delay proof", status: "Strongest asset" },
      { skill: "A/B testing", why: "Decision Scientist", status: "Sem 3" },
      { skill: "German B2", why: "Unlocks more postings", status: "In progress" },
    ],
  },
  {
    tier: "Tier 3 — Destination (2028–29)",
    rows: [
      { skill: "Causal inference basics", why: "Why did X cause Y?", status: "By 2028" },
      { skill: "EU AI Act literacy", why: "AI Business Analyst", status: "By 2027" },
      { skill: "Process mining / Celonis", why: "Consulting path", status: "By 2028" },
      { skill: "German C1", why: "Client-facing DE", status: "By 2029" },
      { skill: "Director-level stakeholders", why: "Analytics Translator", status: "By 2029" },
    ],
  },
];

export const assetRoleMap = [
  {
    asset: "ICE Train Delay Prediction",
    businessDa: "★★★",
    analyticsEng: "★★★",
    decisionSci: "★★★",
    translator: "★★",
  },
  {
    asset: "DevOps (CI/CD, Docker, Git)",
    businessDa: "★★",
    analyticsEng: "★★★",
    decisionSci: "★★",
    translator: "★★",
  },
  {
    asset: "Full-stack (React, .NET)",
    businessDa: "★★",
    analyticsEng: "★★",
    decisionSci: "★",
    translator: "★",
  },
  {
    asset: "Agile / Scrum leadership",
    businessDa: "★★★",
    analyticsEng: "★★",
    decisionSci: "★★★",
    translator: "★★★",
  },
  {
    asset: "SQL + Python",
    businessDa: "★★★",
    analyticsEng: "★★★",
    decisionSci: "★★★",
    translator: "★★",
  },
  {
    asset: "M.Sc. Big Data & AI",
    businessDa: "★★★",
    analyticsEng: "★★★",
    decisionSci: "★★★",
    translator: "★★★",
  },
  {
    asset: "Love presenting",
    businessDa: "★★★",
    analyticsEng: "★★",
    decisionSci: "★★★",
    translator: "★★★",
  },
];

export const next12Months = [
  {
    deliverable: "ICE → live dashboard + write-up (problem → data → decision)",
    proves: "Business Data Analyst",
    byWhen: "Sem 2",
  },
  {
    deliverable: "Power BI dashboard (retail or logistics KPIs)",
    proves: "BI Analyst / Business DA",
    byWhen: "Sem 2",
  },
  {
    deliverable: "3 written case studies (business language)",
    proves: "Decision Scientist / Translator",
    byWhen: "Sem 2–3",
  },
  {
    deliverable: "dbt mini-project with tests + docs",
    proves: "Analytics Engineer (hybrid)",
    byWhen: "Sem 3",
  },
  {
    deliverable: "A/B test design document (even simulated)",
    proves: "Decision Scientist",
    byWhen: "Sem 3",
  },
  {
    deliverable: "EU AI Act 1-pager applied to logistics",
    proves: "AI Business Analyst",
    byWhen: "Sem 3",
  },
  {
    deliverable: "Thesis with company (DB, DHL, Spread, ScaDS.AI)",
    proves: "All roles — strongest DE hiring signal",
    byWhen: "2027–28",
  },
];

export const roleGrowthForecast = [
  {
    role: "Business Data Analyst",
    y2027: "High — stable",
    y2029: "High — AI-augmented analyst",
    wage: "+15–25% with AI skills",
  },
  {
    role: "BI Analyst",
    y2027: "High",
    y2029: "Medium — merges with AE",
    wage: "Flat unless metric owner",
  },
  {
    role: "Analytics Engineer (hybrid)",
    y2027: "Very high",
    y2029: "Very high",
    wage: "+20–30%",
  },
  {
    role: "Decision Scientist",
    y2027: "Growing (Berlin/Munich)",
    y2029: "High",
    wage: "+25–35%",
  },
  {
    role: "Analytics Translator",
    y2027: "Low supply / high demand",
    y2029: "Very high",
    wage: "+30–40%",
  },
  {
    role: "Process Intel. Consultant",
    y2027: "High in DACH",
    y2029: "High",
    wage: "+20–25%",
  },
  {
    role: "AI Business Analyst",
    y2027: "Emerging",
    y2029: "High",
    wage: "+15–20% premium",
  },
  {
    role: "Data Scientist (pure)",
    y2027: "Oversupplied junior",
    y2029: "Flat at entry",
    wage: "Flat",
  },
];

export const rolePhaseResources: RoleResource[] = [
  { name: "McKinsey — Analytics Translator", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/analytics-translator", useFor: "Role definition, demand" },
  { name: "McKinsey — Train Analytics Translators", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/how-to-train-your-analytics-translators", useFor: "Career path, skills" },
  { name: "PwC AI Jobs Barometer 2026 (Global)", url: "https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html", useFor: "Professionalised vs democratised" },
  { name: "PwC AI Jobs Barometer (Germany)", url: "https://www.pwc.de/de/workforce-transformation/ai-jobs-barometer.html", useFor: "DE wage premiums, user vs builder" },
  { name: "WEF Future of Jobs 2025", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/", useFor: "Macro role growth" },
  { name: "JOBfellow — DS → Decision Scientist", url: "https://jobfellow.de/index.php/zukunftsprofil/data-scientist", useFor: "DE role evolution" },
  { name: "Vinted — Lead Decision Scientist Berlin", url: "https://careers.vinted.com/jobs/4940418101", useFor: "Real 2026 requirements" },
  { name: "Kent MSBA — Analytics Translator cluster", url: "https://www.kent.edu/business/msba-blog/AI-tools-for-analysts", useFor: "Emerging titles + ranges" },
  { name: "Codebasics — Hybrid AE 2026", url: "https://codebasics.io/blog/data-analyst-data-engineer-why-the-hybrid-role-is-the-most-hired-skill-set-in-2026", useFor: "AE vs analyst" },
  { name: "KORE1 — Analytics Engineer vs Analyst", url: "https://www.kore1.com/analytics-engineer-vs-analyst/", useFor: "Hiring differences" },
  { name: "Coursera — Business Data Analyst", url: "https://www.coursera.org/articles/business-data-analyst", useFor: "Role definition" },
  { name: "StepStone — BI Analyst salary DE", url: "https://www.stepstone.de/gehalt/BI-Analyst.html", useFor: "Salary median" },
  { name: "StepStone — Junior Data Analyst", url: "https://www.stepstone.de/gehalt/Junior-Data-Analyst.html", useFor: "Entry salary" },
  { name: "kununu — Data Analyst salary DE", url: "https://www.kununu.com/de/gehalt/data-analyst-4689", useFor: "Growth curve" },
  { name: "brutto-netto — Analytics Engineer", url: "https://www.brutto-netto-gehaltsrechner.de/berufe/analytics-engineer", useFor: "AE salary" },
  { name: "EXXETA — Celonis Data Analyst", url: "https://en.devjobs.de/job/6ee9d5377fb35a1e143a3a587ead33f2", useFor: "60/30/10 work split" },
  { name: "Dexity — AI PM skills 2026", url: "https://dexity.com/intel/ai-product-management-in-2026-the-skills-that-actually-get-you-hired", useFor: "AI Business Analyst wave" },
  { name: "SAP Value of AI Germany 2026", url: "https://news.sap.com/germany/files/2026/07/08/SAP-Value-of-AI-2026-Germany-1.pdf", useFor: "Quality + governance gap" },
  { name: "Xebia — Analytics Translator", url: "https://xebia.com/articles/analytics-translator-the-must-have-role/", useFor: "Three jobs translators do" },
  { name: "Entgeltatlas (official BA)", url: "https://web.arbeitsagentur.de/entgeltatlas/", useFor: "Neutral salary check" },
];

export function getTargetRole(slug: string) {
  return targetRoles.find((r) => r.slug === slug);
}
