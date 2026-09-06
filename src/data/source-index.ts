import { problemPhaseResources, sectorProblemDeepDives } from "@/data/businessProblems";
import { allCompanies } from "@/data/companies";
import { marketJobSources, marketTrendSources } from "@/data/market";
import { rolePhaseResources } from "@/data/roles";
import { crossSectorResources, sectors } from "@/data/sectors";
import { hubResources, newsResources } from "@/data/priorityHubs";
import { researchSources } from "@/data/sources";

export type SourcePlace =
  | "Market"
  | "Sectors"
  | "Problems"
  | "Roles"
  | "Companies"
  | "Target Location"
  | "News";

export type CatalogItem = {
  name: string;
  url: string;
};

export type CatalogGroup = {
  place: SourcePlace;
  href: string;
  items: CatalogItem[];
};

const companyResearchHosts = new Set([
  "dealroom.co",
  "appliedai-institute.de",
  "startup-mitteldeutschland.de",
  "germanyy.ai",
  "northdata.com",
  "crunchbase.com",
  "unternehmensregister.de",
  "spinlab.co",
  "tracxn.com",
  "neuronfeed.com",
  "tech.eu",
]);

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return url.toLowerCase();
  }
}

function pathKey(url: string): string {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
    const path = parsed.pathname.replace(/\/$/, "").toLowerCase();
    return `${host}${path}`;
  } catch {
    return url.replace(/\/$/, "").toLowerCase();
  }
}

function uniqueItems(items: CatalogItem[]): CatalogItem[] {
  const byKey = new Map<string, CatalogItem>();
  for (const item of items) {
    const key = pathKey(item.url);
    if (!byKey.has(key)) {
      byKey.set(key, item);
    }
  }
  return [...byKey.values()].sort((a, b) => a.name.localeCompare(b.name));
}

const marketItems = uniqueItems(
  [...marketTrendSources, ...marketJobSources].map((source) => ({
    name: source.name,
    url: source.url,
  })),
);

const sectorItems = uniqueItems([
  ...sectors.flatMap((sector) =>
    sector.resources.map((resource) => ({
      name: resource.name,
      url: resource.url,
    })),
  ),
  ...crossSectorResources.map((resource) => ({
    name: resource.name,
    url: resource.url,
  })),
]);

const problemItems = uniqueItems([
  ...problemPhaseResources.map((resource) => ({
    name: resource.name,
    url: resource.url,
  })),
  ...sectorProblemDeepDives.flatMap((sector) =>
    sector.resources.map((resource) => ({
      name: resource.name,
      url: resource.url,
    })),
  ),
]);

const roleItems = uniqueItems(
  rolePhaseResources.map((resource) => ({
    name: resource.name,
    url: resource.url,
  })),
);

const companyItems = uniqueItems(
  allCompanies.flatMap((company) =>
    company.sources
      .filter((source) => companyResearchHosts.has(hostOf(source.url)))
      .map((source) => ({
        name: source.title,
        url: source.url,
      })),
  ),
);

const locationItems = uniqueItems(
  hubResources.map((resource) => ({
    name: resource.name,
    url: resource.url,
  })),
);

export const sourceCatalog: CatalogGroup[] = [
  { place: "Market", href: "/market", items: marketItems },
  { place: "Sectors", href: "/sectors", items: sectorItems },
  { place: "Problems", href: "/problems", items: problemItems },
  { place: "Roles", href: "/roles", items: roleItems },
  { place: "Companies", href: "/companies", items: companyItems },
  { place: "Target Location", href: "/locations", items: locationItems },
  {
    place: "News",
    href: "/market",
    items: uniqueItems(
      newsResources.map((resource) => ({
        name: resource.name,
        url: resource.url,
      })),
    ),
  },
];

const usedHosts = new Set(
  sourceCatalog.flatMap((group) => group.items.map((item) => hostOf(item.url))),
);

export const unusedLibrarySources = researchSources.filter(
  (source) => !usedHosts.has(hostOf(source.url)),
);

export const usedSourceCount = uniqueItems(
  sourceCatalog.flatMap((group) => group.items),
).length;
