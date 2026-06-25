"use client";

import {
  MapPin,
  Home,
  Building2,
  Trees,
  Store,
  BedDouble,
  Bath,
  Maximize,
  Search,
  ShieldCheck,
  BadgeCheck,
  Handshake,
  Star,
  Check,
  Phone,
  Mail,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Rise, Eyebrow, Bezel, CTA } from "@/components/demo/kit";
import { ux } from "@/lib/unsplash";

// Clean property-portal palette — navy + gold on cool light.
const BG = "#f3f5f8";
const SURFACE = "#ffffff";
const NAVY = "#1f3a8a"; // primary
const NAVYDEEP = "#15265c"; // bands / footer
const INK = "#1f2a44";
const MUTED = "#566074";
const GOLD = "#e0a800"; // accent

const IMG = {
  luxury: "photo-1600596542815-ffad4c1539a9", // luxury white house + pool (hero)
  bintaro: "photo-1564013799919-ab600027ffc6", // white 2-story + pool
  dago: "photo-1512917774080-9991f1c4c750", // modern white villa
  bukit: "photo-1568605114967-8130f3a36994", // wood house at dusk
  apartment: "photo-1755896487242-23cb0847e493", // apartment facade
  interior: "photo-1746549859958-faa2558a765c", // modern living room
};

const navLinks = ["Beranda", "Jual", "Sewa", "Agen", "Tentang"];

const categories = [
  { icon: Home, title: "Rumah", count: "1.240 listing" },
  { icon: Building2, title: "Apartemen", count: "860 listing" },
  { icon: Trees, title: "Tanah", count: "430 listing" },
  { icon: Store, title: "Ruko", count: "290 listing" },
];

const featured = {
  img: IMG.interior,
  status: "Dijual",
  title: "Hunian premium di jantung kota",
  loc: "Menteng, Jakarta Pusat",
  price: "Rp 5,9 M",
  beds: "5",
  baths: "4",
  area: "320 m²",
  highlights: ["Sistem smart home", "Carport 2 mobil", "Taman pribadi", "Dekat sekolah & akses tol"],
};

const listings = [
  { img: IMG.bintaro, status: "Dijual", title: "Rumah Modern Bintaro", loc: "Tangerang Selatan", price: "Rp 2,4 M", beds: "4", baths: "3", area: "220 m²" },
  { img: IMG.dago, status: "Dijual", title: "Villa Asri Dago", loc: "Bandung", price: "Rp 1,8 M", beds: "3", baths: "2", area: "180 m²" },
  { img: IMG.bukit, status: "Dijual", title: "Rumah Tepi Bukit", loc: "Lembang, Bandung", price: "Rp 3,2 M", beds: "4", baths: "3", area: "260 m²" },
  { img: IMG.apartment, status: "Disewa", title: "Apartemen Sudirman", loc: "Jakarta Pusat", price: "Rp 12 Jt", priceNote: "/bln", beds: "2", baths: "1", area: "65 m²" },
];

const stats = [
  { value: "12.500+", label: "Listing aktif" },
  { value: "450+", label: "Agen partner" },
  { value: "28", label: "Kota" },
  { value: "4.8", label: "Rating layanan" },
];

const reasons = [
  { icon: BadgeCheck, title: "Listing Terverifikasi", desc: "Setiap properti diperiksa keaslian dokumen dan datanya." },
  { icon: Handshake, title: "Agen Tepercaya", desc: "Didampingi agen berlisensi yang memahami area Anda." },
  { icon: ShieldCheck, title: "Transaksi Aman", desc: "Proses jual-beli dan sewa yang transparan dan terlindungi." },
];

const steps = [
  { n: "01", title: "Cari & Filter", desc: "Telusuri listing sesuai lokasi, tipe, dan anggaran Anda." },
  { n: "02", title: "Jadwalkan Survei", desc: "Atur kunjungan langsung bersama agen kami." },
  { n: "03", title: "Transaksi Aman", desc: "Dampingan penuh hingga serah terima kunci." },
];

const testimonials = [
  { quote: "Agennya responsif, rumah dapat sesuai budget. Prosesnya transparan dari awal.", name: "Bpk. Andi", role: "Pembeli, Bintaro" },
  { quote: "Listing-nya lengkap dan fotonya jelas. Survei pun dijadwalkan dengan cepat.", name: "Ibu Sari", role: "Penyewa, Jakarta" },
  { quote: "Jual rumah lama hanya dalam 3 minggu. Tim PrimaLand sangat profesional.", name: "Bpk. Hendra", role: "Penjual, Bandung" },
];

function Spec({ icon: Icon, value }: { icon: typeof BedDouble; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: MUTED }}>
      <Icon className="h-4 w-4" strokeWidth={1.75} style={{ color: NAVY }} /> {value}
    </span>
  );
}

