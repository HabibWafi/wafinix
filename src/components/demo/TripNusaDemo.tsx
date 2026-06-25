"use client";

import {
  MapPin,
  CalendarDays,
  Users,
  Star,
  BadgePercent,
  UserRound,
  ShieldCheck,
  Compass,
  Search,
  Check,
  Phone,
  Mail,
  Palmtree,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Rise, Eyebrow, Bezel, CTA } from "@/components/demo/kit";
import { ux } from "@/lib/unsplash";

// Bright, energetic travel palette — turquoise + coral on airy cyan.
const BG = "#edfbfa";
const INK = "#0d3b3b";
const MUTED = "#4c6a6a";
const TEAL = "#0fa6a6";
const CORAL = "#ff6b5e";
const DEEP = "#082b2b"; // footer / overlay

const IMG = {
  diamond: "photo-1573790387438-4da905039392", // Diamond Beach, Nusa Penida (hero)
  padar: "photo-1604560929658-bbc3c2ba6a36", // Padar Island, Komodo
  tanahLot: "photo-1518548419970-58e3b4079ab2", // Tanah Lot, Bali
  bromo: "photo-1749731630653-d9b3f00573ed", // Mount Bromo sunrise
  tobaWide: "photo-1711733524276-14860db960a8", // Lake Toba landscape
  tobaTall: "photo-1733961489354-b46fc5197a2d", // Lake Toba portrait
  kelingking: "photo-1604999565976-8913ad2ddb7c", // Kelingking Beach, Nusa Penida
  lempuyang: "photo-1537953773345-d172ccf13cf1", // Lempuyang "Gates of Heaven", Bali
  flatlay: "photo-1488646953014-85cb44e25828", // travel flatlay (map + camera)
};

const navLinks = ["Beranda", "Paket Tur", "Destinasi", "Promo", "Tentang"];

const badges = [
  { icon: BadgePercent, title: "Harga Terbaik", sub: "Jaminan harga bersahabat" },
  { icon: UserRound, title: "Pemandu Profesional", sub: "Berpengalaman & ramah" },
  { icon: ShieldCheck, title: "Pemesanan Aman", sub: "Cepat & terpercaya" },
  { icon: Compass, title: "Destinasi Terbaik", sub: "Pilihan paling favorit" },
];

const packages = [
  { img: IMG.padar, dur: "4 Hari 3 Malam", title: "Labuan Bajo & Komodo", loc: "Labuan Bajo, NTT", group: "2–10 orang", rating: "4.9", price: "4.250.000" },
  { img: IMG.tanahLot, dur: "3 Hari 2 Malam", title: "Bali Island Escape", loc: "Bali", group: "2–12 orang", rating: "4.8", price: "2.750.000" },
  { img: IMG.bromo, dur: "3 Hari 2 Malam", title: "Bromo Sunrise Tour", loc: "Jawa Timur", group: "2–10 orang", rating: "4.9", price: "1.850.000" },
  { img: IMG.tobaWide, dur: "5 Hari 4 Malam", title: "Danau Toba & Samosir", loc: "Sumatera Utara", group: "2–8 orang", rating: "4.7", price: "5.150.000" },
];

const highlights = ["Kelingking Beach yang ikonik", "Angel's Billabong & Broken Beach", "Snorkeling di Manta Point", "Sunset di Crystal Bay"];

const steps = [
  { n: "01", title: "Pilih Destinasi", desc: "Telusuri paket dan temukan yang paling cocok untukmu." },
  { n: "02", title: "Pesan & Bayar", desc: "Booking mudah dengan pembayaran yang aman." },
  { n: "03", title: "Berangkat", desc: "Nikmati perjalanan — sisanya kami yang urus." },
];

const stats = [
  { value: "50+", label: "Destinasi" },
  { value: "12.000+", label: "Traveler" },
  { value: "4.9", label: "Rating" },
];

const gallery = [IMG.lempuyang, IMG.tobaTall, IMG.kelingking];

const testimonials = [
  { quote: "Itinerary-nya rapi, pemandunya asik. Labuan Bajo jadi pengalaman tak terlupakan!", name: "Dinda A.", trip: "Labuan Bajo & Komodo" },
  { quote: "Harga masuk akal dan semua diurus. Tinggal datang dan menikmati liburan.", name: "Arif R.", trip: "Bali Island Escape" },
  { quote: "Sunrise Bromo-nya juara. Sangat direkomendasikan untuk keluarga.", name: "Keluarga Wijaya", trip: "Bromo Sunrise Tour" },
];

