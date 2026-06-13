"use client";

import dynamic from "next/dynamic";
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
import { Blobs } from "@/components/decor/Blobs";

function HeroFallback() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="h-56 w-56 rounded-full bg-terracotta/30 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute h-36 w-36 -translate-y-16 translate-x-20 rounded-full bg-amber/40 blur-2xl" />
      <div className="absolute h-28 w-28 translate-y-20 -translate-x-20 rounded-full bg-sage/30 blur-2xl" />
    </div>
  );
}

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export function Hero() {
  const t = useTranslations("home.hero");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream">
      <Blobs />
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 pb-16 pt-32 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="relative z-10 text-center lg:text-left">
          <Reveal>
            <span className="inline-block rounded-full border border-terracotta/20 bg-warm-white px-4 py-1.5 text-sm font-medium text-terracotta">
              {t("badge")}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              {t.rich("title", {
                hl: (chunks: ReactNode) => (
                  <span className="relative whitespace-nowrap text-terracotta">
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
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cocoa lg:mx-0">
              {t("subtitle")}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <MagneticButton>
                <Link
                  href="/order"
                  className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-warm-white shadow-md transition hover:bg-terracotta-light hover:shadow-lg active:scale-[0.97]"
                >
                  {t("ctaPrimary")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <Link
                href="/layanan"
                className="inline-flex items-center rounded-full border border-cocoa/20 px-7 py-3.5 font-semibold text-espresso transition hover:border-terracotta hover:text-terracotta active:scale-[0.97]"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[560px]">
          {reduce ? (
            <HeroFallback />
          ) : (
            <motion.div style={{ scale, opacity }} className="absolute inset-0">
              <HeroScene />
            </motion.div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">
        <span className="text-xs uppercase tracking-[0.2em] text-cocoa/50">
          {t("scroll")}
        </span>
      </div>
    </section>
  );
}
