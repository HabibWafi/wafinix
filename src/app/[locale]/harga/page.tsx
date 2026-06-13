import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { PricingCards } from "@/components/sections/harga/PricingCards";
import { AddOns } from "@/components/sections/harga/AddOns";
import { CTABand } from "@/components/sections/CTABand";
import { site } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "harga" });
  return { title: `${t("title")} — Wafinix`, description: t("subtitle") };
}

export default async function HargaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("harga");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <PricingCards />
      <AddOns />
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
