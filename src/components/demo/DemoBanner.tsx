import Link from "next/link";

// Sticky banner shown on every /demo page. Non-i18n (demos are standalone),
// so copy is hardcoded. Links point to the Wafinix site (default locale).
export function DemoBanner() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-3 bg-[#33261c] px-4 py-2.5 text-sm text-[#faf6f0]">
      <span className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#c8623e]" />
        <span>
          <strong className="font-semibold">Konsep demo</strong> oleh Wafinix
        </span>
      </span>
      <Link
        href="/id/kontak"
        className="shrink-0 rounded-full bg-[#c8623e] px-3.5 py-1.5 font-semibold text-[#fff8f2] transition active:scale-[0.97]"
      >
        Pesan web seperti ini →
      </Link>
    </div>
  );
}
