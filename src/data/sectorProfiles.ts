import type { Company, CompanyTag, SourceRef } from "@/types/company";
import { slugify } from "@/lib/utils";

type SectorKey =
  | "software"
  | "cloud"
  | "ai"
  | "consulting"
  | "it-services"
  | "logistics"
  | "retail"
  | "banking"
  | "insurance"
  | "automotive"
  | "industrial"
  | "energy"
  | "pharma"
  | "health-tech"
  | "fintech"
  | "telecom"
  | "aerospace"
  | "semiconductor"
  | "defence"
  | "biotech"
  | "accelerator";

interface SectorProfile {
  sells: string;
  customers: string;
  monetization: string;
  problems: string;
  aiValue: string;
  rolesHiring: string[];
  skillsNeeded: string[];
  enjoymentFit: string;
  investments: string;
  strategy2to3Years: string;
}

const SECTORS: Record<SectorKey, SectorProfile> = {
  software: {
    sells:
      "Enterprise and professional software products (ERP, SaaS platforms, developer tools, industry applications) licensed or subscribed by organizations.",
    customers:
      "Enterprises, mid-market firms, public sector, and increasingly SMBs across Europe; buyers are IT, finance, operations, and business-unit leaders.",
    monetization:
      "Subscription SaaS (ARR), perpetual/license + maintenance, usage-based cloud metering, professional services and partner ecosystems.",
    problems:
      "Legacy modernization, cloud migration cost, security/compliance (GDPR), sales cycle length, talent competition, and product differentiation vs hyperscalers.",
    aiValue:
      "Copilots inside products, automated support, code assist, document intelligence, forecasting, and process recommendations grounded in customer data.",
    rolesHiring: [
      "Software Engineer",
      "Data Engineer",
      "ML Engineer",
      "Product Manager",
      "Cloud Architect",
      "UX Designer",
    ],
    skillsNeeded: [
      "Python",
      "TypeScript",
      "SQL",
      "Cloud (AWS/Azure/GCP)",
      "MLOps",
      "System Design",
      "German/English",
    ],
    enjoymentFit:
      "I see a strong fit here when I want productized engineering, platform thinking, and measurable impact on enterprise workflows.",
    investments:
      "AI features in core products, cloud-native refactoring, developer experience, cybersecurity, and industry vertical solutions for EU markets.",
    strategy2to3Years:
      "Ship AI-assisted product lines, deepen EU sovereign/cloud offerings, expand partner channels, and defend share against hyperscaler suites  -  verify on investor days / annual reports.",
  },
  cloud: {
    sells:
      "Cloud infrastructure, platform services (IaaS/PaaS), developer tools, data platforms, and industry cloud solutions.",
    customers:
      "Startups to Fortune 500, ISVs, public sector, and regulated industries needing scalable compute, storage, and AI infrastructure.",
    monetization:
      "Pay-as-you-go consumption, reserved capacity, enterprise agreements, marketplace cut, and professional services.",
    problems:
      "Cost optimization pressure, multi-cloud complexity, security posture, talent scarcity, and regulatory requirements (EU data residency).",
    aiValue:
      "Managed ML platforms, foundation-model hosting, vector DBs, inference optimization, and industry AI solutions on EU regions.",
    rolesHiring: [
      "Cloud Engineer",
      "Solutions Architect",
      "Data Scientist",
      "Security Engineer",
      "SRE",
      "AI Specialist",
    ],
    skillsNeeded: [
      "AWS/Azure/GCP",
      "Kubernetes",
      "Terraform",
      "Python",
      "Networking",
      "Cost Optimization",
      "Security",
    ],
    enjoymentFit:
      "This fits me when I want large-scale systems, customer architectures, and applied AI on real infrastructure.",
    investments:
      "EU data centers, generative AI stacks, industry clouds, sustainability of compute, and partner enablement.",
    strategy2to3Years:
      "Grow AI workload share, expand EU sovereign options, win enterprise migrations, and tighten cost/performance leadership  -  check latest earnings + EU region announcements.",
  },
  ai: {
    sells:
      "AI products and platforms: models, agents, automation tools, vertical AI applications, and AI infrastructure/dev-tools.",
    customers:
      "Enterprises adopting GenAI, developers/builders, and industry teams (customer service, manufacturing, logistics, finance).",
    monetization:
      "SaaS subscriptions, usage/API metering, enterprise seats, professional services, and sometimes model licensing.",
    problems:
      "Reliability/hallucinations, evaluation, data privacy (GDPR), go-to-market vs hyperscalers, GPU cost, and proving ROI.",
    aiValue:
      "Core product is AI  -  value in agents, RAG, evaluation, fine-tuning, multimodal pipelines, and workflow embedding.",
    rolesHiring: [
      "ML Engineer",
      "Applied Scientist",
      "AI Product Engineer",
      "Research Engineer",
      "Forward Deployed Engineer",
      "Data Engineer",
    ],
    skillsNeeded: [
      "Python",
      "PyTorch",
      "LLM/RAG",
      "Evaluation",
      "Vector DBs",
      "MLOps",
      "Product Sense",
    ],
    enjoymentFit:
      "This fits me when I want maximum ownership on AI problems and a fast learning curve at scale-ups/startups.",
    investments:
      "Model quality, agent frameworks, enterprise security/compliance, EU data handling, and go-to-market partnerships.",
    strategy2to3Years:
      "Move from pilots to production ARR, harden enterprise features, expand vertical use-cases, and raise/efficiently deploy capital  -  confirm via Dealroom/Crunchbase + company blogs.",
  },
  consulting: {
    sells:
      "Strategy, digital transformation, technology implementation, and AI/analytics advisory + delivery services.",
    customers:
      "Large corporates and public institutions across banking, industrial, telecom, retail, and healthcare in DACH/EU.",
    monetization:
      "Time & materials / fixed-fee projects, retainers, managed services, and outcome-based engagements.",
    problems:
      "Utilization pressure, talent wars, AI disruption of classical work, delivery quality at scale, and client budget cycles.",
    aiValue:
      "AI strategy, use-case prioritization, data platforms, GenAI accelerators, change management, and responsible AI frameworks.",
    rolesHiring: [
      "Business Analyst",
      "Data Consultant",
      "AI Consultant",
      "Technology Consultant",
      "Engagement Manager",
    ],
    skillsNeeded: [
      "Problem Structuring",
      "SQL/Python",
      "Cloud Basics",
      "Stakeholder Mgmt",
      "Presentation",
      "Domain Knowledge",
    ],
    enjoymentFit:
      "This fits me when I want variety, client exposure, structured problem-solving, and skill breadth over deep product ownership.",
    investments:
      "AI delivery assets (BCG X / QuantumBlack-style), alliances with hyperscalers, industry IP, and talent academies.",
    strategy2to3Years:
      "Scale AI & digital practices, deepen tech partnerships, and shift toward productized accelerators  -  validate in firm annual reviews and practice launches.",
  },
  "it-services": {
    sells:
      "IT outsourcing, application development/maintenance, system integration, and digital engineering services.",
    customers:
      "Enterprises needing delivery capacity, modernization, and managed operations across Europe (often German HQs with nearshore/offshore mix).",
    monetization:
      "Staff augmentation, project delivery, managed services contracts, and multi-year outsourcing deals.",
    problems:
      "Margin pressure, automation of low-end work, visa/talent logistics, quality consistency, and hyperscaler partner competition.",
    aiValue:
      "AI-assisted coding, test automation, ITOps copilots, document processing, and industry solution accelerators.",
    rolesHiring: [
      "Full-stack Developer",
      "Data Engineer",
      "SAP Consultant",
      "Cloud Engineer",
      "QA Automation",
      "Business Analyst",
    ],
    skillsNeeded: [
      "Java/.NET/Python",
      "SAP/Cloud",
      "SQL",
      "Agile Delivery",
      "German (often)",
      "Client Communication",
    ],
    enjoymentFit:
      "This can be a structured entry path for me, including more visa-friendly hiring - my enjoyment depends on project quality and AI exposure.",
    investments:
      "GenAI delivery centers, cloud partnerships, industry solutions, and European delivery hubs.",
    strategy2to3Years:
      "Re-skill workforce for AI delivery, win transformation deals, and protect margins with automation  -  track annual reports and DE job postings.",
  },
  logistics: {
    sells:
      "Freight, parcel, warehousing, supply-chain services, and increasingly digital logistics platforms.",
    customers:
      "Shippers (retail, manufacturing, pharma), e-commerce merchants, and B2B supply-chain operators across EU corridors.",
    monetization:
      "Per-shipment / contract logistics fees, network services, warehousing, and software/platform fees for digital players.",
    problems:
      "Labor shortage, network resilience, fuel/cost volatility, last-mile economics, and visibility across multimodal chains.",
    aiValue:
      "Route optimization, demand forecasting, warehouse robotics orchestration, claims automation, and predictive maintenance.",
    rolesHiring: [
      "Data Analyst",
      "Operations Research",
      "Software Engineer",
      "Supply Chain Analyst",
      "ML Engineer",
    ],
    skillsNeeded: [
      "Optimization",
      "Python/SQL",
      "GIS",
      "Forecasting",
      "Process Mining",
      "Domain Logistics",
    ],
    enjoymentFit:
      "This works for me when I want real-world optimization problems with clear KPI impact (cost, time, CO2).",
    investments:
      "Network automation, green logistics, digital freight platforms, and AI for planning/visibility.",
    strategy2to3Years:
      "Digitize core networks, cut emissions intensity, and expand platform offerings  -  confirm via company sustainability + capital market updates.",
  },
  retail: {
    sells:
      "Physical and/or online retail of goods; private-label products; marketplace and fulfillment services for e-commerce players.",
    customers:
      "Consumers (B2C) and merchants (for marketplaces); strong EU grocery/fashion/e-commerce demand centers.",
    monetization:
      "Product margins, marketplace commissions, advertising/media networks, loyalty programs, and logistics fees.",
    problems:
      "Thin margins, last-mile cost, inventory risk, personalization expectations, and competition from pure-plays.",
    aiValue:
      "Demand forecasting, personalization, dynamic pricing, fraud, store ops automation, and marketing AI CRM.",
    rolesHiring: [
      "Data Scientist",
      "ML Engineer",
      "Analytics Engineer",
      "Product Analyst",
      "Backend Engineer",
    ],
    skillsNeeded: [
      "Python/SQL",
      "Recommendation Systems",
      "Experimentation",
      "Cloud Data Stack",
      "Causal Inference basics",
    ],
    enjoymentFit:
      "This fits me when I want consumer-scale data problems and measurable conversion/ops outcomes.",
    investments:
      "E-commerce tech, retail media, automation in warehouses/stores, and AI personalization.",
    strategy2to3Years:
      "Grow online share, retail media, and AI-driven ops efficiency  -  verify in annual reports and investor presentations.",
  },
  banking: {
    sells:
      "Retail/corporate banking products: deposits, lending, payments, capital markets, and wealth services.",
    customers:
      "Consumers, SMEs, corporates, and institutional clients across DACH and broader Europe.",
    monetization:
      "Net interest margin, fees (payments, advisory), trading income, and increasingly platform/API banking revenue.",
    problems:
      "Regulation, legacy core systems, fintech competition, cyber risk, and cost-income ratio pressure.",
    aiValue:
      "Credit decisioning, AML/fraud, personalization, document automation, and GenAI for internal knowledge/ops.",
    rolesHiring: [
      "Data Scientist",
      "Quant Analyst",
      "ML Engineer",
      "Risk Analyst",
      "Cloud Engineer",
    ],
    skillsNeeded: [
      "Python/SQL",
      "Risk Modeling",
      "MLOps",
      "Regulatory Awareness",
      "Cloud Security",
    ],
    enjoymentFit:
      "This fits me when I want high-stakes regulated ML problems and measurable risk/ops impact.",
    investments:
      "Core modernization, digital banking, AI risk/fraud, and EU payments innovation.",
    strategy2to3Years:
      "Digitalize customer journeys, harden risk AI, and cut cost-to-serve  -  validate via bank strategy updates and BaFin-relevant disclosures.",
  },
  insurance: {
    sells:
      "Life, P&C, health, and reinsurance products plus risk advisory.",
    customers:
      "Individuals, corporates, and (for reinsurers) primary insurers across Europe and globally.",
    monetization:
      "Premiums minus claims + investment income; fee-based risk services growing.",
    problems:
      "Claims inflation, climate risk, distribution costs, fraud, and underwriting accuracy.",
    aiValue:
      "Pricing/underwriting models, claims automation, document AI, climate risk analytics, and customer service agents.",
    rolesHiring: [
      "Actuarial Data Scientist",
      "ML Engineer",
      "Claims Analytics",
      "Risk Modeler",
    ],
    skillsNeeded: [
      "Statistics",
      "Python/R",
      "Pricing",
      "NLP for claims",
      "Cloud Data Platforms",
    ],
    enjoymentFit:
      "This fits me when I want probabilistic modeling with real financial outcomes.",
    investments:
      "Digital claims, parametric products, climate analytics, and GenAI for ops.",
    strategy2to3Years:
      "Automate claims end-to-end, improve underwriting AI, and expand specialty risk  -  check investor days.",
  },
  automotive: {
    sells:
      "Vehicles, mobility services, and increasingly software-defined vehicle platforms / ADAS / connected services.",
    customers:
      "Consumers, fleets, and (for suppliers) OEMs; strong German production footprint.",
    monetization:
      "Vehicle sales, financing, aftersales, software subscriptions, and supplier component contracts.",
    problems:
      "EV transition, software talent, China competition, supply chain, and software quality at scale.",
    aiValue:
      "Perception/ADAS, predictive maintenance, factory quality AI, supply-chain planning, and in-car personalization.",
    rolesHiring: [
      "Software Engineer (SDV)",
      "ML Engineer (perception)",
      "Data Engineer",
      "Embedded/Systems",
      "Quality Analytics",
    ],
    skillsNeeded: [
      "C++/Python",
      "ROS/Automotive stacks",
      "Computer Vision",
      "Cloud",
      "Functional Safety basics",
    ],
    enjoymentFit:
      "This is high-interest for me when I want industrial AI plus software meeting physical products.",
    investments:
      "Software-defined vehicles, battery/EV, autonomous features, and digital factories.",
    strategy2to3Years:
      "Scale SDV platforms, protect margins in EV mix, and localize software competence centers  -  confirm OEM strategy papers.",
  },
  industrial: {
    sells:
      "Industrial equipment, automation, components, and related software/services for factories and infrastructure.",
    customers:
      "Manufacturers, utilities, logistics operators, and machine builders across EU Industrie 4.0 ecosystems.",
    monetization:
      "Equipment sales, aftermarket/services, software licenses, and outcome-based service contracts.",
    problems:
      "Skill shortages on shop floor, downtime cost, energy efficiency, and digital retrofit of brownfield plants.",
    aiValue:
      "Predictive maintenance, quality inspection vision, energy optimization, digital twins, and autonomous mobile robots.",
    rolesHiring: [
      "Industrial Data Scientist",
      "Computer Vision Engineer",
      "Automation Engineer",
      "IoT/Data Engineer",
    ],
    skillsNeeded: [
      "Python",
      "Time-series ML",
      "Vision",
      "OPC-UA/IoT",
      "Edge/Cloud",
      "Domain Manufacturing",
    ],
    enjoymentFit:
      "Excellent for applied AI with tangible factory KPIs  -  strong Leipzig/Mittelstand angle.",
    investments:
      "Smart factory, robotics, energy efficiency, and industrial software platforms.",
    strategy2to3Years:
      "Attach more software/services to hardware, scale AI quality/maintenance offerings  -  verify hidden-champion annual reports.",
  },
  energy: {
    sells:
      "Power generation, grids, energy retail, renewables, and related services/equipment.",
    customers:
      "Households, industry, municipalities, and grid operators across EU energy transition markets.",
    monetization:
      "Energy sales, network tariffs, project development, and increasingly flexibility/services markets.",
    problems:
      "Grid congestion, intermittent renewables, price volatility, permitting, and asset maintenance.",
    aiValue:
      "Load/generation forecasting, grid optimization, predictive maintenance, trading analytics, and customer flexibility products.",
    rolesHiring: [
      "Energy Data Scientist",
      "Forecasting Analyst",
      "Grid Analytics",
      "Software Engineer",
    ],
    skillsNeeded: [
      "Time-series",
      "Optimization",
      "Python",
      "Power systems basics",
      "Cloud",
    ],
    enjoymentFit:
      "This fits me when climate and optimization problems motivate my work choices.",
    investments:
      "Renewables, storage, grid digitalization, and flexibility platforms.",
    strategy2to3Years:
      "Accelerate renewables + digital grid ops; watch EU policy and company CapEx plans.",
  },
  pharma: {
    sells:
      "Pharmaceuticals, vaccines, and related healthcare products.",
    customers:
      "Patients via healthcare systems, hospitals, pharmacies, and payers across EU.",
    monetization:
      "Drug sales, licensing, and increasingly specialty/orphan high-value therapies.",
    problems:
      "R&D productivity, trial cost/time, manufacturing quality, pricing pressure, and regulatory complexity.",
    aiValue:
      "Drug discovery ML, trial optimization, pharmacovigilance NLP, manufacturing quality vision, and supply planning.",
    rolesHiring: [
      "Bioinformatics",
      "ML Scientist",
      "Clinical Data Analyst",
      "Manufacturing Analytics",
    ],
    skillsNeeded: [
      "Python/R",
      "Statistics",
      "Biology domain",
      "Causal methods",
      "GXP awareness",
    ],
    enjoymentFit:
      "This is high-impact for me when I want science plus a rigorous validation culture.",
    investments:
      "AI discovery platforms, specialty pipelines, and digital trials.",
    strategy2to3Years:
      "Integrate AI into R&D and ops while protecting pipeline value  -  confirm pipeline updates and IR materials.",
  },
  "health-tech": {
    sells:
      "Digital health platforms, MedTech devices/software, clinical decision support, and care coordination tools.",
    customers:
      "Patients, clinicians, hospitals, insurers, and pharma (for trial/tech partners).",
    monetization:
      "SaaS to providers, device sales, B2B2C subscriptions, and data/services partnerships (privacy-constrained).",
    problems:
      "Regulation (MDR/IVDR), clinical validation, hospital IT integration, and reimbursement pathways.",
    aiValue:
      "Diagnostics support, triage, clinical NLP, imaging AI, and operational hospital analytics.",
    rolesHiring: [
      "ML Engineer (health)",
      "Clinical Data Scientist",
      "Backend Engineer",
      "Regulatory Affairs (tech)",
    ],
    skillsNeeded: [
      "Python",
      "Medical data standards",
      "Privacy/Security",
      "Evaluation rigor",
      "Product Design",
    ],
    enjoymentFit:
      "This fits me when I want AI with clinical stakes and a careful evidence culture.",
    investments:
      "Clinical AI validation, interoperability, and EU market expansion.",
    strategy2to3Years:
      "Prove clinical/economic value and scale regulated products  -  check company clinical publications and MDR status.",
  },
  fintech: {
    sells:
      "Digital banking, payments, investing, lending decisioning, and financial infrastructure APIs.",
    customers:
      "Retail users, SMEs, and banks/platforms embedding financial services.",
    monetization:
      "Interchange, subscriptions, AUM fees, lending margin, and B2B API pricing.",
    problems:
      "Regulation, trust/fraud, customer acquisition cost, and unit economics in competitive EU markets.",
    aiValue:
      "Credit decisioning, fraud detection, personalization, support agents, and risk ops automation.",
    rolesHiring: [
      "ML Engineer",
      "Risk Data Scientist",
      "Backend Engineer",
      "Product Analyst",
    ],
    skillsNeeded: [
      "Python",
      "Causal/ML for risk",
      "Real-time systems",
      "SQL",
      "Compliance awareness",
    ],
    enjoymentFit:
      "This is great for me when I want high-velocity product plus ML with clear financial KPIs.",
    investments:
      "AI risk engines, EU expansion, banking licenses/partnerships, and platform APIs.",
    strategy2to3Years:
      "Path to profitability, regulated expansion, and AI differentiation  -  verify funding rounds and company blogs.",
  },
  telecom: {
    sells:
      "Connectivity, network infrastructure, enterprise telecom/IT services, and related platforms.",
    customers:
      "Consumers, enterprises, and public sector needing networks and digital services.",
    monetization:
      "Subscriptions, enterprise contracts, wholesale network, and IT service overlays.",
    problems:
      "CapEx intensity, competition, network complexity, and monetizing 5G/edge beyond connectivity.",
    aiValue:
      "Network optimization, predictive maintenance, customer-care agents, and edge AI services.",
    rolesHiring: [
      "Network Data Scientist",
      "Software Engineer",
      "AI Engineer",
      "Solutions Architect",
    ],
    skillsNeeded: [
      "Python",
      "Telecom domain",
      "Cloud/Edge",
      "Optimization",
      "MLOps",
    ],
    enjoymentFit:
      "This fits me when large-scale network plus AI ops problems appeal to me.",
    investments:
      "5G/fiber, edge compute, AI ops, and enterprise digital services.",
    strategy2to3Years:
      "Monetize networks via digital/IT services and AI ops efficiency  -  check operator strategy updates.",
  },
  aerospace: {
    sells:
      "Aircraft, aerospace systems, and related services/support.",
    customers:
      "Airlines, defense/government, and lessors.",
    monetization:
      "Aircraft deliveries, support services, upgrades, and long-term service agreements.",
    problems:
      "Production ramp, supply chain, certification, and digitalization of engineering/manufacturing.",
    aiValue:
      "Design optimization, manufacturing quality, predictive maintenance, and supply-chain risk analytics.",
    rolesHiring: [
      "Data Scientist",
      "Manufacturing Analytics",
      "Software Engineer",
      "Systems Engineer",
    ],
    skillsNeeded: [
      "Python/MATLAB",
      "Simulation",
      "Vision/Quality",
      "Domain Aerospace",
    ],
    enjoymentFit:
      "This is high-interest for me when complex engineering systems and quality AI excite me.",
    investments:
      "Production digitalization, next-gen aircraft programs, and services growth.",
    strategy2to3Years:
      "Stabilize production rates and digitize industrial system  -  confirm OEM communications.",
  },
  semiconductor: {
    sells:
      "Lithography and semiconductor manufacturing equipment critical to advanced chips.",
    customers:
      "Global chipmakers (foundries/IDMs) with EU presence and worldwide fabs.",
    monetization:
      "High-value equipment sales + services/upgrades.",
    problems:
      "Extreme tech complexity, geopolitical supply constraints, talent, and capacity ramp.",
    aiValue:
      "Process control, predictive maintenance, yield optimization, and engineering productivity tools.",
    rolesHiring: [
      "Software Engineer",
      "Data Scientist",
      "Metrology/Process",
      "Systems Engineer",
    ],
    skillsNeeded: [
      "Physics/Engineering domain",
      "Python",
      "Control systems",
      "Data Analysis",
    ],
    enjoymentFit:
      "This is exceptional for me when deep-tech and precision problems motivate me.",
    investments:
      "Next-node lithography, capacity expansion, and software/process intelligence.",
    strategy2to3Years:
      "Execute technology roadmap and capacity  -  follow ASML/peer capital market days.",
  },
  defence: {
    sells:
      "Defence technology, AI for situational awareness, and related dual-use systems.",
    customers:
      "Governments and defence institutions (procurement-driven).",
    monetization:
      "Government contracts and multi-year programmes.",
    problems:
      "Procurement cycles, ethics/export controls, talent, and rapid capability needs.",
    aiValue:
      "Perception, decision support, simulation, and autonomous systems under strict constraints.",
    rolesHiring: [
      "ML Engineer",
      "Computer Vision",
      "Software Engineer",
      "Systems Engineer",
    ],
    skillsNeeded: [
      "CV/ML",
      "Secure software",
      "Systems thinking",
      "Clearance-aware processes",
    ],
    enjoymentFit:
      "I only pursue this if the mission domain aligns with my values; I note it as adjacent vs my core sector preference.",
    investments:
      "AI capabilities, production scale, and allied-market expansion.",
    strategy2to3Years:
      "Scale production and AI products under European defence demand  -  verify company disclosures carefully.",
  },
  biotech: {
    sells:
      "Biologic therapies, platforms for drug development, and related biotech products.",
    customers:
      "Patients via healthcare systems; partners in pharma for platforms.",
    monetization:
      "Product sales, partnerships/milestones, and platform licensing.",
    problems:
      "Clinical risk, manufacturing scale, capital intensity, and regulatory timelines.",
    aiValue:
      "Discovery, trial design, and manufacturing analytics.",
    rolesHiring: [
      "Computational Biologist",
      "ML Scientist",
      "Bioinformatics",
    ],
    skillsNeeded: [
      "Biology + ML",
      "Python/R",
      "Statistics",
      "Experiment design",
    ],
    enjoymentFit:
      "High scientific impact; slower cycles than pure software AI.",
    investments:
      "Pipeline advancement and platform AI partnerships.",
    strategy2to3Years:
      "Advance clinical programs and partnerships  -  follow trial readouts and filings.",
  },
  accelerator: {
    sells:
      "Acceleration programs, mentoring, network access, and sometimes investment for early startups.",
    customers:
      "Early-stage founders in Leipzig/Dresden/Mitteldeutschland ecosystems.",
    monetization:
      "Program fees (rare), carry/investment returns, sponsorships, and ecosystem funding.",
    problems:
      "Deal flow quality, founder support capacity, and regional talent retention.",
    aiValue:
      "Sourcing AI startups, portfolio analytics, and connecting industry partners to AI use-cases.",
    rolesHiring: [
      "Program Manager",
      "Venture Analyst",
      "Community Lead",
    ],
    skillsNeeded: [
      "Market research",
      "Networking",
      "Basic finance",
      "Domain curiosity",
    ],
    enjoymentFit:
      "I use this mainly as a source engine for Leipzig startups rather than a long-term employer target.",
    investments:
      "Regional deep-tech/AI cohorts and corporate partner programs.",
    strategy2to3Years:
      "Grow portfolio density in AI/industrial tech for Mitteldeutschland  -  track SpinLab/TGFS announcements.",
  },
};

