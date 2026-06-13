"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// Switches locale while keeping the current path. Uses next-intl navigation so
// the locale prefix is handled correctly.
export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-cocoa/15 bg-cream/70 p-0.5 ${className ?? ""}`}
      role="group"
      aria-label={t("label")}
    >
      <Globe className="ml-2 mr-0.5 h-3.5 w-3.5 text-cocoa/60" aria-hidden />
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          disabled={isPending}
          aria-current={loc === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            loc === locale
              ? "bg-terracotta text-warm-white"
              : "text-cocoa/70 hover:text-terracotta"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
