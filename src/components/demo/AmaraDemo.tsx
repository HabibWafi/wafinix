"use client";

import {
  Waves,
  UtensilsCrossed,
  Flower2,
  Dumbbell,
  Wifi,
  Car,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Rise, Eyebrow, Bezel, CTA } from "@/components/demo/kit";
import { ux } from "@/lib/unsplash";

const CREAM = "#faf7f0";
const INK = "#16322d";
const TEAL = "#0f3d3a";
const GOLD = "#b8915a";
const MUTED = "#5b665f";

const rooms = [
  { name: "Deluxe Garden", img: ux("photo-1611892440504-42a792e24d32", 900), size: "32 m²", guests: "2 Tamu", price: "Rp 1.250.000", tags: ["Balkon taman", "King bed"] },
  { name: "Premier Ocean", img: ux("photo-1582719478250-c89cae4dc85b", 900), size: "44 m²", guests: "2 Tamu", price: "Rp 1.850.000", tags: ["View laut", "Bathtub"] },
  { name: "Signature Suite", img: ux("photo-1571896349842-33c89424de2d", 900), size: "68 m²", guests: "3 Tamu", price: "Rp 2.750.000", tags: ["Private pool", "Living room"] },
];

const amenities = [
  { icon: Waves, title: "Infinity Pool", desc: "Kolam tepi laut dengan sunset tak terlupakan." },
  { icon: Flower2, title: "Spa & Wellness", desc: "Perawatan tradisional oleh terapis berpengalaman." },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "Cita rasa lokal & internasional di tepi pantai." },
  { icon: Dumbbell, title: "Fitness Studio", desc: "Peralatan lengkap, buka 24 jam." },
  { icon: Wifi, title: "High-speed Wi-Fi", desc: "Koneksi cepat di seluruh area." },
  { icon: Car, title: "Antar-jemput", desc: "Layanan bandara pulang-pergi." },
];

const gallery = [
  ux("photo-1571896349842-33c89424de2d", 800),
  ux("photo-1582719478250-c89cae4dc85b", 600),
  ux("photo-1611892440504-42a792e24d32", 600),
  ux("photo-1566073771259-6a8506099945", 800),
  ux("photo-1590490360182-c33d57733427", 600),
];

const navLinks = ["Beranda", "Kamar", "Pengalaman", "Galeri", "Kontak"];

