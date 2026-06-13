import type { Metadata } from "next";
import { DemoBanner } from "@/components/demo/DemoBanner";

export const metadata: Metadata = {
  title: "Amara Hotel — Demo oleh Wafinix",
  robots: { index: false },
};

const rooms: [string, string, string][] = [
  ["Deluxe Garden", "Rp 850.000", "#0f4c4c"],
  ["Ocean Suite", "Rp 1.450.000", "#14605f"],
  ["Family Villa", "Rp 2.100.000", "#0b3b3b"],
];

const fields = ["Check-in", "Check-out", "Tamu"];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f4f1ec] text-[#44403a]">
      <DemoBanner />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-display text-xl font-semibold text-[#0f4c4c]">
          Amara Hotel
        </span>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          <span>Kamar</span>
          <span>Fasilitas</span>
          <span>Kontak</span>
        </nav>
        <span className="rounded-full bg-[#0f4c4c] px-4 py-2 text-sm font-semibold text-[#f4f1ec]">
          Booking
        </span>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-14 text-center lg:py-20">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#b8915a]">
          Boutique resort
        </span>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-[#0f4c4c] sm:text-6xl">
          Menginap dalam ketenangan
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg">
          Pemandangan laut, layanan hangat, dan kamar yang menenangkan. Cek
          ketersediaan dan pesan langsung.
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-3 rounded-3xl bg-white p-4 shadow-sm sm:grid-cols-4">
          {fields.map((f) => (
            <div key={f} className="rounded-2xl border border-[#0f4c4c]/15 px-4 py-3 text-left">
              <p className="text-xs uppercase tracking-wide text-[#0f4c4c]/50">{f}</p>
              <p className="mt-1 text-sm font-medium text-[#44403a]">—</p>
            </div>
          ))}
          <span className="flex items-center justify-center rounded-2xl bg-[#0f4c4c] px-4 py-3 font-semibold text-[#f4f1ec] sm:col-span-1">
            Cek
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-3xl font-semibold text-[#0f4c4c]">
          Pilihan kamar
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {rooms.map(([name, price, color]) => (
            <div key={name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-44" style={{ background: color }} />
              <div className="p-5">
                <h3 className="font-semibold text-[#0f4c4c]">{name}</h3>
                <p className="mt-1 text-sm">Termasuk sarapan</p>
                <p className="mt-2 font-semibold text-[#b8915a]">
                  {price}
                  <span className="text-xs font-normal text-[#44403a]/60"> / malam</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-8 bg-[#0f4c4c] px-6 py-10 text-center text-[#f4f1ec]/70">
        <p className="font-display text-lg text-[#f4f1ec]">Amara Hotel</p>
        <p className="mt-2 text-sm">Demo konsep oleh Wafinix</p>
      </footer>
    </div>
  );
}
