import { useTranslations, useLocale } from "next-intl";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";
import { pick } from "@/lib/i18n-text";
import { Reveal } from "@/components/motion/Reveal";

export function ContactMethods() {
  const t = useTranslations("kontak");
  const locale = useLocale();

  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-warm-white p-7 transition duration-200 hover:-translate-y-1 hover:border-terracotta/30"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/15 text-sage">
                <MessageCircle className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-espresso">
                {t("whatsappLabel")}
              </h2>
              <p className="mt-1 text-cocoa">{site.whatsappDisplay}</p>
              <span className="mt-3 text-sm font-semibold text-terracotta">
                {t("whatsappCta")} →
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <a
              href={`mailto:${site.email}`}
              className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-warm-white p-7 transition duration-200 hover:-translate-y-1 hover:border-terracotta/30"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta">
                <Mail className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-espresso">
                {t("emailLabel")}
              </h2>
              <p className="mt-1 text-cocoa">{site.email}</p>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-warm-white p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/15 text-amber">
                <MapPin className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-espresso">
                {t("addressLabel")}
              </h2>
              <p className="mt-1 text-cocoa">{pick(site.address, locale)}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-warm-white p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cocoa/10 text-cocoa">
                <Clock className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-espresso">
                {t("hoursLabel")}
              </h2>
              <p className="mt-1 text-cocoa">{t("hours")}</p>
            </div>
          </Reveal>
        </div>
        <p className="mt-8 text-center text-sm text-cocoa/50">{t("formNote")}</p>
      </div>
    </section>
  );
}
