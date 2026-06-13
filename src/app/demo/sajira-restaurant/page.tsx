import type { Metadata } from "next";
import { DemoBanner } from "@/components/demo/DemoBanner";

export const metadata: Metadata = {
  title: "Sajira — Demo oleh Wafinix",
  robots: { index: false },
};

const menu: [string, string, string][] = [
  ["Nasi Bakar Sajira", "Rp 48.000", "#3a2f1c"],
  ["Iga Bakar Madu", "Rp 89.000", "#4a2418"],
  ["Es Kopi Sajira", "Rp 28.000", "#2c2520"],
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1a1614] text-[#cfc4b4]">
      <DemoBanner />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-display text-xl font-semibold text-[#c9a227]">Sajira</span>
        <nav className="hidden gap-6 text-sm font-medium text-[#cfc4b4] sm:flex">
          <span>Menu</span>
          <span>Reservasi</span>
          <span>Lokasi</span>
        </nav>
        <span className="rounded-full border border-[#c9a227] px-4 py-2 text-sm font-semibold text-[#c9a227]">
          Reservasi
        </span>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a227]">
          Fine casual dining
        </span>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-[#f3ece0] sm:text-6xl">
          Cita rasa yang dikenang
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg">
          Masakan Nusantara modern dalam suasana hangat. Pesan meja Anda malam
          ini.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-[#c9a227] px-6 py-3 font-semibold text-[#1a1614]">
            Reservasi Meja
          </span>
          <span className="rounded-full border border-[#cfc4b4]/30 px-6 py-3 font-semibold text-[#f3ece0]">
            Lihat Menu
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-center font-display text-3xl font-semibold text-[#f3ece0]">
          Menu unggulan
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {menu.map(([name, price, color]) => (
            <div key={name} className="overflow-hidden rounded-3xl bg-[#241f1c]">
              <div className="h-44" style={{ background: color }} />
              <div className="p-5">
                <h3 className="font-semibold text-[#f3ece0]">{name}</h3>
                <p className="mt-2 font-semibold text-[#c9a227]">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-4xl px-6 pb-16">
        <div className="rounded-3xl border border-[#c9a227]/30 p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-[#f3ece0]">
            Pesan meja Anda
          </h2>
          <p className="mt-2">Buka setiap hari, 11.00–22.00</p>
          <span className="mt-5 inline-block rounded-full bg-[#c9a227] px-6 py-3 font-semibold text-[#1a1614]">
            Reservasi sekarang
          </span>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-[#cfc4b4]/60">
        <p className="font-display text-lg text-[#c9a227]">Sajira</p>
        <p className="mt-2 text-sm">Demo konsep oleh Wafinix</p>
      </footer>
    </div>
  );
}
