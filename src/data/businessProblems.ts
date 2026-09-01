export interface ProblemResource {
  name: string;
  url: string;
  useFor: string;
  group?: "macro" | "sector" | "leipzig" | "career";
}

export interface CrossSectorProblem {
  id: string;
  slug: string;
  code: string;
  title: string;
  plainLanguage: string;
  businessPain: string;
  evidence: string[];
  horizon2027_29: { phase: string; whatHappens: string }[];
  moneyAndRoi: string;
  whoPays: string[];
  sectorFootprints: { sector: string; howItShows: string }[];
  rolesInDemand: string[];
  skillsSignal: string[];
  demand2027_28: string;
  whyItMattersToMe: string;
}

export interface CompanyProblemRow {
  company: string;
  location: string;
  specificProblem: string;
  myContribution: string;
}

export interface SkillPlanRow {
  skill: string;
  why: string;
  byWhen: string;
}

export interface SectorProblemDeepDive {
  id: string;
  slug: string;
  priority: number;
  title: string;
  tagline: string;
  whatSectorSells: string;
  coreProblems: { problem: string; plain: string; evidence: string }[];
  companies: CompanyProblemRow[];
  regionalDepth: { hub: string; why: string }[];
  myLoophole: string;
  skillsToDevelop: SkillPlanRow[];
  resources: ProblemResource[];
}

export interface LeipzigTarget {
  company: string;
  sector: string;
  problem: string;
  howIContribute: string;
  loophole: string;
}

export interface ExperienceMapRow {
  asset: string;
  problemSolved: string;
  sector: string;
  demandEvidence: string;
}

export interface FocusPriority {
  priority: number;
  sector: string;
  companies: string;
  entryRole: string;
  why: string;
}

export const metaInsight = {
  title: "My positioning for 2027–28",
  body: "German firms use AI widely but rarely scale it into production (KPMG / Deloitte / SAP signals). I position myself as the bridge from pilot to production — not another demo builder. This page is where Market → Sectors → Companies converge into the problems I will target.",
};

