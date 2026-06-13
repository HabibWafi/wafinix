import { useTranslations, useLocale } from "next-intl";
import { techCategories } from "@/data/techstack";
import { pick } from "@/lib/i18n-text";
import { Reveal } from "@/components/motion/Reveal";

// Categorized tech chips — a real list, not icon+heading+text cards.
export function TechGrid() {
  const t = useTranslations("layanan");
  const locale = useLocale();

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">
            {t("techTitle")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cocoa">
            {t("techSubtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat) => (
            <Reveal key={cat.label.en}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-terracotta">
                {pick(cat.label, locale)}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-cocoa/15 bg-cream px-3 py-1 text-sm text-cocoa"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
