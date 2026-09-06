import { allCompanies } from "@/data/companies";
import { crossSectorProblems } from "@/data/businessProblems";
import { allProjects, projectProblemGuide, projectSectors } from "@/data/projects";
import { roleDemandScores, sectorFitScores, targetRoles } from "@/data/roles";
import { screeningBusiness, screeningTech } from "@/data/skills";
import { sectors } from "@/data/sectors";

/** Midpoints from role salary notes (k EUR, DE-oriented research). */
export const salaryPath = [
  { role: "Business DA", entry: 52, later: 67, track: "Entry" },
  { role: "BI Analyst", entry: 54, later: 68, track: "Entry" },
  { role: "Hybrid AE", entry: 55, later: 80, track: "Entry" },
  { role: "Celonis / PI", entry: 60, later: 80, track: "Wildcard" },
  { role: "AI Bus. Analyst", entry: 58, later: 72, track: "Emerging" },
  { role: "AI Dig. Consult", entry: 62, later: 82, track: "Emerging" },
  { role: "Decision Sci", entry: 75, later: 92, track: "Destination" },
  { role: "Translator", entry: 78, later: 95, track: "Destination" },
];

export const salaryVsDemand = salaryPath.map((row) => {
  const demand = roleDemandScores.find((d) => d.role === row.role);
  return {
    role: row.role,
    entry: row.entry,
    later: row.later,
    lift: row.later - row.entry,
    demand2027: demand?.demand2027 ?? 0,
    demand2029: demand?.demand2029 ?? 0,
    wageLift: demand?.wageLift ?? 0,
  };
});

const sectorWeightByPriority: Record<string, number> = {
  "Software / Consulting": 94,
  "Logistics / Mobility": 90,
  "Retail / E-commerce": 82,
  "Industrial / Manufacturing": 74,
  "Banking / FinTech": 66,
  "Energy / GreenTech": 58,
};

function mapCompanySector(sector: string): string {
  const s = sector.toLowerCase();
  if (
    s.includes("consult") ||
    s.includes("software") ||
    s.includes("saas") ||
    s.includes("it service")
  )
    return "Software / Consulting";
  if (s.includes("logistic") || s.includes("freight") || s.includes("mobility"))
    return "Logistics / Mobility";
  if (s.includes("retail") || s.includes("e-commerce") || s.includes("ecom"))
    return "Retail / E-commerce";
  if (s.includes("bank") || s.includes("fintech")) return "Banking / FinTech";
  if (s.includes("auto") || s.includes("industrial") || s.includes("manufact"))
    return "Industrial / Manufacturing";
  if (s.includes("energy") || s.includes("greentech")) return "Energy / GreenTech";
  return "Other";
}

export const sectorMarketWeight = sectors.map((sector) => {
  const companies = allCompanies.filter(
    (c) => mapCompanySector(c.sector) === sector.title,
  ).length;
  const projects = allProjects.filter((p) => {
    if (p.sectorKey === "software" && sector.priority === 1) return true;
    if (p.sectorKey === "logistics" && sector.priority === 2) return true;
    if (p.sectorKey === "retail" && sector.priority === 3) return true;
    if (p.sectorKey === "banking" && sector.priority === 4) return true;
    if (p.sectorKey === "industrial" && sector.priority === 5) return true;
    if (p.sectorKey === "energy" && sector.priority === 6) return true;
    return false;
  }).length;
  const fit =
    sectorFitScores.find((row) =>
      sector.title.toLowerCase().includes(row.sector.toLowerCase()),
    )?.fit ?? 70;

  return {
    sector: sector.shortLabel,
    label: sector.shortLabel,
    priority: sector.priority,
    weight: sectorWeightByPriority[sector.title] ?? 60,
    fit,
    companies,
    projects,
  };
});

export const problemCoverage = projectProblemGuide.map((row) => {
  const count = allProjects.filter((p) => p.problems.includes(row.code)).length;
  const problem = crossSectorProblems.find((p) => p.code === row.code);
  return {
    code: `Problem ${row.code}`,
    label: `${row.code} · ${row.title}`,
    title: row.title,
    projects: count,
    weight: Math.round((count / allProjects.length) * 100),
    name: problem?.title ?? row.title,
  };
});

export const problemRadar = problemCoverage.map((row) => ({
  problem: row.title,
  coverage: row.weight,
  fullMark: 100,
}));

export const roleMix = targetRoles.map((role) => {
  const techMatch = role.techBusiness.match(/(\d+)%\s*tech/i);
  const busMatch = role.techBusiness.match(/(\d+)%\s*business/i);
  return {
    role: role.title,
    short: role.code,
    technical: techMatch ? Number(techMatch[1]) : 50,
    business: busMatch ? Number(busMatch[1]) : 50,
    track: role.track,
  };
});

export const projectSectorLoad = projectSectors
  .filter((s) => s.key !== "cross")
  .map((s) => ({
    sector: s.label.split(" / ")[0],
    list1: allProjects.filter((p) => p.list === 1 && p.sectorKey === s.key)
      .length,
    list2: allProjects.filter((p) => p.list === 2 && p.sectorKey === s.key)
      .length,
  }));

export const analyticsKpis = [
  { label: "Companies", value: String(allCompanies.length) },
  { label: "Projects", value: String(allProjects.length) },
  { label: "Sectors", value: String(sectors.length) },
  { label: "Roles mapped", value: String(targetRoles.length) },
  { label: "Problems A–F", value: "6" },
];

export { roleDemandScores, screeningBusiness, screeningTech };
