# Rancangan Website Wafinix — Software House Full-Stack (ID + Global)

## Context

Wafinix adalah perusahaan jasa pembuatan website, sistem, dan aplikasi (company profile, e-commerce, POS/kasir, inventori, ERP, AI/chatbot, order & pembayaran terintegrasi) dengan target pasar Indonesia dan global, melayani banyak industri (UMKM, ekspor-impor, restoran, hotel, pariwisata/trip, properti, haji & umroh, korporat). Folder proyek `D:\Website\laragon\www\wafinix` masih kosong — proyek greenfield.

Website ini bukan sekadar company profile: ada **sistem pemesanan paket, pembayaran (Midtrans + crypto manual), dan admin panel** untuk mengelola order — sehingga sekaligus jadi bukti nyata kemampuan Wafinix membuat sistem yang mereka jual.

Keputusan user (sudah dikonfirmasi):
- **Stack**: Next.js + Framer Motion; **deploy Vercel + database Supabase** (selama pengembangan)
- **Tema**: Terracotta Warm (krem hangat + terracotta + coklat tua)
- **Bahasa**: Bilingual ID + EN (harga IDR di versi ID, USD di versi EN)
- **Logo**: Lettermark "W" + wordmark "wafinix"
- **Pembayaran lokal**: Midtrans Snap (mode sandbox dulu) — QRIS, VA/transfer bank, e-wallet, kartu
- **Crypto**: manual — alamat wallet per jaringan + submit tx hash + verifikasi admin
- Semua fitur harus benar-benar berjalan (bukan mockup)

---

## 1. Brand Identity

### Logo (digenerate AI — gambar logo sungguhan)
User minta logo dari hasil **generate gambar AI** (tool `generate_image` Higgsfield tersedia), bukan SVG kode saja. Alur:
1. **Generate 3–4 konsep logo** lettermark "W" + wordmark "wafinix" dengan prompt terarah: gaya minimalis modern, ujung membulat (hangat/approachable), palet terracotta `#C8623E` → amber gradient di background krem, kesan tech yang ramah (W menyerupai grafik naik / kurung kode `\/\/`)
2. **Tunjukkan ke user → user pilih 1** (atau minta revisi prompt)
3. **Post-process** hasil terpilih: `remove_background` (PNG transparan) + `upscale_image` (resolusi tinggi)
4. **Turunan**: versi untuk background terang & gelap, simbol "W" saja di-crop untuk favicon set (ICO + PNG 192/512 + apple-touch), file di `public/brand/` + komponen `<Logo />`
5. (Opsional, setelah logo final) buat ulang simbol "W" sebagai SVG sederhana yang menjiplak desain terpilih — agar tajam di ukuran kecil (favicon/navbar); raster hasil generate tetap jadi logo utama

### Palet Warna (Terracotta Warm)
| Token | Warna | Pakai untuk |
|---|---|---|
| `cream` | `#FAF6F0` | Background utama |
| `sand` | `#F1E8DC` | Section alternatif, card |
| `terracotta` | `#C8623E` | Primary — CTA, aksen, link |
| `terracotta-light` | `#E08D63` | Hover, gradient |
| `amber` | `#E3A547` | Aksen sekunder, highlight |
| `espresso` | `#33261C` | Teks heading, section gelap |
| `cocoa` | `#5C4A3B` | Teks body |
| `sage` | `#8A9B7C` | Aksen tersier (status sukses, variasi ikon) |

Kontras WCAG AA; section gelap espresso dipakai selang-seling untuk ritme visual.

### Tipografi
- **Heading**: **Fraunces** (serif hangat — kesan human & craft)
- **Body/UI**: **Plus Jakarta Sans** (dirancang di Jakarta — cerita brand)
- Via `next/font/google`.

