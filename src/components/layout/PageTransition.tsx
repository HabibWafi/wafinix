"use client";

import { motion, useReducedMotion } from "motion/react";

// Page enter transition. Rendered from [locale]/template.tsx so it replays on
// each navigation. Falls back to a plain <main> under reduced motion.
export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <main className="flex flex-1 flex-col">{children}</main>;
  }

  return (
    <motion.main
      className="flex flex-1 flex-col"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
