# DESIGN-SPEC — Website Wafinix

Tema: **Terracotta Warm** — hangat, nyaman, mudah didekati, tetap profesional tech.

## Design Tokens (didefinisikan di `src/app/globals.css` via Tailwind v4 `@theme`)

| Token | Hex | Pakai |
|---|---|---|
| `--color-cream` | `#FAF6F0` | Background utama |
| `--color-sand` | `#F1E8DC` | Section alternatif, card |
| `--color-terracotta` | `#C8623E` | Primary: CTA, link, aksen |
| `--color-terracotta-light` | `#E08D63` | Hover, gradient |
| `--color-amber` | `#E3A547` | Aksen sekunder, highlight |
| `--color-espresso` | `#33261C` | Heading, section gelap |
| `--color-cocoa` | `#5C4A3B` | Teks body |
| `--color-sage` | `#8A9B7C` | Sukses, variasi ikon |

Aturan kontras: teks body `cocoa` di atas `cream/sand` (AA); di section `espresso` teks `cream`. CTA `terracotta` dengan teks putih `#FFF8F2`.

## Tipografi
- **Heading**: Fraunces (`--font-fraunces`), weight 500–600, optical size auto; h1 `clamp(2.5rem,6vw,4.5rem)`
- **Body/UI**: Plus Jakarta Sans (`--font-jakarta`), 400/500/600; body 16–18px, line-height 1.7
- Lowercase brand "wafinix" di wordmark; Title Case untuk heading ID, Sentence case EN

## Ritme Section
Selang-seling: cream → sand → cream → espresso (gelap, 1–2 per halaman) → cream. Divider antar section bervariasi (kurva/gelombang/diagonal — komponen `SectionDivider`), jangan semua lurus.

## Komponen Dekoratif (`src/components/decor/`)
| Komponen | Deskripsi | Gerak |
|---|---|---|
| `Blobs` | 1–3 lingkaran blur radial terracotta/amber/sage opacity 10–20% | drift lambat + parallax scroll |
| `TopoLines` | pola garis kontur topografi stroke sand/cocoa 8% | statis / parallax sangat pelan |
| `Grain` | noise overlay halus full-page (SVG feTurbulence) opacity 4–6% | statis |
| `FloatingShapes` | lingkaran kecil, setengah-bulat, squiggle, sparkle di pinggir | float + parallax beda kecepatan |
| `HandDrawn` | underline coretan, panah lengkung, bintang (SVG stroke) | draw-on saat inView |
| `SectionDivider` | kurva/gelombang pemisah warna section | statis |
| `OutlineText` | teks outline raksasa di background | parallax horizontal |

**Aturan**: maks 2–3 dekorasi per section · semua `aria-hidden="true"` + `pointer-events-none` · mati/diam saat `prefers-reduced-motion`.

## Motion Guidelines
- Easing default: `[0.22, 1, 0.36, 1]` (easeOutQuint-ish); durasi 0.5–0.8s reveal, 0.2s micro
- Reveal: fade + translateY(24px), stagger anak 0.08s — komponen `Reveal`/`Stagger`
- Pinned scrollytelling (GSAP): "Proses Kami" 5 langkah; horizontal scroll: industri
- Hover card: lift -6px + shadow hangat + tilt ≤6°; MagneticButton offset maks 8px
- Page transition: fade + curtain terracotta 0.4s
- **Wajib**: `useReducedMotion`/media query → semua animasi jadi opacity sederhana atau statis

## 3D (R3F, `src/components/three/`)
- `HeroScene`: komposisi W/bentuk geometris, material standard roughness tinggi warna terracotta-amber, lighting lembut hangat (ambient cream + directional); mengikuti mouse (lerp) + rotasi/zoom by scroll progress
- `Globe`: sphere wireframe/dots, titik kota + arc Jakarta→dunia warna amber
- `DeviceTilt`: mockup layar dengan tilt mengikuti pointer
- Semua: `dynamic(..., {ssr:false})`, lazy saat mendekati viewport, fallback gambar statis

## Logo
Hasil generate AI (Tahap 2): lettermark "W" + wordmark. File di `public/brand/`: `logo.png` (terang), `logo-dark.png`, `mark.png` (simbol saja), favicon set. Komponen `<Logo variant="full|mark" theme="light|dark" />`.

## Demo Pages
Tiap demo punya mini-brand sendiri (palet & font berbeda dari Wafinix) agar terlihat seperti proyek nyata, dengan banner tetap "Konsep demo oleh Wafinix — pesan web seperti ini" di atas.