### Aset 2D & 3D
- **2D**: Ilustrasi SVG custom flat-warm (palet brand): per layanan, ikon 9 industri, proses kerja, texture grain halus.
- **3D (React Three Fiber)**: scene 3D nyata di section kunci — lihat bagian "Pengalaman 3D & Scroll" di bawah. User sudah konfirmasi: performa berat tidak masalah untuk fase lokal/dev; optimasi hosting menyusul (lazy-load, fallback statis untuk mobile & reduced-motion tetap dibuat sejak awal).

### Elemen Dekoratif (background & pinggiran — anti monoton)
Dibuat sebagai komponen reusable (`<Decor />` variants) agar konsisten di semua halaman:
- **Gradient blobs organik** — bulatan blur besar terracotta/amber/sage di belakang section, bergerak lambat (drift) + parallax saat scroll
- **Pola kontur topografi** — garis kontur tipis warna sand di background section tertentu (cocok dengan tema earthy/warm, jadi ciri khas visual Wafinix)
- **Grain/noise overlay** halus di seluruh halaman (kesan hangat seperti kertas)
- **Bentuk geometris mengambang** di pinggir section: lingkaran, setengah-bulat, squiggle, plus/sparkle — dengan parallax kecepatan berbeda
- **Aksen hand-drawn** dekat heading: coretan underline, panah melengkung, bintang kecil (SVG stroke animasi draw-on saat masuk viewport)
- **Section divider** bervariasi: kurva/gelombang antara cream ↔ sand ↔ espresso (tidak semua section dipotong lurus)
- **Outline typography raksasa** sebagai dekorasi background (mis. teks "wafinix" / nama section outline besar di belakang konten, bergeser parallax)
- **Dotted grid / garis diagonal** kecil di sudut-sudut card & section sebagai tekstur
- Aturan pakai: maksimal 2–3 jenis dekorasi per section, kontras konten tetap AA, semua dekorasi `aria-hidden` dan ikut mati saat reduced-motion

---

## 2. Struktur Halaman

```
/(id|en)
├── Home              — hero animasi, layanan ringkas, marquee tech stack, industri,
│                       proses, stats, testimoni, CTA
├── /layanan          — detail 7 kategori layanan
├── /solusi           — per industri: UMKM, Ekspor-Impor, Restoran, Hotel,
│                       Pariwisata & Web Trip, Properti, Haji & Umroh, Korporat
├── /harga            — paket bertingkat, toggle kategori, CTA "Pesan Sekarang"
├── /portofolio       — grid + filter → /portofolio/[slug] (case study)
├── /demo/[slug]      — demo view mock-UI per jenis web (8 dummy)
├── /tentang          — cerita, nilai, proses kerja berbasis dokumen
├── /kontak           — form (tersimpan ke DB) + WhatsApp + email
├── /order            — form pemesanan paket (multi-step)
├── /order/[code]     — status order + pilihan pembayaran (trackable oleh pelanggan)
└── /legal/...        — syarat-ketentuan, kebijakan-privasi, lisensi-dan-sla

/admin  (di luar i18n, proteksi Supabase Auth)
├── /admin/login
├── /admin            — dashboard: order baru, menunggu verifikasi, ringkasan revenue
├── /admin/orders     — list + filter status → detail, ubah status
├── /admin/payments   — antrean verifikasi (crypto: link block explorer per jaringan)
├── /admin/messages   — inbox pesan kontak
└── /admin/settings   — kelola alamat wallet crypto per jaringan
```

### Kategori Layanan
1. **Website** — landing page, company profile, toko online, web trip/booking
2. **Sistem Manajerial** — kasir/POS, inventori, pencatatan keuangan, laporan
3. **Order & Pembayaran Terintegrasi** — payment gateway, order otomatis tercatat
4. **ERP & Aplikasi Custom** — HR, akuntansi, produksi, multi-cabang
5. **AI & Chatbot** — chatbot AI web/WhatsApp, integrasi AI ke sistem, web berbasis AI
6. **Aplikasi Mobile** — companion app
7. **UI/UX & Motion Design** — di-showcase oleh website ini sendiri