export function TripNusaDemo() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: MUTED }}>
      <DemoBanner />

      {/* Floating island nav */}
      <header className="absolute inset-x-0 top-[44px] z-30 px-4">
        <div
          className="mx-auto mt-4 flex max-w-5xl items-center justify-between gap-3 rounded-full border px-5 py-2.5 backdrop-blur-xl"
          style={{ background: "rgba(255,255,255,0.82)", borderColor: "rgba(255,255,255,0.6)" }}
        >
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold" style={{ color: INK }}>TripNusa</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] sm:inline" style={{ color: CORAL }}>Jelajah Indonesia</span>
          </span>
          <nav className="hidden gap-7 text-sm font-medium lg:flex" style={{ color: INK }}>
            {navLinks.map((n) => <span key={n}>{n}</span>)}
          </nav>
          <span className="rounded-full px-4 py-2 text-xs font-semibold text-white sm:text-sm" style={{ background: CORAL }}>Hubungi Kami</span>
        </div>
      </header>

      {/* Cinematic hero + search */}
      <section className="relative isolate flex min-h-[100dvh] items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux(IMG.diamond, 1800)} alt="Pantai tropis Indonesia" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(6,40,40,0.45) 0%, rgba(6,40,40,0.1) 35%, rgba(6,40,40,0.8) 100%)" }} />
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <div className="max-w-2xl [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">
            <Eyebrow color="#ffffff" className="bg-white/15 backdrop-blur-sm">Liburan Berkesan · Harga Bersahabat</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Jelajahi Indonesia, ciptakan cerita
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/90">
              Dari Komodo hingga Danau Toba — temukan destinasi terbaik Nusantara dalam paket perjalanan yang mudah dan tak terlupakan.
            </p>
          </div>

          {/* Search widget */}
          <Bezel className="mt-10 max-w-4xl" shell="rgba(255,255,255,0.18)" ring="rgba(255,255,255,0.3)" radius={1.75}>
            <div className="grid gap-px sm:grid-cols-4" style={{ background: "rgba(255,255,255,0.95)" }}>
              {[
                { icon: MapPin, label: "Tujuan", value: "Mau ke mana?" },
                { icon: CalendarDays, label: "Tanggal", value: "Pilih tanggal" },
                { icon: Compass, label: "Durasi", value: "Semua durasi" },
                { icon: Users, label: "Tamu", value: "2 Dewasa" },
              ].map((f) => (
                <div key={f.label} className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <f.icon className="h-3.5 w-3.5" strokeWidth={1.75} style={{ color: TEAL }} />
                    <p className="text-[11px] uppercase tracking-wide" style={{ color: MUTED }}>{f.label}</p>
                  </div>
                  <p className="mt-1 text-sm font-medium" style={{ color: INK }}>{f.value}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-3" style={{ background: TEAL }}>
              <span className="text-sm text-white/80">Lebih dari 50 destinasi pilihan</span>
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white" style={{ background: CORAL }}>
                <Search className="h-4 w-4" strokeWidth={2} /> Cari Paket
              </span>
            </div>
          </Bezel>
        </div>
      </section>

      {/* Trust badges */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.title} className="flex items-center gap-3.5 rounded-2xl border bg-white p-4" style={{ borderColor: "rgba(15,166,166,0.15)" }}>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(15,166,166,0.12)" }}>
                <b.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: TEAL }} />
              </span>
              <div>
                <p className="font-semibold" style={{ color: INK }}>{b.title}</p>
                <p className="text-sm">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular packages */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Rise className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow color={CORAL}>Paket Pilihan</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Petualangan paling dicari</h2>
          </div>
          <span className="text-sm font-semibold" style={{ color: TEAL }}>Lihat semua paket →</span>
        </Rise>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => (
            <Rise key={p.title} delay={i * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-white" style={{ borderColor: "rgba(15,166,166,0.14)", boxShadow: "0 22px 50px -38px rgba(13,59,59,0.55)" }}>
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ux(p.img, 800)} alt={p.title} loading="lazy" className="h-44 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white" style={{ background: CORAL }}>{p.dur}</span>
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold" style={{ color: INK }}>
                    <Star className="h-3 w-3 fill-current" style={{ color: "#f5b301" }} /> {p.rating}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold" style={{ color: INK }}>{p.title}</h3>
                  <div className="mt-2 space-y-1 text-xs" style={{ color: MUTED }}>
                    <p className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" strokeWidth={1.75} style={{ color: TEAL }} /> {p.loc}</p>
                    <p className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" strokeWidth={1.75} style={{ color: TEAL }} /> {p.group}</p>
                  </div>
                  <div className="mt-auto flex items-end justify-between gap-2 pt-5">
                    <div>
                      <p className="text-[11px]" style={{ color: MUTED }}>mulai dari</p>
                      <p className="font-display text-lg font-semibold" style={{ color: INK }}>
                        <span className="text-xs font-normal">IDR </span>{p.price}
                      </p>
                    </div>
                    <span className="rounded-full px-3.5 py-2 text-xs font-semibold text-white" style={{ background: TEAL }}>Detail</span>
                  </div>
                </div>
              </article>
            </Rise>
          ))}
        </div>
      </section>

      {/* Featured destination spotlight */}
      <section style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Rise>
              <Eyebrow color={CORAL}>Destinasi Sorotan</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl" style={{ color: INK }}>
                Nusa Penida, surga tersembunyi di tenggara Bali
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed">
                Tebing dramatis, laguna biru, dan pantai yang seakan dilukis. Satu paket, banyak momen yang layak diabadikan.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: INK }}>
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(15,166,166,0.14)" }}>
                      <Check className="h-3 w-3" strokeWidth={2.5} style={{ color: TEAL }} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center gap-8">
                <CTA bg={TEAL} fg="#ffffff">Lihat Paket Nusa Penida</CTA>
                <div className="flex gap-7">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-2xl font-semibold" style={{ color: INK }}>{s.value}</p>
                      <p className="text-xs" style={{ color: MUTED }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Rise>
            <Rise delay={0.12}>
              <Bezel shell="rgba(15,166,166,0.1)" ring="rgba(15,166,166,0.18)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ux(IMG.kelingking, 1000)} alt="Nusa Penida" className="aspect-[4/5] w-full object-cover" />
              </Bezel>
            </Rise>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Rise>
            <Bezel shell="rgba(255,107,94,0.1)" ring="rgba(255,107,94,0.18)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ux(IMG.flatlay, 900)} alt="Rencana perjalanan" className="aspect-[4/3] w-full object-cover" />
            </Bezel>
          </Rise>
          <Rise delay={0.1}>
            <Eyebrow color={CORAL}>Mudah & Cepat</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl" style={{ color: INK }}>Rencanakan dalam 3 langkah</h2>
            <div className="mt-9 space-y-7">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5">
                  <span className="font-display text-2xl font-semibold" style={{ color: TEAL }}>{s.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold" style={{ color: INK }}>{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Rise>
        </div>
      </section>

      {/* Destination gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <Rise className="mb-10 max-w-2xl">
          <Eyebrow color={CORAL}>Galeri Nusantara</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Keindahan tak ada habisnya</h2>
        </Rise>
        <Rise>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1.3fr]">
            <Bezel className="row-span-2" shell="rgba(15,166,166,0.1)" ring="rgba(15,166,166,0.18)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ux(gallery[0], 900)} alt="Destinasi Indonesia" className="h-full min-h-[320px] w-full object-cover" />
            </Bezel>
            {gallery.slice(1).map((g, i) => (
              <Bezel key={i} shell="rgba(15,166,166,0.1)" ring="rgba(15,166,166,0.18)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ux(g, 800)} alt="Destinasi Indonesia" loading="lazy" className="aspect-[16/10] w-full object-cover" />
              </Bezel>
            ))}
          </div>
        </Rise>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Rise className="mb-12 max-w-2xl">
            <Eyebrow color={CORAL}>Cerita Traveler</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Mereka sudah berpetualang</h2>
          </Rise>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Rise key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col justify-between rounded-[1.5rem] border p-7" style={{ borderColor: "rgba(15,166,166,0.16)", background: BG }}>
                  <div>
                    <div className="flex gap-1" style={{ color: "#f5b301" }}>
                      {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                    </div>
                    <blockquote className="mt-4 leading-relaxed" style={{ color: INK }}>&ldquo;{t.quote}&rdquo;</blockquote>
                  </div>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold" style={{ color: INK }}>{t.name}</span>
                    <span style={{ color: MUTED }}> · {t.trip}</span>
                  </figcaption>
                </figure>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — vibrant gradient band */}
      <section className="relative isolate overflow-hidden" style={{ background: `linear-gradient(120deg, ${TEAL} 0%, #0b8a8a 55%, ${CORAL} 140%)` }}>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <Rise>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Mulai petualanganmu hari ini
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/85">
              Pilih destinasi impianmu, kami siapkan perjalanannya. Tanpa ribet, tinggal berangkat.
            </p>
            <div className="mt-9 flex justify-center">
              <CTA bg="#ffffff" fg={TEAL}>Lihat Semua Paket</CTA>
            </div>
          </Rise>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: DEEP }} className="text-white/65">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <span className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-semibold text-white">TripNusa</span>
              <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: CORAL }}>Jelajah Indonesia</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">Petualangan dimulai di sini — jelajahi Nusantara bersama kami.</p>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <Palmtree className="h-4 w-4" strokeWidth={1.25} style={{ color: CORAL }} />
              <span>50+ destinasi se-Indonesia</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Jelajahi</p>
            <ul className="mt-4 space-y-2.5 text-sm">{["Paket Tur", "Destinasi", "Promo", "Open Trip"].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Perusahaan</p>
            <ul className="mt-4 space-y-2.5 text-sm">{["Tentang Kami", "Blog", "Karier", "FAQ"].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Kontak</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.25} style={{ color: CORAL }} /> 0812-3456-7890</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.25} style={{ color: CORAL }} /> halo@tripnusa.id</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" strokeWidth={1.25} style={{ color: CORAL }} /> Denpasar, Bali</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/45">Demo konsep oleh Wafinix</div>
      </footer>
    </div>
  );
}
