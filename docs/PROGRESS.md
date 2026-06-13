# PROGRESS — Status Eksekusi Website Wafinix

> **Aturan**: centang item SEGERA setelah selesai (bukan di akhir sesi). Sesi baru: baca file ini + `CLAUDE.md` dulu, cek `git log` -5, verifikasi `npm run build` sebelum lanjut.
> Status tahap: ⬜ belum · 🔄 sedang berjalan · ✅ selesai (ter-commit)

## ✅ Tahap 1 — Fondasi (selesai 2026-06-13, commit a838efa)
- [x] git init (oleh create-next-app)
- [x] Scaffold Next.js 15 (TS, Tailwind v4, App Router, src-dir)
- [x] docs/: PLAN, PRD, ARCHITECTURE, DESIGN-SPEC, CONTENT-GUIDE, ROADMAP, TESTING, PROGRESS
- [x] AGENTS.md (panduan sesi berikutnya; CLAUDE.md → include)
- [x] Install dependency: motion, gsap, three, r3f, drei, next-intl, lenis, lucide, supabase, rhf, zod, qrcode, midtrans-client, resend
- [x] Design tokens Terracotta Warm di globals.css (@theme)
- [x] Font Fraunces + Plus Jakarta Sans via next/font
- [x] Halaman placeholder sementara memakai tokens (bukti tokens jalan)
- [x] `npm run build` lolos
- [x] Commit Tahap 1

## ✅ Tahap 2 — Logo & Brand (selesai 2026-06-13)
- [x] ~~Generate konsep logo AI~~ → **user pakai logo desain sendiri** (konsep phoenix: "Wa"+phoenix, tagline "Build. Transform. Grow."; palet Terracotta Warm — ternyata cocok dgn tema)
- [x] Keputusan warna: **tema tetap Terracotta Warm**, logo memakai palet yang sama — design tokens TIDAK diubah
- [x] User upload set logo lengkap ke `public/brand/` (utama, horizontal, icon, wordmark, mono, panduan)
- [x] `scripts/process-logo.ps1` — flood-fill bg removal (preserve sayap cream interior) + generate favicon, reusable
- [x] Turunan transparan: `mark.png`, `logo-stacked.png` (`logo-horizontal.png` sudah transparan dari user)
- [x] Favicon set: `src/app/favicon.ico` (16/32/48), `icon.png` (512), `apple-icon.png` (180, mark di atas sand) — auto-link via konvensi Next.js
- [x] Komponen `<Logo variant=horizontal|stacked|mark, onDark>`
- [x] Hapus aset SVG bawaan create-next-app; build & lint lolos
- [x] Commit

## ✅ Tahap 3 — Layout & Dekorasi (selesai 2026-06-13)
- [x] next-intl: routing /id /en (localePrefix always), request.ts, navigation.ts, **proxy.ts** (Next 16, bukan middleware.ts), plugin di next.config, messages id/en
- [x] **Multi-root layout**: `src/app/[locale]/layout.tsx` jadi root (punya `<html lang={locale}>`) — TIDAK ada `src/app/layout.tsx`. lang benar per locale. Admin/demo nanti dapat root layout sendiri (Tahap 7/11)
- [x] Navbar (transparan→solid saat scroll, language switcher ID/EN, mobile menu full-screen)
- [x] Footer (brand+blurb, explore/legal/connect, sosmed, dari data/site.ts)
- [x] SmoothScroll (Lenis, mati saat reduced-motion) + PageTransition (template.tsx, enter per-navigasi)
- [x] Decor: Grain, Blobs, TopoLines, FloatingShapes, HandDrawn, SectionDivider, OutlineText
- [x] Motion utils: Reveal, Stagger, CountUp, Marquee, MagneticButton, ParallaxLayer
- [x] Home placeholder memakai semua komponen (verifikasi runtime); build & lint lolos; cek desktop+mobile+ID/EN
- [x] Commit

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
- 2026-06-13: **Higgsfield generate_image OUT OF CREDIT** (workspace free, 0 kredit). Canva `generate-design` jalan tapi user akhirnya pakai logo desain sendiri. Untuk Tahap 4 (3D/ilustrasi): andalkan R3F prosedural + SVG kode, JANGAN andalkan generate gambar AI kecuali user top-up. User bilang akan desain aset sendiri & kasih ke kita bila perlu.
- 2026-06-13: Logo = set lengkap dari user di `public/brand/`. Background removal pakai `scripts/process-logo.ps1` (System.Drawing flood-fill dari tepi — preserve elemen cream interior). Jalankan ulang script ini kalau user ganti file logo.
- 2026-06-13 (Tahap 3): **Gotcha cache dev server** — menghapus/memindah root layout TIDAK ter-hot-reload bersih (muncul error "two <html>"). Selalu RESTART dev server setelah ubah struktur layout/root. Production build bersih membuktikan source benar.
- 2026-06-13 (Tahap 3): **Typing motion/react** — ease cubic-bezier `[0.22,1,0.36,1]` di dalam objek `Variants` konstan harus dianotasi `const x: Variants = {...}` (inline di prop motion aman karena contextual typing). Dan jangan `setState` sinkron di body `useEffect` (aturan eslint react-hooks/set-state-in-effect) — pakai derived value.
- 2026-06-13 (Tahap 3): Screenshot preview kadang timeout karena loop RAF Lenis; verifikasi via `preview_eval`/DOM tetap andal.
