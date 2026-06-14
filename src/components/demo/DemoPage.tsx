import type { CSSProperties } from "react";
import { ArrowRight, Search, ChevronDown } from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import type { DemoConfig } from "@/data/demos";

// Renders a full marketing-style demo page from a DemoConfig. Palette is applied
// via CSS variables on the root so every primitive stays generic.
export function DemoPage({ c }: { c: DemoConfig }) {
  const overlay = c.heroLayout === "overlay";
  const ctaBg = c.ctaColor === "accent" ? "var(--d-accent)" : "var(--d-brand)";
  const vars = {
    "--d-bg": c.bg,
    "--d-surface": c.surface,
    "--d-ink": c.ink,
    "--d-muted": c.muted,
    "--d-brand": c.brandColor,
    "--d-accent": c.accent,
    "--d-on": c.onBrand,
  } as CSSProperties;

  return (
    <div style={vars} className="min-h-screen bg-[var(--d-bg)] text-[var(--d-muted)]">
      <DemoBanner />

      {c.announcement && (
        <div className="bg-[var(--d-ink)] px-4 py-2 text-center text-xs text-[var(--d-bg)] sm:text-sm">
          {c.announcement}
        </div>
      )}

      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6">
        <span className="flex items-baseline gap-1.5">
          <span className="font-display text-lg font-semibold text-[var(--d-ink)] sm:text-xl">
            {c.brand}
          </span>
          {c.brandSub && (
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[var(--d-accent)] sm:inline">
              {c.brandSub}
            </span>
          )}
        </span>
        <nav className="hidden gap-6 text-sm font-medium lg:flex">
          {c.nav.map((n, i) => (
            <span key={n} className={i === 0 ? "text-[var(--d-accent)]" : ""}>
              {n}
            </span>
          ))}
        </nav>
        <span
          className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold text-[var(--d-on)] sm:text-sm"
          style={{ background: ctaBg }}
        >
          {c.navCta}
        </span>
      </header>

      {/* Hero */}
      {overlay ? (
        <section className="relative isolate overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.hero.image}
            alt={c.brand}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="max-w-xl [text-shadow:0_1px_16px_rgba(0,0,0,0.55)]">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--d-accent)]">
                {c.hero.eyebrow}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {c.hero.title}
              </h1>
              <p className="mt-4 max-w-md text-lg text-white/90">{c.hero.sub}</p>
              <HeroCtas c={c} ctaBg={ctaBg} dark />
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-10 lg:grid-cols-2 lg:py-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--d-accent)]">
                {c.hero.eyebrow}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-[var(--d-ink)] sm:text-5xl">
                {c.hero.title}
              </h1>
              <p className="mt-4 max-w-md text-lg">{c.hero.sub}</p>
              <HeroCtas c={c} ctaBg={ctaBg} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.hero.image}
              alt={c.brand}
              className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
            />
          </div>
        </section>
      )}

      {/* Widget (search / booking / reservation) */}
      {c.widget && (
        <div className="mx-auto -mt-8 max-w-5xl px-6">
          <div className="flex flex-col gap-3 rounded-3xl bg-[var(--d-surface)] p-4 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.45)] sm:flex-row sm:items-center">
            {c.widget.fields.map((f) => (
              <div
                key={f.label}
                className="flex-1 rounded-2xl border border-black/10 px-4 py-2.5 text-left"
              >
                <p className="text-[11px] uppercase tracking-wide text-[var(--d-muted)] opacity-70">
                  {f.label}
                </p>
                <p className="mt-0.5 flex items-center justify-between gap-2 text-sm font-medium text-[var(--d-ink)]">
                  {f.value}
                  <ChevronDown className="h-3.5 w-3.5 opacity-40" />
                </p>
              </div>
            ))}
            <span
              className="flex shrink-0 items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-[var(--d-on)]"
              style={{ background: ctaBg }}
            >
              <Search className="h-4 w-4" />
              {c.widget.cta}
            </span>
          </div>
        </div>
      )}

      {/* Badges / feature bar */}
      {c.badges && (
        <section className={c.badgesDark ? "mt-10 bg-[var(--d-brand)]" : "mt-10"}>
          <div
            className={`mx-auto grid max-w-6xl gap-6 px-6 py-7 sm:grid-cols-2 ${
              c.badges.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {c.badges.map((b) => (
              <div key={b.title} className="flex items-center gap-3">
                <b.icon
                  className="h-7 w-7 shrink-0 text-[var(--d-accent)]"
                  strokeWidth={1.6}
                />
                <div>
                  <p
                    className={`font-semibold ${
                      c.badgesDark ? "text-[var(--d-on)]" : "text-[var(--d-ink)]"
                    }`}
                  >
                    {b.title}
                  </p>
                  <p
                    className={`text-sm ${
                      c.badgesDark ? "text-[var(--d-on)] opacity-70" : "opacity-80"
                    }`}
                  >
                    {b.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cards section */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            {c.sectionEyebrow && (
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--d-accent)]">
                {c.sectionEyebrow}
              </p>
            )}
            <h2 className="mt-1 font-display text-3xl font-semibold text-[var(--d-ink)] sm:text-4xl">
              {c.sectionTitle}
            </h2>
          </div>
          {c.sectionCta && (
            <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-[var(--d-ink)] sm:inline-flex">
              {c.sectionCta}
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </div>

        <div
          className={`mt-8 grid gap-6 sm:grid-cols-2 ${
            c.cardCols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {c.cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-3xl bg-[var(--d-surface)] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)]"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                {card.badge && (
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-[var(--d-on)]"
                    style={{ background: "var(--d-brand)" }}
                  >
                    {card.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[var(--d-ink)]">{card.title}</h3>
                {card.desc && <p className="mt-1 text-sm">{card.desc}</p>}
                {card.meta && (
                  <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs opacity-80">
                    {card.meta.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </p>
                )}
                {card.price && (
                  <p className="mt-3 font-semibold text-[var(--d-accent)]">
                    {card.price}
                    {card.priceNote && (
                      <span className="text-xs font-normal opacity-60">
                        {" "}
                        {card.priceNote}
                      </span>
                    )}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      {c.stats && (
        <section className="bg-[var(--d-surface)]">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="h-8 w-8 shrink-0 text-[var(--d-accent)]" strokeWidth={1.6} />
                <div>
                  <p className="font-display text-2xl font-semibold text-[var(--d-ink)]">
                    {s.value}
                  </p>
                  <p className="text-sm opacity-80">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="bg-[var(--d-brand)] px-6 py-12 text-center text-[var(--d-on)]">
        <p className="font-display text-xl font-semibold">{c.brand}</p>
        <p className="mx-auto mt-2 max-w-md text-sm opacity-75">{c.footerTagline}</p>
        <p className="mt-4 text-xs opacity-60">Demo konsep oleh Wafinix</p>
      </footer>
    </div>
  );
}

function HeroCtas({
  c,
  ctaBg,
  dark,
}: {
  c: DemoConfig;
  ctaBg: string;
  dark?: boolean;
}) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {c.hero.ctas.map((cta) =>
        cta.primary ? (
          <span
            key={cta.label}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-[var(--d-on)]"
            style={{ background: ctaBg }}
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </span>
        ) : (
          <span
            key={cta.label}
            className={`inline-flex items-center rounded-full border px-6 py-3 font-semibold ${
              dark
                ? "border-white/40 text-white"
                : "border-black/20 text-[var(--d-ink)]"
            }`}
          >
            {cta.label}
          </span>
        ),
      )}
    </div>
  );
}
