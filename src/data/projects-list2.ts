import type { ProjectItem } from "./projects";

export const list2Projects: ProjectItem[] = [
  {
    id: "ALT-C01",
    slug: "alt-c01",
    list: 2,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "PoC Graveyard Analytics — Pilot Kill vs Scale Decision Dashboard",
    question:
      "Which AI/analytics pilots should be killed vs scaled, and what criteria justify each decision?",
    research:
      "The pilot-to-production gap is the consulting delivery problem: KPMG and Deloitte keep reporting that integration is rare, so leadership needs a kill-versus-scale gate.",
    skills: [
      "SQL portfolio tracking",
      "Power BI stage-gate dashboard",
      "business case framing",
      "ROI literacy",
    ],
    technical:
      "A pilot portfolio of stage, cost, KPI, and owner scored through a stage-gate model and a kill-versus-scale dashboard.",
    business:
      "A prioritised decision pack that states which pilots scale, which stop, and why.",
    dataNote:
      "Documented synthetic pilot portfolio calibrated to public SAP and KPMG AI-integration findings.",
    sources: [],
    targets: [
      "Capgemini",
      "Accenture",
      "Deloitte",
      "SAP",
      "Atos",
      "Sopra Steria",
    ],
    problems: ["A"],
    weight: 3,
  },
  {
    id: "ALT-C02",
    slug: "alt-c02",
    list: 2,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "AI Output Rework Rate Scorecard for Business Users",
    question:
      "Which teams lose the most time fixing low-quality AI outputs, and where should governance or training go first?",
    research:
      "SAP Value of AI Germany reports widespread rework from low-quality AI outputs — the AI Business Analyst brief is to measure that cost by team.",
    skills: [
      "quality rubric design",
      "Power BI team scorecards",
      "applied AI literacy",
      "stakeholder storytelling",
    ],
    technical:
      "A quality rubric and rework log turned into team scorecards that show where AI output burns hours.",
    business:
      "A governance or training recommendation that names the first teams to fix.",
    dataNote:
      "Public SAP AI-quality findings plus a structured rework-log template that is fully documented.",
    sources: [],
    targets: [
      "SAP",
      "Siemens",
      "LVMH digital",
      "Deutsche Telekom",
      "consulting AI practices",
    ],
    problems: ["B"],
    weight: 3,
  },
  {
    id: "ALT-C03",
    slug: "alt-c03",
    list: 2,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "ERP Customization Debt Quantifier",
    question:
      "How much SAP customization debt blocks S/4 migration, and which modules should be standardised first?",
    research:
      "EU S/4HANA programmes run for years because Z-code and custom modules block a standard cutover. Debt has to be counted before it can be retired.",
    skills: [
      "SQL module inventory analysis",
      "Power BI debt heatmap",
      "SAP literacy",
      "process thinking",
    ],
    technical:
      "A customization register of module, Z-code count, and upgrade risk turned into a debt heatmap.",
    business:
      "A standardisation sequence that names which modules to clean first so migration can proceed.",
    dataNote:
      "Simulated customization register with SAP module documentation used for KPI definitions.",
    sources: [],
    targets: [
      "Capgemini",
      "T-Systems",
      "Accenture",
      "SAP",
      "IBM",
      "SNCF / E.ON-style ERP programmes",
    ],
    problems: ["F"],
    weight: 2,
  },
  {
    id: "ALT-C04",
    slug: "alt-c04",
    list: 2,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "Internal Analytics Tool Adoption Funnel",
    question:
      "Where do business users drop off before trusting internal dashboards, and what drives adoption?",
    research:
      "The translation and adoption gap in PwC’s professionalised-versus-democratised split: a dashboard that nobody returns to is not a decision tool.",
    skills: [
      "funnel SQL",
      "Power BI adoption KPIs",
      "cohort views",
      "change-management storytelling",
    ],
    technical:
      "Usage events from login through view, export, and decision, then cohort and drop-off views.",
    business:
      "An adoption brief that names the drop-off step and the change that should recover trust.",
    dataNote:
      "Documented synthetic usage events on a GA-style schema: login, view, export, decision.",
    sources: [],
    targets: [
      "Zalando",
      "Booking.com",
      "Spotify",
      "Klarna",
      "REWE Digital",
      "ING",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-C05",
    slug: "alt-c05",
    list: 2,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "Cross-Border KPI Definition Harmonizer (EU Subsidiaries)",
    question:
      "Why do country subsidiaries report different revenue figures, and which definition should HQ adopt?",
    research:
      "Multi-entity EU enterprises live with metric silos: the same revenue word, different grain, filters, and FX treatment.",
    skills: [
      "SQL reconciliation",
      "metric dictionary authoring",
      "Power BI harmonised executive view",
      "data governance",
    ],
    technical:
      "Multi-country revenue tables reconciled to one official definition, then a harmonised HQ view.",
    business:
      "A metric charter that states which revenue definition HQ adopts and why the others are retired.",
    dataNote:
      "Eurostat corporate-reporting context plus simulated multi-country revenue tables with intentional definitional drift.",
    sources: [],
    targets: [
      "Carrefour",
      "Ahold",
      "Lidl / Schwarz",
      "Siemens",
      "Unilever",
      "SAP multinational clients",
    ],
    problems: ["B"],
    weight: 3,
  },
  {
    id: "ALT-C06",
    slug: "alt-c06",
    list: 2,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "GenAI Use-Case Backlog Prioritization Engine",
    question:
      "Which GenAI use cases deserve funding first based on value, risk, data readiness, and EU AI Act class?",
    research:
      "Agentic-AI programmes need a scored backlog: value, risk, data readiness, and Act class — not a list of demos.",
    skills: [
      "weighted scoring models",
      "Power BI prioritisation matrix",
      "EU AI Act literacy",
      "business case writing",
    ],
    technical:
      "A scored GenAI backlog using value, risk, data readiness, and EU AI Act class, then a prioritisation matrix.",
    business:
      "A funding recommendation that names the first use cases and the ones that stay on paper.",
    dataNote:
      "EU AI Act risk categories and public company GenAI initiatives, scored on a documented template.",
    sources: [
      { name: "EU AI Act", url: "https://artificialintelligenceact.eu/" },
    ],
    targets: ["SAP", "Capgemini", "Deloitte", "BMW", "ASML", "Adyen"],
    problems: ["C", "D"],
    weight: 3,
  },
  {
    id: "ALT-C07",
    slug: "alt-c07",
    list: 2,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "SI RFP Data Maturity Pre-Screen Scorecard",
    question:
      "Before bidding, is the client’s data mature enough for analytics/AI delivery — and what pre-work must be priced in?",
    research:
      "Consulting delivery fails when the RFP assumes clean data. A pre-screen on lineage, quality, ownership, and SLA belongs in the bid price.",
    skills: [
      "maturity rubric design",
      "Power BI RFP readiness dashboard",
      "client-facing communication",
    ],
    technical:
      "A data-maturity rubric (lineage, quality, ownership, SLA) applied as an RFP readiness scorecard.",
    business:
      "A bid brief that states which pre-work must be priced before analytics or AI delivery starts.",
    dataNote:
      "Public SI RFP criteria patterns plus a documented data-maturity framework.",
    sources: [],
    targets: [
      "Capgemini",
      "Accenture",
      "CGI",
      "Devoteam",
      "Netcompany",
      "Reply",
    ],
    problems: ["B", "A"],
    weight: 2,
  },
  {
    id: "ALT-C08",
    slug: "alt-c08",
    list: 2,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "Digital Twin Readiness Gap Assessment",
    question:
      "Which factory/plant processes are ready for a digital twin vs which need data fixes first?",
    research:
      "Industry 4.0 and E.ON / Siemens digital-twin narratives stall on data readiness: a twin on broken tags is another pilot.",
    skills: [
      "readiness scoring",
      "Power BI gap radar",
      "industrial domain vocabulary",
      "recommendation writing",
    ],
    technical:
      "Score plant processes on data readiness for a digital twin and plot the gaps on a radar.",
    business:
      "A sequenced plan that names which processes can twin now and which need data fixes first.",
    dataNote:
      "Plattform Industrie 4.0 maturity references plus a scored plant checklist template.",
    sources: [],
    targets: [
      "Siemens",
      "Bosch",
      "ABB",
      "Schneider Electric",
      "Capgemini manufacturing practice",
    ],
    problems: ["A", "B"],
    weight: 2,
  },
  {
    id: "ALT-L01",
    slug: "alt-l01",
    list: 2,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Empty Miles Ratio Benchmark (European Road Freight)",
    question:
      "What share of km are empty runs, and which lanes or carriers should be rebalanced first?",
    research:
      "Road-freight margins and decarbonisation both sit on empty kilometres: the first decision is which lane or carrier to rebalance.",
    skills: [
      "geospatial SQL",
      "route KPI logic",
      "Power BI carrier / lane benchmarks",
      "sustainability metrics",
    ],
    technical:
      "GPS and network context turned into an empty-miles ratio by lane and carrier, then a rebalancing benchmark.",
    business:
      "A lane-and-carrier list that states where empty runs should be cut first.",
    dataNote:
      "TUM fleet GPS traces and OpenStreetMap Europe extracts for empty-run measurement.",
    sources: [
      { name: "Zenodo TUM fleet GPS", url: "https://zenodo.org/records/16411298" },
      { name: "Geofabrik Europe", url: "https://download.geofabrik.de/europe/" },
    ],
    targets: [
      "DHL",
      "DB Schenker",
      "DSV",
      "Kühne+Nagel",
      "sennder",
      "Forto",
    ],
    problems: ["E"],
    weight: 3,
  },
  {
    id: "ALT-L02",
    slug: "alt-l02",
    list: 2,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Rail vs Road Modal Shift Emissions & Cost Comparator",
    question:
      "For which EU corridors does shifting freight from road to rail cut cost and CO₂ without breaking lead-time SLAs?",
    research:
      "EU Green Deal freight is a corridor decision: rail only wins where cost and carbon fall without breaking the SLA.",
    skills: [
      "scenario modelling in SQL",
      "Power BI modal comparison",
      "emissions proxy calculations",
    ],
    technical:
      "Corridor scenarios that compare road versus rail on cost, CO₂ proxy, and lead-time SLA.",
    business:
      "A corridor shortlist where modal shift is allowed — and where road must stay.",
    dataNote:
      "EU transport statistics and Fraunhofer IML emission-factor references, plus documented lane assumptions.",
    sources: [
      { name: "Fraunhofer IML REFF", url: "https://reff.iml.fhg.de/" },
    ],
    targets: [
      "DB Cargo",
      "SNCF Fret",
      "ÖBB",
      "Lineas",
      "Kühne+Nagel",
      "Maersk intermodal",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-L03",
    slug: "alt-l03",
    list: 2,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "EU Customs Clearance Delay Attribution Dashboard",
    question:
      "Which border/customs steps cause the most delay in EU cross-border freight, and where should process investment go?",
    research:
      "Cross-border freight is exception work: delay lives in a clearance step, not in a generic “border” label.",
    skills: [
      "SQL delay attribution",
      "Power BI process funnel",
      "Pareto root-cause views",
      "ops storytelling",
    ],
    technical:
      "Customs milestones as a delay funnel with Pareto root-cause views by step and crossing.",
    business:
      "A process-investment brief that names the clearance step that should be funded first.",
    dataNote:
      "EU trade and border-wait open data where available, plus a documented customs-milestone simulation.",
    sources: [],
    targets: [
      "DHL",
      "DB Schenker",
      "Kühne+Nagel",
      "Flexport",
      "CEVA",
      "Amazon EU logistics",
    ],
    problems: ["D"],
    weight: 2,
  },
  {
    id: "ALT-L04",
    slug: "alt-l04",
    list: 2,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Cold Chain Temperature Excursion Root-Cause Tree",
    question:
      "What causes cold-chain temperature breaches, and which lanes or handlers drive the most spoilage risk?",
    research:
      "Cold-chain sensor quality is a trust problem: an excursion without lane and handler context cannot be fixed.",
    skills: [
      "time-series SQL",
      "threshold rules",
      "Power BI excursion tree",
      "quality KPI definitions",
    ],
    technical:
      "Temperature-logger series scored against thresholds and attributed to lane and handler in a root-cause tree.",
    business:
      "A spoilage-risk brief that names which lanes or handlers to change first.",
    dataNote:
      "Public cold-chain IoT research sets or a documented temperature-logger file with lane metadata.",
    sources: [],
    targets: [
      "DHL cold chain",
      "Kühne+Nagel",
      "REWE",
      "Carrefour",
      "Maersk cold logistics",
    ],
    problems: ["B"],
    weight: 2,
  },
  {
    id: "ALT-L05",
    slug: "alt-l05",
    list: 2,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Low-Emission Zone Delivery Compliance Tracker",
    question:
      "Which delivery routes breach EU low-emission zone rules, and what is the cost of non-compliance vs rerouting?",
    research:
      "EU urban mobility rules turn last-mile routes into a compliance KPI: breach cost versus reroute cost is the decision.",
    skills: [
      "geospatial joins",
      "compliance rule SQL",
      "Power BI zone breach map",
      "policy trade-off narrative",
    ],
    technical:
      "Routes joined to low-emission-zone boundaries, then breach flags and a cost comparison versus rerouting.",
    business:
      "A routing policy that states where compliance cost exceeds reroute cost — and the reverse.",
    dataNote:
      "OpenStreetMap LEZ boundaries, EU city open data, and OSM routing context.",
    sources: [
      { name: "Geofabrik Europe", url: "https://download.geofabrik.de/europe/" },
    ],
    targets: [
      "DHL",
      "DPD",
      "GLS",
      "PostNL",
      "Instabee",
      "Amazon Last Mile EU",
    ],
    problems: ["C", "E"],
    weight: 2,
  },
  {
    id: "ALT-L06",
    slug: "alt-l06",
    list: 2,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Maritime Lane Reliability Index (Asia–EU Corridors)",
    question:
      "Which shipping lanes to Europe are least reliable, and what buffer stock should planners hold?",
    research:
      "Asia–EU corridors and port congestion decide buffer stock: reliability has to be a lane KPI, not a quarterly anecdote.",
    skills: [
      "lane KPI SQL",
      "reliability indices",
      "Power BI corridor dashboard",
      "supply planner language",
    ],
    technical:
      "Transit-time and port statistics turned into a lane reliability index and a buffer-stock view.",
    business:
      "A planner brief that names the least reliable lanes and the buffer they justify.",
    dataNote:
      "Hamburg and Rotterdam port statistics, EU maritime open data, and public transit-time benchmarks.",
    sources: [
      {
        name: "Hafen Hamburg Statistics",
        url: "https://www.hafen-hamburg.de/en/statistics/",
      },
      { name: "data.europa.eu", url: "https://data.europa.eu/" },
    ],
    targets: [
      "Maersk",
      "Hapag-Lloyd",
      "CMA CGM",
      "Kühne+Nagel",
      "Flexport",
      "DB Schenker",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-L07",
    slug: "alt-l07",
    list: 2,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Freight CO₂ per Ton-Km CSRD Reporting Dashboard",
    question:
      "What is CO₂ intensity per ton-km by lane and carrier, and where should CSRD logistics reporting improve?",
    research:
      "CSRD turned logistics emissions into a reporting control: intensity per ton-km has to be lane- and carrier-specific.",
    skills: [
      "emissions factor calculations",
      "SQL intensity KPIs",
      "Power BI CSRD-style views",
      "ESG vocabulary",
    ],
    technical:
      "Shipment activity joined with emission factors to produce CO₂ per ton-km by lane and carrier.",
    business:
      "A CSRD-ready intensity pack that names where reporting and carrier choice should change.",
    dataNote:
      "Fraunhofer IML emission factors and a fleet or shipment set suitable for intensity KPIs.",
    sources: [
      { name: "Fraunhofer IML REFF", url: "https://reff.iml.fhg.de/" },
    ],
    targets: [
      "DHL",
      "DB Schenker",
      "Maersk",
      "DSV",
      "BMW / Catena-X sustainability programmes",
    ],
    problems: ["C"],
    weight: 3,
  },
  {
    id: "ALT-L08",
    slug: "alt-l08",
    list: 2,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Disruption Contingency Capacity Planner (Strike / Weather Scenarios)",
    question:
      "If rail or port disruption hits, where does network capacity break first and what contingency plan minimises delay cost?",
    research:
      "DB and SNCF disruption practice: a war-room plan only works if the first break-point and its delay cost are already modelled.",
    skills: [
      "scenario SQL",
      "capacity models",
      "Power BI contingency views",
      "executive briefing writing",
    ],
    technical:
      "Strike and weather scenarios run through a network capacity model to find the first break-point and delay cost.",
    business:
      "A contingency brief that states where capacity breaks first and which reroute or buffer minimises delay cost.",
    dataNote:
      "Bahn-Vorhersage open rail data, DWD weather, and documented disruption scenarios.",
    sources: [
      { name: "Bahn-Vorhersage open data", url: "https://bahnvorhersage.de/open-data/" },
      { name: "DWD Open Data", url: "https://opendata.dwd.de/" },
    ],
    targets: [
      "Deutsche Bahn",
      "SNCF",
      "ÖBB",
      "NS",
      "DHL",
      "Kühne+Nagel control-tower analytics",
    ],
    problems: ["A", "E"],
    weight: 2,
  },
  {
    id: "ALT-R01",
    slug: "alt-r01",
    list: 2,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Agentic Commerce Readiness Scorecard",
    question:
      "Is the organisation ready for agentic commerce (AI agents buying on behalf of customers), and what gaps block it?",
    research:
      "Deloitte agentic retail, McKinsey on REWE, and Otto’s AI-first work: agents fail without data, process, governance, and consent readiness.",
    skills: [
      "readiness rubric design",
      "Power BI maturity scorecard",
      "process + data gap analysis",
      "storytelling",
    ],
    technical:
      "A readiness rubric across data, process, governance, and consent, then a maturity scorecard.",
    business:
      "A gap list that states what must be fixed before agentic commerce is allowed to buy.",
    dataNote:
      "Public agentic-commerce reports plus a scored readiness template that is fully documented.",
    sources: [],
    targets: [
      "REWE",
      "Otto Group",
      "Zalando",
      "Carrefour",
      "Ahold",
      "Klarna",
    ],
    problems: ["D"],
    weight: 3,
  },
  {
    id: "ALT-R02",
    slug: "alt-r02",
    list: 2,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Dynamic Pricing Guardrail Breach Monitor",
    question:
      "When does dynamic pricing break commercial guardrails (margin floor, brand parity), and where should pricing ops intervene?",
    research:
      "Dynamic pricing is a Decision Scientist control problem: margin floor and brand parity are rules, not a model score.",
    skills: [
      "SQL price–volume logic",
      "rule-based breach flags",
      "Power BI alert dashboard",
      "policy scenario analysis",
    ],
    technical:
      "Price and volume series scored against documented guardrails, then an alert dashboard for pricing ops.",
    business:
      "An intervention list that names when pricing must stop or revert to hold margin and brand parity.",
    dataNote:
      "Rossmann and Online Retail II series plus documented margin-floor and parity rules.",
    sources: [
      {
        name: "Rossmann Store Sales",
        url: "https://www.kaggle.com/competitions/rossmann-store-sales",
      },
      {
        name: "UCI Online Retail II",
        url: "https://archive.ics.uci.edu/ml/datasets/Online+Retail+II",
      },
    ],
    targets: [
      "Zalando",
      "Otto",
      "Amazon EU",
      "Tesco",
      "Carrefour",
      "Inditex",
    ],
    problems: ["E"],
    weight: 3,
  },
  {
    id: "ALT-R03",
    slug: "alt-r03",
    list: 2,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Cross-Border VAT Checkout Abandonment Funnel",
    question:
      "Where do EU shoppers abandon checkout because of VAT/duty friction, and what change recovers conversion?",
    research:
      "Cross-border e-commerce conversion dies at VAT and duty, not at the product page. The funnel has to name the step.",
    skills: [
      "funnel SQL",
      "Power BI step drop-off",
      "checkout journey analysis",
      "commercial recommendation writing",
    ],
    technical:
      "A checkout funnel with VAT and duty steps isolated, then drop-off by market.",
    business:
      "A conversion recommendation that names the checkout change most likely to recover abandoned baskets.",
    dataNote:
      "Online Retail II as a journey proxy, Eurostat cross-border e-commerce stats, and documented checkout steps.",
    sources: [
      {
        name: "UCI Online Retail II",
        url: "https://archive.ics.uci.edu/ml/datasets/Online+Retail+II",
      },
    ],
    targets: [
      "Zalando",
      "ASOS",
      "About You",
      "Amazon EU",
      "Adyen",
      "Stripe",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-R04",
    slug: "alt-r04",
    list: 2,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Packaging Waste Cost per Order Dashboard",
    question:
      "Which categories drive the highest packaging cost and waste per order, and where can packaging policy change?",
    research:
      "EU Green Deal and CSRD-adjacent retail work: packaging cost and waste per order are category decisions, not a warehouse footnote.",
    skills: [
      "unit economics SQL",
      "Power BI cost-per-order views",
      "sustainability KPIs",
      "policy scenarios",
    ],
    technical:
      "Orders and categories joined to packaging cost and waste factors, then policy scenarios.",
    business:
      "A packaging-policy recommendation that names the categories to change first.",
    dataNote:
      "Online Retail II order and category grain plus documented EU packaging-waste benchmarks.",
    sources: [
      {
        name: "UCI Online Retail II",
        url: "https://archive.ics.uci.edu/ml/datasets/Online+Retail+II",
      },
    ],
    targets: [
      "Zalando",
      "H&M Group",
      "Otto",
      "Unilever retail partners",
      "Schwarz Group",
    ],
    problems: ["C", "E"],
    weight: 2,
  },
  {
    id: "ALT-R05",
    slug: "alt-r05",
    list: 2,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Flash Sale Inventory Burn Rate Monitor",
    question:
      "During flash events, which SKUs burn too fast vs too slow, and how should allocation change mid-event?",
    research:
      "Flash events are live decisioning: burn rate has to be visible mid-event or allocation stays yesterday’s plan.",
    skills: [
      "real-time-style SQL aggregates",
      "Power BI burn-rate visuals",
      "inventory KPI logic",
    ],
    technical:
      "Intraday-style aggregates of inventory burn by SKU, then a mid-event allocation view.",
    business:
      "An allocation change that moves stock from slow SKUs to SKUs burning through too fast.",
    dataNote:
      "M5 daily granularity and Online Retail II as the public flash-event proxies.",
    sources: [
      {
        name: "M5 Forecasting",
        url: "https://www.kaggle.com/c/m5-forecasting-accuracy/data",
      },
      {
        name: "UCI Online Retail II",
        url: "https://archive.ics.uci.edu/ml/datasets/Online+Retail+II",
      },
    ],
    targets: ["Zalando", "About You", "Veepee", "Amazon EU", "ASOS"],
    problems: ["A"],
    weight: 2,
  },
  {
    id: "ALT-R06",
    slug: "alt-r06",
    list: 2,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Private Label Launch Cannibalization Radar",
    question:
      "When launching private label, which existing branded SKUs lose volume, and is net category revenue positive?",
    research:
      "Category management: a private-label launch is only a win if net category revenue rises after branded volume moves.",
    skills: [
      "SQL cannibalisation logic",
      "Power BI launch radar",
      "incrementality framing",
      "category manager language",
    ],
    technical:
      "Pre- and post-launch periods compared for branded volume loss versus private-label gain, then a net-category view.",
    business:
      "A go / iterate / stop recommendation for the launch based on net category revenue.",
    dataNote:
      "Rossmann assortment as a proxy plus a documented launch scenario file with pre/post periods.",
    sources: [
      {
        name: "Rossmann Store Sales",
        url: "https://www.kaggle.com/competitions/rossmann-store-sales",
      },
    ],
    targets: [
      "Schwarz / Lidl",
      "REWE",
      "Carrefour",
      "Ahold",
      "Tesco",
      "dm",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-R07",
    slug: "alt-r07",
    list: 2,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Store Labour Hours vs Footfall Mismatch Analyzer",
    question:
      "Are labour hours aligned with store traffic patterns, and where is overscheduling eroding margin?",
    research:
      "Store ops margin is hours versus traffic: overscheduling is a visible cost once the join exists.",
    skills: [
      "SQL schedule vs traffic joins",
      "Power BI mismatch heatmaps",
      "labour productivity KPIs",
    ],
    technical:
      "Shift hours joined to store-day traffic (sales as proxy) and plotted as a mismatch heatmap.",
    business:
      "A labour-plan change that names stores and dayparts where hours should move.",
    dataNote:
      "Rossmann store-day series as a traffic proxy, plus a documented shift-hour simulation.",
    sources: [
      {
        name: "Rossmann Store Sales",
        url: "https://www.kaggle.com/competitions/rossmann-store-sales",
      },
    ],
    targets: [
      "REWE",
      "Carrefour",
      "Tesco",
      "Ahold",
      "Schwarz Group",
      "Coop (CH)",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-R08",
    slug: "alt-r08",
    list: 2,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Marketplace Seller Trust & SLA Breach Scorecard",
    question:
      "Which marketplace sellers breach SLA most often, and what enforcement or onboarding change reduces customer harm?",
    research:
      "Marketplace exception ops: late ship, cancel, and dispute rates are trust metrics, not a seller-success slide.",
    skills: [
      "SQL seller scorecards",
      "SLA KPI definitions",
      "Power BI breach ranking",
      "ops policy recommendations",
    ],
    technical:
      "Seller logs scored on late ship, cancel, and dispute rates, then a breach ranking.",
    business:
      "An enforcement or onboarding change that targets the sellers causing the most customer harm.",
    dataNote:
      "A documented marketplace seller log plus public marketplace SLA frameworks.",
    sources: [],
    targets: [
      "Amazon EU",
      "Zalando Partner Program",
      "Bol.com",
      "Allegro",
      "eBay EU",
    ],
    problems: ["B", "D"],
    weight: 2,
  },
  {
    id: "ALT-B01",
    slug: "alt-b01",
    list: 2,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "EU AI Act High-Risk Use-Case Documentation Gap Tracker",
    question:
      "Which banking AI use cases are high-risk under the EU AI Act and lack required documentation before deployment?",
    research:
      "Banking is the high-pressure Act sector: credit, fraud, and AML use cases need an inventory and a documentation gap view before go-live.",
    skills: [
      "EU AI Act mapping",
      "inventory SQL",
      "Power BI compliance gap views",
      "risk communication",
    ],
    technical:
      "Banking AI use cases mapped to Act risk class and a documentation checklist, then a gap dashboard.",
    business:
      "A deployment gate that names which high-risk cases cannot ship until documentation is closed.",
    dataNote:
      "Official EU AI Act text plus public bank and fintech AI case descriptions on a documented checklist.",
    sources: [
      { name: "EU AI Act", url: "https://artificialintelligenceact.eu/" },
    ],
    targets: [
      "N26",
      "ING",
      "BNP Paribas",
      "Deutsche Bank",
      "Adyen",
      "Solaris",
    ],
    problems: ["C"],
    weight: 3,
  },
  {
    id: "ALT-B02",
    slug: "alt-b02",
    list: 2,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "BNPL Regulatory Cap Scenario Stress Dashboard",
    question:
      "If EU BNPL rules tighten caps/affordability checks, which customer segments and products are most exposed?",
    research:
      "FinTech regulation is a scenario decision: a tighter cap has to show segment and product exposure before product changes it.",
    skills: [
      "SQL scenario modelling",
      "Power BI stress views",
      "portfolio exposure KPIs",
      "policy narrative",
    ],
    technical:
      "A BNPL-style portfolio stressed under tighter caps and affordability checks, then exposure by segment and product.",
    business:
      "A product brief that names which segments and products are most exposed if the rules tighten.",
    dataNote:
      "German Credit as a behaviour proxy, a documented BNPL portfolio simulation, and public consultation papers.",
    sources: [
      {
        name: "UCI German Credit",
        url: "https://archive.ics.uci.edu/ml/datasets/statlog+(german+credit+data)",
      },
    ],
    targets: [
      "Klarna",
      "N26",
      "Trade Republic",
      "Scalable Capital",
      "ING",
      "Bunq",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-B03",
    slug: "alt-b03",
    list: 2,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "Cross-Border FX Fee Transparency Comparator",
    question:
      "How opaque are FX/fees across EU payment paths, and where should product simplify pricing?",
    research:
      "Open-finance trust is a fee-transparency problem: consumers cannot compare paths if the all-in cost is hidden.",
    skills: [
      "fee comparison SQL",
      "Power BI transparency index",
      "product analytics storytelling",
    ],
    technical:
      "Published fee schedules and ECB payment context turned into an all-in FX transparency index.",
    business:
      "A product recommendation that names where pricing should be simplified first.",
    dataNote:
      "ECB payment statistics and published bank or fintech fee schedules in a documented comparison matrix.",
    sources: [
      {
        name: "ECB Payment Statistics",
        url: "https://www.ecb.europa.eu/stats/payments/",
      },
    ],
    targets: ["Wise", "Revolut", "N26", "ING", "Adyen", "Stripe"],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-B04",
    slug: "alt-b04",
    list: 2,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "Banking App Feature Rollout Adoption Curve",
    question:
      "After launching a new app feature, where do users drop off and what drives sustained adoption?",
    research:
      "Digital product adoption under agentic-banking UX: install-to-repeat-use is the production metric, not launch-day installs.",
    skills: [
      "event funnel SQL",
      "cohort Power BI",
      "feature adoption KPIs",
      "product analyst communication",
    ],
    technical:
      "App events from install through activate and repeat use, then cohort curves and drop-off steps.",
    business:
      "A product change that names the step that kills sustained adoption.",
    dataNote:
      "Documented synthetic app events plus public fintech UX benchmarks.",
    sources: [],
    targets: [
      "N26",
      "Revolut",
      "Trade Republic",
      "ING",
      "Bunq",
      "EU neobanks",
    ],
    problems: ["A"],
    weight: 2,
  },
  {
    id: "ALT-B05",
    slug: "alt-b05",
    list: 2,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "Merchant Chargeback Reason Code Pareto",
    question:
      "Which chargeback reasons dominate losses, and what merchant rule change reduces dispute volume?",
    research:
      "Adyen and Stripe merchant analytics are exception ops: reason codes decide which merchant rule to change.",
    skills: [
      "SQL reason-code Pareto",
      "Power BI merchant views",
      "loss KPI tracking",
      "ops recommendations",
    ],
    technical:
      "Chargeback-style events remapped to reason codes, then a Pareto and merchant view.",
    business:
      "A merchant-rule change that targets the reason codes driving the most loss.",
    dataNote:
      "ULB fraud rows remapped to reason-code categories plus a documented merchant-dispute simulation.",
    sources: [
      {
        name: "ULB Credit Card Fraud",
        url: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud",
      },
    ],
    targets: [
      "Adyen",
      "Stripe",
      "Mollie",
      "N26",
      "Deutsche Bank merchant services",
    ],
    problems: ["D"],
    weight: 2,
  },
  {
    id: "ALT-B06",
    slug: "alt-b06",
    list: 2,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "Open Finance Consent Journey Drop-off Analytics",
    question:
      "Where do users abandon open-banking consent flows, and which step kills conversion?",
    research:
      "PSD2 consent is both a quality and a governance lifecycle: an abandoned step is a blocked feed.",
    skills: [
      "journey funnel SQL",
      "consent KPI definitions",
      "Power BI drop-off dashboard",
      "regulatory-aware reporting",
    ],
    technical:
      "Consent-journey steps as a funnel with drop-off and expiry KPIs.",
    business:
      "A conversion brief that names the consent step to redesign first.",
    dataNote:
      "Open Banking schema as the reference contract plus a documented synthetic consent-journey file.",
    sources: [
      {
        name: "Open Banking Standards",
        url: "https://standards.openbanking.org.uk/",
      },
    ],
    targets: [
      "Tink (Visa)",
      "Plaid EU",
      "N26",
      "Solaris",
      "Mambu",
      "Bunq",
    ],
    problems: ["B", "C"],
    weight: 2,
  },
  {
    id: "ALT-B07",
    slug: "alt-b07",
    list: 2,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "Complaint Topic Cluster Dashboard (Rules-Based)",
    question:
      "Which complaint topics are rising, and which product/process fixes should ops prioritise?",
    research:
      "BaFin-adjacent consumer protection: complaint topics have to become an ops priority list, not a mailbox.",
    skills: [
      "SQL text categorisation (rules / keywords)",
      "Power BI topic trends",
      "complaint SLA KPIs",
      "management summaries",
    ],
    technical:
      "Rules-based topic tags on complaints, then trend and SLA views — no unsupervised cluster theatre.",
    business:
      "An ops priority list that names the product or process fix behind the rising topic.",
    dataNote:
      "Public consumer-complaint category benchmarks plus a documented anonymised sample with topic tags.",
    sources: [],
    targets: ["N26", "ING", "Commerzbank", "Allianz", "Revolut"],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-B08",
    slug: "alt-b08",
    list: 2,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "ESG Fund Greenwashing Signal Screen (Public Holdings)",
    question:
      "Which fund holdings look misaligned with stated ESG labels, and where should disclosure improve?",
    research:
      "EU SFDR scrutiny is a trust and documentation problem: holdings have to be checked against the stated label.",
    skills: [
      "holdings analysis SQL",
      "ESG label rules",
      "Power BI signal dashboard",
      "research-style documentation",
    ],
    technical:
      "Public holdings scored against stated ESG labels with a documented rule set, then a signal dashboard.",
    business:
      "A disclosure brief that names where the label and the holdings do not match.",
    dataNote:
      "Public fund factsheets and holdings disclosures in a documented CSV, plus SFDR classification references.",
    sources: [],
    targets: [
      "Allianz",
      "Amundi",
      "DWS",
      "Deutsche Bank AM",
      "ING IM",
      "consulting ESG analytics",
    ],
    problems: ["C"],
    weight: 1,
  },
  {
    id: "ALT-I01",
    slug: "alt-i01",
    list: 2,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "EU Digital Product Passport Data Readiness Checker",
    question:
      "Is product/supply chain data ready for EU Digital Product Passport requirements, and what fields fail validation?",
    research:
      "ESPR / Digital Product Passport rules, adjacent to Catena-X, turn product and supply-chain fields into a validation gate.",
    skills: [
      "schema validation",
      "quality rules",
      "Power BI readiness scorecard",
      "regulatory vocabulary",
    ],
    technical:
      "Sample product payloads validated against DPP / Catena-X field rules, then a readiness scorecard.",
    business:
      "A field-level gap list that states what must be fixed before a passport can be trusted.",
    dataNote:
      "Public ESPR / DPP specification references, Catena-X docs, and a sample product payload file.",
    sources: [
      { name: "Catena-X", url: "https://catena-x.net/" },
    ],
    targets: [
      "BMW",
      "Mercedes-Benz",
      "VW",
      "Siemens",
      "Bosch",
      "Schneider Electric",
    ],
    problems: ["C"],
    weight: 3,
  },
  {
    id: "ALT-I02",
    slug: "alt-i02",
    list: 2,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "MES vs ERP Production Count Reconciliation",
    question:
      "Why do shopfloor (MES) counts disagree with ERP production postings, and where should data fixes go?",
    research:
      "Siemens-style industrial AI stalls on OT / IT silos: MES and ERP counts that disagree kill every downstream KPI.",
    skills: [
      "SQL reconciliation",
      "grain mismatch detection",
      "Power BI exception dashboard",
      "factory ops language",
    ],
    technical:
      "Shopfloor counts reconciled to ERP postings at the correct grain, then an exception dashboard.",
    business:
      "A data-fix list that names the grain or master that restores one production count.",
    dataNote:
      "AI4I production fields plus a simulated ERP mismatch layer with documented rules.",
    sources: [
      {
        name: "UCI AI4I 2020",
        url: "https://archive.ics.uci.edu/ml/datasets/AI4I+2020+Predictive+Maintenance+Dataset",
      },
    ],
    targets: ["Siemens", "Bosch", "BMW", "Volvo", "ABB", "Stellantis"],
    problems: ["B"],
    weight: 3,
  },
  {
    id: "ALT-I03",
    slug: "alt-i03",
    list: 2,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Scope 3 Emissions Allocation by Production Batch",
    question:
      "What Scope 3 emissions should be allocated to each production batch given grid intensity and supplier mix?",
    research:
      "CSRD and Catena-X sustainability need batch-level allocation: annual averages cannot support a supplier or shift decision.",
    skills: [
      "allocation logic SQL",
      "emissions factors",
      "Power BI batch carbon views",
      "ESG reporting vocabulary",
    ],
    technical:
      "Grid intensity and supplier mix allocated to production batches, then a batch carbon view.",
    business:
      "A batch-level Scope 3 figure that sustainability and production can defend.",
    dataNote:
      "SMARD market data as the intensity source and AI4I or supply-chain rows as the batch proxy.",
    sources: [
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
    ],
    targets: [
      "BMW",
      "Volvo",
      "Bosch",
      "Siemens",
      "Maersk logistics",
      "Catena-X partners",
    ],
    problems: ["C"],
    weight: 2,
  },
  {
    id: "ALT-I04",
    slug: "alt-i04",
    list: 2,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Nearshoring vs Offshoring Supplier Risk Comparator",
    question:
      "If EU firms nearshore suppliers, how do cost, lead time, and risk trade off vs current offshore lanes?",
    research:
      "Geopolitical supply shock made nearshoring a sourcing decision: cost, lead time, and risk have to sit on one comparator.",
    skills: [
      "scenario SQL",
      "risk scoring",
      "Power BI comparator dashboards",
      "strategic sourcing narrative",
    ],
    technical:
      "Offshore versus nearshore lanes compared on cost, lead time, and a documented risk score.",
    business:
      "A sourcing recommendation that states where nearshoring wins and where it does not.",
    dataNote:
      "A public supply-chain set, documented country-risk indices, and lane-cost assumptions.",
    sources: [
      {
        name: "Kaggle Supply Chain Data",
        url: "https://www.kaggle.com/datasets/datasetengineer/supply-chain-data",
      },
    ],
    targets: [
      "BMW",
      "VW",
      "Renault",
      "Bosch",
      "Continental",
      "Flex",
      "Jabil EU",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-I05",
    slug: "alt-i05",
    list: 2,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Batch Recall Forward/Backward Trace Simulation",
    question:
      "If a batch fails quality, which customers/lines are affected, and how fast can containment happen?",
    research:
      "Automotive and food quality compliance is a traceability control: forward and backward lot genealogy has to be queryable under time pressure.",
    skills: [
      "traceability SQL (forward / backward)",
      "graph-like joins",
      "Power BI recall impact map",
      "crisis ops briefing",
    ],
    technical:
      "Lot genealogy queried forward to customers and backward to inputs, then an impact map.",
    business:
      "A containment brief that names affected customers and lines and the time to isolate them.",
    dataNote:
      "A multi-tier supply-chain set plus a documented batch and lot genealogy file.",
    sources: [
      {
        name: "Kaggle Supply Chain Data",
        url: "https://www.kaggle.com/datasets/datasetengineer/supply-chain-data",
      },
    ],
    targets: [
      "BMW",
      "Mercedes-Benz",
      "Nestlé manufacturing",
      "Bosch",
      "Siemens",
      "pharma-adjacent industrial QA teams",
    ],
    problems: ["B", "C"],
    weight: 2,
  },
  {
    id: "ALT-I06",
    slug: "alt-i06",
    list: 2,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Energy Price Pass-Through to Unit Manufacturing Cost",
    question:
      "How do hourly energy price spikes change unit cost by line/shift, and when should production shift timing?",
    research:
      "Industrial energy volatility is a timing decision: unit cost by line and shift has to move when the hour’s price moves.",
    skills: [
      "time-series SQL joins (production × price)",
      "unit cost modelling",
      "Power BI margin sensitivity views",
    ],
    technical:
      "Hourly prices joined to production volume by line and shift to show unit-cost sensitivity.",
    business:
      "A production-timing recommendation for hours when energy cost destroys unit margin.",
    dataNote:
      "SMARD hourly prices and AI4I production volume as the time-of-day proxy.",
    sources: [
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
      {
        name: "UCI AI4I 2020",
        url: "https://archive.ics.uci.edu/ml/datasets/AI4I+2020+Predictive+Maintenance+Dataset",
      },
    ],
    targets: [
      "BASF",
      "Siemens",
      "Volvo",
      "Norsk Hydro",
      "ArcelorMittal",
      "BMW",
    ],
    problems: ["E"],
    weight: 3,
  },
  {
    id: "ALT-I07",
    slug: "alt-i07",
    list: 2,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Supplier ESG Score vs OTIF Performance Matrix",
    question:
      "Do “high ESG” suppliers actually deliver reliably, or is there a trade-off ops should know?",
    research:
      "Catena-X and CSRD supplier due diligence created a dual KPI: ESG score without OTIF is a procurement fiction.",
    skills: [
      "matrix analytics SQL",
      "dual KPI Power BI",
      "supplier review pack writing",
      "procurement language",
    ],
    technical:
      "OTIF and a documented ESG score on one matrix so the trade-off is visible.",
    business:
      "A supplier-review pack that states where ESG and delivery reinforce — and where they conflict.",
    dataNote:
      "A supply-chain OTIF set plus a documented ESG score template, without fabricated company claims.",
    sources: [
      {
        name: "Kaggle Supply Chain Data",
        url: "https://www.kaggle.com/datasets/datasetengineer/supply-chain-data",
      },
    ],
    targets: [
      "BMW",
      "VW",
      "Unilever",
      "Siemens",
      "Schneider Electric",
      "DHL industrial supply chain",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-I08",
    slug: "alt-i08",
    list: 2,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Human–Robot Workstation Idle-Time Attribution",
    question:
      "Where do human–robot workstations lose productive time, and is the bottleneck human wait, robot wait, or changeover?",
    research:
      "Industry 4.0 workstation KPIs: idle time has to be attributed before anyone buys another robot or another headcount.",
    skills: [
      "downtime classification SQL",
      "Power BI workstation views",
      "OEE-adjacent metrics",
      "shift-level recommendations",
    ],
    technical:
      "Workstation events classified as human wait, robot wait, or changeover, then shift-level views.",
    business:
      "A shift recommendation that names the true bottleneck at each workstation.",
    dataNote:
      "AI4I downtime and timestamp fields plus a documented workstation event-log extension.",
    sources: [
      {
        name: "UCI AI4I 2020",
        url: "https://archive.ics.uci.edu/ml/datasets/AI4I+2020+Predictive+Maintenance+Dataset",
      },
    ],
    targets: [
      "BMW",
      "KUKA",
      "ABB",
      "Bosch",
      "Siemens factories",
      "Festo",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-E01",
    slug: "alt-e01",
    list: 2,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "Negative Electricity Price Event Post-Mortem Analyzer",
    question:
      "When do negative power prices occur in EU markets, and what should buyers/producers do differently next time?",
    research:
      "Negative prices are a market-anomaly BI problem: a post-mortem calendar beats another neural forecast paper.",
    skills: [
      "time-series SQL",
      "event detection rules",
      "Power BI post-mortem calendar",
      "energy market vocabulary",
    ],
    technical:
      "Rule-based detection of negative-price events, then a post-mortem calendar with market context.",
    business:
      "A next-time playbook for buyers and producers when the same pattern returns.",
    dataNote:
      "SMARD market downloads and ENTSO-E Transparency Platform price series.",
    sources: [
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
      {
        name: "ENTSO-E Transparency",
        url: "https://transparency.entsoe.eu/",
      },
    ],
    targets: [
      "E.ON",
      "RWE",
      "EnBW",
      "Vattenfall",
      "Iberdrola",
      "Ørsted",
    ],
    problems: ["E"],
    weight: 3,
  },
  {
    id: "ALT-E02",
    slug: "alt-e02",
    list: 2,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "Corporate PPA vs Spot Market Savings Calculator",
    question:
      "For a given consumption profile, when does a corporate PPA beat spot buying, and what is the risk range?",
    research:
      "EnBW and E.ON renewable-investment context: a PPA is a CFO scenario, not a sustainability slogan.",
    skills: [
      "scenario SQL",
      "savings calculators",
      "Power BI sensitivity charts",
      "CFO-style business cases",
    ],
    technical:
      "A consumption profile run against spot prices and documented PPA scenarios, then a sensitivity range.",
    business:
      "A CFO case that states when the PPA beats spot — and the risk range if it does not.",
    dataNote:
      "SMARD spot prices, documented PPA price scenarios, and public corporate PPA market reports.",
    sources: [
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
    ],
    targets: [
      "EnBW",
      "Iberdrola",
      "Engie",
      "Google EU PPAs",
      "Amazon EU energy",
      "Siemens Energy customers",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-E03",
    slug: "alt-e03",
    list: 2,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "Grid Congestion Cost Allocation by EU Region",
    question:
      "Which regions bear the highest congestion/redispatch cost, and what operational decisions reduce exposure?",
    research:
      "ENTSO-E congestion and GridSage-style work: cost has to land on a region before anyone changes dispatch.",
    skills: [
      "regional aggregation SQL",
      "cost allocation logic",
      "Power BI congestion maps",
      "grid ops vocabulary",
    ],
    technical:
      "Congestion and redispatch figures allocated to regions, then a map of exposure.",
    business:
      "An ops brief that names which regional decisions reduce congestion-cost exposure.",
    dataNote:
      "ENTSO-E congestion and redispatch transparency, with SMARD where the German series applies.",
    sources: [
      {
        name: "ENTSO-E Transparency",
        url: "https://transparency.entsoe.eu/",
      },
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
    ],
    targets: [
      "TenneT",
      "50Hertz",
      "Amprion",
      "Elia",
      "RTE",
      "Siemens Energy",
    ],
    problems: ["A"],
    weight: 2,
  },
  {
    id: "ALT-E04",
    slug: "alt-e04",
    list: 2,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "EV Fleet Departure-Time vs Tariff Optimizer",
    question:
      "If fleets shift departure/charging to off-peak hours, how much cost and grid load reduction is achievable?",
    research:
      "EV load-shift is a fleet-ops decision: departure time versus tariff has to be quantified before a depot changes the clock.",
    skills: [
      "tariff schedule SQL",
      "scenario Power BI",
      "load profile analysis",
      "fleet ops recommendations",
    ],
    technical:
      "Fleet schedules shifted against hourly tariffs and load to quantify cost and grid-load reduction.",
    business:
      "A departure-and-charging policy that states the achievable saving and load reduction.",
    dataNote:
      "SMARD hourly prices and load, a documented fleet-schedule simulation, and optional TUM fleet traces.",
    sources: [
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
      { name: "Zenodo TUM fleet GPS", url: "https://zenodo.org/records/16411298" },
    ],
    targets: [
      "E.ON",
      "EnBW",
      "DHL fleet electrification",
      "Deutsche Bahn",
      "Volvo Trucks",
      "Fleetcor EU",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-E05",
    slug: "alt-e05",
    list: 2,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "EU ETS Carbon Price Pass-Through Dashboard",
    question:
      "How do EU ETS carbon price moves translate into cost pressure for industrial buyers by sector?",
    research:
      "Carbon accounting and industrial–energy crossover: an ETS move is a sector cost-pressure figure, not a trading headline.",
    skills: [
      "price pass-through modelling",
      "SQL sector benchmarks",
      "Power BI exposure views",
      "sustainability finance language",
    ],
    technical:
      "EU ETS price series passed through sector consumption proxies to show cost pressure by industry.",
    business:
      "A buyer brief that names which sectors feel an ETS move first.",
    dataNote:
      "Public EU ETS price series and Eurostat-style energy-balance consumption proxies.",
    sources: [],
    targets: [
      "ArcelorMittal",
      "BASF",
      "RWE",
      "E.ON",
      "consulting sustainability practices",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-E06",
    slug: "alt-e06",
    list: 2,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "Tenant vs Landlord Split-Incentive Energy Waste Finder",
    question:
      "Where does energy waste persist because tenants don’t pay for inefficiency (or vice versa), and what contract change helps?",
    research:
      "Building-efficiency waste often survives because the bill and the control sit with different parties. That is a commercial analytics problem.",
    skills: [
      "consumption baseline SQL",
      "anomaly rules",
      "Power BI building scorecards",
      "facility manager storytelling",
    ],
    technical:
      "Building consumption baselined and flagged, then split by who pays versus who controls the asset.",
    business:
      "A contract or metering change that removes the split incentive at the worst sites.",
    dataNote:
      "ASHRAE Great Energy Predictor meters and UCI household power as the public building-load sets.",
    sources: [
      {
        name: "ASHRAE Energy Prediction",
        url: "https://www.kaggle.com/c/ashrae-energy-prediction/data",
      },
    ],
    targets: [
      "Engie",
      "E.ON",
      "Veolia",
      "Enpal",
      "1KOMMA5°",
      "commercial real estate analytics",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-E07",
    slug: "alt-e07",
    list: 2,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "Renewable Curtailment Revenue Loss Quantifier",
    question:
      "How much revenue is lost when renewables are curtailed, and where should grid/investment priority go?",
    research:
      "Curtailment and redispatch are the core grid-transition loss: megawatt-hours not produced have to become a euro figure.",
    skills: [
      "time-series joins",
      "curtailment KPI SQL",
      "Power BI loss quantification",
      "regulator-style summaries",
    ],
    technical:
      "Curtailed renewable volumes joined to prices to quantify lost revenue by region or asset class.",
    business:
      "An investment-priority brief that names where grid spend recovers the most curtailed revenue.",
    dataNote:
      "SMARD renewable generation and curtailment fields plus ENTSO-E renewable series.",
    sources: [
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
      {
        name: "ENTSO-E Transparency",
        url: "https://transparency.entsoe.eu/",
      },
    ],
    targets: [
      "Ørsted",
      "EnBW",
      "Iberdrola",
      "TenneT",
      "Siemens Energy",
      "SCADA / analytics vendors",
    ],
    problems: ["A"],
    weight: 2,
  },
  {
    id: "ALT-E08",
    slug: "alt-e08",
    list: 2,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "Microgrid Reliability Scorecard (Island-Mode Events)",
    question:
      "How reliably do microgrids serve critical loads during island-mode events, and what failure mode dominates?",
    research:
      "Grid-edge uptime: island-mode events need a reliability KPI and a dominant failure mode, not a vendor demo.",
    skills: [
      "event reliability KPIs",
      "SQL uptime calculations",
      "Power BI scorecards",
      "ops reporting",
    ],
    technical:
      "Island-mode events scored on uptime and failure mode, then a reliability scorecard.",
    business:
      "An ops report that names the dominant failure mode and the first reliability fix.",
    dataNote:
      "Public microgrid research sets or a documented IEEE-style island-mode event log.",
    sources: [],
    targets: [
      "Siemens Energy",
      "Schneider Electric",
      "Engie",
      "municipal utilities",
      "Fraunhofer ISE partners",
    ],
    problems: ["A"],
    weight: 1,
  },
  {
    id: "ALT-X01",
    slug: "alt-x01",
    list: 2,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Analytics Translator Project Backlog Prioritization Engine",
    question:
      "Which data/AI projects should leadership fund first when everything claims to be “high impact”?",
    research:
      "The McKinsey Analytics Translator gap: value, feasibility, risk, and data readiness have to sit on one matrix or everything stays “high impact.”",
    skills: [
      "weighted prioritisation",
      "Power BI backlog matrix",
      "business case writing",
      "stakeholder framing",
    ],
    technical:
      "A scored backlog on value, feasibility, risk, and data readiness, then a funding matrix.",
    business:
      "A leadership pack that names the first funded bets and the ones that wait.",
    dataNote:
      "Public translator-role frameworks plus a documented scored-backlog template.",
    sources: [],
    targets: [
      "Capgemini",
      "Deloitte",
      "McKinsey QuantumBlack",
      "BCG X",
      "SAP",
      "large EU enterprises",
    ],
    problems: ["E"],
    weight: 3,
  },
  {
    id: "ALT-X02",
    slug: "alt-x02",
    list: 2,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "EU CSRD Double Materiality Data Gap Audit",
    question:
      "Which CSRD double-materiality datapoints are missing or weak, and what blocks audit-ready reporting?",
    research:
      "The CSRD wave is a documentation and data-gap problem: double materiality cannot be audited from a narrative slide.",
    skills: [
      "gap audit checklists",
      "Power BI CSRD readiness dashboard",
      "ESG vocabulary",
      "documentation discipline",
    ],
    technical:
      "CSRD / EFRAG datapoints checked against a sample sustainability report, then a readiness dashboard.",
    business:
      "An audit-ready gap list that names which datapoints block the report.",
    dataNote:
      "Public CSRD and EFRAG guidance plus a documented sample-company sustainability checklist.",
    sources: [],
    targets: [
      "Deloitte",
      "PwC",
      "KPMG",
      "EY",
      "Siemens",
      "BMW",
      "Unilever",
      "Maersk",
    ],
    problems: ["C"],
    weight: 3,
  },
  {
    id: "ALT-X03",
    slug: "alt-x03",
    list: 2,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "AI Agent Handoff Failure Rate in Customer Ops",
    question:
      "When AI agents hand off to humans, where do failures spike (context loss, wrong queue, SLA breach)?",
    research:
      "DHL and REWE agent narratives: the value is in the handoff, not the chatbot. Context loss, wrong queue, and SLA breach are the failure modes.",
    skills: [
      "handoff funnel SQL",
      "SLA KPIs",
      "Power BI failure Pareto",
      "ops process recommendations",
    ],
    technical:
      "Ticket handoffs from agent step to human step to resolution, then a failure Pareto.",
    business:
      "A process change that names which handoff failure to fix first.",
    dataNote:
      "A documented synthetic ticket and handoff log plus public agentic-ops case studies.",
    sources: [],
    targets: [
      "DHL",
      "REWE",
      "Zalando",
      "N26",
      "Telefónica",
      "Capgemini customer ops programmes",
    ],
    problems: ["D"],
    weight: 3,
  },
  {
    id: "ALT-X04",
    slug: "alt-x04",
    list: 2,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Supply Shock War Room KPI Pack (Multi-Sector)",
    question:
      "During a supply shock, which KPIs should leadership watch daily, and what early triggers warrant action?",
    research:
      "Cross-sector disruption needs a Decision Scientist war room: a short KPI tree and triggers, not a 40-tile dashboard.",
    skills: [
      "KPI tree design",
      "SQL alert thresholds",
      "Power BI executive pack",
      "crisis storytelling",
    ],
    technical:
      "A daily KPI tree with documented alert thresholds for a supply-shock scenario.",
    business:
      "A war-room pack that states which daily numbers warrant action — and which do not.",
    dataNote:
      "A supply-chain dataset plus documented shock parameters from public COVID and chip-shortage cases.",
    sources: [
      {
        name: "Kaggle Supply Chain Data",
        url: "https://www.kaggle.com/datasets/datasetengineer/supply-chain-data",
      },
    ],
    targets: [
      "BMW",
      "Bosch",
      "DHL",
      "Carrefour",
      "Siemens",
      "consulting supply-chain practices",
    ],
    problems: ["A", "B"],
    weight: 2,
  },
  {
    id: "ALT-X05",
    slug: "alt-x05",
    list: 2,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Merger Integration KPI Reconciliation Tracker",
    question:
      "After two EU entities merge, do harmonised KPIs match on revenue, headcount, and pipeline — and where do they break?",
    research:
      "Post-merger data chaos is an ERP and definition problem: two entities will not share revenue, headcount, or pipeline until someone reconciles them.",
    skills: [
      "SQL reconciliation",
      "Power BI dual-entity views",
      "exception categorisation",
      "PMO reporting",
    ],
    technical:
      "Entity A versus Entity B KPI tables reconciled on revenue, headcount, and pipeline, then an exception list.",
    business:
      "A PMO tracker that states match rate and the breaks that block a single operating view.",
    dataNote:
      "Simulated dual-entity KPI tables with documented intentional mismatches.",
    sources: [],
    targets: [
      "Big Four",
      "Accenture",
      "Capgemini",
      "SAP",
      "large EU corporates post-M&A",
    ],
    problems: ["F"],
    weight: 2,
  },
  {
    id: "ALT-X06",
    slug: "alt-x06",
    list: 2,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Real-Time Carbon Budget vs Production Plan Reconciler",
    question:
      "Is the plant exceeding its carbon budget vs plan, and which shifts/products drive the overrun?",
    research:
      "CSRD plus industrial production: a carbon budget only works if plan versus actual is visible by shift and product.",
    skills: [
      "plan vs actual SQL",
      "carbon allocation logic",
      "Power BI reconciler dashboard",
      "sustainability ops language",
    ],
    technical:
      "Carbon budget versus production actuals reconciled by shift and product.",
    business:
      "An ops action that names which shifts or products drive the overrun.",
    dataNote:
      "SMARD as a carbon-intensity proxy, a production-plan file, and AI4I or batch production as the actuals.",
    sources: [
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
      {
        name: "UCI AI4I 2020",
        url: "https://archive.ics.uci.edu/ml/datasets/AI4I+2020+Predictive+Maintenance+Dataset",
      },
    ],
    targets: [
      "BMW",
      "Volvo",
      "BASF",
      "Siemens",
      "ArcelorMittal",
      "E.ON industrial customers",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "ALT-X07",
    slug: "alt-x07",
    list: 2,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Data Mesh Domain Ownership Workload Analytics",
    question:
      "Are data mesh domain teams overloaded, and where should ownership shift to restore metric reliability?",
    research:
      "Zalando-style data-as-software: overloaded domain owners are how metric reliability dies after the mesh slide.",
    skills: [
      "workload KPI SQL",
      "ownership mapping",
      "Power BI domain heatmaps",
      "governance storytelling",
    ],
    technical:
      "Domain ownership joined to ticket and backlog load, then a heatmap of overloaded owners.",
    business:
      "An ownership-shift recommendation that restores metric reliability where teams are overloaded.",
    dataNote:
      "A documented domain-ownership roster and ticket/backlog simulation, plus public data-mesh references.",
    sources: [],
    targets: [
      "Zalando",
      "Booking.com",
      "Spotify",
      "Klarna",
      "ING",
      "consulting data platform practices",
    ],
    problems: ["B"],
    weight: 2,
  },
  {
    id: "ALT-X08",
    slug: "alt-x08",
    list: 2,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Professionalised vs Democratised Role Task Audit",
    question:
      "Which analyst tasks in a workflow are “democratised” (automatable) vs “professionalised” (judgment-heavy) — and how should you skill-plan?",
    research:
      "PwC AI Jobs Barometer and the explicit role strategy: tasks have to be sorted before a skill plan can prefer professionalised work.",
    skills: [
      "task taxonomy",
      "survey / rubric design",
      "Power BI task matrix",
      "career narrative documentation",
    ],
    technical:
      "A task taxonomy scored as automatable versus judgment-heavy, then a skill-plan matrix.",
    business:
      "A skill-plan brief that states which tasks to keep, which to automate, and which to drop.",
    dataNote:
      "PwC AI Jobs Barometer (Germany / EU), WEF skills data, and a documented workflow task inventory.",
    sources: [
      {
        name: "PwC AI Jobs Barometer",
        url: "https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html",
      },
      {
        name: "WEF Future of Jobs 2025",
        url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
      },
    ],
    targets: [
      "Any EU employer",
      "consulting people analytics",
      "retail and logistics L&D teams",
    ],
    problems: ["E"],
    weight: 2,
  },
];
