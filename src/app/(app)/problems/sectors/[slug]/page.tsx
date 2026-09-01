import Link from "next/link";
import { notFound } from "next/navigation";
import { getSectorProblemDeepDive } from "@/data/businessProblems";

export default async function SectorProblemsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorProblemDeepDive(slug);
  if (!sector) notFound();

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/problems"
          className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]"
        >
          ← Business problems
        </Link>
        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Priority {String(sector.priority).padStart(2, "0")} · Sector problems
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.03em] sm:text-5xl">
          {sector.title}
        </h1>
        <p className="mt-3 text-sm text-[var(--muted)]">{sector.tagline}</p>
      </div>

      <Block title="What this sector sells">
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          {sector.whatSectorSells}
        </p>
      </Block>

      <Block title="Core business problems (2027–28)">
        <div className="space-y-3">
          {sector.coreProblems.map((row, i) => (
            <article
              key={row.problem}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")} · {row.problem}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">{row.plain}</p>
              <p className="mt-2 text-xs text-[var(--muted)]">
                Evidence: {row.evidence}
              </p>
            </article>
          ))}
        </div>
      </Block>

      <Block title="Key companies — their problems & my contribution">
        <div className="space-y-3">
          {sector.companies.map((row) => (
            <article
              key={row.company}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl">
                {row.company}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                {row.location}
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                <span className="text-[var(--foreground)]">Their problem: </span>
                {row.specificProblem}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                <span className="text-[var(--foreground)]">Where I contribute: </span>
                {row.myContribution}
              </p>
            </article>
          ))}
        </div>
      </Block>

      <Block title="Regional depth">
        <div className="grid gap-3 sm:grid-cols-2">
          {sector.regionalDepth.map((hub) => (
            <article
              key={hub.hub}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl">
                {hub.hub}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{hub.why}</p>
            </article>
          ))}
        </div>
      </Block>

      <section className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          My loophole
        </h2>
        <p className="mt-3 text-sm leading-relaxed">{sector.myLoophole}</p>
      </section>

      <Block title="Verified resources">
        <div className="space-y-3">
          {sector.resources.map((resource, index) => (
            <article
              key={resource.url}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Source {index + 1}
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
      </Block>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/problems"
          className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)]"
        >
          ← All problems
        </Link>
        <Link
          href={`/sectors/${sector.slug}`}
          className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
        >
          Open sector dossier →
        </Link>
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
      <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
