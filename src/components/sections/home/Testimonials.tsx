import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

type Item = { quote: string; name: string; role: string };

export function Testimonials() {
  const t = useTranslations("home.testimonials");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{t("title")}</h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <StaggerItem key={i}>
              <figure className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-warm-white p-7">
                <Quote className="h-8 w-8 text-terracotta/40" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-espresso">
                  &ldquo;{it.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-espresso">{it.name}</span>
                  <span className="text-cocoa"> · {it.role}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-6 text-xs text-cocoa/50">{t("note")}</p>
      </div>
    </section>
  );
}
