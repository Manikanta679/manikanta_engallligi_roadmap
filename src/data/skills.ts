export interface SkillItem {
  id: string;
  slug: string;
  tier: "crucial" | "important" | "destination";
  title: string;
  subtitle: string;
  cardLine: string;
  companiesExpect: string[];
  technical: string;
  business: string;
  depthBy: string;
}

export const skillTierGuide = [
  {
    id: "crucial",
    title: "Crucial",
    meaning: "I must have these before 2028 entry applications.",
    action: "Before 2028",
  },
  {
    id: "important",
    title: "Important",
    meaning: "Differentiators that speed hiring and promotion.",
    action: "2027–2029",
  },
  {
    id: "sector",
    title: "Sector",
    meaning: "I add these based on the sector I land in.",
    action: "After sector lock",
  },
  {
    id: "destination",
    title: "Destination",
    meaning: "For Decision Scientist / Analytics Translator by 2030.",
    action: "2028–2030",
  },
];

export const crucialSkills: SkillItem[] = [
  {
    id: "sql",
    slug: "sql",
    tier: "crucial",
    title: "SQL",
    subtitle: "Expert working level",
    cardLine:
      "Required wherever Business / Data Analyst and hybrid Analytics Engineer roles own KPI extraction without a dedicated engineer.",
    companiesExpect: [
      "Independent querying of warehouses, ERP extracts, and operational databases — multi-table joins, CTEs, window functions, and correct date/NULL handling.",
      "KPI definitions implemented in SQL so Marketing, Finance, and Ops can share one calculation path.",
      "Ability to reconcile conflicting reports: find the broken join, grain mismatch, or filter that caused the gap.",
      "Documented, reviewable query logic (comments, named CTEs, handover-ready) for audit and teammate reuse.",
      "Basic performance awareness — avoid unnecessary full scans when datasets grow (retail, logistics, SAP extracts).",
    ],
    technical:
      "SQL is required as the access layer to enterprise data: warehouses, SAP extracts, and operational systems. Without advanced SQL, analyst roles cannot independently retrieve, join, and validate data at the grain the business needs. It underpins dashboards, forecasts, quality checks, and dbt-style modelling — every later skill assumes this foundation.",
    business:
      "SQL is required wherever decisions depend on trusted numbers — delay rates, OTIF, stock, conversion, revenue. Companies use it so analysts can answer stakeholder questions in hours, not tickets. It is also the skill that closes metric disagreements between departments, which is central to data-quality and pilot-to-production problems across logistics, retail, consulting, and industrial.",
    depthBy: "2028",
  },
  {
    id: "python",
    slug: "python-analysis",
    tier: "crucial",
    title: "Python for data analysis",
    subtitle: "Analysis — not software engineering",
    cardLine:
      "Required when cleaning, exploration, forecasting, or experiment analysis goes beyond what SQL and Excel can carry alone.",
    companiesExpect: [
      "Pandas-level cleaning and reshaping of messy operational or partner data before any model or dashboard.",
      "Exploratory analysis with clear summaries — distributions, correlations, segment cuts — that feed a business narrative.",
      "Applied modelling for analyst roles: regression, classification, or time-series with transparent metrics (MAE, RMSE, accuracy) — not research ML stacks.",
      "Reproducible scripts or notebooks that a teammate can rerun; versioned alongside Git.",
      "Clear boundary: analysis automation is expected; production web engineering or deep-learning platforms are not.",
    ],
    technical:
      "Python for analysis is required when SQL alone cannot cover cleaning pipelines, statistical exploration, or forecasting workflows. German analyst and hybrid AE postings expect Pandas/NumPy literacy and simple applied models. Deep learning frameworks and MLOps platforms are outside this requirement for Business Data Analyst paths.",
    business:
      "Python is required when the business needs insight from irregular files, forecasts, or experiment readouts that must become a recommendation. Logistics delay analysis, retail demand signals, and A/B interpretation all depend on this layer between raw data and the decision meeting.",
    depthBy: "2028",
  },
  {
    id: "powerbi",
    slug: "power-bi",
    tier: "crucial",
    title: "Power BI",
    subtitle: "Primary BI tool in German enterprise",
    cardLine:
      "Required as the presentation and self-serve reporting layer in most German enterprise analyst roles.",
    companiesExpect: [
      "End-to-end dashboard delivery: connect, model (star schema), DAX measures, visuals, filters, drill-through, publish.",
      "One governed definition per KPI so ops reviews do not argue about “which revenue.”",
      "Scheduled refresh and workspace hygiene — dashboards that stay current without manual rebuilds.",
      "Live walkthrough for non-technical managers: every tile explained in business language.",
      "Stack fit: Azure + Power BI dominates DHL, DB, REWE, BMW, and SAP-client environments; Tableau appears mainly in select Berlin/tech contexts.",
    ],
    technical:
      "Power BI is required as the standard BI surface in German enterprise stacks — especially Azure-centric organisations. Modelling and DAX are the technical bar that separates juniors who only drop charts from analysts who own a semantic layer stakeholders can trust.",
    business:
      "Power BI is required wherever decisions happen in recurring ops, finance, or logistics reviews. Companies expect analysts to make KPIs visible and discussable in the room — delay clusters, replenishment, production KPIs — not only to email static exports.",
    depthBy: "2028",
  },
  {
    id: "storytelling",
    slug: "data-storytelling",
    tier: "crucial",
    title: "Business communication & storytelling",
    subtitle: "Problem → evidence → decision",
    cardLine:
      "Required in nearly every analyst posting that mentions stakeholders, recommendations, or presentations.",
    companiesExpect: [
      "Structured narrative: business problem → method → finding → recommended action → expected impact.",
      "Short stakeholder presentations (~10–15 minutes) with a clear ask or decision.",
      "Written artefacts (slides, Confluence, email brief) a director can forward without rewriting.",
      "Ability to reframe a poorly posed question without jargon or condescension.",
      "Portfolio proof: case studies that show decision support, not only model accuracy.",
    ],
    technical:
      "Storytelling is required as the packaging layer around analysis: chart selection, annotation, and reproducible annexes. Companies screen for people who can attach evidence to a claim without drowning the audience in method detail.",
    business:
      "Storytelling is required because analysis only creates value when managers act. Logistics, retail, and consulting roles hire for recommendation quality — this skill is what separates Business Data Analyst / Decision Scientist paths from notebook-only profiles.",
    depthBy: "2028",
  },
  {
    id: "stats",
    slug: "applied-statistics",
    tier: "crucial",
    title: "Statistics & analytical thinking",
    subtitle: "Applied — not theoretical",
    cardLine:
      "Required wherever companies need analysts to judge signal vs noise before recommending change.",
    companiesExpect: [
      "Correct intuition on distributions, correlation vs causation, and confidence of a trend.",
      "Ability to interpret A/B or experiment results and state limits of the sample.",
      "Root-cause thinking that does not overclaim from small or biased data.",
      "Plain-language explanation of uncertainty to non-statisticians.",
      "Depth bar: applied intermediate for analyst work — not research-level theory.",
    ],
    technical:
      "Applied statistics is required to validate forecasts, experiments, and KPI swings. Without it, pipelines and dashboards can amplify noise. Companies expect judgement on when a result is actionable versus when more data or a better design is needed.",
    business:
      "Statistics is required for trustworthy recommendations: pricing tests, route changes, campaign lifts, delay “improvements.” Leadership needs analysts who protect the business from false confidence.",
    depthBy: "2028",
  },
  {
    id: "git",
    slug: "git-reproducible",
    tier: "crucial",
    title: "Git & reproducible analysis",
    subtitle: "Professional data hygiene",
    cardLine:
      "Required as the professionalism bar for analysis code in 2027+ analyst and hybrid AE ads.",
    companiesExpect: [
      "Analysis SQL/Python/dashboard artefacts stored in a Git repository with clear structure.",
      "README and naming that allow handover without a long explanation call.",
      "Commit discipline for collaborative review — treat data work like software.",
      "Reproducibility: a colleague can regenerate outputs from the repo.",
      "Not required: owning full CI/CD platforms — that remains engineering territory.",
    ],
    technical:
      "Git is required for versioned, reviewable analysis. Hybrid Analytics Engineer and modern analyst roles expect reproducibility as a baseline, especially where dbt and shared metric layers enter the stack.",
    business:
      "Reproducibility is required for trust and auditability. When Finance or Ops challenges a number, companies need a recoverable path from question to result — not a laptop-only notebook.",
    depthBy: "2028",
  },
  {
    id: "german",
    slug: "german-b2",
    tier: "crucial",
    title: "German language",
    subtitle: "B2 entry · B2+ destination",
    cardLine:
      "Required for most logistics, industrial, Mittelstand, and client-facing consulting paths in Germany.",
    companiesExpect: [
      "B2 for meetings, tickets, and dashboard explanations in ops-heavy environments (DHL, DB, BMW-style contexts).",
      "B2 preferred or required for retail HQ and consulting client delivery; C1 path for banking and senior client work.",
      "Ability to discuss KPIs and recommendations in German without switching every sentence to English.",
      "Honest level on CV with an improvement plan if still B1 — overclaiming is screened out.",
      "English C1 remains necessary; German expands the reachable market substantially.",
    ],
    technical:
      "German is required as the working language of many enterprise tools, tickets, and documentation surfaces. Technical vocabulary for dashboards and data incidents must work in DE contexts, not only English-first startups.",
    business:
      "German is required to sit in ops and client meetings where decisions are made. Without B2, access to DHL, DB, BMW, REWE, and many consulting programmes stays limited to English-friendly niches.",
    depthBy: "2028 / 2030",
  },
];

