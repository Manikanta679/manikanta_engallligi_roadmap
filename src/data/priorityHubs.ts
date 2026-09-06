export type HubLane = "base" | "scale" | "destination";

export type PriorityCity = {
  city: string;
  region: string;
  lane: HubLane;
  priorityLabel: string;
  sells: string;
  problems: string;
  dataAi: string;
  roles: string;
  skills: string;
  companies: string;
  whenForMe: string;
  matchKeys: string[];
};

export const locationLane = {
  title: "Target Location",
  body: "From Semester 3 I look toward these cities as the places I will shift to from Leipzig.",
};

export const hubResources = [
  {
    name: "Scale-up.NRW / wirtschaft.nrw",
    url: "https://www.wirtschaft.nrw/nrw-verlaengert-wachstums-und-skalierungsprogramm-bis-2029",
    useFor: "NRW foundings + scale-up programme to 2029",
  },
  {
    name: "Fin.Connect.NRW — AI start-ups",
    url: "https://www.fin-connect-nrw.de/en/studies/the-relevance-of-ai-start-ups-for-nrw",
    useFor: "Cologne / Düsseldorf AI company density",
  },
  {
    name: "Digital Hub Logistics Dortmund",
    url: "https://digitalhublogistics.de/ueber-uns/",
    useFor: "Dortmund logistics + Fraunhofer IML ecosystem",
  },
  {
    name: "Fraunhofer IML",
    url: "https://www.iml.fraunhofer.de/en/",
    useFor: "Logistics research / thesis partner",
  },
  {
    name: "Rheinisches Revier — digital technologies",
    url: "https://www.rheinisches-revier.com/digital-technologies",
    useFor: "Microsoft hyperscalers + AI Village Hürth",
  },
  {
    name: "Greater Zurich Area",
    url: "https://www.greaterzuricharea.com/",
    useFor: "Zurich / Zug hub map",
  },
  {
    name: "SEM — working in Switzerland",
    url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit.html",
    useFor: "Non-EU work permit rules — no EU Blue Card",
  },
  {
    name: "STARTPLATZ Cologne / Düsseldorf",
    url: "https://www.startplatz.de/en/",
    useFor: "NRW startup map — alumni include DeepL, Cognigy, epilot",
  },
  {
    name: "Venturelab — Swiss startups",
    url: "https://www.venturelab.swiss/",
    useFor: "Zurich / Zug startup funding and company checks",
  },
  {
    name: "Seedtable — Cologne startups",
    url: "https://seedtable.com/best-startups-in-cologne",
    useFor: "Cologne startup shortlist I used to pick epilot / Envelio / ONIQ / how.fm / Buynomics",
  },
  {
    name: "Port of Rotterdam",
    url: "https://www.portofrotterdam.com/en",
    useFor: "Rotterdam port / digital twin / later NL logistics door",
  },
  {
    name: "Portbase",
    url: "https://www.portbase.com/en/",
    useFor: "NL port community data layer (Rotterdam + Amsterdam)",
  },
  {
    name: "Techleap",
    url: "https://www.techleap.nl/",
    useFor: "Netherlands scale-up map — Booking, Adyen, Picnic, Mollie",
  },
  {
    name: "I amsterdam — business",
    url: "https://www.iamsterdam.com/en/business",
    useFor: "Amsterdam later destination — product / payments / logistics door",
  },
  {
    name: "CyberForum Karlsruhe",
    url: "https://www.cyberforum.de/",
    useFor: "Karlsruhe IT / startup map — not a Target Location city",
  },
  {
    name: "Metropolregion Rhein-Neckar",
    url: "https://www.m-r-n.com/en/",
    useFor: "Heidelberg / Walldorf / Mannheim company belt — not a Target Location city",
  },
];

export const newsResources = [
  {
    name: "NeuronFeed Germany",
    url: "https://neuronfeed.com/country/germany",
    useFor: "Germany funding and growth news for NRW / DE companies",
  },
  {
    name: "Tech.eu",
    url: "https://tech.eu",
    useFor: "European tech and funding news, including Zurich / DACH",
  },
];

