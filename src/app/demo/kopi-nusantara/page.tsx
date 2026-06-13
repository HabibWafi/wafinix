import type { Metadata } from "next";
import { DemoBanner } from "@/components/demo/DemoBanner";

export const metadata: Metadata = {
  title: "Kopi Nusantara — Demo oleh Wafinix",
  robots: { index: false },
};

const products: [string, string, string][] = [
  ["Gayo Natural", "Rp 95.000", "#6f4a25"],
  ["Toraja Sapan", "Rp 110.000", "#4a5d3a"],
  ["Kintamani Honey", "Rp 105.000", "#a06a30"],
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f5efe6] text-[#5c4a3b]">
      <DemoBanner />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-display text-xl font-semibold text-[#2b1d12]">
          Kopi Nusantara
        </span>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          <span>Beranda</span>
          <span>Katalog</span>
          <span>Tentang</span>
        </nav>
        <span className="rounded-full bg-[#8a5a2b] px-4 py-2 text-sm font-semibold text-[#f5efe6]">
          Pesan
        </span>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-[#8a5a2b]">
            Roaster spesialti
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#2b1d12] sm:text-5xl">
            Kopi spesialti dari kebun Nusantara
          </h1>
          <p className="mt-4 max-w-md text-lg">
            Biji pilihan, di-roast segar, dikirim ke cangkir Anda. Dari Gayo
            sampai Toraja.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#8a5a2b] px-6 py-3 font-semibold text-[#f5efe6]">
              Lihat Katalog
            </span>
            <span className="rounded-full border border-[#2b1d12]/20 px-6 py-3 font-semibold text-[#2b1d12]">
              Cerita Kami
            </span>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-[#8a5a2b] to-[#3c2614]" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-3xl font-semibold text-[#2b1d12]">
          Katalog pilihan
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {products.map(([name, price, color]) => (
            <div
              key={name}
              className="overflow-hidden rounded-3xl bg-[#fbf7f0] shadow-sm"
            >
              <div className="h-40" style={{ background: color }} />
              <div className="p-5">
                <h3 className="font-semibold text-[#2b1d12]">{name}</h3>
                <p className="mt-1 text-sm">200g · biji / bubuk</p>
                <p className="mt-2 font-semibold text-[#8a5a2b]">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-8 bg-[#2b1d12] px-6 py-10 text-center text-[#f5efe6]/70">
        <p className="font-display text-lg text-[#f5efe6]">Kopi Nusantara</p>
        <p className="mt-2 text-sm">Demo konsep oleh Wafinix</p>
      </footer>
    </div>
  );
}
