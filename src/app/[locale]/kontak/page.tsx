import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactMethods } from "@/components/sections/kontak/ContactMethods";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "kontak" });
  return { title: `${t("title")} — Wafinix`, description: t("subtitle") };
}

export default async function KontakPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("kontak");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <ContactMethods />
    </>
  );
}
