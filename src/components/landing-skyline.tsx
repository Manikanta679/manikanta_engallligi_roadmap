"use client";

import Image from "next/image";

/** Roadmap-themed panels: path · network · progress steps */
const panels = [
  { src: "/landing/skyline-a.png", alt: "Career path ahead" },
  { src: "/landing/skyline-b.png", alt: "Skills and roles network" },
  { src: "/landing/skyline-c.png", alt: "Roadmap progress layers" },
] as const;

/**
 * Shared moving roadmap backdrop for landing + login.
 * Duplicates the strip so the horizontal pan loops seamlessly.
 */
export function LandingSkyline() {
  const strip = [...panels, ...panels];

  return (
    <div
      className="landing-skyline pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="landing-skyline-track">
        {strip.map((panel, index) => (
          <div key={`${panel.src}-${index}`} className="landing-skyline-panel">
            <Image
              src={panel.src}
              alt=""
              fill
              priority={index < 3}
              sizes="50vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="landing-skyline-wash" />
      <div className="landing-skyline-vignette" />
    </div>
  );
}
