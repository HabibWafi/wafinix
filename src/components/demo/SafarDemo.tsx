"use client";

import {
  ShieldCheck,
  Users,
  Plane,
  Headphones,
  BookOpen,
  Building2,
  Stethoscope,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Check,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Rise, Eyebrow, Bezel, CTA } from "@/components/demo/kit";
import { ux } from "@/lib/unsplash";

// Serene devotional palette — deep emerald + warm gold on warm paper.
const CREAM = "#f5f1e8";
const SAND = "#ece4d4";
const EMER = "#0d3a2c"; // emerald ink / primary
const DEEP = "#06231a"; // overlay & footer
const GOLD = "#c3a052";
const MUTED = "#52605a";
const LIGHTGOLD = "#e8d6a8";

// Verified Islamic imagery (Kaaba, Masjidil Haram, Masjid Nabawi, tawaf, Al-Quran).
const IMG = {
  kaabaNight: "photo-1513072064285-240f87fa81e8", // Kaaba at night, pilgrims in rows
  kaabaTower: "photo-1565330770968-0240c0046ce3", // Kaaba + Makkah Clock Tower
  kaabaClose: "photo-1694112901375-1ad46056820d", // Kaaba close-up, gold kiswah
  tawaf: "photo-1553755088-ef1973c7b4a1", // Kaaba + huge tawaf crowd
  nabawi: "photo-1591604129939-f1efa4d9f7fa", // Masjid Nabawi green dome
  blueMosque: "photo-1519817650390-64a93db51149", // Blue Mosque at sunset
  quran: "photo-1542816417-0983c9c9ad53", // Al-Quran with flowers
};

const navLinks = ["Beranda", "Paket", "Keunggulan", "Alur", "Galeri", "Kontak"];

const departures = [
  { name: "Umroh Reguler", date: "12 Mei 2026", seat: "Sisa 8 kursi" },
  { name: "Umroh Plus Thaif", date: "9 Juni 2026", seat: "Sisa 14 kursi" },
  { name: "Haji Plus 1447 H", date: "Pendaftaran dibuka", seat: "Kuota terbatas" },
];

const trust = [
  { icon: ShieldCheck, title: "Izin Resmi PPIU", sub: "SK Kemenag No. 1234/2021" },
  { icon: Users, title: "Pembimbing Bersanad", sub: "Ustadz berpengalaman" },
  { icon: Plane, title: "Keberangkatan Pasti", sub: "Jadwal terjamin" },
  { icon: Headphones, title: "Pendampingan 24/7", sub: "Sebelum & selama ibadah" },
];

const stats = [
  { value: "10.000+", label: "Jamaah diberangkatkan" },
  { value: "12", label: "Tahun melayani" },
  { value: "4.9", label: "Rating jamaah" },
];

const featured = {
  badge: "TERPOPULER",
  title: "Umroh Reguler",
  img: IMG.kaabaClose,
  days: "9 Hari",
  hotel: "Hotel Bintang 4",
  distance: "± 300 m dari Masjidil Haram",
  price: "Rp 26.900.000",
  features: [
    "Penerbangan PP maskapai resmi",
    "Hotel berjarak dekat dari Masjidil Haram & Nabawi",
    "Bimbingan manasik 6 kali pertemuan",
    "Muthawif & tim pendamping berpengalaman",
    "Perlengkapan umroh lengkap + air zamzam",
  ],
};

const packages = [
  {
    badge: "UMROH",
    title: "Umroh Plus Thaif",
    img: IMG.blueMosque,
    days: "12 Hari",
    hotel: "Bintang 4",
    price: "Rp 32.900.000",
    features: ["City tour Thaif", "Ziarah lengkap Madinah", "Muthawif berpengalaman"],
  },
  {
    badge: "HAJI",
    title: "Haji Plus",
    img: IMG.nabawi,
    days: "25 Hari",
    hotel: "Bintang 5",
    price: "Rp 98.500.000",
    features: ["Kuota resmi Kemenag", "Tenda VIP Mina & Arafah", "Catering Indonesia"],
  },
  {
    badge: "EKSKLUSIF",
    title: "Haji Furoda",
    img: IMG.tawaf,
    days: "16 Hari",
    hotel: "Bintang 5",
    price: "Rp 185.000.000",
    features: ["Tanpa antre, visa furoda resmi", "Layanan VIP eksklusif", "Hotel termewah di Tanah Suci"],
  },
];

