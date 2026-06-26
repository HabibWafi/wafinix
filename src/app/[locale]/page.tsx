import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/home/Hero";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { TechMarquee } from "@/components/sections/home/TechMarquee";
import { IndustriesScroll } from "@/components/sections/home/IndustriesScroll";
import { GlobeSection } from "@/components/sections/home/GlobeSection";
import { ProcessScrolly } from "@/components/sections/home/ProcessScrolly";
import { Stats } from "@/components/sections/home/Stats";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Security } from "@/components/sections/home/Security";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { SectionDivider } from "@/components/decor/SectionDivider";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />

      <div className="bg-espresso">
        <SectionDivider color="cream" variant="curve" />
      </div>
      <ServicesPreview />
      <TechMarquee />

      <div className="bg-sand">
        <SectionDivider color="espresso" variant="wave" />
      </div>
      <IndustriesScroll />

      <div className="bg-espresso">
        <SectionDivider color="cream" variant="curve" />
      </div>
      <GlobeSection />
      <ProcessScrolly />

      <div className="bg-sand">
        <SectionDivider color="espresso" variant="wave" />
      </div>
      <Stats />

      <div className="bg-espresso">
        <SectionDivider color="cream" variant="slant" />
      </div>
      <Testimonials />
      <Security />

      <div className="bg-sand">
        <SectionDivider color="espresso" variant="wave" />
      </div>
      <FinalCTA />
    </>
  );
}
