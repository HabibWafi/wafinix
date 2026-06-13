"use client";

import type { CSSProperties, ReactNode } from "react";

// Seamless infinite marquee. Content is duplicated and the track translates
// -50% for a loop. Decorative (aria-hidden); pauses on hover and under
// reduced motion (via the global rule in globals.css). Provide an accessible
// list elsewhere if the content is meaningful.
export function Marquee({
  children,
  duration = 32,
  reverse = false,
  className,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  const style = {
    "--wfx-duration": `${duration}s`,
    animationDirection: reverse ? "reverse" : "normal",
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className={`relative flex overflow-hidden ${className ?? ""}`}
    >
      <div
        className="wfx-marquee-track flex shrink-0 items-center gap-12 pr-12"
        style={style}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
