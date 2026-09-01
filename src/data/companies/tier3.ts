import { buildCompany, type CompanySeed } from "../sectorProfiles";
import type { Company } from "@/types/company";

const seeds: CompanySeed[] = [
  {
    name: "MAIA (Prodlane)",
    sector: "AI (industrial knowledge, GDPR)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐ — industrial knowledge AI, GDPR-aware",
    website: "https://www.maia-company.com",
    domain: "maia-company.com",
    valuation: "€4M raised (verify Crunchbase/local press)",
    tags: ["leipzig-local", "mitteldeutschland", "ai-focus"],
    brief:
      "Leipzig AI startup focused on industrial knowledge systems with GDPR-conscious design — local, high-ownership opportunity.",
    europeFocus:
      "Verified Leipzig-local AI; ideal for proximity + responsibility.",
    sources: [
      { title: "germanyy.ai Leipzig", url: "https://www.germanyy.ai/city/Leipzig" },
      { title: "Startup Mitteldeutschland", url: "https://startup-mitteldeutschland.de/search/location/startup-datenbank/" },
    ],
    imageHint: "industrial ai leipzig",
  },
  {
    name: "KnowFab",
    sector: "AI (manufacturing/quality)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐",
    website: "https://knowfab.com",
    domain: "knowfab.com",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Leipzig AI for manufacturing/quality — shop-floor knowledge and quality intelligence use cases.",
    europeFocus:
      "Local manufacturing AI aligned with Mittelstand production needs.",
    imageHint: "manufacturing quality ai",
  },
  {
    name: "deepmentation",
    sector: "AI (local GDPR AI)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐ — GDPR-local AI",
    website: "https://deepmentation.ai",
    domain: "deepmentation.ai",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Leipzig AI company emphasizing local/GDPR-aligned AI solutions.",
    europeFocus:
      "Privacy-first local AI — verify latest product focus on official site + Northdata.",
    imageHint: "gdpr ai",
  },
  {
    name: "BirdsView",
    sector: "Retail/E-commerce (marketing AI CRM)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐",
    website: "https://birdsview.ai",
    domain: "birdsview.ai",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Leipzig marketing AI / CRM intelligence for retail and e-commerce growth teams.",
    europeFocus:
      "Local go-to-market AI with retail analytics angle.",
    imageHint: "marketing ai crm",
  },
  {
    name: "AI-Driven Therapeutics",
    sector: "Healthcare/Biotech (drug discovery AI)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐ — Uni Leipzig spin-off",
    website: "https://ai-driven-therapeutics.com",
    domain: "ai-driven-therapeutics.com",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Uni Leipzig spin-off applying AI to drug discovery / therapeutics research workflows.",
    europeFocus:
      "Academic-to-startup path in Leipzig life-science AI.",
    imageHint: "drug discovery ai",
  },
  {
    name: "Raylytic",
    sector: "Healthcare (clinical-trial AI)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐",
    website: "https://www.raylytic.com",
    domain: "raylytic.com",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Healthcare AI for clinical measurement/analysis — imaging and trial-related analytics.",
    europeFocus:
      "Leipzig MedTech/AI with clinical validation culture.",
    imageHint: "clinical trial ai",
  },
  {
    name: "Kopernikus Automotive",
    sector: "Industrial/Mobility (autonomous parking)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐ — autonomous parking",
    website: "https://www.kopernikusauto.com",
    domain: "kopernikusauto.com",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Autonomy software for vehicle logistics/parking — industrial mobility AI in Leipzig.",
    europeFocus:
      "Local mobility AI with automotive-adjacent customers.",
    imageHint: "autonomous parking",
  },
  {
    name: "ORSOFT",
    sector: "Logistics/Supply-chain (SAP add-ons)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐ — SAP supply-chain add-ons",
    website: "https://www.orsoft.net",
    domain: "orsoft.net",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Leipzig software company specializing in SAP-related planning/supply-chain solutions.",
    europeFocus:
      "Strong bridge from local SaaS to SAP ecosystem careers.",
    imageHint: "sap supply chain",
  },
  {
    name: "MotionsCloud",
    sector: "FinTech/InsurTech (claims AI)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐",
    website: "https://www.motionscloud.com",
    domain: "motionscloud.com",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "InsurTech AI for claims — visual/damage assessment and claims workflow automation.",
    europeFocus:
      "Leipzig insurtech with clear AI product wedge.",
    imageHint: "claims ai",
  },
  {
    name: "Sensape / FlyNex / Onsai / Accompio / Docyet",
    sector: "AI (mixed)",
    locations: ["Leipzig"],
    headquarters: "Leipzig, Germany",
    headquartersHighlight: "Leipzig ⭐ — mixed AI portfolio cluster",
    website: "https://startup-mitteldeutschland.de",
    domain: "startup-mitteldeutschland.de",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Cluster of Leipzig AI and digital startups spanning vision, drones/geodata, and document/process AI — track individually on Startup Mitteldeutschland.",
    europeFocus:
      "Local ecosystem map rather than a single employer — use as sourcing list.",
    sources: [
      {
        title: "Startup Mitteldeutschland database",
        url: "https://startup-mitteldeutschland.de/search/location/startup-datenbank/",
      },
      { title: "germanyy.ai Leipzig", url: "https://www.germanyy.ai/city/Leipzig" },
    ],
    imageHint: "leipzig startup cluster",
  },
  {
    name: "ScaDS.AI Dresden/Leipzig",
    sector: "AI research center (thesis!)",
    locations: ["Leipzig", "Dresden"],
    headquarters: "Leipzig / Dresden, Germany",
    headquartersHighlight: "Leipzig/Dresden ⭐ — thesis & research gateway",
    website: "https://scads.ai",
    domain: "scads.ai",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Center for Scalable Data Analytics and Artificial Intelligence — prime local gateway for thesis, research collaborations, and AI network.",
    europeFocus:
      "Strategic for academic-industry bridge in Saxony.",
    overrides: {
      enjoymentFit:
        "Excellent for me if I want a thesis path into AI with local industry links — I treat this as a research gateway more than a classic employer.",
      strategy2to3Years:
        "Expand AI competence center activity across Dresden/Leipzig — follow ScaDS.AI publications and partner calls.",
    },
    sources: [
      { title: "ScaDS.AI", url: "https://scads.ai" },
    ],
    imageHint: "ai research center",
  },
  {
    name: "Deeploi / Doinstruct / Langdock",
    sector: "AI (IT/ops/LLM tools)",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin AI tools cluster",
    website: "https://www.langdock.com",
    domain: "langdock.com",
    tags: ["ai-focus"],
    brief:
      "Berlin AI tooling startups spanning IT/ops automation and enterprise LLM workspaces.",
    europeFocus:
      "Fast-learning AI product environments in Berlin.",
    imageHint: "llm tools",
  },
  {
    name: "Akhetonics / ARX Robotics / Atira",
    sector: "AI/deep-tech",
    locations: ["Germany"],
    headquarters: "Germany (deep-tech)",
    headquartersHighlight: "German deep-tech AI / robotics",
    website: "https://www.arx-robotics.com",
    domain: "arx-robotics.com",
    tags: ["ai-focus"],
    brief:
      "German deep-tech cluster spanning novel compute/photonics concepts and robotics — verify each entity on Northdata before outreach.",
    europeFocus:
      "High-risk/high-learning deep-tech; diligence critically.",
    imageHint: "deep tech",
  },
  {
    name: "Kittl / Lio",
    sector: "AI (design / enterprise)",
    locations: ["Berlin", "Munich"],
    headquarters: "Berlin / Munich, Germany",
    headquartersHighlight: "Berlin / Munich",
    website: "https://www.kittl.com",
    domain: "kittl.com",
    brief:
      "Product-led AI companies in design tooling (Kittl) and enterprise AI (Lio) — verify latest positioning on official sites.",
    europeFocus:
      "German product AI with design and enterprise angles.",
    imageHint: "design ai",
  },
  {
    name: "sennder / Forto / cargo.one",
    sector: "Logistics (digital freight)",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin digital freight cluster",
    website: "https://www.sennder.com",
    domain: "sennder.com",
    brief:
      "Digital freight forwarders/platforms digitizing road and air freight brokerage and operations.",
    europeFocus:
      "Berlin logistics-tech hub with strong data/ops hiring.",
    imageHint: "digital freight",
  },
  {
    name: "Flexport",
    sector: "Logistics",
    locations: ["Amsterdam"],
    headquarters: "Amsterdam hub (global HQ historically SF)",
    headquartersHighlight: "Amsterdam 🇳🇱 — EU logistics-tech hub",
    website: "https://www.flexport.com",
    domain: "flexport.com",
    brief:
      "Digital freight forwarder/platform combining software with freight execution.",
    europeFocus:
      "Amsterdam as key EU node for digital freight careers.",
    imageHint: "freight platform",
  },
  {
    name: "Choco / Flink",
    sector: "Retail (food/quick-commerce)",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin food-tech",
    website: "https://www.choco.com",
    domain: "choco.com",
    brief:
      "Berlin food-tech: restaurant supply ordering (Choco) and quick-commerce (Flink) — ops + marketplace data problems.",
    europeFocus:
      "Berlin consumer/ops tech with intense logistics optimization.",
    imageHint: "food tech berlin",
  },
  {
    name: "Taxfix / Moss / Pliant / Re:cap",
    sector: "FinTech",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin fintech cluster",
    website: "https://taxfix.com",
    domain: "taxfix.com",
    brief:
      "Berlin fintech cluster spanning tax automation, spend management, cards, and financing infrastructure.",
    europeFocus:
      "SMB fintech density in Berlin — product/analytics roles.",
    imageHint: "smb fintech",
  },
  {
    name: "Konux",
    sector: "AI (rail/mobility)",
    locations: ["Munich"],
    headquarters: "Munich, Germany",
    headquartersHighlight: "Munich HQ — rail AI",
    website: "https://www.konux.com",
    domain: "konux.com",
    brief:
      "AI/IoT for rail infrastructure monitoring and predictive maintenance.",
    europeFocus:
      "German mobility AI with infrastructure customers.",
    imageHint: "rail ai",
  },
  {
    name: "Sereact",
    sector: "AI/Robotics (industrial)",
    locations: ["Stuttgart"],
    headquarters: "Stuttgart, Germany",
    headquartersHighlight: "Stuttgart HQ",
    website: "https://sereact.ai",
    domain: "sereact.ai",
    brief:
      "AI robotics for industrial picking/automation — vision-language-action style warehouse/factory use cases.",
    europeFocus:
      "Stuttgart robotics AI close to industrial customer base.",
    imageHint: "warehouse robotics",
  },
  {
    name: "Enpal / 1KOMMA5° / Reverion / INERATEC",
    sector: "Energy/GreenTech",
    locations: ["Berlin", "Hamburg", "Karlsruhe"],
    headquarters: "Berlin / Hamburg / Karlsruhe, Germany",
    headquartersHighlight: "German greentech scale-ups",
    website: "https://www.enpal.de",
    domain: "enpal.de",
    brief:
      "German energy transition companies spanning residential solar, energy services, and climate-tech hardware/fuels.",
    europeFocus:
      "High-growth greentech employers across DE hubs.",
    imageHint: "greentech solar",
  },
  {
    name: "Ada Health",
    sector: "Health-tech",
    locations: ["Berlin"],
    headquarters: "Berlin, Germany",
    headquartersHighlight: "Berlin HQ",
    website: "https://ada.com",
    domain: "ada.com",
    brief:
      "AI-powered health assessment / digital health companion used by consumers and health systems.",
    europeFocus:
      "Berlin health-AI product company with clinical NLP themes.",
    imageHint: "health assessment ai",
  },
  {
    name: "SpinLab / TGFS / Smart Infrastructure Ventures",
    sector: "Accelerator/VC (startup source)",
    locations: ["Leipzig", "Dresden"],
    headquarters: "Leipzig / Dresden, Germany",
    headquartersHighlight: "Leipzig/Dresden ⭐ — portfolio sourcing engine",
    website: "https://www.spinlab.co",
    domain: "spinlab.co",
    tags: ["leipzig-local", "mitteldeutschland"],
    brief:
      "Accelerator and VC sources for Leipzig/Dresden startups — use portfolios as a living deal-flow list, not a single employer.",
    europeFocus:
      "Primary local sourcing layer for discovering new Tier-3 companies over the next years.",
    overrides: {
      enjoymentFit:
        "Use as research/network channel to find startups; optionally engage via programs rather than full-time employment.",
      strategy2to3Years:
        "Track new batches and portfolio announcements quarterly — primary living source for Leipzig additions to this roadmap.",
    },
    sources: [
      { title: "SpinLab", url: "https://www.spinlab.co/" },
      {
        title: "Startup Mitteldeutschland",
        url: "https://startup-mitteldeutschland.de/search/location/startup-datenbank/",
      },
    ],
    imageHint: "startup accelerator",
  },
];

export const tier3Companies: Company[] = seeds.map((seed, i) =>
  buildCompany(3, seed, i),
);
