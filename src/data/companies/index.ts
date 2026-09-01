import type { Company, Tier } from "@/types/company";
import { tier1Companies } from "./tier1";
import { tier2Companies } from "./tier2";
import { tier3Companies } from "./tier3";

export const allCompanies: Company[] = [
  ...tier1Companies,
  ...tier2Companies,
  ...tier3Companies,
];

export function getCompaniesByTier(tier: Tier): Company[] {
  return allCompanies.filter((c) => c.tier === tier);
}

export function getCompanyBySlug(slug: string): Company | undefined {
  return allCompanies.find((c) => c.slug === slug);
}

export function getCompanyByTierAndSlug(
  tier: Tier,
  slug: string,
): Company | undefined {
  return allCompanies.find((c) => c.tier === tier && c.slug === slug);
}

export const tierMeta = {
  1: {
    title: "Tier 1 — Giants / Corporates",
    subtitle: "Big grad/Werkstudent programs · structured · brand · slower/formal",
    accent: "#c4a574",
  },
  2: {
    title: "Tier 2 — Scale-ups / Mittelstand",
    subtitle: "Unicorns + funded scale-ups + hidden champions · more responsibility",
    accent: "#6b8f71",
  },
  3: {
    title: "Tier 3 — Startups",
    subtitle: "Most responsibility · fastest learning · English-friendly · Leipzig ⭐",
    accent: "#7a9eb8",
  },
} as const;
