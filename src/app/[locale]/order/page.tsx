import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { OrderForm } from "@/components/sections/order/OrderForm";
import { tiers } from "@/data/pricing";
import { pick } from "@/lib/i18n-text";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "order" });
  return { title: `${t("title")} — Wafinix`, description: t("subtitle") };
}

export default async function OrderPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ paket?: string }>;
}) {
  const { locale } = await params;
  const { paket } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("order");

  // Prices are read from pricing.ts on the server — never trusted from client.
  const packages = tiers.map((tier) => ({
    slug: tier.slug,
    name: pick(tier.name, locale),
    price: locale === "en" ? tier.priceEn : tier.priceId,
  }));

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="bg-cream pb-20 pt-2 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <OrderForm packages={packages} initialPackage={paket ?? ""} />
        </div>
      </section>
    </>
  );
}
