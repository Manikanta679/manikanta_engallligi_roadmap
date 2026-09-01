import Link from "next/link";
import {
  marketInsights,
  marketJobSources,
  marketTrendSources,
  roadmapPattern,
} from "@/data/market";

const allMarketSources = [...marketTrendSources, ...marketJobSources];

export default function MarketPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Step 01 · Follow the market
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Market & Trends
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          I researched these sources to ground my roadmap in real labour-market
          and AI demand — especially Germany and nearby Europe — before I lock
          sectors, problems, roles, and skills.
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
                  step.key === "market"
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
        <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[0.03em]">
          What I concluded from this research
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {marketInsights.map((insight) => (
            <article
              key={insight.id}
              className="border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl">
                {insight.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {insight.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            My research stack
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
            Each source I used for market trends and hiring research — what it
            is, how it helped me, and my takeaway. Open the official page with
            the button.
          </p>
        </div>
        <div className="space-y-3">
          {allMarketSources.map((source, index) => (
            <SourceCard
              key={source.id}
              source={source}
              label={`Source ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
          Next in my pattern
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
          Sector comes next
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
          Market is documented. When I add the full Sector pack, it will sit in
          the same professional format — still written as my research notes, not
          generic advice.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/companies"
            className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
          >
            Companies by tier →
          </Link>
          <Link
            href="/sources"
            className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
          >
            Company source library →
          </Link>
        </div>
      </section>
    </div>
  );
}

function SourceCard({
  source,
  label,
}: {
  source: (typeof marketTrendSources)[number];
  label: string;
}) {
  return (
    <article className="border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            {label}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
            {source.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            <span className="text-[var(--foreground)]">What it is: </span>
            {source.whatItIs}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            <span className="text-[var(--foreground)]">How it helped me: </span>
            {source.howItHelpedMe}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            <span className="text-[var(--foreground)]">My takeaway: </span>
            {source.myTakeaway}
          </p>
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
  );
}
