# TESTING — Website Wafinix

Checklist QA. Jalankan penuh di Tahap 12; bagian relevan dijalankan tiap tahap selesai.

## Per Tahap (cek cepat)
- [ ] `npm run build` lolos tanpa error/warning baru
- [ ] `npm run lint` bersih
- [ ] Halaman yang dikerjakan tampil benar di `/id` dan `/en` (tidak ada key i18n bocor seperti `home.hero.title`)
- [ ] Responsive: 360px, 768px, 1280px, 1920px
- [ ] `prefers-reduced-motion: reduce` → animasi mati, konten tetap terlihat (emulasi via DevTools)

## Visual & Motion
- [ ] Hero 3D merespons mouse + scroll; fallback statis muncul saat reduced-motion
- [ ] Globe berputar + arc tampil
- [ ] "Proses Kami" ter-pin, 5 langkah berurutan, tidak ada jump saat unpin
- [ ] Horizontal scroll industri mulus, bisa di-scroll balik, tidak menjebak scroll mobile
- [ ] Page transition antar halaman tanpa flash putih
- [ ] Dekorasi tidak menutupi/mengganggu teks di semua breakpoint, kontras AA terjaga

## E2E Order — Midtrans (sandbox)
- [ ] /harga → pilih paket → form order → validasi error tampil (kosong/email salah)
- [ ] Submit → dapat `WFX-xxxx-xxxxxx` → halaman `/order/[code]`
- [ ] Bayar Snap sandbox (QRIS simulator / VA) → webhook diterima → status order otomatis `paid`
- [ ] Order muncul di /admin/orders dengan payment `confirmed`
- [ ] Email notifikasi terkirim (admin + pelanggan)
- [ ] Buka ulang `/order/[code]` → status terkini tampil

## E2E Order — Crypto manual
- [ ] Tab crypto: pilih USDT + BEP20 → alamat & QR tampil, 6 char awal/akhir ditonjolkan
- [ ] Submit tx hash dummy → status `awaiting_verification` → muncul di antrean admin
- [ ] Admin verifikasi (link explorer benar per network) → order `paid` → email terkirim
- [ ] Admin tolak → payment `failed`, order tetap `pending_payment`

## Keamanan
- [ ] Webhook signature salah → 403/ignored, status tidak berubah
- [ ] Webhook `gross_amount` tidak cocok → ditolak + tercatat
- [ ] Webhook dikirim 2x → tidak dobel catat (idempotent)
- [ ] `/admin/*` tanpa login → redirect ke /admin/login; user non-admin → ditolak
- [ ] Query Supabase dengan anon key langsung → ditolak RLS (uji via curl)
- [ ] Security headers ada di response (CSP, HSTS, X-Frame-Options, nosniff)
- [ ] Ganti wallet di settings → minta re-auth, tercatat di audit_logs, email alert masuk
- [ ] Form publik: rate limit aktif (spam 10x cepat → ditolak), Turnstile wajib
- [ ] Tidak ada secret di bundle client (cek `npm run build` output / view-source)

## Pra-Deploy
- [ ] Lighthouse (produksi build): Performance ≥ 90, SEO ≥ 90, A11y ≥ 90
- [ ] sitemap.xml & robots.txt tersedia; metadata + OG tiap halaman
- [ ] 404 & error page custom dua bahasa
- [ ] Semua placeholder `CONTENT-GUIDE.md` §Placeholder sudah dicek statusnya
