"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.32, 0.72, 0, 1] as const;

// Heavy fade-up + blur entry. Per high-end-visual-design skill. Reduced-motion safe.
export function Rise({
  children,
  delay = 0,
  className,
  y = 40,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// Microscopic pill tag above big headings.
export function Eyebrow({
  children,
  color,
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] ${className ?? ""}`}
      style={{ color, borderColor: color ? `${color}55` : undefined }}
    >
      {children}
    </span>
  );
}

// Double-bezel (Doppelrand): outer aluminium tray + inner glass plate. `radius`
// is the outer radius in rem; inner is computed for concentric curves.
export function Bezel({
  children,
  className,
  shell = "rgba(0,0,0,0.04)",
  ring = "rgba(0,0,0,0.06)",
  radius = 2,
  style,
}: {
  children: ReactNode;
  className?: string;
  shell?: string;
  ring?: string;
  radius?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`p-1.5 ${className ?? ""}`}
      style={{
        background: shell,
        boxShadow: `inset 0 0 0 1px ${ring}`,
        borderRadius: `${radius}rem`,
        ...style,
      }}
    >
      <div
        className="h-full w-full overflow-hidden"
        style={{ borderRadius: `${radius - 0.375}rem` }}
      >
        {children}
      </div>
    </div>
  );
}

// Pill CTA with nested "button-in-button" trailing icon.
export function CTA({
  children,
  bg,
  fg,
  className,
}: {
  children: ReactNode;
  bg: string;
  fg: string;
  className?: string;
}) {
  return (
    <span
      className={`group inline-flex cursor-pointer items-center gap-3 rounded-full py-2 pl-6 pr-2 font-semibold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${className ?? ""}`}
      style={{ background: bg, color: fg }}
    >
      {children}
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ background: "rgba(255,255,255,0.18)" }}
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
      </span>
    </span>
  );
}
