# PRD — Website Wafinix v1

> Product Requirements Document. Acuan fungsional seluruh pengembangan.
> Rancangan lengkap: lihat `docs/PLAN.md`. Progres: `docs/PROGRESS.md`.

## 1. Latar Belakang & Tujuan

Wafinix adalah software house (website, sistem manajerial, ERP, AI/chatbot) dengan target pasar **Indonesia dan global**. Website ini adalah:
1. **Etalase jasa** — menjelaskan layanan, solusi per industri, dan harga
2. **Mesin order** — pelanggan memesan paket dan membayar (Midtrans + crypto manual), semua transaksi tercatat otomatis
3. **Bukti kemampuan** — kualitas UI/UX, animasi 3D/scroll, dan keamanan website ini sendiri adalah demo produk

## 2. Target Pengguna

| Persona | Kebutuhan | Halaman kunci |
|---|---|---|
| Pemilik UMKM (ID) | Website terjangkau, jelas harganya, bisa bayar QRIS | /harga, /order, WhatsApp |
| Manajer bisnis (resto/hotel/travel/properti/haji-umroh) | Solusi spesifik industrinya + contoh nyata | /solusi, /demo/[slug] |
| Perusahaan menengah-besar | Sistem custom (POS/ERP/AI), proses profesional berbasis dokumen | /layanan, /tentang, konsultasi |
| Klien global (EN) | Kualitas internasional, harga USD, bayar kartu/crypto | /en, /harga, /order |
| Admin Wafinix | Kelola order, verifikasi pembayaran, balas pesan | /admin |

## 3. Fitur per Halaman

### Publik (bilingual /id /en)
- **Home**: hero 3D interaktif, ringkasan layanan, marquee tech stack, horizontal scroll 9 industri, globe 3D "Indonesia & Global", pinned scrollytelling "Proses Kami" (5 langkah berbasis dokumen), stats count-up, testimoni, section "Keamanan Standar Kami", CTA
- **/layanan**: 7 kategori (Website, Sistem Manajerial, Order & Pembayaran Terintegrasi, ERP & Custom, AI & Chatbot, Mobile, UI/UX & Motion) + grid tech stack terkategori
- **/solusi**: 8 industri — UMKM, Ekspor-Impor, Restoran, Hotel, Pariwisata & Web Trip, Properti, Haji & Umroh, Korporat
- **/harga**: 4 tier (Personal / UMKM / Bisnis / Enterprise), sub-paket per layanan, add-on, tabel dokumen & fitur keamanan per tier, IDR (id) / USD (en), CTA → /order
- **/portofolio** + **/portofolio/[slug]**: 8 case study dummy (data-driven, mudah diganti portofolio nyata)
- **/demo/[slug]**: 8 mock-UI interaktif (kopi-nusantara, sajira-restaurant, amara-hotel, tripnusa, safar-mabrur, primaland, eximtrade, kasirpro) dengan banner "Konsep demo oleh Wafinix"
- **/tentang**: cerita, nilai, proses kerja berbasis dokumen
- **/kontak**: form (nama, email, WA, pesan) → tersimpan ke DB + notifikasi email; tombol WhatsApp
- **/order**: form multi-step dari paket terpilih → buat order berkode `WFX-YYYY-XXXXXX`
- **/order/[code]**: status order + pembayaran (tab Midtrans Snap / tab Crypto manual)
- **/legal/...**: syarat-ketentuan, kebijakan-privasi, lisensi-dan-sla (ID+EN, template umum — review penasihat hukum sebelum produksi)

### Admin (/admin, non-i18n, Supabase Auth + MFA)
- Dashboard ringkasan (order baru, menunggu verifikasi, revenue)
- Orders: list/filter/detail/ubah status
- Payments: antrean verifikasi crypto (link block explorer), konfirmasi/tolak
- Messages: inbox pesan kontak
- Settings: kelola alamat wallet crypto (ter-audit + email alert)

## 4. Alur Order & Pembayaran (ringkas)

```
/harga → pilih paket → /order?paket=slug → form multi-step
  → server action: validasi Zod + Turnstile + buat order (harga dari server!)
  → /order/[code]
      ├─ Tab Lokal/Kartu: Midtrans Snap (sandbox) → webhook (signature SHA-512
      │   + cocokkan nominal) → status paid otomatis
      └─ Tab Crypto: pilih USDT/USDC/USDe + jaringan (ERC20/BEP20/TRC20/Polygon/Plasma)
          → tampil wallet + QR (server-rendered) → submit tx hash
          → awaiting_verification → admin verifikasi → paid
  → email Resend ke admin & pelanggan pada setiap perubahan status
```

Status order: `pending_payment → paid → in_progress → review → completed` (atau `cancelled`).

## 5. Prioritas

| Prioritas | Lingkup |
|---|---|
| P0 (v1) | Semua halaman publik, order+pembayaran sandbox, admin panel, keamanan dasar (lihat ARCHITECTURE) |
| P1 (v1.1) | Portofolio nyata, blog, PayPal, verifikasi tx semi-otomatis via block explorer API |
| P2 (v2) | CMS konten di admin, crypto gateway otomatis, demo chatbot AI live (WafiBot) |

## 6. Non-fungsional
- Bilingual penuh; tidak ada teks hardcoded di komponen (semua via next-intl)
- Responsive 360–1920px; `prefers-reduced-motion` mematikan animasi
- Lighthouse Performance & SEO ≥ 90 (produksi); 3D lazy-load
- Keamanan: lihat `docs/ARCHITECTURE.md` bagian Keamanan
