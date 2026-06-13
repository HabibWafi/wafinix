// Helper for structured bilingual data in src/data/*.ts (field shape { id, en }).
export type Bilingual = { id: string; en: string };

export function pick(value: Bilingual, locale: string): string {
  return locale === "en" ? value.en : value.id;
}
