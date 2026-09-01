"use client";

const tiles = [
  {
    label: "SAP",
    tone: "from-amber-900/80 to-stone-900/90",
    className: "left-[6%] top-[14%] h-28 w-40 float-slow",
    delay: "0s",
  },
  {
    label: "AI",
    tone: "from-slate-700/80 to-black/90",
    className: "right-[8%] top-[12%] h-36 w-28 float-mid",
    delay: "0.4s",
  },
  {
    label: "BMW",
    tone: "from-zinc-700/70 to-zinc-950/90",
    className: "left-[12%] bottom-[18%] h-32 w-44 float-fast",
    delay: "0.8s",
  },
  {
    label: "Berlin",
    tone: "from-stone-600/60 to-black/85",
    className: "right-[14%] bottom-[16%] h-24 w-36 float-slow",
    delay: "1.1s",
  },
  {
    label: "Celonis",
    tone: "from-emerald-950/70 to-black/90",
    className: "left-[22%] top-[28%] h-20 w-28 float-mid opacity-70",
    delay: "0.2s",
  },
  {
    label: "Leipzig",
    tone: "from-sky-950/60 to-black/90",
    className: "right-[24%] top-[34%] h-24 w-32 float-fast opacity-75",
    delay: "1.4s",
  },
  {
    label: "DHL",
    tone: "from-yellow-950/50 to-black/90",
    className: "left-[4%] top-[48%] h-24 w-24 float-slow opacity-60",
    delay: "0.6s",
  },
  {
    label: "Data",
    tone: "from-neutral-700/50 to-black/90",
    className: "right-[5%] top-[48%] h-40 w-24 float-mid opacity-55",
    delay: "1.7s",
  },
  {
    label: "n8n",
    tone: "from-orange-950/50 to-black/85",
    className: "left-[40%] top-[10%] h-16 w-24 float-fast opacity-50",
    delay: "0.9s",
  },
  {
    label: "ASML",
    tone: "from-indigo-950/40 to-black/90",
    className: "right-[38%] bottom-[10%] h-20 w-28 float-slow opacity-50",
    delay: "1.2s",
  },
];

export function LandingCollage() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className={`absolute hidden overflow-hidden border border-black/10 bg-gradient-to-br dark:border-white/10 sm:block ${tile.tone} ${tile.className}`}
          style={{ animationDelay: tile.delay }}
        >
          <div className="flex h-full items-end p-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">
              {tile.label}
            </span>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_45%)]" />
        </div>
      ))}
      <div className="absolute inset-y-0 right-[2%] hidden w-[18%] bg-gradient-to-l from-white/5 to-transparent md:block" />
    </div>
  );
}
