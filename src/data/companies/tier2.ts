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
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "Neural machine translation and language AI products used widely by enterprises and consumers.",
    europeFocus:
      "Cologne-based European AI product success story.",
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
    tags: ["deutschlandsstipendium", "unicorn"],
    brief:
      "Enterprise conversational AI / agent orchestration platform (Cognigy, under NiCE).",
    europeFocus:
      "Düsseldorf conversational AI with enterprise CX focus.",
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
    headquartersHighlight: "German IT services & system houses",
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
    locations: ["Utrecht"],
    headquarters: "Utrecht, Netherlands",
    headquartersHighlight: "Utrecht 🇳🇱",
    website: "https://www.bol.com",
    domain: "bol.com",
    brief:
      "Leading Dutch online marketplace/retailer with sophisticated logistics and ranking systems.",
    europeFocus:
      "Benelux e-commerce scale player.",
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
    locations: ["Netherlands", "Sweden", "UK"],
    headquarters: "NL 🇳🇱 / SE 🇸🇪 / UK 🇬🇧",
    headquartersHighlight: "European fintech giants",
    website: "https://www.adyen.com",
    domain: "adyen.com",
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
];

export const tier2Companies: Company[] = seeds.map((seed, i) =>
  buildCompany(2, seed, i),
);
