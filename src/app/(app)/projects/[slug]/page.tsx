import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProjectBySlug } from "@/data/projects";
import { allProjects } from "@/data/projects";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/projects"
          className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]"
        >
          ← Projects
        </Link>
        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          List {project.list} · {project.id} · {project.sectorLabel}
          {project.note ? ` · ${project.note}` : ""}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.03em] sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed">
          {project.question}
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
            Technical
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
            What the work produces
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {project.technical}
          </p>
        </article>
        <article className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
            Business
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
            Decision it supports
          </h2>
          <p className="mt-3 text-sm leading-relaxed">{project.business}</p>
        </article>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Skills this project proves
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <li
              key={skill}
              className="border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--muted)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Data
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {project.dataNote}
        </p>
        {project.sources.length ? (
          <div className="mt-4 space-y-2">
            {project.sources.map((source) => (
              <a
                key={source.url + source.name}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm transition hover:border-[var(--accent)]"
              >
                <span>{source.name}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                  Open ↗
                </span>
              </a>
            ))}
          </div>
        ) : null}
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          European targets
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.targets.map((target) => (
            <span
              key={target}
              className="border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--muted)]"
            >
              {target}
            </span>
          ))}
        </div>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
          Continue projects
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              ← {prev.id}
            </Link>
          ) : (
            <Link
              href="/projects"
              className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
            >
              ← All projects
            </Link>
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
            >
              Next · {next.id} →
            </Link>
          ) : (
            <Link
              href="/projects"
              className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--accent)]"
            >
              Back to catalogue →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
