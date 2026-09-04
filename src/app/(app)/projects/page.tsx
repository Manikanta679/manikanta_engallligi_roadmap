import Link from "next/link";
import {
  getProjectsByList,
  getProjectsBySector,
  projectHubs,
  projectProblemGuide,
  projectSectors,
} from "@/data/projects";
import type { ProjectItem, ProjectList } from "@/data/projects";
import { PhaseContinue } from "@/components/phase-continue";

export default function ProjectsPage() {
  const list1 = getProjectsByList(1);
  const list2 = getProjectsByList(2);

  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Step 06 · Projects / Internship
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Project catalogue
        </h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <CountCard label="Total" value={String(list1.length + list2.length)} />
          <CountCard label="List 1 · Core" value={String(list1.length)} />
          <CountCard label="List 2 · Alternate" value={String(list2.length)} />
        </div>
      </section>

      <section className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          How a project proves the roadmap
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
          Problems A–F
        </h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {projectProblemGuide.map((row) => (
            <article
              key={row.code}
              className="border border-[var(--border)] bg-[var(--background)]/60 p-4"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Problem {row.code}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl">
                {row.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {row.meaning}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                Simple
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--foreground)]">
                {row.simple}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Where the work can land
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
          Europe hubs
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {projectHubs.map((hub) => (
            <span
              key={hub}
              className="border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]"
            >
              {hub}
            </span>
          ))}
        </div>
      </section>

      <Catalogue
        list={1}
        title="List 1 · Core catalogue"
        blurb="The Europe / major-hubs set: consulting, logistics, retail, banking, industrial, energy, and cross-sector combinations."
      />

      <Catalogue
        list={2}
        title="List 2 · Alternate catalogue"
        blurb="Same structure, more options — use this when I want a second angle on the same sectors and problems."
      />

      <PhaseContinue current="/projects" />
    </div>
  );
}

function Catalogue({
  list,
  title,
  blurb,
}: {
  list: ProjectList;
  title: string;
  blurb: string;
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">{blurb}</p>
      </div>
      {projectSectors.map((sector) => {
        const items = getProjectsBySector(sector.key, list);
        if (!items.length) return null;
        return (
          <div key={`${list}-${sector.key}`} className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
              {sector.priority < 7 ? `Sector ${sector.priority}` : "Combinations"}{" "}
              · {sector.label}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
          {project.id}
        </p>
        {project.note ? (
          <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
            · {project.note}
          </span>
        ) : null}
      </div>
      <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
        {project.question}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.problems.map((code) => (
          <span
            key={code}
            className="border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]"
          >
            Problem {code}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
        Open detail →
      </p>
    </Link>
  );
}

function CountCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 font-[family-name:var(--font-display)] text-3xl">
        {value}
      </p>
    </div>
  );
}