### Portofolio: 8 dummy + demo view
Data-driven dari `data/portfolio.ts` (portofolio nyata nanti = tambah entri). Tiap case study → tombol "Lihat Demo" → `/demo/[slug]` (mock-UI interaktif dengan banner "Konsep demo oleh Wafinix"):
1. *Kopi Nusantara* — company profile + katalog UMKM
2. *Sajira Restaurant* — reservasi & menu digital QR
3. *Amara Hotel* — booking kamar
4. *TripNusa* — paket tur & jadwal
5. *Safar Mabrur* — travel haji & umroh
6. *PrimaLand* — listing properti + filter
7. *EximTrade* — ekspor-impor bilingual
8. *KasirPro* — mock dashboard kasir/POS + laporan
(+opsional: *WafiBot* — demo chatbot AI yang bisa dicoba)

### Tech Stack Showcase ("Teknologi yang Kami Kuasai")
Marquee logo animasi di Home + grid terkategori di /layanan. Data `data/techstack.ts`, logo via simple-icons:
| Kategori | Teknologi |
|---|---|
| Bahasa | PHP, JavaScript, TypeScript, SQL, HTML5, CSS3, Dart |
| Backend | Laravel, CodeIgniter, Node.js, Express, NestJS, REST API |
| Frontend | React, Next.js, Vue.js, Nuxt, Tailwind CSS, Bootstrap, Framer Motion, GSAP |
| Mobile | Flutter, React Native |
| Database | MySQL/MariaDB, PostgreSQL, MongoDB, Redis, SQLite, Supabase |
| CMS & E-commerce | WordPress, WooCommerce |
| AI | Claude API (Anthropic), OpenAI API, Gemini, LangChain, RAG, vector DB, WhatsApp AI Chatbot |
| Integrasi & Pembayaran | Midtrans, Xendit, PayPal, Crypto (USDT/USDC), WhatsApp Business API, Google Maps API |
| Infrastruktur | Docker, Nginx, VPS/cPanel, AWS, Google Cloud, Vercel, Cloudflare, Git/GitHub, Figma |

---

## 3. Paket & Harga (riset pasar 2025–2026)

Riset: company profile profesional ID Rp 3–8jt, toko online Rp 8–25jt, sistem custom ~Rp 2–3jt/modul, ERP puluhan–ratusan juta; global $3k–15k (small business), $15k+ (custom app). Positioning **mid-tier**, pembeda = kualitas motion/UX + pengembangan berbasis dokumen. Angka tersimpan di `data/pricing.ts` (mudah diubah):

| Tier | Untuk siapa | Kisaran ID | Kisaran EN |
|---|---|---|---|
| **Personal** | Portfolio, undangan digital, landing pribadi | Rp 1,9 – 3,5 jt | $350 – $700 |
| **UMKM** | Company profile, landing bisnis, katalog | Rp 4,5 – 9 jt | $900 – $1.800 |
| **Bisnis** | Toko online, booking, web trip, haji-umroh | Rp 12 – 35 jt | $2.500 – $7.000 |
| **Enterprise** | POS, ERP, integrasi pembayaran, multi-cabang | mulai Rp 40 jt (quote) | from $8.000 (quote) |

- Sub-paket per layanan dalam tiap tier; add-on: maintenance (Rp 500rb–2jt/bln), domain+hosting, SEO, copywriting, motion premium, chatbot AI.
- Tiap paket: rincian fitur, estimasi waktu, jumlah revisi, garansi bug. Enterprise → CTA "Konsultasi Gratis".

### Dokumen perancangan sebagai pembeda paket (USP)
Positioning: *"Kami tidak langsung coding — setiap proyek dimulai dari dokumen perancangan."* Tampil di "Proses Kami" dan rincian paket:
| Tier | Dokumen yang klien terima |
|---|---|
| Personal | Sitemap + ringkasan kebutuhan |
| UMKM | Mini-PRD + UI mockup + checklist testing |
| Bisnis | PRD + UI/UX Spec + Database Design + Testing Plan + dokumentasi penggunaan |
| Enterprise | Project Charter + BRD + SRS + SOW + Architecture Doc + DB Design Doc + UI/UX Spec + Roadmap + Testing/UAT + SLA + training |

