import type { ResearchSource } from "@/types/company";

export const researchSources: ResearchSource[] = [
  {
    id: "dealroom",
    name: "Dealroom — German unicorns",
    url: "https://dealroom.co/unicorns/germany/",
    bestFor: "Tier 2 scale-ups / unicorns",
    description:
      "Live ranked list of German unicorns by valuation, sector, and HQ. Best primary source for Tier 2 valuations and momentum.",
    tierRelevance: ["2"],
  },
  {
    id: "appliedai",
    name: "appliedAI — German AI Startup Landscape 2025",
    url: "https://www.appliedai-institute.de/en/publications/ai-startup-landscape-2025/",
    bestFor: "Tier 3 AI startups",
    description:
      "Landscape of ~935 German AI startups filterable by industry and city. Best for discovering Tier 3 AI companies.",
    tierRelevance: ["3"],
  },
  {
    id: "startup-md",
    name: "Startup Mitteldeutschland",
    url: "https://startup-mitteldeutschland.de/search/location/startup-datenbank/",
    bestFor: "Leipzig / Saxony local startups",
    description:
      "Regional startup database for Leipzig, Dresden, Halle — primary source for ⭐ Leipzig-local entries.",
    tierRelevance: ["3"],
  },
  {
    id: "germanyy-ai",
    name: "germanyy.ai — Leipzig AI",
    url: "https://www.germanyy.ai/city/Leipzig",
    bestFor: "Verified Leipzig AI list",
    description:
      "AI startups by city; used to verify the Leipzig AI set in Tier 3.",
    tierRelevance: ["3"],
  },
  {
    id: "northdata",
    name: "Northdata",
    url: "https://www.northdata.com/",
    bestFor: "Per-company legal diligence",
    description:
      "German legal data, size signals, owners. Use to check ONE company before applying.",
    tierRelevance: ["all"],
  },
  {
    id: "crunchbase",
    name: "Crunchbase",
    url: "https://www.crunchbase.com/",
    bestFor: "Funding, founders, jobs",
    description:
      "Global funding rounds, founders, and job signals. Cross-check valuations and raise dates.",
    tierRelevance: ["2", "3"],
  },
  {
    id: "unternehmensregister",
    name: "Unternehmensregister",
    url: "https://www.unternehmensregister.de/",
    bestFor: "Official German filings",
    description:
      "Official German company filings — the authoritative registry source.",
    tierRelevance: ["all"],
  },
  {
    id: "spinlab",
    name: "SpinLab portfolio",
    url: "https://www.spinlab.co/",
    bestFor: "Leipzig accelerator deal-flow",
    description:
      "Leipzig accelerator portfolio — living source for new local startups.",
    tierRelevance: ["3"],
  },
  {
    id: "tracxn",
    name: "Tracxn",
    url: "https://tracxn.com",
    bestFor: "Secondary rankings & funding",
    description:
      "Secondary source for funding news and company rankings.",
    tierRelevance: ["2", "3"],
  },
  {
    id: "neuronfeed",
    name: "NeuronFeed Germany",
    url: "https://neuronfeed.com/country/germany",
    bestFor: "Who's growing (news)",
    description:
      "Germany-focused funding and growth news feed.",
    tierRelevance: ["2", "3"],
  },
  {
    id: "tech-eu",
    name: "Tech.eu",
    url: "https://tech.eu",
    bestFor: "European funding news",
    description:
      "European tech funding journalism — useful for momentum checks.",
    tierRelevance: ["2", "3"],
  },
];
