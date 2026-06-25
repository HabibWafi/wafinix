"use client";

import {
  UtensilsCrossed,
  CalendarDays,
  Users,
  Clock,
  Star,
  ChefHat,
  Wine,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Rise, Eyebrow, Bezel, CTA } from "@/components/demo/kit";
import { ux } from "@/lib/unsplash";

// Moody fine-dining palette — warm near-black + cream + gold, terracotta highlight.
const NIGHT = "#14100e"; // base background
const SURFACE = "#211b16"; // alt section
const CREAM = "#f3ece0"; // headings / text
const MUTED = "#b6a892"; // body text
const GOLD = "#cba04a"; // primary accent
const TERRA = "#cd6b35"; // warm highlight

const IMG = {
  interior: "photo-1578474846511-04ba529f0b88", // moody dining room
  chefPlating: "photo-1663530761401-15eefb544889", // chef saucing a plate
  steak: "photo-1633436375795-12b3b339712f", // grilled meat on slate
  salmon: "photo-1467003909585-2f8a72700288", // plated salmon + wine
  pasta: "photo-1551183053-bf91a1d81141", // tagliatelle pan
  service: "photo-1761416376088-d6456fcd76fd", // b&w plates being served
  nightOut: "photo-1579027989536-b7b1f875659b", // al-fresco dining at night
};

const navLinks = ["Beranda", "Menu", "Reservasi", "Event", "Tentang"];

const signatures = [
  {
    img: IMG.steak,
    tag: "Signature",
    name: "Grilled Black Pepper Steak",
    desc: "Sirloin pilihan dipanggang sempurna, disiram saus lada hitam rumahan.",
    price: "165.000",
  },
  {
    img: IMG.salmon,
    name: "Salmon Teriyaki",
    desc: "Salmon panggang di atas bayam tumis, glasir teriyaki yang harum.",
    price: "145.000",
  },
  {
    img: IMG.pasta,
    name: "Creamy Truffle Pasta",
    desc: "Fettuccine dalam saus krim truffle yang lembut dan beraroma.",
    price: "125.000",
  },
];

const menu = [
  {
    cat: "Pembuka",
    items: [
      { name: "Truffle Arancini", desc: "Risoto goreng, truffle, mozzarella", price: "65" },
      { name: "Tuna Tataki", desc: "Tuna segar, ponzu, wijen", price: "78" },
      { name: "Burrata Caprese", desc: "Burrata, tomat heirloom, basil", price: "72" },
    ],
  },
  {
    cat: "Hidangan Utama",
    items: [
      { name: "Grilled Black Pepper Steak", desc: "Sirloin, saus lada hitam", price: "165" },
      { name: "Salmon Teriyaki", desc: "Salmon panggang, teriyaki rumahan", price: "145" },
      { name: "Lamb Shank Slow-Cooked", desc: "Betis domba, jus red wine", price: "185" },
    ],
  },
  {
    cat: "Penutup",
    items: [
      { name: "Molten Chocolate", desc: "Lava cokelat, es krim vanila", price: "55" },
      { name: "Crème Brûlée", desc: "Custard vanila, gula karamel", price: "52" },
    ],
  },
  {
    cat: "Signature Bar",
    items: [
      { name: "Sajira Sour", desc: "Mocktail khas rumah", price: "45" },
      { name: "Espresso Martini", desc: "Vodka, kopi, liqueur", price: "65" },
    ],
  },
];

const stats = [
  { value: "2015", label: "Melayani sejak" },
  { value: "40", label: "Kursi intim" },
  { value: "Musiman", label: "Menu kurasi" },
];

const testimonials = [
  { quote: "Steak-nya matang sempurna dan suasananya romantis. Anniversary kami jadi sangat berkesan.", name: "Maya & Reza" },
  { quote: "Pelayanan kelas atas, plating-nya cantik. Truffle pasta-nya wajib dicoba.", name: "Bagas P." },
  { quote: "Tempat favorit untuk jamuan bisnis — konsisten lezat dan elegan.", name: "Hana S." },
];

