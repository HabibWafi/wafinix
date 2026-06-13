import { useTranslations, useLocale } from "next-intl";
import { industries } from "@/data/industries";
import { pick } from "@/lib/i18n-text";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

// Rich solution cards (problem -> solution -> features), 2-up. Content-led, not
// a thin icon+heading+text grid.
export function SolusiGrid() {
  const t = useTranslations("solusi");
  const locale = useLocale();

  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Stagger className="grid gap-6 lg:grid-cols-2">
          {industries.map((ind) => (
            <StaggerItem key={ind.slug}>
              <article className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-warm-white p-7 transition duration-200 hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-[0_12px_40px_-12px_rgba(200,98,62,0.3)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta">
                    <ind.icon className="h-6 w-6" />
                  </span>
                  <h2 className="text-xl font-semibold text-espresso">
                    {pick(ind.name, locale)}
                  </h2>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cocoa/50">
                      {t("problemLabel")}
                    </p>
                    <p className="mt-1 text-cocoa">{pick(ind.problem, locale)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                      {t("solutionLabel")}
                    </p>
                    <p className="mt-1 text-espresso">
                      {pick(ind.solution, locale)}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-cocoa/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cocoa/50">
                    {t("featuresLabel")}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {ind.features.map((f) => (
                      <li
                        key={f.en}
                        className="rounded-full bg-sand px-3 py-1 text-xs text-cocoa"
                      >
                        {pick(f, locale)}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
