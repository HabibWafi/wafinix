import type { Metadata } from "next";
import type { ReactNode } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { supabaseAdmin } from "@/lib/supabase/server";
import { site } from "@/data/site";

export const metadata: Metadata = { robots: { index: false } };

type Snapshot = {
  name?: { id: string; en: string };
  priceId?: string;
  priceEn?: string;
};
type OrderRow = {
  order_code: string;
  status: string;
  name: string;
  email: string;
  whatsapp: string;
  brief: string | null;
  package_slug: string;
  package_snapshot: Snapshot | null;
};

export default async function OrderStatusPage({
  params,
}: {
  params: Promise<{ locale: string; code: string }>;
}) {
  const { locale, code } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("order");

  let order: OrderRow | null = null;
  try {
    const supabase = supabaseAdmin();
    const { data } = await supabase
      .from("orders")
      .select("*")
      .eq("order_code", code)
      .maybeSingle();
    order = (data as OrderRow | null) ?? null;
  } catch {
    order = null;
  }

  if (!order) {
    return (
      <section className="bg-cream pb-24 pt-32 text-center lg:pt-40">
        <div className="mx-auto max-w-xl px-6">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            {t("status.notFound")}
          </h1>
          <p className="mt-3 text-cocoa">{t("status.notFoundSub")}</p>
          <Link
            href="/order"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 font-semibold text-warm-white transition hover:bg-terracotta-light active:scale-[0.97]"
          >
            {t("status.newOrder")}
          </Link>
        </div>
      </section>
    );
  }

  const snap: Snapshot = order.package_snapshot ?? {};
  const pkgName = snap.name
    ? locale === "en"
      ? snap.name.en
      : snap.name.id
    : order.package_slug;
  const price = locale === "en" ? snap.priceEn : snap.priceId;
  const statusText = t(`status.s_${order.status}`);

  const waLines = [
    t("waGreeting"),
    "",
    `${t("status.code")}: ${order.order_code}`,
    `${t("waPackage")}: ${pkgName}${price ? ` (${price})` : ""}`,
    `${t("waName")}: ${order.name}`,
    `${t("waWhatsapp")}: ${order.whatsapp}`,
  ].join("\n");
  const waUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(waLines)}`;

  return (
    <section className="bg-cream pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-2xl px-6">
        <Link
          href="/order"
          className="inline-flex items-center gap-2 text-sm font-medium text-cocoa transition hover:text-terracotta"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("title")}
        </Link>

        <p className="mt-6 font-semibold text-terracotta">{t("status.thanks")}</p>
        <h1 className="mt-1 font-display text-4xl font-semibold sm:text-5xl">
          {order.order_code}
        </h1>

        <div className="mt-7 space-y-4 rounded-3xl border border-cocoa/10 bg-warm-white p-6">
          <Row label={t("status.statusLabel")}>
            <span className="rounded-full bg-amber/15 px-3 py-1 text-sm font-semibold text-espresso">
              {statusText}
            </span>
          </Row>
          <Row label={t("status.packageLabel")}>
            {pkgName}
            {price ? ` · ${price}` : ""}
          </Row>
          <Row label={t("status.contactLabel")}>
            {order.name} · {order.email} · {order.whatsapp}
          </Row>
          {order.brief && (
            <Row label={t("status.briefLabel")}>
              <span className="whitespace-pre-line">{order.brief}</span>
            </Row>
          )}
        </div>

        <p className="mt-5 leading-relaxed text-cocoa">{t("status.next")}</p>

        <div className="mt-5">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-semibold text-warm-white shadow-md transition hover:bg-terracotta-light active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" />
            {t("status.wa")}
          </a>
        </div>

        <p className="mt-7 rounded-2xl border border-amber/30 bg-amber/10 px-5 py-4 text-sm text-cocoa">
          {t("status.paymentSoon")}
        </p>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
      <span className="text-xs font-semibold uppercase tracking-wide text-cocoa/50">
        {label}
      </span>
      <span className="text-espresso">{children}</span>
    </div>
  );
}
