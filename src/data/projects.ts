import { list1Projects } from "./projects-list1";
import { list2Projects } from "./projects-list2";

export type ProblemCode = "A" | "B" | "C" | "D" | "E" | "F";
export type ProjectList = 1 | 2;

export type ProjectItem = {
  id: string;
  slug: string;
  list: ProjectList;
  sectorKey: string;
  sectorLabel: string;
  title: string;
  question: string;
  research: string;
  skills: string[];
  technical: string;
  business: string;
  dataNote: string;
  sources: { name: string; url: string }[];
  targets: string[];
  problems: ProblemCode[];
  weight: 1 | 2 | 3;
  note?: string;
};

export const projectProblemGuide = [
  {
    code: "A",
    title: "Pilot to production",
    meaning:
      "Move work from demo to trusted, repeatable delivery — pipelines, refresh, monitoring, adoption.",
    simple:
      "Companies build cool AI demos, but they never become tools people actually use every day.",
  },
  {
    code: "B",
    title: "Data trust",
    meaning:
      "Fix quality, reconciliation, and one official KPI definition.",
    simple:
      "Different teams show different numbers for the same thing, so nobody trusts the reports.",
  },
  {
    code: "C",
    title: "Governance",
    meaning: "AI Act, CSRD, documentation, and risk scoring.",
    simple:
      "Companies must prove their AI is safe, documented, and follows European rules — many are not ready.",
  },
  {
    code: "D",
    title: "Workflow control",
    meaning: "Exceptions, handoffs, and process — not chatbot demos.",
    simple:
      "When AI starts doing tasks on its own, someone must control it and know when a human should step in.",
  },
  {
    code: "E",
    title: "Business translation",
    meaning: "Clear question → insight → decision for managers.",
    simple:
      "The data team and the business team don’t understand each other — someone needs to connect them and explain what to do.",
  },
  {
    code: "F",
    title: "ERP / migration",
    meaning: "SAP, cutover, P2P/O2C, dual-run reconciliation.",
    simple:
      "Old company systems are being replaced with new ones, and someone must check that the numbers still match during the switch.",
  },
] as const;

export const projectSectors = [
  { key: "software", label: "Software / Consulting", priority: 1 },
  { key: "logistics", label: "Logistics / Mobility", priority: 2 },
  { key: "retail", label: "Retail / E-commerce", priority: 3 },
  { key: "banking", label: "Banking / FinTech", priority: 4 },
  { key: "industrial", label: "Industrial / Manufacturing", priority: 5 },
  { key: "energy", label: "Energy / GreenTech", priority: 6 },
  { key: "cross", label: "Cross-sector", priority: 7 },
] as const;

export const projectHubs = [
  "Munich", "Berlin", "Frankfurt", "Hamburg", "Amsterdam", "Paris",
  "Dublin", "Zurich", "Barcelona", "Milan", "Warsaw", "Prague", "Vienna", "Copenhagen",
];

export const projectPathNote =
  "Business Data Analyst / BI → Decision Scientist / Analytics Translator. SQL + Power BI + a clear business case. Europe hubs — not filtered by where I live.";

export const allProjects: ProjectItem[] = [...list1Projects, ...list2Projects];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectsByList(list: ProjectList): ProjectItem[] {
  return allProjects.filter((project) => project.list === list);
}

export function getProjectsBySector(
  sectorKey: string,
  list?: ProjectList,
): ProjectItem[] {
  return allProjects.filter(
    (project) =>
      project.sectorKey === sectorKey &&
      (list === undefined || project.list === list),
  );
}

export function getAdjacentProjects(slug: string): {
  prev: ProjectItem | undefined;
  next: ProjectItem | undefined;
} {
  const current = getProjectBySlug(slug);
  if (!current) {
    return { prev: undefined, next: undefined };
  }

  const siblings = getProjectsByList(current.list);
  const index = siblings.findIndex((project) => project.slug === slug);

  return {
    prev: index > 0 ? siblings[index - 1] : undefined,
    next: index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : undefined,
  };
}
