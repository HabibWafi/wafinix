import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { Blobs } from "@/components/decor/Blobs";

// Reusable closing call-to-action band (espresso). Secondary can be an external
// link (e.g. WhatsApp) or an internal route.
export function CTABand({
  title,
  subtitle,
  primary,
  secondary,
}: {
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 text-center lg:py-28">
      <Blobs />
      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal>
          <h2 className="text-balance text-3xl text-cream sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/70">{subtitle}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton>
              <Link
                href={primary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-warm-white shadow-lg transition hover:bg-terracotta-light active:scale-[0.97]"
              >
                {primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            {secondary.external ? (
              <a
                href={secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream transition hover:bg-cream/10 active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" />
                {secondary.label}
              </a>
            ) : (
              <Link
                href={secondary.href}
                className="inline-flex items-center rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream transition hover:bg-cream/10 active:scale-[0.97]"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