export const crossSectorProblems: CrossSectorProblem[] = [
  {
    id: "a",
    slug: "pilot-to-production",
    code: "A",
    title: "Pilot-to-Production Gap",
    plainLanguage:
      "Companies run hundreds of AI experiments but cannot scale them. Proof-of-concepts die because nobody owns the data pipeline, monitoring, or business case after the demo ends.",
    businessPain:
      "German boards approved AI budgets, but operations still run on Excel, SAP reports, and manual handoffs. The business cost is not the failed demo — it is delayed productivity, duplicate tooling spend, and competitors who industrialise faster. By 2027–29, buyers will pay for production reliability: owned pipelines, monitoring, rollback, and a measurable KPI link — not another PoC slide.",
    evidence: [
      "Only ~26% of Mittelstand firms have AI fully integrated into core processes (CANCOM/ServiceNow 2026).",
      "Siemens signals that a material share of 2026 AI spend is deferred because pilots do not scale into plant operations (Siemens / TechCircle reporting).",
      "KPMG GenAI Germany 2026: broad AI use, but full enterprise integration remains rare — the productivity paradox.",
      "Deloitte ROI of AI Germany 2026: firms optimise with AI but transform slowly; ROI often takes 2+ years without operating-model change.",
    ],
    horizon2027_29: [
      {
        phase: "2027",
        whatHappens:
          "PoC clean-up wave: companies kill weak pilots, consolidate vendors, and fund 1–3 production use cases with clear owners (data + ops + business).",
      },
      {
        phase: "2028",
        whatHappens:
          "Industrialisation: MLOps-lite, model monitoring, and analytics engineering become standard hiring language in DACH job ads for logistics, retail, and manufacturing.",
      },
      {
        phase: "2029",
        whatHappens:
          "Production AI is treated like software products — SLAs, cost per prediction, and audit trails. Pure demo builders lose ground to delivery people.",
      },
    ],
    moneyAndRoi:
      "Budget shifts from innovation theatre to run-cost: cloud, monitoring, data contracts, and people who keep models alive. The ROI case moves from “accuracy in a notebook” to “hours saved, fewer exceptions, fewer stockouts, fewer delay minutes.” That is how Werkstudent and junior analyst work becomes visible to managers.",
    whoPays: [
      "COO / operations excellence leads who own KPIs",
      "CIO / Head of Data who inherit failed PoCs",
      "Consulting delivery partners (Capgemini, Accenture, T-Systems) selling implementation",
      "Scale-ups productising analytics (Celonis-adjacent, logistics tech)",
    ],
    sectorFootprints: [
      {
        sector: "Software / Consulting",
        howItShows:
          "Clients buy strategy decks, then stall — firms hire juniors who can wire data products and hand over runbooks.",
      },
      {
        sector: "Logistics",
        howItShows:
          "Delay, routing, and capacity models must survive live ops — DHL/DB-style monitoring and exception workflows.",
      },
      {
        sector: "Retail",
        howItShows:
          "Demand forecasting and personalisation die without shared metrics and scheduled pipelines (Zalando-style data foundation).",
      },
      {
        sector: "Banking / FinTech",
        howItShows:
          "Risk and ops models need production controls before regulators and audit accept them.",
      },
      {
        sector: "Industrial / Auto",
        howItShows:
          "Plant AI fails on messy sensor data — Siemens-style data quality and OT/IT handoff block scale.",
      },
      {
        sector: "Energy",
        howItShows:
          "Grid and customer analytics sit on multi-year digital backbones (E.ON-style) — pilots must plug into SAP/cloud cores.",
      },
    ],
    rolesInDemand: [
      "Analytics Engineer / Data Engineer (junior–mid)",
      "MLOps-lite / AI implementation analyst",
      "Business Analyst with pipeline literacy",
      "Consulting Werkstudent on client delivery programmes",
    ],
    skillsSignal: [
      "CI/CD, Docker, Git, basic cloud (Azure/AWS)",
      "SQL + scheduled pipelines + monitoring mindset",
      "One end-to-end project: data → model → dashboard → docs",
      "Case study: what broke after the demo and how I fixed it",
    ],
    demand2027_28:
      "People who make AI work in production — Analytics Engineers, MLOps-lite roles, and implementation consultants — not notebook-only ML.",
    whyItMattersToMe:
      "My DevOps internship (CI/CD, deployments, logs) plus ICE delay forecasting is the bridge from demo to production. This is the portfolio centrepiece for my 2027 Werkstudent push.",
  },
  {
    id: "b",
    slug: "data-quality-silos",
    code: "B",
    title: "Data Quality & Silos",
    plainLanguage:
      "Low-quality AI outputs cause rework. Data lives in disconnected SAP, cloud, and legacy systems. Marketing dashboards show different revenue than Finance.",
    businessPain:
      "Without trusted data, AI becomes expensive noise. German enterprises typically run SAP + CRM + warehouse + Excel side systems. When definitions diverge, managers stop trusting dashboards — and AI projects lose political cover. Fixing silos and quality is the unglamorous work that unlocks every other problem (A–F).",
    evidence: [
      "~81% of German companies report low-quality AI outputs causing rework (SAP Value of AI Germany 2026).",
      "Zalando’s public data-platform narrative shows why retailers invest in a unified foundation before AI features.",
      "Industrial AI stalls when sensor, MES, and ERP clocks/IDs do not align (Siemens industrial AI reporting).",
      "Deloitte: skills and operating-model gaps amplify data issues — tools alone do not fix trust.",
    ],
    horizon2027_29: [
      {
        phase: "2027",
        whatHappens:
          "Data contracts, metric layers, and “single source of truth” programmes expand — especially retail, banking, and logistics control towers.",
      },
      {
        phase: "2028",
        whatHappens:
          "dbt/SQL analytics engineering and Power BI semantic models become default junior requirements in German ads.",
      },
      {
        phase: "2029",
        whatHappens:
          "AI features are blocked at governance gates unless lineage and quality scores exist — data product ownership becomes a named role.",
      },
    ],
    moneyAndRoi:
      "Rework hours, wrong inventory buys, mispriced promotions, and audit findings are the real bill. Companies pay for analysts who reconcile definitions, build trusted marts, and document lineage — cheaper than another GenAI licence on dirty tables.",
    whoPays: [
      "CFO / controlling (one number for finance)",
      "CMO / digital (campaign attribution that matches finance)",
      "Head of Supply Chain (inventory truth)",
      "Data platform teams inside DAX and Mittelstand",
    ],
    sectorFootprints: [
      {
        sector: "Software / Consulting",
        howItShows:
          "Migration and BI programmes sell data cleansing, MDM, and dashboard rebuilds as the first work package.",
      },
      {
        sector: "Logistics",
        howItShows:
          "Shipment, warehouse, and partner EDI feeds disagree — delay models fail without master data hygiene.",
      },
      {
        sector: "Retail",
        howItShows:
          "SKU, promo, and online/offline channels create metric wars; agentic commerce needs clean product graphs.",
      },
      {
        sector: "Banking / FinTech",
        howItShows:
          "Customer 360 and risk data must reconcile across core banking and cloud lakes under BaFin-relevant scrutiny.",
      },
      {
        sector: "Industrial / Auto",
        howItShows:
          "Plant OT data vs SAP ERP — predictive maintenance dies without consistent asset IDs and timestamps.",
      },
      {
        sector: "Energy",
        howItShows:
          "Meter, grid, and customer systems silo the energy transition digital backbone.",
      },
    ],
    rolesInDemand: [
      "Business / Data Analyst",
      "Analytics Engineer (dbt + SQL)",
      "Data Quality / Governance analyst",
      "BI Developer (Power BI / Fabric)",
    ],
    skillsSignal: [
      "SQL depth, data modelling, basic dbt",
      "Power BI semantic models and clear metrics docs",
      "Data Analysis Toolkit-style reusable cleaning pipelines",
      "Before/after quality metrics in a portfolio case",
    ],
    demand2027_28:
      "Data governance analysts, analytics engineers with dbt/SQL, and BI people who make numbers trustworthy across departments.",
    whyItMattersToMe:
      "SQL + Python toolkit work and full-stack reporting skills let me become useful fast. Clean data is the foundation under every sector I chose.",
  },
  {
    id: "c",
    slug: "eu-ai-act-compliance",
    code: "C",
    title: "EU AI Act Compliance",
    plainLanguage:
      "From Aug 2026 onward, companies must inventory AI assets, classify risk, document models, and keep human-in-the-loop oversight.",
    businessPain:
      "This is not only legal paperwork — it is a business operating constraint. High-risk and transparency obligations change how products ship in banking, HR screening, critical infrastructure, and logistics decisioning. Firms that cannot document models slow down sales and face fines or blocked rollouts. Early literacy is a career wedge because almost nobody has multi-year Act experience yet.",
    evidence: [
      "~69% of German companies need help with AI Act compliance; only ~24% have started meaningfully (Bitkom 2026 signals).",
      "Official EU AI Act timeline: obligations phase in after Aug 2026 — inventories and governance programmes accelerate 2026–28.",
      "KPMG / Big Four narratives: audit and risk practices expanding AI assurance offerings in DACH.",
      "SAP Value of AI: governance gaps already force rework — regulation raises the bar further.",
    ],
    horizon2027_29: [
      {
        phase: "2027",
        whatHappens:
          "AI asset inventories, risk classification, and vendor questionnaires become standard project gates in enterprises and consulting RFPs.",
      },
      {
        phase: "2028",
        whatHappens:
          "Human-in-the-loop design, model cards, and logging expectations show up in analyst/engineer job descriptions — not only in legal roles.",
      },
      {
        phase: "2029",
        whatHappens:
          "Compliance-by-design is table stakes for customer-facing AI; “we cannot explain this model” blocks procurement.",
      },
    ],
    moneyAndRoi:
      "Spend flows to Big Four, boutique AI-governance consultancies, and internal risk/data teams. Avoided fines and faster procurement clearance are the ROI story — plus reusable documentation templates that cut every future project’s legal cycle time.",
    whoPays: [
      "Chief Risk / Compliance / Legal",
      "CIO accountable for AI inventory",
      "Banking, insurance, and critical-infra operators",
      "Consulting practices selling Act readiness",
    ],
    sectorFootprints: [
      {
        sector: "Software / Consulting",
        howItShows:
          "Act readiness packages bundled with SAP/cloud programmes — juniors document systems of record.",
      },
      {
        sector: "Logistics",
        howItShows:
          "Automated decisions affecting people/goods need oversight trails (routing, screening, workforce tools).",
      },
      {
        sector: "Retail",
        howItShows:
          "Personalisation and pricing AI need transparency and data-protection alignment.",
      },
      {
        sector: "Banking / FinTech",
        howItShows:
          "Highest pressure — credit, fraud, and AML models already live under dual regulatory stacks.",
      },
      {
        sector: "Industrial / Auto",
        howItShows:
          "Safety-adjacent and workforce AI require clear human override and documentation.",
      },
      {
        sector: "Energy",
        howItShows:
          "Critical infrastructure classification raises documentation and monitoring expectations.",
      },
    ],
    rolesInDemand: [
      "AI governance / risk analyst (junior entry via documentation)",
      "Data analyst with model-card literacy",
      "GRC-supporting consultant",
      "Product analyst for audit-ready AI features",
    ],
    skillsSignal: [
      "1-page EU AI Act summary in my own words",
      "Model card / data sheet for ICE or ForestGuard",
      "Inventory template: system, purpose, risk class, owner",
      "German B1→B2 for compliance conversations over time",
    ],
    demand2027_28:
      "AI governance-aware analysts and consultants who can inventory, document, and support human-in-the-loop design — a scarce early skill.",
    whyItMattersToMe:
      "I can enter early with literacy and documentation skill while seniors are still scarce. It differentiates my CV for 2027–28 applications.",
  },
  {
    id: "d",
    slug: "agentic-ai-orchestration",
    code: "D",
    title: "Agentic AI Orchestration",
    plainLanguage:
      "The shift moves from AI as a tool to AI as a virtual coworker — but companies need orchestration: who controls the agent, audit trails, and human override.",
    businessPain:
      "Agent demos look magical; operations are exception-heavy. In retail and logistics, most cost sits in edge cases, not happy paths. Without orchestration (workflow, permissions, escalation), agents create silent errors and support debt. Business value appears when agents are wired into ERP/BPM with clear owners — Celonis/SAP/REWE-style process thinking beats chatbot theatre.",
    evidence: [
      "McKinsey on REWE: agentic commerce needs process and data readiness, not only LLMs.",
      "SAP Joule / Business AI narrative: agents inside ERP workflows require data fabric and controls.",
      "DHL and large logistics players publicly push intelligent logistics — exception handling remains the bottleneck.",
      "Deloitte: transformation lags optimisation — agents amplify process debt if processes are unclear.",
    ],
    horizon2027_29: [
      {
        phase: "2027",
        whatHappens:
          "Pilot agents in customer service, procurement, and warehouse exceptions — with human approval loops mandatory.",
      },
      {
        phase: "2028",
        whatHappens:
          "Orchestration platforms and process mining + AI bundles expand; analysts who map BPMN/exception trees get hired.",
      },
      {
        phase: "2029",
        whatHappens:
          "Multi-agent systems in production for narrow domains; audit and cost-per-task metrics decide renewals.",
      },
    ],
    moneyAndRoi:
      "Value is measured in tickets closed, minutes saved per exception, and error rates — not tokens. Buyers fund process analysts and analytics engineers who connect agents to systems of record, plus governance that prevents runaway actions.",
    whoPays: [
      "COO / Customer Operations",
      "CIO / Enterprise Architecture",
      "Retail digital and supply-chain leads",
      "SAP ecosystem partners implementing Joule-style agents",
    ],
    sectorFootprints: [
      {
        sector: "Software / Consulting",
        howItShows:
          "Agent + ERP implementation programmes; juniors map processes and build evaluation harnesses.",
      },
      {
        sector: "Logistics",
        howItShows:
          "Exception agents for delay, damage, customs — must escalate to humans with full context.",
      },
      {
        sector: "Retail",
        howItShows:
          "Agentic commerce: offers, returns, inventory moves — needs clean product and order data (Problem B).",
      },
      {
        sector: "Banking / FinTech",
        howItShows:
          "Assisted ops agents under strict override and logging (Problem C).",
      },
      {
        sector: "Industrial / Auto",
        howItShows:
          "Maintenance and quality agents tied to MES/SCADA with safety limits.",
      },
      {
        sector: "Energy",
        howItShows:
          "Field and customer agents only after digital backbone maturity.",
      },
    ],
    rolesInDemand: [
      "Analytics Translator / Process + AI analyst",
      "Business Analyst with workflow literacy",
      "AI product analyst (evaluation, guardrails)",
      "Junior automation / intelligent-ops roles",
    ],
    skillsSignal: [
      "Process mapping + exception trees for one domain",
      "ForestGuard Scrum delivery as orchestration practice",
      "Eval mindset: precision/recall on agent actions, not vibes",
      "Awareness of SAP/Celonis-style process + data pairing",
    ],
    demand2027_28:
      "Process-aware data people who understand workflow + AI + control — not pure ML researchers.",
    whyItMattersToMe:
      "I aim at process + data + governance. That matches Analytics Translator / Analytics Engineer paths more than research-only ML.",
  },
  {
    id: "e",
    slug: "skills-translation-gap",
    code: "E",
    title: "Skills & Translation Gap",
    plainLanguage:
      "Business teams cannot talk to data teams. Talent shortage is acute. Someone must explain model results to operators and managers.",
    businessPain:
      "Germany’s IT shortage meets an AI literacy gap. Models that nobody trusts get ignored; tools that nobody trains sit unused. The scarce role is the translator: someone who turns metrics into decisions for a warehouse lead, plant manager, or retail buyer — increasingly in German. This gap is why Business Analyst and Analytics Translator titles stay resilient even as tooling changes.",
    evidence: [
      "~35% of German firms cite talent shortage vs lower global averages in Deloitte AI ROI research.",
      "Only ~33% of firms mandate structured AI training — capability building lags tool buying.",
      "Bitkom: persistent unfilled digital roles; AI skills compound the shortage.",
      "WEF Future of Jobs: analytical thinking + AI/big-data literacy rise together with human skills.",
    ],
    horizon2027_29: [
      {
        phase: "2027",
        whatHappens:
          "Internal academies and Werkstudent pipelines expand; hybrid business+tech profiles win interviews over pure coders for analyst seats.",
      },
      {
        phase: "2028",
        whatHappens:
          "Storytelling, stakeholder management, and German B2 become hard filters for client-facing and ops-embedded roles.",
      },
      {
        phase: "2029",
        whatHappens:
          "Translation roles formalise (analytics translator, AI enablement); seniors coach, juniors produce explained insights weekly.",
      },
    ],
    moneyAndRoi:
      "Training budget and junior hiring are cheaper than failed platform licences. ROI shows up as adoption rates, decisions taken from dashboards, and reduced “shadow Excel.” Companies pay for people who create that adoption.",
    whoPays: [
      "Business unit leaders who own P&L",
      "HR / L&D funding AI upskilling",
      "Consulting firms selling change + enablement",
      "Scale-ups needing customer-facing analysts",
    ],
    sectorFootprints: [
      {
        sector: "Software / Consulting",
        howItShows:
          "Client workshops, enablement, and bilingual delivery — juniors who explain win staffed roles.",
      },
      {
        sector: "Logistics",
        howItShows:
          "Ops managers need delay/capacity insights in operational language, not AUC scores.",
      },
      {
        sector: "Retail",
        howItShows:
          "Category managers need promo and demand stories tied to margin.",
      },
      {
        sector: "Banking / FinTech",
        howItShows:
          "Risk and product need clear model explanations for committees.",
      },
      {
        sector: "Industrial / Auto",
        howItShows:
          "Plant leads need maintenance priorities in shift language.",
      },
      {
        sector: "Energy",
        howItShows:
          "Transition programmes need business cases explained across engineering and commercial teams.",
      },
    ],
    rolesInDemand: [
      "Business / Data Analyst",
      "Analytics Translator",
      "Customer-facing consulting analyst",
      "AI enablement / academy support roles",
    ],
    skillsSignal: [
      "3 short case write-ups: problem → method → business decision",
      "German B1→B2 business vocabulary",
      "Presentation practice for non-technical managers",
      "Agile facilitation proof from ForestGuard Scrum Master work",
    ],
    demand2027_28:
      "Analytics Translators and Business/Data Analysts who explain results to operators and managers — in German when needed.",
    whyItMattersToMe:
      "I sit between engineering and business. Storytelling and German progress are deliberate skills for interviews and delivery — not soft extras.",
  },
  {
    id: "f",
    slug: "legacy-system-migration",
    code: "F",
    title: "Legacy System Migration",
    plainLanguage:
      "SAP R/3 → S/4HANA, on-prem → cloud, OT/IT security for manufacturing and rail. Multi-year programmes run through 2027–30.",
    businessPain:
      "Germany’s installed base of SAP and on-prem systems is a multi-year cash programme. Migrations unlock analytics and AI — but only after cutovers, data conversion, and dual-running. These programmes hire armies of analysts who reconcile old vs new, build interim reports, and prove nothing broke. That is durable demand through 2029 regardless of GenAI hype cycles.",
    evidence: [
      "Deutsche Bahn digitalisation and large SAP-related programmes (e.g. Project Argo narratives) span years, not quarters.",
      "E.ON digital backbone / SAP reporting shows energy majors rebuilding cores while running the business.",
      "Consulting war-for-talent around S/4HANA and cloud analytics remains a DACH staple.",
      "Industrial OT/IT convergence adds security and data-mapping work on top of ERP moves.",
    ],
    horizon2027_29: [
      {
        phase: "2027",
        whatHappens:
          "Peak dual-run and hypercare phases for many S/4 programmes — reporting and data-migration analysts in constant demand.",
      },
      {
        phase: "2028",
        whatHappens:
          "Cloud analytics (Azure/Fabric, AWS) layered on migrated cores; AI use cases finally attach to clean post-migration data.",
      },
      {
        phase: "2029",
        whatHappens:
          "Post-migration optimisation and process mining; AI Act + agents (C/D) ride on modernised stacks.",
      },
    ],
    moneyAndRoi:
      "These are large multi-year programmes for big groups. Junior value is reconciliation, testing evidence, cutover dashboards, and stakeholder reporting — not designing the target architecture alone.",
    whoPays: [
      "CIO / programme PMO",
      "SAP SI partners (Capgemini, T-Systems, Accenture, IBM)",
      "Industry operators (rail, energy, auto, retail HQ)",
      "Mittelstand catching up on cloud ERP",
    ],
    sectorFootprints: [
      {
        sector: "Software / Consulting",
        howItShows:
          "Core revenue line — migration factories staff Werkstudenten and juniors heavily.",
      },
      {
        sector: "Logistics",
        howItShows:
          "DB and parcel networks modernise dispatch and ERP simultaneously.",
      },
      {
        sector: "Retail",
        howItShows:
          "Omnichannel platforms migrate while stores keep selling — interim analytics critical.",
      },
      {
        sector: "Banking / FinTech",
        howItShows:
          "Core banking and data-platform replacements under regulatory change windows.",
      },
      {
        sector: "Industrial / Auto",
        howItShows:
          "MES/ERP alignment and plant connectivity projects run in parallel with S/4.",
      },
      {
        sector: "Energy",
        howItShows:
          "Grid and customer platforms rebuild for the energy transition timeline.",
      },
    ],
    rolesInDemand: [
      "Data migration analyst",
      "BI / reporting analyst on programmes",
      "Junior cloud analytics (Azure) roles",
      "PMO / test analyst with SQL",
    ],
    skillsSignal: [
      "SQL + Excel/Power BI for reconciliation",
      "Azure fundamentals awareness",
      "SAP vocabulary (modules, masters, cutover) at literacy level",
      "Documentation discipline from internship handover practice",
    ],
    demand2027_28:
      "Data migration analysts, cloud analytics on Azure, and people fluent enough in legacy + modern stacks to survive dual-run chaos.",
    whyItMattersToMe:
      "SAP awareness + Azure + analytics is a practical bridge into German consulting and enterprise programmes — aligned with my full-stack and DevOps delivery habits.",
  },
];

