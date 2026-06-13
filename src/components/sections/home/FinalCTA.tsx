import { ArrowRight, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";
import { Blobs } from "@/components/decor/Blobs";

export function FinalCTA() {
  const t = useTranslations("home.cta");

  return (
    <section className="relative overflow-hidden bg-espresso py-24 text-center lg:py-32">
      <Blobs />
      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal>
          <h2 className="text-3xl text-cream sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/70">
            {t("subtitle")}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton>
              <Link
                href="/order"
                className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-warm-white shadow-lg transition-colors hover:bg-terracotta-light"
              >
                {t("primary")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              <MessageCircle className="h-4 w-4" />
              {t("secondary")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
