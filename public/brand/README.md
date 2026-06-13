# Brand Assets — Wafinix

Logo dirancang sendiri oleh pemilik. Konsep **phoenix** ("Wa" + phoenix) — burung
yang bangkit & bertransformasi. Tagline: **"Build. Transform. Grow."**
Palet: Terracotta Warm (lihat `docs/DESIGN-SPEC.md`).

## File sumber (dari user — jangan diubah otomatis)
| File | Isi | BG |
|---|---|---|
| `logo-utama.png` | Lockup vertikal penuh + tagline | cream solid |
| `logo-horizontal.png` | Lockup horizontal (mark + Wafinix) | transparan |
| `icon.png` | Simbol phoenix-W (terracotta) | cream solid |
| `wordmark.png` | Tulisan "Wafinix" | cream solid |
| `light-mono.png` | Phoenix-W cream di atas espresso | espresso |
| `dark-mono.png` | Phoenix-W espresso di atas cream | cream |
| `panduan-logo.png` | Brand guide lengkap | — |

## File turunan (dihasilkan `scripts/process-logo.ps1`)
| File | Isi |
|---|---|
| `mark.png` | Simbol phoenix-W terracotta, **transparan** (dipakai `<Logo variant="mark">` & favicon) |
| `logo-stacked.png` | Lockup vertikal penuh, **transparan** (dipakai `<Logo variant="stacked">`) |
| `../../src/app/icon.png` | Favicon 512px |
| `../../src/app/apple-icon.png` | Apple touch icon 180px (mark di atas sand) |
| `../../src/app/favicon.ico` | Favicon multi-size 16/32/48 |

## Mengganti logo
Timpa file sumber di folder ini, lalu jalankan ulang:
```
powershell -ExecutionPolicy Bypass -File scripts/process-logo.ps1
```
Turunan + favicon akan dibuat ulang otomatis. Komponen: `src/components/layout/Logo.tsx`.
