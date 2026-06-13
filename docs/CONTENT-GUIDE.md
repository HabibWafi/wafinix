# CONTENT-GUIDE — Website Wafinix

## Tone of Voice
- **ID**: hangat, percaya diri, tidak kaku. "Kami bantu bisnis Anda tumbuh" bukan "Perusahaan kami menyediakan solusi". Sapa dengan "Anda". Hindari jargon tanpa penjelasan.
- **EN**: friendly-professional, concise. Active voice. "We build systems that grow with you."
- Selalu tulis kedua bahasa sekaligus saat menambah konten.

## Di Mana Mengedit Apa

| Konten | File |
|---|---|
| Teks UI & section (heading, paragraf, tombol) | `src/messages/id.json` + `en.json` |
| Layanan (7 kategori) | `src/data/services.ts` |
| Industri/solusi (8) | `src/data/industries.ts` |
| Tech stack (kategori + item) | `src/data/techstack.ts` |
| Paket & harga (tier, sub-paket, add-on, IDR/USD) | `src/data/pricing.ts` |
| Portofolio & demo | `src/data/portfolio.ts` |
| Kontak, sosmed, WhatsApp, alamat | `src/data/site.ts` |

## Cara Menambah Portofolio Nyata
1. Tambah entri di `src/data/portfolio.ts` (slug, judul, industri, ringkasan id/en, fitur, tech, gambar, `demoUrl` — boleh URL live project menggantikan `/demo/...`)
2. Letakkan gambar di `public/portfolio/<slug>/`
3. Selesai — grid, filter, dan halaman detail otomatis.

## Cara Mengubah Harga
Edit `src/data/pricing.ts`. Tiap sub-paket punya `priceIdr` dan `priceUsd` (number) + `priceNote` opsional ("mulai dari", "per bulan"). Jangan pernah menulis harga hardcoded di komponen/messages — halaman order membaca file ini di server.

## Konten Placeholder (GANTI sebelum produksi)
- [ ] No. WhatsApp & email di `src/data/site.ts` (sementara: `+62 800-0000-0000`, `halo@wafinix.com`)
- [ ] Alamat kantor & nama badan usaha (PT/CV) — juga di halaman legal
- [ ] Testimoni (sementara fiktif, tandai "ilustrasi")
- [ ] 8 portofolio dummy → ganti bertahap dengan proyek nyata
- [ ] Halaman legal direview penasihat hukum
