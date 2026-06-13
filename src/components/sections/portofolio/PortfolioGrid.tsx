"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { portfolio } from "@/data/portfolio";
import { pick } from "@/lib/i18n-text";
import { Reveal } from "@/components/motion/Reveal";

function chip(active: boolean) {
  return `rounded-full border px-4 py-1.5 text-sm font-medium transition active:scale-[0.97] ${
    active
      ? "border-terracotta bg-terracotta text-warm-white"
      : "border-cocoa/20 text-cocoa hover:border-terracotta hover:text-terracotta"
  }`;
}

export function PortfolioGrid() {
  const t = useTranslations("portofolio");
  const locale = useLocale();
  const cats = Array.from(new Set(portfolio.map((p) => pick(p.category, locale))));
  const [active, setActive] = useState<string | null>(null);
  const items = active
    ? portfolio.filter((p) => pick(p.category, locale) === active)
    : portfolio;

  return (
    <section className="bg-cream py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setActive(null)} className={chip(active === null)}>
            {t("filterAll")}
          </button>
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={chip(active === c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`/portofolio/${p.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-cocoa/10 bg-warm-white transition duration-200 hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-[0_12px_40px_-12px_rgba(200,98,62,0.3)]"
              >
                <div
                  className="flex h-40 items-end p-5"
                  style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}bb)` }}
                >
                  <span className="font-display text-2xl font-semibold text-white/95">
                    {p.client}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                    {pick(p.category, locale)}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-espresso">
                    {pick(p.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa">
                    {pick(p.summary, locale)}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta">
                    {t("viewCase")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-cocoa/50">{t("note")}</p>
      </div>
    </section>
  );
}
