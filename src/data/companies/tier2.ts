import { buildCompany, type CompanySeed } from "../sectorProfiles";
import type { Company } from "@/types/company";

const seeds: CompanySeed[] = [
  {
    name: "Celonis",
    sector: "Software (process-mining)",
    locations: ["Munich"],
    headquarters: "Munich, Germany",
    headquartersHighlight: "Munich HQ — process-mining unicorn",
    website: "https://www.celonis.com",
    domain: "celonis.com",
    valuation: "~$13B unicorn (Dealroom — verify live)",
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "Process mining and execution management platform that mines system event logs to find and fix process inefficiencies.",
    europeFocus:
      "Munich-born global scale-up; flagship German enterprise software unicorn.",
    overrides: {
      sells:
        "Process mining / process intelligence platform connecting to ERP and enterprise systems.",
      aiValue:
        "Process AI recommendations, anomaly detection in process flows, and automation triggers from mined variants.",
      strategy2to3Years:
        "Expand process AI platform adoption and enterprise land-and-expand — verify Dealroom valuation + Celonis product releases.",
    },
    sources: [
      { title: "Celonis", url: "https://www.celonis.com" },
      { title: "Dealroom Germany unicorns", url: "https://dealroom.co/unicorns/germany/" },
    ],
    imageHint: "process mining",
  },
  {
    name: "Delivery Hero",
    sector: "Retail/Food-tech",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ",
    website: "https://www.deliveryhero.com",
    domain: "deliveryhero.com",
    valuation: "~$15B class (verify live markets/Dealroom)",
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "Global food delivery and quick-commerce platforms group headquartered in Berlin.",
    europeFocus:
      "Berlin tech champion with large data/logistics optimization needs.",
    imageHint: "food delivery",
  },
  {
    name: "Zalando",
    sector: "Retail/E-commerce",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ",
    website: "https://corporate.zalando.com",
    domain: "zalando.com",
    valuation: "~$7.9B class (verify live)",
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "Europe’s leading online fashion platform with strong ML for recommendations, sizing, and logistics.",
    europeFocus:
      "Berlin e-commerce flagship; excellent for applied ML at consumer scale.",
    imageHint: "fashion ecommerce",
  },
  {
    name: "n8n",
    sector: "AI (workflow automation)",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ — workflow automation",
    website: "https://n8n.io",
    domain: "n8n.io",
    valuation: "~$5.2B class (verify Dealroom/funding news)",
    tags: ["deutschlandsstipendium", "ai-focus", "unicorn"],
    brief:
      "Fair-code workflow automation platform connecting apps/APIs; strong AI-agent workflow narrative.",
    europeFocus:
      "Berlin AI infra/tooling scale-up with developer-led growth.",
    imageHint: "workflow automation",
  },
  {
    name: "Parloa",
    sector: "AI (customer-service agents)",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ",
    website: "https://www.parloa.com",
    domain: "parloa.com",
    valuation: "~$3B; raised ~$350M H1'26 (verify funding sources)",
    tags: ["deutschlandsstipendium", "ai-focus", "unicorn"],
    brief:
      "Enterprise conversational AI / customer-service agent platform for large contact-center use cases.",
    europeFocus:
      "Berlin enterprise AI scale-up focused on voice/chat agents.",
    imageHint: "ai agents",
  },
  {
    name: "Black Forest Labs",
    sector: "AI (image generation)",
    locations: ["Freiburg"],
    headquarters: "Freiburg, Germany",
    headquartersHighlight: "Freiburg HQ — generative image models",
    website: "https://blackforestlabs.ai",
    domain: "blackforestlabs.ai",
    valuation: "~$3.3B class (verify)",
    tags: ["deutschlandsstipendium", "ai-focus", "unicorn"],
    brief:
      "Generative image AI lab/company (FLUX lineage) building frontier visual generation models.",
    europeFocus:
      "German generative AI deep-tech with global developer adoption.",
    imageHint: "generative image ai",
  },
  {
    name: "DeepL",
    sector: "AI (translation)",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne HQ",
    website: "https://www.deepl.com",
    domain: "deepl.com",
    valuation: "~$2B class (verify)",
    tags: ["deutschlandsstipendium", "unicorn", "nrw-hub", "visa-friendly"],
    brief:
      "Neural machine translation and language AI products used widely by enterprises and consumers.",
    europeFocus:
      "Cologne Priority NRW — European AI product success story. Strongest NRW software door next to REWE Digital.",
    imageHint: "translation ai",
  },
  {
    name: "NEURA Robotics",
    sector: "AI/Robotics",
    locations: ["Metzingen"],
    headquarters: "Metzingen, Germany",
    headquartersHighlight: "Metzingen HQ",
    website: "https://neura-robotics.com",
    domain: "neura-robotics.com",
    valuation: "Raised ~$1.4B H1'26 (verify funding press)",
    tags: ["ai-focus"],
    brief:
      "Cognitive robotics company building AI-powered robots for industrial and service environments.",
    europeFocus:
      "German robotics scale-up at the AI×hardware frontier.",
    imageHint: "cognitive robotics",
  },
  {
    name: "NiCE Cognigy",
    sector: "AI (conversational)",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany (NiCE Cognigy)",
    headquartersHighlight: "Düsseldorf — conversational AI",
    website: "https://www.cognigy.com",
    domain: "cognigy.com",
    valuation: "~$1B class (verify)",
    tags: ["deutschlandsstipendium", "unicorn", "nrw-hub", "visa-friendly"],
    brief:
      "Enterprise conversational AI / agent orchestration platform (Cognigy, under NiCE).",
    europeFocus:
      "Düsseldorf Priority NRW — conversational AI; customers include Lufthansa, E.ON, Henkel, ERGO, DHL.",
    imageHint: "conversational ai",
  },
  {
    name: "osapiens",
    sector: "AI (supply-chain/ESG)",
    locations: ["Mannheim"],
    headquarters: "Mannheim, Germany",
    headquartersHighlight: "Mannheim HQ",
    website: "https://www.osapiens.com",
    domain: "osapiens.com",
    valuation: "~$1B class (verify)",
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "Software/AI for supply-chain compliance, ESG, and operational transparency (incl. regulatory reporting use cases).",
    europeFocus:
      "German scale-up aligned with EU supply-chain due diligence themes.",
    imageHint: "esg supply chain",
  },
  {
    name: "Prior Labs",
    sector: "AI (tabular foundation models)",
    locations: ["Freiburg"],
    headquarters: "Freiburg, Germany",
    headquartersHighlight: "Freiburg HQ",
    website: "https://priorlabs.ai",
    domain: "priorlabs.ai",
    valuation: "~$1.1B class (verify)",
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "AI company focused on tabular/foundation-model approaches for structured enterprise data.",
    europeFocus:
      "German research-driven AI scale-up.",
    imageHint: "tabular ai",
  },
  {
    name: "Taktile",
    sector: "FinTech AI (decisioning)",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ",
    website: "https://taktile.com",
    domain: "taktile.com",
    valuation: "Raised ~$110M H1'26 (verify)",
    tags: ["ai-focus"],
    brief:
      "Decisioning infrastructure for financial institutions — governance, testing, and deployment of decision logic/AI.",
    europeFocus:
      "Berlin fintech-infra AI with regulated decisioning focus.",
    imageHint: "decisioning ai",
  },
  {
    name: "Qdrant / Langfuse",
    sector: "AI dev-tools",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin — vector DB & LLM observability",
    website: "https://qdrant.tech",
    domain: "qdrant.tech",
    tags: ["ai-focus"],
    brief:
      "AI developer infrastructure: Qdrant (vector database) and Langfuse (LLM observability/eval) — Berlin AI tooling cluster.",
    europeFocus:
      "Berlin open-core / AI infra ecosystem companies.",
    sources: [
      { title: "Qdrant", url: "https://qdrant.tech" },
      { title: "Langfuse", url: "https://langfuse.com" },
    ],
    imageHint: "vector database",
  },
  {
    name: "deepset",
    sector: "AI (NLP/LLM, Haystack)",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ",
    website: "https://www.deepset.ai",
    domain: "deepset.ai",
    tags: ["ai-focus"],
    brief:
      "NLP/LLM platform company behind Haystack — enterprise search, RAG, and LLM app building.",
    europeFocus:
      "Berlin NLP pioneer with strong open-source + enterprise motion.",
    imageHint: "nlp rag",
  },
  {
    name: "Apheris / Pruna / Peec AI",
    sector: "AI (data/infra)",
    locations: ["Berlin", "Munich"],
    headquarters: "Berlin / Munich, Germany",
    headquartersHighlight: "Berlin/Munich AI infra cluster",
    website: "https://www.apheris.com",
    domain: "apheris.com",
    tags: ["ai-focus"],
    brief:
      "Cluster of German AI infra/data companies spanning federated/privacy-preserving ML and efficiency tooling.",
    europeFocus:
      "DACH AI infra niche with privacy and efficiency themes.",
    imageHint: "ai infrastructure",
  },
  {
    name: "Personio",
    sector: "Software (HR SaaS)",
    locations: ["Munich"],
    headquarters: "Munich, Germany",
    headquartersHighlight: "Munich HQ",
    website: "https://www.personio.com",
    domain: "personio.com",
    brief:
      "European HR software platform for SMBs — HRIS, recruiting, payroll-adjacent workflows.",
    europeFocus:
      "Munich SaaS scale-up with pan-European SMB customer base.",
    imageHint: "hr saas",
  },
  {
    name: "Aleph Alpha",
    sector: "AI/LLM (sovereign)",
    locations: ["Heidelberg"],
    headquarters: "Heidelberg, Germany",
    headquartersHighlight: "Heidelberg — sovereign LLM narrative (acquired by Cohere '26 — verify)",
    website: "https://aleph-alpha.com",
    domain: "aleph-alpha.com",
    tags: ["deutschlandsstipendium"],
    brief:
      "German sovereign LLM company focused on enterprise/government-grade language AI; corporate status evolving (verify Cohere acquisition news).",
    europeFocus:
      "Key German sovereign AI reference point — always verify latest ownership/status on Northdata + press.",
    sources: [
      { title: "Aleph Alpha", url: "https://aleph-alpha.com" },
      { title: "Northdata", url: "https://www.northdata.com/" },
    ],
    imageHint: "sovereign llm",
  },
  {
    name: "Mistral AI",
    sector: "AI/LLM",
    locations: ["Paris"],
    headquarters: "Paris, France",
    headquartersHighlight: "Paris HQ — European frontier LLM lab",
    website: "https://mistral.ai",
    domain: "mistral.ai",
    brief:
      "European frontier LLM company building open and commercial models plus enterprise platforms.",
    europeFocus:
      "Paris AI champion; top EU alternative to US labs.",
    imageHint: "llm models",
  },
  {
    name: "Hugging Face",
    sector: "AI platform",
    locations: ["Paris"],
    headquarters: "Paris / NYC (EU roots strong in Paris)",
    headquartersHighlight: "Paris — open ML platform hub",
    website: "https://huggingface.co",
    domain: "huggingface.co",
    brief:
      "The open ML platform for models, datasets, Spaces, and enterprise Hub — central to modern AI workflows.",
    europeFocus:
      "Strong European open-source AI gravity; excellent learning + contribution target.",
    imageHint: "ml platform",
  },
  {
    name: "Software AG / DATEV / TeamViewer",
    sector: "Enterprise software",
    locations: ["Darmstadt", "Nuremberg", "Göppingen"],
    headquarters: "Darmstadt / Nuremberg / Göppingen, Germany",
    headquartersHighlight: "German enterprise software Mittelstand champions",
    website: "https://www.softwareag.com",
    domain: "softwareag.com",
    brief:
      "Established German enterprise software group: integration/iPaaS (Software AG), tax/accounting ecosystem (DATEV), remote connectivity (TeamViewer).",
    europeFocus:
      "Classic German software employers with stable enterprise franchises.",
    imageHint: "enterprise software de",
  },
  {
    name: "GFT / Adesso / msg / Bechtle / Cancom / Materna",
    sector: "IT Services",
    locations: ["Stuttgart", "Dortmund", "Munich", "Neckarsulm"],
    headquarters: "Multiple DE HQs (Stuttgart/Dortmund/Munich/Neckarsulm)",
    headquartersHighlight: "Dortmund Priority NRW (adesso) + German IT services houses",
    tags: ["nrw-hub"],
    website: "https://www.gft.com",
    domain: "gft.com",
    brief:
      "Leading German IT services and system houses delivering digitalization for industry, public sector, and finance.",
    europeFocus:
      "Strong Werkstudent/graduate pipelines across DACH.",
    imageHint: "german it services",
  },
  {
    name: "Reply / Tietoevry / Netcompany / Endava / Devoteam",
    sector: "IT Services",
    locations: ["Italy", "Finland", "Denmark", "UK", "France"],
    headquarters: "IT 🇮🇹 / FI 🇫🇮 / DK 🇩🇰 / UK 🇬🇧 / FR 🇫🇷",
    headquartersHighlight: "European digital engineering peers",
    website: "https://www.reply.com",
    domain: "reply.com",
    brief:
      "European digital engineering and IT consulting peers with strong cloud/data practices.",
    europeFocus:
      "Pan-EU delivery networks useful for mobility across countries.",
    imageHint: "digital engineering eu",
  },
  {
    name: "BearingPoint / Roland Berger",
    sector: "Consulting",
    locations: ["Amsterdam", "Munich"],
    headquarters: "Amsterdam / Munich",
    headquartersHighlight: "EU mid-tier strategy & tech consulting",
    website: "https://www.bearingpoint.com",
    domain: "bearingpoint.com",
    brief:
      "Management and technology consulting firms with strong European industrial and public-sector presence.",
    europeFocus:
      "Alternative to MBB/Big4 with solid DACH exposure (Roland Berger Munich roots).",
    imageHint: "management consulting",
  },
  {
    name: "Dachser / Hermes / DB Cargo / Hapag-Lloyd",
    sector: "Logistics",
    locations: ["Kempten", "Hamburg", "Mainz"],
    headquarters: "Kempten / Hamburg / Mainz, Germany",
    headquartersHighlight: "German logistics operators & liner shipping",
    website: "https://www.dachser.com",
    domain: "dachser.com",
    brief:
      "Major German logistics and shipping operators spanning road freight, parcel, rail freight, and container shipping.",
    europeFocus:
      "Core German logistics economy — optimization & digitalization hiring.",
    imageHint: "german logistics",
  },
  {
    name: "About You / Douglas / Flaconi / Zooplus",
    sector: "Retail/E-commerce",
    locations: ["Hamburg", "Düsseldorf", "Berlin", "Munich"],
    headquarters: "Hamburg / Düsseldorf / Berlin / Munich",
    headquartersHighlight: "German e-commerce specialists",
    website: "https://corporate.aboutyou.de",
    domain: "aboutyou.de",
    brief:
      "German digital commerce companies in fashion, beauty, and pet verticals with strong data/product cultures.",
    europeFocus:
      "DACH e-commerce talent market beyond Zalando.",
    imageHint: "vertical ecommerce",
  },
  {
    name: "Bol.com",
    sector: "E-commerce",
    locations: ["Utrecht", "Amsterdam"],
    headquarters: "Utrecht, Netherlands",
    headquartersHighlight: "Utrecht / Amsterdam 🇳🇱 Target destination — marketplace",
    tags: ["nl-hub", "visa-friendly"],
    website: "https://www.bol.com",
    domain: "bol.com",
    brief:
      "Leading Dutch online marketplace/retailer with sophisticated logistics and ranking systems.",
    europeFocus:
      "Later Amsterdam / Utrecht marketplace door next to Picnic / Booking.",
    sources: [
      { title: "Official site", url: "https://www.bol.com" },
      { title: "Careers", url: "https://careers.bol.com" },
    ],
    imageHint: "marketplace ecommerce",
  },
  {
    name: "Trade Republic",
    sector: "FinTech",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ",
    website: "https://traderepublic.com",
    domain: "traderepublic.com",
    valuation: "~$13B class (verify)",
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "Mobile-first investment/brokerage platform popular across Europe.",
    europeFocus:
      "Berlin fintech unicorn; product + risk + data roles.",
    imageHint: "mobile investing",
  },
  {
    name: "N26",
    sector: "FinTech",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ",
    website: "https://n26.com",
    domain: "n26.com",
    valuation: "~$6B class (verify)",
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "Digital bank offering mobile retail banking across multiple European markets.",
    europeFocus:
      "Berlin neobank with multi-country EU license footprint.",
    imageHint: "neobank",
  },
  {
    name: "Scalable Capital / Solaris / wefox",
    sector: "FinTech/InsurTech",
    locations: ["Munich", "Berlin"],
    headquarters: "Munich / Berlin, Germany",
    headquartersHighlight: "Munich/Berlin fintech cluster",
    website: "https://www.scalable.capital",
    domain: "scalable.capital",
    brief:
      "German fintech cluster: investing (Scalable), banking-as-a-service (Solaris), and insurtech (wefox).",
    europeFocus:
      "Core DACH fintech infrastructure and consumer finance players.",
    imageHint: "fintech cluster",
  },
  {
    name: "Adyen / Klarna / Revolut / Wise",
    sector: "FinTech",
    locations: ["Amsterdam", "Netherlands", "Sweden", "UK"],
    headquarters: "Amsterdam 🇳🇱 / SE 🇸🇪 / UK 🇬🇧",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — European fintech giants",
    website: "https://www.adyen.com",
    domain: "adyen.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Europe’s leading fintechs spanning payments (Adyen), BNPL/banking (Klarna), super-app finance (Revolut), and cross-border money (Wise).",
    europeFocus:
      "Top EU fintech peer set for product/ML/risk careers.",
    imageHint: "european fintech",
  },
  {
    name: "ZF / Continental / Schaeffler",
    sector: "Auto supplier",
    locations: ["Friedrichshafen", "Hanover", "Herzogenaurach"],
    headquarters: "Friedrichshafen / Hanover / Herzogenaurach, Germany",
    headquartersHighlight: "German Tier-1 auto suppliers",
    website: "https://www.zf.com",
    domain: "zf.com",
    brief:
      "Major automotive suppliers spanning driveline, electronics, tires/ADAS-related tech, and precision components.",
    europeFocus:
      "German supplier backbone of European automotive — software & electronics hiring rising.",
    imageHint: "auto supplier",
  },
  {
    name: "Trumpf / Zeiss / Festo / SICK / KUKA",
    sector: "Industrial (hidden champions)",
    locations: ["Ditzingen", "Oberkochen", "Esslingen", "Waldkirch", "Augsburg"],
    headquarters: "Multiple Baden-Württemberg / Bavaria HQs",
    headquartersHighlight: "German hidden champions — world-leading niches",
    website: "https://www.trumpf.com",
    domain: "trumpf.com",
    brief:
      "World-class German hidden champions in machine tools/lasers, optics, pneumatics/automation, sensors, and industrial robotics.",
    europeFocus:
      "Mittelstand excellence — high responsibility roles with deep engineering culture.",
    imageHint: "hidden champions industry",
  },
  {
    name: "Helsing",
    sector: "Defence AI",
    locations: ["Munich"],
    headquarters: "Munich, Germany",
    headquartersHighlight: "Munich HQ — defence AI (adjacent sector)",
    website: "https://helsing.ai",
    domain: "helsing.ai",
    valuation: "~$18B class (verify) — adjacent, not core target sector",
    tags: ["deutschlandsstipendium"],
    brief:
      "Defence AI company; listed for market awareness. I treat it as adjacent unless my values/strategy explicitly include defence.",
    europeFocus:
      "Munich defence-tech scale — mark as non-core unless intentional.",
    overrides: {
      enjoymentFit:
        "I only pursue this if the defence domain aligns with my ethics and long-term roadmap; otherwise I keep it as market awareness only.",
    },
    imageHint: "defence ai",
  },
  {
    name: "50Hertz / VNG",
    sector: "Energy",
    locations: ["Berlin", "Leipzig"],
    headquarters: "Berlin / Leipzig, Germany",
    headquartersHighlight: "Berlin TSO / Leipzig energy — local relevance",
    website: "https://www.50hertz.com",
    domain: "50hertz.com",
    brief:
      "Transmission system operator (50Hertz) and energy group (VNG) central to East German energy infrastructure.",
    europeFocus:
      "Highly relevant geographically (Berlin/Leipzig) for energy data careers.",
    imageHint: "grid operator",
  },
  {
    name: "Vestas",
    sector: "GreenTech (wind)",
    locations: ["Aarhus"],
    headquarters: "Aarhus, Denmark",
    headquartersHighlight: "Aarhus 🇩🇰 HQ",
    website: "https://www.vestas.com",
    domain: "vestas.com",
    brief:
      "Global wind turbine manufacturer and services leader — data-rich operations and forecasting problems.",
    europeFocus:
      "Danish greentech champion with EU project footprint.",
    imageHint: "wind turbines",
  },
  {
    name: "BioNTech / CureVac",
    sector: "Biotech",
    locations: ["Mainz", "Tübingen"],
    headquarters: "Mainz / Tübingen, Germany",
    headquartersHighlight: "Mainz / Tübingen — German biotech",
    website: "https://www.biontech.com",
    domain: "biontech.com",
    brief:
      "German biotech leaders in mRNA and related platforms; computational biology and data science relevance.",
    europeFocus:
      "Flagship German biotech employers.",
    imageHint: "mrna biotech",
  },
  {
    name: "Doctolib",
    sector: "Health-tech",
    locations: ["Paris", "Berlin"],
    headquarters: "Paris, France (strong Berlin presence)",
    headquartersHighlight: "Paris HQ — Berlin DE hub",
    website: "https://www.doctolib.com",
    domain: "doctolib.com",
    brief:
      "European digital health platform for appointment booking and practice software widely used by clinicians/patients.",
    europeFocus:
      "Franco-German health-tech scale-up with consumer+clinician networks.",
    imageHint: "digital health",
  },
  {
    name: "Trivago",
    sector: "Travel-tech",
    locations: ["Düsseldorf"],
    headquarters: "Düsseldorf, Germany",
    headquartersHighlight: "Düsseldorf Target NRW — hotel-search HQ",
    website: "https://www.trivago.com",
    domain: "trivago.com",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "Hotel-search marketplace born in Düsseldorf. Product / pricing / experimentation analytics. English is the office language.",
    europeFocus:
      "Strongest Düsseldorf English product door next to Cognigy.",
    sources: [
      { title: "Official site", url: "https://www.trivago.com" },
      { title: "Careers", url: "https://careers.trivago.com" },
    ],
    imageHint: "hotel search",
  },
  {
    name: "1NCE",
    sector: "Software/IoT",
    locations: ["Cologne", "Bonn"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne / Bonn Target NRW — IoT connectivity",
    website: "https://1nce.com",
    domain: "1nce.com",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "IoT connectivity scale-up. Usage analytics, network data, product metrics. English product culture.",
    europeFocus:
      "Cologne–Bonn belt English door next to DeepL and DHL Data & AI.",
    sources: [
      { title: "Official site", url: "https://1nce.com" },
      { title: "Careers", url: "https://1nce.com/en-eu/careers" },
    ],
    imageHint: "iot connectivity",
  },
  {
    name: "Next Kraftwerke",
    sector: "Energy",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — virtual power plant",
    website: "https://www.next-kraftwerke.com",
    domain: "next-kraftwerke.com",
    tags: ["nrw-hub"],
    brief:
      "Virtual power plant. Forecasting and trading — cousin of my time-series / delay-forecast story.",
    europeFocus:
      "Cologne energy-tech next to REWE Digital. More English than a Stadtwerke shop floor.",
    sources: [
      { title: "Official site", url: "https://www.next-kraftwerke.com" },
      { title: "Careers", url: "https://www.next-kraftwerke.com/company/career" },
    ],
    imageHint: "virtual power plant",
  },
  {
    name: "Ströer",
    sector: "Software/Adtech",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — OOH / adtech HQ",
    website: "https://www.stroeer.com",
    domain: "stroeer.com",
    tags: ["nrw-hub"],
    brief:
      "Out-of-home + digital advertising. Measurement and targeting analytics.",
    europeFocus:
      "Cologne media/adtech next to RTL — analyst roles, more German than DeepL.",
    sources: [
      { title: "Official site", url: "https://www.stroeer.com" },
      { title: "Careers", url: "https://www.stroeer.com/en/career.html" },
    ],
    imageHint: "out of home ads",
  },
  {
    name: "G DATA",
    sector: "Software/Cybersecurity",
    locations: ["Bochum", "Essen", "Dortmund"],
    headquarters: "Bochum, Germany",
    headquartersHighlight: "Bochum / Ruhr Target NRW — German security vendor",
    website: "https://www.gdata.de",
    domain: "gdata.de",
    tags: ["nrw-hub"],
    brief:
      "German security vendor. Product analytics + threat data. Same Ruhr labour market as Essen / Dortmund.",
    europeFocus:
      "Ruhr cyber door next to adesso / IML. German-heavier than Zurich AI security.",
    sources: [
      { title: "Official site", url: "https://www.gdata.de" },
      { title: "Careers", url: "https://www.gdata.de/karriere" },
    ],
    imageHint: "cybersecurity",
  },
  {
    name: "NetCologne",
    sector: "Telecom",
    locations: ["Cologne", "Bonn"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — regional telecom",
    website: "https://www.netcologne.de",
    domain: "netcologne.de",
    tags: ["nrw-hub"],
    brief:
      "Regional telecom. Network and customer analytics. Commute from Bonn.",
    europeFocus:
      "Rhine telecom next to Telekom HQ — more local German than Vodafone Düsseldorf.",
    sources: [
      { title: "Official site", url: "https://www.netcologne.de" },
      { title: "Careers", url: "https://www.netcologne.de/karriere" },
    ],
    imageHint: "regional telecom",
  },
  {
    name: "ANYbotics",
    sector: "AI/Robotics",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — industrial robots",
    website: "https://www.anybotics.com",
    domain: "anybotics.com",
    tags: ["zurich-hub", "visa-friendly", "ai-focus"],
    brief:
      "ETH-rooted industrial inspection robots. Industrial AI — same family as ABB problems. English is normal.",
    europeFocus:
      "Zurich product company. English-friendly industrial door, hard fresher bar.",
    sources: [
      { title: "Official site", url: "https://www.anybotics.com" },
      { title: "Careers", url: "https://www.anybotics.com/careers" },
    ],
    imageHint: "inspection robot",
  },
  {
    name: "Verity",
    sector: "AI/Logistics",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — warehouse drones",
    website: "https://www.verity.net",
    domain: "verity.net",
    tags: ["zurich-hub", "visa-friendly", "ai-focus"],
    brief:
      "Warehouse drones / inventory. Problem B in a Swiss product company. English team.",
    europeFocus:
      "Zurich logistics-AI next to K+N. Stronger product fit than a crypto job in Zug.",
    sources: [
      { title: "Official site", url: "https://www.verity.net" },
      { title: "Careers", url: "https://www.verity.net/careers" },
    ],
    imageHint: "warehouse drones",
  },
  {
    name: "Scandit",
    sector: "AI/Software",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — computer vision",
    website: "https://www.scandit.com",
    domain: "scandit.com",
    tags: ["zurich-hub", "visa-friendly", "ai-focus"],
    brief:
      "Enterprise barcode / computer-vision platform. Product analytics. English.",
    europeFocus:
      "Zurich vision product — retail/logistics customers, not a junior dashboard factory.",
    sources: [
      { title: "Official site", url: "https://www.scandit.com" },
      { title: "Careers", url: "https://www.scandit.com/company/careers" },
    ],
    imageHint: "computer vision scan",
  },
  {
    name: "Beekeeper",
    sector: "Software",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — workplace SaaS",
    website: "https://www.beekeeper.io",
    domain: "beekeeper.io",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "Frontline-worker comms SaaS. Product / ops analytics. International English team.",
    europeFocus:
      "Zurich SaaS door. Easier language bar than a Swiss insurer HQ.",
    sources: [
      { title: "Official site", url: "https://www.beekeeper.io" },
      { title: "Careers", url: "https://www.beekeeper.io/careers" },
    ],
    imageHint: "workplace saas",
  },
  {
    name: "Climeworks",
    sector: "GreenTech",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — direct-air capture",
    website: "https://climeworks.com",
    domain: "climeworks.com",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "Direct-air-capture. Measurement and operations data. English common.",
    europeFocus:
      "Zurich climate-tech. Maps to Forest Guard / GreenTech without Essen grid ops.",
    sources: [
      { title: "Official site", url: "https://climeworks.com" },
      { title: "Careers", url: "https://climeworks.com/careers" },
    ],
    imageHint: "direct air capture",
  },
  {
    name: "Lakera",
    sector: "AI (security)",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — LLM security",
    website: "https://www.lakera.ai",
    domain: "lakera.ai",
    tags: ["zurich-hub", "visa-friendly", "ai-focus"],
    brief:
      "LLM security scale-up. Governance / risk — Problem C adjacent. English-first.",
    europeFocus:
      "Zurich AI-governance door next to Swiss Re / EU AI Act story.",
    sources: [
      { title: "Official site", url: "https://www.lakera.ai" },
      { title: "Careers", url: "https://www.lakera.ai/careers" },
    ],
    imageHint: "llm security",
  },
  {
    name: "Sygnum",
    sector: "FinTech/Banking",
    locations: ["Zug", "Zurich"],
    headquarters: "Zurich / Zug, Switzerland",
    headquartersHighlight: "Zug 🇨🇭 Target destination — digital-asset bank",
    website: "https://www.sygnum.com",
    domain: "sygnum.com",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "Swiss digital-asset bank. Compliance / KYC analytics — not a crypto-engineer bet. English is normal.",
    europeFocus:
      "Zug/Zurich fintech. I only watch analyst / compliance roles.",
    sources: [
      { title: "Official site", url: "https://www.sygnum.com" },
      { title: "Careers", url: "https://www.sygnum.com/careers" },
    ],
    imageHint: "digital asset bank",
  },
  {
    name: "AMINA Bank",
    sector: "FinTech/Banking",
    locations: ["Zug"],
    headquarters: "Zug, Switzerland",
    headquartersHighlight: "Zug 🇨🇭 Target destination — crypto-asset bank",
    website: "https://aminagroup.com",
    domain: "aminagroup.com",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "Crypto-asset bank. Same compliance lane as Sygnum. English. Not a first-job protocol bet.",
    europeFocus:
      "Zug Crypto Valley — KYC / AML / documents only.",
    sources: [
      { title: "Official site", url: "https://aminagroup.com" },
      { title: "Careers", url: "https://aminagroup.com/careers" },
    ],
    imageHint: "crypto bank",
  },
  {
    name: "epilot",
    sector: "Energy/Software",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — energy SaaS",
    website: "https://www.epilot.cloud",
    domain: "epilot.cloud",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "Cloud platform for Stadtwerke / grid operators. Data lake + process analytics on the energy transition. International team; Werkstudent / CS roles exist.",
    europeFocus:
      "Cologne energy-software door next to Next Kraftwerke / REWE. Same problem family as E.ON Essen without a Ruhr move.",
    sources: [
      { title: "Official site", url: "https://www.epilot.cloud" },
      { title: "Careers", url: "https://www.epilot.cloud/en/company/careers" },
    ],
    imageHint: "energy crm",
  },
  {
    name: "Envelio",
    sector: "Energy/Software",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — smart-grid planning",
    website: "https://envelio.com",
    domain: "envelio.com",
    tags: ["nrw-hub"],
    brief:
      "Smart-grid planning software. Time-series and network data — cousin of my forecasting story.",
    europeFocus:
      "Cologne grid-tech next to epilot / Next Kraftwerke. More German than a Zurich product shop.",
    sources: [
      { title: "Official site", url: "https://envelio.com" },
      { title: "Careers", url: "https://envelio.com/career" },
    ],
    imageHint: "smart grid",
  },
  {
    name: "how.fm",
    sector: "AI/Logistics",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — warehouse training",
    website: "https://how.fm",
    domain: "how.fm",
    tags: ["nrw-hub"],
    brief:
      "Warehouse / shop-floor training software. Ops data next to MotionMiners and DHL — Problem B, not a chatbot demo.",
    europeFocus:
      "Cologne logistics-software door. Same labour market as DeepL / 1NCE.",
    sources: [
      { title: "Official site", url: "https://how.fm" },
    ],
    imageHint: "warehouse training",
  },
  {
    name: "Buynomics",
    sector: "Retail/Software",
    locations: ["Cologne"],
    headquarters: "Cologne, Germany",
    headquartersHighlight: "Cologne Target NRW — pricing / demand analytics",
    website: "https://www.buynomics.com",
    domain: "buynomics.com",
    tags: ["nrw-hub", "visa-friendly"],
    brief:
      "Pricing and demand simulation for CPG / retail. Product / data-scientist flavour. English possible. Series B scale-up.",
    europeFocus:
      "Strongest Cologne retail-analytics door next to REWE Digital. Werkstudent / intern postings appear.",
    sources: [
      { title: "Official site", url: "https://www.buynomics.com" },
      { title: "Careers", url: "https://www.buynomics.com/careers" },
    ],
    imageHint: "pricing analytics",
  },
  {
    name: "Unique",
    sector: "AI/FinTech",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — wealth / KYC AI",
    website: "https://www.unique.ai",
    domain: "unique.ai",
    tags: ["zurich-hub", "visa-friendly", "ai-focus"],
    brief:
      "Agentic AI for wealth, research, and KYC. Clients include Pictet, LGT, SIX, Partners Group. English. Hard fresher bar.",
    europeFocus:
      "Best Zurich finance-analyst door after Swiss Re / UBS. Research from Semester 3; apply later with a sponsor.",
    sources: [
      { title: "Official site", url: "https://www.unique.ai" },
      { title: "Venturelab — Series A", url: "https://www.venturelab.swiss/Unique-raises-USD-30M-Series-A-to-advance-agentic-AI-in-financial-services" },
    ],
    imageHint: "wealth ai",
  },
  {
    name: "Yokoy",
    sector: "Software/FinTech",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — spend analytics",
    website: "https://www.yokoy.com",
    domain: "yokoy.com",
    tags: ["zurich-hub", "visa-friendly"],
    brief:
      "Expense / spend analytics (now inside Perk). Product-analyst English door. Verify live Zurich hiring after the Perk deal.",
    europeFocus:
      "Zurich SaaS analytics next to Beekeeper. Easier language bar than a Swiss insurer HQ.",
    sources: [
      { title: "Official site", url: "https://www.yokoy.com" },
    ],
    imageHint: "spend analytics",
  },
  {
    name: "Decentriq",
    sector: "AI/Data",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — confidential data",
    website: "https://www.decentriq.com",
    domain: "decentriq.com",
    tags: ["zurich-hub", "visa-friendly", "ai-focus"],
    brief:
      "Confidential data collaboration. Problem C (governance) without becoming a security engineer. English team.",
    europeFocus:
      "Zurich data-governance door next to Lakera / Swiss Re.",
    sources: [
      { title: "Official site", url: "https://www.decentriq.com" },
    ],
    imageHint: "confidential data",
  },
  {
    name: "Squirro",
    sector: "AI/Software",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — insight engine",
    website: "https://squirro.com",
    domain: "squirro.com",
    tags: ["zurich-hub", "visa-friendly", "ai-focus"],
    brief:
      "Enterprise insight engine. Analyst / translator flavour — unstructured data to decisions. English.",
    europeFocus:
      "Zurich insights product. Same work mode as Decision Scientist, not a junior dashboard factory.",
    sources: [
      { title: "Official site", url: "https://squirro.com" },
      { title: "Careers", url: "https://careers.squirro.com/" },
    ],
    imageHint: "insight engine",
  },
  {
    name: "Embotech",
    sector: "AI/Logistics",
    locations: ["Zurich"],
    headquarters: "Zurich, Switzerland",
    headquartersHighlight: "Zurich 🇨🇭 Target destination — yard / port autonomy",
    website: "https://embotech.com",
    domain: "embotech.com",
    tags: ["zurich-hub", "visa-friendly", "ai-focus"],
    brief:
      "Autonomous yard / port vehicles. Logistics + industrial. English-normal. Hard fresher bar.",
    europeFocus:
      "Zurich logistics-AI next to Verity / ANYbotics. Ops-decision fit, not a crypto job in Zug.",
    sources: [
      { title: "Official site", url: "https://embotech.com" },
    ],
    imageHint: "autonomous yard",
  },
  {
    name: "Picnic",
    sector: "Retail/Logistics",
    locations: ["Amsterdam", "Dordrecht", "Ridderkerk"],
    headquarters: "Amsterdam, Netherlands",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — grocery last-mile",
    website: "https://picnic.app",
    domain: "picnic.app",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Online grocery. Demand forecast and routing — closest cousin of my ICE / last-mile story. English. Expanding FCs in Germany.",
    europeFocus:
      "Later Amsterdam / Rotterdam door. Same problems as REWE Digital, no German required.",
    sources: [
      { title: "Official site", url: "https://picnic.app" },
      { title: "Careers", url: "https://jobs.picnic.app" },
    ],
    imageHint: "grocery last mile",
  },
  {
    name: "Coolblue",
    sector: "Retail",
    locations: ["Rotterdam"],
    headquarters: "Rotterdam, Netherlands",
    headquartersHighlight: "Rotterdam 🇳🇱 Target destination — electronics retail",
    website: "https://www.coolblue.nl",
    domain: "coolblue.nl",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Electronics retail + last-mile. Pricing and fulfilment analytics. English-possible.",
    europeFocus:
      "Later Rotterdam retail door next to the port. Same family as Ceconomy / bol.",
    sources: [
      { title: "Official site", url: "https://www.coolblue.nl" },
      { title: "Careers", url: "https://www.coolblue.nl/en/careers" },
    ],
    imageHint: "electronics retail",
  },
  {
    name: "Mollie",
    sector: "FinTech",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam, Netherlands",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — payments",
    website: "https://www.mollie.com",
    domain: "mollie.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Payments scale-up. Risk / product analytics. English. Next-Adyen lane, hard fresher bar.",
    europeFocus:
      "Later Amsterdam fintech door next to Adyen. Not a Semester 3 move.",
    sources: [
      { title: "Official site", url: "https://www.mollie.com" },
      { title: "Careers", url: "https://jobs.mollie.com" },
    ],
    imageHint: "payments",
  },
  {
    name: "Bird",
    sector: "Software",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam, Netherlands",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — comms / product",
    website: "https://www.bird.com",
    domain: "bird.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Cloud communications (ex-MessageBird). Product analytics. English.",
    europeFocus:
      "Later Amsterdam SaaS door. Easier language bar than a Swiss insurer.",
    sources: [
      { title: "Official site", url: "https://www.bird.com" },
    ],
    imageHint: "cloud comms",
  },
  {
    name: "Just Eat Takeaway",
    sector: "Logistics/Delivery",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam, Netherlands",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — delivery ops",
    website: "https://www.justeattakeaway.com",
    domain: "justeattakeaway.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Food-delivery group. Ops, routing, and marketplace analytics. English.",
    europeFocus:
      "Later Amsterdam delivery door. Same last-mile family as Picnic / DHL.",
    sources: [
      { title: "Official site", url: "https://www.justeattakeaway.com" },
      { title: "Careers", url: "https://careers.justeattakeaway.com" },
    ],
    imageHint: "delivery ops",
  },
  {
    name: "Miro",
    sector: "Software",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam, Netherlands (EU engineering)",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — product analytics",
    website: "https://miro.com",
    domain: "miro.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Collaboration SaaS. Product / experimentation analytics. English EU team.",
    europeFocus:
      "Later Amsterdam product door. Not logistics — only if I want a SaaS analyst seat.",
    sources: [
      { title: "Official site", url: "https://miro.com" },
      { title: "Careers", url: "https://miro.com/careers/" },
    ],
    imageHint: "collaboration saas",
  },
  {
    name: "Catawiki",
    sector: "Retail/Marketplace",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam, Netherlands",
    headquartersHighlight: "Amsterdam 🇳🇱 Target destination — auction marketplace",
    website: "https://www.catawiki.com",
    domain: "catawiki.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Auction marketplace. Ranking, pricing, and trust analytics. English.",
    europeFocus:
      "Later Amsterdam marketplace door next to Booking / bol.",
    sources: [
      { title: "Official site", url: "https://www.catawiki.com" },
    ],
    imageHint: "auction marketplace",
  },
  {
    name: "Portbase",
    sector: "Logistics/Software",
    locations: ["Rotterdam", "Amsterdam"],
    headquarters: "Rotterdam, Netherlands",
    headquartersHighlight: "Rotterdam 🇳🇱 Target destination — port data layer",
    website: "https://www.portbase.com",
    domain: "portbase.com",
    tags: ["nl-hub", "visa-friendly"],
    brief:
      "Port community system for Rotterdam and Amsterdam. Dirty EDI → one data layer. Problem B.",
    europeFocus:
      "Later NL port-software door. Same family as duisport visibility, English.",
    sources: [
      { title: "Official site", url: "https://www.portbase.com/en/" },
    ],
    imageHint: "port data",
  },
  {
    name: "INIT SE",
    sector: "Software/Transit",
    locations: ["Karlsruhe"],
    headquarters: "Karlsruhe, Germany",
    headquartersHighlight: "Karlsruhe — public-transport IT",
    website: "https://www.initse.com",
    domain: "initse.com",
    brief:
      "Public-transport IT. Punctuality and ridership — closest corporate cousin of my ICE delay project in this city.",
    europeFocus:
      "Karlsruhe transit-software door. German-heavier than Amsterdam. Company map only — not a Target Location city.",
    sources: [
      { title: "Official site", url: "https://www.initse.com" },
      { title: "Careers", url: "https://www.initse.com/ende/career.html" },
    ],
    imageHint: "transit it",
  },
  {
    name: "CAS Software",
    sector: "Software",
    locations: ["Karlsruhe"],
    headquarters: "Karlsruhe, Germany",
    headquartersHighlight: "Karlsruhe — Mittelstand CRM",
    website: "https://www.cas.de",
    domain: "cas.de",
    brief:
      "CRM / Mittelstand software. Product and customer analytics.",
    europeFocus:
      "Karlsruhe software next to IONOS / EnBW. German day-to-day.",
    sources: [
      { title: "Official site", url: "https://www.cas.de" },
    ],
    imageHint: "crm software",
  },
  {
    name: "PTV / Umovity",
    sector: "Software/Logistics",
    locations: ["Karlsruhe"],
    headquarters: "Karlsruhe, Germany",
    headquartersHighlight: "Karlsruhe — transport planning",
    website: "https://www.ptvgroup.com",
    domain: "ptvgroup.com",
    brief:
      "Transport planning / traffic software. Route and network analytics.",
    europeFocus:
      "Karlsruhe planning door next to INIT. Same delay / network family as ICE.",
    sources: [
      { title: "Official site", url: "https://www.ptvgroup.com" },
      { title: "Careers", url: "https://www.ptvgroup.com/en/company/careers" },
    ],
    imageHint: "transport planning",
  },
];

export const tier2Companies: Company[] = seeds.map((seed, i) =>
  buildCompany(2, seed, i),
);
