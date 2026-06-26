import { useTranslations } from "next-intl";
import { Marquee } from "@/components/motion/Marquee";
import { techLogos, techIconUrl } from "@/data/techstack";

function Chip({ name, slug }: { name: string; slug: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-cocoa/10 bg-warm-white px-4 py-2.5 shadow-[0_1px_2px_rgba(51,38,28,0.05)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={techIconUrl(slug)} alt="" aria-hidden width={20} height={20} loading="lazy" className="h-5 w-5" />
      <span className="whitespace-nowrap text-sm font-medium text-cocoa lg:text-base">{name}</span>
    </span>
  );
}

export function TechMarquee() {
  const t = useTranslations("home.tech");
  const half = Math.ceil(techLogos.length / 2);
  const rowA = techLogos.slice(0, half);
  const rowB = techLogos.slice(half);

  return (
    <section className="relative overflow-hidden border-y border-cocoa/10 bg-sand py-14">
      <p className="mb-9 text-center text-sm font-semibold uppercase tracking-wider text-terracotta">
        {t("eyebrow")} <span className="text-cocoa/50">— {t("title")}</span>
      </p>

      <div className="flex flex-col gap-4">
        <Marquee duration={42} className="gap-4">
          {rowA.map((tech) => (
            <Chip key={tech.slug} {...tech} />
          ))}
        </Marquee>
        <Marquee duration={42} reverse className="gap-4">
          {rowB.map((tech) => (
            <Chip key={tech.slug} {...tech} />
          ))}
        </Marquee>
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-sand to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-sand to-transparent sm:w-28" />

      {/* accessible list (marquee itself is aria-hidden) */}
      <ul className="sr-only">
        {techLogos.map((tech) => (
          <li key={tech.slug}>{tech.name}</li>
        ))}
      </ul>
    </section>
  );
}