export const sectorProblemDeepDives: SectorProblemDeepDive[] = [
  {
    id: "sp1",
    slug: "software-consulting",
    priority: 1,
    title: "Software / Consulting",
    tagline: "Priority #1 — clients buy implementation, not decks",
    whatSectorSells:
      "Technology implementation, cloud migration, AI strategy, managed services. Companies do not buy software alone — they buy someone to make broken processes work with new tools.",
    coreProblems: [
      {
        problem: "Clients cannot scale AI",
        plain: "Consulting firms sell strategy; clients cannot execute.",
        evidence: "Junior-heavy delivery and governance lag (SAP/CIO 2026).",
      },
      {
        problem: "SAP S/4HANA + AI convergence",
        plain: "Every German enterprise runs SAP and must add Joule agents + EU AI Act compliance.",
        evidence: "Heise: Joule is running; compliance is not.",
      },
      {
        problem: "Shadow AI in enterprises",
        plain: "Employees use ChatGPT on company data without governance.",
        evidence: "~86% of German firms had to rework due to bad AI outputs (SAP 2026).",
      },
      {
        problem: "Agentic AI in ERP workflows",
        plain: "Procurement/finance agents need data fabric, not only an LLM.",
        evidence: "SAP Business Data Cloud / zero-copy integration narratives.",
      },
    ],
    companies: [
      {
        company: "SAP",
        location: "Walldorf, Berlin, Munich, Dresden, Leipzig",
        specificProblem: "AI governance + S/4HANA migration + Joule agent rollout; few firms have a designated AI leader.",
        myContribution: "Analytics on SAP data, AI literacy support, data product work on BTP.",
      },
      {
        company: "Capgemini",
        location: "Munich, Berlin, Frankfurt, Düsseldorf",
        specificProblem: "SAP-centric AI transformation for DAX clients; EU AI Act readiness.",
        myContribution: "Data migration analytics, Power BI/Azure dashboards for client programmes.",
      },
      {
        company: "Accenture",
        location: "Kronberg + major cities",
        specificProblem: "End-to-end DACH programmes: SAP + cloud + GenAI bundled.",
        myContribution: "Analytics Engineer on client data pipelines.",
      },
      {
        company: "Deloitte / PwC / KPMG",
        location: "Düsseldorf, Frankfurt, Berlin, Munich",
        specificProblem: "Regulated-industry AI audit and EU AI Act compliance consulting.",
        myContribution: "Data governance documentation, AI asset inventory.",
      },
      {
        company: "McKinsey (QuantumBlack) / BCG X",
        location: "Munich, Berlin, Frankfurt",
        specificProblem: "Advanced analytics and AI product builds for strategy clients.",
        myContribution: "Data analysis + business storytelling; hybrid business+tech analyst.",
      },
      {
        company: "Celonis",
        location: "Munich",
        specificProblem: "Process mining — find inefficiencies in ERP logs.",
        myContribution: "SQL + process understanding; Analytics Translator training ground.",
      },
      {
        company: "T-Systems / Deutsche Telekom",
        location: "Bonn, Frankfurt, Leipzig",
        specificProblem: "Sovereign cloud + AI for public sector and enterprises.",
        myContribution: "Cloud analytics, data governance for telco clients.",
      },
      {
        company: "IBM",
        location: "Ehningen (Stuttgart area)",
        specificProblem: "Hybrid cloud + watsonx for enterprise.",
        myContribution: "Data pipeline work, AI governance support.",
      },
    ],
    regionalDepth: [
      { hub: "Frankfurt/Rhein-Main", why: "Finance + consulting HQ belt; Big 4 + Accenture/Capgemini concentration." },
      { hub: "Munich", why: "SAP ecosystem, Celonis, Microsoft DE, McKinsey, BCG." },
      { hub: "Berlin", why: "Startup + consulting secondary offices; English-friendly." },
      { hub: "Walldorf", why: "SAP global HQ — thesis/Werkstudent programmes." },
      { hub: "Leipzig", why: "SAP presence; lower competition than Munich/Berlin." },
    ],
    myLoophole:
      "Most consulting applicants are either pure business (no SQL) or pure dev (no business sense). I sit in the middle: full-stack converting to data, with DevOps + Python/SQL + agile leadership. The gap I exploit is the implementation layer — making AI actually work in client environments, not only selling the strategy.",
    skillsToDevelop: [
      { skill: "Power BI + Azure", why: "#1 stack in German enterprise consulting", byWhen: "Sem 2 (2026)" },
      { skill: "dbt / SQL data modelling", why: "Analytics Engineer standard", byWhen: "Sem 2–3" },
      { skill: "SAP basics (S/4HANA, BTP awareness)", why: "Every German client runs SAP", byWhen: "Sem 3" },
      { skill: "EU AI Act literacy", why: "New compliance category; almost no juniors have this", byWhen: "Sem 3–4" },
      { skill: "German B2", why: "Client-facing consulting requires it", byWhen: "Continuous → 2027" },
      { skill: "Case study / business storytelling", why: "Consulting interviews test this", byWhen: "Sem 3" },
    ],
    resources: [
      { name: "Alice Labs DACH AI Consulting 2026", url: "https://alicelabs.ai/en/insights/best-ai-consulting-firms-dach-2026", useFor: "Consulting landscape" },
      { name: "SAP Value of AI Germany 2026", url: "https://news.sap.com/germany/files/2026/07/08/SAP-Value-of-AI-2026-Germany-1.pdf", useFor: "Governance + quality gap" },
      { name: "Heise — SAP Joule compliance", url: "https://www.heise.de/en/news/Joule-is-running-compliance-is-not-What-SAP-customers-must-do-now-11379374.html", useFor: "S/4 + AI compliance" },
      { name: "Deloitte ROI of AI Germany", url: "https://www.deloitte.com/de/de/about/press-room/deutsche-unternehmen-optimieren-mit-kI,-transformieren-aber-noch-nicht.html", useFor: "Productivity paradox" },
    ],
  },
  {
    id: "sp2",
    slug: "logistics-mobility",
    priority: 2,
    title: "Logistics / Mobility",
    tagline: "Priority #2 — my strongest sector fit",
    whatSectorSells:
      "Moving goods and people. Money is made on speed, reliability, and cost per shipment — all data problems at scale.",
    coreProblems: [
      { problem: "Punctuality & delay prediction", plain: "Passenger delays cost reputation + compensation; freight missed slots cascade.", evidence: "DB expanding AI across operations (DB Interim Report 2026)." },
      { problem: "Demand forecasting at scale", plain: "Wrong forecast = empty trucks or overflow warehouses.", evidence: "DHL Data & AI unit scaling enterprise-wide." },
      { problem: "Agentic AI for exception handling", plain: "~80% of logistics work is exceptions — agents need clean data + human oversight.", evidence: "DHL + HappyRobot agentic deployment narratives." },
      { problem: "Legacy SAP migration (Project Argo)", plain: "DB migrating SAP R/3 → S/4HANA while running 24/7 rail.", evidence: "DB Interim Report 2026." },
      { problem: "Cybersecurity on OT/IT", plain: "OT/IT security is now priority after incidents.", evidence: "DB Interim Report 2026." },
      { problem: "Last-mile optimization", plain: "Route planning, driver scheduling, emissions reduction.", evidence: "REWE/Graphmasters-style models apply to logistics too." },
    ],
    companies: [
      { company: "Deutsche Bahn (DB)", location: "Berlin, Leipzig, Frankfurt, Munich", specificProblem: "AI for dispatch, delay prediction, Digital Track Buddy, SAP Argo, cybersecurity.", myContribution: "My ICE Train Delay project is direct proof — extend with real-time pipeline + dashboard." },
      { company: "DHL Group / DHL Data & AI", location: "Bonn; Leipzig/Halle Airport hub", specificProblem: "Data foundations for agentic AI, demand forecasting, AI monitoring, EU AI Act governance.", myContribution: "Analytics on logistics data; AI monitoring using my DevOps background." },
      { company: "DB Schenker", location: "Essen, Leipzig", specificProblem: "AMR pilots, freight visibility.", myContribution: "IoT/data pipeline skills from Vital Guard." },
      { company: "Kühne+Nagel", location: "Hamburg", specificProblem: "Global freight visibility, digital platforms.", myContribution: "SQL + Python analytics." },
      { company: "Flix", location: "Munich", specificProblem: "Route optimization, demand prediction, pricing.", myContribution: "ML forecasting — similar to my DB project." },
      { company: "ORSOFT / MAIA / KnowFab / deepmentation", location: "Leipzig", specificProblem: "Supply-chain planning, industrial/logistics AI, document AI.", myContribution: "Local Tier 2/3 entry; ScaDS.AI ecosystem." },
    ],
    regionalDepth: [
      { hub: "Leipzig", why: "DHL global hub, DB ICE interchange, BMW/Porsche plants, ScaDS.AI, Data Week — my strategic base." },
      { hub: "Hamburg", why: "Port, Kühne+Nagel, Hapag-Lloyd." },
      { hub: "Bonn", why: "DHL Group HQ." },
      { hub: "Frankfurt", why: "Air cargo, DB Fernverkehr control." },
      { hub: "Duisburg", why: "Inland port, rail freight." },
    ],
    myLoophole:
      "Everyone applies to Data Scientist at DHL. Almost nobody shows up with a completed ML project on Deutsche Bahn open data, DevOps for production pipelines, and physical proximity to DHL Hub + DB in Leipzig. The gap is not build a better model — it is make the model run reliably, be monitored, and be explained to an operations manager.",
    skillsToDevelop: [
      { skill: "Extend ICE project → production pipeline", why: "Notebook → scheduled job + Power BI/Streamlit", byWhen: "Sem 2" },
      { skill: "Time-series forecasting (Prophet, ARIMA)", why: "Logistics is a time-series domain", byWhen: "Sem 2–3" },
      { skill: "dbt + cloud warehouse basics", why: "DHL-style structured data foundations", byWhen: "Sem 3" },
      { skill: "AI monitoring / MLOps basics", why: "DHL explicitly needs AI in production monitoring", byWhen: "Sem 3" },
      { skill: "German B2 (logistics vocabulary)", why: "Operations teams speak German", byWhen: "2027" },
      { skill: "Supply chain fundamentals", why: "Incoterms, lead times, hub-spoke logic", byWhen: "Self-study Sem 2" },
    ],
    resources: [
      { name: "DB Interim Report 2026", url: "https://zbir.deutschebahn.com/2026/en/interim-group-management-report-unaudited/digitalization-and-technology/digitalization/", useFor: "DB digitalization" },
      { name: "DHL Data & AI", url: "https://aimagazine.com/news/sabine-mueller-dhl-data-ai-rewires-intelligent-logistics", useFor: "DHL AI strategy" },
      { name: "DHL Responsible AI", url: "https://insights.economistenterprise.com/technology-innovation/enterprise-ai-in-action/how-dhl-delivers-responsible-ai", useFor: "Responsible AI" },
      { name: "DHL SCMR 2026", url: "https://www.scmr.com/article/dhl-supply-chain-bets-on-data-foundations-robotics-and-agentic-ai-to-drive-growth", useFor: "Agentic logistics" },
      { name: "DHL Hub Leipzig", url: "https://group.dhl.com/en/media-relations/press-releases/2024/dhl-extends-partnership-with-mitteldeutsche-flughafen-ag-until-2053.html", useFor: "Local hub anchor" },
    ],
  },
  {
    id: "sp3",
    slug: "retail-ecommerce",
    priority: 3,
    title: "Retail / E-commerce",
    tagline: "Priority #3 — analytics-native, underrated for me",
    whatSectorSells:
      "Products to consumers. Profit = repeat customers + efficient supply chain + right product at right price. Every step is a data decision.",
    coreProblems: [
      { problem: "Metric divergence", plain: "Marketing and Finance show different revenue — trust in data collapses.", evidence: "Zalando core problem (Databricks Blog)." },
      { problem: "Data SLOs / reliability", plain: "Data incidents take days to detect; cost is massive.", evidence: "Zalando treating data with software precision (Hyperight)." },
      { problem: "Agentic commerce", plain: "Customers shop via AI agents — retailers must adapt.", evidence: "Otto Group, REWE preparing." },
      { problem: "Demand forecasting + replenishment", plain: "Empty shelves or overstock both cost money.", evidence: "REWE uses XGBoost for assortment decisions." },
      { problem: "Personalization at scale", plain: "Generic marketing is dead at 40M+ customer scale.", evidence: "Otto/Zalando recommender + GenAI content." },
      { problem: "Returns optimization", plain: "Fashion return rates 30–50%; each return costs money.", evidence: "Sizing, fraud, prediction use-cases." },
    ],
    companies: [
      { company: "Schwarz Group (Lidl/Kaufland)", location: "Neckarsulm; Leipzig logistics", specificProblem: "Schwarz Digits + supply-chain analytics for thousands of stores.", myContribution: "SQL + Python analytics at massive scale." },
      { company: "Zalando", location: "Berlin", specificProblem: "Unified data foundation, metric views, GenAI analytics, data SLOs.", myContribution: "Analytics Engineer path; Databricks/SQL." },
      { company: "Otto Group", location: "Hamburg", specificProblem: "AI-first commerce; large tech investment; agentic commerce.", myContribution: "Data + business hybrid." },
      { company: "REWE Digital", location: "Cologne", specificProblem: "200+ AI projects; agentic orchestration; XGBoost forecasting.", myContribution: "Business/Data Analyst — same technique family as my DB project." },
      { company: "Spread Group", location: "Leipzig", specificProblem: "Print-on-demand forecasting, production scheduling, personalization.", myContribution: "Local Tier 2 — SQL + Python + dashboards; English-friendly." },
    ],
    regionalDepth: [
      { hub: "Leipzig", why: "Spread Group HQ; Schwarz logistics; retail delivery infrastructure." },
      { hub: "Hamburg", why: "Otto Group, About You e-commerce cluster." },
      { hub: "Berlin", why: "Zalando — biggest fashion e-commerce data employer." },
      { hub: "Cologne", why: "REWE Group HQ + REWE Digital." },
      { hub: "Neckarsulm", why: "Schwarz Group HQ." },
    ],
    myLoophole:
      "Retail hires more entry-level data analysts than most industries. Spread Group is in Leipzig and English-friendly. Most retail applicants come from stats/economics without engineering. I bring DevOps + full-stack — critical for Zalando-style data as software (Data SLOs, CI/CD for pipelines).",
    skillsToDevelop: [
      { skill: "Customer analytics / cohort analysis", why: "Core retail metric", byWhen: "Sem 2–3 project" },
      { skill: "Recommendation systems basics", why: "Every retailer needs this", byWhen: "Sem 3" },
      { skill: "A/B testing statistics", why: "Retail runs constant experiments", byWhen: "Sem 3" },
      { skill: "dbt + data modelling", why: "Zalando-direction stack", byWhen: "Sem 3" },
      { skill: "Retail case study project", why: "Demand forecast portfolio piece", byWhen: "Sem 2–3" },
    ],
    resources: [
      { name: "Zalando / Databricks", url: "https://www.databricks.com/blog/how-zalando-built-unified-data-foundation-ai-and-analytics-databricks", useFor: "Unified data foundation" },
      { name: "Zalando Data SLOs", url: "https://hyperight.com/why-zalando-is-treating-data-with-the-same-precision-as-software/", useFor: "Data reliability" },
      { name: "Otto Group AI Commerce", url: "https://www.ottogroup.com/en/stories/story/next-level-transformation-how-the-otto-group-shapes-ai-commerce-with-an-ai-first-mindset.php", useFor: "AI-first retail" },
      { name: "McKinsey REWE AI", url: "https://www.mckinsey.com/industries/retail/our-insights/preparing-for-agentic-commerce-rewes-ai-transformation", useFor: "Agentic commerce" },
    ],
  },
  {
    id: "sp4",
    slug: "banking-fintech",
    priority: 4,
    title: "Banking / FinTech",
    tagline: "Priority #4 — trust + regulation; analytics is the product",
    whatSectorSells:
      "Trust + money movement. Heavily regulated. Data quality is not optional — it is legally required.",
    coreProblems: [
      { problem: "Regulatory reporting (DORA, BCBS239, MaRisk)", plain: "Banks must prove data quality; AI adds a new compliance layer.", evidence: "N26 hiring Data Governance for exactly this." },
      { problem: "AI in banking operations", plain: "Document extraction, research assistants — must be auditable.", evidence: "Deutsche Bank dbTextract / dbLumina." },
      { problem: "Cloud migration + data platform", plain: "Move to cloud while keeping data sovereign.", evidence: "Deutsche Bank Technology, Data & Innovation." },
      { problem: "Fraud detection at scale", plain: "Real-time transaction scoring; adversaries adapt.", evidence: "Classic always-hiring ML use case." },
      { problem: "AI concierge / agentic banking", plain: "From search to AI that anticipates needs.", evidence: "Deutsche Bank / industry agentic banking narratives." },
    ],
    companies: [
      { company: "Deutsche Bank", location: "Frankfurt, Berlin", specificProblem: "Scaling AI platform; thousands of devs using AI assistants.", myContribution: "Analytics on financial data; AI governance support." },
      { company: "Commerzbank", location: "Frankfurt", specificProblem: "Digital transformation; Mittelstand banking analytics.", myContribution: "BI Analyst path." },
      { company: "N26", location: "Berlin", specificProblem: "Data governance + AI-driven compliance.", myContribution: "Data governance analyst; SQL + regulatory awareness." },
      { company: "Trade Republic / Solaris", location: "Berlin", specificProblem: "Real-time data at scale; banking-as-a-service.", myContribution: "Data Engineer / platform analytics." },
    ],
    regionalDepth: [
      { hub: "Frankfurt", why: "Banking capital — Deutsche Bank, Commerzbank, ECB." },
      { hub: "Berlin", why: "FinTech cluster — N26, Trade Republic, Raisin, Mambu." },
      { hub: "Munich", why: "Insurance + banking back-office." },
      { hub: "Leipzig", why: "Limited HQ presence; Sparkassen IT / adjacent services." },
    ],
    myLoophole:
      "Banking is harder for freshers. My angle is not front-office quant — it is data governance, analytics engineering, and AI compliance support. Realistic entry: Berlin FinTech Werkstudent, or consulting financial-services practice — then later Frankfurt.",
    skillsToDevelop: [
      { skill: "Financial data basics", why: "P&L / balance-sheet data structures", byWhen: "Self-study Sem 3" },
      { skill: "GDPR + DORA awareness", why: "Regulatory context for banking data roles", byWhen: "Sem 3" },
      { skill: "SQL at scale", why: "Banking = massive SQL workloads", byWhen: "Ongoing" },
      { skill: "German B2 minimum (C1 preferred)", why: "Banking is German-heavy", byWhen: "2027–28" },
      { skill: "Data governance fundamentals", why: "N26-style hiring need", byWhen: "Sem 4" },
    ],
    resources: [
      { name: "Deutsche Bank Tech", url: "https://www.db.com/what-we-do/focus-topics/tech/index?language_id=1", useFor: "Bank AI platform" },
      { name: "N26 Data Governance role signal", url: "https://talents.studysmarter.de/companies/n26/senior-lead-group-data-governance-strategy-16078684/", useFor: "Governance demand" },
    ],
  },
  {
    id: "sp5",
    slug: "industrial-automotive",
    priority: 5,
    title: "Industrial / Manufacturing / Automotive",
    tagline: "Priority #5 — quality, uptime, supply-chain visibility",
    whatSectorSells:
      "Physical products (cars, machines, chemicals). Germany’s industrial core. AI here is about quality, uptime, and supply-chain visibility.",
    coreProblems: [
      { problem: "Data quality, not data volume", plain: "~80% of industrial data is unused; context is the bottleneck.", evidence: "Siemens industrial AI narratives." },
      { problem: "Pilot-to-production in factories", plain: "Many AI investments deferred because pilots do not scale.", evidence: "Forrester/Siemens 2026." },
      { problem: "Predictive maintenance", plain: "Unplanned downtime costs millions per hour.", evidence: "Bosch AI across dozens of plants." },
      { problem: "Digital thread / data integrity", plain: "CAD → PLC → sensor data disconnected.", evidence: "Siemens Teamcenter Copilot narratives." },
      { problem: "Catena-X supply chain data", plain: "BMW-led open data ecosystem for automotive transparency.", evidence: "BMW Catena-X." },
      { problem: "Physical AI / battery production AI", plain: "Humanoids + EV battery quality control.", evidence: "BMW iFACTORY / Physical AI press." },
    ],
    companies: [
      { company: "BMW Group", location: "Munich; Leipzig Werk", specificProblem: "iFACTORY, AIQX quality, Physical AI, Catena-X.", myContribution: "Production analytics dashboards; quality KPIs." },
      { company: "Porsche", location: "Stuttgart; Leipzig Macan", specificProblem: "EV production; digital factory.", myContribution: "Local Werkstudent in quality/production analytics." },
      { company: "Siemens / Bosch", location: "Munich / Stuttgart", specificProblem: "Industrial foundation models, predictive maintenance, shopfloor agents.", myContribution: "Business-side analytics, not PLC deep specialist." },
      { company: "KnowFab / MAIA", location: "Leipzig", specificProblem: "Industrial data/AI startups.", myContribution: "Local entry; wear many hats." },
    ],
    regionalDepth: [
      { hub: "Leipzig", why: "BMW + Porsche plants + supplier ecosystem." },
      { hub: "Munich", why: "BMW HQ, Siemens HQ." },
      { hub: "Stuttgart", why: "Bosch, Porsche, Mercedes, suppliers." },
      { hub: "Wolfsburg / Ingolstadt", why: "VW / Audi." },
    ],
    myLoophole:
      "I do not aim to build Siemens Industrial Foundation Model. My angle is business-side analytics: supply-chain dashboards, quality reporting, production KPI tracking at BMW/Porsche Leipzig. Forest Guard connects to sustainability / Catena-X reporting.",
    skillsToDevelop: [
      { skill: "Manufacturing KPIs (OEE, yield, cycle time)", why: "Speak operations language", byWhen: "Self-study Sem 3" },
      { skill: "IoT data basics", why: "Extend Vital Guard into industrial framing", byWhen: "Sem 3" },
      { skill: "Power BI for operations dashboards", why: "Managers use dashboards, not notebooks", byWhen: "Sem 2–3" },
      { skill: "Catena-X awareness", why: "BMW ecosystem differentiator", byWhen: "Sem 4" },
    ],
    resources: [
      { name: "Siemens Industrial AI", url: "https://www.techcircle.in/2026/03/25/siemens-is-building-its-ai-bet-on-a-problem-the-industry-refuses-to-admit", useFor: "Industrial data context problem" },
      { name: "BMW iFACTORY", url: "https://www.bmwgroup.com/en/company/production.html", useFor: "Production AI" },
      { name: "Bosch AI Production", url: "https://mybusinessfuture.com/en/bosch-ai-zero-defect-production/", useFor: "Zero-defect AI" },
    ],
  },
  {
    id: "sp6",
    slug: "energy-greentech",
    priority: 6,
    title: "Energy / GreenTech",
    tagline: "Priority #6 — optional; forecasting + grid intelligence",
    whatSectorSells:
      "Electricity and gas in transition from fossil to renewable. AI for grid management, forecasting, and customer flexibility.",
    coreProblems: [
      { problem: "Grid congestion / Redispatch", plain: "More renewables = unpredictable supply; reroute power in real time.", evidence: "ZSW GridSage-style forecasting." },
      { problem: "Digital twin of the grid", plain: "Virtual replica for simulation and planning.", evidence: "E.ON investment narratives." },
      { problem: "Smart meter / customer data", plain: "Predict consumption; enable dynamic pricing.", evidence: "E.ON CIO AI acceleration stories." },
      { problem: "Renewable forecasting", plain: "Wrong forecast = grid instability.", evidence: "Neural forecasts for multi-hour horizons." },
      { problem: "Legacy IT + SAP migration", plain: "Migrate while running critical infrastructure.", evidence: "E.ON SAP digital backbone." },
    ],
    companies: [
      { company: "E.ON", location: "Essen, Munich, Berlin", specificProblem: "Digital twin, customer AI, grid AI, SAP migration.", myContribution: "Time-series forecasting; Forest Guard → environmental data angle." },
      { company: "EnBW", location: "Stuttgart", specificProblem: "Renewable expansion + grid digitalization.", myContribution: "Analytics on energy data." },
      { company: "Siemens Energy", location: "Munich", specificProblem: "Grid technology digitalization.", myContribution: "Data platform analytics." },
    ],
    regionalDepth: [
      { hub: "Stuttgart", why: "EnBW HQ." },
      { hub: "Essen/Ruhr", why: "E.ON HQ — traditional energy belt." },
      { hub: "Leipzig/Saxony", why: "Wind/solar expansion; ScaDS.AI climate research." },
      { hub: "Hamburg", why: "Renewable energy trading." },
    ],
    myLoophole:
      "Energy is smaller in Leipzig and often German C1+. Forest Guard is my GreenTech credential — extend toward renewable site monitoring or emissions tracking for thesis with E.ON/EnBW. Secondary sector unless a thesis lands here.",
    skillsToDevelop: [
      { skill: "Advanced time-series forecasting", why: "Energy is the ultimate time-series domain", byWhen: "Sem 3–4" },
      { skill: "Geospatial (extend Forest Guard)", why: "Satellite → site analysis", byWhen: "Sem 3" },
      { skill: "Energy market basics", why: "MW, grid levels, Redispatch vocabulary", byWhen: "Self-study" },
    ],
    resources: [
      { name: "E.ON Digital Backbone", url: "https://news.sap.com/2026/06/how-e-on-building-digital-backbone-energy-transition/", useFor: "SAP + energy digitalization" },
      { name: "E.ON CIO interview", url: "https://www.cio.de/article/4123568/eon-cio-ki-beschleunigt-arbeit-um-faktor-25.html", useFor: "AI acceleration in energy" },
      { name: "EnBW AGM 2026", url: "https://www.enbw.com/press/enbw-annual-general-meeting-2026.html", useFor: "Investment / transition" },
    ],
  },
];

