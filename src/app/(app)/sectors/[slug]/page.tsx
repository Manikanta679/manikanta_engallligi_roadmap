import Link from "next/link";
import { notFound } from "next/navigation";
import { getSectorBySlug } from "@/data/sectors";

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  return (
    <div className="space-y-10">
      <div>
        <Link
          href="/sectors"
          className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]"
        >
          ← All sectors
        </Link>
        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Priority {String(sector.priority).padStart(2, "0")}
          {sector.starred ? " · Core" : " · Optional"}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.03em] sm:text-5xl">
          {sector.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-[var(--muted)]">
          {sector.tagline}
        </p>
      </div>

      <aside className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Local for me (Leipzig lane)
        </p>
        <p className="mt-2 font-[family-name:var(--font-display)] text-2xl">
          {sector.localLeipzig}
        </p>
      </aside>

      <Section title="What it is">
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          {sector.whatItIs}
        </p>
      </Section>

      <Section title="How it works (value chain)">
        <ul className="space-y-2">
          {sector.howItWorks.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
          <span className="text-[var(--foreground)]">Money flow: </span>
          {sector.moneyFlow}
        </p>
        {sector.valueChainNotes?.length ? (
          <div className="mt-4 space-y-2">
            {sector.valueChainNotes.map((note) => (
              <p key={note} className="text-sm leading-relaxed text-[var(--muted)]">
                {note}
              </p>
            ))}
          </div>
        ) : null}
      </Section>

      <Section title="Biggest business problems (2026–2028)">
        <ol className="space-y-2">
          {sector.businessProblems.map((item, i) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              <span className="text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")}.{" "}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Where Data / AI / Big Data creates value">
        <div className="space-y-3">
          {sector.whereDataAi.map((item, i) => (
            <article
              key={item.title}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")} · {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Section title="Roles companies hire">
          <div className="flex flex-wrap gap-2">
            {sector.roles.map((role) => (
              <span
                key={role}
                className="border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
              >
                {role}
              </span>
            ))}
          </div>
        </Section>
        <Section title="Skills that repeat">
          <div className="flex flex-wrap gap-2">
            {sector.skills.map((skill) => (
              <span
                key={skill}
                className="border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      </div>

      <Section title="Key companies (by tier)">
        <div className="space-y-3">
          {sector.companiesByTier.map((row) => (
            <article
              key={row.tier}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Tier {row.tier}
              </p>
              <p className="mt-2 text-sm leading-relaxed">{row.companies}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                Locations: {row.locations}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Target hubs">
        <div className="grid gap-3 sm:grid-cols-2">
          {sector.hubs.map((hub) => (
            <article
              key={hub.city}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl">
                {hub.city}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{hub.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="2027–2028 outlook (verified signals)">
        <ul className="space-y-2">
          {sector.outlook2027_2028.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How this sector helps me">
        <ul className="space-y-2">
          {sector.howItHelpsMe.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="My game notes">
        <ul className="space-y-2">
          {sector.myGameNotes.map((item) => (
            <li
              key={item}
              className="border border-[var(--accent)] bg-[var(--accent-soft)] px-4 py-3 text-sm leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Verified resources for this sector">
        <div className="space-y-3">
          {sector.resources.map((resource, index) => (
            <article
              key={resource.url}
              className="border border-[var(--border)] bg-[var(--background)] p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
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
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
      <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[0.03em] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
