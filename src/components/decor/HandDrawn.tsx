"use client";

import { motion, useReducedMotion } from "motion/react";

type Variant = "underline" | "arrow" | "circle" | "star";

const PATHS: Record<Variant, { vb: string; d: string }> = {
  underline: { vb: "0 0 200 24", d: "M4 14c40 6 150 6 192-4" },
  arrow: { vb: "0 0 120 60", d: "M4 40c30 20 70 10 100-26M84 4l20 10-6 22" },
  circle: {
    vb: "0 0 200 120",
    d: "M100 8C40 8 8 36 8 64s50 48 96 48 90-22 88-52S150 8 100 8",
  },
  star: { vb: "0 0 40 40", d: "M20 4l4 12 12 1-9 8 3 12-10-7-10 7 3-12-9-8 12-1z" },
};

// Hand-drawn accent (underline, arrow, circle, star) that draws itself on
// scroll into view. Decorative — always aria-hidden.
export function HandDrawn({
  variant = "underline",
  className,
  color = "var(--color-terracotta)",
  strokeWidth = 3,
}: {
  variant?: Variant;
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  const reduce = useReducedMotion();
  const p = PATHS[variant];
  return (
    <svg
      aria-hidden="true"
      viewBox={p.vb}
      fill="none"
      className={className}
      style={{ color }}
    >
      <motion.path
        d={p.d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </svg>
  );
}
