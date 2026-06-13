import { useTranslations } from "next-intl";
import { Lock, ShieldCheck, BadgeCheck, DatabaseBackup } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

type Item = { title: string; desc: string };

const ICONS: LucideIcon[] = [Lock, ShieldCheck, BadgeCheck, DatabaseBackup];

export function Security() {
  const t = useTranslations("home.security");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-cocoa">
            {t("subtitle")}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem key={i}>
                <div className="flex h-full flex-col rounded-3xl border border-cocoa/10 bg-cream p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sage/15 text-sage">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-espresso">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa">
                    {it.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
