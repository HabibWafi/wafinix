import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { portfolio } from "@/data/portfolio";
import { pick } from "@/lib/i18n-text";
import { CTABand } from "@/components/sections/CTABand";
import { site } from "@/data/site";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = portfolio.find((p) => p.slug === slug);
  if (!item) return {};
  return { title: `${item.client} — Wafinix`, description: pick(item.summary, locale) };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const item = portfolio.find((p) => p.slug === slug);
  if (!item) notFound();
  const t = await getTranslations("portofolio");

  const blocks = [
    { label: t("challengeLabel"), text: pick(item.challenge, locale) },
    { label: t("solutionLabel"), text: pick(item.solution, locale) },
    { label: t("resultLabel"), text: pick(item.result, locale) },
  ];

  return (
    <>
      <section
        className="relative px-6 pb-14 pt-32 lg:px-8 lg:pt-40"
        style={{ background: `linear-gradient(135deg, ${item.accent}, ${item.accent}bb)` }}
      >
        <div className="mx-auto max-w-4xl">
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToList")}
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/80">
            {pick(item.category, locale)}
          </p>
          <h1 className="mt-2 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {pick(item.title, locale)}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            {pick(item.summary, locale)}
          </p>
        </div>
      </section>

      <section className="bg-cream py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-8">
            {blocks.map((b) => (
              <div key={b.label}>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                  {b.label}
                </h2>
                <p className="mt-2 text-lg leading-relaxed text-cocoa">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-cocoa/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-cocoa/50">
              {t("featuresLabel")}
            </p>
            <ul className="mt-3 space-y-2">
              {item.features.map((f) => (
                <li key={f.en} className="flex items-start gap-2.5 text-cocoa">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  {pick(f, locale)}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-cocoa/50">
              {t("techLabel")}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-cocoa/15 bg-sand px-3 py-1 text-sm text-cocoa"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            {item.demo ? (
              <a
                href={`/demo/${item.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-warm-white shadow-md transition hover:bg-terracotta-light active:scale-[0.97]"
              >
                {t("viewDemo")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <span className="inline-flex items-center rounded-full border border-cocoa/20 px-7 py-3.5 font-semibold text-cocoa/50">
                {t("demoSoon")}
              </span>
            )}
          </div>
        </div>
      </section>

      <CTABand
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        primary={{ label: t("ctaPrimary"), href: "/order" }}
        secondary={{
          label: t("ctaSecondary"),
          href: `https://wa.me/${site.whatsappNumber}`,
          external: true,
        }}
      />
    </>
  );
}
