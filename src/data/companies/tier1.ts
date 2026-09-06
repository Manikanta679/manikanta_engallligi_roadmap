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
    locations: ["Munich", "Berlin", "Zurich"],
    headquarters: "Redmond, USA (EU hubs: Munich, Berlin, Zurich)",
    headquartersHighlight: "Zurich 🇨🇭 Target destination + Munich & Berlin DE hubs",
    tags: ["zurich-hub", "visa-friendly"],
    website: "https://www.microsoft.com",
    domain: "microsoft.com",
    brief:
      "Hyperscale cloud (Azure), productivity (M365), developer platforms (GitHub), and Copilot AI across enterprise software.",
    europeFocus:
      "Large German presence; Azure EU regions; Microsoft hyperscalers planned in Bergheim / Bedburg (Rheinisches Revier, NRW) next to Cologne / Düsseldorf.",
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
    headquartersHighlight: "Zurich 🇨🇭 Priority destination — largest Google engineering site outside the US",
    tags: ["zurich-hub", "visa-friendly"],
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
    locations: ["Ehningen", "Rüschlikon", "Zurich"],
    headquarters: "Armonk, USA (DE: Ehningen; CH: Rüschlikon)",
    headquartersHighlight: "Rüschlikon 🇨🇭 Target — IBM Research + Ehningen DE hub",
    tags: ["zurich-hub", "visa-friendly"],
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
    headquartersHighlight: "Bonn Priority NRW HQ — Leipzig relevant for DE ops/IT",
    tags: ["nrw-hub"],
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
    locations: ["Frankfurt", "Munich", "Berlin", "Düsseldorf"],
    headquarters: "Big4 DE hubs: Frankfurt, Munich, Berlin, Düsseldorf",
    headquartersHighlight: "Frankfurt + Düsseldorf Priority NRW consulting belt",
    tags: ["nrw-hub"],
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
    locations: ["Berlin", "Frankfurt", "Düsseldorf", "Paris"],
    headquarters: "Paris, France",
    headquartersHighlight: "Paris HQ — DE delivery incl. Düsseldorf Priority NRW",
    tags: ["nrw-hub"],
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
    headquartersHighlight: "Essen Priority NRW — freight HQ (verify live ownership after DSV deal)",
    tags: ["nrw-hub"],
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
    locations: ["Schindellegi", "Zurich", "Hamburg"],
    headquarters: "Schindellegi, Switzerland",
    headquartersHighlight: "Schindellegi / Zurich area 🇨🇭 Priority destination — control-tower forwarding",
    tags: ["zurich-hub"],
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
    headquartersHighlight: "Cologne Priority NRW HQ — Frankfurt major ops hub",
    tags: ["nrw-hub"],
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
    locations: ["Copenhagen", "Rotterdam"],
    headquarters: "Copenhagen, Denmark (Maersk); DSV Denmark/global; Rotterdam terminals",
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
    headquartersHighlight: "Cologne / Essen Priority NRW — REWE Digital + grocery scale",
    tags: ["nrw-hub"],
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
    locations: ["Zaandam", "Amsterdam", "Netherlands", "Spain", "France"],
    headquarters: "Zaandam 🇳🇱 / ES / FR",
    headquartersHighlight: "Amsterdam / Zaandam 🇳🇱 Target destination — Pan-EU retail",
    website: "https://www.aholddelhaize.com",
    domain: "aholddelhaize.com",
    tags: ["nl-hub", "visa-friendly"],
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
    locations: ["Amsterdam", "Netherlands", "France", "Spain"],
    headquarters: "Amsterdam 🇳🇱 / FR 🇫🇷 / ES 🇪🇸",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — EU retail & wholesale banks",
    website: "https://www.ing.com",
    domain: "ing.com",
    tags: ["nl-hub", "visa-friendly"],
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
    headquartersHighlight: "Zurich 🇨🇭 Priority destination — wealth & insurance Decision Scientist door",
    tags: ["zurich-hub"],
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
    headquartersHighlight: "Zurich 🇨🇭 Priority destination — robotics & electrification HQ",
    tags: ["zurich-hub"],
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
    headquartersHighlight: "Essen Priority NRW — German energy capital",
    tags: ["nrw-hub"],
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
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — health-tech",
    website: "https://www.philips.com",
    domain: "philips.com",
    tags: ["nl-hub", "visa-friendly"],
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
  {
    name: "Henkel",
    sector: "Industrial/Consumer",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Priority NRW — adhesives + consumer HQ",
    website: "https://www.henkel.com",
    domain: "henkel.com",
    tags: ["nrw-hub"],
    brief:
      "Adhesive technologies and consumer brands. Demand-center analytics, plant data, and CX sit in one HQ city.",
    europeFocus:
      "Düsseldorf DAX name — marketing funnel + shop-floor data. Secondary industrial lane after Leipzig plants.",
    imageHint: "adhesives manufacturing",
  },
  {
    name: "Bayer",
    sector: "Pharma",
    locations: ["Leverkusen"],
    headquarters: "Leverkusen, Germany",
    headquartersHighlight: "Leverkusen Priority NRW — pharma / agri HQ",
    website: "https://www.bayer.com",
    domain: "bayer.com",
    tags: ["nrw-hub"],
    brief:
      "Pharma and crop science. Regulated data, clinical/quality analytics, and EU AI Act on high-risk systems.",
    europeFocus:
      "NRW chemicals/pharma belt next to Cologne. Watch, not my 2027 first door.",
    imageHint: "pharma research",
  },
  {
    name: "thyssenkrupp",
    sector: "Industrial",
    locations: ["Essen"],
    headquarters: "Essen, Germany",
    headquartersHighlight: "Essen Priority NRW — steel / industrial HQ",
    website: "https://www.thyssenkrupp.com",
    domain: "thyssenkrupp.com",
    tags: ["nrw-hub"],
    brief:
      "Steel and industrial engineering. Plant data quality, predictive maintenance, and energy-intensive production.",
    europeFocus:
      "Ruhr industrial core next to E.ON/RWE. Same city labour market as energy HQs.",
    imageHint: "steel plant",
  },
  {
    name: "ERGO",
    sector: "Insurance",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Priority NRW — insurance HQ",
    website: "https://www.ergo.com",
    domain: "ergo.com",
    tags: ["nrw-hub"],
    brief:
      "Major German insurer. Claims, CX agents (Cognigy loop), and EU AI Act on service bots.",
    europeFocus:
      "NRW insurance door — regulated analytics without Frankfurt wholesale banking.",
    imageHint: "insurance claims",
  },
  {
    name: "Swiss Re",
    sector: "Insurance",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Priority destination — global reinsurance",
    website: "https://www.swissre.com",
    domain: "swissre.com",
    tags: ["zurich-hub"],
    brief:
      "Global reinsurance. Risk models, climate analytics, and explainability under Swiss/EU rules.",
    europeFocus:
      "Zurich destination with UBS / Zurich Insurance. 2028–30 after a German role + sponsor.",
    imageHint: "reinsurance risk",
  },
  {
    name: "Metro AG",
    sector: "Retail/Wholesale",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Target NRW — wholesale HQ",
    website: "https://www.metroag.de",
    domain: "metroag.de",
    tags: ["nrw-hub"],
    brief:
      "Cash-and-carry / wholesale. Demand, pricing, and B2B analytics at HQ scale.",
    europeFocus:
      "Düsseldorf wholesale giant next to Henkel / ERGO — retail analytics without a Berlin move.",
    sources: [
      { title: "Official site", url: "https://www.metroag.de" },
      { title: "Careers", url: "https://jobs.metroag.de" },
    ],
    imageHint: "wholesale retail",
  },
  {
    name: "Uniper",
    sector: "Energy",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Target NRW — energy trading HQ",
    website: "https://www.uniper.energy",
    domain: "uniper.energy",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "Energy generation and trading. Time-series, risk, and trading analytics. English common on trading teams.",
    europeFocus:
      "Düsseldorf energy-trading door next to the Essen E.ON / RWE belt.",
    sources: [
      { title: "Official site", url: "https://www.uniper.energy" },
      { title: "Careers", url: "https://www.uniper.energy/careers" },
    ],
    imageHint: "energy trading",
  },
  {
    name: "Vodafone Germany",
    sector: "Telecom",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Target NRW — telco HQ",
    website: "https://www.vodafone.de",
    domain: "vodafone.de",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "German mobile/broadband operator. Customer analytics, network data, CX. Some digital squads hire in English.",
    europeFocus:
      "UK-rooted group with a large Düsseldorf campus — telco analytics without a Bonn-only bet.",
    sources: [
      { title: "Official site", url: "https://www.vodafone.de" },
      { title: "Careers", url: "https://careers.vodafone.com" },
    ],
    imageHint: "telecom network",
  },
  {
    name: "Ceconomy / MediaMarktSaturn",
    sector: "Retail",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Target NRW — electronics retail HQ",
    website: "https://www.ceconomy.de",
    domain: "ceconomy.de",
    tags: ["nrw-hub"],
    brief:
      "Consumer-electronics retail. Pricing, assortment, and omnichannel analytics.",
    europeFocus:
      "Düsseldorf retail HQ next to Metro — store + digital data problems.",
    sources: [
      { title: "Official site", url: "https://www.ceconomy.de" },
      { title: "Careers", url: "https://www.ceconomy.de/en/career" },
    ],
    imageHint: "electronics retail",
  },
  {
    name: "ARAG",
    sector: "Insurance",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Target NRW — legal insurance HQ",
    website: "https://www.arag.com",
    domain: "arag.com",
    tags: ["nrw-hub"],
    brief:
      "Legal / insurance group. Claims and legal-process analytics under EU AI Act.",
    europeFocus:
      "Düsseldorf insurance cluster next to ERGO — regulated analytics without Frankfurt.",
    sources: [
      { title: "Official site", url: "https://www.arag.com" },
      { title: "Careers", url: "https://www.arag.com/en/career" },
    ],
    imageHint: "legal insurance",
  },
  {
    name: "HSBC Germany",
    sector: "Banking",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Target NRW — international bank",
    website: "https://www.about.hsbc.de",
    domain: "hsbc.de",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "International bank with a large Düsseldorf base. Risk / KYC / reporting — English is the working language in many teams.",
    europeFocus:
      "Best Düsseldorf English banking door. Higher bar than a Werkstudent at a Mittelstand.",
    sources: [
      { title: "Official site", url: "https://www.about.hsbc.de" },
      { title: "Careers", url: "https://www.hsbc.com/careers" },
    ],
    imageHint: "international banking",
  },
  {
    name: "Ford-Werke",
    sector: "Automotive",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — European plant / ops",
    website: "https://www.ford.de",
    domain: "ford.de",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "Cologne plant and European ops. Production quality, supply-chain, and shop-floor analytics. English common as a US OEM.",
    europeFocus:
      "Strongest English industrial door in Cologne next to REWE / DeepL.",
    sources: [
      { title: "Official site", url: "https://www.ford.de" },
      { title: "Careers", url: "https://www.careers.ford.com" },
    ],
    imageHint: "auto plant cologne",
  },
  {
    name: "DEVK",
    sector: "Insurance",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — insurance HQ",
    website: "https://www.devk.de",
    domain: "devk.de",
    tags: ["nrw-hub"],
    brief:
      "Cologne insurer. Claims, pricing, and regulated analytics without Frankfurt wholesale banking.",
    europeFocus:
      "Cologne insurance belt with Gothaer / AXA — German-heavier than ERGO’s Cognigy loop.",
    sources: [
      { title: "Official site", url: "https://www.devk.de" },
      { title: "Careers", url: "https://www.devk.de/karriere" },
    ],
    imageHint: "insurance cologne",
  },
  {
    name: "Gothaer",
    sector: "Insurance",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — insurance HQ",
    website: "https://www.gothaer.de",
    domain: "gothaer.de",
    tags: ["nrw-hub"],
    brief:
      "Cologne insurer. Same regulated path as DEVK / ERGO — claims and customer analytics.",
    europeFocus:
      "NRW insurance door. German day-to-day; useful if I want insurance without Düsseldorf.",
    sources: [
      { title: "Official site", url: "https://www.gothaer.de" },
      { title: "Careers", url: "https://www.gothaer.de/karriere" },
    ],
    imageHint: "insurance group",
  },
  {
    name: "AXA Germany",
    sector: "Insurance",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — AXA Deutschland",
    website: "https://www.axa.de",
    domain: "axa.de",
    tags: ["nrw-hub"],
    brief:
      "Large insurer with a strong Cologne presence. Governance + claims analytics.",
    europeFocus:
      "International group, local German office. Specialist teams can be more English than DEVK.",
    sources: [
      { title: "Official site", url: "https://www.axa.de" },
      { title: "Careers", url: "https://www.axa.de/karriere" },
    ],
    imageHint: "axa insurance",
  },
  {
    name: "RTL Deutschland",
    sector: "Media",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — TV / streaming HQ",
    website: "https://www.rtl.de",
    domain: "rtl.de",
    tags: ["nrw-hub"],
    brief:
      "TV / streaming group. Audience, content, and advertising analytics.",
    europeFocus:
      "Cologne media cluster — product-analyst flavour next to DeepL / REWE.",
    sources: [
      { title: "Official site", url: "https://www.rtl.de" },
      { title: "Careers", url: "https://karriere.rtl.de" },
    ],
    imageHint: "broadcast media",
  },
  {
    name: "Deutz",
    sector: "Industrial",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — engines / industrial HQ",
    website: "https://www.deutz.com",
    domain: "deutz.com",
    tags: ["nrw-hub"],
    brief:
      "Engine manufacturer. Production KPIs and predictive maintenance.",
    europeFocus:
      "Cologne industrial Mittelstand next to Ford — German-heavier shop floor.",
    sources: [
      { title: "Official site", url: "https://www.deutz.com" },
      { title: "Careers", url: "https://www.deutz.com/en/career" },
    ],
    imageHint: "industrial engines",
  },
  {
    name: "Lanxess",
    sector: "Industrial/Chemicals",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — specialty chemicals",
    website: "https://lanxess.com",
    domain: "lanxess.com",
    tags: ["nrw-hub"],
    brief:
      "Specialty chemicals. Plant data quality and process analytics on the Cologne / Leverkusen belt.",
    europeFocus:
      "Same chemicals belt as Bayer / Covestro — Problem B on the shop floor.",
    sources: [
      { title: "Official site", url: "https://lanxess.com" },
      { title: "Careers", url: "https://lanxess.com/en/career" },
    ],
    imageHint: "chemicals plant",
  },
  {
    name: "Evonik",
    sector: "Industrial/Chemicals",
    locations: ["Essen"],
    headquarters: "Essen, Germany",
    headquartersHighlight: "Essen Target NRW — specialty chemicals HQ",
    website: "https://www.evonik.com",
    domain: "evonik.com",
    tags: ["nrw-hub"],
    brief:
      "Specialty chemicals. Process data, quality, and energy-intensity analytics.",
    europeFocus:
      "Essen chemicals next to E.ON / RWE / thyssenkrupp — one Ruhr labour market.",
    sources: [
      { title: "Official site", url: "https://www.evonik.com" },
      { title: "Careers", url: "https://careers.evonik.com" },
    ],
    imageHint: "specialty chemicals",
  },
  {
    name: "Hochtief",
    sector: "Industrial/Construction",
    locations: ["Essen"],
    headquarters: "Essen, Germany",
    headquartersHighlight: "Essen Target NRW — contractor HQ",
    website: "https://www.hochtief.com",
    domain: "hochtief.com",
    tags: ["nrw-hub"],
    brief:
      "Large contractor. Project-control, cost, and operations analytics.",
    europeFocus:
      "Essen industrial services next to energy HQs. German-heavier than consulting.",
    sources: [
      { title: "Official site", url: "https://www.hochtief.com" },
      { title: "Careers", url: "https://www.hochtief.com/career" },
    ],
    imageHint: "construction analytics",
  },
  {
    name: "Deichmann",
    sector: "Retail",
    locations: ["Essen"],
    headquarters: "Essen, Germany",
    headquartersHighlight: "Essen Target NRW — shoe retail HQ",
    website: "https://www.deichmann.com",
    domain: "deichmann.com",
    tags: ["nrw-hub"],
    brief:
      "Europe’s large shoe retailer. Assortment, pricing, and customer analytics.",
    europeFocus:
      "Essen retail next to Aldi Nord context — analyst volume without Berlin e-comm brands.",
    sources: [
      { title: "Official site", url: "https://www.deichmann.com" },
      { title: "Careers", url: "https://jobs.deichmann.com" },
    ],
    imageHint: "shoe retail",
  },
  {
    name: "Klöckner & Co",
    sector: "Industrial",
    locations: ["Duisburg"],
    headquarters: "Duisburg, Germany",
    headquartersHighlight: "Duisburg Target NRW — steel distribution HQ",
    website: "https://www.kloeckner.com",
    domain: "kloeckner.com",
    tags: ["nrw-hub"],
    brief:
      "Steel distribution. Inventory, pricing, and supply-chain visibility.",
    europeFocus:
      "Duisburg steel-trade door next to duisport and thyssenkrupp.",
    sources: [
      { title: "Official site", url: "https://www.kloeckner.com" },
      { title: "Careers", url: "https://www.kloeckner.com/en/career" },
    ],
    imageHint: "steel distribution",
  },
  {
    name: "duisport",
    sector: "Logistics",
    locations: ["Duisburg"],
    headquarters: "Duisburg, Germany",
    headquartersHighlight: "Duisburg Target NRW — inland port",
    website: "https://www.duisport.de",
    domain: "duisport.de",
    tags: ["nrw-hub"],
    brief:
      "Europe’s largest inland port. Rail/barge visibility and terminal analytics.",
    europeFocus:
      "China–Europe rail/barge gateway — same problem family as DHL / Schenker.",
    sources: [
      { title: "Official site", url: "https://www.duisport.de" },
      { title: "Careers", url: "https://www.duisport.de/karriere" },
    ],
    imageHint: "inland port",
  },
  {
    name: "Signal Iduna",
    sector: "Insurance",
    locations: ["Dortmund"],
    headquarters: "Dortmund, Germany",
    headquartersHighlight: "Dortmund Target NRW — insurance HQ",
    website: "https://www.signal-iduna.de",
    domain: "signal-iduna.de",
    tags: ["nrw-hub"],
    brief:
      "Insurer with a Dortmund HQ. Claims and customer analytics.",
    europeFocus:
      "Ruhr insurance door next to adesso / IML — German-heavier than Zurich.",
    sources: [
      { title: "Official site", url: "https://www.signal-iduna.de" },
      { title: "Careers", url: "https://karriere.signal-iduna.de" },
    ],
    imageHint: "insurance dortmund",
  },
  {
    name: "Covestro",
    sector: "Industrial/Chemicals",
    locations: ["Leverkusen"],
    headquarters: "Leverkusen, Germany",
    headquartersHighlight: "Leverkusen Target NRW — materials / plastics",
    website: "https://www.covestro.com",
    domain: "covestro.com",
    tags: ["nrw-hub"],
    brief:
      "Materials / plastics. Plant data and quality on the Bayer / Lanxess belt.",
    europeFocus:
      "Leverkusen chemicals — Problem B, not a chatbot demo.",
    sources: [
      { title: "Official site", url: "https://www.covestro.com" },
      { title: "Careers", url: "https://www.covestro.com/en/career" },
    ],
    imageHint: "materials plant",
  },
  {
    name: "DHL Data & AI",
    sector: "Logistics/AI",
    locations: ["Bonn"],
    headquarters: "Bonn, Germany",
    headquartersHighlight: "Bonn Target NRW — group Data & AI service line",
    website: "https://www.dhl.com",
    domain: "dhl.com",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "DHL Group service line for data, analytics, and AI. International team. English is a real working language. Best Bonn English door.",
    europeFocus:
      "Same group as the Leipzig hub — corporate/data HQ lane in Bonn after I shift.",
    sources: [
      { title: "Official site", url: "https://www.dhl.com" },
      { title: "Careers", url: "https://careers.dhl.com" },
    ],
    imageHint: "logistics ai",
  },
  {
    name: "Deutsche Welle",
    sector: "Media",
    locations: ["Bonn"],
    headquarters: "Bonn, Germany",
    headquartersHighlight: "Bonn Target NRW — international broadcaster",
    website: "https://www.dw.com",
    domain: "dw.com",
    tags: ["nrw-hub"],
    brief:
      "International broadcaster. Audience and content analytics. German-heavier than DHL Data & AI.",
    europeFocus:
      "Bonn public-media door. Useful only if I want media analytics next to Telekom / DHL.",
    sources: [
      { title: "Official site", url: "https://www.dw.com" },
      { title: "Careers", url: "https://www.dw.com/en/about-dw/working-at-dw/s-31542" },
    ],
    imageHint: "broadcast news",
  },
  {
    name: "Meta Zurich",
    sector: "Software/AI",
    locations: ["Zurich"],
    headquarters: "Menlo Park, USA (EU engineering: Zurich)",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — engineering / Reality Labs",
    website: "https://www.metacareers.com",
    domain: "meta.com",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "English engineering / Reality Labs presence. Hard fresher door. Not a 2027 Werkstudent plan.",
    europeFocus:
      "Zurich Big Tech belt with Google / Microsoft / Apple. Sponsor required.",
    sources: [
      { title: "Official site", url: "https://www.metacareers.com" },
    ],
    imageHint: "big tech engineering",
  },
  {
    name: "Apple Zurich",
    sector: "Software/AI",
    locations: ["Zurich"],
    headquarters: "Cupertino, USA (EU engineering: Zurich)",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — Siri / health / ML",
    website: "https://www.apple.com/careers/ch/",
    domain: "apple.com",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "English engineering site (Siri / health / ML). Hard fresher door.",
    europeFocus:
      "Same Zurich Big Tech cluster. Research from Semester 3; apply later with a sponsor.",
    sources: [
      { title: "Official site", url: "https://www.apple.com/careers/ch/" },
    ],
    imageHint: "apple engineering",
  },
  {
    name: "Julius Baer",
    sector: "Banking",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — private bank",
    website: "https://www.juliusbaer.com",
    domain: "juliusbaer.com",
    tags: ["zurich-hub"],
    brief:
      "Private bank. Client and risk analytics. High bar.",
    europeFocus:
      "Zurich wealth door next to UBS. Specialist 2028–30, not a first job.",
    sources: [
      { title: "Official site", url: "https://www.juliusbaer.com" },
      { title: "Careers", url: "https://www.juliusbaer.com/en/careers" },
    ],
    imageHint: "private banking",
  },
  {
    name: "Swiss Life",
    sector: "Insurance",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — life insurance",
    website: "https://www.swisslife.com",
    domain: "swisslife.com",
    tags: ["zurich-hub"],
    brief:
      "Life insurance. Actuarial and customer analytics.",
    europeFocus:
      "Zurich insurance cluster with Swiss Re / Zurich Insurance.",
    sources: [
      { title: "Official site", url: "https://www.swisslife.com" },
      { title: "Careers", url: "https://www.swisslife.com/en/home/career.html" },
    ],
    imageHint: "life insurance",
  },
  {
    name: "SIX Group",
    sector: "Banking",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — market infrastructure",
    website: "https://www.six-group.com",
    domain: "six-group.com",
    tags: ["zurich-hub"],
    brief:
      "Swiss exchange / market infrastructure. Surveillance and data products.",
    europeFocus:
      "Zurich market-data door — Problem C, not a junior dashboard factory.",
    sources: [
      { title: "Official site", url: "https://www.six-group.com" },
      { title: "Careers", url: "https://www.six-group.com/en/careers.html" },
    ],
    imageHint: "exchange data",
  },
  {
    name: "Glencore",
    sector: "Energy/Commodities",
    locations: ["Baar", "Zug"],
    headquarters: "Baar, Switzerland",
    headquartersHighlight: "Baar 🇨🇭 Target destination — commodity trading",
    website: "https://www.glencore.com",
    domain: "glencore.com",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "Global commodity trading. Risk, sanctions, and trade-flow analytics. English is the working language. Hard fresher door.",
    europeFocus:
      "Zug/Baar trading house — Problem C + B. Not a 2027 Werkstudent plan.",
    sources: [
      { title: "Official site", url: "https://www.glencore.com" },
      { title: "Careers", url: "https://www.glencore.com/careers" },
    ],
    imageHint: "commodity trading",
  },
  {
    name: "Roche Diagnostics",
    sector: "MedTech",
    locations: ["Rotkreuz", "Zug", "Mannheim"],
    headquarters: "Rotkreuz, Switzerland (DE site: Mannheim)",
    headquartersHighlight: "Rotkreuz 🇨🇭 + Mannheim Rhine-Neckar — diagnostics",
    website: "https://diagnostics.roche.com",
    domain: "roche.com",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "Diagnostics instruments and data. Quality + regulated analytics. English common in specialist / data roles.",
    europeFocus:
      "Zug labour region next to Zurich. Regulated MedTech, not Crypto Valley.",
    sources: [
      { title: "Official site", url: "https://diagnostics.roche.com" },
      { title: "Careers", url: "https://careers.roche.com" },
    ],
    imageHint: "diagnostics lab",
  },
  {
    name: "Sika",
    sector: "Industrial/Chemicals",
    locations: ["Baar", "Zug"],
    headquarters: "Baar, Switzerland",
    headquartersHighlight: "Baar 🇨🇭 Target destination — construction chemicals",
    website: "https://www.sika.com",
    domain: "sika.com",
    tags: ["zurich-hub"],
    brief:
      "Construction chemicals. Plant, quality, and sales analytics.",
    europeFocus:
      "Baar industrial HQ — same labour region as Glencore / Partners Group.",
    sources: [
      { title: "Official site", url: "https://www.sika.com" },
      { title: "Careers", url: "https://www.sika.com/en/career.html" },
    ],
    imageHint: "construction chemicals",
  },
  {
    name: "Partners Group",
    sector: "Banking",
    locations: ["Baar", "Zug"],
    headquarters: "Baar, Switzerland",
    headquartersHighlight: "Baar 🇨🇭 Target destination — private markets",
    website: "https://www.partnersgroup.com",
    domain: "partnersgroup.com",
    tags: ["zurich-hub"],
    brief:
      "Private markets. Hard fresher door — research only from Semester 3.",
    europeFocus:
      "Zug/Baar asset-management destination. Not a first-job bet.",
    sources: [
      { title: "Official site", url: "https://www.partnersgroup.com" },
      { title: "Careers", url: "https://www.partnersgroup.com/en/careers" },
    ],
    imageHint: "private markets",
  },
  {
    name: "Landis+Gyr",
    sector: "Energy",
    locations: ["Zug"],
    headquarters: "Zug, Switzerland",
    headquartersHighlight: "Zug 🇨🇭 Target destination — smart metering",
    website: "https://www.landisgyr.com",
    domain: "landisgyr.com",
    tags: ["zurich-hub"],
    brief:
      "Smart metering. Time-series / grid-adjacent data — cousin of my forecasting story.",
    europeFocus:
      "Zug energy-tech door. Stronger ops fit than a Crypto Valley protocol job.",
    sources: [
      { title: "Official site", url: "https://www.landisgyr.com" },
      { title: "Careers", url: "https://www.landisgyr.com/careers" },
    ],
    imageHint: "smart metering",
  },
  {
    name: "Booking.com",
    sector: "Travel-tech",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam, Netherlands",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — product / experimentation HQ",
    website: "https://www.booking.com",
    domain: "booking.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "World-scale travel marketplace. Product / pricing / A/B analytics. English is the office language. Hard fresher bar.",
    europeFocus:
      "Later Amsterdam door after NRW. Same experimentation flavour as Trivago, bigger scale.",
    sources: [
      { title: "Official site", url: "https://www.booking.com" },
      { title: "Careers", url: "https://careers.booking.com" },
    ],
    imageHint: "travel marketplace",
  },
  {
    name: "Heineken",
    sector: "Retail/Consumer",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam, Netherlands",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — demand / supply HQ",
    website: "https://www.theheinekencompany.com",
    domain: "theheinekencompany.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Global brewer HQ. Demand, supply, and commercial analytics. English common at HQ.",
    europeFocus:
      "Later Amsterdam consumer-analytics door. Not a first-job bet.",
    sources: [
      { title: "Official site", url: "https://www.theheinekencompany.com" },
      { title: "Careers", url: "https://careers.theheinekencompany.com" },
    ],
    imageHint: "beverage demand",
  },
  {
    name: "TomTom",
    sector: "Software/Maps",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam, Netherlands",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — maps / traffic data",
    website: "https://www.tomtom.com",
    domain: "tomtom.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Maps and traffic data for auto and logistics clients. Location data pipelines. English.",
    europeFocus:
      "Later Amsterdam data door next to Picnic routing and port ETAs.",
    sources: [
      { title: "Official site", url: "https://www.tomtom.com" },
      { title: "Careers", url: "https://www.tomtom.com/careers/" },
    ],
    imageHint: "maps traffic",
  },
  {
    name: "Port of Rotterdam",
    sector: "Logistics",
    locations: ["Rotterdam"],
    headquarters: "Rotterdam, Netherlands",
    headquartersHighlight: "Rotterdam 🇳🇱 Target destination — port authority",
    website: "https://www.portofrotterdam.com",
    domain: "portofrotterdam.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Europe’s largest seaport. Vessel / truck planning, digital twin, congestion data. English common.",
    europeFocus:
      "Later Rotterdam ops door — same problem family as duisport / DHL, no German required.",
    sources: [
      { title: "Official site", url: "https://www.portofrotterdam.com/en" },
      { title: "Careers", url: "https://www.portofrotterdam.com/en/work-us" },
    ],
    imageHint: "seaport planning",
  },
  {
    name: "Vopak",
    sector: "Energy/Logistics",
    locations: ["Rotterdam"],
    headquarters: "Rotterdam, Netherlands",
    headquartersHighlight: "Rotterdam 🇳🇱 Target destination — tank storage",
    website: "https://www.vopak.com",
    domain: "vopak.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Tank storage. Ops, safety, and throughput analytics. English at HQ.",
    europeFocus:
      "Later Rotterdam energy-logistics door next to Shell / port terminals.",
    sources: [
      { title: "Official site", url: "https://www.vopak.com" },
      { title: "Careers", url: "https://www.vopak.com/careers" },
    ],
    imageHint: "tank storage",
  },
  {
    name: "Shell Netherlands",
    sector: "Energy",
    locations: ["Rotterdam", "The Hague"],
    headquarters: "The Hague / Rotterdam, Netherlands",
    headquartersHighlight: "Rotterdam 🇳🇱 Target destination — energy / trading",
    website: "https://www.shell.com",
    domain: "shell.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Energy and trading with a large NL footprint. Time-series and risk analytics. English.",
    europeFocus:
      "Later NL energy door. Hard fresher bar. Same family as Uniper / E.ON, English-first.",
    sources: [
      { title: "Official site", url: "https://www.shell.com" },
      { title: "Careers", url: "https://www.shell.com/careers.html" },
    ],
    imageHint: "energy trading",
  },
  {
    name: "BASF",
    sector: "Industrial/Chemicals",
    locations: ["Ludwigshafen", "Mannheim"],
    headquarters: "Ludwigshafen, Germany",
    headquartersHighlight: "Ludwigshafen / Mannheim Rhine-Neckar — chemicals HQ",
    website: "https://www.basf.com",
    domain: "basf.com",
    brief:
      "Largest chemical site in the world next to Mannheim. Plant data quality and process analytics — Problem B.",
    europeFocus:
      "Rhine-Neckar industrial belt next to SAP Walldorf. Watch, not a 2027 first door.",
    sources: [
      { title: "Official site", url: "https://www.basf.com" },
      { title: "Careers", url: "https://www.basf.com/global/en/careers" },
    ],
    imageHint: "chemicals plant",
  },
  {
    name: "Heidelberger Druckmaschinen",
    sector: "Industrial",
    locations: ["Heidelberg"],
    headquarters: "Heidelberg, Germany",
    headquartersHighlight: "Heidelberg — print / industrial HQ",
    website: "https://www.heidelberg.com",
    domain: "heidelberg.com",
    brief:
      "Print-press manufacturer. Service, quality, and shop-floor data.",
    europeFocus:
      "Heidelberg industrial next to SAP Walldorf. German-heavier than Amsterdam.",
    sources: [
      { title: "Official site", url: "https://www.heidelberg.com" },
      { title: "Careers", url: "https://www.heidelberg.com/global/en/about_heidelberg/careers/careers.jsp" },
    ],
    imageHint: "print industrial",
  },
  {
    name: "dm-drogerie markt",
    sector: "Retail",
    locations: ["Karlsruhe"],
    headquarters: "Karlsruhe, Germany",
    headquartersHighlight: "Karlsruhe — drugstore retail HQ",
    website: "https://www.dm.de",
    domain: "dm.de",
    brief:
      "Drugstore retail HQ. Assortment, pricing, and store analytics — same family as REWE / Deichmann.",
    europeFocus:
      "Karlsruhe retail door. German day-to-day. Not a Target Location city — company map only.",
    sources: [
      { title: "Official site", url: "https://www.dm.de" },
      { title: "Careers", url: "https://www.dm.de/unternehmen/karriere" },
    ],
    imageHint: "drugstore retail",
  },
  {
    name: "1&1 / IONOS",
    sector: "Software/Hosting",
    locations: ["Karlsruhe", "Montabaur"],
    headquarters: "Montabaur / Karlsruhe, Germany",
    headquartersHighlight: "Karlsruhe — hosting / product analytics",
    website: "https://www.ionos.com",
    domain: "ionos.com",
    brief:
      "Web hosting / cloud (United Internet). Product and reliability analytics.",
    europeFocus:
      "Karlsruhe software door next to EnBW. More product than a Stadtwerke shop floor.",
    sources: [
      { title: "Official site", url: "https://www.ionos.com" },
      { title: "Careers", url: "https://www.ionos.com/career" },
    ],
    imageHint: "hosting cloud",
  },
  {
    name: "Atruvia",
    sector: "IT Services/Banking",
    locations: ["Karlsruhe"],
    headquarters: "Karlsruhe, Germany",
    headquartersHighlight: "Karlsruhe — Sparkassen IT",
    website: "https://www.atruvia.de",
    domain: "atruvia.de",
    brief:
      "IT for the Sparkassen network. Reporting and ops analytics. German-heavy.",
    europeFocus:
      "Karlsruhe banking-IT door. Not Frankfurt wholesale. German day-to-day.",
    sources: [
      { title: "Official site", url: "https://www.atruvia.de" },
    ],
    imageHint: "banking it",
  },
  {
    name: "SEW-EURODRIVE",
    sector: "Industrial",
    locations: ["Bruchsal", "Karlsruhe"],
    headquarters: "Bruchsal, Germany",
    headquartersHighlight: "Bruchsal / Karlsruhe — drives / industrial",
    website: "https://www.sew-eurodrive.com",
    domain: "sew-eurodrive.com",
    brief:
      "Drive technology. Plant and service data on the Karlsruhe labour market.",
    europeFocus:
      "Same Baden industrial belt as EnBW / INIT. Problem B, German-heavier.",
    sources: [
      { title: "Official site", url: "https://www.sew-eurodrive.com" },
    ],
    imageHint: "industrial drives",
  },
];

export const tier1Companies: Company[] = seeds.map((seed, i) =>
  buildCompany(1, seed, i),
);
