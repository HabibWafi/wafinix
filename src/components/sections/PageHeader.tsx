import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Blobs } from "@/components/decor/Blobs";

// Reusable page intro: large heading leads (no eyebrow reflex), optional subtitle.
export function PageHeader({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pb-12 pt-32 lg:pb-16 lg:pt-40">
      <Blobs />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h1 className="max-w-3xl text-balance text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cocoa">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