const advantages = [
  {
    icon: BookOpen,
    title: "Bimbingan Manasik Intensif",
    desc: "Manasik rutin sebelum keberangkatan oleh pembimbing bersanad, hingga setiap jamaah mantap menjalankan rukun ibadah.",
  },
  {
    icon: Building2,
    title: "Hotel Berjarak Dekat",
    desc: "Akomodasi nyaman yang hanya beberapa langkah dari Masjidil Haram dan Masjid Nabawi.",
  },
  {
    icon: Plane,
    title: "Penerbangan Resmi & Nyaman",
    desc: "Maskapai resmi dengan jadwal pasti, sehingga perjalanan terasa tenang sejak dari tanah air.",
  },
  {
    icon: Stethoscope,
    title: "Muthawif & Tim Medis",
    desc: "Pendamping ramah dan tim kesehatan yang siaga menjaga setiap jamaah di sepanjang ibadah.",
  },
];

const steps = [
  { title: "Konsultasi", desc: "Pilih paket & jadwal bersama tim kami tanpa biaya." },
  { title: "Pendaftaran", desc: "Daftar dan amankan kursi dengan uang muka." },
  { title: "Lengkapi Dokumen", desc: "Paspor, foto, dan persyaratan keberangkatan." },
  { title: "Pelunasan", desc: "Selesaikan pembayaran sebelum jadwal berangkat." },
  { title: "Manasik & Berangkat", desc: "Ikuti manasik, lalu menuju Tanah Suci." },
];

const galleryFeatured = IMG.kaabaNight;
const gallerySide = [IMG.nabawi, IMG.tawaf];

const featuredTesti = {
  quote:
    "Pelayanannya amanah dan sabar membimbing kami yang baru pertama kali. Alhamdulillah, ibadah lancar sejak pendaftaran hingga kembali ke tanah air.",
  name: "Bapak Hadi & keluarga",
  role: "Jamaah Umroh 2024",
};

const sideTestis = [
  { quote: "Hotel dekat, makanan Indonesia, muthawif ramah. Insya Allah mabrur.", name: "Ibu Salmah", role: "Jamaah Haji Plus" },
  { quote: "Dari pendaftaran sampai pulang semuanya jelas dan terjadwal rapi.", name: "Bapak Rizal", role: "Jamaah Umroh Plus" },
];

