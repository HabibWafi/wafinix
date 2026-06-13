import { useTranslations, useLocale } from "next-intl";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { pick } from "@/lib/i18n-text";
import { Reveal } from "@/components/motion/Reveal";

// Alternating editorial rows (not an identical card grid). Each row cycles a
// warm tint for variety; odd rows flip sides on desktop.
const TINTS = [
  "bg-terracotta/10 text-terracotta",
  "bg-amber/15 text-amber",
  "bg-sage/15 text-sage",
];

export function ServicesDetail() {
  const t = useTranslations("layanan");
  const locale = useLocale();

  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:gap-24 lg:px-8">
        {services.map((s, i) => {
          const tint = TINTS[i % TINTS.length];
          const flip = i % 2 === 1;
          return (
            <Reveal key={s.slug}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div
                  className={`relative flex h-44 items-center justify-center overflow-hidden rounded-[2rem] sm:h-56 lg:h-64 ${
                    tint.split(" ")[0]
                  } ${flip ? "lg:order-2" : ""}`}
                >
                  <span
                    className="pointer-events-none absolute -right-2 -top-6 font-display text-[9rem] font-semibold leading-none text-espresso/5 sm:text-[12rem]"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <s.icon className={`h-16 w-16 ${tint.split(" ")[1]}`} strokeWidth={1.5} />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-espresso sm:text-3xl">
                    {pick(s.title, locale)}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-cocoa">
                    {pick(s.summary, locale)}
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-cocoa/50">
                    {t("featuresLabel")}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p.en} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-cocoa">{pick(p, locale)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
