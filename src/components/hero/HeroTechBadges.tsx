"use client";

import { motion, useReducedMotion } from "motion/react";
import { heroTechLogos, techIconUrl } from "@/data/techstack";

const EASE = [0.22, 1, 0.36, 1] as const;

// Position + cadence for each floating chip around the phoenix. `hide` trims
// clutter on small screens.
const SPOTS = [
  { className: "left-[0%] top-[10%]", hide: false },
  { className: "right-[2%] top-[5%]", hide: false },
  { className: "left-[-3%] top-[46%]", hide: true },
  { className: "right-[-3%] top-[40%]", hide: false },
  { className: "left-[8%] bottom-[10%]", hide: true },
  { className: "right-[4%] bottom-[14%]", hide: false },
];

export function HeroTechBadges() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {heroTechLogos.map((tech, i) => {
        const spot = SPOTS[i % SPOTS.length];
        return (
          <motion.span
            key={tech.slug}
            className={`absolute ${spot.className} ${spot.hide ? "hidden lg:block" : ""}`}
            initial={reduce ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 + i * 0.12 }}
          >
            <motion.span
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.6)] backdrop-blur-md"
              animate={reduce ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 4 + (i % 3), ease: "easeInOut", repeat: Infinity, delay: i * 0.3 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={techIconUrl(tech.slug, true)} alt="" width={18} height={18} loading="lazy" className="h-[18px] w-[18px]" />
              <span className="text-xs font-medium text-cream/90">{tech.name}</span>
            </motion.span>
          </motion.span>
        );
      })}
    </div>
  );
}

export default HeroTechBadges;