export const leipzigTargets: LeipzigTarget[] = [
  { company: "DHL Hub Leipzig/Halle", sector: "Logistics", problem: "Agentic AI needs clean data; AI monitoring; demand forecasting for huge nightly volume.", howIContribute: "DevOps + ML pipeline skills; analytics dashboards.", loophole: "Most applicants chase Bonn HQ, not hub operations." },
  { company: "Deutsche Bahn Leipzig", sector: "Logistics", problem: "Delay prediction, Digital Track Buddy, SAP Argo, cybersecurity.", howIContribute: "ICE delay project = direct proof.", loophole: "Open-data project already built; extend to production." },
  { company: "BMW Werk Leipzig", sector: "Industrial", problem: "AIQX quality, Physical AI, EV battery production.", howIContribute: "Production analytics dashboards; IoT data.", loophole: "Factory Werkstudent — less competition than Munich HQ." },
  { company: "Porsche Werk Leipzig", sector: "Industrial", problem: "Macan production optimization; digital factory.", howIContribute: "Quality KPI reporting.", loophole: "Same local-plant advantage as BMW." },
  { company: "Spread Group", sector: "Retail", problem: "Print-on-demand forecasting; scheduling; personalization.", howIContribute: "SQL + Python + dashboards.", loophole: "HQ in Leipzig; English-friendly." },
  { company: "MAIA", sector: "Logistics/Industrial", problem: "AI for supply chain/manufacturing.", howIContribute: "Full-stack + ML; wear many hats.", loophole: "Startup speed; ScaDS.AI connected." },
  { company: "KnowFab", sector: "Industrial", problem: "Industrial data platform.", howIContribute: "Data pipeline + analytics.", loophole: "Local startup ecosystem." },
  { company: "deepmentation", sector: "Logistics/Software", problem: "Document AI for logistics/manufacturing.", howIContribute: "NLP + automation; DevOps.", loophole: "Niche = less competition." },
  { company: "BirdsView", sector: "Software/AI", problem: "AI analytics / marketing CRM.", howIContribute: "Data analysis.", loophole: "germanyy.ai listed local AI." },
  { company: "ORSOFT", sector: "Logistics", problem: "Supply-chain planning software (APS).", howIContribute: "SQL + supply-chain analytics.", loophole: "Established local Mittelstand." },
  { company: "ScaDS.AI Leipzig", sector: "Research", problem: "Trustworthy AI; transfer to industry.", howIContribute: "Thesis partnership; research Werkstudent.", loophole: "University connection." },
  { company: "SAP Leipzig", sector: "Software", problem: "SAP ecosystem support.", howIContribute: "SAP analytics.", loophole: "Global brand, local office." },
];

