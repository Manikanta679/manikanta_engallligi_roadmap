export type Tier = 1 | 2 | 3;

export type CompanyTag =
  | "deutschlandsstipendium"
  | "ai-focus"
  | "mitteldeutschland"
  | "visa-friendly"
  | "unicorn"
  | "leipzig-local";

export interface SourceRef {
  title: string;
  url: string;
  note?: string;
}

export interface Company {
  id: string;
  slug: string;
  name: string;
  tier: Tier;
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
  tags: CompanyTag[];
  brief: string;
  europeFocus: string;
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
  sources: SourceRef[];
  imageHint: string;
}

export interface ResearchSource {
  id: string;
  name: string;
  url: string;
  bestFor: string;
  description: string;
  tierRelevance: ("1" | "2" | "3" | "all")[];
}
