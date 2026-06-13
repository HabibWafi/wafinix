import { useTranslations, useLocale } from "next-intl";
import { Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { tiers } from "@/data/pricing";
import { pick } from "@/lib/i18n-text";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function PricingCards() {
  const t = useTranslations("harga");
  const locale = useLocale();

  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <StaggerItem key={tier.slug}>
              <article
                className={`flex h-full flex-col rounded-3xl border p-6 ${
                  tier.highlighted
                    ? "border-terracotta bg-warm-white shadow-[0_18px_50px_-20px_rgba(200,98,62,0.5)]"
                    : "border-cocoa/10 bg-warm-white"
                }`}
              >
                {tier.highlighted && (
                  <span className="mb-3 inline-block self-start rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-warm-white">
                    {t("popular")}
                  </span>
                )}
                <h2 className="text-xl font-semibold text-espresso">
                  {pick(tier.name, locale)}
                </h2>
                <p className="mt-1 text-sm text-cocoa">
                  {pick(tier.forWhom, locale)}
                </p>
                <p className="mt-4 font-display text-2xl font-semibold text-terracotta">
                  {locale === "en" ? tier.priceEn : tier.priceId}
                </p>
                <p className="text-xs text-cocoa/60">{pick(tier.priceNote, locale)}</p>

                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f.en} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                      <span className="text-cocoa">{pick(f, locale)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 space-y-3 border-t border-cocoa/10 pt-4 text-xs leading-relaxed">
                  <div>
                    <p className="font-semibold uppercase tracking-wide text-cocoa/50">
                      {t("documentsLabel")}
                    </p>
                    <p className="mt-1 text-cocoa">{pick(tier.documents, locale)}</p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-wide text-cocoa/50">
                      {t("securityLabel")}
                    </p>
                    <p className="mt-1 text-cocoa">{pick(tier.security, locale)}</p>
                  </div>
                </div>

                <Link
                  href={tier.ctaType === "consult" ? "/kontak" : "/order"}
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition active:scale-[0.97] ${
                    tier.highlighted
                      ? "bg-terracotta text-warm-white hover:bg-terracotta-light"
                      : "border border-cocoa/20 text-espresso hover:border-terracotta hover:text-terracotta"
                  }`}
                >
                  {tier.ctaType === "consult" ? t("ctaConsult") : t("ctaOrder")}
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 text-center text-xs text-cocoa/50">{t("note")}</p>
      </div>
    </section>
  );
}