export const experienceMap: ExperienceMapRow[] = [
  {
    asset: "ICE Train Delay Prediction",
    problemSolved:
      "Built an XGBoost forecasting model on Deutsche Bahn operational and weather data, engineered features, and documented accuracy plus feature impact for scheduling value.",
    sector: "Maps to · Logistics · Problem A",
    demandEvidence:
      "DB is expanding AI in operations — this is my strongest direct proof for DB/DHL-style roles.",
  },
  {
    asset: "DevOps Intern — Moka Softwares",
    problemSolved:
      "Supported CI/CD, environments, deployments, React auth modules, and log monitoring so releases stay stable after the demo.",
    sector: "Maps to · All sectors · Problem A",
    demandEvidence:
      "Pilot-to-production is the core German AI gap; DHL monitoring and Zalando-style delivery need this discipline.",
  },
  {
    asset: "Engineering Intern — Biosoft",
    problemSolved:
      "Built React frontend and .NET Core REST APIs with SQL Server, auth flows, testing, and documentation with senior developers.",
    sector: "Maps to · Software / Consulting · delivery",
    demandEvidence:
      "Consulting and product teams hire people who can ship integrated features — not only analyse in notebooks.",
  },
  {
    asset: "Full-stack delivery stack",
    problemSolved:
      "React, Next.js, .NET, Python, TypeScript, and SQL — I turn analysis into dashboards, APIs, and stakeholder-ready tools.",
    sector: "Maps to · Problems A, B, E",
    demandEvidence:
      "Every data role still needs a clear path from raw data to a usable decision interface.",
  },
  {
    asset: "ForestGuard — satellite deforestation detection",
    problemSolved:
      "Led a five-person Agile team as Scrum Master; delivered an MVP across three sprints that detects forest loss from satellite imagery.",
    sector: "Maps to · GreenTech / Industrial · Problem E",
    demandEvidence:
      "Shows geospatial monitoring plus real delivery leadership — useful for sustainability and Catena-X-style stories.",
  },
  {
    asset: "Data Analysis Toolkit",
    problemSolved:
      "Built a modular Python toolkit and dashboard that automates cleaning, stats, and visualisation for reusable analysis pipelines.",
    sector: "Maps to · Retail / Consulting · Problem B",
    demandEvidence:
      "Matches Business/Data Analyst entry work: shorten raw data → insight → action.",
  },
  {
    asset: "Vital Guard — IoT fall detection",
    problemSolved:
      "Built an IoT wearable pipeline from motion sensors to caregiver alerts, with live location and false-alarm reduction.",
    sector: "Maps to · Industrial / IoT",
    demandEvidence:
      "Factory and logistics IoT problems use the same sensor → pipeline → alert thinking.",
  },
  {
    asset: "ML toolkit",
    problemSolved:
      "Practical ML with Pandas, Scikit-learn, XGBoost, TensorFlow, OpenCV, and NLP — forecasting, vision, and text.",
    sector: "Maps to · Problems A–D",
    demandEvidence:
      "REWE/DB-style forecasting and industrial vision use-cases show up repeatedly across my sectors.",
  },
  {
    asset: "M.Sc. Big Data & AI — SRH Leipzig",
    problemSolved:
      "Master's focus on Big Data, AI, ML, and Cloud — academic base in Leipzig with thesis partnership potential.",
    sector: "Maps to · All sectors · Leipzig base",
    demandEvidence:
      "German employers value a thesis tied to a real company problem; Leipzig supports that path.",
  },
  {
    asset: "Languages — English C1 · German B1→B2",
    problemSolved:
      "I can contribute in English-first teams now while I push German toward B2 for client-facing DE roles.",
    sector: "Maps to · Problem E · language gap",
    demandEvidence:
      "Many DE ads still want German B2; English unlocks Tier 2/3 and international teams first.",
  },
];

