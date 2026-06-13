"use client";

import { useReducedMotion } from "motion/react";

type ShapeKind = "ring" | "dot" | "plus" | "squiggle";

interface Shape {
  kind: ShapeKind;
  className: string;
  color?: string;
  size?: number;
  rot?: number;
  duration?: number;
}

const DEFAULTS: Shape[] = [
  { kind: "ring", className: "left-[8%] top-[18%]", color: "var(--color-terracotta)", size: 34 },
  { kind: "dot", className: "right-[12%] top-[26%]", color: "var(--color-amber)", size: 14 },
  { kind: "plus", className: "right-[20%] bottom-[22%]", color: "var(--color-sage)", size: 22, rot: 12 },
  { kind: "squiggle", className: "left-[16%] bottom-[16%]", color: "var(--color-terracotta-light)", size: 40, rot: -8 },
];

function ShapeSvg({ kind, color, size }: { kind: ShapeKind; color?: string; size: number }) {
  const common = { width: size, height: size, fill: "none", stroke: color, strokeWidth: 2 };
  switch (kind) {
    case "ring":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "dot":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill={color} />
        </svg>
      );
    case "plus":
      return (
        <svg {...common} viewBox="0 0 24 24" strokeLinecap="round">
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
    case "squiggle":
      return (
        <svg {...common} viewBox="0 0 48 24" strokeLinecap="round">
          <path d="M2 12c4-8 8 8 12 0s8-8 12 0 8 8 12 0" />
        </svg>
      );
  }
}

// Small geometric shapes scattered at the edges of a section, gently floating.
export function FloatingShapes({
  shapes = DEFAULTS,
  className,
}: {
  shapes?: Shape[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.className}`}
          style={
            reduce
              ? { transform: `rotate(${s.rot ?? 0}deg)` }
              : {
                  // @ts-expect-error CSS custom property
                  "--wfx-rot": `${s.rot ?? 0}deg`,
                  animation: `wfx-float ${s.duration ?? 7 + i}s ease-in-out ${i * 0.4}s infinite`,
                }
          }
        >
          <ShapeSvg kind={s.kind} color={s.color} size={s.size ?? 28} />
        </div>
      ))}
    </div>
  );
}
