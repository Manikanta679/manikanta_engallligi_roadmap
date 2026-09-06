import Link from "next/link";
import { roadmapPattern } from "@/data/market";
import {
  crossSectorProblems,
  metaInsight,
  problemPhaseResources,
  sectorProblemDeepDives,
} from "@/data/businessProblems";
import { PhaseContinue } from "@/components/phase-continue";

export default function ProblemsPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Step 03 · Business problems
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          What companies pay to solve
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          I am not hunting a job title. I am hunting problems that stay unsolved
          into my Werkstudent (2027) and graduation (2028) window — and I aim my
          projects and applications at those problems.
        </p>
      </section>

      <PatternStrip active="problems" />

      <section className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Positioning
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
          {metaInsight.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {metaInsight.body}
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Six cross-sector problems (2027–28)
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            These repeat across every sector I chose. Open each one for a
            2027–29 business deep dive — pain, money, sectors, roles, and
            research.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {crossSectorProblems.map((problem) => (
            <Link
              key={problem.id}
              href={`/problems/${problem.slug}`}
              className="border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Problem {problem.code}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                {problem.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                {problem.plainLanguage}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                Open detail →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Sector-by-sector problem deep dives
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            Each sector is a different flavour of the same six problems — with
            companies, regions, and my loophole.
          </p>
        </div>
        <div className="space-y-3">
          {sectorProblemDeepDives.map((sector) => (
            <Link
              key={sector.id}
              href={`/problems/sectors/${sector.slug}`}
              className="block border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Priority {String(sector.priority).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                {sector.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{sector.tagline}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                Open sector problems →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          Verified sources for this phase
        </h2>
        <div className="space-y-3">
          {problemPhaseResources.map((resource, index) => (
            <article
              key={resource.url + resource.name}
              className="border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                    Source {index + 1}
                    {resource.group ? ` · ${resource.group}` : ""}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl">
                    {resource.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Use for me: {resource.useFor}
                  </p>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
                >
                  Open ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PhaseContinue current="/problems" />
    </div>
  );
}

function PatternStrip({ active }: { active: string }) {
  return (
    <section className="border border-[var(--border)] bg-[var(--surface)] p-5">
      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
        My pattern
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {roadmapPattern.map((step, index) => (
          <div key={step.key} className="flex items-center gap-2">
            <span
              className={`border px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] ${
                step.key === active
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : step.done
                    ? "border-[var(--border)] text-[var(--foreground)]"
                    : "border-[var(--border)] text-[var(--muted)]"
              }`}
            >
              {step.done ? "✓ " : ""}
              {step.label}
            </span>
            {index < roadmapPattern.length - 1 ? (
              <span className="text-[var(--muted)]">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