---

## 4. Sistem Order, Pembayaran & Admin

### Alur Order
1. `/harga` → pilih paket → `/order?paket=slug`
2. Form multi-step (kontak, kebutuhan/brief) → server action membuat order + kode unik `WFX-2026-XXXX` di Supabase
3. Redirect ke `/order/[code]` — halaman status yang bisa dibuka ulang pelanggan, berisi pilihan pembayaran:
   - **Tab Lokal/Kartu**: Midtrans Snap popup (sandbox saat dev) — QRIS, VA semua bank, GoPay/ShopeePay, kartu internasional. Webhook `/api/webhooks/midtrans` (verifikasi signature) meng-update status otomatis → **semua transaksi tercatat tanpa input manual**
   - **Tab Crypto**: pilih aset (**USDT, USDC, USDe**; BTC/ETH ditandai "coming soon") → pilih jaringan (**ERC20, BEP20, TRC20, Polygon, Plasma** — catatan: Morpho bukan jaringan, sudah dikoreksi) → tampil alamat wallet + QR code → pelanggan submit tx hash → status `awaiting_verification` → admin verifikasi (link langsung ke block explorer). Nominal crypto memakai harga USD paket.
4. Setiap perubahan status → notifikasi email (Resend) ke admin & pelanggan + tombol WhatsApp

Pembayaran internasional v1 = kartu via Midtrans + crypto; PayPal dicatat sebagai opsi fase 2.

### Skema Database (Supabase Postgres)
- `orders` — id, order_code, locale, nama, email, whatsapp, perusahaan, package_slug, package_snapshot (jsonb), brief, amount, currency, status (`pending_payment → paid → in_progress → review → completed` / `cancelled`), timestamps
- `payments` — id, order_id, method (`midtrans` | `crypto_manual`), provider_ref, asset, network, tx_hash, amount, status (`pending / awaiting_verification / confirmed / failed / expired`), raw_payload (jsonb), verified_by, verified_at
- `contact_messages` — nama, email, whatsapp, pesan, status (`new / replied / closed`)
- `crypto_wallets` — network, asset, address, is_active (dikelola dari /admin/settings, perubahan ter-audit)
- `audit_logs` — admin_id, aksi, entity, nilai lama→baru (jsonb), timestamp
- Akses DB hanya dari server (server actions / route handlers dengan service-role key); **RLS deny-all untuk anon** — tidak ada query langsung dari browser. Admin login via Supabase Auth (email/password) + cek role, proteksi middleware di `/admin/*`.

### Keamanan (fokus: transaksi tidak bisa dimanipulasi)

**Anti-tamper alamat wallet (vektor phising utama pada crypto manual):**
- Alamat wallet hanya tersimpan di Supabase, dirender dari **server component** — tidak pernah dari state/localStorage/parameter URL yang bisa disuntik; QR code juga digenerate di server dari alamat yang sama
- **CSP ketat + security headers** (HSTS, X-Frame-Options DENY, Referrer-Policy, nosniff) — menutup XSS yang biasa dipakai menukar alamat di tampilan/clipboard
- Perubahan alamat wallet di /admin/settings: wajib **re-autentikasi + MFA**, tercatat di audit log, dan **kirim email peringatan ke owner** setiap ada perubahan
- Halaman pembayaran menampilkan 6 karakter awal & akhir alamat secara menonjol + instruksi "cocokkan sebelum transfer"
- (Roadmap v1.1) verifikasi tx hash semi-otomatis via API block explorer: cek alamat tujuan = wallet tersimpan, token contract benar, nominal cukup — sebelum admin klik konfirmasi

