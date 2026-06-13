# Design & Motion Playbook — pakai skill terinstal untuk UI yang "hidup" & polished

Petunjuk memakai skill desain/motion yang sudah diinstal, supaya web terasa modern,
halus, dan tidak "AI-generic". Berlaku untuk **proyek ini sekarang** dan **proyek lain**.
File ini portabel — boleh disalin ke repo mana pun.

---

## 1. Toolkit terinstal & cakupannya

**Global** (`~/.claude/skills/`, otomatis tersedia di SEMUA proyek — cukup picu dengan menyebut tugasnya):

| Skill | Untuk apa | Picu contoh |
|---|---|---|
| `emil-design-eng` | Filosofi polish & **keputusan animasi** ala Emil Kowalski (easing, durasi, micro-interaction) | "review motion ini", "haluskan interaksi tombol" |
| `design-taste-frontend` | Arahkan **arah desain** anti-template untuk landing/portfolio/redesign | "desain landing yang tidak terlihat template" |
| `high-end-visual-design` | Standar agensi kelas atas: font, spacing, shadow, struktur kartu | "bikin terlihat mahal/premium" |
| `redesign-existing-projects` | Audit lalu upgrade UI yang sudah ada tanpa merusak fungsi | "upgrade tampilan halaman ini" |
| `minimalist-ui` / `industrial-brutalist-ui` / `gpt-taste` | Gaya spesifik (editorial minimal / brutalist / GSAP-heavy editorial) | sebut gayanya |
| `stitch-design-taste` | Generate `DESIGN.md` (design system tertulis, anti-generic) | "buatkan design system tertulis" |
| `brandkit` / `imagegen-frontend-web` / `imagegen-frontend-mobile` / `image-to-code` | **Aset & referensi desain** (brand board, mockup section, referensi per-section) — *butuh tool image-gen aktif* | "buatkan referensi desain hero" |
| `full-output-enforcement` | Paksa output kode lengkap (anti placeholder/terpotong) | tugas besar yang harus utuh |

**Per-proyek** (`<repo>/.claude/skills/impeccable/`, sudah dipasang di repo Wafinix):

| Skill | Untuk apa |
|---|---|
| `impeccable` | Mesin desain lengkap: **command system** (`craft, polish, audit, animate, layout, typeset, colorize, ...`) + **scanner anti-pattern** (`detect.mjs`) + iterasi live di browser. Inilah yang memperbaiki **spacing, tipografi, layout, alignment** menyeluruh. |

> impeccable **per-proyek** karena script-nya dipanggil dari path relatif `.claude/skills/impeccable/scripts/` dan menyimpan konteks desain (`PRODUCT.md`/`DESIGN.md`) per repo. Pasang sekali per proyek: `npx impeccable skills install -y` (lihat §4).

---

## 2. Cara pakai: 4 alur kerja

### A. Membuat UI/section baru → mulai dari taste, bangun dengan emil, tutup dengan impeccable
1. **Arah desain** dulu: panggil `design-taste-frontend` atau `high-end-visual-design` untuk menentukan karakter (jangan langsung ngoding layout generic).
2. **Bangun** komponennya (real code, bukan prototipe).
3. **Motion** menyusul sebagai bagian build (bukan afterthought) — pakai `emil-design-eng` framework di §5.
4. **Polish akhir**: `/impeccable polish <file>` sebelum dianggap selesai.

### B. Memperbaiki UI yang sudah ada (spacing/tipografi/layout/alignment) → impeccable command
- "Spacing/rhythm/hierarki berantakan" → `/impeccable layout <target>`
- "Tipografi/hirarki heading lemah" → `/impeccable typeset <target>`
- "Warna datar/hambar" → `/impeccable colorize <target>`
- "Terasa generic/AI" → `/impeccable critique <target>` lalu `/impeccable polish <target>`
- "Tambah animasi bermakna" → `/impeccable animate <target>`
- Scan cepat anti-pattern tanpa LLM: `node .claude/skills/impeccable/scripts/detect.mjs --json <file...>`

### C. Membuat aset / referensi visual
- Brand board / identitas → `brandkit`
- Referensi desain web per-section (1 gambar per section) → `imagegen-frontend-web`, lalu implementasi → `image-to-code`
- ⚠️ Skill ini butuh **tool image-gen aktif**. Pilihan:
  - **nano-banana (Gemini) bridge** → `node scripts/nano-banana.mjs --prompt "..." [--image in.png] --out public/brand/x.png`. Key di `.env.local` (`NANO_BANANA_API_KEY`). **Perlu billing aktif** di project Google AI Studio — free tier = 0 kuota untuk model image (`gemini-2.5-flash-image`).
  - Higgsfield `generate_image` (MCP) — sedang habis kredit.
  - Tanpa tool aktif, skill tetap memberi *arahan/prompt* tapi tidak meng-output gambar.

