"use client";

import { useRef, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { HandDrawn } from "@/components/decor/HandDrawn";
import { EmberPhoenix } from "@/components/hero/EmberPhoenix";
import { HeroTechBadges } from "@/components/hero/HeroTechBadges";

export function Hero() {
  const t = useTranslations("home.hero");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-espresso">
      {/* warm ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-terracotta/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-amber/10 blur-[120px]"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 pb-16 pt-32 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="relative z-10 text-center lg:text-left">
          <Reveal>
            <span className="inline-block rounded-full border border-amber/30 bg-white/5 px-4 py-1.5 text-sm font-medium text-amber backdrop-blur-sm">
              {t("badge")}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              {t.rich("title", {
                hl: (chunks: ReactNode) => (
                  <span className="relative whitespace-nowrap text-terracotta-light">
                    {chunks}
                    <HandDrawn
                      variant="underline"
                      className="absolute -bottom-2 left-0 h-3 w-full text-amber"
                    />
                  </span>
                ),
              })}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75 lg:mx-0">
              {t("subtitle")}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <MagneticButton>
                <Link
                  href="/order"
                  className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-warm-white shadow-lg shadow-terracotta/20 transition hover:bg-terracotta-light hover:shadow-xl active:scale-[0.97]"
                >
                  {t("ctaPrimary")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <Link
                href="/layanan"
                className="inline-flex items-center rounded-full border border-cream/25 px-7 py-3.5 font-semibold text-cream transition hover:border-amber hover:text-amber active:scale-[0.97]"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[560px]">
          {reduce ? (
            <EmberPhoenix />
          ) : (
            <motion.div style={{ scale, opacity }} className="absolute inset-0 flex items-center justify-center">
              <EmberPhoenix />
            </motion.div>
          )}
          <HeroTechBadges />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">
        <span className="text-xs uppercase tracking-[0.2em] text-cream/40">
          {t("scroll")}
        </span>
      </div>
    </section>
  );
}
