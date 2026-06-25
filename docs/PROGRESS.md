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

## ✅ Tahap 4 — Home (selesai 2026-06-13)
- [x] Hero: teks reveal + rich title (underline coretan) + **HeroScene 3D R3F** (mouse-follow + scroll scale/opacity) + fallback statis
- [x] ServicesPreview (7 kartu dari data/services.ts)
- [x] TechMarquee (data/techstack.ts → techMarquee)
- [x] **Horizontal scroll 9 industri** — Framer `useScroll`+sticky (BUKAN GSAP, lebih andal dgn Lenis) + fallback overflow-x
- [x] **Globe 3D** "Dari Indonesia untuk dunia" (dotted sphere + arc Jakarta→dunia) + fallback SVG
- [x] **Pinned scrollytelling "Proses Kami"** (5 langkah, progress bar, crossfade) — Framer sticky + fallback list
- [x] Stats count-up (espresso), Testimonials (ilustrasi), Security "Aman sejak fondasi", FinalCTA + WhatsApp
- [x] SectionDivider antar batas warna; semua reduced-motion aware
- [x] Dua bahasa lengkap (t.rich + t.raw arrays); build + lint bersih; verifikasi desktop+mobile, ID+EN, 3D WebGL jalan tanpa error console
- [x] Commit

## 🔄 Tahap 5 — Layanan & Solusi (dipecah 5a/5b)
- [x] data/services.ts (7, + `points`), industries.ts (9), techstack.ts (kategori + techMarquee)
- [x] **5a /layanan**: 7 layanan sebagai baris editorial zig-zag (bukan grid identik) + grid tech stack terkategori (chip) + CTABand; PageHeader & CTABand reusable; dua bahasa; build SSG lolos; commit
- [x] **5b /solusi**: 9 industri sebagai kartu solusi kaya (Tantangan→Solusi→Fitur), grid 2 kolom; `data/industries.ts` diperluas (`problem`/`solution`/`features`); messages `solusi`; dua bahasa; build SSG lolos
- [x] **Perbaikan UI (dari feedback mobile user)**: menu mobile jadi sheet opaque slide-dari-atas (z-60, h-100dvh) — fix transparan; IndustriesScroll Home dari scroll-jack horizontal → grid responsif natural; TechGrid /layanan jadi panel kategori berbatas jelas
- Catatan: polish Home (eyebrow cadence, :active, transition) + impeccable init (PRODUCT.md/DESIGN.md) sudah di commit 39026f6. Preview lokal sempat tidak stabil (port 3000 ditahan proses lain) — verifikasi via build SSG + URL produksi.

## ✅ Tahap 6 — Harga
- [x] data/pricing.ts: 4 tier (Personal/UMKM/Bisnis/Enterprise) + add-on, display IDR+USD per locale
- [x] /harga: kartu tier (Bisnis highlighted), dokumen per tier, fitur keamanan per tier, add-on, CTA → /order (consult → /kontak)
- [ ] FAQ harga + JSON-LD FAQPage (ditunda — opsional, bisa di finishing)
- [x] Build SSG dua bahasa; commit

## ✅ Halaman ringan (didahulukan untuk hapus 404 navbar; bagian dari Tahap 12)
- [x] /tentang (cerita + nilai + CTA), /kontak (WhatsApp/email/lokasi/jam + CTA), legal: /legal/{syarat-ketentuan, kebijakan-privasi, lisensi-dan-sla} (LegalDoc + disclaimer "review hukum")
- [x] PageHeader & CTABand reusable dipakai ulang; build SSG dua bahasa
- Sisa 404 navbar/footer kini hanya /order & /portofolio (Tahap 7–9)