export const importantSkills: SkillItem[] = [
  {
    id: "dbt",
    slug: "dbt",
    tier: "important",
    title: "dbt",
    subtitle: "Analytics Engineering standard",
    cardLine:
      "Required when companies want metrics defined as tested, documented SQL models — not only ad-hoc queries.",
    companiesExpect: [
      "SQL models with tests, documentation, and version control in a shared project.",
      "A metric layer that Power BI or other BI tools consume consistently.",
      "Collaboration pattern: analysts own business logic close to the warehouse.",
      "Evidence of at least one complete project by mid-level / hybrid AE tracks.",
      "Familiarity with how dbt reduces “who calculated revenue differently?” incidents.",
    ],
    technical:
      "dbt is required as the transformation and testing standard on modern analytics stacks (increasingly visible in DE senior analyst and AE ads). It sits between warehouse SQL and BI — models, tests, docs.",
    business:
      "dbt is required where organisations industrialise trusted KPIs. Retail, consulting delivery, and data-mature logistics teams use it so Finance and Ops stop arguing about definitions.",
    depthBy: "2029",
  },
  {
    id: "azure",
    slug: "azure-cloud",
    tier: "important",
    title: "Azure / cloud data basics",
    subtitle: "Consume platforms — do not build infra",
    cardLine:
      "Required to work inside German enterprise cloud data platforms — especially Azure-first clients.",
    companiesExpect: [
      "Ability to query cloud warehouses / Synapse-style sources and connect Power BI.",
      "Working understanding of refresh, access, and where data lands after loads.",
      "Awareness of Azure as the default enterprise cloud in many SAP, logistics, and industrial accounts.",
      "Optional signal: AZ-900 / DP-900; practical connection skills matter more than badge hunting.",
      "Not required: designing the full data platform as a Data Engineer.",
    ],
    technical:
      "Cloud literacy is required because enterprise analysis no longer lives only in on-prem files. Azure-first environments dominate many German employers; Snowflake awareness is a plus.",
    business:
      "Cloud basics are required to participate in programmes already running on client platforms — consulting delivery, DHL/DB-style analytics, BMW data estates — without waiting for local CSV extracts.",
    depthBy: "2029",
  },
  {
    id: "timeseries",
    slug: "time-series-forecasting",
    tier: "important",
    title: "Time-series forecasting",
    subtitle: "Delays, demand, load",
    cardLine:
      "Required in logistics, retail demand, and energy contexts where the business plans on future values.",
    companiesExpect: [
      "Forecast methods appropriate to the domain (classical and/or ML) with evaluation metrics.",
      "Business interpretation of error — what MAE/RMSE means for stock, delays, or capacity.",
      "Clear documentation of features, train/test periods, and limitations.",
      "Portfolio proof tied to a sector problem (e.g. delay or demand), not only toy datasets.",
      "Ability to recommend action: buffer, staffing, replenishment — not only a plot.",
    ],
    technical:
      "Time-series skill is required whenever historical sequences drive planning systems. Methods range from classical models to gradient-boosted approaches; evaluation discipline matters as much as algorithm choice.",
    business:
      "Forecasting is required for operational planning decisions: delay risk, demand replenishment, load. It is one of the clearest analyst contributions in logistics and retail hiring.",
    depthBy: "2028",
  },
  {
    id: "data-quality",
    slug: "data-quality-governance",
    tier: "important",
    title: "Data quality & governance",
    subtitle: "Check before you chart",
    cardLine:
      "Required wherever low-quality inputs break AI, dashboards, and cross-team trust.",
    companiesExpect: [
      "Pre-analysis quality assessment: missingness, duplicates, stale feeds, grain issues.",
      "Documented validation rules and metric ownership / definitions.",
      "Ability to stop or pause a dashboard when source trust is insufficient.",
      "Basic lineage awareness — where a number comes from and who owns it.",
      "Alignment with governance conversations that intensify under AI Act and audit pressure.",
    ],
    technical:
      "Data quality is required as the gate before modelling and BI. Companies that scale AI learn that bad inputs dominate failure modes; analysts are expected to detect and document those failures early.",
    business:
      "Quality and light governance are required to restore trust between departments and to unlock pilot-to-production. Without them, leadership ignores dashboards and AI outputs.",
    depthBy: "2029",
  },
  {
    id: "domain",
    slug: "domain-knowledge",
    tier: "important",
    title: "Domain knowledge",
    subtitle: "Industry language",
    cardLine:
      "Required to translate sector reality into KPIs — logistics, retail, industrial, consulting.",
    companiesExpect: [
      "Correct use of sector vocabulary in interviews and stakeholder meetings.",
      "KPI trees that match how the business runs (OTIF, lead time, SKU, OEE, etc.).",
      "Ability to challenge a metric that does not match operational reality.",
      "Evidence of depth in at least one priority sector, with a plan for a second.",
      "Recognition that generic analysis without domain fit fails Decision Scientist screens.",
    ],
    technical:
      "Domain knowledge is required to choose the right grain, features, and validations. Wrong domain assumptions produce technically correct but operationally useless models and dashboards.",
    business:
      "Domain knowledge is required for credibility with ops and commercial leaders. It is the currency of Decision Scientist and Analytics Translator roles.",
    depthBy: "2028",
  },
  {
    id: "abtest",
    slug: "ab-testing",
    tier: "important",
    title: "Experiment design & A/B testing",
    subtitle: "Drive decisions, not only reports",
    cardLine:
      "Required on Decision Scientist and advanced analyst tracks where changes must be proven.",
    companiesExpect: [
      "Documented hypothesis, primary metric, guardrails, and sample logic.",
      "Honest readout: ship, iterate, or stop — with uncertainty stated.",
      "Familiarity with retail/digital experiment culture (and transferable design for ops tests).",
      "Portfolio or work example of an experiment design even if historically simulated.",
      "Separation from “always-on reporting” — experiments are decision instruments.",
    ],
    technical:
      "Experiment design is required to measure causal-enough impact of a change under noise. Companies expect disciplined metrics and avoidable bias, not only charting before/after.",
    business:
      "A/B and experiment skill is required where product, pricing, UX, or process changes need evidence. It marks the shift from reporting analyst to decision-driving analyst.",
    depthBy: "2029",
  },
  {
    id: "ai-literacy",
    slug: "ai-literacy",
    tier: "important",
    title: "AI literacy (applied)",
    subtitle: "Use and judge — do not build platforms",
    cardLine:
      "Required as Germany hires AI users far more than AI builders for business roles.",
    companiesExpect: [
      "Ability to evaluate GenAI/LLM outputs for accuracy, bias, and business fitness.",
      "Human-in-the-loop judgement — when automation is unsafe or incomplete.",
      "Basic documentation of purpose, limits, and oversight (AI Act-aware).",
      "Practical prompting for analysis tasks without claiming ML engineering depth.",
      "Clear non-requirements: model training, fine-tuning, and platform MLOps are out of scope for this path.",
    ],
    technical:
      "Applied AI literacy is required to work safely with AI-assisted analysis and agent-style tools. The technical bar is evaluation and control, not building foundation models.",
    business:
      "AI literacy is required because leadership will ask analysts to judge whether AI output is good enough for ops. It supports AI Business Analyst and consulting readiness without pivoting to ML Engineer.",
    depthBy: "2029",
  },
];

