"use client";

import {
  ShieldCheck,
  Users,
  Plane,
  Headphones,
  BookOpen,
  Building2,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Reveal } from "@/components/motion/Reveal";
import { ux } from "@/lib/unsplash";

const GREEN = "#0e3a2f";
const GOLD = "#c9a227";

const trust = [
  { icon: ShieldCheck, title: "Izin Resmi", sub: "PPIU No. 1234 Tahun 2021" },
  { icon: Users, title: "Pembimbing", sub: "Berpengalaman & Profesional" },
  { icon: Plane, title: "Keberangkatan Pasti", sub: "Jadwal Terpercaya" },
  { icon: Headphones, title: "Layanan 24/7", sub: "Siap Melayani Anda" },
];

const stats = [
  { value: "10.000+", label: "Jamaah Berangkat" },
  { value: "12+", label: "Tahun Pengalaman" },
  { value: "4.9/5", label: "Kepuasan Jamaah" },
];

const packages = [
  {
    badge: "UMROH",
    title: "Umroh Reguler",
    img: ux("photo-1564769662533-4f00a87b4056", 800),
    days: "9 Hari",
    hotel: "Hotel Bintang 4",
    price: "Rp 26.900.000",
    features: ["Pesawat PP", "Hotel dekat Masjid", "Bimbingan manasik"],
  },
  {
    badge: "UMROH",
    title: "Umroh Plus Thaif",
    img: ux("photo-1542816417-0983c9c9ad53", 800),
    days: "12 Hari",
    hotel: "Hotel Bintang 4",
    price: "Rp 32.900.000",
    features: ["City tour Thaif", "Ziarah lengkap", "Muthawif berpengalaman"],
  },
  {
    badge: "HAJI",
    title: "Haji Plus",
    img: ux("photo-1591604129939-f1efa4d9f7fa", 800),
    days: "25 Hari",
    hotel: "Hotel Bintang 5",
    price: "Rp 98.500.000",
    features: ["Kuota resmi", "Tenda VIP Mina", "Catering Indonesia"],
  },
  {
    badge: "HAJI",
    title: "Haji Furoda",
    img: ux("photo-1519817650390-64a93db51149", 800),
    days: "16 Hari",
    hotel: "Hotel Bintang 5",
    price: "Rp 185.000.000",
    features: ["Tanpa antre", "Visa furoda resmi", "Layanan eksklusif"],
  },
];

const features = [
  { icon: BookOpen, title: "Bimbingan Manasik", desc: "Manasik rutin sebelum keberangkatan oleh ustadz berpengalaman." },
  { icon: Building2, title: "Hotel Dekat Masjid", desc: "Akomodasi nyaman berjarak dekat dari Masjidil Haram & Nabawi." },
  { icon: Plane, title: "Penerbangan Nyaman", desc: "Maskapai resmi dengan jadwal pasti dan layanan terbaik." },
  { icon: Users, title: "Muthawif Berpengalaman", desc: "Pendamping ramah yang membimbing setiap langkah ibadah Anda." },
];

const steps = [
  { title: "Konsultasi", desc: "Pilih paket & jadwal bersama tim kami." },
  { title: "Pendaftaran", desc: "Daftar dan bayar uang muka." },
  { title: "Lengkapi Dokumen", desc: "Paspor, foto, dan persyaratan lain." },
  { title: "Pelunasan", desc: "Selesaikan pembayaran sebelum keberangkatan." },
  { title: "Manasik & Berangkat", desc: "Ikuti manasik, lalu menuju Tanah Suci." },
];

const testimonials = [
  { quote: "Pelayanannya amanah dan sabar membimbing kami yang baru pertama. Alhamdulillah lancar.", name: "Bapak Hadi", role: "Jamaah Umroh 2024" },
  { quote: "Hotel dekat, makanan Indonesia, muthawif ramah. Insya Allah mabrur.", name: "Ibu Salmah", role: "Jamaah Haji Plus" },
  { quote: "Dari pendaftaran sampai pulang semua jelas dan terjadwal. Sangat profesional.", name: "Bapak Rizal", role: "Jamaah Umroh Plus" },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full px-6 py-3 font-semibold" style={{ background: GOLD, color: GREEN }}>
      {children}
    </span>
  );
}

