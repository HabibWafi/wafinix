<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Wafinix — Panduan Pengembangan

Website software house Wafinix: company profile + sistem order/pembayaran + admin panel. Bilingual ID/EN. Tema Terracotta Warm.

## MULAI SETIAP SESI DI SINI
1. Baca `docs/PROGRESS.md` — tahap & item mana yang sedang berjalan
2. `git log --oneline -5` + `git status` — posisi commit terakhir & sisa pekerjaan
3. Kalau melanjutkan sesi terputus: `npm run build` dulu, perbaiki yang setengah jadi sebelum item baru
4. **Update PROGRESS.md setiap item selesai** (bukan di akhir sesi), commit tiap tahap selesai

## Perintah
- `npm run dev` — dev server (localhost:3000)
- `npm run build` — production build (wajib lolos sebelum commit tahap)
- `npm run lint`

## Dokumen acuan (docs/)
| File | Isi |
|---|---|
| PLAN.md | Rancangan lengkap yang disetujui user (sumber kebenaran) |
| PRD.md | Fitur per halaman, persona, alur order, prioritas |
| ARCHITECTURE.md | Struktur folder, skema DB, webhook, checklist keamanan, env vars |
| DESIGN-SPEC.md | Tokens warna/font, aturan dekorasi, motion guidelines, spec 3D |
| CONTENT-GUIDE.md | Tone ID/EN, lokasi edit konten, placeholder yang harus diganti |
| ROADMAP.md / TESTING.md / PROGRESS.md | Fase rilis / checklist QA / status eksekusi |

## Konvensi penting
- **Semua teks UI lewat next-intl** (`src/messages/id.json` + `en.json`) — tidak ada string hardcoded di komponen; data terstruktur di `src/data/*.ts` dengan field `{ id, en }`
- **Harga hanya dari `src/data/pricing.ts`**, dibaca di server — jangan pernah percaya nominal dari client
- **Supabase hanya dari server** (service-role); RLS deny-all; rahasia tanpa prefix `NEXT_PUBLIC_`
- Komponen 3D/GSAP: client component + `next/dynamic` `ssr:false` + fallback statis; semua animasi hormati `prefers-reduced-motion`
- Dekorasi: komponen dari `src/components/decor/`, maks 2–3 per section, `aria-hidden`
- Komentar & nama variabel bahasa Inggris; copy website bahasa ID+EN
- Keamanan transaksi = prioritas tertinggi: lihat checklist `ARCHITECTURE.md` — jangan dilonggarkan demi kecepatan