export const developmentPhases = [
  {
    id: "phase1",
    title: "Phase 1 — Sem 2 (Oct 2026 – Mar 2027): Close entry gaps",
    rows: [
      { skill: "Power BI (DAX, modelling)", target: "2 dashboards (logistics + retail)", why: "#1 BI tool in German ads" },
      { skill: "Azure fundamentals", target: "AZ-900 or DP-900 awareness", why: "Microsoft #1 cloud in DE enterprise" },
      { skill: "dbt basics", target: "One project with tests + docs", why: "Analytics Engineer standard by 2027" },
      { skill: "German B1 → B2", target: "Daily practice + business vocabulary", why: "Unlocks far more postings" },
      { skill: "Extend ICE project", target: "Pipeline + live dashboard", why: "Portfolio centrepiece for DB/DHL" },
    ],
  },
  {
    id: "phase2",
    title: "Phase 2 — Sem 3 (Apr – Sep 2027): Werkstudent-ready",
    rows: [
      { skill: "Werkstudent applications", target: "30+ Leipzig + remote-friendly", why: "Market entry" },
      { skill: "Business storytelling", target: "3 case studies written", why: "Interview differentiator" },
      { skill: "A/B testing + experiments", target: "One retail/logistics experiment", why: "Retail/consulting demand" },
      { skill: "AI monitoring basics", target: "One monitored model", why: "DHL production focus" },
      { skill: "EU AI Act overview", target: "1-page summary from official text", why: "New compliance category" },
    ],
  },
  {
    id: "phase3",
    title: "Phase 3 — Sem 4 / Thesis (Oct 2027 – Sep 2028): Specialise",
    rows: [
      { skill: "Company thesis", target: "DB, DHL, Spread Group, ScaDS.AI, or BMW Leipzig", why: "#1 hiring signal in Germany" },
      { skill: "Role depth", target: "Analytics Engineer OR Business/Data Analyst", why: "Specialise from Werkstudent experience" },
      { skill: "Agentic AI awareness", target: "One agent project + governance docs", why: "2028 market expects this" },
      { skill: "German B2 / B2+", target: "Professional working proficiency", why: "Full-time requirement" },
      { skill: "Full-time applications", target: "Start Sep 2028 pipeline", why: "Offer by graduation" },
    ],
  },
];