**Integritas pembayaran:**
- Webhook Midtrans: verifikasi **signature SHA-512** + cocokkan `gross_amount` & order_id dengan data DB (mencegah "bayar Rp1.000 status jadi lunas"); idempotent (webhook ganda tidak dobel-catat)
- Harga selalu diambil dari `data/pricing.ts` di server — nominal dari client tidak pernah dipercaya
- `order_code` acak non-sekuensial (anti enumerasi); halaman status order tidak menampilkan data sensitif penuh
- Status order hanya bisa berubah lewat webhook terverifikasi atau aksi admin yang ter-autentikasi — ada tabel `audit_logs` (siapa, aksi apa, kapan, nilai lama→baru) untuk semua aksi admin

**Proteksi umum:**
- Admin: Supabase Auth + **MFA/TOTP**, cookie secure + session pendek, middleware cek role di semua `/admin/*`
- RLS deny-all untuk anon; semua query lewat server dengan service-role key (tidak pernah ke browser)
- Validasi Zod di server untuk semua input; rate-limit + **Cloudflare Turnstile** (CAPTCHA) di form publik (order, kontak, submit tx hash)
- Kunci API hanya di env Vercel; `npm audit` & lockfile; backup otomatis Supabase
- Mode sandbox Midtrans selama dev; produksi = ganti env key (butuh KTP/NPWP/badan usaha)

### Keamanan sebagai bagian produk (selling point)
- Section **"Keamanan Standar Kami"** di Home/Tentang: SSL/HTTPS, proteksi OWASP Top 10, validasi input, backup rutin, audit log — trust signal untuk calon klien
- Masuk ke rincian paket harga per tier:
  | Tier | Fitur keamanan yang klien dapat |
  |---|---|
  | Personal/UMKM | SSL, security headers, validasi input, backup |
  | Bisnis | + rate limiting, audit log, integrasi pembayaran aman (verifikasi webhook) |
  | Enterprise | + review keamanan/hardening, RBAC, audit trail penuh, MFA admin, SLA keamanan |
- Add-on baru: **Security Hardening & Audit** untuk sistem yang sudah ada

---

## 5. Stack Teknis

| Bagian | Pilihan |
|---|---|
| Framework | **Next.js 15** (App Router) + TypeScript |
| Styling | **Tailwind CSS v4** + design tokens |
| Animasi | **Framer Motion (motion)** + **GSAP ScrollTrigger** (pinned/horizontal scroll) + **Lenis** smooth scroll; hormati `prefers-reduced-motion` |
| 3D | **React Three Fiber** + **@react-three/drei** (hero 3D, globe, device tilt) |
| i18n | **next-intl** — `/id` & `/en`, copy di `messages/*.json` |
| Database & Auth | **Supabase** (Postgres + Auth) via `@supabase/ssr` |
| Pembayaran | **midtrans-client** (Snap, sandbox) + crypto manual (QR via `qrcode`) |
| Email | **Resend** (notifikasi order & kontak) |
| Validasi & Form | React Hook Form + Zod |
| SEO | Metadata API, OG image, sitemap, robots, JSON-LD (Organization, Service, FAQPage) |
| Deploy | **Vercel** (env vars) + Supabase cloud free tier; dev lokal `npm run dev` di Windows |

### Pengalaman 3D & Scroll (sekaligus materi jualan utama)

**Section dengan 3D (React Three Fiber + drei):**
1. **Hero Home — scene 3D interaktif**: simbol "W" Wafinix 3D / komposisi bentuk geometris hangat (material terracotta-amber, lighting lembut) yang **mengikuti gerakan mouse** dan **berotasi/zoom mengikuti scroll** (scrollytelling pembuka)
2. **Section "Indonesia & Global"**: **globe 3D** dengan titik kota + garis arc koneksi Jakarta → dunia (visualisasi target pasar)
3. **Section layanan/portofolio**: device mockup (laptop/ponsel) dengan **tilt 3D** mengikuti pointer
4. Aset GLB tambahan bisa digenerate (tool generate_3d tersedia) bila perlu bentuk khusus; default: scene prosedural R3F (lebih andal & ringan dikontrol)

