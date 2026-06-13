import { defineRouting } from "next-intl/routing";

// Bilingual ID (primary market) + EN (global). Both locales are prefixed
// (/id, /en) for predictable switching. See docs/ARCHITECTURE.md.
export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];
