import { useTranslations, useLocale } from "next-intl";
import { industries } from "@/data/industries";
import { pick } from "@/lib/i18n-text";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

// Clean responsive grid (no scroll-jacking) — natural to scroll on mobile.
export function IndustriesScroll() {
  const t = useTranslations("home.industries");
  const locale = useLocale();

  return (
    <section className="bg-espresso py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl text-cream sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            {t("subtitle")}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <StaggerItem key={ind.slug}>
              <article className="flex h-full flex-col rounded-3xl border border-cream/10 bg-warm-white p-6 transition duration-200 hover:-translate-y-1 hover:border-terracotta/30">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta">
                  <ind.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-espresso">
                  {pick(ind.name, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa">
                  {pick(ind.desc, locale)}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