## ✅ Tahap 7 — Portofolio A
- [x] data/portfolio.ts (8 entri; field challenge/solution/result/features/tech/accent/demo)
- [x] /portofolio grid + filter kategori (client); /portofolio/[slug] case study (hero accent, blok C/S/R, fitur, tech, tombol demo)
- [x] Demo 1–4: kopi-nusantara, sajira-restaurant, amara-hotel, tripnusa (standalone, palet masing-masing)
- [x] Infra demo: app/demo/layout.tsx (root layout terpisah, tanpa navbar Wafinix) + DemoBanner; proxy sudah exclude /demo
- [x] Build SSG lolos (16 case study path); commit

## ✅ Tahap 8 — Portofolio B (demo photo-real)
- [x] `data/demos.ts` — config 7 demo marketing (palet via CSS vars + URL foto stok Unsplash terverifikasi 200) + helper `img()`
- [x] Renderer `DemoPage` (nav, hero split/overlay, widget search/booking/reservasi, trust/feature bar, kartu berfoto, stats, footer)
- [x] Upgrade 4 demo lama (kopi/sajira/amara/tripnusa) → setara referensi; demo baru: safar-mabrur (ikuti referensi Kaaba+trust+paket+stats), primaland, eximtrade
- [x] KasirPro bespoke (dashboard POS: sidebar, KPI, chart bar, tabel transaksi, top produk)
- [x] Wiring: `portfolio.ts` semua `demo: true` → tombol "Lihat Demo" muncul untuk 8 case study
- [x] Build SSG 8 demo lolos; lint 0 error (warning <img> disengaja); commit
- Catatan: gambar = foto stok Unsplash via `<img>` (dipusatkan di demos.ts, mudah diganti aset user/nano-banana nanti)