**Scroll animation & motion (Framer Motion + GSAP ScrollTrigger + Lenis):**
- **Pinned scrollytelling**: section "Proses Kami" ter-pin, 5 langkah proses muncul bergantian seiring scroll dengan progress line yang terisi
- **Horizontal scroll section**: galeri 9 industri bergeser horizontal saat scroll vertikal
- Hero: stagger reveal per kata, floating elements, **magnetic button**
- Parallax multi-layer pada ilustrasi & texture; image reveal dengan mask/clip-path
- Count-up stats saat masuk viewport; marquee tech stack; card hover lift + tilt
- **Page transition** antar halaman (curtain/fade terracotta)
- Navbar transparan → solid + progress bar baca di halaman panjang
- Semua punya fallback: `prefers-reduced-motion` mematikan animasi, mobile dapat versi ringan/statis

---

## 6. Dokumen Perancangan Proyek Ini (`docs/`)

Set ramping (BRD/SRS/SOW penuh tidak perlu untuk proyek sendiri) — sekaligus contoh deliverable yang Wafinix jual:
| Dokumen | Isi |
|---|---|
| `docs/PRD.md` | Tujuan, target user, fitur per halaman, alur order & pembayaran, prioritas |
| `docs/ARCHITECTURE.md` | Struktur folder, routing & i18n, skema DB, alur pembayaran & webhook, keputusan teknis |
| `docs/DESIGN-SPEC.md` | Design tokens, inventaris komponen, aturan animasi & reduced-motion |
| `docs/CONTENT-GUIDE.md` | Tone ID/EN, cara menambah portofolio/layanan/harga |
| `docs/ROADMAP.md` | v1 (semua di rancangan ini) → v1.1 (portofolio nyata, blog, PayPal) → v2 (CMS admin konten, crypto gateway otomatis, demo AI live) |
| `docs/TESTING.md` | Checklist QA + skenario E2E order→bayar→verifikasi |
| `docs/PROGRESS.md` | Checklist 12 tahap eksekusi — di-update setiap item selesai; acuan melanjutkan antar sesi |
| `CLAUDE.md` | Perintah, konvensi, lokasi data, instruksi "baca PROGRESS.md dulu" untuk sesi berikutnya |

---

## 7. Tahapan Eksekusi per Sesi (ramah limit usage) + Prompt per Tahap

Proyek dipecah menjadi **12 sesi mandiri**. Tiap sesi: cukup kecil untuk selesai sebelum limit, diakhiri kondisi yang **jalan & ter-commit** (git), dan progresnya dicatat di **`docs/PROGRESS.md`** (checklist per tahap — di-update setiap item selesai, bukan hanya di akhir, supaya kalau terputus tetap terlacak).

**Mekanisme anti-putus:** Tahap 1 membuat `CLAUDE.md` + `docs/PROGRESS.md`. Setiap sesi baru WAJIB mulai dengan membaca dua file itu — jadi sesi mana pun tahu persis posisi terakhir.

