type DividerColor = "cream" | "sand" | "espresso" | "terracotta";
type Variant = "wave" | "curve" | "slant";

const FILL: Record<DividerColor, string> = {
  cream: "var(--color-cream)",
  sand: "var(--color-sand)",
  espresso: "var(--color-espresso)",
  terracotta: "var(--color-terracotta)",
};

const D: Record<Variant, string> = {
  wave: "M0 40 C 360 90 1080 -10 1440 40 L1440 100 L0 100 Z",
  curve: "M0 60 C 480 0 960 0 1440 60 L1440 100 L0 100 Z",
  slant: "M0 80 L1440 20 L1440 100 L0 100 Z",
};

// Shaped boundary between two sections so the page isn't a stack of straight
// cuts. `color` is the color of the section that follows. See DESIGN-SPEC.md.
export function SectionDivider({
  color = "cream",
  variant = "wave",
  flip = false,
  className,
}: {
  color?: DividerColor;
  variant?: Variant;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className ?? ""}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`block h-[56px] w-full md:h-[88px] ${flip ? "rotate-180" : ""}`}
      >
        <path d={D[variant]} fill={FILL[color]} />
      </svg>
    </div>
  );
}
