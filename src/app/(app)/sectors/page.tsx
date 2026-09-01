import Link from "next/link";
import { crossSectorResources, sectors } from "@/data/sectors";
import { roadmapPattern } from "@/data/market";
import { PhaseContinue } from "@/components/phase-continue";

export default function SectorsPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Step 02 · Explore sectors
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          My six sectors
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          I mapped these sectors from market research plus my own notes —
          priority order, local Leipzig options, and where Data/AI creates value.
          Open any sector for the full breakdown.
        </p>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          My pattern
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {roadmapPattern.map((step, index) => (
            <div key={step.key} className="flex items-center gap-2">
              <span
                className={`border px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] ${
                  step.key === "sector"
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

      <section className="space-y-3">
        {sectors.map((sector) => (
          <Link
            key={sector.id}
            href={`/sectors/${sector.slug}`}
            className="block border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                Priority {String(sector.priority).padStart(2, "0")}
              </span>
              {sector.starred ? (
                <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--accent)]">
                  ⭐ Core
                </span>
              ) : (
                <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  Optional
                </span>
              )}
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
              {sector.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{sector.tagline}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--foreground)]">
              Local for me: {sector.localLeipzig}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              Open detailed view →
            </p>
          </Link>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          Master resources I use across sectors
        </h2>
        <div className="space-y-3">
          {crossSectorResources.map((resource, index) => (
            <article
              key={resource.url}
              className="border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
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
      </section>

      <PhaseContinue current="/sectors" />
    </div>
  );
}