export function PrimaLandDemo() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: MUTED }}>
      <DemoBanner />

      {/* Floating island nav */}
      <header className="absolute inset-x-0 top-[44px] z-30 px-4">
        <div
          className="mx-auto mt-4 flex max-w-5xl items-center justify-between gap-3 rounded-full border px-5 py-2.5 backdrop-blur-xl"
          style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.6)" }}
        >
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold" style={{ color: NAVY }}>PrimaLand</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] sm:inline" style={{ color: GOLD }}>Properti</span>
          </span>
          <nav className="hidden gap-7 text-sm font-medium lg:flex" style={{ color: INK }}>
            {navLinks.map((n) => <span key={n}>{n}</span>)}
          </nav>
          <span className="rounded-full px-4 py-2 text-xs font-semibold text-white sm:text-sm" style={{ background: NAVY }}>Pasang Iklan</span>
        </div>
      </header>

      {/* Cinematic hero + tabbed search */}
      <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux(IMG.luxury, 1800)} alt="Properti pilihan" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(110deg, rgba(13,22,52,0.82) 0%, rgba(13,22,52,0.45) 55%, rgba(13,22,52,0.2) 100%)" }} />
        <div className="mx-auto w-full max-w-6xl px-6 pt-32">
          <div className="max-w-2xl [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">
            <Eyebrow color="#ffd766" className="bg-white/10 backdrop-blur-sm">Temukan Rumah Impian Anda</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Properti terbaik, di lokasi terbaik
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Ribuan listing rumah, apartemen, dan tanah dengan pencarian mudah serta agen yang terpercaya.
            </p>
          </div>

          {/* Search card */}
          <div className="mt-10 max-w-4xl rounded-[1.5rem] border bg-white p-3 shadow-2xl" style={{ borderColor: "rgba(255,255,255,0.5)" }}>
            <div className="flex gap-1 px-2 pt-1">
              {["Jual", "Sewa", "Semua"].map((t, i) => (
                <span
                  key={t}
                  className="rounded-full px-4 py-1.5 text-sm font-semibold"
                  style={i === 0 ? { background: NAVY, color: "#fff" } : { color: MUTED }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-2 grid items-end gap-px sm:grid-cols-[1fr_1fr_1fr_auto]">
              {[
                { icon: MapPin, label: "Lokasi", value: "Kota / area" },
                { icon: Home, label: "Tipe", value: "Rumah" },
                { icon: BadgeCheck, label: "Harga", value: "Semua harga" },
              ].map((f) => (
                <div key={f.label} className="px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <f.icon className="h-3.5 w-3.5" strokeWidth={1.75} style={{ color: NAVY }} />
                    <p className="text-[11px] uppercase tracking-wide" style={{ color: MUTED }}>{f.label}</p>
                  </div>
                  <p className="mt-1 text-sm font-medium" style={{ color: INK }}>{f.value}</p>
                </div>
              ))}
              <span className="m-2 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white" style={{ background: GOLD }}>
                <Search className="h-4 w-4" strokeWidth={2.25} /> Cari Properti
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category chips */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.title} className="group flex items-center gap-4 rounded-2xl border bg-white p-5 transition-shadow hover:shadow-lg" style={{ borderColor: "rgba(31,58,138,0.12)" }}>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(31,58,138,0.08)" }}>
                <c.icon className="h-6 w-6" strokeWidth={1.5} style={{ color: NAVY }} />
              </span>
              <div>
                <p className="font-display text-lg font-semibold" style={{ color: INK }}>{c.title}</p>
                <p className="text-sm">{c.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured property spotlight */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Rise className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow color={GOLD}>Properti Unggulan</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Sorotan minggu ini</h2>
          </div>
        </Rise>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Rise>
            <div className="relative">
              <Bezel shell="rgba(31,58,138,0.08)" ring="rgba(31,58,138,0.14)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ux(featured.img, 1100)} alt={featured.title} className="aspect-[4/3] w-full object-cover" />
              </Bezel>
              <span className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-white" style={{ background: GOLD }}>{featured.status}</span>
            </div>
          </Rise>
          <Rise delay={0.12}>
            <p className="flex items-center gap-1.5 text-sm"><MapPin className="h-4 w-4" strokeWidth={1.75} style={{ color: NAVY }} /> {featured.loc}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight" style={{ color: INK }}>{featured.title}</h3>
            <p className="mt-4 font-display text-3xl font-semibold" style={{ color: NAVY }}>{featured.price}</p>
            <div className="mt-5 flex flex-wrap gap-5">
              <Spec icon={BedDouble} value={`${featured.beds} Kamar`} />
              <Spec icon={Bath} value={`${featured.baths} K. Mandi`} />
              <Spec icon={Maximize} value={featured.area} />
            </div>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {featured.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm" style={{ color: INK }}>
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(31,58,138,0.1)" }}>
                    <Check className="h-3 w-3" strokeWidth={2.5} style={{ color: NAVY }} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTA bg={NAVY} fg="#ffffff">Jadwalkan Survei</CTA>
            </div>
          </Rise>
        </div>
      </section>

      {/* Listing grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Rise className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow color={GOLD}>Listing Pilihan</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Properti terbaru</h2>
          </div>
          <span className="text-sm font-semibold" style={{ color: NAVY }}>Lihat semua listing →</span>
        </Rise>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((p, i) => (
            <Rise key={p.title} delay={i * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-white" style={{ borderColor: "rgba(31,58,138,0.1)", boxShadow: "0 22px 50px -40px rgba(21,38,92,0.55)" }}>
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ux(p.img, 800)} alt={p.title} loading="lazy" className="h-44 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white" style={{ background: p.status === "Disewa" ? NAVY : GOLD }}>{p.status}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-xl font-semibold" style={{ color: NAVY }}>
                    {p.price}{p.priceNote && <span className="text-sm font-normal" style={{ color: MUTED }}>{p.priceNote}</span>}
                  </p>
                  <h3 className="mt-1 font-medium" style={{ color: INK }}>{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs" style={{ color: MUTED }}><MapPin className="h-3.5 w-3.5" strokeWidth={1.75} /> {p.loc}</p>
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 border-t pt-4" style={{ borderColor: "rgba(31,58,138,0.1)" }}>
                    <Spec icon={BedDouble} value={p.beds} />
                    <Spec icon={Bath} value={p.baths} />
                    <Spec icon={Maximize} value={p.area} />
                  </div>
                </div>
              </article>
            </Rise>
          ))}
        </div>
      </section>

      {/* Stats + reasons band */}
      <section style={{ background: NAVY }}>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Rise>
            <div className="grid gap-6 border-b pb-12 sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-semibold sm:text-5xl" style={{ color: "#ffd766" }}>{s.value}</p>
                  <p className="mt-1.5 text-sm text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </Rise>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Rise key={r.title} delay={i * 0.08}>
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <r.icon className="h-6 w-6" strokeWidth={1.25} style={{ color: "#ffd766" }} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{r.desc}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Rise className="mb-12 max-w-2xl">
          <Eyebrow color={GOLD}>Mudah & Aman</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Tiga langkah menuju hunian baru</h2>
        </Rise>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Rise key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-[1.5rem] border bg-white p-7" style={{ borderColor: "rgba(31,58,138,0.1)" }}>
                <span className="font-display text-3xl font-semibold" style={{ color: GOLD }}>{s.n}</span>
                <h3 className="mt-4 font-display text-xl font-semibold" style={{ color: INK }}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Rise>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Rise className="mb-12 max-w-2xl">
            <Eyebrow color={GOLD}>Kata Klien</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Dipercaya ribuan keluarga</h2>
          </Rise>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Rise key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col justify-between rounded-[1.5rem] border p-7" style={{ borderColor: "rgba(31,58,138,0.12)", background: BG }}>
                  <div>
                    <div className="flex gap-1" style={{ color: GOLD }}>
                      {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                    </div>
                    <blockquote className="mt-4 leading-relaxed" style={{ color: INK }}>&ldquo;{t.quote}&rdquo;</blockquote>
                  </div>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold" style={{ color: INK }}>{t.name}</span>
                    <span style={{ color: MUTED }}> · {t.role}</span>
                  </figcaption>
                </figure>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: NAVYDEEP }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
          <Rise>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Punya properti untuk dijual atau disewakan?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/75">
              Pasang iklan gratis dan jangkau ribuan calon pembeli serius setiap harinya.
            </p>
            <div className="mt-9 flex justify-center">
              <CTA bg={GOLD} fg={NAVYDEEP}>Pasang Iklan Gratis</CTA>
            </div>
          </Rise>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0e1838" }} className="text-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <span className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-semibold text-white">PrimaLand</span>
              <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#ffd766" }}>Properti</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">Menemukan properti, mempertemukan agen — di seluruh Indonesia.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Jelajahi</p>
            <ul className="mt-4 space-y-2.5 text-sm">{["Dijual", "Disewa", "Proyek Baru", "Agen"].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Tipe Properti</p>
            <ul className="mt-4 space-y-2.5 text-sm">{["Rumah", "Apartemen", "Tanah", "Ruko"].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Kontak</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.25} style={{ color: "#ffd766" }} /> 021-700-9000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.25} style={{ color: "#ffd766" }} /> info@primaland.id</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" strokeWidth={1.25} style={{ color: "#ffd766" }} /> Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">Demo konsep oleh Wafinix</div>
      </footer>
    </div>
  );
}
