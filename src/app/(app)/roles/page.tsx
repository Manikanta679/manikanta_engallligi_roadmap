import Link from "next/link";
import { roadmapPattern } from "@/data/market";
import {
  marketForces,
  rolePhaseResources,
  rolePositioning,
  spectrumZones,
  targetRoles,
} from "@/data/roles";
import { PhaseContinue } from "@/components/phase-continue";
import { RolesInsightsCharts } from "@/components/roles-insights-charts";

export default function RolesPage() {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Step 04 · Roles
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-[0.04em] sm:text-5xl">
          Roles I chose for 2027–29
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
          I am not hunting a title. I locked a work mode: handle data, present
          insights, sit in decisions — not pure Data Scientist, not pure
          backend engineer.
        </p>
      </section>

      <PatternStrip active="role" />

      <section className="border border-[var(--accent)] bg-[var(--accent-soft)] p-5 sm:p-6">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          My decision
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
          {rolePositioning.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed">{rolePositioning.oneLiner}</p>
        <div className="mt-5 border border-[var(--border)] bg-[var(--background)]/50 p-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
            What I want
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {rolePositioning.want.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-[var(--muted)]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Why these roles win (2027–29)
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            Research that shaped my role choice — open a force to see the
            evidence I used.
          </p>
        </div>
        <div className="space-y-2">
          {marketForces.map((force) => (
            <details
              key={force.id}
              className="group border border-[var(--border)] bg-[var(--surface)] open:border-[var(--accent)]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-[family-name:var(--font-display)] text-xl">
                  {force.title}
                </h3>
                <span className="shrink-0 pt-1 text-xs uppercase tracking-[0.16em] text-[var(--accent)] group-open:hidden">
                  Open →
                </span>
                <span className="hidden shrink-0 pt-1 text-xs uppercase tracking-[0.16em] text-[var(--accent)] group-open:inline">
                  Close ↑
                </span>
              </summary>
              <div className="border-t border-[var(--border)] px-5 pb-5 pt-4">
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {force.body}
                </p>
                <p className="mt-3 text-xs text-[var(--muted)]">
                  {force.sourceNote}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Primary role cluster
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            After the research above — this is the ladder I locked. Same work,
            different titles. Open any role for the full brief.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {targetRoles.map((role) => (
            <Link
              key={role.id}
              href={`/roles/${role.slug}`}
              className="border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Role {role.code} · {role.badge}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                {role.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{role.tagline}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                {role.techBusiness}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                Open detail →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Technical ↔ business spectrum
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            My zone is the middle-to-business band — entry Business DA / hybrid
            AE → destination Decision Scientist / Translator / AI Digital
            Consultant.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          <SpectrumCol
            title="More technical"
            items={spectrumZones.filter((z) => z.side === "tech")}
            muted
          />
          <SpectrumCol
            title="My zone"
            items={spectrumZones.filter((z) => z.side === "zone")}
            accent
          />
          <SpectrumCol
            title="More business"
            items={[
              ...spectrumZones.filter((z) => z.side === "business"),
              { label: "AI & Digital Consultant", side: "business" as const },
            ]}
          />
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Sectors × roles
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            Sector alignment and role demand outlook for the path I locked.
          </p>
        </div>
        <RolesInsightsCharts />
      </section>

      <section className="space-y-4">
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          Verified sources for this phase
        </h2>
        <div className="space-y-3">
          {rolePhaseResources.map((resource, index) => (
            <article
              key={resource.url + resource.name}
              className="border border-[var(--border)] bg-[var(--surface)] p-5"
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
      </section>

      <PhaseContinue current="/roles" />
    </div>
  );
}

function PatternStrip({ active }: { active: string }) {
  return (
    <section className="border border-[var(--border)] bg-[var(--surface)] p-5">
      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
        My pattern
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {roadmapPattern.map((step, index) => (
          <div key={step.key} className="flex items-center gap-2">
            <span
              className={`border px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] ${
                step.key === active
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
  );
}

function SpectrumCol({
  title,
  items,
  accent,
  muted,
}: {
  title: string;
  items: { label: string }[];
  accent?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`border p-4 ${
        accent
          ? "border-[var(--accent)] bg-[var(--accent-soft)]"
          : "border-[var(--border)] bg-[var(--surface)]"
      }`}
    >
      <p
        className={`text-[10px] uppercase tracking-[0.18em] ${
          accent ? "text-[var(--accent)]" : "text-[var(--muted)]"
        }`}
      >
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item.label}
            className={`text-sm leading-relaxed ${
              muted ? "text-[var(--muted)]" : ""
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
