# ARCHITECTURE — Website Wafinix

## Stack
Next.js 15 (App Router, TS) · Tailwind v4 · Framer Motion (motion) + GSAP ScrollTrigger + Lenis · React Three Fiber + drei · next-intl · Supabase (Postgres+Auth) · midtrans-client · Resend · React Hook Form + Zod · Deploy: Vercel + Supabase cloud.

## Struktur Folder

```
src/
├── app/
│   ├── [locale]/              # id | en — semua halaman publik
│   │   ├── page.tsx           # Home
│   │   ├── layanan/  solusi/  harga/  tentang/  kontak/
│   │   ├── portofolio/ [slug]/
│   │   ├── order/  order/[code]/
│   │   └── legal/{syarat-ketentuan,kebijakan-privasi,lisensi-dan-sla}/
│   ├── demo/[slug]/           # demo mock-UI (non-i18n, standalone look)
│   ├── admin/                 # login, dashboard, orders, payments, messages, settings
│   └── api/webhooks/midtrans/route.ts
├── components/
│   ├── layout/    # Navbar, Footer, PageTransition, LanguageSwitcher
│   ├── decor/     # Blobs, TopoLines, Grain, FloatingShapes, SectionDivider,
│   │              # OutlineText, HandDrawn (semua aria-hidden, reduced-motion aware)
│   ├── three/     # HeroScene, Globe, DeviceTilt (semua dynamic import, ssr:false)
│   ├── motion/    # Reveal, Stagger, CountUp, Marquee, MagneticButton, ParallaxLayer
│   ├── ui/        # Button, Card, Input, Badge, Tabs, dst.
│   └── sections/  # section per halaman
├── data/          # services.ts, industries.ts, techstack.ts, pricing.ts,
│                  # portfolio.ts, site.ts (kontak/sosmed — placeholder dulu)
├── lib/
│   ├── supabase/  # server.ts (service-role, server-only), admin-auth.ts
│   ├── payments/  # midtrans.ts, crypto.ts (explorer URL per network)
│   ├── email.ts   # Resend
│   └── validation/ # skema Zod (order, kontak, txhash)
├── i18n/          # routing next-intl
└── messages/      # id.json, en.json
```

## Keputusan Teknis Penting

1. **Semua copy via next-intl** (`messages/*.json`); data terstruktur (layanan/harga/portofolio) di `data/*.ts` dengan field `{ id: string, en: string }`.
2. **Harga tunggal sumbernya `data/pricing.ts`** — dibaca server saat membuat order; nominal dari client tidak pernah dipercaya.
3. **Komponen 3D & GSAP hanya client component** dengan `next/dynamic` `ssr:false` + fallback statis (gambar/gradien) untuk reduced-motion & mobile lemah.
4. **Supabase hanya diakses dari server** (server actions / route handlers) dengan service-role key. RLS deny-all untuk `anon` di semua tabel — browser tidak pernah memegang kredensial DB.
5. **Admin auth**: Supabase Auth email/password + MFA TOTP; middleware memproteksi `/admin/*`; role dicek dari `app_metadata.role === 'admin'`.
6. Demo pages (`/demo/[slug]`) berdiri sendiri secara visual (branding fiktif masing-masing) tapi satu codebase.

## Skema Database (migration di `supabase/migrations/`)

```sql
orders         (id uuid pk, order_code text unique, locale, name, email, whatsapp,
                company, package_slug, package_snapshot jsonb, brief text,
                amount numeric, currency text, status text, created_at, updated_at)
payments       (id uuid pk, order_id fk, method text, provider_ref text,
                asset text, network text, tx_hash text, amount numeric,
                status text, raw_payload jsonb, verified_by, verified_at, created_at)
contact_messages(id, name, email, whatsapp, message, status, created_at)
crypto_wallets (id, network text, asset text, address text, is_active bool, updated_at)
audit_logs     (id, admin_id, action text, entity text, entity_id,
                old_value jsonb, new_value jsonb, created_at)
```
Status enum (cek constraint): orders `pending_payment|paid|in_progress|review|completed|cancelled`; payments `pending|awaiting_verification|confirmed|failed|expired`.

## Alur Webhook Midtrans
1. POST `/api/webhooks/midtrans` → hitung `sha512(order_id+status_code+gross_amount+SERVER_KEY)` dan bandingkan `signature_key`
2. Ambil order dari DB; cocokkan `gross_amount` == `orders.amount` dan order ada
3. Idempotent: jika payment dengan `provider_ref` sama sudah `confirmed`, balas 200 tanpa perubahan
4. Map status Midtrans (`settlement/capture→confirmed`, `pending→pending`, `deny/cancel/expire→failed/expired`) → update payments + orders dalam satu transaksi
5. Kirim email notifikasi; selalu balas 200 agar Midtrans tidak retry badai

## Keamanan (checklist implementasi)
- [ ] Security headers di `next.config.ts`: CSP ketat (nonce untuk inline), HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy
- [ ] Wallet address: render server component saja; QR digenerate server (`qrcode`); tampilkan 6 char awal/akhir menonjol
- [ ] Perubahan wallet: re-auth + MFA, tulis `audit_logs`, email alert ke owner
- [ ] Webhook: verifikasi signature + nominal + idempotensi (lihat atas)
- [ ] `order_code`: `WFX-<tahun>-<6 char acak crypto-random>` (anti enumerasi)
- [ ] Zod di semua server action; Cloudflare Turnstile + rate limit (per IP, tabel/utilitas sederhana) di form publik
- [ ] Env: `SUPABASE_SERVICE_ROLE_KEY`, `MIDTRANS_SERVER_KEY`, `RESEND_API_KEY` server-only — tidak ada `NEXT_PUBLIC_` untuk rahasia
- [ ] Semua aksi admin tercatat di `audit_logs`

## Env Vars (`.env.local` — lihat `.env.example`)
```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=          # publik (untuk auth client admin)
NEXT_PUBLIC_SUPABASE_ANON_KEY=     # publik, RLS deny-all
SUPABASE_SERVICE_ROLE_KEY=         # server only
MIDTRANS_SERVER_KEY=  MIDTRANS_CLIENT_KEY=  MIDTRANS_IS_PRODUCTION=false
RESEND_API_KEY=  NOTIFY_EMAIL_TO=
TURNSTILE_SECRET_KEY=  NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```
