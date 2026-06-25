"use client";

import {
  Globe2,
  Ship,
  BadgeCheck,
  Truck,
  PackageCheck,
  FileCheck,
  ShieldCheck,
  Anchor,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Check,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Rise, Eyebrow, Bezel, CTA } from "@/components/demo/kit";
import { ux } from "@/lib/unsplash";

// Corporate trade palette — slate + amber on cool grey. English copy (global B2B).
const BG = "#eef1f4";
const SURFACE = "#ffffff";
const SLATE = "#2c4a63"; // primary
const SLATEDEEP = "#1c2a38"; // bands / footer / ink
const INK = "#1c2a38";
const MUTED = "#566472";
const AMBER = "#e3a547"; // accent

const IMG = {
  port: "photo-1494412574643-ff11b0a5c1c3", // container port aerial (hero)
  ship: "photo-1679183959103-e182446d6810", // cargo ship at sea
  coffee: "photo-1447933601403-0c6688de566e", // coffee beans
  spices: "photo-1596040033229-a9821ebd058d", // spices flatlay
  cacao: "photo-1573710661345-610f790e1218", // cacao pods
  fruits: "photo-1601493700631-2b16ec4b4716", // mangoes
  shrimp: "photo-1504309250229-4f08315f3b5c", // raw prawns
};

const navLinks = ["Home", "Products", "About Us", "Export", "Contact"];

const credentials = [
  { icon: Globe2, title: "45+ Countries", sub: "Global distribution" },
  { icon: Ship, title: "FOB · CIF · EXW", sub: "Flexible Incoterms" },
  { icon: BadgeCheck, title: "ISO & HACCP", sub: "Certified quality" },
  { icon: Truck, title: "On-time Shipping", sub: "Reliable logistics" },
];

const commodities = [
  { img: IMG.coffee, title: "Arabica Coffee", grade: "Grade 1 · Specialty", moq: "MOQ 5 tons · GrainPro / jute", origin: "Aceh · Toraja" },
  { img: IMG.spices, title: "Premium Spices", grade: "Nutmeg · Clove · Pepper", moq: "MOQ 1 ton · Vacuum / PP bag", origin: "Maluku" },
  { img: IMG.cacao, title: "Cacao Beans", grade: "Fermented · Grade A", moq: "MOQ 5 tons · Jute bag", origin: "Sulawesi" },
  { img: IMG.fruits, title: "Tropical Fruits", grade: "Mango · Mangosteen", moq: "Reefer / air · Carton", origin: "East Java" },
  { img: IMG.shrimp, title: "Frozen Shrimp", grade: "Vannamei · HOSO / HLSO", moq: "MOQ 1 FCL · IQF carton", origin: "Lampung" },
];

const stats = [
  { value: "2009", label: "Exporting since" },
  { value: "45+", label: "Countries served" },
  { value: "80K+", label: "Tons / year" },
  { value: "500+", label: "Global partners" },
];

const process = [
  { n: "01", icon: FileCheck, title: "Inquiry", desc: "Share your requirements, target specs, and destination port." },
  { n: "02", icon: PackageCheck, title: "Quotation", desc: "Receive a detailed offer with pricing and Incoterms." },
  { n: "03", icon: ShieldCheck, title: "Sourcing & QC", desc: "We source, inspect, and certify every lot before loading." },
  { n: "04", icon: Anchor, title: "Shipping & Docs", desc: "Complete export documentation and on-time delivery." },
];

const regions = ["Asia Pacific", "Middle East", "Europe", "North America", "Africa"];

