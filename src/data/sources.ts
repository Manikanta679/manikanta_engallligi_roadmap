import type { ResearchSource } from "@/types/company";

export const researchSources: ResearchSource[] = [
  {
    id: "dealroom",
    name: "Dealroom — German unicorns",
    url: "https://dealroom.co/unicorns/germany/",
    bestFor: "My Tier 2 scale-ups / unicorns list",
    description:
      "Live ranked German unicorns by valuation, sector, and HQ. This helps me because I can refresh Tier 2 valuations and momentum from one verified list instead of guessing from news headlines.",
    howItHelpedMe:
      "It is good for me because when I add or update Tier 2 companies, I start here to see who is actually scaled and funded in Germany.",
    tierRelevance: ["2"],
  },
  {
    id: "appliedai",
    name: "appliedAI — German AI Startup Landscape 2025",
    url: "https://www.appliedai-institute.de/en/publications/ai-startup-landscape-2025/",
    bestFor: "My Tier 3 AI startup discovery",
    description:
      "Landscape of ~935 German AI startups filterable by industry and city. This helps me because I can find real AI employers for Tier 3 and connect Market trends to concrete companies.",
    howItHelpedMe:
      "It is useful for me when I expand Leipzig/Berlin/Munich AI options and keep Tier 3 source-backed.",
    tierRelevance: ["3"],
  },
  {
    id: "startup-md",
    name: "Startup Mitteldeutschland",
    url: "https://startup-mitteldeutschland.de/search/location/startup-datenbank/",
    bestFor: "My Leipzig / Saxony local startups",
    description:
      "Regional startup database for Leipzig, Dresden, Halle. This helps me because proximity matters in my roadmap — I can verify Leipzig-local companies instead of only chasing Berlin brands.",
    howItHelpedMe:
      "It is good for me as my local deal-flow base while I study and look for nearby projects/internships.",
    tierRelevance: ["3"],
  },
  {
    id: "germanyy-ai",
    name: "germanyy.ai — Leipzig AI",
    url: "https://www.germanyy.ai/city/Leipzig",
    bestFor: "My verified Leipzig AI checklist",
    description:
      "AI startups listed by city. This helps me because I cross-checked my Leipzig AI set against an independent city view.",
    howItHelpedMe:
      "It is useful for me as a second confirmation layer for Leipzig AI names before I invest research time.",
    tierRelevance: ["3"],
  },
  {
    id: "northdata",
    name: "Northdata",
    url: "https://www.northdata.com/",
    bestFor: "My per-company legal diligence",
    description:
      "German legal data, size signals, and owners. This helps me because before I apply, I can check that one company is real, active, and correctly identified.",
    howItHelpedMe:
      "It is good for me as a final diligence stop on a shortlisted employer — especially smaller Tier 3 firms.",
    tierRelevance: ["all"],
  },
  {
    id: "crunchbase",
    name: "Crunchbase",
    url: "https://www.crunchbase.com/",
    bestFor: "My funding / founders / jobs cross-check",
    description:
      "Global funding rounds, founders, and job signals. This helps me because I can verify raise dates and growth claims I write into company briefs.",
    howItHelpedMe:
      "It is useful for me when Dealroom or press mentions a round and I want a second source.",
    tierRelevance: ["2", "3"],
  },
  {
    id: "unternehmensregister",
    name: "Unternehmensregister",
    url: "https://www.unternehmensregister.de/",
    bestFor: "My official German filings check",
    description:
      "Official German company filings. This helps me because it is the authoritative registry when I need formal confirmation — my “Bible” for DE entities.",
    howItHelpedMe:
      "It is important for me when legal identity or filings matter before a serious application.",
    tierRelevance: ["all"],
  },
  {
    id: "spinlab",
    name: "SpinLab portfolio",
    url: "https://www.spinlab.co/",
    bestFor: "My Leipzig accelerator deal-flow",
    description:
      "Leipzig accelerator portfolio. This helps me because new local startups appear here over time — I can keep Tier 3 alive without guessing.",
    howItHelpedMe:
      "It is good for me as a living Leipzig source for future company additions and possible project paths.",
    tierRelevance: ["3"],
  },
  {
    id: "tracxn",
    name: "Tracxn",
    url: "https://tracxn.com",
    bestFor: "My secondary funding rankings",
    description:
      "Secondary rankings and funding intelligence. This helps me because I can compare momentum claims against another database.",
    howItHelpedMe:
      "It is useful for me as a backup when I need a second opinion on growth/funding.",
    tierRelevance: ["2", "3"],
  },
  {
    id: "neuronfeed",
    name: "NeuronFeed Germany",
    url: "https://neuronfeed.com/country/germany",
    bestFor: "My Germany growth-news feed",
    description:
      "Germany-focused funding and growth news. This helps me because I can spot who is hiring/raising now and revisit those companies in my tiers.",
    howItHelpedMe:
      "It is good for me for weekly awareness of “who is growing” in the German tech market.",
    tierRelevance: ["2", "3"],
  },
  {
    id: "tech-eu",
    name: "Tech.eu",
    url: "https://tech.eu",
    bestFor: "My European funding news layer",
    description:
      "European tech funding journalism. This helps me because my roadmap is EU-wide, not only Germany — I can catch Paris/Amsterdam/Nordic signals that affect my Tier lists.",
    howItHelpedMe:
      "It is useful for me when I compare German opportunities with broader European momentum.",
    tierRelevance: ["2", "3"],
  },
];
