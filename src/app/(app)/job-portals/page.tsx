import { PhaseContinue } from "@/components/phase-continue";
import {
  jobPortalKindLabel,
  jobPortalLane,
  jobPortalRegions,
  jobPortals,
  portalsByRegion,
} from "@/data/jobPortals";

export default function JobPortalsPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Boards I hunt on
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          {jobPortalLane.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          {jobPortalLane.body}
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
          {jobPortals.length} portals · {jobPortalRegions.length} regions
        </p>
      </section>

      {jobPortalRegions.map((region) => {
        const portals = portalsByRegion(region);
        if (!portals.length) return null;

        return (
          <section key={region} className="space-y-3">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-[family-name:var(--font-display)] text-3xl">
                {region}
              </h2>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                {portals.length} {portals.length === 1 ? "link" : "links"}
              </p>
            </div>
            <div className="space-y-3">
              {portals.map((portal) => (
                <article
                  key={portal.id}
                  className="border border-[var(--border)] bg-[var(--surface)] p-5"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                          {jobPortalKindLabel[portal.kind]}
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                          Weight {portal.weight}
                        </p>
                      </div>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                        {portal.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                        {portal.note}
                      </p>
                    </div>
                    <a
                      href={portal.url}
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
        );
      })}

      <PhaseContinue current="/job-portals" />
    </div>
  );
}
