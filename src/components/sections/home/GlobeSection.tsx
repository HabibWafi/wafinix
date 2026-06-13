"use client";

import dynamic from "next/dynamic";
import { type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

function GlobeFallback() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      <circle cx="100" cy="100" r="78" stroke="var(--color-terracotta)" strokeOpacity="0.25" />
      <ellipse cx="100" cy="100" rx="78" ry="30" stroke="var(--color-terracotta)" strokeOpacity="0.18" />
      <ellipse cx="100" cy="100" rx="78" ry="58" stroke="var(--color-terracotta)" strokeOpacity="0.12" />
      <ellipse cx="100" cy="100" rx="34" ry="78" stroke="var(--color-terracotta)" strokeOpacity="0.18" />
      <ellipse cx="100" cy="100" rx="60" ry="78" stroke="var(--color-terracotta)" strokeOpacity="0.12" />
      <path d="M104 132 Q170 80 150 50" stroke="var(--color-amber)" strokeWidth="1.5" />
      <path d="M104 132 Q60 70 70 44" stroke="var(--color-amber)" strokeWidth="1.5" />
      <circle cx="104" cy="132" r="4" fill="var(--color-terracotta)" />
      <circle cx="150" cy="50" r="3" fill="var(--color-amber)" />
      <circle cx="70" cy="44" r="3" fill="var(--color-amber)" />
    </svg>
  );
}

const GlobeScene = dynamic(() => import("@/components/three/GlobeScene"), {
  ssr: false,
  loading: () => <GlobeFallback />,
});

export function GlobeSection() {
  const t = useTranslations("home.global");
  const reduce = useReducedMotion();
  const points = t.raw("points") as string[];

  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            {t.rich("title", {
              hl: (chunks: ReactNode) => (
                <span className="text-terracotta">{chunks}</span>
              ),
            })}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-cocoa">
            {t("subtitle")}
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-cocoa">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          {reduce ? <GlobeFallback /> : <GlobeScene />}
        </div>
      </div>
    </section>
  );
}
