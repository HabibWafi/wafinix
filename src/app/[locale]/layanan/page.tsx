import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesDetail } from "@/components/sections/layanan/ServicesDetail";
import { TechGrid } from "@/components/sections/layanan/TechGrid";
import { CTABand } from "@/components/sections/CTABand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "layanan" });
  return { title: `${t("title")} — Wafinix`, description: t("subtitle") };
}

export default async function LayananPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("layanan");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <ServicesDetail />
      <TechGrid />
      <CTABand
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        primary={{ label: t("ctaPrimary"), href: "/harga" }}
        secondary={{ label: t("ctaSecondary"), href: "/kontak" }}
      />
    </>
  );
}
