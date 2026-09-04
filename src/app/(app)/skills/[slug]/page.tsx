import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllDetailSkills, getSkillBySlug } from "@/data/skills";

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const all = getAllDetailSkills();
  const index = all.findIndex((s) => s.slug === slug);
  const prev = index > 0 ? all[index - 1] : null;
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null;

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/skills"
          className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]"
        >
          ← Skills
        </Link>
        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          {skill.tier} · by {skill.depthBy}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.03em] sm:text-5xl">
          {skill.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          {skill.subtitle}
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
            Technical
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
            Where this skill is required
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {skill.technical}
          </p>
        </article>
        <article className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
            Business
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
            Where this skill is required
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            {skill.business}
          </p>
        </article>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          What companies expect
        </h2>
        <ul className="mt-4 space-y-2">
          {skill.companiesExpect.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
          Continue skills
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              href={`/skills/${prev.slug}`}
              className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              ← {prev.title}
            </Link>
          ) : (
            <Link
              href="/skills"
              className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              ← All skills
            </Link>
          )}
          {next ? (
            <Link
              href={`/skills/${next.slug}`}
              className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
            >
              Next · {next.title} →
            </Link>
          ) : (
            <Link
              href="/skills"
              className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
            >
              Back to skills hub →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