export const priorityCities: PriorityCity[] = [
  {
    city: "Düsseldorf",
    region: "NRW Target",
    lane: "scale",
    priorityLabel: "Consulting + CX AI HQ belt",
    sells: "Professional services, insurance (ERGO), chemicals/consumer (Henkel), conversational AI (Cognigy), Metro.",
    problems: "Customer-service cost, demand analytics, EU AI Act on CX agents, SAP + data cleanup inside DAX clients.",
    dataAi: "Agent orchestration (Cognigy × Lufthansa / E.ON / Henkel / ERGO / DHL), marketing funnels, Big 4 audit inventories.",
    roles: "Business / Data Analyst, Analytics Consultant, CX analytics, AI governance junior.",
    skills: "SQL, Power BI, Python, German B2 for client work, EU AI Act literacy, storytelling.",
    companies: "NiCE Cognigy, Henkel, ERGO, Capgemini, Big 4, Metro, Uniper, Wakeline.",
    whenForMe:
      "From Semester 3 — consulting / translator intern lane if I move. Client-facing.",
    matchKeys: ["düsseldorf", "dusseldorf"],
  },
  {
    city: "Cologne",
    region: "NRW Target",
    lane: "scale",
    priorityLabel: "My strongest NRW city",
    sells: "Groceries (REWE), language AI (DeepL), aviation group (Lufthansa HQ), Cologne insurance.",
    problems: "Too many retail AI pilots, forecasting / stockouts, CX, flight-ops exceptions, enterprise translation quality.",
    dataAi: "REWE Digital forecasting and agentic commerce, DeepL product analytics, Lufthansa ops analytics.",
    roles: "Business Data Analyst (retail), Analytics Engineer, forecasting analyst, product analyst.",
    skills: "SQL, Power BI, Python, time-series, Azure, experimentation.",
    companies: "REWE / REWE Digital, DeepL, Lufthansa, epilot, Envelio, ONIQ, how.fm, Buynomics.",
    whenForMe:
      "From Semester 3 — strongest NRW Werkstudent / 2028 job city. Matches Problems A, B, D.",
    matchKeys: ["cologne", "köln", "koln"],
  },
  {
    city: "Dortmund / Essen / Duisburg",
    region: "NRW Target",
    lane: "scale",
    priorityLabel: "Ruhr — one labour market",
    sells: "Energy (E.ON, RWE), freight (DB Schenker), steel (thyssenkrupp), inland port (duisport), logistics research (Fraunhofer IML).",
    problems: "Grid / digital twin, SAP at utilities, plant data quality, warehouse localisation, freight visibility.",
    dataAi: "Time-series, process mining, warehouse vision, route / ETA, predictive maintenance.",
    roles: "Ops / energy / logistics analyst, IML research assistant, Analytics Engineer on SAP + IoT.",
    skills: "Python, SQL, time-series, IoT, Power BI, German for utilities / Mittelstand.",
    companies: "E.ON, RWE, DB Schenker, thyssenkrupp, duisport, adesso, Fraunhofer IML, Logistikbude.",
    whenForMe:
      "From Semester 3 — logistics + energy. Dortmund = research/thesis; Essen = corporate job door.",
    matchKeys: ["dortmund", "essen", "duisburg", "leverkusen"],
  },
  {
    city: "Bonn",
    region: "NRW Target",
    lane: "scale",
    priorityLabel: "Telco + DHL HQ",
    sells: "Deutsche Telekom / T-Systems sovereign cloud; DHL Group HQ.",
    problems: "Public-sector + enterprise AI, logistics data foundations, EU AI Act on ops AI.",
    dataAi: "Cloud analytics, AI monitoring, logistics demand forecasting.",
    roles: "Cloud / data analyst, DHL Data & AI adjacent roles.",
    skills: "Azure / cloud, SQL, governance, German.",
    companies: "T-Systems, Deutsche Telekom, DHL Group.",
    whenForMe:
      "From Semester 3 — same state as Cologne, 30 minutes. Telco / DHL HQ lane.",
    matchKeys: ["bonn"],
  },
  {
    city: "Zurich",
    region: "Zurich Area Target destination",
    lane: "destination",
    priorityLabel: "Wealth, insurance, Big Tech, ABB",
    sells: "Wealth (UBS), insurance (Zurich Insurance, Swiss Re), Google engineering, ABB automation, ETH research.",
    problems: "Model risk, explainability, fraud, claims, trading surveillance, robotics reliability.",
    dataAi: "Risk models, customer intelligence, industrial AI, research-to-product.",
    roles: "Decision Scientist function, risk / insurance analyst, data engineer, ML engineer. Junior dashboard roles are crowded.",
    skills: "Python, SQL, statistics, governance, English at Big Tech, German at Swiss corporates.",
    companies: "Google, UBS, Zurich Insurance, Swiss Re, ABB, Unique, Yokoy, Decentriq, Squirro, Embotech.",
    whenForMe:
      "From Semester 3 I research it; apply 2028–30 after a German role + sponsor. No EU Blue Card in Switzerland.",
    matchKeys: ["zurich", "zürich", "rüschlikon"],
  },
  {
    city: "Zug / Baar",
    region: "Zurich Area Target destination",
    lane: "destination",
    priorityLabel: "Commodities + Crypto Valley + diagnostics",
    sells: "Commodity trading (Glencore Baar), protocol legal homes, Roche Diagnostics Rotkreuz, holding HQs.",
    problems: "KYC / AML, trade-finance documents, sanctions, commodity risk — Problem C + B, not chatbot demos.",
    dataAi: "Compliance automation, document AI, risk scoring, supply-chain provenance.",
    roles: "Compliance / risk / ops analytics. Hard fresher door.",
    skills: "Same core stack + compliance vocabulary. I do not need to become a crypto engineer.",
    companies: "Glencore, Crypto Valley names, Roche Diagnostics, Kühne+Nagel (Schindellegi, same labour region).",
    whenForMe:
      "From Semester 3 — live/commute option next to Zurich later. Not a first-job crypto bet.",
    matchKeys: ["zug", "baar", "schindellegi", "rotkreuz"],
  },
  {
    city: "Amsterdam",
    region: "Netherlands Target destination",
    lane: "destination",
    priorityLabel: "Product, payments, marketplace analytics",
    sells: "Travel (Booking.com), payments (Adyen, Mollie), grocery last-mile (Picnic), maps (TomTom), health-tech (Philips), retail (Ahold Zaandam, bol Utrecht).",
    problems: "Experimentation at scale, pricing, demand forecast, last-mile routing, KYC on payments — Problems A, B, D.",
    dataAi: "A/B platforms, routing optimisation, payments risk, marketplace ranking.",
    roles: "Product analyst, Business Data Analyst, ops analyst. English office language. Junior dashboard factories exist — skip those.",
    skills: "SQL, Python, experimentation, storytelling. No German required.",
    companies: "Booking.com, Adyen, Picnic, ING, Philips, TomTom, Flexport.",
    whenForMe:
      "Later — after a German NRW role. Same rule as Zurich, but no Swiss sponsor wall and no German required.",
    matchKeys: ["amsterdam", "utrecht", "zaandam"],
  },
  {
    city: "Rotterdam",
    region: "Netherlands Target destination",
    lane: "destination",
    priorityLabel: "Port, terminals, retail last-mile",
    sells: "Port authority, tank storage (Vopak), terminals (APM / Maersk), retail (Coolblue), Picnic FCs in Dordrecht / Ridderkerk, Portbase data layer.",
    problems: "Congestion, vessel/truck ETA, warehouse localisation, dirty EDI between ship / truck / terminal.",
    dataAi: "Port community data, digital twin, fulfilment analytics, routing.",
    roles: "Ops / logistics analyst, port-planning analyst. English common.",
    skills: "SQL, Python, time-series, logistics vocabulary. Same stack as DHL / Schenker.",
    companies: "Port of Rotterdam, Vopak, Coolblue, Maersk / APM, Portbase, Picnic FCs.",
    whenForMe:
      "Later — same Randstad labour market as Amsterdam, ~1 hour. Port/ops flavour, not a Semester 3 move.",
    matchKeys: ["rotterdam", "dordrecht", "ridderkerk", "schiedam"],
  },
];

export function companyMatchesCity(
  company: { locations: string[]; headquarters: string },
  city: PriorityCity,
): boolean {
  const hay = `${company.locations.join(" ")} ${company.headquarters}`.toLowerCase();
  return city.matchKeys.some((key) => hay.includes(key));
}

export const locationSequence = [
  {
    label: "NRW",
    lane: "Priority job region",
    note: "Düsseldorf, Cologne, Dortmund / Essen, Duisburg, Bonn — German job hunt.",
  },
  {
    label: "Zurich / Zug",
    lane: "Priority job region",
    note: "Premium DACH destination. Employer must sponsor. No EU Blue Card.",
  },
  {
    label: "Amsterdam / Rotterdam",
    lane: "Later destination",
    note: "English logistics + product. After a German NRW role. No German required.",
  },
] as const;