export function SafarDemo() {
  return (
    <div className="min-h-screen" style={{ background: CREAM, color: MUTED }}>
      <DemoBanner />

      {/* Floating emerald-glass island nav */}
      <header className="absolute inset-x-0 top-[44px] z-30 px-4">
        <div
          className="mx-auto mt-4 flex max-w-5xl items-center justify-between gap-3 rounded-full border px-5 py-2.5 backdrop-blur-xl"
          style={{ background: "rgba(8,38,29,0.55)", borderColor: "rgba(255,255,255,0.14)" }}
        >
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold text-white">Safar Mabrur</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] sm:inline" style={{ color: LIGHTGOLD }}>
              Haji &amp; Umroh
            </span>
          </span>
          <nav className="hidden gap-7 text-sm font-medium text-white/85 lg:flex">
            {navLinks.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </nav>
          <span className="rounded-full px-4 py-2 text-xs font-semibold sm:text-sm" style={{ background: GOLD, color: EMER }}>
            Konsultasi Gratis
          </span>
        </div>
      </header>

      {/* Cinematic centered hero */}
      <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux(IMG.kaabaNight, 1800)} alt="Suasana Masjidil Haram dan Ka'bah" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, rgba(4,20,15,0.72) 0%, rgba(4,20,15,0.45) 45%, rgba(4,20,15,0.88) 100%)" }}
        />
        <div className="mx-auto w-full max-w-3xl px-6 pt-40 pb-16 text-center sm:pb-24">
          <div className="[text-shadow:0_2px_28px_rgba(0,0,0,0.5)]">
            <Eyebrow color={LIGHTGOLD} className="bg-white/10 backdrop-blur-sm">
              Amanah · Nyaman · Insya Allah Mabrur
            </Eyebrow>
            <h1 className="mx-auto mt-6 max-w-2xl font-display text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Setiap langkah ibadah, kami dampingi
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
              Penyelenggara Haji &amp; Umroh berizin resmi yang membimbing Anda dengan tulus — dari niat di tanah air hingga kembali membawa kemabruran.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CTA bg={GOLD} fg={EMER}>Lihat Paket</CTA>
              <span className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white">
                Konsultasi Gratis
              </span>
            </div>
          </div>

          {/* Departure schedule strip */}
          <Bezel className="mx-auto mt-14 max-w-4xl" shell="rgba(255,255,255,0.12)" ring="rgba(255,255,255,0.22)" radius={1.75}>
            <div className="grid gap-px sm:grid-cols-3" style={{ background: "rgba(6,35,26,0.55)", backdropFilter: "blur(8px)" }}>
              {departures.map((d) => (
                <div key={d.name} className="px-5 py-4 text-left">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color: LIGHTGOLD }} />
                    <p className="text-[11px] uppercase tracking-wide text-white/55">{d.date}</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-white">{d.name}</p>
                  <p className="mt-0.5 text-xs" style={{ color: LIGHTGOLD }}>{d.seat}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-3" style={{ background: EMER }}>
              <span className="text-sm text-white/70">Jadwal keberangkatan terdekat</span>
              <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold" style={{ color: EMER }}>Lihat semua jadwal</span>
            </div>
          </Bezel>
        </div>
      </section>

      {/* Legality / trust row */}
      <section style={{ background: EMER }}>
        <div className="mx-auto grid max-w-6xl gap-7 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((b) => (
            <div key={b.title} className="flex items-center gap-3.5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl" style={{ background: "rgba(195,160,82,0.16)" }}>
                <b.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: GOLD }} />
              </span>
              <div>
                <p className="font-semibold text-white">{b.title}</p>
                <p className="text-sm text-white/65">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial "Tentang Kami" — image left, devotional text right */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Rise>
            <Bezel shell="rgba(13,58,44,0.07)" ring="rgba(13,58,44,0.1)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ux(IMG.kaabaTower, 1000)} alt="Ka'bah dan Menara Jam Makkah" className="aspect-[4/5] w-full object-cover" />
            </Bezel>
          </Rise>
          <Rise delay={0.12}>
            <Eyebrow color={GOLD}>Tentang Kami</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl" style={{ color: EMER }}>
              Mendampingi ibadah Anda sejak 2012
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Safar Mabrur lahir dari satu keyakinan: ibadah yang tenang berawal dari persiapan yang matang dan pendampingan yang tulus. Lebih dari sepuluh ribu jamaah telah kami berangkatkan dengan pelayanan yang ramah, transparan, dan sesuai syariah.
            </p>

            <figure className="mt-7 border-l-2 pl-5" style={{ borderColor: GOLD }}>
              <blockquote className="font-display text-xl italic leading-relaxed" style={{ color: EMER }}>
                &ldquo;Umrah ke umrah berikutnya menjadi penghapus dosa di antara keduanya.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-sm" style={{ color: MUTED }}>HR. Bukhari &amp; Muslim</figcaption>
            </figure>

            <div className="mt-9 grid max-w-md grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: EMER }}>{s.value}</p>
                  <p className="mt-1 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Rise>
        </div>
      </section>

      {/* Packages — featured flagship + supporting grid */}
      <section style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Rise className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow color={GOLD}>Paket Pilihan</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: EMER }}>Paket Haji &amp; Umroh</h2>
            </div>
            <span className="text-sm font-semibold" style={{ color: EMER }}>Bandingkan semua paket →</span>
          </Rise>

          {/* Featured */}
          <Rise className="mt-12">
            <article className="grid gap-0 overflow-hidden rounded-[2rem] border bg-white lg:grid-cols-2" style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 40px 90px -60px rgba(13,58,44,0.6)" }}>
              <div className="relative min-h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ux(featured.img, 1100)} alt={featured.title} className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide" style={{ background: GOLD, color: EMER }}>
                  {featured.badge}
                </span>
              </div>
              <div className="flex flex-col p-8 sm:p-10">
                <h3 className="font-display text-3xl font-semibold" style={{ color: EMER }}>{featured.title}</h3>
                <p className="mt-2 text-sm" style={{ color: MUTED }}>{featured.days} · {featured.hotel} · {featured.distance}</p>
                <ul className="mt-6 space-y-2.5">
                  {featured.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} style={{ color: GOLD }} />
                      <span style={{ color: MUTED }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                  <div>
                    <p className="text-xs uppercase tracking-wide" style={{ color: MUTED }}>Mulai dari</p>
                    <p className="font-display text-3xl font-semibold" style={{ color: EMER }}>
                      {featured.price} <span className="text-sm font-normal" style={{ color: MUTED }}>/ jamaah</span>
                    </p>
                  </div>
                  <CTA bg={EMER} fg="#ffffff">Pilih Paket</CTA>
                </div>
              </div>
            </article>
          </Rise>

          {/* Supporting grid */}
          <div className="mt-8 grid gap-7 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Rise key={p.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white" style={{ borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 24px 60px -45px rgba(13,58,44,0.5)" }}>
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ux(p.img, 800)} alt={p.title} loading="lazy" className="h-48 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white" style={{ background: "rgba(13,58,44,0.85)", backdropFilter: "blur(4px)" }}>
                      {p.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold" style={{ color: EMER }}>{p.title}</h3>
                    <p className="mt-1 text-xs" style={{ color: MUTED }}>{p.days} · Hotel {p.hotel}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} style={{ color: GOLD }} />
                          <span style={{ color: MUTED }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <p className="font-display text-xl font-semibold" style={{ color: EMER }}>{p.price}</p>
                      <span className="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold" style={{ background: SAND, color: EMER }}>
                        Pilih Paket
                      </span>
                    </div>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan — supporting image + numbered advantages */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Rise>
            <Eyebrow color={GOLD}>Keunggulan</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl" style={{ color: EMER }}>
              Mengapa jamaah mempercayai kami
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed">
              Setiap detail kami siapkan agar Anda cukup fokus pada ibadah, dan kami yang mengurus selebihnya.
            </p>
            <Bezel className="mt-9" shell="rgba(13,58,44,0.07)" ring="rgba(13,58,44,0.1)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ux(IMG.quran, 900)} alt="Al-Qur'an" className="aspect-[4/3] w-full object-cover" />
            </Bezel>
          </Rise>

          <div className="grid gap-px overflow-hidden rounded-[1.75rem] sm:grid-cols-2" style={{ background: "rgba(13,58,44,0.08)" }}>
            {advantages.map((a, i) => (
              <Rise key={a.title} delay={i * 0.07}>
                <div className="flex h-full flex-col bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-semibold" style={{ color: GOLD }}>0{i + 1}</span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: "rgba(13,58,44,0.08)" }}>
                      <a.icon className="h-5 w-5" strokeWidth={1.25} style={{ color: EMER }} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold" style={{ color: EMER }}>{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Alur Pendaftaran — connected journey stepper */}
      <section style={{ background: EMER }}>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Rise className="max-w-2xl">
            <Eyebrow color={LIGHTGOLD} className="bg-white/10">Mudah &amp; Jelas</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">Alur pendaftaran</h2>
            <p className="mt-4 max-w-lg text-lg text-white/70">Lima langkah sederhana, dari konsultasi pertama sampai Anda menapak di Tanah Suci.</p>
          </Rise>

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-5 hidden h-px lg:block" style={{ background: "rgba(255,255,255,0.18)" }} />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {steps.map((s, i) => (
                <Rise key={s.title} delay={i * 0.08}>
                  <div className="relative">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold" style={{ background: GOLD, color: EMER }}>
                      {i + 1}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{s.desc}</p>
                  </div>
                </Rise>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeri perjalanan — asymmetric */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Rise className="mb-12 max-w-2xl">
          <Eyebrow color={GOLD}>Galeri Perjalanan</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: EMER }}>Kenangan dari Tanah Suci</h2>
        </Rise>
        <Rise>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr]">
            <Bezel className="row-span-2" shell="rgba(0,0,0,0.05)" ring="rgba(0,0,0,0.07)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ux(galleryFeatured, 1100)} alt="Ka'bah di malam hari" className="h-full min-h-[320px] w-full object-cover" />
            </Bezel>
            {gallerySide.map((g, i) => (
              <Bezel key={i} shell="rgba(0,0,0,0.05)" ring="rgba(0,0,0,0.07)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ux(g, 800)} alt="Suasana ibadah di Tanah Suci" loading="lazy" className="aspect-[16/10] w-full object-cover" />
              </Bezel>
            ))}
          </div>
        </Rise>
      </section>

      {/* Testimonials — featured + stacked */}
      <section style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Rise className="mb-12 max-w-2xl">
            <Eyebrow color={GOLD}>Testimoni</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: EMER }}>Cerita para jamaah</h2>
          </Rise>
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <Rise>
              <figure className="flex h-full flex-col justify-between rounded-[1.75rem] p-9 sm:p-11" style={{ background: EMER }}>
                <div>
                  <div className="flex gap-1" style={{ color: GOLD }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-2xl font-medium leading-[1.35] text-white sm:text-3xl">
                    &ldquo;{featuredTesti.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 text-sm">
                  <span className="font-semibold text-white">{featuredTesti.name}</span>
                  <span className="text-white/55"> · {featuredTesti.role}</span>
                </figcaption>
              </figure>
            </Rise>
            <div className="grid gap-6">
              {sideTestis.map((tm, i) => (
                <Rise key={tm.name} delay={i * 0.08}>
                  <figure className="flex h-full flex-col justify-between rounded-[1.75rem] border bg-white p-7" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                    <div>
                      <div className="flex gap-1" style={{ color: GOLD }}>
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <blockquote className="mt-4 leading-relaxed" style={{ color: EMER }}>&ldquo;{tm.quote}&rdquo;</blockquote>
                    </div>
                    <figcaption className="mt-5 text-sm">
                      <span className="font-semibold" style={{ color: EMER }}>{tm.name}</span>
                      <span style={{ color: MUTED }}> · {tm.role}</span>
                    </figcaption>
                  </figure>
                </Rise>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — full-bleed Masjid Nabawi */}
      <section className="relative isolate overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux(IMG.nabawi, 1600)} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(6,35,26,0.82), rgba(6,35,26,0.72))" }} />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <Rise>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Wujudkan langkah menuju Baitullah
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/80">
              Konsultasikan kebutuhan dan jadwal Anda. Tim kami siap membantu, tanpa biaya dan tanpa terburu-buru.
            </p>
            <div className="mt-9 flex justify-center">
              <CTA bg={GOLD} fg={EMER}>Konsultasi Gratis</CTA>
            </div>
          </Rise>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: DEEP }} className="text-white/65">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <p className="font-display text-xl font-semibold text-white">Safar Mabrur</p>
            <p className="mt-3 text-sm leading-relaxed">Penyelenggara Haji &amp; Umroh resmi yang amanah, mendampingi ibadah Anda sejak 2012.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Paket</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Umroh Reguler", "Umroh Plus Thaif", "Haji Plus", "Haji Furoda"].map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Perusahaan</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Tentang Kami", "Legalitas", "Artikel", "Karier"].map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Kontak</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> 0811-1234-5678</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> info@safarmabrur.id</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45">Demo konsep oleh Wafinix</div>
      </footer>
    </div>
  );
}
