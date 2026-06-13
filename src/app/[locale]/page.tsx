import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CountUp } from "@/components/motion/CountUp";
import { Marquee } from "@/components/motion/Marquee";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { Blobs } from "@/components/decor/Blobs";
import { FloatingShapes } from "@/components/decor/FloatingShapes";
import { HandDrawn } from "@/components/decor/HandDrawn";
import { OutlineText } from "@/components/decor/OutlineText";
import { TopoLines } from "@/components/decor/TopoLines";
import { SectionDivider } from "@/components/decor/SectionDivider";

// Holding page that also exercises every layout/decor/motion primitive built in
// Tahap 3. Replaced by the real Home in Tahap 4.
const TECH = [
  "Next.js",
  "Laravel",
  "React",
  "Flutter",
  "Node.js",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "Midtrans",
  "Three.js",
  "GSAP",
  "PostgreSQL",
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");
  const tn = useTranslations("nav");

  return (
    <>
      <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-cream px-6 py-28 text-center">
        <Blobs />
        <FloatingShapes />
        <ParallaxLayer
          speed={0.4}
          className="absolute inset-0 flex items-center justify-center"
        >
          <OutlineText text="WAFINIX" className="text-[24vw]" />
        </ParallaxLayer>

        <div className="relative z-10 flex flex-col items-center">
          <Reveal>
            <span className="mb-6 inline-block rounded-full bg-sand px-4 py-1.5 text-sm font-medium text-cocoa">
              {t("badge")}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <Logo variant="stacked" priority className="h-40 w-auto sm:h-48" />
          </Reveal>
          <div className="relative mt-8 max-w-xl">
            <Reveal delay={0.16}>
              <p className="text-lg leading-relaxed text-cocoa">{t("blurb")}</p>
            </Reveal>
            <HandDrawn
              variant="underline"
              className="mx-auto mt-2 h-4 w-56 text-terracotta"
            />
          </div>
          <Reveal delay={0.24}>
            <MagneticButton className="mt-9">
              <Link
                href="/harga"
                className="inline-flex rounded-full bg-terracotta px-7 py-3.5 font-semibold text-warm-white shadow-md transition-colors hover:bg-terracotta-light"
              >
                {tn("cta")}
              </Link>
            </MagneticButton>
          </Reveal>
          <Stagger className="mt-10 flex items-center gap-3">
            {["bg-terracotta", "bg-amber", "bg-sage", "bg-espresso"].map((c) => (
              <StaggerItem key={c}>
                <span className={`block h-3 w-3 rounded-full ${c}`} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand py-12">
        <TopoLines tone="sand" className="inset-0 h-full w-full" opacity={0.07} />
        <div className="relative">
          <Marquee duration={28}>
            {TECH.map((x) => (
              <span
                key={x}
                className="font-display text-2xl font-medium text-cocoa/70"
              >
                {x}
              </span>
            ))}
          </Marquee>
        </div>
        <div className="relative mt-10 flex items-center justify-center gap-3 text-center">
          <CountUp
            value={120}
            suffix="+"
            className="font-display text-4xl font-semibold text-terracotta"
          />
          <span className="text-left text-sm leading-tight text-cocoa">
            {t("projects")}
            <br />
            {t("since")}
          </span>
        </div>
      </section>

      <div className="bg-sand">
        <SectionDivider color="espresso" variant="wave" />
      </div>
    </>
  );
}