export const destinationSkills: SkillItem[] = [
  {
    id: "causal",
    slug: "causal-inference",
    tier: "destination",
    title: "Causal inference & decision framing",
    subtitle: "From correlation to cause",
    cardLine:
      "Required for Decision Scientist work where leadership asks what to change — not only what moved together.",
    companiesExpect: [
      "Ability to discuss confounders and limits of observational claims.",
      "Structured decision options with trade-offs, not a single correlational slide.",
      "Applied methods awareness (e.g. before/after with controls, DiD-style thinking) appropriate to business data.",
      "Refusal to overstate causality when the design cannot support it.",
      "Typically expected after 1–2 years of analyst experience — not as a fresher checkbox.",
    ],
    technical:
      "Causal skill is required to move beyond descriptive analytics into inferential decision support. Companies elevating Decision Scientist titles screen for this maturity.",
    business:
      "Causal framing is required when budget and process changes need justification. Translators and Decision Scientists prioritise interventions; correlation-only stories lose senior rooms.",
    depthBy: "2029–2030",
  },
  {
    id: "stakeholder",
    slug: "stakeholder-leadership",
    tier: "destination",
    title: "Leadership stakeholder management",
    subtitle: "Directors, trade-offs, decisions",
    cardLine:
      "Required for Analytics Translator and senior Decision Scientist paths that influence without formal authority.",
    companiesExpect: [
      "Presentations and workshops aimed at directors / VPs with a decision outcome.",
      "Ability to navigate conflicting departmental priorities.",
      "Influence skills: alignment, escalation judgement, follow-through on adoption.",
      "Evidence from real work environments — academic projects alone rarely suffice.",
      "Communication in the language of P&L, risk, and operations — not only models.",
    ],
    technical:
      "Stakeholder leadership requires crisp artefacts — decision briefs, scenario tables, monitored follow-ups — more than slide volume.",
    business:
      "This skill is required because Translator roles are majority business. Without senior stakeholder proof, the ceiling role stays closed.",
    depthBy: "2030",
  },
  {
    id: "process-mining",
    slug: "process-mining",
    tier: "destination",
    title: "Process mining",
    subtitle: "How work actually flows",
    cardLine:
      "Required on consulting and industrial paths that optimise processes from event/ERP evidence.",
    companiesExpect: [
      "Ability to map as-is processes from logs or structured event data.",
      "Bottleneck identification with quantified time/cost impact.",
      "Tooling awareness (Celonis/Signavio) or rigorous manual equivalents.",
      "Recommendations tied to automation or redesign bets leadership can fund.",
      "Strong fit for Celonis ecosystem and DAX process programmes in Germany.",
    ],
    technical:
      "Process mining is required when ERP and workflow event data must reveal real paths, loops, and waits. It extends SQL thinking into process graphs and conformance.",
    business:
      "Process mining is required to sell and deliver process improvement — a core consulting and industrial value story, and a bridge to Translator-style prioritisation.",
    depthBy: "2029–2030",
  },
  {
    id: "ai-act",
    slug: "eu-ai-act",
    tier: "destination",
    title: "EU AI Act awareness",
    subtitle: "Operational compliance",
    cardLine:
      "Required as compliance-aware analysis becomes a hiring differentiator through 2028–30.",
    companiesExpect: [
      "Working knowledge of high-risk patterns, documentation, and human oversight expectations.",
      "Ability to flag when an AI-assisted workflow needs extra controls.",
      "Operational checklists — not lawyer-level interpretation.",
      "Comfort discussing Act implications with risk/compliance partners.",
      "Growing appearance in analyst and consultant descriptions as programmes mature.",
    ],
    technical:
      "EU AI Act literacy is required to design analysis and tooling with audit trails, purpose limitation, and oversight hooks where AI is in the loop.",
    business:
      "Act awareness is required because blocked rollouts and procurement gates are business risks. Analysts who speak this language support safer scaling of AI in the firm.",
    depthBy: "2029",
  },
  {
    id: "roi",
    slug: "business-case-roi",
    tier: "destination",
    title: "Business case & ROI",
    subtitle: "Quantify impact",
    cardLine:
      "Required when Analytics Translators and seniors must justify which data bets get funded.",
    companiesExpect: [
      "Impact estimates with stated assumptions and ranges (not false precision).",
      "Translation of analytical gains into euros, hours, risk avoided, or revenue upside.",
      "Prioritisation logic across a backlog of possible analyses.",
      "One-page business cases leadership can approve or reject quickly.",
      "Tight link between measurement plan and claimed ROI.",
    ],
    technical:
      "ROI skill requires simple, transparent quantification models tied to measurable KPIs — delay minutes, stockouts, rework hours — with sensitivity to assumptions.",
    business:
      "Business cases are required to turn insight into investment. Without ROI language, analysis stays interesting but unfunded.",
    depthBy: "2030",
  },
  {
    id: "project-lead",
    slug: "cross-functional-leadership",
    tier: "destination",
    title: "Cross-functional project leadership",
    subtitle: "Own delivery and adoption",
    cardLine:
      "Required for destination roles that own outcomes across data, business, and IT — not only personal analysis.",
    companiesExpect: [
      "End-to-end ownership: problem framing → delivery → adoption measurement.",
      "Coordination across engineers, business owners, and IT constraints.",
      "Handover and run discipline after go-live.",
      "Evidence of leading a multi-person delivery (Agile leadership helps as early signal).",
      "Focus on adoption metrics, not vanity delivery dates alone.",
    ],
    technical:
      "Cross-functional leadership requires planning artefacts, interfaces between systems/teams, and post-release monitoring so solutions survive contact with production.",
    business:
      "This skill is required because Translator and senior Decision Scientist value is adoption at scale. Analysis that never lands in the process does not count.",
    depthBy: "2030",
  },
];

