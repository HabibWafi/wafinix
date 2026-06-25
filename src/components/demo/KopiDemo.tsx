"use client";

import {
  Leaf,
  Flame,
  Sprout,
  Truck,
  Coffee,
  Droplets,
  Star,
  ShoppingBag,
  Plus,
  Phone,
  Mail,
  MapPin,
  AtSign,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Rise, Eyebrow, Bezel, CTA } from "@/components/demo/kit";
import { ux } from "@/lib/unsplash";

// Warm artisanal roaster palette — espresso + sage green + caramel on warm cream.
const CREAM = "#f5efe6";
const SAND = "#ece1d0";
const ESPRESSO = "#2b1d12"; // ink / headings
const DEEP = "#1b120b"; // dark bands & footer
const GREEN = "#4a5d3a"; // primary brand / CTA
const CARAMEL = "#a4682f"; // accent
const MUTED = "#6b5746";

// Verified coffee imagery (no off-brand packaging, no stray subjects).
const IMG = {
  toasting: "photo-1495474472287-4d71bcdd2085", // hands toasting latte cups
  beans: "photo-1447933601403-0c6688de566e", // roasted beans close-up
  espresso: "photo-1559496417-e7f25cb247f3", // espresso glass in light
  pourover: "photo-1442512595331-e89e73853f31", // pour-over / Chemex
  cappuccino: "photo-1509042239860-f550ce710b93", // cappuccinos + plants
  farmer: "photo-1746623691157-c4c7a3bad0c4", // farmer harvesting cherries
};

const navLinks = ["Beranda", "Shop", "Asal Biji", "Tentang Kami", "Blog"];

const trust = [
  { icon: Leaf, title: "Biji Pilihan", sub: "Grade specialty" },
  { icon: Flame, title: "Sangrai Harian", sub: "Batch kecil, segar" },
  { icon: Sprout, title: "Petani Lokal", sub: "Mitra dataran tinggi" },
  { icon: Truck, title: "Gratis Ongkir", sub: "Belanja > Rp150rb" },
];

const products = [
  {
    img: IMG.beans,
    badge: "Best Seller",
    title: "Gayo",
    origin: "Dataran Tinggi Aceh",
    roast: "Medium",
    notes: "Herbal · Cokelat",
    price: "Rp 95.000",
  },
  {
    img: IMG.espresso,
    title: "Toraja",
    origin: "Sulawesi Selatan",
    roast: "Medium-Dark",
    notes: "Karamel · Rempah",
    price: "Rp 110.000",
  },
  {
    img: IMG.cappuccino,
    badge: "Baru",
    title: "Kintamani",
    origin: "Bali",
    roast: "Medium",
    notes: "Jeruk · Floral",
    price: "Rp 105.000",
  },
  {
    img: IMG.pourover,
    title: "Flores Bajawa",
    origin: "Nusa Tenggara Timur",
    roast: "Dark",
    notes: "Cokelat · Kacang",
    price: "Rp 98.000",
  },
];

const journey = [
  { icon: Sprout, step: "01", title: "Dipetik Pilihan", desc: "Ceri merah dipetik dengan tangan oleh petani mitra di dataran tinggi Nusantara." },
  { icon: Flame, step: "02", title: "Disangrai Harian", desc: "Dipanggang dalam batch kecil setiap hari demi menjaga kesegaran dan karakter rasa." },
  { icon: Droplets, step: "03", title: "Diseduh Sempurna", desc: "Sampai di cangkir Anda dengan profil rasa yang konsisten dan aroma yang utuh." },
];

const stats = [
  { value: "11", label: "Tahun memanggang" },
  { value: "40+", label: "Petani mitra" },
  { value: "12", label: "Origin Nusantara" },
];

const testimonials = [
  { quote: "Gayo-nya juara, aroma herbalnya kuat dan bersih. Sudah langganan tiap bulan.", name: "Dimas", city: "Jakarta" },
  { quote: "Packaging rapi, kopi sampai dalam keadaan segar. Toraja jadi favorit di kantor.", name: "Putri", city: "Bandung" },
  { quote: "Pour over Kintamani-nya floral banget. Pelayanannya juga ramah, recommended!", name: "Andre", city: "Surabaya" },
];