export function AmaraDemo() {
  return (
    <div className="min-h-screen" style={{ background: CREAM, color: MUTED }}>
      <DemoBanner />

      {/* Fluid island nav */}
      <header className="absolute inset-x-0 top-[44px] z-30 px-4">
        <div
          className="mx-auto mt-4 flex max-w-5xl items-center justify-between gap-3 rounded-full border px-5 py-2.5 backdrop-blur-xl"
          style={{ background: "rgba(255,255,255,0.72)", borderColor: "rgba(255,255,255,0.5)" }}
        >
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold" style={{ color: INK }}>Amara</span>
            <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: GOLD }}>Hotel</span>
          </span>
          <nav className="hidden gap-7 text-sm font-medium lg:flex" style={{ color: INK }}>
            {navLinks.map((n) => <span key={n}>{n}</span>)}
          </nav>
          <span className="rounded-full px-4 py-2 text-xs font-semibold text-white sm:text-sm" style={{ background: TEAL }}>
            Pesan Sekarang
          </span>
        </div>
      </header>

      {/* Cinematic hero */}
      <section className="relative isolate flex min-h-[100dvh] items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux("photo-1566073771259-6a8506099945", 1800)} alt="Amara Hotel" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(8,28,25,0.55) 0%, rgba(8,28,25,0.15) 40%, rgba(8,28,25,0.85) 100%)" }} />
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <div className="max-w-2xl [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            <Eyebrow color="#e9d8b8" className="bg-white/10 backdrop-blur-sm">Boutique Resort · Bali</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Menginap dengan sentuhan berbeda
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Ketenangan tepi laut, pelayanan yang hangat, dan kamar yang dirancang untuk membuat Anda betah berlama-lama.
            </p>
            <div className="mt-8">
              <CTA bg={GOLD} fg={INK}>Jelajahi Kamar</CTA>
            </div>
          </div>

          {/* Booking island */}
          <Bezel className="mt-12 max-w-4xl" shell="rgba(255,255,255,0.14)" ring="rgba(255,255,255,0.25)" radius={1.75}>
            <div className="grid gap-px bg-white/10 sm:grid-cols-4" style={{ background: "rgba(12,40,36,0.55)", backdropFilter: "blur(8px)" }}>
              {[["Check-in", "24 Mei 2025"], ["Check-out", "25 Mei 2025"], ["Tamu", "2 Dewasa"], ["Kamar", "1 Kamar"]].map(([l, v]) => (
                <div key={l} className="px-5 py-4">
                  <p className="text-[11px] uppercase tracking-wide text-white/55">{l}</p>
                  <p className="mt-1 text-sm font-medium text-white">{v}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-3" style={{ background: TEAL }}>
              <span className="text-sm text-white/70">Ketersediaan real-time</span>
              <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold" style={{ color: TEAL }}>Cari Kamar</span>
            </div>
          </Bezel>
        </div>
      </section>

      {/* Editorial intro */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Rise>
            <Eyebrow color={GOLD}>Tentang Amara</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl" style={{ color: INK }}>
              Tempat singgah yang terasa seperti rumah, hanya lebih tenang.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Berada langsung di tepi pantai, Amara memadukan arsitektur hangat dengan pelayanan yang penuh perhatian. Setiap sudut dirancang untuk memperlambat waktu.
            </p>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[["12", "Tahun melayani"], ["4.9", "Rating tamu"], ["68", "Kamar & vila"]].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: TEAL }}>{v}</p>
                  <p className="mt-1 text-sm">{l}</p>
                </div>
              ))}
            </div>
          </Rise>
          <Rise delay={0.12}>
            <Bezel shell="rgba(15,61,58,0.07)" ring="rgba(15,61,58,0.1)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ux("photo-1582719478250-c89cae4dc85b", 1000)} alt="Suasana Amara" className="aspect-[4/5] w-full object-cover" />
            </Bezel>
          </Rise>
        </div>
      </section>

      {/* Rooms */}
      <section style={{ background: "#f1ece2" }}>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Rise className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow color={GOLD}>Akomodasi</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Kamar &amp; vila pilihan</h2>
            </div>
            <span className="text-sm font-semibold" style={{ color: TEAL }}>Lihat semua kamar →</span>
          </Rise>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {rooms.map((r, i) => (
              <Rise key={r.name} delay={i * 0.08}>
                <article className="group flex h-full flex-col">
                  <Bezel shell="rgba(0,0,0,0.04)" ring="rgba(0,0,0,0.06)">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.img} alt={r.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                  </Bezel>
                  <div className="px-2 pt-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl font-semibold" style={{ color: INK }}>{r.name}</h3>
                      <span className="text-sm" style={{ color: MUTED }}>{r.size}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span key={t} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: "rgba(15,61,58,0.15)", color: TEAL }}>{t}</span>
                      ))}
                    </div>
                    <p className="mt-5 font-display text-xl font-semibold" style={{ color: TEAL }}>
                      {r.price} <span className="text-sm font-normal" style={{ color: MUTED }}>/ malam</span>
                    </p>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Experience — bento */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Rise className="max-w-2xl">
          <Eyebrow color={GOLD}>Pengalaman</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Lebih dari sekadar menginap</h2>
        </Rise>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Rise key={a.title} delay={i * 0.05} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div className="flex h-full flex-col rounded-[1.75rem] border bg-white p-7" style={{ borderColor: "rgba(0,0,0,0.05)", boxShadow: "0 24px 60px -40px rgba(15,61,58,0.35)" }}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(184,145,90,0.14)" }}>
                  <a.icon className="h-6 w-6" strokeWidth={1.25} style={{ color: GOLD }} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold" style={{ color: INK }}>{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </Rise>
          ))}
        </div>
      </section>

      {/* Gallery — asymmetric */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32">
        <Rise>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Bezel className="col-span-2 row-span-2" shell="rgba(0,0,0,0.04)" ring="rgba(0,0,0,0.06)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={gallery[0]} alt="Galeri" className="h-full min-h-[260px] w-full object-cover" />
            </Bezel>
            {gallery.slice(1).map((g, i) => (
              <Bezel key={i} shell="rgba(0,0,0,0.04)" ring="rgba(0,0,0,0.06)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g} alt="Galeri" loading="lazy" className="aspect-square w-full object-cover" />
              </Bezel>
            ))}
          </div>
        </Rise>
      </section>

      {/* Testimonial — single large */}
      <section style={{ background: TEAL }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <Rise>
            <Eyebrow color="#e9d8b8" className="bg-white/10">Kata Tamu</Eyebrow>
            <blockquote className="mt-8 font-display text-3xl font-medium leading-[1.25] text-white sm:text-4xl lg:text-5xl">
              &ldquo;Tempat paling tenang yang pernah kami tinggali. Pelayanannya membuat kami merasa istimewa sejak menit pertama.&rdquo;
            </blockquote>
            <p className="mt-8 text-white/70">Damar &amp; Sekar — menginap September 2024</p>
          </Rise>
        </div>
      </section>

      {/* Big CTA */}
      <section className="relative isolate overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux("photo-1571896349842-33c89424de2d", 1600)} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "rgba(8,28,25,0.7)" }} />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <Rise>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Rancang menginap Anda
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/80">
              Ketersediaan real-time dan pemesanan langsung — tanpa menunggu balasan.
            </p>
            <div className="mt-9 flex justify-center">
              <CTA bg="#ffffff" fg={TEAL}>Cari Kamar</CTA>
            </div>
          </Rise>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0b2622" }} className="text-white/65">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <p className="font-display text-xl font-semibold text-white">Amara Hotel</p>
            <p className="mt-3 text-sm leading-relaxed">Boutique resort tepi laut dengan pelayanan yang hangat dan tenang.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Jelajahi</p>
            <ul className="mt-4 space-y-2.5 text-sm">{["Kamar", "Pengalaman", "Galeri", "Promo"].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Perusahaan</p>
            <ul className="mt-4 space-y-2.5 text-sm">{["Tentang", "Karier", "Kebijakan", "Kontak"].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Kontak</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> 0361-123-456</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> stay@amarahotel.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> Pantai Indah, Bali</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45">Demo konsep oleh Wafinix</div>
      </footer>
    </div>
  );
}