| # | Tahap | Isi | Prompt untuk Anda jalankan |
|---|---|---|---|
| 1 | **Fondasi** | `git init`, tulis semua `docs/` (PRD, ARCHITECTURE, DESIGN-SPEC, CONTENT-GUIDE, ROADMAP, TESTING, PROGRESS) + `CLAUDE.md`; scaffold Next.js + semua dependency; design tokens + font; commit | `Kerjakan Tahap 1 proyek Wafinix sesuai plan. Buat git init, semua dokumen docs/ + CLAUDE.md + docs/PROGRESS.md (checklist 12 tahap), scaffold Next.js lengkap dependency, design tokens Terracotta Warm, font Fraunces + Plus Jakarta Sans. Pastikan npm run dev jalan, lalu commit.` |
| 2 | **Logo & Brand** | Generate 3–4 konsep logo AI → saya pilih → remove background + upscale → varian + favicon + `<Logo />` | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 2: generate 3-4 konsep logo Wafinix (lettermark W, terracotta-amber, hangat minimalis), tunjukkan ke saya untuk dipilih, lalu proses jadi varian terang/gelap + favicon + komponen Logo. Update PROGRESS.md dan commit.` |
| 3 | **Layout & Dekorasi** | i18n next-intl (ID/EN), Navbar + switcher, Footer, page transition, komponen `<Decor />` (blobs, kontur topografi, grain, shapes, divider) | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 3: setup next-intl ID/EN, Navbar dengan language switcher, Footer, page transition, dan semua komponen dekoratif sesuai DESIGN-SPEC. Update PROGRESS.md dan commit.` |
| 4 | **Home** | Hero 3D R3F (mouse+scroll), globe 3D, pinned scrollytelling proses, horizontal scroll industri, marquee tech stack, stats, testimoni, CTA | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 4: halaman Home lengkap — hero 3D, globe Indonesia-Global, scrollytelling Proses Kami, horizontal scroll industri, marquee, count-up, magnetic button. Dua bahasa. Update PROGRESS.md dan commit.` |
| 5 | **Layanan & Solusi** | `data/services.ts`, `industries.ts`, `techstack.ts`; halaman /layanan + /solusi + grid tech stack | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 5: halaman Layanan (7 kategori termasuk AI & Chatbot) dan Solusi per industri, data-driven, dua bahasa, dengan animasi scroll. Update PROGRESS.md dan commit.` |
| 6 | **Harga** | `data/pricing.ts` (IDR/USD), 4 tier + sub-paket + add-on + tabel dokumen & keamanan per tier | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 6: halaman Harga — 4 tier Personal/UMKM/Bisnis/Enterprise dengan sub-paket, add-on, dokumen per tier, fitur keamanan per tier, IDR/USD sesuai locale, CTA ke /order. Update PROGRESS.md dan commit.` |
| 7 | **Portofolio A** | `data/portfolio.ts`, halaman /portofolio + [slug], demo 1–4 (Kopi Nusantara, Sajira, Amara, TripNusa) | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 7: halaman Portofolio + case study, dan 4 demo pertama (/demo: kopi-nusantara, sajira-restaurant, amara-hotel, tripnusa). Update PROGRESS.md dan commit.` |
| 8 | **Portofolio B** | Demo 5–8 (Safar Mabrur, PrimaLand, EximTrade, KasirPro dashboard) | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 8: 4 demo berikutnya (safar-mabrur, primaland, eximtrade, kasirpro). Update PROGRESS.md dan commit.` |
| 9 | **Supabase & Order** | Migration 5 tabel + RLS + audit; form order multi-step → `/order/[code]`; security headers/CSP; Turnstile | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 9: setup Supabase (migration, RLS deny-all, audit_logs), alur order dari /harga sampai halaman status /order/[code], security headers + CSP + rate limit. Saya akan kasih env Supabase. Update PROGRESS.md dan commit.` |
| 10 | **Pembayaran** | Midtrans Snap sandbox + webhook (signature + cocokkan nominal); crypto manual (wallet+QR+tx hash); email Resend | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 10: integrasi Midtrans Snap sandbox dengan webhook aman, alur pembayaran crypto manual (USDT/USDC/USDe, jaringan ERC20/BEP20/TRC20/Polygon/Plasma), notifikasi email. Update PROGRESS.md dan commit.` |
| 11 | **Admin Panel** | Login + MFA, dashboard, orders, verifikasi pembayaran (link explorer), messages, settings wallet (ter-audit + email alert) | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 11: admin panel lengkap — login Supabase Auth + MFA, dashboard, kelola order, antrean verifikasi crypto, inbox pesan, settings wallet dengan audit log. Update PROGRESS.md dan commit.` |
| 12 | **Legal, Kontak & Finishing** | Tentang, Kontak (form→DB), 3 halaman legal ID+EN; SEO + OG + sitemap; QA responsive/reduced-motion/keamanan; Lighthouse; deploy Vercel | `Baca CLAUDE.md dan docs/PROGRESS.md. Kerjakan Tahap 12: halaman Tentang, Kontak, legal (ToS, Privacy, Lisensi & SLA) dua bahasa, SEO lengkap, jalankan seluruh checklist TESTING.md, lalu bantu deploy ke Vercel. Update PROGRESS.md dan commit.` |

