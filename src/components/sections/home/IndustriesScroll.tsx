"use client";

import { useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { industries } from "@/data/industries";
import { pick } from "@/lib/i18n-text";

function Header() {
  const t = useTranslations("home.industries");
  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="max-w-2xl text-3xl text-cream sm:text-4xl lg:text-5xl">
        {t("title")}
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream/70">
        {t("subtitle")}
      </p>
    </div>
  );
}

function Cards() {
  const locale = useLocale();
  return (
    <>
      {industries.map((ind) => (
        <article
          key={ind.slug}
          className="flex w-[80vw] shrink-0 flex-col rounded-3xl border border-cream/10 bg-warm-white p-7 sm:w-[360px]"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta">
            <ind.icon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-2xl font-semibold text-espresso">
            {pick(ind.name, locale)}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-cocoa">
            {pick(ind.desc, locale)}
          </p>
        </article>
      ))}
    </>
  );
}

export function IndustriesScroll() {
  const t = useTranslations("home.industries");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  if (reduce) {
    return (
      <section className="bg-espresso py-20">
        <div className="px-6 lg:px-8">
          <Header />
        </div>
        <div className="mt-10 flex gap-5 overflow-x-auto px-6 pb-4 lg:px-8">
          <Cards />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[260vh] bg-espresso">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="px-6 lg:px-8">
          <Header />
        </div>
        <motion.div style={{ x }} className="mt-12 flex gap-5 pl-6 lg:pl-8">
          <Cards />
        </motion.div>
        <p className="mt-8 px-6 text-xs uppercase tracking-[0.2em] text-cream/40 lg:px-8">
          {t("hint")}
        </p>
      </div>
    </section>
  );
}
