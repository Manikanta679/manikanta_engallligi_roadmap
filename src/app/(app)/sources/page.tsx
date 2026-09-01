import { researchSources } from "@/data/sources";

export default function SourcesPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Research library
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Verified sources
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
          Every strategic note in this roadmap should stay source-tied. Use these
          as the living research stack when adding companies or refreshing
          figures.
        </p>
      </section>

      <div className="space-y-3">
        {researchSources.map((source, index) => (
          <article
            key={source.id}
            className="border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  Source {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl">
                  {source.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {source.description}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--foreground)]">
                  Best for: {source.bestFor}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {source.tierRelevance.map((t) => (
                    <span
                      key={t}
                      className="border border-[var(--border)] px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      {t === "all" ? "All tiers" : `Tier ${t}`}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={source.url}
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
    </div>
  );
}
