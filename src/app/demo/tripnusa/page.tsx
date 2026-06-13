import type { Metadata } from "next";
import { DemoBanner } from "@/components/demo/DemoBanner";

export const metadata: Metadata = {
  title: "TripNusa — Demo oleh Wafinix",
  robots: { index: false },
};

const tours: [string, string, string][] = [
  ["Labuan Bajo 3D2N", "Rp 3.200.000", "#0fb5b5"],
  ["Raja Ampat 4D3N", "Rp 7.500.000", "#0d8f8f"],
  ["Bromo Sunrise 2D1N", "Rp 1.250.000", "#ff6b5e"],
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f0fbfb] text-[#0f3a3a]">
      <DemoBanner />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-display text-xl font-semibold text-[#0d8f8f]">
          TripNusa
        </span>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          <span>Destinasi</span>
          <span>Paket</span>
          <span>Promo</span>
        </nav>
        <span className="rounded-full bg-[#ff6b5e] px-4 py-2 text-sm font-semibold text-white">
          Pesan
        </span>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-14 text-center lg:py-20">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#ff6b5e]">
          Jelajah Nusantara
        </span>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-[#0f3a3a] sm:text-6xl">
          Petualangan dimulai di sini
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg">
          Paket tur lengkap dengan itinerary, jadwal, dan pemesanan online.
          Tinggal pilih dan berangkat.
        </p>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-3xl bg-white p-4 shadow-sm sm:flex-row">
          <div className="flex-1 rounded-2xl border border-[#0d8f8f]/15 px-4 py-3 text-left">
            <p className="text-xs uppercase tracking-wide text-[#0d8f8f]/50">Destinasi</p>
            <p className="mt-1 text-sm font-medium">Ke mana?</p>
          </div>
          <div className="flex-1 rounded-2xl border border-[#0d8f8f]/15 px-4 py-3 text-left">
            <p className="text-xs uppercase tracking-wide text-[#0d8f8f]/50">Tanggal</p>
            <p className="mt-1 text-sm font-medium">Kapan?</p>
          </div>
          <span className="flex items-center justify-center rounded-2xl bg-[#0fb5b5] px-6 py-3 font-semibold text-white">
            Cari
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-3xl font-semibold text-[#0f3a3a]">
          Paket populer
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {tours.map(([name, price, color]) => (
            <div key={name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-44" style={{ background: color }} />
              <div className="p-5">
                <h3 className="font-semibold text-[#0f3a3a]">{name}</h3>
                <p className="mt-1 text-sm">Sudah termasuk hotel & guide</p>
                <p className="mt-2 font-semibold text-[#0d8f8f]">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-8 bg-[#0f3a3a] px-6 py-10 text-center text-[#f0fbfb]/70">
        <p className="font-display text-lg text-[#f0fbfb]">TripNusa</p>
        <p className="mt-2 text-sm">Demo konsep oleh Wafinix</p>
      </footer>
    </div>
  );
}