Urutan 1–8 (tampilan) dulu baru 9–11 (backend) supaya website sudah kelihatan jadi lebih cepat; tahap 9–11 butuh akun Supabase/Midtrans dari Anda.

### ⚠️ Jika sesi terhenti sebelum tahap selesai (kena limit / terputus)

1. **Jangan panik — progres tidak hilang**: kode tersimpan di disk, dan `docs/PROGRESS.md` mencatat item yang sudah dicentang. Commit terakhir adalah titik aman.
2. Saat limit pulih, buka **sesi baru** dan jalankan prompt ini:
   > `Saya melanjutkan proyek Wafinix di D:\Website\laragon\www\wafinix yang terputus. Baca CLAUDE.md dan docs/PROGRESS.md, lihat git status dan git log untuk tahu posisi terakhir. Verifikasi dulu apa yang sudah jalan (npm run dev / npm run build), perbaiki jika ada yang setengah jadi, lalu lanjutkan item PROGRESS.md yang belum tercentang dari tahap yang sedang berjalan. Update PROGRESS.md dan commit setelah selesai.`
3. Kalau ada error karena pekerjaan setengah jadi, prompt di atas sudah menyuruh verifikasi & perbaiki dulu sebelum lanjut — tidak perlu mengulang tahap dari awal.
4. Tips hemat limit: jalankan satu tahap per sesi, jangan gabung beberapa tahap; kalau limit hampir habis di tengah tahap, minta: `Berhenti dulu, rapikan kondisi sekarang supaya tidak error, update PROGRESS.md, dan commit` — supaya titik lanjutnya bersih.

## 8. Konten/akses yang dibutuhkan dari user (placeholder dulu jika belum ada)
- Nomor WhatsApp, email, alamat; nama badan usaha (PT/CV) untuk legal
- Akun Supabase (gratis) & Vercel — atau saya siapkan konfigurasinya dan Anda tinggal isi env
- Alamat wallet crypto Anda per jaringan (bisa diisi nanti via /admin/settings)
- Akun Midtrans sandbox (gratis, tanpa dokumen) untuk development

## 9. Verifikasi
- `npm run dev` → cek semua halaman `/id` & `/en`, responsive 360–1920px, reduced-motion
- **Cek 3D & scroll**: hero 3D merespons mouse & scroll, globe berputar, section proses ter-pin dengan benar, horizontal scroll industri jalan, page transition antar halaman mulus (cek via browser preview)
- **E2E order lokal**: pilih paket → order → bayar via Midtrans sandbox (simulator QRIS/VA) → webhook → status order otomatis `paid` → muncul di admin
- **E2E crypto**: pilih USDT/BEP20 → tampil wallet+QR → submit tx hash dummy → muncul di antrean verifikasi admin → verifikasi → status `paid`
- Form kontak tersimpan ke DB + email masuk; `npm run build` lolos; Lighthouse ≥ 90; deploy preview Vercel
- **Cek keamanan**: webhook dengan signature salah ditolak; webhook nominal tidak cocok ditolak; `/admin/*` tanpa login redirect; query Supabase sebagai anon ditolak (RLS); security headers muncul di response; ganti wallet memicu audit log + email; form publik kena rate-limit/Turnstile