export function SajiraDemo() {
  return (
    <div className="min-h-screen" style={{ background: NIGHT, color: MUTED }}>
      <DemoBanner />

      {/* Transparent spread nav */}
      <header className="absolute inset-x-0 top-[44px] z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-semibold tracking-wide" style={{ color: CREAM }}>Sajira</span>
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>Restaurant</span>
          </span>
          <nav className="hidden gap-8 text-sm font-medium lg:flex" style={{ color: "rgba(243,236,224,0.82)" }}>
            {navLinks.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </nav>
          <span className="rounded-full border px-5 py-2 text-xs font-semibold sm:text-sm" style={{ borderColor: GOLD, color: GOLD }}>
            Reservasi Meja
          </span>
        </div>
      </header>

      {/* Cinematic hero */}
      <section className="relative isolate flex min-h-[100dvh] items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux(IMG.interior, 1800)} alt="Suasana ruang makan Sajira" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(15,11,9,0.6) 0%, rgba(15,11,9,0.35) 35%, rgba(15,11,9,0.92) 100%)" }} />
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <div className="max-w-2xl [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]">
            <Eyebrow color={GOLD} className="bg-white/5 backdrop-blur-sm">Rasa Istimewa · Momen Berkesan</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl" style={{ color: CREAM }}>
              Sajian hangat, untuk cerita indah
            </h1>
            <p className="mt-6 max-w-lg text-lg" style={{ color: "rgba(243,236,224,0.82)" }}>
              Perpaduan cita rasa lokal dan internasional, disajikan dalam suasana yang hangat, intim, dan berkelas.
            </p>
            <div className="mt-8">
              <CTA bg={GOLD} fg={NIGHT}>Lihat Menu</CTA>
            </div>
          </div>

          {/* Reservation bar */}
          <Bezel className="mt-12 max-w-3xl" shell="rgba(255,255,255,0.1)" ring="rgba(203,160,74,0.3)" radius={1.75}>
            <div className="grid gap-px sm:grid-cols-3" style={{ background: "rgba(15,11,9,0.55)", backdropFilter: "blur(8px)" }}>
              {[
                { icon: CalendarDays, label: "Tanggal", value: "Pilih tanggal" },
                { icon: Users, label: "Tamu", value: "2 Orang" },
                { icon: Clock, label: "Waktu", value: "19:00" },
              ].map((f) => (
                <div key={f.label} className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <f.icon className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color: GOLD }} />
                    <p className="text-[11px] uppercase tracking-wide" style={{ color: "rgba(243,236,224,0.5)" }}>{f.label}</p>
                  </div>
                  <p className="mt-1.5 text-sm font-medium" style={{ color: CREAM }}>{f.value}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 px-5 py-3" style={{ background: GOLD }}>
              <span className="text-sm font-medium" style={{ color: NIGHT }}>Meja terbatas setiap malam</span>
              <span className="rounded-full px-5 py-2 text-sm font-semibold text-white" style={{ background: NIGHT }}>Cek Ketersediaan</span>
            </div>
          </Bezel>
        </div>
      </section>

      {/* Philosophy split */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Rise>
            <Bezel shell="rgba(203,160,74,0.12)" ring="rgba(203,160,74,0.2)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ux(IMG.chefPlating, 1000)} alt="Koki menata hidangan" className="aspect-[4/5] w-full object-cover" />
            </Bezel>
          </Rise>
          <Rise delay={0.12}>
            <Eyebrow color={GOLD}>Tentang Sajira</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl" style={{ color: CREAM }}>
              Dapur yang bercerita lewat rasa
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Sajira lahir dari kecintaan pada bahan terbaik dan teknik yang teliti. Setiap hidangan diracik segar, mengangkat kekayaan rasa Nusantara dengan sentuhan dunia.
            </p>
            <p className="mt-4 max-w-md leading-relaxed">
              Di ruang yang temaram dan hangat, kami merangkai bukan sekadar makan malam — tetapi sebuah momen yang layak dikenang.
            </p>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold sm:text-4xl" style={{ color: GOLD }}>{s.value}</p>
                  <p className="mt-1 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </Rise>
        </div>
      </section>

      {/* Signature dishes */}
      <section style={{ background: SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Rise className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow color={GOLD}>Hidangan Andalan</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: CREAM }}>Favorit para tamu</h2>
            </div>
            <span className="text-sm font-semibold" style={{ color: GOLD }}>Menu lengkap di bawah ↓</span>
          </Rise>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {signatures.map((d, i) => (
              <Rise key={d.name} delay={i * 0.08}>
                <article className="group flex h-full flex-col">
                  <Bezel shell="rgba(255,255,255,0.05)" ring="rgba(255,255,255,0.08)">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ux(d.img, 800)} alt={d.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                  </Bezel>
                  <div className="px-2 pt-5">
                    {d.tag && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: TERRA }}>{d.tag}</span>
                    )}
                    <div className="mt-1 flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl font-semibold" style={{ color: CREAM }}>{d.name}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">{d.desc}</p>
                    <p className="mt-4 font-display text-lg font-semibold" style={{ color: GOLD }}>IDR {d.price}</p>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Typeset menu list */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Rise className="mb-14 text-center">
          <Eyebrow color={GOLD}>Buku Menu</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: CREAM }}>Pilihan untuk malam ini</h2>
        </Rise>
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {menu.map((group, gi) => (
            <Rise key={group.cat} delay={gi * 0.06}>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold" style={{ color: GOLD }}>{group.cat}</h3>
                  <span className="h-px flex-1" style={{ background: "rgba(203,160,74,0.3)" }} />
                </div>
                <ul className="mt-6 space-y-5">
                  {group.items.map((it) => (
                    <li key={it.name} className="flex items-baseline gap-3">
                      <div className="min-w-0">
                        <p className="font-medium" style={{ color: CREAM }}>{it.name}</p>
                        <p className="mt-0.5 text-sm" style={{ color: MUTED }}>{it.desc}</p>
                      </div>
                      <span className="mt-2 h-px flex-1 self-end" style={{ background: "rgba(243,236,224,0.15)" }} />
                      <span className="font-display text-lg font-semibold" style={{ color: CREAM }}>{it.price}<span className="text-xs" style={{ color: MUTED }}>k</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </Rise>
          ))}
        </div>
      </section>

      {/* Chef's note — b&w split */}
      <section style={{ background: SURFACE }}>
        <div className="mx-auto grid max-w-6xl items-stretch gap-0 overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-[320px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ux(IMG.service, 1000)} alt="Hidangan disajikan" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(33,27,22,0) 60%, rgba(33,27,22,0.9) 100%)" }} />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:py-24">
            <Rise>
              <ChefHat className="h-9 w-9" strokeWidth={1.25} style={{ color: GOLD }} />
              <blockquote className="mt-6 font-display text-2xl font-medium leading-[1.35] sm:text-3xl" style={{ color: CREAM }}>
                &ldquo;Setiap piring yang keluar dari dapur kami adalah surat cinta — untuk bahan, untuk tradisi, dan untuk tamu yang duduk malam ini.&rdquo;
              </blockquote>
              <p className="mt-7 text-sm">
                <span className="font-semibold" style={{ color: GOLD }}>Chef Aditya Pranata</span>
                <span style={{ color: MUTED }}> · Executive Chef, Sajira</span>
              </p>
            </Rise>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Rise className="mb-12 max-w-2xl">
          <Eyebrow color={GOLD}>Kata Tamu</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: CREAM }}>Momen yang mereka kenang</h2>
        </Rise>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Rise key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-[1.5rem] border p-7" style={{ borderColor: "rgba(203,160,74,0.18)", background: SURFACE }}>
                <div>
                  <div className="flex gap-1" style={{ color: GOLD }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 leading-relaxed" style={{ color: CREAM }}>&ldquo;{t.quote}&rdquo;</blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-2 text-sm">
                  <Wine className="h-4 w-4" strokeWidth={1.5} style={{ color: TERRA }} />
                  <span className="font-semibold" style={{ color: CREAM }}>{t.name}</span>
                </figcaption>
              </figure>
            </Rise>
          ))}
        </div>
      </section>

      {/* Reservation CTA — full-bleed */}
      <section className="relative isolate overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux(IMG.nightOut, 1600)} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(15,11,9,0.78), rgba(15,11,9,0.85))" }} />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <Rise>
            <Eyebrow color={GOLD} className="bg-white/5">Reservasi</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl" style={{ color: CREAM }}>
              Pesan meja Anda malam ini
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg" style={{ color: "rgba(243,236,224,0.8)" }}>
              Sajian terbaik, suasana terbaik. Amankan meja sebelum kursi terisi penuh.
            </p>
            <div className="mt-9 flex justify-center">
              <CTA bg={GOLD} fg={NIGHT}>Reservasi Sekarang</CTA>
            </div>
          </Rise>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0e0b09" }} className="text-white/55">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <span className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-semibold" style={{ color: CREAM }}>Sajira</span>
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>Restaurant</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">Sajian hangat dan momen berkesan, di jantung kota.</p>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <UtensilsCrossed className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} />
              <span>Fine Dining · Modern Nusantara</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: CREAM }}>Jam Buka</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>Sen–Jum · 17.00–23.00</li>
              <li>Sab–Min · 12.00–24.00</li>
              <li style={{ color: GOLD }}>Reservasi disarankan</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: CREAM }}>Jelajahi</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Menu", "Reservasi", "Private Event", "Tentang"].map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: CREAM }}>Kontak</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> 021-555-7788</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> halo@sajira.id</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" strokeWidth={1.25} style={{ color: GOLD }} /> Jakarta Selatan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">Demo konsep oleh Wafinix</div>
      </footer>
    </div>
  );
}
