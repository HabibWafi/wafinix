# PROGRESS — Status Eksekusi Website Wafinix

> **Aturan**: centang item SEGERA setelah selesai (bukan di akhir sesi). Sesi baru: baca file ini + `CLAUDE.md` dulu, cek `git log` -5, verifikasi `npm run build` sebelum lanjut.
> Status tahap: ⬜ belum · 🔄 sedang berjalan · ✅ selesai (ter-commit)

## 🔄 Tahap 1 — Fondasi
- [x] git init (oleh create-next-app)
- [x] Scaffold Next.js 15 (TS, Tailwind v4, App Router, src-dir)
- [x] docs/: PLAN, PRD, ARCHITECTURE, DESIGN-SPEC, CONTENT-GUIDE, ROADMAP, TESTING, PROGRESS
- [x] AGENTS.md (panduan sesi berikutnya; CLAUDE.md → include)
- [x] Install dependency: motion, gsap, three, r3f, drei, next-intl, lenis, lucide, supabase, rhf, zod, qrcode, midtrans-client, resend
- [x] Design tokens Terracotta Warm di globals.css (@theme)
- [x] Font Fraunces + Plus Jakarta Sans via next/font
- [x] Halaman placeholder sementara memakai tokens (bukti tokens jalan)
- [x] `npm run build` lolos
- [ ] Commit Tahap 1

## ⬜ Tahap 2 — Logo & Brand
- [ ] Generate 3–4 konsep logo AI → user pilih
- [ ] Remove background + upscale hasil terpilih
- [ ] public/brand/: logo.png, logo-dark.png, mark.png
- [ ] Favicon set (ico, 192, 512, apple-touch) + metadata icons
- [ ] Komponen `<Logo />`
- [ ] Commit

## ⬜ Tahap 3 — Layout & Dekorasi
- [ ] next-intl: routing /id /en, messages/id.json en.json, middleware
- [ ] Navbar (transparan→solid, language switcher, mobile menu)
- [ ] Footer (navigasi, kontak placeholder, legal, sosmed)
- [ ] PageTransition wrapper + Lenis smooth scroll provider
- [ ] Decor: Blobs, TopoLines, Grain, FloatingShapes, HandDrawn, SectionDivider, OutlineText
- [ ] Motion utils: Reveal, Stagger, CountUp, Marquee, MagneticButton, ParallaxLayer
- [ ] Commit

## ⬜ Tahap 4 — Home
- [ ] Hero: teks stagger + HeroScene 3D (mouse + scroll) + fallback
- [ ] Section layanan ringkas (7 kartu)
- [ ] Marquee tech stack
- [ ] Horizontal scroll 9 industri (GSAP)
- [ ] Globe 3D "Indonesia & Global"
- [ ] Pinned scrollytelling "Proses Kami" (5 langkah)
- [ ] Stats count-up, testimoni, "Keamanan Standar Kami", CTA akhir
- [ ] Dua bahasa lengkap; commit

## ⬜ Tahap 5 — Layanan & Solusi
- [ ] data/services.ts, industries.ts, techstack.ts
- [ ] /layanan: 7 kategori + grid tech stack terkategori
- [ ] /solusi: 8 industri (masing-masing: masalah → solusi Wafinix → fitur → CTA)
- [ ] Dua bahasa; commit

## ⬜ Tahap 6 — Harga
- [ ] data/pricing.ts: 4 tier, sub-paket per layanan, add-on, IDR+USD
- [ ] /harga: kartu tier, toggle kategori, tabel dokumen per tier, fitur keamanan per tier
- [ ] FAQ harga + JSON-LD FAQPage
- [ ] CTA → /order?paket=slug; commit

## ⬜ Tahap 7 — Portofolio A
- [ ] data/portfolio.ts (8 entri)
- [ ] /portofolio grid + filter industri; /portofolio/[slug] case study
- [ ] Demo: kopi-nusantara, sajira-restaurant, amara-hotel, tripnusa
- [ ] Commit

## ⬜ Tahap 8 — Portofolio B
- [ ] Demo: safar-mabrur, primaland, eximtrade, kasirpro (dashboard)
- [ ] Commit

## ⬜ Tahap 9 — Supabase & Order
- [ ] supabase/migrations: 5 tabel + constraint + RLS deny-all
- [ ] .env.example; lib/supabase (server-only)
- [ ] /order form multi-step (Zod + Turnstile + rate limit) → server action buat order (harga dari server)
- [ ] /order/[code] halaman status
- [ ] Security headers + CSP di next.config
- [ ] Commit (butuh env Supabase dari user)

## ⬜ Tahap 10 — Pembayaran
- [ ] Midtrans Snap sandbox di /order/[code] + webhook (signature, nominal, idempotent)
- [ ] Crypto manual: pilih aset/jaringan → wallet+QR server-rendered → submit tx hash
- [ ] Email Resend (order dibuat, status berubah, alert wallet)
- [ ] Commit

## ⬜ Tahap 11 — Admin Panel
- [ ] /admin/login (Supabase Auth + MFA) + middleware proteksi + role check
- [ ] Dashboard ringkasan; orders list/detail/ubah status
- [ ] Antrean verifikasi crypto (link explorer per network)
- [ ] Messages inbox; settings wallet (re-auth + audit + email alert)
- [ ] Semua aksi → audit_logs; commit

## ⬜ Tahap 12 — Legal, Kontak & Finishing
- [ ] /tentang, /kontak (form → DB + email)
- [ ] /legal: syarat-ketentuan, kebijakan-privasi, lisensi-dan-sla (ID+EN)
- [ ] SEO: metadata semua halaman, OG, sitemap, robots, JSON-LD
- [ ] Jalankan seluruh docs/TESTING.md
- [ ] Deploy Vercel + env; commit final

## Catatan antar-sesi
(tulis di sini hal penting yang ditemukan saat pengerjaan, mis. workaround, keputusan baru)
- 2026-06-13: Proyek dimulai. plan.md dari mode plan dipindah ke docs/PLAN.md.
- 2026-06-13: Terpasang **Next.js 16.2.9** — `middleware.ts` DEPRECATED, ganti `proxy.ts` (export function `proxy`). Baca `node_modules/next/dist/docs/` sebelum pakai API yang tidak yakin (penting untuk Tahap 3 i18n & Tahap 11 admin).
- 2026-06-13: CLAUDE.md bawaan scaffold berisi include `@AGENTS.md` — panduan proyek ditulis di AGENTS.md.
