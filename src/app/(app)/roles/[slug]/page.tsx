import Link from "next/link";
import { notFound } from "next/navigation";
import { getTargetRole, targetRoles } from "@/data/roles";
import { RoleSectorFitPanel } from "@/components/roles-insights-charts";

export default async function RoleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getTargetRole(slug);
  if (!role) notFound();

  const index = targetRoles.findIndex((r) => r.slug === slug);
  const prev = index > 0 ? targetRoles[index - 1] : null;
  const next =
    index >= 0 && index < targetRoles.length - 1 ? targetRoles[index + 1] : null;

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/roles"
          className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]"
        >
          ← Roles
        </Link>
        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Role {role.code} · {role.badge}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.03em] sm:text-5xl">
          {role.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          {role.tagline}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
          {role.techBusiness}
        </p>
      </div>

      <section className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          What it is for me
        </h2>
        <p className="mt-3 text-sm leading-relaxed">{role.whatItIs}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <InfoBlock title="Day-to-day" body={role.dayToDay} />
        <InfoBlock title="Tools" body={role.tools} />
        <InfoBlock title="Who I talk to" body={role.whoYouTalkTo} />
        <InfoBlock title="Decisions I influence" body={role.decisions} />
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Growth 2027–29
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {role.growth2027_29}
        </p>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Salary signals
        </h2>
        <div className="mt-4 space-y-2">
          {role.salary.map((row) => (
            <div
              key={row.level}
              className="border border-[var(--border)] bg-[var(--background)] px-4 py-3"
            >
              <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                {row.level}
              </p>
              <p className="mt-1 text-sm">{row.range}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ListBlock title="Must-have" items={role.mustHave} />
        <ListBlock title="Nice-to-have" items={role.niceToHave} />
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Sector fit for me
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Fit score (0–100%) by sector, with the companies I aim at under each.
        </p>
        <div className="mt-4">
          <RoleSectorFitPanel rows={role.sectorFit} />
        </div>
      </section>

      <section className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Gap / risk I watch
        </h2>
        <p className="mt-3 text-sm leading-relaxed">{role.gapsOrRisk}</p>
      </section>

      <section className="border border-[var(--border)] bg-[var(--surface)] p-5">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
          Continue roles
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              href={`/roles/${prev.slug}`}
              className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              ← {prev.title}
            </Link>
          ) : (
            <Link
              href="/roles"
              className="border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              ← All roles
            </Link>
          )}
          {next ? (
            <Link
              href={`/roles/${next.slug}`}
              className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
            >
              Next · {next.title} →
            </Link>
          ) : (
            <Link
              href="/roles"
              className="border border-[var(--accent)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]"
            >
              Back to roles hub →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 className="font-[family-name:var(--font-display)] text-xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{body}</p>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 className="font-[family-name:var(--font-display)] text-xl">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--muted)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
