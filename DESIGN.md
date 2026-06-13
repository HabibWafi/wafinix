# Design

> Visual system for Wafinix (register: brand). Tokens live in `src/app/globals.css`
> (`@theme`). Full rationale in `docs/DESIGN-SPEC.md`. Motion rules in
> `docs/DESIGN-MOTION-PLAYBOOK.md` §5.

## Theme

Terracotta Warm — warm, human, premium, editorial, calm. Light by default (cream
canvas) with espresso dark sections used selang-seling for rhythm. Carries warmth via
accent + serif typography + grain, never via a washed near-white SaaS bg.

## Color

| Role | Token | Hex |
|---|---|---|
| Canvas | `cream` | `#FAF6F0` |
| Surface / alt section | `sand` | `#F1E8DC` |
| Primary (CTA, link, accent) | `terracotta` | `#C8623E` |
| Primary hover / gradient | `terracotta-light` | `#E08D63` |
| Secondary accent | `amber` | `#E3A547` |
| Dark surface / heading ink | `espresso` | `#33261C` |
| Body text | `cocoa` | `#5C4A3B` |
| Tertiary (success, variety) | `sage` | `#8A9B7C` |
| On-dark text / button label | `warm-white` | `#FFF8F2` |

Rules: body `cocoa` on cream/sand (AA); on `espresso` use `cream`/`warm-white`. CTA =
`terracotta` + `warm-white` label. Tints lean toward the brand hue, not generic warm.

## Typography

- **Display / headings**: Fraunces (`--font-display`), weight 400–600, warm serif.
  h1 `clamp(2.5rem, 6vw, 4.5rem)` (display ceiling ≤ 6rem), letter-spacing ≥ -0.04em,
  `text-wrap: balance` on h1–h3.
- **Body / UI**: Plus Jakarta Sans (`--font-sans`), 400/500/600/700. Body 16–18px,
  line-height ~1.7, line length 65–75ch.
- Pairing is contrast-axis (serif + geometric sans), never two similar sans.

## Components

- **Buttons**: pill (`rounded-full`). Primary solid terracotta; secondary outline
  `cocoa/20` → hover terracotta. `:active { transform: scale(0.97) }`. MagneticButton
  for hero/CTA (offset ≤ 8px).
- **Cards**: `rounded-3xl`, `border-cocoa/10`, surface `warm-white`/`cream`. Hover
  lift `-translate-y-1.5` + warm shadow. No nested cards. No side-stripe borders.
- **Icon chip**: `rounded-2xl`, `bg-terracotta/10` → on hover fill terracotta.
- **Section eyebrow**: a small terracotta label is allowed as deliberate rhythm, NOT on
  every section (avoid the uppercase-tracked-eyebrow-everywhere reflex).
- **Decor** (`src/components/decor`): Blobs, TopoLines, Grain, FloatingShapes,
  HandDrawn, SectionDivider, OutlineText. Max 2–3 per section, `aria-hidden`.

## Layout

- Container `max-w-7xl`, px-6 / lg:px-8. Section padding `py-20 lg:py-28`.
- Flexbox for 1D, Grid for 2D. Responsive grids `repeat(auto-fit, minmax(280px,1fr))`
  or explicit `sm/lg` columns. Varied section dividers (wave/curve/slant), not all flat.
- z-index semantic, never 999/9999.

## Motion

- Easing: `--ease-warm: cubic-bezier(0.22,1,0.36,1)` (reveal); ease-out exponential for
  UI in/out; no bounce/elastic.
- Durations: UI 150–250ms, micro 100–200ms, section reveal 0.5–0.8s.
- Animate transform & opacity only. Never appear from `scale(0)` → `scale(0.95)+opacity`.
- Reveal enhances already-visible content (no visibility gated on transitions).
- `prefers-reduced-motion`: all animation collapses to instant/crossfade (global rule in
  `globals.css`); 3D/decor pause.
- Premium materials (blur, mask, clip-path, glow) allowed when smooth.
- Libraries: `motion` (Framer), `gsap`, `lenis`, React Three Fiber.