### D. Motion & animasi (fokus permintaanmu: "smooth & alive, bukan static")
Lihat cheat-sheet §5. Inti: easing kustom + animasi yang punya alasan + selalu ada fallback reduced-motion.

---

## 3. Terapkan SEKARANG ke Wafinix

Urutan yang disarankan (bisa diminta satu per satu):
1. `node .claude/skills/impeccable/scripts/detect.mjs --json src/app/[locale]/page.tsx src/components/sections/home/*.tsx` → daftar anti-pattern aktual.
2. `/impeccable critique home` → skor UX + temuan P0/P1 pada Home.
3. `/impeccable polish src/components/sections/home` → rapikan spacing/tipografi/alignment lintas section.
4. Cek motion tiap section dgn framework `emil-design-eng` (§5) — pastikan easing kustom, bukan default lembek.
5. Lanjut ke halaman Tahap 5+ dengan alur A sejak awal (taste → build → motion → polish).

> Stack Wafinix sudah ramah skill ini: tokens Terracotta Warm, `motion`, `gsap`, `lenis` terpasang, dan aturan reduced-motion sudah ada di `globals.css`.

## 4. Terapkan ke PROYEK LAIN

1. **Skill global sudah jalan otomatis** di proyek mana pun (emil + taste family) — cukup minta tugasnya.
2. **Pasang impeccable per repo** sekali: di root proyek jalankan `npx impeccable skills install -y` lalu `/impeccable init` (membuat `PRODUCT.md`/`DESIGN.md` konteks desain proyek itu).
3. (Opsional, biar konsisten di semua proyek) salin file playbook ini ke `docs/` proyek tsb, atau tambahkan ringkasannya ke `~/.claude/CLAUDE.md` (instruksi global) — minta saya kalau mau dibuatkan.

---

## 5. Motion cheat-sheet (Emil + impeccable, ringkas & actionable)

**Keputusan animasi (tanya berurutan):**
1. *Haruskah beranimasi?* Aksi dipakai 100+×/hari (shortcut, toggle) → **jangan** animasikan. Sesekali (modal, toast, reveal section) → animasi standar. Langka (onboarding) → boleh delight.
2. *Apa tujuannya?* Harus ada alasan: feedback, kontinuitas spasial, indikasi state, mencegah perubahan menyentak. "Biar keren" + sering dilihat = jangan.
3. *Easing apa?* Masuk/keluar → **ease-out**. Gerak/morph di layar → **ease-in-out**. Hover/warna → **ease**. Konstan (marquee/progress) → **linear**.

**Easing kustom (CSS default terlalu lembek — selalu pakai ini):**
```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);      /* UI masuk/keluar */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);  /* gerak di layar */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);   /* drawer/sheet ala iOS */
```
(Wafinix sudah punya `--ease-warm: cubic-bezier(0.22,1,0.36,1)` di `globals.css` untuk reveal.)

**Aturan emas:**
- Jangan `transition: all` → sebut properti spesifik (`transform`, `opacity`).
- Jangan muncul "dari nol": `scale(0)` ✗ → `scale(0.95) + opacity:0` ✓. Tidak ada yang muncul dari ketiadaan.
- Tombol harus terasa ditekan: `:active { transform: scale(0.97) }`.
- Animasikan **transform & opacity** (murah). Hindari animasi properti layout (width/height/top/left).
- Ease-out eksponensial (quart/quint/expo). **No bounce, no elastic.**
- Durasi UI 150–250ms; reveal section 0.5–0.8s; micro 100–200ms.
- **Reduced-motion wajib**: tiap animasi punya alternatif `@media (prefers-reduced-motion: reduce)` (crossfade/instant). Konten **jangan** disembunyikan menunggu animasi (kalau reveal gagal di tab non-aktif, section bisa kosong).
- Stagger antar item dalam satu list itu sah; yang dilarang adalah refleks seragam (satu entrance identik di semua section).
- Material premium boleh lebih dari transform/opacity: blur, backdrop-filter, clip-path, mask, glow — selama tetap halus.
- Pakai library untuk motion lanjutan: `motion`, `gsap`, `lenis` (sudah ada di Wafinix).

**Larangan visual (impeccable "absolute bans") — jangan dipakai:**
side-stripe border tebal sebagai aksen · gradient text (`background-clip:text`) · glassmorphism dekoratif default · template "angka besar + label kecil" · grid kartu identik berulang · eyebrow uppercase ber-tracking di atas tiap section · penanda angka 01/02/03 di tiap section (kecuali memang urutan nyata) · teks meluber dari container di breakpoint tertentu.

**Tipografi & layout (impeccable):** body 65–75ch; heading display `clamp()` max ≤ 6rem, letter-spacing ≥ -0.04em; `text-wrap: balance` di h1–h3; kontras body ≥ 4.5:1; Flexbox untuk 1D, Grid untuk 2D; grid responsif tanpa breakpoint `repeat(auto-fit, minmax(280px,1fr))`; z-index skala semantik (bukan 999/9999).