## 🔄 Tahap 8.5 — Demo premium rebuild (re-elevasi ke standar Amara + fix gambar)
> Konteks: user minta tiap demo dinaikkan ke kualitas **Amara** (gold standard) TAPI layout & isi **bervariasi sesuai jenis web**, plus **fix gambar yang salah** (semua gambar diverifikasi visual: download → Read → cocokkan subjek). Pakai `src/components/demo/kit.tsx` (Rise/Eyebrow/Bezel/CTA), lucide strokeWidth 1.25, kit easing `cubic-bezier(0.32,0.72,0,1)`, `min-h-[100dvh]` hero, reduced-motion aman. Tiap demo jadi **komponen bespoke** `*Demo.tsx`, page-nya `return <XDemo />` (lepas dari `DemoPage`/`demos.ts`).
- [x] **Amara** (`AmaraDemo.tsx`) — GOLD STANDARD (editorial luxury hotel). commit aa3ea71
- [x] **Safar Mabrur** (`SafarDemo.tsx`) — fix gambar SALAH (rock-climber di About+Umroh Reguler, cincin kawin) → 7 foto Islami terverifikasi (Kaaba malam/close/tawaf, Masjid Nabawi, Blue Mosque, Al-Quran). Layout devotional: hero tengah + strip jadwal, hadits, paket featured+grid, keunggulan bernomor, journey stepper, galeri, testimoni komposit. commit dabebf1
- [x] **Sajira** (`SajiraDemo.tsx`) — dark fine-dining. fix gambar hero/steak SALAH (thali India) → 7 foto fine-dining (interior moody, steak slate, chef plating, salmon, pasta, B&W service, al-fresco). Layout: nav menyebar, hero+bar reservasi, **menu typeset dotted-leader**, chef's note, testimoni, CTA. commit 2119300
- [x] **TripNusa** (`TripNusaDemo.tsx`) — bright travel turquoise+coral. fix gambar SALAH (label Komodo/Toba/Bromo tapi fotonya Bali/Nusa Penida/flatlay) → foto akurat & bervariasi geografi (Padar/Komodo, Tanah Lot Bali, Bromo, Danau Toba, Nusa Penida Kelingking/Diamond, Lempuyang). Layout: hero+search widget, badges, paket (ribbon durasi+rating), spotlight Nusa Penida, 3-langkah, galeri, testimoni, CTA gradient. **commit <THIS>**
- [x] **Kopi Nusantara** (`KopiDemo.tsx`) — e-commerce kopi specialty/UMKM (sage-green + caramel di cream). Layout shop distinct: announcement bar gratis ongkir, nav toko (cart badge), **hero split product-forward** (bukan full-bleed), trust strip, **product grid** (Gayo/Toraja/Kintamani/Flores, +keranjang), **"dari kebun ke cangkir"** kini **fotografis** (cherries→roasting→pour-over di band gelap, sebelumnya icon-only), brand story split (petani), testimoni, **subscription/newsletter CTA**, footer. Gambar: 9 foto terverifikasi (5 lama + cherries `1746623691157` + sack `1690983325192` + roasting `1511537190424` + bag-flat). Catatan: coffee-bag `1672042382060` DITOLAK (label merek "Vulcan/Qatar"). page sudah `return <KopiDemo />`. commit <THIS>
- [x] **PrimaLand** (`PrimaLandDemo.tsx`) — portal properti navy #1f3a8a + gold #e0a800 di cool-light. Layout distinct: nav island, hero + **tabbed search** (Jual/Sewa/Semua + Lokasi/Tipe/Harga), **category chips** (Rumah/Apartemen/Tanah/Ruko), **featured property spotlight** (interior split + specs + highlights), **listing grid** (kartu: harga, KT/KM/luas pakai ikon BedDouble/Bath/Maximize, badge Dijual/Disewa), **stats+reasons band navy**, 3-langkah, testimoni, CTA "Pasang Iklan". Gambar terverifikasi: 5 eksterior + 1 interior (luxury house hero, white 2-story, modern villa, wood house, apartment facade, living-room interior). Tolak: row-house Inggris kuno `1650743679247` (bukan Indonesia/modern). **Catatan teknis:** `Rise` TIDAK menerima prop `style` — bungkus div di dalamnya. commit <THIS>
- [ ] **EximTrade** (ekspor-impor) — BERIKUTNYA. Masih `DemoPage` template. Palet slate #2c4a63 + amber #e3a547, BILINGUAL/English copy (config `demos.ts["eximtrade"]`). Verifikasi gambar dulu: pelabuhan/kontainer/cargo + komoditas (kopi `1447933601403` sudah ada, rempah/kakao/rotan — cek `1596040033229`, `1518977676601`, `1601493700631`).
- [ ] **KasirPro** — dashboard POS bespoke (cek polish).
- [ ] **KasirPro** — dashboard POS bespoke (sudah bespoke, bukan template marketing; cek apakah perlu polish).
- Catatan: foto stok Unsplash via `<img>` + helper `ux()` di `src/lib/unsplash.ts`. Metode fix gambar: WebSearch unsplash → WebFetch halaman foto utk ambil URL `images.unsplash.com/photo-...` (hindari `plus.unsplash.com` = premium) → curl kecil → Read utk verifikasi subjek. Build per demo lolos, push auto-deploy Vercel.

## 🔄 Tahap 9 — Supabase & Order (9a selesai; 9b butuh kunci Supabase)
- [x] **9a /order form multi-step** (react-hook-form + Zod, harga dibaca server dari pricing.ts, baca `?paket=`) → kirim ringkasan ke **WhatsApp** (interim, jalan tanpa backend). Hapus 404 /order. Commit.
- [x] **9b kode**: env Supabase (.env.local + Vercel prod), `supabase/migrations/0001_init.sql` (5 tabel + RLS deny-all), `lib/supabase/server` (service-role server-only), server action `createOrder` (Zod, harga & kode WFX dari server), OrderForm→persist→redirect, halaman status `/order/[code]`. Build+lint lolos; service key terverifikasi via PostgREST.
- [ ] **9b sisa**: ⏳ user jalankan `supabase/migrations/0001_init.sql` di Supabase SQL Editor (DDL tak bisa via API). Lalu verifikasi insert. Security headers + CSP + Turnstile + rate-limit ditunda ke pass keamanan.
- Catatan: build sempat gagal karena `.next/dev/types/routes.d.ts` korup (dev server menulis bersamaan) — fix: hapus `.next` lalu build ulang.

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
