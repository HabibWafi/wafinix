import { useTranslations } from "next-intl";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

type Stat = { value: number; suffix: string; label: string };

export function Stats() {
  const t = useTranslations("home.stats");
  const items = t.raw("items") as Stat[];

  return (
    <section className="bg-espresso py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {items.map((s, i) => (
          <Reveal key={i} delay={i * 0.05} className="text-center">
            <div className="font-display text-4xl font-semibold text-amber sm:text-5xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-cream/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
