import { useTranslations, useLocale } from "next-intl";
import { Plus } from "lucide-react";
import { addOns } from "@/data/pricing";
import { pick } from "@/lib/i18n-text";
import { Reveal } from "@/components/motion/Reveal";

export function AddOns() {
  const t = useTranslations("harga");
  const locale = useLocale();

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl sm:text-4xl">{t("addOnsTitle")}</h2>
          <p className="mt-3 text-lg text-cocoa">{t("addOnsSubtitle")}</p>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {addOns.map((a) => (
            <div
              key={a.name.en}
              className="flex items-center justify-between gap-4 rounded-2xl border border-cocoa/10 bg-cream px-5 py-4"
            >
              <span className="flex items-center gap-3 text-cocoa">
                <Plus className="h-4 w-4 shrink-0 text-terracotta" />
                {pick(a.name, locale)}
              </span>
              <span className="shrink-0 text-sm font-semibold text-espresso">
                {pick(a.price, locale)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