export const focusPriorities: FocusPriority[] = [
  { priority: 1, sector: "Logistics / Mobility", companies: "DHL Leipzig, Deutsche Bahn, MAIA", entryRole: "Analytics Engineer / Business Data Analyst", why: "Strongest project fit (ICE delay); DHL hub local; highest data intensity" },
  { priority: 2, sector: "Retail / E-commerce", companies: "Spread Group, REWE Digital, Zalando", entryRole: "Business/Data Analyst", why: "Analytics-native; REWE uses XGBoost; Spread Group local" },
  { priority: 3, sector: "Software / Consulting", companies: "SAP, Capgemini, Celonis", entryRole: "Analytics Consultant / Werkstudent", why: "Broadest entry; DevOps differentiator; SAP Leipzig" },
  { priority: 4, sector: "Industrial / Auto", companies: "BMW Leipzig, Porsche Leipzig, KnowFab", entryRole: "Production Analytics Werkstudent", why: "Local plants; IoT project fit" },
  { priority: 5, sector: "Banking / FinTech", companies: "N26, Trade Republic, Deutsche Bank", entryRole: "Data Analyst (governance)", why: "Higher bar; pursue if Berlin move" },
  { priority: 6, sector: "Energy / GreenTech", companies: "E.ON, EnBW", entryRole: "Data Analyst (forecasting)", why: "Forest Guard angle; secondary unless thesis lands here" },
];

