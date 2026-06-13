import { useTranslations } from "next-intl";
import { Marquee } from "@/components/motion/Marquee";
import { techMarquee } from "@/data/techstack";

export function TechMarquee() {
  const t = useTranslations("home.tech");

  return (
    <section className="relative overflow-hidden border-y border-cocoa/10 bg-sand py-12">
      <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-terracotta">
        {t("eyebrow")} <span className="text-cocoa/50">— {t("title")}</span>
      </p>
      <Marquee duration={30}>
        {techMarquee.map((name) => (
          <span
            key={name}
            className="font-display text-2xl font-medium text-cocoa/70 lg:text-3xl"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