function inferSector(sectorText: string): SectorKey {
  const s = sectorText.toLowerCase();
  if (s.includes("semiconductor")) return "semiconductor";
  if (s.includes("defence") || s.includes("defense")) return "defence";
  if (s.includes("biotech")) return "biotech";
  if (s.includes("accelerator") || s.includes("vc")) return "accelerator";
  if (s.includes("fintech") || s.includes("insurtech")) return "fintech";
  if (s.includes("health") || s.includes("medtech")) return "health-tech";
  if (s.includes("pharma")) return "pharma";
  if (s.includes("energy") || s.includes("greentech") || s.includes("wind"))
    return "energy";
  if (s.includes("aerospace") || s.includes("aviation")) return "aerospace";
  if (s.includes("auto") || s.includes("mobility")) return "automotive";
  if (s.includes("industrial") || s.includes("robot") || s.includes("manufactur"))
    return "industrial";
  if (s.includes("bank")) return "banking";
  if (s.includes("insurance")) return "insurance";
  if (s.includes("retail") || s.includes("e-commerce") || s.includes("food"))
    return "retail";
  if (s.includes("logistic") || s.includes("freight") || s.includes("supply"))
    return "logistics";
  if (s.includes("consult")) return "consulting";
  if (s.includes("telecom")) return "telecom";
  if (s.includes("it services") || s.includes("it service")) return "it-services";
  if (s.includes("cloud")) return "cloud";
  if (s.includes("ai") || s.includes("llm") || s.includes("nlp")) return "ai";
  if (s.includes("software") || s.includes("saas") || s.includes("travel-tech"))
    return "software";
  return "software";
}

