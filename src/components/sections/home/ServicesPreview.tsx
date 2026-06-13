import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import { pick } from "@/lib/i18n-text";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ServicesPreview() {
  const t = useTranslations("home.services");
  const locale = useLocale();

  return (
    <section className="relative bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-cocoa">
            {t("subtitle")}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href="/layanan"
                className="group flex h-full flex-col rounded-3xl border border-cocoa/10 bg-warm-white p-6 transition duration-200 hover:-translate-y-1.5 hover:border-terracotta/30 hover:shadow-[0_12px_40px_-12px_rgba(200,98,62,0.35)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-warm-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-espresso">
                  {pick(s.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa">
                  {pick(s.summary, locale)}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10">
          <Link
            href="/layanan"
            className="group inline-flex items-center gap-2 font-semibold text-terracotta"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