export const screeningTech = [
  { item: "SQL demonstrated (live or take-home)", weight: 95 },
  { item: "Power BI / Tableau they can click", weight: 92 },
  { item: "Python analysis (clean, reproducible)", weight: 88 },
  { item: "Git repo with documented analysis", weight: 82 },
  { item: "Cloud / dbt signal (nice → strong by 2028)", weight: 70 },
];

export const screeningBusiness = [
  { item: "Projects framed as business decisions", weight: 96 },
  { item: "Clear storytelling in interview", weight: 94 },
  { item: "German B2 (or honest B1 + plan)", weight: 90 },
  { item: "Domain-relevant case (logistics/retail)", weight: 86 },
  { item: "Stakeholder / Agile delivery proof", weight: 78 },
];

export const skillsBalanceTimeline = [
  { phase: "Sem 2", technical: 55, business: 45, label: "Foundation" },
  { phase: "Entry 27–28", technical: 45, business: 55, label: "Business DA" },
  { phase: "Solidify 28–29", technical: 40, business: 60, label: "Hybrid depth" },
  { phase: "Dest. 29–30", technical: 35, business: 65, label: "Decision / Translator" },
];

export const skillsTimelinePhases = [
  {
    id: "p1",
    title: "Phase 1 — Foundation",
    when: "Sem 2 · Oct 2026 – Mar 2027",
    tech: [
      "Power BI (2 dashboards)",
      "SQL advanced practice",
      "ICE → pipeline + dashboard",
      "Azure connect for Power BI",
    ],
    business: [
      "3 case studies (problem → decision)",
      "German B1 → B2 vocabulary",
      "One ROI-style write-up draft",
    ],
  },
  {
    id: "p2",
    title: "Phase 2 — Entry-ready",
    when: "Sem 3–4 · Apr 2027 – Sep 2028",
    tech: [
      "dbt project with tests + docs",
      "Time-series second project",
      "Data quality checks in repos",
      "Clean Git for all projects",
    ],
    business: [
      "Domain depth (logistics or retail)",
      "A/B experiment document",
      "EU AI Act applied one-pager",
      "Interview storytelling drills",
    ],
  },
  {
    id: "p3",
    title: "Phase 3 — Solidify",
    when: "2028–2029 · first full-time role",
    tech: [
      "Cloud platform at work",
      "Causal methods on real data",
      "Experiment ownership tooling",
    ],
    business: [
      "Monthly manager presentations",
      "German B2+ in meetings",
      "Process mapping awareness",
      "Run one live experiment",
    ],
  },
  {
    id: "p4",
    title: "Phase 4 — Destination",
    when: "2029–2030",
    tech: [
      "Process mining case (Celonis+)",
      "AI Act operational checklists",
    ],
    business: [
      "Director-level presenting",
      "Business cases for data bets",
      "Lead one end-to-end initiative",
      "Deep domain go-to analyst",
    ],
  },
];

export function getSkillBySlug(slug: string) {
  return [...crucialSkills, ...importantSkills, ...destinationSkills].find(
    (s) => s.slug === slug,
  );
}

export function getAllDetailSkills() {
  return [...crucialSkills, ...importantSkills, ...destinationSkills];
}