export const problemPhaseResources: ProblemResource[] = [
  { name: "Deloitte ROI of AI Germany 2026", url: "https://www.deloitte.com/de/de/about/press-room/deutsche-unternehmen-optimieren-mit-kI,-transformieren-aber-noch-nicht.html", useFor: "Productivity paradox; skills gap", group: "macro" },
  { name: "KPMG GenAI Germany 2026", url: "https://kpmg.com/de/en/insights/digital-transformation/artificial-intelligence/study-generative-ai-in-the-german-economy-in-2026.html", useFor: "<1% full AI integration; AI Act impact", group: "macro" },
  { name: "SAP Value of AI Germany 2026", url: "https://news.sap.com/germany/files/2026/07/08/SAP-Value-of-AI-2026-Germany-1.pdf", useFor: "Low-quality AI outputs; governance gap", group: "macro" },
  { name: "Bitkom AI Adoption 2026", url: "https://oneagent.de/en/blog/bitkom-ai-adoption-2026", useFor: "AI Act help needed", group: "macro" },
  { name: "CANCOM/ServiceNow Mittelstand 2026", url: "https://newsroom.cancom.de/news/studie-von-cancom-und-servicenow-mittelstand-setzt-ai-produktiv-ein-doch-integration-sicherheit-und-governance-bremsen-die-skalierung", useFor: "Integration vs usage gap", group: "macro" },
  { name: "WEF Future of Jobs 2025", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/", useFor: "Macro skill trends", group: "macro" },
  { name: "PwC AI Jobs Barometer", url: "https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html", useFor: "Professionalised vs democratised roles", group: "macro" },
  { name: "EU AI Act official", url: "https://artificialintelligenceact.eu/", useFor: "Regulatory timeline", group: "macro" },
  { name: "DB Interim Report 2026", url: "https://zbir.deutschebahn.com/2026/en/interim-group-management-report-unaudited/digitalization-and-technology/digitalization/", useFor: "Logistics digitalization", group: "sector" },
  { name: "DHL Data & AI", url: "https://aimagazine.com/news/sabine-mueller-dhl-data-ai-rewires-intelligent-logistics", useFor: "Logistics AI", group: "sector" },
  { name: "Zalando / Databricks", url: "https://www.databricks.com/blog/how-zalando-built-unified-data-foundation-ai-and-analytics-databricks", useFor: "Retail data foundation", group: "sector" },
  { name: "McKinsey REWE AI", url: "https://www.mckinsey.com/industries/retail/our-insights/preparing-for-agentic-commerce-rewes-ai-transformation", useFor: "Agentic commerce", group: "sector" },
  { name: "Deutsche Bank Tech", url: "https://www.db.com/what-we-do/focus-topics/tech/index?language_id=1", useFor: "Banking AI", group: "sector" },
  { name: "Siemens Industrial AI", url: "https://www.techcircle.in/2026/03/25/siemens-is-building-its-ai-bet-on-a-problem-the-industry-refuses-to-admit", useFor: "Industrial data quality", group: "sector" },
  { name: "BMW iFACTORY", url: "https://www.bmwgroup.com/en/company/production.html", useFor: "Industrial production AI", group: "sector" },
  { name: "E.ON Digital Backbone", url: "https://news.sap.com/2026/06/how-e-on-building-digital-backbone-energy-transition/", useFor: "Energy digitalization", group: "sector" },
  { name: "ScaDS.AI Leipzig", url: "https://scads.ai/", useFor: "Thesis / research partner", group: "leipzig" },
  { name: "DHL Hub Leipzig", url: "https://group.dhl.com/en/media-relations/press-releases/2024/dhl-extends-partnership-with-mitteldeutsche-flughafen-ag-until-2053.html", useFor: "Local logistics anchor", group: "leipzig" },
  { name: "Data Week Leipzig", url: "https://scads.ai/scads-ai-at-data-week-leipzig-2026/", useFor: "Networking", group: "leipzig" },
  { name: "Startup Mitteldeutschland", url: "https://startup-mitteldeutschland.de/", useFor: "Local startups", group: "leipzig" },
  { name: "germanyy.ai Leipzig", url: "https://germanyy.ai/", useFor: "Local AI directory", group: "leipzig" },
  { name: "Entgeltatlas", url: "https://web.arbeitsagentur.de/entgeltatlas/", useFor: "Official salary data", group: "career" },
  { name: "Make it in Germany", url: "https://www.make-it-in-germany.com/", useFor: "Visa / Blue Card", group: "career" },
  { name: "StepStone Gehaltsreport", url: "https://www.stepstone.de/gehalt/", useFor: "Market salary benchmarks", group: "career" },
];

export function getCrossSectorProblem(slug: string) {
  return crossSectorProblems.find((p) => p.slug === slug);
}

export function getSectorProblemDeepDive(slug: string) {
  return sectorProblemDeepDives.find((s) => s.slug === slug);
}
