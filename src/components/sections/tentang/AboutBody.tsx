import { useTranslations } from "next-intl";
import { Sparkles, Heart, FileText, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

type Value = { title: string; desc: string };
const ICONS: LucideIcon[] = [Sparkles, Heart, FileText, ShieldCheck];

export function AboutBody() {
  const t = useTranslations("tentang");
  const story = t.raw("story") as string[];
  const values = t.raw("values") as Value[];

  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold text-espresso sm:text-3xl">
              {t("storyTitle")}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-cocoa">
              {story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">
              {t("valuesTitle")}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <StaggerItem key={i}>
                  <div className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-cream p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-espresso">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cocoa">
                      {v.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