export function SafarDemo() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#4a5650]">
      <DemoBanner />

      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6">
        <span className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-semibold" style={{ color: GREEN }}>
            Safar Mabrur
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] sm:inline" style={{ color: GOLD }}>
            Haji &amp; Umroh
          </span>
        </span>
        <nav className="hidden gap-6 text-sm font-medium lg:flex">
          {["Beranda", "Paket", "Layanan", "Tentang Kami", "Artikel", "Kontak"].map((n, i) => (
            <span key={n} style={i === 0 ? { color: GOLD } : undefined}>{n}</span>
          ))}
        </nav>
        <span className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold text-white sm:text-sm" style={{ background: GREEN }}>
          Konsultasi Gratis
        </span>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux("photo-1591604129939-f1efa4d9f7fa", 1600)} alt="Kaaba" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a261e]/90 via-[#0a261e]/65 to-[#0a261e]/25" />
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-xl [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]">
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: GOLD }}>
              Amanah, Nyaman, Insyaallah Mabrur
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Perjalanan Ibadah, Menuju Mabrur
            </h1>
            <p className="mt-4 max-w-md text-lg text-white/90">
              Kami membimbing setiap langkah ibadah Anda dengan amanah dan pelayanan terbaik, dari pendaftaran hingga kembali ke Tanah Air.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Pill>
                <span className="inline-flex items-center gap-2">Lihat Paket <ArrowRight className="h-4 w-4" /></span>
              </Pill>
              <span className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">
                Konsultasi Gratis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: GREEN }}>
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <b.icon className="h-7 w-7 shrink-0" style={{ color: GOLD }} strokeWidth={1.6} />
              <div>
                <p className="font-semibold text-white">{b.title}</p>
                <p className="text-sm text-white/70">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ux("photo-1564769662533-4f00a87b4056", 900)} alt="Masjid" className="aspect-[4/3] w-full rounded-[1.75rem] object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: GOLD }}>Tentang Kami</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl" style={{ color: GREEN }}>
              Mendampingi ibadah Anda sejak 2012
            </h2>
            <p className="mt-4 leading-relaxed">
              Safar Mabrur adalah penyelenggara perjalanan ibadah Haji &amp; Umroh berizin resmi yang amanah. Kami percaya ibadah yang tenang lahir dari persiapan yang matang dan pendampingan yang tulus.
            </p>
            <p className="mt-3 leading-relaxed">
              Lebih dari sepuluh ribu jamaah telah kami berangkatkan dengan pelayanan yang ramah, transparan, dan sesuai syariah.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold sm:text-3xl" style={{ color: GREEN }}>{s.value}</p>
                  <p className="mt-1 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: GOLD }}>Paket Pilihan</p>
            <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl" style={{ color: GREEN }}>
              Paket Haji &amp; Umroh Pilihan
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-[#f4f1ea] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)]">
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.title} loading="lazy" className="h-40 w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white" style={{ background: GREEN }}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-semibold" style={{ color: GREEN }}>{p.title}</h3>
                    <p className="mt-1 text-xs text-[#4a5650]/70">{p.days} · {p.hotel}</p>
                    <ul className="mt-3 space-y-1.5 text-sm">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: GOLD }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 font-display text-lg font-semibold" style={{ color: GREEN }}>
                      {p.price} <span className="text-xs font-normal text-[#4a5650]/60">/pax</span>
                    </p>
                    <span className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white" style={{ background: GREEN }}>
                      Pilih Paket
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: GOLD }}>Keunggulan</p>
          <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl" style={{ color: GREEN }}>
            Mengapa memilih Safar Mabrur
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(201,162,39,0.15)" }}>
                  <f.icon className="h-6 w-6" style={{ color: GOLD }} />
                </span>
                <h3 className="mt-4 font-semibold" style={{ color: GREEN }}>{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: GOLD }}>Mudah &amp; Jelas</p>
            <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl" style={{ color: GREEN }}>
              Alur Pendaftaran
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-black/5 bg-[#f4f1ea] p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full font-display font-semibold text-white" style={{ background: GREEN }}>
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-semibold" style={{ color: GREEN }}>{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: GOLD }}>Testimoni</p>
          <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl" style={{ color: GREEN }}>
            Cerita para jamaah
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <Reveal key={tm.name} delay={i * 0.05}>
              <figure className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-7">
                <div className="flex gap-0.5" style={{ color: GOLD }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed" style={{ color: GREEN }}>
                  &ldquo;{tm.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold" style={{ color: GREEN }}>{tm.name}</span>
                  <span className="text-[#4a5650]/70"> · {tm.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden" style={{ background: GREEN }}>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Wujudkan ibadah ke Tanah Suci bersama kami
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Konsultasikan kebutuhan dan jadwal Anda. Tim kami siap membantu tanpa biaya.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold" style={{ background: GOLD, color: GREEN }}>
              Konsultasi Gratis <ArrowRight className="h-4 w-4" />
            </span>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a261e] text-white/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-white">Safar Mabrur</p>
            <p className="mt-2 text-sm">Penyelenggara Haji &amp; Umroh resmi yang amanah, sejak 2012.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Paket</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Umroh Reguler</li><li>Umroh Plus</li><li>Haji Plus</li><li>Haji Furoda</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Perusahaan</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Tentang Kami</li><li>Legalitas</li><li>Artikel</li><li>Karier</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Kontak</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: GOLD }} /> 0811-1234-5678</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" style={{ color: GOLD }} /> info@safarmabrur.id</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: GOLD }} /> Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50">
          Demo konsep oleh Wafinix
        </div>
      </footer>
    </div>
  );
}