export function EximTradeDemo() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: MUTED }}>
      <DemoBanner />

      {/* Transparent corporate nav */}
      <header className="absolute inset-x-0 top-[44px] z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-semibold text-white">EximTrade</span>
            <span className="hidden text-[10px] uppercase tracking-[0.24em] sm:inline" style={{ color: AMBER }}>Export-Import</span>
          </span>
          <nav className="hidden gap-8 text-sm font-medium lg:flex" style={{ color: "rgba(255,255,255,0.82)" }}>
            {navLinks.map((n) => <span key={n}>{n}</span>)}
          </nav>
          <span className="rounded-full px-4 py-2 text-xs font-semibold sm:text-sm" style={{ background: AMBER, color: SLATEDEEP }}>Request Quote</span>
        </div>
      </header>

      {/* Cinematic hero */}
      <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ux(IMG.port, 1800)} alt="Container port" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(110deg, rgba(20,30,42,0.88) 0%, rgba(20,30,42,0.6) 55%, rgba(20,30,42,0.3) 100%)" }} />
        <div className="mx-auto w-full max-w-6xl px-6 pt-32">
          <div className="max-w-2xl [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]">
            <Eyebrow color={AMBER} className="bg-white/10 backdrop-blur-sm">Trusted Indonesian Exporter</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Connecting Indonesia to global markets
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Quality commodities and dependable supply chains for buyers worldwide — with bilingual support at every step.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTA bg={AMBER} fg={SLATEDEEP}>View Catalog</CTA>
              <span className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white">Request a Quote</span>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section style={{ background: SLATE }}>
        <div className="mx-auto grid max-w-6xl gap-7 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.title} className="flex items-center gap-3.5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl" style={{ background: "rgba(227,165,71,0.16)" }}>
                <c.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: AMBER }} />
              </span>
              <div>
                <p className="font-semibold text-white">{c.title}</p>
                <p className="text-sm text-white/65">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commodity catalog */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Rise className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow color={AMBER}>Our Commodities</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>Export-grade products</h2>
          </div>
          <span className="text-sm font-semibold" style={{ color: SLATE }}>Download product list →</span>
        </Rise>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {commodities.map((p, i) => (
            <Rise key={p.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-white" style={{ borderColor: "rgba(44,74,99,0.12)", boxShadow: "0 22px 50px -42px rgba(28,42,56,0.55)" }}>
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ux(p.img, 800)} alt={p.title} loading="lazy" className="h-44 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold" style={{ color: INK }}>{p.title}</h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: SLATE }}>{p.grade}</p>
                  <dl className="mt-4 space-y-2 text-sm" style={{ color: MUTED }}>
                    <div className="flex items-start gap-2"><PackageCheck className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} style={{ color: AMBER }} /> {p.moq}</div>
                    <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} style={{ color: AMBER }} /> Origin: {p.origin}</div>
                  </dl>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold" style={{ color: SLATE }}>
                    Request quote <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </div>
              </article>
            </Rise>
          ))}

          {/* Catalog CTA tile */}
          <Rise delay={0.3}>
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] p-7" style={{ background: SLATE }}>
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(227,165,71,0.18)" }}>
                  <Globe2 className="h-6 w-6" strokeWidth={1.5} style={{ color: AMBER }} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">120+ products across 9 categories</h3>
                <p className="mt-2 text-sm text-white/70">From agricultural commodities to handicrafts and processed goods.</p>
              </div>
              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold" style={{ background: AMBER, color: SLATEDEEP }}>
                View Full Catalog <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </div>
          </Rise>
        </div>
      </section>

      {/* About / company split */}
      <section style={{ background: SURFACE }}>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Rise>
              <Bezel shell="rgba(44,74,99,0.08)" ring="rgba(44,74,99,0.14)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ux(IMG.ship, 1000)} alt="Cargo vessel" className="aspect-[4/3] w-full object-cover" />
              </Bezel>
            </Rise>
            <Rise delay={0.12}>
              <Eyebrow color={AMBER}>About EximTrade</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl" style={{ color: INK }}>
                A reliable bridge between Indonesian producers and the world
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed">
                We work directly with farmers and cooperatives, manage quality control end-to-end, and handle the full export paperwork — so buyers receive consistent quality, on schedule, every shipment.
              </p>
              <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-semibold" style={{ color: SLATE }}>{s.value}</p>
                    <p className="mt-1 text-xs" style={{ color: MUTED }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* Export process */}
      <section style={{ background: SLATEDEEP }}>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Rise className="max-w-2xl">
            <Eyebrow color={AMBER} className="bg-white/5">How We Work</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">From inquiry to delivery</h2>
            <p className="mt-4 max-w-lg text-lg text-white/65">A transparent, four-step export process designed around your timeline and compliance needs.</p>
          </Rise>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <Rise key={s.title} delay={i * 0.08}>
                <div className="border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: "rgba(227,165,71,0.16)" }}>
                      <s.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: AMBER }} />
                    </span>
                    <span className="font-display text-3xl font-semibold" style={{ color: "rgba(255,255,255,0.2)" }}>{s.n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Rise>
            <Eyebrow color={AMBER}>Global Reach</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl" style={{ color: INK }}>We deliver to 45+ countries</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed">Established shipping lanes and trusted forwarders across five continents.</p>
          </Rise>
          <Rise delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {regions.map((r) => (
                <span key={r} className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-3 text-sm font-medium" style={{ borderColor: "rgba(44,74,99,0.16)", color: INK }}>
                  <Check className="h-4 w-4" strokeWidth={2} style={{ color: AMBER }} /> {r}
                </span>
              ))}
            </div>
          </Rise>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: AMBER }}>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-24">
          <Rise>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl" style={{ color: SLATEDEEP }}>
              Ready to import from Indonesia?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg" style={{ color: "rgba(28,42,56,0.78)" }}>
              Tell us your target products and destination — our team replies within one business day.
            </p>
            <div className="mt-8 flex justify-center">
              <CTA bg={SLATEDEEP} fg="#ffffff">Request a Quote</CTA>
            </div>
          </Rise>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#141e2a" }} className="text-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <span className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-semibold text-white">EximTrade</span>
              <span className="text-[10px] uppercase tracking-[0.24em]" style={{ color: AMBER }}>Export-Import</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">Your reliable export partner from Indonesia to the world.</p>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <Ship className="h-4 w-4" strokeWidth={1.25} style={{ color: AMBER }} />
              <span>FOB · CIF · EXW — worldwide</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm">{["Coffee", "Spices", "Cacao", "Seafood"].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">{["About Us", "Certifications", "Incoterms", "Careers"].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.25} style={{ color: AMBER }} /> +62 21 5000 700</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.25} style={{ color: AMBER }} /> sales@eximtrade.id</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" strokeWidth={1.25} style={{ color: AMBER }} /> Surabaya, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">Demo concept by Wafinix</div>
      </footer>
    </div>
  );
}
