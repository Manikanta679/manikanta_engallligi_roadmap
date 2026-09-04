import type { ProjectItem } from "./projects";

export const list1Projects: ProjectItem[] = [
  {
    id: "CON-01",
    slug: "con-01",
    list: 1,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "SAP Purchase-to-Pay Process Mining & €-Impact Case",
    question:
      "Where does invoice approval lose time and money, and which fix should leadership fund first?",
    research:
      "Celonis, SAP, and pan-EU SI delivery treat purchase-to-pay as a process-intelligence problem: event logs already exist, but leadership still needs a funded first fix rather than another process map.",
    skills: [
      "SQL event logs",
      "process KPIs",
      "Power BI",
      "business case & ROI",
      "SAP literacy",
    ],
    technical:
      "SQL on SAP P2P event logs to isolate variants, bottlenecks, cycle time, and touchless rate, then a Power BI process dashboard that converts manual-touch cost assumptions into euro impact.",
    business:
      "An executive case that names the first payment-block step to automate and the expected annual saving under documented cost assumptions.",
    dataNote:
      "Celonis Academy SAP purchase-to-pay event logs for process-mining analysis.",
    sources: [
      { name: "Celonis Academy", url: "https://www.celonis.com/academy/" },
    ],
    targets: [
      "Celonis (Munich)",
      "SAP (Walldorf, Dublin, Barcelona)",
      "Capgemini",
      "Accenture",
      "Deloitte",
      "PwC",
      "IBM",
      "Reply",
      "Tietoevry",
    ],
    problems: ["F", "B", "E"],
    weight: 3,
  },
  {
    id: "CON-02",
    slug: "con-02",
    list: 1,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "Order-to-Cash (O2C) Leakage Detection",
    question:
      "Where does revenue leak between order confirmation and cash collection?",
    research:
      "S/4HANA programmes across EU enterprises keep hiring for order-to-cash reconciliation: billing lag, disputes, and credit holds hide cash that finance and ops do not share a view of.",
    skills: [
      "SQL joins (order / invoice / payment)",
      "DSO-style metrics",
      "Power BI",
      "finance–ops translation",
    ],
    technical:
      "Map O2C stages, isolate billing lag, dispute loops, and credit holds, then quantify DSO impact in a dashboard by customer segment and region.",
    business:
      "The top three leakage points, a named process owner for each, and the expected cash-acceleration case.",
    dataNote:
      "Celonis Academy order-to-cash sample logs for stage-level leakage analysis.",
    sources: [
      { name: "Celonis Academy", url: "https://www.celonis.com/academy/" },
    ],
    targets: [
      "Capgemini",
      "Accenture",
      "T-Systems",
      "Atos",
      "Sopra Steria",
      "SAP SI partners (EU-wide)",
    ],
    problems: ["F", "B"],
    weight: 3,
  },
  {
    id: "CON-03",
    slug: "con-03",
    list: 1,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "Enterprise AI Asset Register & EU AI Act Risk Scoring",
    question:
      "Which AI systems exist, what EU AI Act risk class applies, and what documentation gaps block rollout?",
    research:
      "EU-wide compliance after the AI Act phased obligations created demand for an inventory, risk class, and documentation gap view — the emerging AI Business Analyst brief.",
    skills: [
      "governance literacy",
      "Power BI compliance dashboard",
      "structured documentation",
      "applied AI literacy",
    ],
    technical:
      "An inventory schema mapped to public EU company AI use cases, then a dashboard of documentation gaps by risk tier and obligation deadline.",
    business:
      "A gap report with prioritised remediation that leadership can fund before rollout is blocked.",
    dataNote:
      "Official EU AI Act guidance plus public AI disclosures from large European companies.",
    sources: [
      { name: "EU AI Act", url: "https://artificialintelligenceact.eu/" },
    ],
    targets: [
      "SAP",
      "Deloitte",
      "PwC",
      "KPMG",
      "Capgemini",
      "N26",
      "Adyen",
      "Spotify",
    ],
    problems: ["C", "D"],
    weight: 3,
    note: "Differentiator",
  },
  {
    id: "CON-04",
    slug: "con-04",
    list: 1,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "IT Services Project Profitability & Bench Analytics",
    question:
      "Which projects and benches erode margin, and where should staffing shift?",
    research:
      "Lünendonk IT-services economics: utilisation, bench, and rate cards decide margin long before another delivery slide does.",
    skills: [
      "SQL profitability models",
      "Power BI P&L views",
      "stakeholder storytelling",
    ],
    technical:
      "A project dataset of hours, rate, utilisation, and bench that produces margin by client and region plus a bench heatmap.",
    business:
      "A staffing recommendation that names which skill should move to which client to recover margin.",
    dataNote:
      "Documented synthetic project data calibrated to EU consulting pay and utilisation benchmarks.",
    sources: [],
    targets: [
      "Capgemini",
      "Accenture",
      "Adesso",
      "GFT",
      "CGI",
      "Devoteam",
      "Netcompany",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "CON-05",
    slug: "con-05",
    list: 1,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "Data Product Maturity Assessment Framework",
    question:
      "Which analytics products are trusted for production decisions, and what maturity stage is each?",
    research:
      "Zalando and Booking.com treat data as software: lineage, tests, SLA, and adoption decide whether a product is trusted in production.",
    skills: [
      "data quality scoring",
      "metric ownership",
      "framework design",
      "Power BI maturity radar",
    ],
    technical:
      "Score analytics products on lineage, tests, SLA, documentation, and adoption, then a radar dashboard and a twelve-month improvement roadmap.",
    business:
      "A prioritised data-product improvement plan that states which products are decision-ready.",
    dataNote:
      "A documented maturity framework plus a small set of public-inspired product profiles.",
    sources: [],
    targets: [
      "Zalando (Berlin)",
      "Booking.com (Amsterdam)",
      "Spotify",
      "Klarna",
      "SAP BTP",
    ],
    problems: ["A", "B"],
    weight: 2,
  },
  {
    id: "CON-06",
    slug: "con-06",
    list: 1,
    sectorKey: "software",
    sectorLabel: "Software / Consulting",
    title: "SAP S/4 Migration Cutover Reconciliation Dashboard",
    question:
      "During dual-run, do legacy and S/4 reports agree on critical KPIs?",
    research:
      "EU S/4 programmes in rail, energy, retail, and automotive live or die on dual-run reconciliation: revenue, inventory, and open POs must match before go-live.",
    skills: [
      "SQL reconciliation",
      "Power BI side-by-side KPIs",
      "documentation discipline",
    ],
    technical:
      "Reconcile pre- and post-migration extracts for revenue, inventory, and open purchase orders, then an exception report for unmatched masters.",
    business:
      "A hypercare dashboard that states KPI match rate and the master-data fixes required before go-live.",
    dataNote:
      "Simulated dual-run ERP extracts with a documented reconciliation methodology.",
    sources: [],
    targets: [
      "Capgemini",
      "T-Systems",
      "Accenture",
      "SAP",
      "Deutsche Bahn",
      "E.ON",
      "Iberdrola",
      "SNCF digital programmes",
    ],
    problems: ["F"],
    weight: 2,
  },
  {
    id: "LOG-01",
    slug: "log-01",
    list: 1,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Cross-Border Rail Freight Punctuality Benchmark (Europe)",
    question:
      "Which EU corridors and operators underperform on punctuality, and where should buffer capacity shift?",
    research:
      "DB, SNCF, ÖBB, and NS digitalisation programmes need corridor punctuality as an ops KPI — not another delay-model accuracy slide.",
    skills: [
      "SQL time aggregations",
      "Power BI heatmaps",
      "OTIF / punctuality domain",
      "EU open transport data",
    ],
    technical:
      "Ingest EU open rail data, compute punctuality by corridor, country, and operator, and benchmark each series against the EU median.",
    business:
      "The five corridors that should receive preventive scheduling and buffer capacity first.",
    dataNote:
      "EU open rail and mobility datasets covering corridor punctuality across operators.",
    sources: [
      { name: "Mobilithek", url: "https://mobilithek.info/" },
      { name: "data.europa.eu", url: "https://data.europa.eu/" },
      { name: "Bahn-Vorhersage open data", url: "https://bahnvorhersage.de/open-data/" },
      { name: "Railway Open Data", url: "https://opendata.railway.eu/" },
    ],
    targets: [
      "Deutsche Bahn",
      "SNCF",
      "ÖBB",
      "NS",
      "Flix",
      "Kühne+Nagel",
      "DSV",
      "Maersk",
      "DHL",
      "DB Schenker",
    ],
    problems: ["A", "E"],
    weight: 3,
  },
  {
    id: "LOG-02",
    slug: "log-02",
    list: 1,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Parcel Hub Peak-Load Capacity Stress Test",
    question:
      "At what volume does a European sort hub breach capacity, and what prevents backlog at peak?",
    research:
      "DHL, DPD, and GLS hub economics are decided at peak: parcels per hour, lanes, and shifts — not average-day throughput.",
    skills: [
      "capacity modelling (SQL)",
      "scenario Power BI",
      "ops KPI definitions",
    ],
    technical:
      "A throughput model of parcels per hour, lanes, and shifts, stressed against Black Friday and Christmas peaks, then a scenario dashboard.",
    business:
      "A capacity plan that trades overtime cost against delay cost at the breach point.",
    dataNote:
      "Public e-commerce volume context plus a documented hub throughput simulation.",
    sources: [],
    targets: [
      "DHL (Bonn / Brussels)",
      "DPD (Aschaffenburg)",
      "GLS",
      "Amazon EU fulfilment",
      "CEVA",
    ],
    problems: ["A"],
    weight: 3,
  },
  {
    id: "LOG-03",
    slug: "log-03",
    list: 1,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Last-Mile Delivery Carbon & Cost Trade-off Analyzer",
    question:
      "When does optimised routing save km/CO₂ without breaking customer delivery windows?",
    research:
      "EU Green Deal logistics and last-mile decarbonisation: kilometres and carbon only count if promised windows still hold.",
    skills: ["geospatial SQL", "Power BI scenarios", "sustainability KPIs"],
    technical:
      "OpenStreetMap zones for Amsterdam, Berlin, and Paris compared as customer-choice versus optimised routes on kilometres, CO₂ proxy, and cost.",
    business:
      "A zone-level routing policy that states where optimisation is allowed and where windows must win.",
    dataNote:
      "OpenStreetMap Europe extracts and city open data for last-mile routing scenarios.",
    sources: [
      { name: "Geofabrik Europe", url: "https://download.geofabrik.de/europe/" },
    ],
    targets: [
      "DHL",
      "PostNL",
      "Colis Privé",
      "REWE Digital",
      "Zalando fulfilment",
      "Instabee",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "LOG-04",
    slug: "log-04",
    list: 1,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Weather-Attributable Rail Disruption Index",
    question:
      "What share of delays is weather-linked vs operational, by corridor and season?",
    research:
      "Attribution, not black-box ML: operators need a seasonal split between weather-linked and operational delay before they buy more buffer.",
    skills: [
      "SQL joins (delays + weather)",
      "statistical comparison",
      "Power BI seasonal views",
    ],
    technical:
      "Join rail delays with national weather services and produce a corridor-level weather-attribution index with seasonal views.",
    business:
      "A seasonal buffer policy that states where weather, not operations, should drive spare capacity.",
    dataNote:
      "EU rail open data joined with national meteorological series such as DWD and Copernicus.",
    sources: [
      { name: "DWD Open Data", url: "https://opendata.dwd.de/" },
    ],
    targets: ["Deutsche Bahn", "SNCF", "ÖBB", "NS", "Eurostar", "Flix"],
    problems: ["B", "E"],
    weight: 2,
  },
  {
    id: "LOG-05",
    slug: "log-05",
    list: 1,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "Port Congestion & Berth Utilization Intelligence",
    question:
      "Which berths are congested vs under-used, and what is idle vessel time costing?",
    research:
      "Hamburg, Rotterdam, Antwerp, and Barcelona live on berth occupancy and waiting time; idle vessels are a planning cost, not a weather footnote.",
    skills: [
      "utilisation KPIs",
      "time-series SQL",
      "Power BI port ops dashboard",
    ],
    technical:
      "Port statistics turned into berth occupancy, waiting time, and throughput, then a congestion Pareto.",
    business:
      "A berth-allocation recommendation that names congested versus under-used capacity.",
    dataNote:
      "Public port statistics from Hamburg and Rotterdam plus EU maritime open data.",
    sources: [
      {
        name: "Hafen Hamburg Statistics",
        url: "https://www.hafen-hamburg.de/en/statistics/",
      },
      { name: "data.europa.eu", url: "https://data.europa.eu/" },
    ],
    targets: [
      "Kühne+Nagel",
      "Hapag-Lloyd",
      "Maersk",
      "CMA CGM",
      "DB Schenker",
      "Port of Rotterdam authorities",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "LOG-06",
    slug: "log-06",
    list: 1,
    sectorKey: "logistics",
    sectorLabel: "Logistics / Mobility",
    title: "OTIF Supplier Performance Scorecard (Multi-tier EU Supply Chain)",
    question:
      "Which suppliers break OTIF and what is downstream production impact?",
    research:
      "Catena-X and EU supply-chain transparency programmes need one OTIF definition that plants and procurement can share.",
    skills: ["SQL scorecards", "OTIF logic", "Power BI drill-down"],
    technical:
      "Shipment logs scored as OTIF by supplier, lane, and country, with a cascade-cost estimate for missed slots.",
    business:
      "A quarterly supplier-review pack that names who breaks OTIF and what it costs downstream.",
    dataNote:
      "A public multi-tier supply-chain dataset suitable for OTIF scorecards and lane drill-down.",
    sources: [
      {
        name: "Kaggle Supply Chain Data",
        url: "https://www.kaggle.com/datasets/datasetengineer/supply-chain-data",
      },
    ],
    targets: [
      "BMW",
      "Volvo",
      "Bosch",
      "Siemens",
      "DHL Supply Chain",
      "Flexport",
      "sennder",
    ],
    problems: ["B"],
    weight: 2,
  },
  {
    id: "RET-01",
    slug: "ret-01",
    list: 1,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Rossmann Promo ROI & Cannibalization Analysis",
    question:
      "Which promotions grow incremental revenue vs cannibalise other SKUs/stores?",
    research:
      "EU drugstore and grocery promo logic (Rossmann, dm, Boots-style chains): lift is only useful if it is incremental, not stolen from the next SKU or store.",
    skills: ["SQL promo lift", "Power BI regional views", "applied statistics"],
    technical:
      "Baseline versus promo weeks, a lift and cannibalisation matrix, and store segmentation for the next cycle.",
    business:
      "A next-cycle promo plan by region that keeps only promotions with incremental, not transferred, revenue.",
    dataNote:
      "Rossmann store-sales competition data covering more than a thousand German and EU stores.",
    sources: [
      {
        name: "Rossmann Store Sales",
        url: "https://www.kaggle.com/competitions/rossmann-store-sales",
      },
    ],
    targets: [
      "Rossmann",
      "dm",
      "REWE",
      "Schwarz Group",
      "Ahold Delhaize",
      "Tesco analytics",
      "Zalando",
    ],
    problems: ["E"],
    weight: 3,
  },
  {
    id: "RET-02",
    slug: "ret-02",
    list: 1,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Multi-Chain Supermarket Price Intelligence (EU)",
    question:
      "Where is pricing out of market vs competitors, by category and country?",
    research:
      "Thin grocery margins make category pricing a weekly decision: out-of-market baskets lose volume or margin depending on the category.",
    skills: [
      "price index SQL",
      "Power BI heatmaps",
      "competitive intelligence",
    ],
    technical:
      "Eurostat HICP and national price series turned into normalised basket indices with gap alerts by category and country.",
    business:
      "A pricing action list that tells category managers where they sit versus market.",
    dataNote:
      "Eurostat HICP monthly indices and national statistics-office price series.",
    sources: [
      {
        name: "Eurostat HICP",
        url: "https://ec.europa.eu/eurostat/databrowser/view/prc_hicp_midx",
      },
      { name: "Destatis", url: "https://www.destatis.de/" },
    ],
    targets: [
      "REWE",
      "Schwarz / Lidl",
      "Carrefour",
      "Ahold",
      "Aldi",
      "Tesco",
      "Metro",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "RET-03",
    slug: "ret-03",
    list: 1,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "E-Commerce Customer Lifetime Value & Churn Early Warning",
    question:
      "Which segments drive margin, who churns, and where should retention budget go?",
    research:
      "E-commerce Decision Scientist prep: RFM and cohort retention decide where retention budget is wasted versus where it protects margin.",
    skills: [
      "SQL RFM / cohorts",
      "Power BI retention heatmaps",
      "segmentation",
      "storytelling",
    ],
    technical:
      "RFM scoring, cohort retention, segment revenue, and rule-based churn flags — no black-box churn model required.",
    business:
      "A marketing-budget allocation by segment that states who to keep, who to win back, and who to stop subsidising.",
    dataNote:
      "UCI Online Retail II, the standard UK and EU academic transaction set for cohort work.",
    sources: [
      {
        name: "UCI Online Retail II",
        url: "https://archive.ics.uci.edu/ml/datasets/Online+Retail+II",
      },
    ],
    targets: [
      "Zalando",
      "About You",
      "ASOS",
      "Boozt",
      "Klarna",
      "Spotify",
    ],
    problems: ["E"],
    weight: 3,
    note: "Fast win",
  },
  {
    id: "RET-04",
    slug: "ret-04",
    list: 1,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Return Rate & Margin Impact Model",
    question:
      "Which categories destroy margin through returns, and what policy changes help?",
    research:
      "EU fashion returns of 30–50% turn a sale into a logistics cost; category margin after returns is the number buyers actually need.",
    skills: [
      "SQL return KPIs",
      "margin waterfall Power BI",
      "policy scenarios",
    ],
    technical:
      "Return rate by SKU and category, margin after returns, and simulated return-fee or sizing-policy scenarios.",
    business:
      "A return-policy recommendation with documented euro impact by category.",
    dataNote:
      "Online Retail II transactions plus public Zalando-style returns and sustainability context.",
    sources: [
      {
        name: "UCI Online Retail II",
        url: "https://archive.ics.uci.edu/ml/datasets/Online+Retail+II",
      },
    ],
    targets: [
      "Zalando",
      "About You",
      "H&M Group",
      "Inditex",
      "Otto Group",
    ],
    problems: ["B"],
    weight: 2,
  },
  {
    id: "RET-05",
    slug: "ret-05",
    list: 1,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Fresh Retail Stockout Recovery & Demand Forecast",
    question:
      "After stockout, how fast does demand recover and where should safety stock rise?",
    research:
      "REWE and Ahold replenishment work is time-series with a baseline first: stockout recovery curves matter more than a leaderboard forecast.",
    skills: [
      "SQL inventory events",
      "simple forecast baseline",
      "Power BI replenishment dashboard",
    ],
    technical:
      "Detect stockouts, plot recovery curves, and set safety stock by store and SKU from a documented baseline forecast.",
    business:
      "A top-20 SKU replenishment policy that states where safety stock should rise after a stockout.",
    dataNote:
      "M5 forecasting accuracy data and Rossmann store-level series for stockout and recovery analysis.",
    sources: [
      {
        name: "M5 Forecasting",
        url: "https://www.kaggle.com/c/m5-forecasting-accuracy/data",
      },
    ],
    targets: ["REWE", "Ahold", "Carrefour", "Tesco", "Coop (CH)"],
    problems: ["A", "E"],
    weight: 2,
  },
  {
    id: "RET-06",
    slug: "ret-06",
    list: 1,
    sectorKey: "retail",
    sectorLabel: "Retail / E-commerce",
    title: "Metric Divergence Audit (Marketing vs Finance Revenue)",
    question:
      "Why do Marketing and Finance disagree on revenue, and which definition is official?",
    research:
      "Zalando and Booking.com unified-metrics narratives: two revenue paths without a grain and join contract destroy dashboard trust.",
    skills: [
      "SQL reconciliation",
      "metric dictionary",
      "Power BI single source of truth",
    ],
    technical:
      "Two revenue calculation paths reconciled at grain and join level, then one documented official KPI.",
    business:
      "A metric charter plus a reconciled executive dashboard that Finance and Marketing can share.",
    dataNote:
      "Documented simulated omnichannel data at EU retail grain, with intentional definitional drift.",
    sources: [],
    targets: ["Zalando", "Booking.com", "Otto", "ASOS"],
    problems: ["B"],
    weight: 3,
  },
  {
    id: "BNK-01",
    slug: "bnk-01",
    list: 1,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "Transaction Monitoring Dashboard & Fraud Rate KPI",
    question:
      "Do fraud rules catch real fraud without flooding ops with false positives?",
    research:
      "Payments ops need a fraud-rate and false-positive KPI, not a Kaggle leaderboard: rules that flood the queue are not production-ready.",
    skills: [
      "SQL aggregates",
      "precision / recall for ops",
      "Power BI alert KPIs",
    ],
    technical:
      "Rule-based flags turned into daily fraud rate, false-positive rate, and queue size, then a threshold recommendation.",
    business:
      "A threshold decision that states the fraud catch rate against the false-positive load operations will accept.",
    dataNote:
      "ULB credit-card fraud set from the European research community, used here for ops KPIs rather than model ranking.",
    sources: [
      {
        name: "ULB Credit Card Fraud",
        url: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud",
      },
    ],
    targets: [
      "N26",
      "Trade Republic",
      "Revolut",
      "Adyen",
      "Stripe",
      "Deutsche Bank",
      "ING",
      "BNP Paribas",
    ],
    problems: ["B", "C"],
    weight: 2,
  },
  {
    id: "BNK-02",
    slug: "bnk-02",
    list: 1,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "Open Banking Data Quality & Consent Analytics (PSD2)",
    question:
      "Which API feeds fail quality/consent rules and block reliable analytics?",
    research:
      "PSD2 across the EU made feed quality and consent expiry a governance hiring topic: analytics cannot run on stale or unconsented APIs.",
    skills: [
      "data quality dimensions",
      "consent metrics",
      "Power BI scorecard",
    ],
    technical:
      "Simulated PSD2 feeds scored on missingness, latency, and consent expiry, then a provider quality index.",
    business:
      "A provider remediation list that names which feeds must be fixed before analytics can be trusted.",
    dataNote:
      "Open Banking schema as the reference contract, plus documented synthetic PSD2-style feeds.",
    sources: [
      {
        name: "Open Banking Standards",
        url: "https://standards.openbanking.org.uk/",
      },
    ],
    targets: ["N26", "Solaris", "Mambu", "Tink (Visa)", "Plaid EU", "Bunq"],
    problems: ["B", "C"],
    weight: 2,
  },
  {
    id: "BNK-03",
    slug: "bnk-03",
    list: 1,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "German/EU Credit Risk Decision Support (Scorecard Reporting)",
    question:
      "Which segments drive default risk, and how to tighten policy without killing approvals?",
    research:
      "Credit-committee reporting, not quant research: default by segment and a policy table that risk and product can argue from.",
    skills: [
      "SQL default cohorts",
      "Power BI risk dashboards",
      "regulatory communication",
    ],
    technical:
      "A credit dataset cut into default cohorts and risk bins, then a policy scenario table for tighter versus looser cuts.",
    business:
      "A committee pack that names which segments to tighten without collapsing approval volume.",
    dataNote:
      "UCI Statlog German credit data as the public EU credit-scorecard standard.",
    sources: [
      {
        name: "UCI German Credit",
        url: "https://archive.ics.uci.edu/ml/datasets/statlog+(german+credit+data)",
      },
    ],
    targets: [
      "N26",
      "Taktile",
      "CRIF",
      "BNP Paribas",
      "Commerzbank",
      "Klarna",
    ],
    problems: ["E"],
    weight: 1,
  },
  {
    id: "BNK-04",
    slug: "bnk-04",
    list: 1,
    sectorKey: "banking",
    sectorLabel: "Banking / FinTech",
    title: "SEPA Instant Payment Failure Diagnostics",
    question:
      "Why do instant payments fail, and which codes should engineering fix first?",
    research:
      "Exception-heavy payment ops sit under agentic-banking programmes: failure codes, not chatbot demos, decide whether instant payments hold.",
    skills: ["SQL failure funnels", "Power BI Pareto", "ops storytelling"],
    technical:
      "Payment logs as a drop-off funnel by error code, bank, and time window, then a prioritised engineering backlog.",
    business:
      "A ranked list of failure codes that operations should fund first to recover instant-payment completion.",
    dataNote:
      "SEPA message-structure references plus ECB payment statistics for volume context.",
    sources: [
      { name: "SynSEPA", url: "https://synsepa.github.io/" },
      {
        name: "ECB Payment Statistics",
        url: "https://www.ecb.europa.eu/stats/payments/",
      },
    ],
    targets: [
      "Trade Republic",
      "Adyen",
      "Revolut",
      "Wise",
      "Deutsche Bank",
    ],
    problems: ["D"],
    weight: 1,
  },
  {
    id: "IND-01",
    slug: "ind-01",
    list: 1,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "OEE Loss Tree & Pareto Dashboard",
    question: "Where is production losing efficiency, and what is the €-impact?",
    research:
      "BMW, Volvo, Siemens, and Bosch factory KPI culture: OEE as availability × performance × quality, then a loss tree managers can act on.",
    skills: ["OEE in SQL", "Power BI loss tree", "ops presentations"],
    technical:
      "OEE by line and shift against an 85% benchmark, with a Pareto of availability, performance, and quality losses.",
    business:
      "A line-level improvement recommendation that names the largest euro-relevant loss.",
    dataNote:
      "UCI AI4I 2020 predictive-maintenance set used here for OEE-style loss analysis.",
    sources: [
      {
        name: "UCI AI4I 2020",
        url: "https://archive.ics.uci.edu/ml/datasets/AI4I+2020+Predictive+Maintenance+Dataset",
      },
    ],
    targets: [
      "BMW",
      "Mercedes-Benz",
      "Volvo",
      "Bosch",
      "Siemens",
      "ABB",
      "Schneider Electric",
      "Stellantis",
    ],
    problems: ["E"],
    weight: 3,
  },
  {
    id: "IND-02",
    slug: "ind-02",
    list: 1,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Supply Chain Disruption Early Warning (Multi-tier)",
    question:
      "Which tier-2 signals predict tier-1 stockouts before the line stops?",
    research:
      "Catena-X and the EU automotive supply chain need leading indicators: tier-2 delay plus inventory cover, not a post-mortem after the line stops.",
    skills: ["leading indicators", "SQL lag analysis", "alert KPIs"],
    technical:
      "Supplier delay and inventory-cover series turned into early-warning rules and an alert dashboard before tier-1 stockout.",
    business:
      "A scored alert pack that names which tier-2 signals warrant buffer or dual-sourcing action.",
    dataNote:
      "Documented multi-tier shipment and inventory-cover series suitable for lag and alert rules.",
    sources: [],
    targets: ["BMW", "VW", "Renault", "Bosch", "Continental", "ZF"],
    problems: ["A", "B"],
    weight: 2,
  },
  {
    id: "IND-03",
    slug: "ind-03",
    list: 1,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Production Changeover Loss Analyzer",
    question:
      "Which changeovers waste the most minutes, and how should sequencing change?",
    research:
      "Industrial process optimisation: changeover minutes are a sequencing decision, not a maintenance footnote.",
    skills: [
      "SQL changeover events",
      "Power BI loss views",
      "sequencing recommendation",
    ],
    technical:
      "Classify changeover events by line and product pair, quantify lost minutes, and test alternative sequencing in Power BI.",
    business:
      "A sequencing recommendation that shows which changeovers to avoid or batch to recover capacity.",
    dataNote:
      "Documented production changeover events derived from manufacturing downtime fields.",
    sources: [],
    targets: [
      "Porsche",
      "Volvo",
      "Unilever manufacturing",
      "Nestlé factories",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "IND-04",
    slug: "ind-04",
    list: 1,
    sectorKey: "industrial",
    sectorLabel: "Industrial / Manufacturing",
    title: "Catena-X Data Sharing Compliance Checker",
    question:
      "Does supply chain data meet Catena-X schema/quality before partners trust it?",
    research:
      "The EU automotive data space only works if payloads pass schema and quality rules before a partner consumes them.",
    skills: [
      "schema validation",
      "quality rules",
      "Power BI partner scorecard",
    ],
    technical:
      "Validate supply-chain payloads against Catena-X schema and quality rules, then a partner readiness scorecard.",
    business:
      "A go / no-go brief that states which fields fail before data is shared with partners.",
    dataNote:
      "Catena-X specifications and Eclipse Tractus-X sample payloads for schema and quality checks.",
    sources: [
      { name: "Catena-X", url: "https://catena-x.net/" },
      { name: "Eclipse Tractus-X", url: "https://github.com/eclipse-tractusx" },
    ],
    targets: [
      "BMW",
      "Mercedes-Benz",
      "VW",
      "Catena-X ecosystem partners",
      "Siemens",
    ],
    problems: ["B", "C"],
    weight: 2,
    note: "Differentiator",
  },
  {
    id: "ENR-01",
    slug: "enr-01",
    list: 1,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "EU Day-Ahead Electricity Price Spike Dashboard",
    question:
      "When do price spikes occur across EU markets, and what should buyers do 24–72h ahead?",
    research:
      "SMARD and ENTSO-E make day-ahead spikes a trading BI problem: calendars and market vocabulary, not a neural forecast paper.",
    skills: [
      "time-series SQL",
      "Power BI calendars",
      "energy market vocabulary",
    ],
    technical:
      "Day-ahead price series across EU markets turned into a spike calendar and a 24–72 hour buyer brief.",
    business:
      "A buyer action for the next one to three days when a spike pattern is in view.",
    dataNote:
      "SMARD market downloads and ENTSO-E Transparency Platform day-ahead series.",
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
      "EnBW",
      "Iberdrola",
      "Ørsted",
      "Vattenfall",
      "Engie",
      "RWE",
    ],
    problems: ["E"],
    weight: 2,
    note: "Optional",
  },
  {
    id: "ENR-02",
    slug: "enr-02",
    list: 1,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "Renewable Generation vs Demand Mismatch (Redispatch Proxy)",
    question:
      "Where does renewable surplus/deficit create congestion and redispatch risk?",
    research:
      "Grid-transition work in the GridSage tradition: surplus and deficit by region is the redispatch signal operators already watch.",
    skills: [
      "time-series SQL",
      "Power BI mismatch views",
      "grid ops vocabulary",
    ],
    technical:
      "Align renewable generation with demand to flag surplus and deficit regions as a redispatch-risk proxy.",
    business:
      "A regional mismatch brief that names where congestion risk should change dispatch or demand response.",
    dataNote:
      "SMARD and ENTSO-E series plus Open Energy Platform SEDOS views for generation–demand mismatch.",
    sources: [
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
      {
        name: "ENTSO-E Transparency",
        url: "https://transparency.entsoe.eu/",
      },
      {
        name: "Open Energy Platform",
        url: "https://openenergyplatform.org/dataedit/view/SEDOS",
      },
    ],
    targets: ["EnBW", "TenneT", "50Hertz", "Amprion", "Siemens Energy"],
    problems: ["A"],
    weight: 1,
  },
  {
    id: "ENR-03",
    slug: "enr-03",
    list: 1,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "Building Energy Anomaly Detection (Rules + KPI)",
    question:
      "Which buildings show abnormal consumption indicating fault or waste?",
    research:
      "E.ON and Engie customer analytics: rule-based consumption KPIs find fault and waste without a deep-learning stack.",
    skills: [
      "rule-based anomaly SQL",
      "Power BI building scorecards",
      "energy KPIs",
    ],
    technical:
      "Baseline consumption rules that flag buildings with abnormal load, then a KPI scorecard by site.",
    business:
      "A site list that facilities should inspect first for fault or waste.",
    dataNote:
      "ASHRAE energy-prediction meters and UCI household power as the public building-load sets.",
    sources: [
      {
        name: "ASHRAE Energy Prediction",
        url: "https://www.kaggle.com/c/ashrae-energy-prediction/data",
      },
    ],
    targets: ["E.ON", "Engie", "Enpal", "1KOMMA5°", "Veolia"],
    problems: ["B", "E"],
    weight: 1,
  },
  {
    id: "ENR-04",
    slug: "enr-04",
    list: 1,
    sectorKey: "energy",
    sectorLabel: "Energy / GreenTech",
    title: "ACER REMIT Wholesale Market Transparency Analytics",
    question:
      "What do REMIT disclosures show about concentration and price-formation risk?",
    research:
      "EU wholesale regulation sits between trading desks and consulting energy practices: disclosures are a transparency dataset, not a trading signal dump.",
    skills: [
      "SQL transparency analytics",
      "Power BI concentration views",
      "REMIT vocabulary",
    ],
    technical:
      "REMIT disclosure fields structured into concentration and price-formation views that a risk or consulting audience can read.",
    business:
      "A transparency brief that states where concentration or disclosure gaps raise price-formation risk.",
    dataNote:
      "ACER REMIT reporting pages as the official wholesale-transparency source.",
    sources: [
      {
        name: "ACER REMIT",
        url: "https://www.acer.europa.eu/electricity/remit-reporting",
      },
    ],
    targets: [
      "E.ON trading",
      "Engie",
      "ACER-adjacent analytics",
      "consulting energy practices",
    ],
    problems: ["C", "E"],
    weight: 1,
  },
  {
    id: "X-01",
    slug: "x-01",
    list: 1,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Fleet Electrification Grid Impact (Logistics + Energy)",
    question:
      "Which depots can electrify first without overloading local grids?",
    research:
      "EU fleet decarbonisation is a depot-and-grid decision: charging load has to land on circuits that can take it.",
    skills: [
      "geospatial SQL",
      "Power BI scenarios",
      "grid load KPIs",
      "fleet electrification vocabulary",
    ],
    technical:
      "Depot charging demand joined with local load and charging-point context to rank which sites can electrify first.",
    business:
      "A depot sequence that states which sites electrify now and which wait on grid capacity.",
    dataNote:
      "TUM fleet GPS traces, OpenStreetMap charging context, and SMARD load series.",
    sources: [
      { name: "Zenodo TUM fleet GPS", url: "https://zenodo.org/records/16411298" },
      {
        name: "SMARD",
        url: "https://www.smard.de/en/downloadcenter/download-market-data",
      },
    ],
    targets: [
      "DHL",
      "DB Schenker",
      "DPD",
      "E.ON",
      "EnBW",
      "Iberdrola",
    ],
    problems: ["E"],
    weight: 2,
    note: "Differentiator",
  },
  {
    id: "X-02",
    slug: "x-02",
    list: 1,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Cold Chain Demand & Delivery Window Optimization (Retail + Logistics)",
    question:
      "How should chilled demand align with delivery slots to cut spoilage and km?",
    research:
      "Fresh retail demand and chilled last-mile slots are one ops trade-off: spoilage and extra kilometres move together when windows are wrong.",
    skills: [
      "SQL demand alignment",
      "Power BI slot scenarios",
      "spoilage and km KPIs",
    ],
    technical:
      "Align chilled demand curves with delivery-slot capacity and quantify spoilage versus extra kilometres.",
    business:
      "A slot-and-replenishment recommendation that cuts spoilage without breaking promised windows.",
    dataNote:
      "Retail demand series joined with documented chilled-delivery slot assumptions.",
    sources: [],
    targets: [
      "REWE",
      "Carrefour",
      "Ahold",
      "DHL cold chain",
      "Kühne+Nagel",
    ],
    problems: ["E"],
    weight: 2,
  },
  {
    id: "X-03",
    slug: "x-03",
    list: 1,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Quality Failure Root Cause via Process Mining (Industrial + Consulting)",
    question: "Which process variants correlate with quality escapes?",
    research:
      "Process-intelligence delivery for manufacturing clients: quality escapes sit in the variant path, not only in the defect photo.",
    skills: [
      "SQL event logs",
      "process KPIs",
      "Power BI",
      "quality analysis",
    ],
    technical:
      "Join process variants with quality outcomes and surface the variants that concentrate escapes.",
    business:
      "A variant-level quality brief for process owners: which path to standardise first.",
    dataNote:
      "Celonis-style event samples combined with AI4I manufacturing quality metrics.",
    sources: [
      { name: "Celonis Academy", url: "https://www.celonis.com/academy/" },
      {
        name: "UCI AI4I 2020",
        url: "https://archive.ics.uci.edu/ml/datasets/AI4I+2020+Predictive+Maintenance+Dataset",
      },
    ],
    targets: [
      "BMW",
      "Siemens",
      "Bosch",
      "Celonis clients",
      "Capgemini manufacturing practice",
    ],
    problems: ["D", "E"],
    weight: 3,
  },
  {
    id: "X-04",
    slug: "x-04",
    list: 1,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Payment Fraud Pattern Transfer Analysis (Banking + Retail)",
    question:
      "Do e-commerce fraud patterns inform payment risk monitoring?",
    research:
      "Retail order behaviour and payment-risk flags share exception shapes: the question is whether the pattern transfers without inventing a new model stack.",
    skills: [
      "SQL pattern comparison",
      "Power BI risk views",
      "ops KPI definitions",
    ],
    technical:
      "Compare e-commerce order patterns with payment-fraud flags and test which retail signals belong on a monitoring scorecard.",
    business:
      "A recommendation on which retail patterns should inform payment-risk monitoring — and which should not.",
    dataNote:
      "ULB fraud labels joined with Online Retail II as a documented transfer-analysis pair.",
    sources: [
      {
        name: "ULB Credit Card Fraud",
        url: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud",
      },
      {
        name: "UCI Online Retail II",
        url: "https://archive.ics.uci.edu/ml/datasets/Online+Retail+II",
      },
    ],
    targets: ["Adyen", "N26", "Zalando", "Klarna"],
    problems: ["B"],
    weight: 1,
  },
  {
    id: "X-05",
    slug: "x-05",
    list: 1,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Carbon Cost per Production Unit (Energy + Industrial)",
    question:
      "What € carbon cost is embedded per SKU given hourly grid intensity?",
    research:
      "CSRD and Catena-X sustainability programmes need carbon per unit at hourly grid intensity — not an annual average that plants cannot act on.",
    skills: [
      "SQL allocation logic",
      "emissions factors",
      "Power BI unit-carbon views",
    ],
    technical:
      "Hourly generation mix joined with production volumes to allocate euro carbon cost per SKU or unit.",
    business:
      "A unit-carbon brief that sustainability and production can take into a CSRD or Catena-X discussion.",
    dataNote:
      "SMARD generation mix joined with AI4I-style production volumes.",
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
      "Catena-X sustainability",
      "EU CSRD programmes",
    ],
    problems: ["C", "E"],
    weight: 2,
  },
  {
    id: "X-06",
    slug: "x-06",
    list: 1,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Multi-Sector AI Governance Benchmark (Consulting + All)",
    question:
      "How does AI governance maturity compare across logistics, retail, and industrial EU programmes?",
    research:
      "Analytics Translator work: public AI and governance reports can be scored on the same rubric so sectors become comparable.",
    skills: [
      "governance rubric design",
      "Power BI benchmark views",
      "EU AI Act literacy",
    ],
    technical:
      "Score public company AI and governance disclosures on one rubric across logistics, retail, and industrial programmes.",
    business:
      "A cross-sector maturity brief that consulting or risk leadership can use to prioritise the next control investment.",
    dataNote:
      "EU AI Act framework plus public company AI and governance reports, scored on a documented rubric.",
    sources: [
      { name: "EU AI Act", url: "https://artificialintelligenceact.eu/" },
    ],
    targets: ["Deloitte", "PwC", "SAP", "DHL", "Siemens"],
    problems: ["C"],
    weight: 3,
  },
  {
    id: "X-07",
    slug: "x-07",
    list: 1,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Parcel Volume vs E-Commerce Demand Correlation (Logistics + Retail)",
    question:
      "How tightly do online demand spikes predict parcel volumes 24–48h later?",
    research:
      "Hub and fulfilment planning needs a lead-time link: online demand today should inform parcel volume tomorrow, with the lag made explicit.",
    skills: [
      "SQL lag correlation",
      "Power BI demand–volume views",
      "forecast baseline",
    ],
    technical:
      "Test how tightly e-commerce demand spikes lead parcel volumes at 24–48 hours and document the usable lag.",
    business:
      "A staffing and capacity brief that states how much tomorrow’s parcel plan can trust today’s demand spike.",
    dataNote:
      "Rossmann and Online Retail II as demand proxies, with BEVH and Eurostat e-commerce volume as context.",
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
    targets: ["DHL", "DPD", "Amazon EU", "Zalando fulfilment"],
    problems: ["A", "E"],
    weight: 3,
  },
  {
    id: "X-08",
    slug: "x-08",
    list: 1,
    sectorKey: "cross",
    sectorLabel: "Cross-sector",
    title: "Real-Time Energy Market Data Pipeline & Dashboard (Software + Energy)",
    question:
      "Can ENTSO-E/SMARD feeds be ingested on schedule for trading ops?",
    research:
      "Hybrid Analytics Engineer proof: scheduled ingest, refresh, and light monitoring turn public energy feeds into something trading ops can trust.",
    skills: [
      "Python ingest",
      "SQL",
      "Power BI refresh",
      "Git",
      "basic monitoring",
    ],
    technical:
      "Scheduled ingest of ENTSO-E and SMARD feeds into SQL, with Power BI refresh and a basic pipeline-health check.",
    business:
      "A trading-ops dashboard that stays current on a documented schedule, not a one-off notebook extract.",
    dataNote:
      "SMARD and ENTSO-E Transparency APIs as the live public market feeds.",
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
      "Engie",
      "Capgemini",
      "SAP",
      "consulting energy analytics",
    ],
    problems: ["A"],
    weight: 3,
  },
];
