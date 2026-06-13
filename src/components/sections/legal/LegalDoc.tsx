import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";

type Section = { heading: string; body: string };

// Self-contained legal document (own h1). Reads legal.<ns>.* from messages.
export function LegalDoc({ ns }: { ns: "terms" | "privacy" | "license" }) {
  const t = useTranslations("legal");
  const sections = t.raw(`${ns}.sections`) as Section[];

  return (
    <section className="bg-cream pb-20 pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm text-cocoa/60">{t("updated")}</p>
        <h1 className="mt-2 text-balance text-4xl leading-tight sm:text-5xl">
          {t(`${ns}.title`)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-cocoa">
          {t(`${ns}.intro`)}
        </p>
        <div className="mt-6 rounded-2xl border border-amber/30 bg-amber/10 px-5 py-4 text-sm text-cocoa">
          {t("disclaimer")}
        </div>

        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold text-espresso">{s.heading}</h2>
              <p className="mt-2 leading-relaxed text-cocoa">{s.body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 font-semibold text-terracotta transition active:scale-[0.97]"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToHome")}
        </Link>
      </div>
    </section>
  );
}
