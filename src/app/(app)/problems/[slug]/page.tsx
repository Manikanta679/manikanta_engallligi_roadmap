import Link from "next/link";
import { notFound } from "next/navigation";
import { getCrossSectorProblem } from "@/data/businessProblems";

export default async function CrossProblemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getCrossSectorProblem(slug);
  if (!problem) notFound();

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
          Cross-sector · Problem {problem.code} · Horizon 2027–29
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.03em] sm:text-5xl">
          {problem.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          {problem.plainLanguage}
        </p>
      </div>

      <section className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Business pain
        </h2>
        <p className="mt-3 text-sm leading-relaxed">{problem.businessPain}</p>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          What happens 2027–29
        </h2>
        <div className="mt-4 space-y-3">
          {problem.horizon2027_29.map((row) => (
            <article
              key={row.phase}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                {row.phase}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {row.whatHappens}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Money & ROI logic
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {problem.moneyAndRoi}
        </p>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Who pays for this
        </h2>
        <ul className="mt-4 space-y-2">
          {problem.whoPays.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          How it shows in my six sectors
        </h2>
        <div className="mt-4 space-y-3">
          {problem.sectorFootprints.map((row) => (
            <article
              key={row.sector}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                {row.sector}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {row.howItShows}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Roles hiring into this problem
        </h2>
        <ul className="mt-4 space-y-2">
          {problem.rolesInDemand.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
          {problem.demand2027_28}
        </p>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Skills signal I should show
        </h2>
        <ul className="mt-4 space-y-2">
          {problem.skillsSignal.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Research I tracked
        </h2>
        <ul className="mt-4 space-y-2">
          {problem.evidence.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Why this matters to me
        </h2>
        <p className="mt-3 text-sm leading-relaxed">{problem.whyItMattersToMe}</p>
      </section>

      <Link
        href="/problems"
        className="inline-block border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
      >
        ← Back to all problems
      </Link>
    </div>
  );
}