export interface CompanySeed {
  name: string;
  sector: string;
  locations: string[];
  headquarters: string;
  headquartersHighlight: string;
  website: string;
  domain: string;
  valuation?: string;
  revenue?: string;
  employees?: string;
  founded?: string;
  tags?: CompanyTag[];
  brief: string;
  europeFocus: string;
  overrides?: Partial<SectorProfile> & {
    rolesHiring?: string[];
    skillsNeeded?: string[];
  };
  sources?: SourceRef[];
  imageHint: string;
}

export function buildCompany(
  tier: 1 | 2 | 3,
  seed: CompanySeed,
  index: number,
): Company {
  const profile = SECTORS[inferSector(seed.sector)];
  const o = seed.overrides ?? {};
  const slug = slugify(seed.name);

  return {
    id: `t${tier}-${slug}`,
    slug,
    name: seed.name,
    tier,
    sector: seed.sector,
    locations: seed.locations,
    headquarters: seed.headquarters,
    headquartersHighlight: seed.headquartersHighlight,
    website: seed.website,
    domain: seed.domain,
    valuation: seed.valuation,
    revenue: seed.revenue,
    employees: seed.employees,
    founded: seed.founded,
    tags: seed.tags ?? [],
    brief: seed.brief,
    europeFocus: seed.europeFocus,
    sells: o.sells ?? profile.sells,
    customers: o.customers ?? profile.customers,
    monetization: o.monetization ?? profile.monetization,
    problems: o.problems ?? profile.problems,
    aiValue: o.aiValue ?? profile.aiValue,
    rolesHiring: o.rolesHiring ?? profile.rolesHiring,
    skillsNeeded: o.skillsNeeded ?? profile.skillsNeeded,
    enjoymentFit: o.enjoymentFit ?? profile.enjoymentFit,
    investments: o.investments ?? profile.investments,
    strategy2to3Years: o.strategy2to3Years ?? profile.strategy2to3Years,
    sources: seed.sources ?? [
      {
        title: "Official website",
        url: seed.website,
        note: "Primary company source  -  verify latest figures here",
      },
      {
        title: "Northdata",
        url: "https://www.northdata.com/",
        note: "German legal/entity check before applying",
      },
    ],
    imageHint: seed.imageHint,
  };
}
