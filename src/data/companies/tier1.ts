import { buildCompany, type CompanySeed } from "../sectorProfiles";
import type { Company } from "@/types/company";

const seeds: CompanySeed[] = [
  {
    name: "SAP",
    sector: "Software/Tech",
    locations: ["Walldorf", "Berlin", "Dresden", "Leipzig"],
    headquarters: "Walldorf, Germany",
    headquartersHighlight: "Walldorf (HQ) — strong DE graduate & Werkstudent programs",
    website: "https://www.sap.com",
    domain: "sap.com",
    revenue: "~€34B (group, recent FY — verify IR)",
    employees: "~100k+",
    tags: ["deutschlandsstipendium"],
    brief:
      "Europe’s largest enterprise software company; ERP, cloud business applications, and business AI across finance, supply chain, HR, and analytics.",
    europeFocus:
      "HQ and major engineering footprint in Germany (incl. Dresden/Leipzig region). Primary EU enterprise software champion.",
    overrides: {
      sells:
        "ERP and business applications (S/4HANA, SuccessFactors, Ariba, Concur, Business Technology Platform) plus business AI copilots.",
      customers:
        "Global enterprises and mid-market; heavy DACH manufacturing, chemicals, retail, and public sector penetration.",
      monetization:
        "Cloud subscriptions (rising ARR), software support, and services; shifting from on-prem license to cloud.",
      problems:
        "Cloud migration pace, competition from hyperscalers/Salesforce, AI differentiation, and talent in EU engineering hubs.",
      aiValue:
        "Joule copilots, embedded AI in ERP processes, document intelligence, and industry process automation.",
      rolesHiring: [
        "Software Developer (ABAP/Java/JS)",
        "Data Scientist",
        "Cloud Architect",
        "Werkstudent / Graduate",
        "Product Manager",
      ],
      skillsNeeded: [
        "Java/JS/Python",
        "SAP BTP",
        "SQL",
        "Cloud",
        "Process knowledge",
        "German helpful",
      ],
      strategy2to3Years:
        "Accelerate Business AI (Joule), grow cloud backlog conversion, and deepen industry cloud — verify latest SAP Capital Markets Day / IR releases.",
    },
    sources: [
      { title: "SAP Investor Relations", url: "https://www.sap.com/investors/en/index.html" },
      { title: "SAP Careers (DE)", url: "https://jobs.sap.com/" },
      { title: "Official site", url: "https://www.sap.com" },
    ],
    imageHint: "enterprise software dashboard",
  },
  {
    name: "Microsoft",
    sector: "Software/Cloud",
    locations: ["Munich", "Berlin"],
    headquarters: "Redmond, USA (EU hubs: Munich, Berlin)",
    headquartersHighlight: "Munich & Berlin — major DE engineering/sales hubs",
    website: "https://www.microsoft.com",
    domain: "microsoft.com",
    brief:
      "Hyperscale cloud (Azure), productivity (M365), developer platforms (GitHub), and Copilot AI across enterprise software.",
    europeFocus:
      "Large German presence; Azure EU regions and enterprise Copilot rollouts across DACH.",
    overrides: {
      strategy2to3Years:
        "Scale Copilot monetization, Azure AI capacity in EU, and security portfolio — confirm via Microsoft earnings and Azure region updates.",
    },
    sources: [
      { title: "Microsoft", url: "https://www.microsoft.com" },
      { title: "Azure", url: "https://azure.microsoft.com" },
    ],
    imageHint: "cloud data center",
  },
  {
    name: "Google",
    sector: "Software/Cloud/AI",
    locations: ["Munich", "Berlin", "Zurich"],
    headquarters: "Mountain View, USA (EU: Zurich major engineering)",
    headquartersHighlight: "Zurich 🇨🇭 engineering hub + Munich/Berlin DE offices",
    website: "https://about.google",
    domain: "google.com",
    brief:
      "Search, ads, Android, YouTube, Google Cloud, and DeepMind/Gemini AI research-to-product pipeline.",
    europeFocus:
      "Zurich is a flagship EU engineering site; Munich/Berlin for cloud, ads, and engineering roles.",
    imageHint: "ai research lab",
  },
  {
    name: "Amazon / AWS",
    sector: "Cloud + Retail",
    locations: ["Berlin", "Munich", "Dresden"],
    headquarters: "Seattle, USA (DE: Berlin/Munich/Dresden)",
    headquartersHighlight: "Berlin & Munich tech; Dresden development center",
    website: "https://aws.amazon.com",
    domain: "aws.amazon.com",
    brief:
      "Global e-commerce plus AWS — the leading cloud infrastructure platform powering EU startups and enterprises.",
    europeFocus:
      "AWS EU regions + growing German engineering (incl. Dresden). Retail logistics footprint across DE.",
    imageHint: "cloud infrastructure",
  },
  {
    name: "IBM",
    sector: "Software/Consulting",
    locations: ["Ehningen"],
    headquarters: "Armonk, USA (DE: Ehningen near Stuttgart)",
    headquartersHighlight: "Ehningen — IBM Deutschland hub / mainframe & hybrid cloud",
    website: "https://www.ibm.com",
    domain: "ibm.com",
    brief:
      "Hybrid cloud (Red Hat), enterprise AI (watsonx), consulting, and infrastructure software for regulated industries.",
    europeFocus:
      "Strong German consulting + mainframe/enterprise installed base; Ehningen campus.",
    imageHint: "hybrid cloud",
  },
  {
    name: "T-Systems / Deutsche Telekom",
    sector: "IT Services/Telecom",
    locations: ["Bonn", "Frankfurt", "Leipzig"],
    headquarters: "Bonn, Germany",
    headquartersHighlight: "Bonn HQ — Leipzig relevant for DE ops/IT",
    website: "https://www.t-systems.com",
    domain: "t-systems.com",
    brief:
      "Deutsche Telekom’s enterprise IT arm: cloud, digitalization, sovereignty offerings, and telecom-adjacent services.",
    europeFocus:
      "German-rooted sovereign cloud narratives; major public-sector and enterprise accounts in DACH.",
    imageHint: "telecom network",
  },
  {
    name: "Siemens",
    sector: "Industrial/Software",
    locations: ["Munich"],
    headquarters: "Munich, Germany",
    headquartersHighlight: "Munich HQ — industrial software & automation leader",
    website: "https://www.siemens.com",
    domain: "siemens.com",
    brief:
      "Industrial automation, infrastructure, mobility, and software (Digital Industries / Xcelerator) spanning OT+IT.",
    europeFocus:
      "Flagship German industrial-tech group; deep factory digitalization across EU.",
    imageHint: "smart factory",
  },
  {
    name: "Dassault Systèmes",
    sector: "Software",
    locations: ["Paris"],
    headquarters: "Vélizy-Villacoublay / Paris region, France",
    headquartersHighlight: "Paris region HQ — 3DEXPERIENCE platform",
    website: "https://www.3ds.com",
    domain: "3ds.com",
    brief:
      "3D design, PLM, and simulation software (CATIA, SolidWorks, SIMULIA) for industrial digital twins.",
    europeFocus:
      "French HQ with strong EU industrial customer base; relevant near SAP-region ecosystem.",
    imageHint: "3d digital twin",
  },
  {
    name: "Amadeus",
    sector: "Travel-tech",
    locations: ["Madrid"],
    headquarters: "Madrid, Spain",
    headquartersHighlight: "Madrid HQ — global travel technology",
    website: "https://amadeus.com",
    domain: "amadeus.com",
    brief:
      "Mission-critical travel technology for airlines, hotels, and travel sellers (GDS, PSS, shopping/retailing).",
    europeFocus:
      "European travel-tech champion headquartered in Madrid.",
    imageHint: "airline systems",
  },
  {
    name: "ASML",
    sector: "Semiconductor",
    locations: ["Veldhoven"],
    headquarters: "Veldhoven, Netherlands",
    headquartersHighlight: "Veldhoven 🇳🇱 — EUV lithography monopoly-scale tech",
    website: "https://www.asml.com",
    domain: "asml.com",
    brief:
      "World’s critical supplier of advanced lithography systems enabling leading-edge semiconductor manufacturing.",
    europeFocus:
      "European deep-tech cornerstone of the global chip supply chain.",
    imageHint: "semiconductor lithography",
  },
  {
    name: "Ericsson",
    sector: "Telecom/AI",
    locations: ["Stockholm"],
    headquarters: "Stockholm, Sweden",
    headquartersHighlight: "Stockholm HQ",
    website: "https://www.ericsson.com",
    domain: "ericsson.com",
    brief:
      "Mobile network infrastructure, 5G, and network software/AI for telecom operators worldwide.",
    europeFocus:
      "Nordic telecom equipment leader with EU operator relationships.",
    imageHint: "5g network",
  },
  {
    name: "Nokia",
    sector: "Telecom/AI",
    locations: ["Espoo"],
    headquarters: "Espoo, Finland",
    headquartersHighlight: "Espoo 🇫🇮 HQ",
    website: "https://www.nokia.com",
    domain: "nokia.com",
    brief:
      "Network infrastructure, IP routing, optical, and enterprise campus/private wireless solutions.",
    europeFocus:
      "Finnish HQ; major European network vendor alongside Ericsson.",
    imageHint: "network equipment",
  },
  {
    name: "McKinsey (QuantumBlack)",
    sector: "Consulting",
    locations: ["Munich", "Berlin", "Frankfurt"],
    headquarters: "Global (DE offices: Munich, Berlin, Frankfurt)",
    headquartersHighlight: "DE offices — QuantumBlack is the AI/analytics arm",
    website: "https://www.mckinsey.com",
    domain: "mckinsey.com",
    brief:
      "Top-tier strategy consulting; QuantumBlack delivers advanced analytics and AI transformations for enterprises.",
    europeFocus:
      "Strong DACH office network advising industrials, banks, and tech adopters.",
    imageHint: "strategy consulting",
  },
  {
    name: "BCG (BCG X)",
    sector: "Consulting",
    locations: ["Munich", "Berlin", "Frankfurt"],
    headquarters: "Global (DE: Munich, Berlin, Frankfurt)",
    headquartersHighlight: "BCG X — tech/build + AI unit in DACH",
    website: "https://www.bcg.com",
    domain: "bcg.com",
    brief:
      "Strategy consulting with BCG X building digital products, data platforms, and AI solutions with clients.",
    europeFocus:
      "Deep German industrial and corporate client base.",
    imageHint: "digital consulting",
  },
  {
    name: "Accenture",
    sector: "Consulting/IT",
    locations: ["Kronberg"],
    headquarters: "Dublin (global); DE hub Kronberg/Frankfurt area",
    headquartersHighlight: "Kronberg (Frankfurt area) — major DE delivery hub",
    website: "https://www.accenture.com",
    domain: "accenture.com",
    brief:
      "Global professional services: strategy, consulting, technology, operations, and industry X / AI delivery at scale.",
    europeFocus:
      "Large German workforce delivering cloud and AI transformations.",
    imageHint: "it consulting",
  },
  {
    name: "Deloitte / KPMG / PwC",
    sector: "Consulting",
    locations: ["Frankfurt", "Munich", "Berlin"],
    headquarters: "Big4 DE hubs: Frankfurt, Munich, Berlin",
    headquartersHighlight: "Frankfurt financial hub + Munich/Berlin",
    website: "https://www2.deloitte.com",
    domain: "deloitte.com",
    brief:
      "Big Four audit/advisory firms with large technology, risk, and AI consulting practices across Germany.",
    europeFocus:
      "Ubiquitous in German corporate compliance, finance transformation, and tech advisory.",
    imageHint: "corporate advisory",
  },
  {
    name: "Capgemini",
    sector: "Consulting/IT",
    locations: ["Berlin", "Frankfurt", "Paris"],
    headquarters: "Paris, France",
    headquartersHighlight: "Paris HQ — strong DE delivery (Berlin/Frankfurt)",
    website: "https://www.capgemini.com",
    domain: "capgemini.com",
    brief:
      "European IT services and consulting leader spanning engineering, cloud, and data/AI.",
    europeFocus:
      "French HQ with substantial German operations.",
    imageHint: "digital engineering",
  },
  {
    name: "Atos / Sopra Steria",
    sector: "IT Services",
    locations: ["Paris"],
    headquarters: "Paris, France (+ DE presence)",
    headquartersHighlight: "Paris — EU IT services; DE delivery footprint",
    website: "https://atos.net",
    domain: "atos.net",
    brief:
      "European IT services groups focused on digital, cloud, cybersecurity, and public-sector systems.",
    europeFocus:
      "Franco-European IT services with German client delivery.",
    imageHint: "enterprise it",
  },
  {
    name: "NTT Data",
    sector: "IT Services",
    locations: ["Munich"],
    headquarters: "Tokyo (DE: Munich)",
    headquartersHighlight: "Munich — key German base",
    website: "https://www.nttdata.com",
    domain: "nttdata.com",
    brief:
      "Global IT services and digital consulting; strong automotive and industrial accounts in Germany.",
    europeFocus:
      "Munich hub serving DACH enterprises.",
    imageHint: "it services",
  },
  {
    name: "TCS / Infosys / Wipro / Cognizant",
    sector: "IT Services",
    locations: ["Frankfurt", "Munich"],
    headquarters: "India HQ groups with DE hubs Frankfurt/Munich",
    headquartersHighlight: "Frankfurt & Munich — visa-friendly hiring pathways",
    website: "https://www.tcs.com",
    domain: "tcs.com",
    tags: ["visa-friendly"],
    brief:
      "Global IT services majors with German delivery centers; often more visa-accessible entry routes.",
    europeFocus:
      "Large German client portfolios in banking, auto, and manufacturing.",
    imageHint: "global delivery center",
  },
  {
    name: "DHL Group",
    sector: "Logistics",
    locations: ["Bonn", "Leipzig"],
    headquarters: "Bonn, Germany",
    headquartersHighlight: "Bonn HQ — Leipzig is a major European air hub",
    website: "https://www.dhl.com",
    domain: "dhl.com",
    tags: ["deutschlandsstipendium"],
    brief:
      "World’s leading logistics group (Deutsche Post DHL): express, global forwarding, supply chain, and e-commerce logistics.",
    europeFocus:
      "German HQ; Leipzig hub is strategically relevant for my location.",
    overrides: {
      strategy2to3Years:
        "Automation, sustainable aviation fuel/green logistics, and digital twinning of networks — verify DHL Group strategy house publications.",
    },
    sources: [
      { title: "DHL Group", url: "https://www.dhl.com" },
      { title: "DHL Group Investors", url: "https://www.dpdhl.com/en/investors.html" },
    ],
    imageHint: "logistics hub leipzig",
  },
  {
    name: "Deutsche Bahn / DB Systel",
    sector: "Logistics/Mobility",
    locations: ["Berlin", "Frankfurt"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ — DB Systel is the digital/IT subsidiary",
    website: "https://www.deutschebahn.com",
    domain: "deutschebahn.com",
    brief:
      "Germany’s national rail operator; DB Systel drives IT, digital platforms, and data for mobility operations.",
    europeFocus:
      "Critical German mobility infrastructure employer with large data/ops problems.",
    imageHint: "rail mobility",
  },
  {
    name: "DB Schenker",
    sector: "Logistics",
    locations: ["Essen"],
    headquarters: "Essen, Germany",
    headquartersHighlight: "Essen HQ",
    website: "https://www.dbschenker.com",
    domain: "dbschenker.com",
    brief:
      "Global freight forwarding and contract logistics (DB Group); land, air, ocean, and warehousing.",
    europeFocus:
      "Major European freight network rooted in Germany.",
    imageHint: "freight logistics",
  },
  {
    name: "Kühne + Nagel",
    sector: "Logistics",
    locations: ["Schindellegi"],
    headquarters: "Schindellegi, Switzerland",
    headquartersHighlight: "Schindellegi 🇨🇭 HQ",
    website: "https://www.kuehne-nagel.com",
    domain: "kuehne-nagel.com",
    brief:
      "Global logistics leader in sea/air freight and contract logistics with strong European backbone.",
    europeFocus:
      "Swiss HQ with deep EU trade-lane coverage.",
    imageHint: "global freight",
  },
  {
    name: "Lufthansa",
    sector: "Aviation",
    locations: ["Cologne", "Frankfurt"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne HQ — Frankfurt major hub",
    website: "https://www.lufthansagroup.com",
    domain: "lufthansagroup.com",
    brief:
      "Europe’s major airline group spanning passenger, cargo, MRO (Lufthansa Technik), and digital aviation services.",
    europeFocus:
      "German aviation flagship with Frankfurt as primary hub.",
    imageHint: "aviation hub",
  },
  {
    name: "Maersk / DSV",
    sector: "Logistics",
    locations: ["Copenhagen"],
    headquarters: "Copenhagen, Denmark (Maersk); DSV Denmark/global",
    headquartersHighlight: "Copenhagen 🇩🇰 — integrated logistics giants",
    website: "https://www.maersk.com",
    domain: "maersk.com",
    brief:
      "Integrated container logistics (Maersk) and freight forwarding scale-player (DSV) shaping EU trade flows.",
    europeFocus:
      "Nordic-rooted global logistics with heavy European corridor exposure.",
    imageHint: "container shipping",
  },
  {
    name: "Schwarz Group (Lidl/Kaufland)",
    sector: "Retail",
    locations: ["Neckarsulm"],
    headquarters: "Neckarsulm, Germany",
    headquartersHighlight: "Neckarsulm HQ",
    website: "https://gruppe.schwarz",
    domain: "gruppe.schwarz",
    brief:
      "One of Europe’s largest retailers operating Lidl and Kaufland with massive supply-chain and data scale.",
    europeFocus:
      "German HQ; pan-European grocery footprint.",
    imageHint: "retail supply chain",
  },
  {
    name: "Otto Group",
    sector: "Retail/E-commerce",
    locations: ["Hamburg"],
    headquarters: "Hamburg, Germany",
    headquartersHighlight: "Hamburg HQ",
    website: "https://www.ottogroup.com",
    domain: "ottogroup.com",
    brief:
      "Major European e-commerce and retail services group with strong German digital commerce heritage.",
    europeFocus:
      "Hamburg-based; influential in DE e-commerce tech and logistics.",
    imageHint: "ecommerce warehouse",
  },
  {
    name: "REWE / Aldi",
    sector: "Retail",
    locations: ["Cologne", "Essen"],
    headquarters: "Cologne (REWE) / Essen area (Aldi Nord context)",
    headquartersHighlight: "Cologne / Essen — German grocery giants",
    website: "https://www.rewe-group.com",
    domain: "rewe-group.com",
    brief:
      "Leading German grocery retailers with dense store networks and growing digital/fulfillment capabilities.",
    europeFocus:
      "Core German food retail; significant private-label and supply-chain analytics needs.",
    imageHint: "grocery retail",
  },
  {
    name: "Ahold Delhaize / Inditex / Carrefour",
    sector: "Retail",
    locations: ["Netherlands", "Spain", "France"],
    headquarters: "NL / ES / FR respectively",
    headquartersHighlight: "Pan-EU retail champions (NL 🇳🇱 / ES 🇪🇸 / FR 🇫🇷)",
    website: "https://www.aholddelhaize.com",
    domain: "aholddelhaize.com",
    brief:
      "Large European retail groups spanning grocery and fashion with advanced supply-chain and e-comm operations.",
    europeFocus:
      "Multi-country EU retail scale — useful Tier-1 European comparison set.",
    imageHint: "european retail",
  },
  {
    name: "Deutsche Bank / Commerzbank",
    sector: "Banking",
    locations: ["Frankfurt"],
    headquarters: "Frankfurt, Germany",
    headquartersHighlight: "Frankfurt — Germany’s banking capital",
    website: "https://www.db.com",
    domain: "db.com",
    brief:
      "Germany’s major universal banks with corporate, retail, and capital-markets franchises centered in Frankfurt.",
    europeFocus:
      "Frankfurt HQ ecosystem; heavy regulation and data/AI in risk & ops.",
    imageHint: "frankfurt banking",
  },
  {
    name: "Allianz / Munich Re",
    sector: "Insurance",
    locations: ["Munich"],
    headquarters: "Munich, Germany",
    headquartersHighlight: "Munich — global insurance & reinsurance hub",
    website: "https://www.allianz.com",
    domain: "allianz.com",
    brief:
      "Global insurance (Allianz) and reinsurance (Munich Re) leaders with deep risk modeling and climate analytics.",
    europeFocus:
      "Munich is a world insurance center; strong quant/data culture.",
    imageHint: "insurance risk",
  },
  {
    name: "DZ Bank",
    sector: "Banking",
    locations: ["Frankfurt"],
    headquarters: "Frankfurt, Germany",
    headquartersHighlight: "Frankfurt HQ — cooperative banking central institution",
    website: "https://www.dzbank.com",
    domain: "dzbank.com",
    brief:
      "Central institution for Germany’s cooperative banks; capital markets, corporate banking, and transaction services.",
    europeFocus:
      "Frankfurt-based; systemic role in German cooperative financial network.",
    imageHint: "cooperative banking",
  },
  {
    name: "ING / BNP Paribas / Santander",
    sector: "Banking",
    locations: ["Netherlands", "France", "Spain"],
    headquarters: "NL 🇳🇱 / FR 🇫🇷 / ES 🇪🇸",
    headquartersHighlight: "Major EU retail & wholesale banks",
    website: "https://www.ing.com",
    domain: "ing.com",
    brief:
      "Leading European banks with digital retail strength (ING) and broad universal banking franchises.",
    europeFocus:
      "Pan-European banking comparison set for digital & risk AI roles.",
    imageHint: "digital banking",
  },
  {
    name: "UBS / Zurich Insurance",
    sector: "Banking/Insurance",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 — global wealth & insurance hub",
    website: "https://www.ubs.com",
    domain: "ubs.com",
    brief:
      "Global wealth/investment banking (UBS) and P&C/life insurance (Zurich) headquartered in Switzerland.",
    europeFocus:
      "Zurich financial center; high bar for risk, data, and engineering talent.",
    imageHint: "zurich finance",
  },
  {
    name: "AXA",
    sector: "Insurance",
    locations: ["Paris"],
    headquarters: "Paris, France",
    headquartersHighlight: "Paris HQ",
    website: "https://www.axa.com",
    domain: "axa.com",
    brief:
      "Global insurance and asset management group with major European franchise.",
    europeFocus:
      "French HQ; broad EU insurance footprint.",
    imageHint: "insurance group",
  },
  {
    name: "BMW",
    sector: "Automotive",
    locations: ["Munich", "Leipzig"],
    headquarters: "Munich, Germany",
    headquartersHighlight: "Munich HQ — Leipzig plant is highly relevant locally",
    website: "https://www.bmwgroup.com",
    domain: "bmwgroup.com",
    tags: ["deutschlandsstipendium"],
    brief:
      "Premium automotive OEM investing heavily in electrification, software-defined vehicles, and digital manufacturing.",
    europeFocus:
      "Munich HQ + Leipzig production — direct geographic relevance for my roadmap.",
    overrides: {
      strategy2to3Years:
        "NEUE KLASSE EV/architecture ramp, software stacks, and Leipzig production relevance — verify BMW Group reports.",
    },
    sources: [
      { title: "BMW Group", url: "https://www.bmwgroup.com" },
      { title: "BMW Group Reports", url: "https://www.bmwgroup.com/en/investor-relations.html" },
    ],
    imageHint: "automotive plant leipzig",
  },
  {
    name: "Mercedes-Benz",
    sector: "Automotive",
    locations: ["Stuttgart"],
    headquarters: "Stuttgart, Germany",
    headquartersHighlight: "Stuttgart HQ",
    website: "https://group.mercedes-benz.com",
    domain: "mercedes-benz.com",
    brief:
      "Premium OEM focused on luxury EVs, software-defined vehicle ambitions, and digital customer services.",
    europeFocus:
      "Stuttgart automotive core; major DE engineering employer.",
    imageHint: "premium automotive",
  },
  {
    name: "Volkswagen / CARIAD",
    sector: "Automotive/Software",
    locations: ["Wolfsburg", "Ingolstadt"],
    headquarters: "Wolfsburg, Germany (CARIAD software unit)",
    headquartersHighlight: "Wolfsburg / Ingolstadt — CARIAD is the software stack unit",
    website: "https://www.volkswagenag.com",
    domain: "volkswagenag.com",
    brief:
      "World’s largest automaker group; CARIAD builds unified software/EE architectures and digital services.",
    europeFocus:
      "German industrial scale; software transformation is the hiring magnet for data/AI talent.",
    imageHint: "automotive software",
  },
  {
    name: "Porsche",
    sector: "Automotive",
    locations: ["Stuttgart", "Leipzig"],
    headquarters: "Stuttgart, Germany",
    headquartersHighlight: "Stuttgart HQ — Leipzig plant for Macan/related production",
    website: "https://www.porsche.com",
    domain: "porsche.com",
    brief:
      "Premium sports/luxury OEM with Leipzig manufacturing footprint and strong digital/customer analytics needs.",
    europeFocus:
      "Stuttgart + Leipzig plant — local relevance similar to BMW Leipzig.",
    imageHint: "porsche leipzig plant",
  },
  {
    name: "Bosch",
    sector: "Industrial/Auto",
    locations: ["Gerlingen"],
    headquarters: "Gerlingen (Stuttgart area), Germany",
    headquartersHighlight: "Gerlingen/Stuttgart — global supplier & IoT/industrial tech",
    website: "https://www.bosch.com",
    domain: "bosch.com",
    brief:
      "Global supplier: automotive tech, industrial tech, consumer goods, and Bosch IoT/AI software.",
    europeFocus:
      "German Mittelstand-scale giant; deep embedded + industrial AI opportunities.",
    imageHint: "industrial IoT",
  },
  {
    name: "ABB",
    sector: "Industrial automation",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 HQ",
    website: "https://global.abb",
    domain: "abb.com",
    brief:
      "Electrification and automation technology: robotics, drives, process automation, and software.",
    europeFocus:
      "Swiss HQ with major EU industrial installed base.",
    imageHint: "industrial robotics",
  },
  {
    name: "Airbus",
    sector: "Aerospace",
    locations: ["Toulouse", "Hamburg"],
    headquarters: "Toulouse, France (major DE site: Hamburg)",
    headquartersHighlight: "Toulouse HQ — Hamburg is a major German aero site",
    website: "https://www.airbus.com",
    domain: "airbus.com",
    brief:
      "Commercial aircraft, helicopters, defence & space; massive digital manufacturing and engineering data problems.",
    europeFocus:
      "Franco-German aerospace backbone of Europe.",
    imageHint: "aircraft manufacturing",
  },
  {
    name: "Stellantis / Volvo",
    sector: "Automotive",
    locations: ["Amsterdam", "Gothenburg"],
    headquarters: "Amsterdam 🇳🇱 (Stellantis) / Gothenburg 🇸🇪 (Volvo Cars)",
    headquartersHighlight: "NL / SE automotive HQs",
    website: "https://www.stellantis.com",
    domain: "stellantis.com",
    brief:
      "Multi-brand OEM group (Stellantis) and premium EV-focused Volvo Cars — European automotive software transformation peers.",
    europeFocus:
      "EU OEM peer set for SDV and electrification strategy comparison.",
    imageHint: "european oem",
  },
  {
    name: "E.ON / RWE",
    sector: "Energy",
    locations: ["Essen"],
    headquarters: "Essen, Germany",
    headquartersHighlight: "Essen — German energy majors",
    website: "https://www.eon.com",
    domain: "eon.com",
    brief:
      "Major German energy companies spanning networks/retail (E.ON) and generation/trading (RWE) in the energy transition.",
    europeFocus:
      "Core German Energiewende employers with forecasting and grid-data needs.",
    imageHint: "energy transition",
  },
  {
    name: "EnBW / Siemens Energy",
    sector: "Energy",
    locations: ["Karlsruhe", "Munich"],
    headquarters: "Karlsruhe (EnBW) / Munich area (Siemens Energy)",
    headquartersHighlight: "Karlsruhe / Munich — grid & energy tech",
    website: "https://www.enbw.com",
    domain: "enbw.com",
    brief:
      "Integrated utility (EnBW) and energy technology (Siemens Energy) spanning renewables, grids, and industrial energy systems.",
    europeFocus:
      "German energy transition technology and operations.",
    imageHint: "power grid",
  },
  {
    name: "Ørsted / TotalEnergies / Enel / Iberdrola",
    sector: "Energy",
    locations: ["Denmark", "France", "Italy", "Spain"],
    headquarters: "DK 🇩🇰 / FR 🇫🇷 / IT 🇮🇹 / ES 🇪🇸",
    headquartersHighlight: "European renewable & integrated energy majors",
    website: "https://orsted.com",
    domain: "orsted.com",
    brief:
      "Leading European energy transition companies focused on renewables, grids, and integrated energy offerings.",
    europeFocus:
      "Pan-EU peer set for green energy + data/forecasting careers.",
    imageHint: "offshore wind",
  },
  {
    name: "Bayer / Merck / Boehringer",
    sector: "Pharma",
    locations: ["Leverkusen", "Darmstadt", "Ingelheim"],
    headquarters: "Leverkusen / Darmstadt / Ingelheim, Germany",
    headquartersHighlight: "German pharma triangle — Leverkusen, Darmstadt, Ingelheim",
    website: "https://www.bayer.com",
    domain: "bayer.com",
    brief:
      "Major German pharmaceutical and life-science companies with R&D, manufacturing, and increasingly AI-assisted discovery/ops.",
    europeFocus:
      "Cornerstone of German pharma employment and research.",
    imageHint: "pharma research",
  },
  {
    name: "Siemens Healthineers",
    sector: "MedTech",
    locations: ["Erlangen"],
    headquarters: "Erlangen, Germany",
    headquartersHighlight: "Erlangen HQ — imaging & MedTech AI",
    website: "https://www.siemens-healthineers.com",
    domain: "siemens-healthineers.com",
    brief:
      "Medical imaging, diagnostics, and digital health technologies with strong AI in radiology workflows.",
    europeFocus:
      "German MedTech flagship; imaging AI is a core theme.",
    imageHint: "medical imaging",
  },
  {
    name: "Roche / Novartis",
    sector: "Pharma",
    locations: ["Basel"],
    headquarters: "Basel, Switzerland",
    headquartersHighlight: "Basel 🇨🇭 — global pharma hub",
    website: "https://www.roche.com",
    domain: "roche.com",
    brief:
      "Global pharma leaders in Basel with diagnostics (Roche) and innovative medicines (both) plus growing data science orgs.",
    europeFocus:
      "Basel pharma cluster — top EU life-science destination.",
    imageHint: "basel pharma",
  },
  {
    name: "Novo Nordisk / Sanofi",
    sector: "Pharma",
    locations: ["Copenhagen", "Paris"],
    headquarters: "Copenhagen 🇩🇰 / Paris 🇫🇷",
    headquartersHighlight: "Nordic & French pharma HQs",
    website: "https://www.novonordisk.com",
    domain: "novonordisk.com",
    brief:
      "Global pharma leaders (metabolic disease scale at Novo; broad portfolio at Sanofi) with expanding AI/data organizations.",
    europeFocus:
      "Key EU pharma employers outside Germany for comparison.",
    imageHint: "biopharma",
  },
  {
    name: "Philips",
    sector: "Health-tech",
    locations: ["Amsterdam", "Eindhoven"],
    headquarters: "Amsterdam / Eindhoven, Netherlands",
    headquartersHighlight: "Amsterdam / Eindhoven 🇳🇱",
    website: "https://www.philips.com",
    domain: "philips.com",
    brief:
      "Health technology company focused on imaging, monitoring, and enterprise informatics.",
    europeFocus:
      "Dutch health-tech champion with EU hospital customer base.",
    imageHint: "health technology",
  },
  {
    name: "Schneider Electric",
    sector: "Industrial/Energy",
    locations: ["Paris"],
    headquarters: "Paris / Rueil-Malmaison, France",
    headquartersHighlight: "Paris region HQ — energy management & automation",
    website: "https://www.se.com",
    domain: "se.com",
    brief:
      "Energy management and industrial automation software/hardware for buildings, data centers, and industry.",
    europeFocus:
      "French industrial-tech leader with strong EU sustainability narrative.",
    imageHint: "energy management",
  },
];

export const tier1Companies: Company[] = seeds.map((seed, i) =>
  buildCompany(1, seed, i),
);
