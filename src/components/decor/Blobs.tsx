"use client";

import { motion, useReducedMotion } from "motion/react";

type BlobColor = "terracotta" | "amber" | "sage";

interface Blob {
  color: BlobColor;
  className: string;
  delay?: number;
}

const TINT: Record<BlobColor, string> = {
  terracotta: "var(--color-terracotta)",
  amber: "var(--color-amber)",
  sage: "var(--color-sage)",
};

// Soft, blurred gradient blobs that drift slowly behind a section.
// Container sits behind content (-z-10); blobs are aria-hidden.
export function Blobs({
  blobs,
  className,
}: {
  blobs?: Blob[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const items =
    blobs ??
    ([
      { color: "terracotta", className: "left-[-6%] top-[-10%] h-72 w-72" },
      {
        color: "amber",
        className: "right-[-8%] top-[20%] h-80 w-80",
        delay: 1.5,
      },
      { color: "sage", className: "bottom-[-12%] left-[30%] h-64 w-64" },
    ] satisfies Blob[]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      {items.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.className}`}
          style={{
            background: `radial-gradient(circle at 30% 30%, ${TINT[b.color]}, transparent 70%)`,
            opacity: 0.22,
          }}
          animate={
            reduce
              ? undefined
              : { y: [0, -22, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay ?? 0,
          }}
        />
      ))}
    </div>
  );
}
