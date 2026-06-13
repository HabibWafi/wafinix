import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { PortfolioGrid } from "@/components/sections/portofolio/PortfolioGrid";
import { CTABand } from "@/components/sections/CTABand";
import { site } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portofolio" });
  return { title: `${t("title")} — Wafinix`, description: t("subtitle") };
}

export default async function PortofolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portofolio");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <PortfolioGrid />
      <CTABand
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        primary={{ label: t("ctaPrimary"), href: "/order" }}
        secondary={{
          label: t("ctaSecondary"),
          href: `https://wa.me/${site.whatsappNumber}`,
          external: true,
        }}
      />
    </>
  );
}
