// Topographic contour lines — a signature warm/earthy texture for select
// sections. Decorative only. `tone` picks stroke color; place with className.
const TONE = {
  sand: "var(--color-cocoa)",
  cream: "var(--color-cream)",
  terracotta: "var(--color-terracotta)",
} as const;

export function TopoLines({
  tone = "sand",
  className,
  opacity = 0.06,
}: {
  tone?: keyof typeof TONE;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      fill="none"
      className={`pointer-events-none absolute ${className ?? ""}`}
      style={{ color: TONE[tone], opacity }}
      preserveAspectRatio="xMidYMid slice"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path
          key={i}
          d={`M-20 ${60 + i * 44} C 90 ${20 + i * 44}, 150 ${110 + i * 44}, 220 ${70 + i * 44} S 360 ${30 + i * 44}, 420 ${80 + i * 44}`}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
