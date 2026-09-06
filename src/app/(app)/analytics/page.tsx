import { AnalyticsStudio } from "@/components/analytics-studio";
import { PhaseContinue } from "@/components/phase-continue";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Analytics studio
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Roadmap visualizations
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
          Comparison views from the same research already on this site — salary
          bands, sector weight, problems A–F, roles, and the company map
          including NRW, Zurich / Zug, and later Amsterdam / Rotterdam.
        </p>
      </section>

      <AnalyticsStudio />

      <PhaseContinue current="/analytics" />
    </div>
  );
}
