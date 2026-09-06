import Link from "next/link";
import { PhaseContinue } from "@/components/phase-continue";
import {
  sourceCatalog,
  unusedLibrarySources,
  usedSourceCount,
} from "@/data/source-index";

export default function SourcesPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Research library
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          All sources in one place
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
          Names only, grouped by where I used them on this roadmap. Project
          datasets stay on Projects.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
          {usedSourceCount} used · {unusedLibrarySources.length} not used
          elsewhere
        </p>
      </section>

      {sourceCatalog.map((group) => (
        <section key={group.place} className="space-y-3">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {group.place}
            </h2>
            <Link
              href={group.href}
              className="text-xs uppercase tracking-[0.16em] text-[var(--accent)] hover:underline"
            >
              Open {group.place} →
            </Link>
          </div>
          <div className="divide-y divide-[var(--border)] border border-[var(--border)] bg-[var(--surface)]">
            {group.items.map((item) => (
              <div
                key={`${group.place}-${item.url}`}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <p className="text-sm text-[var(--foreground)]">{item.name}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-[var(--accent)] hover:underline"
                >
                  Open ↗
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          Not used anywhere else
        </h2>
        <p className="text-sm text-[var(--muted)]">
          These sit only on this Sources list — no Market, Sector, Problem,
          Role, Company, Target Location, or News card uses them yet.
        </p>
        <div className="divide-y divide-[var(--border)] border border-dashed border-[var(--border)] bg-[var(--surface)]">
          {unusedLibrarySources.map((source) => (
            <div
              key={source.id}
              className="flex items-center justify-between gap-4 px-4 py-3"
            >
              <p className="text-sm text-[var(--muted)]">{source.name}</p>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] hover:underline"
              >
                Open ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      <PhaseContinue current="/sources" />
    </div>
  );
}
