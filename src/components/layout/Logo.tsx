import Image from "next/image";

type LogoVariant = "horizontal" | "stacked" | "mark";

interface LogoProps {
  /** horizontal lockup (default), vertical stacked lockup, or symbol only */
  variant?: LogoVariant;
  /** render for a dark surface (composes the mark with a cream wordmark) */
  onDark?: boolean;
  className?: string;
  priority?: boolean;
}

// Intrinsic dimensions of the source brand assets in public/brand.
const ASSETS: Record<LogoVariant, { src: string; w: number; h: number }> = {
  horizontal: { src: "/brand/logo-horizontal.png", w: 515, h: 170 },
  stacked: { src: "/brand/logo-stacked.png", w: 470, h: 411 },
  mark: { src: "/brand/mark.png", w: 264, h: 245 },
};

/**
 * Wafinix brand logo. The official lockups use an espresso wordmark, so on dark
 * surfaces we compose the transparent phoenix mark with a cream text wordmark
 * to keep contrast (see docs/DESIGN-SPEC.md).
 */
export function Logo({
  variant = "horizontal",
  onDark = false,
  className,
  priority,
}: LogoProps) {
  if (onDark && variant !== "mark") {
    const stacked = variant === "stacked";
    return (
      <span
        className={`inline-flex items-center ${
          stacked ? "flex-col gap-1.5" : "gap-2.5"
        } ${className ?? ""}`}
      >
        <Image
          src={ASSETS.mark.src}
          alt="Wafinix"
          width={ASSETS.mark.w}
          height={ASSETS.mark.h}
          priority={priority}
          className={stacked ? "h-12 w-auto" : "h-8 w-auto"}
        />
        <span className="font-sans text-2xl font-semibold leading-none tracking-tight text-cream">
          Wafinix
        </span>
      </span>
    );
  }

  const asset = ASSETS[variant];
  return (
    <Image
      src={asset.src}
      alt="Wafinix"
      width={asset.w}
      height={asset.h}
      priority={priority}
      className={className ?? "h-9 w-auto"}
    />
  );
}

export default Logo;
