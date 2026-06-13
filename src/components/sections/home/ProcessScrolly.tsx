"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";

type Step = { title: string; desc: string };

export function ProcessScrolly() {
  const t = useTranslations("home.process");
  const reduce = useReducedMotion();
  const steps = t.raw("steps") as Step[];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });

  const Heading = (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl">{t("title")}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-cocoa">
        {t("subtitle")}
      </p>
    </div>
  );

  // Reduced motion / no-pin fallback: plain vertical list.
  if (reduce) {
    return (
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {Heading}
          <ol className="mt-12 space-y-8">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta font-display text-xl font-semibold text-warm-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-espresso">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-cocoa">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-sand" style={{ height: `${steps.length * 80}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 lg:px-8">
        {Heading}

        <div className="mt-10 flex w-full max-w-md gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 overflow-hidden rounded-full bg-cocoa/15"
            >
              <motion.div
                className="h-full rounded-full bg-terracotta"
                initial={false}
                animate={{ width: i <= active ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          ))}
        </div>

        <div className="relative mt-10 h-56 w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 text-center"
            >
              <span className="font-display text-6xl font-semibold text-terracotta/30">
                0{active + 1}
              </span>
              <h3 className="mt-2 text-2xl font-semibold text-espresso sm:text-3xl">
                {steps[active].title}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-cocoa">
                {steps[active].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