export function KopiDemo() {
  return (
    <div className="min-h-screen" style={{ background: CREAM, color: MUTED }}>
      <DemoBanner />

      {/* Announcement bar */}
      <div className="px-4 py-2 text-center text-xs font-medium tracking-wide text-white" style={{ background: GREEN }}>
        Gratis ongkir untuk pembelian di atas Rp150.000 — ke seluruh Indonesia
      </div>

      {/* Shop nav */}
      <header className="sticky top-0 z-30 border-b backdrop-blur-md" style={{ borderColor: "rgba(43,29,18,0.1)", background: "rgba(245,239,230,0.85)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: GREEN }}>
              <Coffee className="h-4 w-4 text-white" strokeWidth={1.75} />
            </span>
            <span className="font-display text-lg font-semibold" style={{ color: ESPRESSO }}>Kopi Nusantara</span>
          </span>
          <nav className="hidden gap-7 text-sm font-medium lg:flex" style={{ color: MUTED }}>
            {navLinks.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: "rgba(43,29,18,0.15)" }}>
              <ShoppingBag className="h-4 w-4" strokeWidth={1.5} style={{ color: ESPRESSO }} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white" style={{ background: CARAMEL }}>2</span>
            </span>
            <span className="rounded-full px-4 py-2 text-xs font-semibold text-white sm:text-sm" style={{ background: GREEN }}>Belanja</span>
          </div>
        </div>
      </header>

      {/* Split hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Rise>
            <Eyebrow color={CARAMEL}>Kopi Spesialti Indonesia</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl" style={{ color: ESPRESSO }}>
              Rasa asli,<br />dari Nusantara
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Biji pilihan dari petani lokal, disangrai dalam batch kecil setiap hari untuk cita rasa yang jujur dan segar — langsung ke cangkir Anda.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTA bg={GREEN} fg="#ffffff">Belanja Sekarang</CTA>
              <span className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold" style={{ borderColor: "rgba(43,29,18,0.2)", color: ESPRESSO }}>
                Cerita Kami
              </span>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex" style={{ color: CARAMEL }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm" style={{ color: MUTED }}><span className="font-semibold" style={{ color: ESPRESSO }}>4.9</span> dari 1.200+ pelanggan</p>
            </div>
          </Rise>

          <Rise delay={0.12}>
            <div className="relative">
              <div className="absolute -right-6 -top-6 -z-10 hidden h-40 w-40 rounded-full lg:block" style={{ background: "rgba(74,93,58,0.16)" }} />
              <div className="absolute -bottom-6 -left-6 -z-10 hidden h-28 w-28 rounded-full lg:block" style={{ background: "rgba(164,104,47,0.16)" }} />
              <Bezel shell="rgba(43,29,18,0.06)" ring="rgba(43,29,18,0.1)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ux(IMG.toasting, 1100)} alt="Menikmati kopi Nusantara bersama" className="aspect-[4/5] w-full object-cover" />
              </Bezel>
            </div>
          </Rise>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{ background: SAND }}>
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl" style={{ background: "rgba(74,93,58,0.12)" }}>
                <b.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: GREEN }} />
              </span>
              <div>
                <p className="font-semibold" style={{ color: ESPRESSO }}>{b.title}</p>
                <p className="text-sm" style={{ color: MUTED }}>{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop — product grid */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Rise className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow color={CARAMEL}>Koleksi Kami</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: ESPRESSO }}>Kopi pilihan</h2>
          </div>
          <span className="text-sm font-semibold" style={{ color: GREEN }}>Lihat semua biji →</span>
        </Rise>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Rise key={p.title} delay={i * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-white" style={{ borderColor: "rgba(43,29,18,0.07)", boxShadow: "0 24px 50px -38px rgba(43,29,18,0.45)" }}>
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ux(p.img, 700)} alt={p.title} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                  {p.badge && (
                    <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white" style={{ background: CARAMEL }}>{p.badge}</span>
                  )}
                  <span className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium" style={{ background: "rgba(255,255,255,0.9)", color: ESPRESSO }}>{p.roast}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold" style={{ color: ESPRESSO }}>{p.title}</h3>
                  <p className="mt-0.5 text-xs" style={{ color: MUTED }}>{p.origin}</p>
                  <p className="mt-2 text-xs" style={{ color: CARAMEL }}>{p.notes}</p>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <p className="font-display text-lg font-semibold" style={{ color: ESPRESSO }}>{p.price}<span className="text-xs font-normal" style={{ color: MUTED }}> /200g</span></p>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110" style={{ background: GREEN }}>
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </article>
            </Rise>
          ))}
        </div>
      </section>

      {/* Dari Kebun ke Cangkir — process band */}
      <section style={{ background: DEEP }}>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Rise className="max-w-2xl">
            <Eyebrow color="#d8b88a" className="bg-white/5">Prosesnya</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: CREAM }}>Dari kebun ke cangkir</h2>
            <p className="mt-4 max-w-lg text-lg" style={{ color: "rgba(245,239,230,0.6)" }}>Tiga langkah sederhana yang kami jaga dengan teliti agar setiap seduhan terasa jujur.</p>
          </Rise>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {journey.map((j, i) => (
              <Rise key={j.title} delay={i * 0.1}>
                <div className="border-t pt-6" style={{ borderColor: "rgba(245,239,230,0.18)" }}>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(164,104,47,0.2)" }}>
                      <j.icon className="h-6 w-6" strokeWidth={1.25} style={{ color: "#d8b88a" }} />
                    </span>
                    <span className="font-display text-3xl font-semibold" style={{ color: "rgba(245,239,230,0.25)" }}>{j.step}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold" style={{ color: CREAM }}>{j.title}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: "rgba(245,239,230,0.6)" }}>{j.desc}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Kami — editorial split with farmer image */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Rise>
            <Eyebrow color={CARAMEL}>Tentang Kami</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl" style={{ color: ESPRESSO }}>
              Dimulai dari satu kebun, satu petani
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Sejak 2013 kami menelusuri dataran tinggi Nusantara, menjalin kemitraan langsung dengan petani, dan memastikan setiap biji dihargai dengan adil. Hasilnya: kopi yang segar, jejaknya jelas, dan rasanya bisa Anda percaya.
            </p>
            <p className="mt-4 max-w-md leading-relaxed">
              Kami menyangrai dalam jumlah kecil setiap hari — bukan menumpuk stok — supaya yang sampai ke cangkir Anda selalu pada puncak rasanya.
            </p>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: GREEN }}>{s.value}</p>
                  <p className="mt-1 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Rise>
          <Rise delay={0.12}>
            <Bezel shell="rgba(43,29,18,0.06)" ring="rgba(43,29,18,0.1)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ux(IMG.farmer, 1000)} alt="Petani memetik ceri kopi" className="aspect-[4/5] w-full object-cover" />
            </Bezel>
          </Rise>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Rise className="mb-12 max-w-2xl">
            <Eyebrow color={CARAMEL}>Kata Pelanggan</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: ESPRESSO }}>Diseruput, lalu jatuh cinta</h2>
          </Rise>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Rise key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col justify-between rounded-[1.5rem] border bg-white p-7" style={{ borderColor: "rgba(43,29,18,0.07)" }}>
                  <div>
                    <div className="flex gap-1" style={{ color: CARAMEL }}>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 leading-relaxed" style={{ color: ESPRESSO }}>&ldquo;{t.quote}&rdquo;</blockquote>
                  </div>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold" style={{ color: ESPRESSO }}>{t.name}</span>
                    <span style={{ color: MUTED }}> · {t.city}</span>
                  </figcaption>
                </figure>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription / newsletter band */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Rise>
          <div className="relative overflow-hidden rounded-[2rem] px-8 py-14 text-center sm:px-12" style={{ background: GREEN }}>
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
            <div className="relative">
              <Eyebrow color="#e7dcc8" className="bg-white/10">Langganan Biji Bulanan</Eyebrow>
              <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: CREAM }}>
                Biji segar tiap bulan, langsung ke rumah Anda
              </h2>
              <p className="mx-auto mt-4 max-w-md" style={{ color: "rgba(245,239,230,0.75)" }}>
                Pilih origin favorit, atur jadwal, hemat 15%. Bisa dijeda atau dibatalkan kapan saja.
              </p>
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <span className="flex-1 rounded-full bg-white/90 px-5 py-3 text-left text-sm" style={{ color: MUTED }}>nama@email.com</span>
                <span className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold" style={{ background: CARAMEL, color: "#fff" }}>Langganan</span>
              </div>
            </div>
          </div>
        </Rise>
      </section>

      {/* Footer */}
      <footer style={{ background: DEEP }} className="text-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <span className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: GREEN }}>
                <Coffee className="h-4 w-4 text-white" strokeWidth={1.75} />
              </span>
              <span className="font-display text-lg font-semibold text-white">Kopi Nusantara</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">Kopi spesialti dari kebun Nusantara, disangrai segar setiap hari.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Shop</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Gayo", "Toraja", "Kintamani", "Flores Bajawa"].map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Perusahaan</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Tentang Kami", "Asal Biji", "Blog", "FAQ"].map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Kontak</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.25} style={{ color: "#d8b88a" }} /> 0812-3456-7890</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.25} style={{ color: "#d8b88a" }} /> halo@kopinusantara.id</li>
              <li className="flex items-center gap-2"><AtSign className="h-4 w-4" strokeWidth={1.25} style={{ color: "#d8b88a" }} /> @kopinusantara</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" strokeWidth={1.25} style={{ color: "#d8b88a" }} /> Bandung, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">
          Pembayaran: Transfer Bank · E-wallet · QRIS — Demo konsep oleh Wafinix
        </div>
      </footer>
    </div>
  );
}
