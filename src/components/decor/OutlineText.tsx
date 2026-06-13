// Oversized outlined word sitting behind content as a background accent.
// Pair with <ParallaxLayer> for a drifting effect. Decorative — aria-hidden.
export function OutlineText({
  text,
  className,
  color = "var(--color-cocoa)",
  opacity = 0.07,
}: {
  text: string;
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none font-display font-semibold uppercase leading-none ${className ?? ""}`}
      style={{
        WebkitTextStroke: `1.5px ${color}`,
        color: "transparent",
        opacity,
      }}
    >
      {text}
    </span>
  );
}
