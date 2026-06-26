"use client";

import { useRef, type ReactNode } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { services, type ServiceItem } from "@/data/services";
import { pick } from "@/lib/i18n-text";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

// Pointer-tilt wrapper (Aurora-style depth). Reduced-motion safe.
function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  function move(e: React.PointerEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--rx", `${py * -5}deg`);
    ref.current.style.setProperty("--ry", `${px * 5}deg`);
  }
  function leave() {
    if (!ref.current) return;
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`h-full [transform:perspective(1000px)_rotateX(var(--rx,0))_rotateY(var(--ry,0))] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function PointRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-cocoa">
      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-terracotta/12 text-terracotta">
        <Check className="h-2.5 w-2.5" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

function ServiceTile({ s, locale, featured }: { s: ServiceItem; locale: string; featured?: boolean }) {
  return (
    <Tilt>
      <Link
        href="/layanan"
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-cocoa/10 bg-warm-white p-6 shadow-[0_1px_2px_rgba(51,38,28,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-terracotta/30 hover:shadow-[0_28px_60px_-30px_rgba(200,98,62,0.45)] lg:p-7"
      >
        {/* soft gradient wash on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-terracotta/15 to-amber/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        />

        {featured && (
          <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-espresso/5 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-sage/70" />
            <span className="ml-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cocoa/60">Paling diminati</span>
          </span>
        )}

        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-terracotta/15 to-amber/10 text-terracotta transition-colors duration-300 group-hover:from-terracotta group-hover:to-terracotta group-hover:text-warm-white">
          <s.icon className="h-6 w-6" strokeWidth={1.6} />
        </span>

        <h3 className={`relative mt-5 font-semibold text-espresso ${featured ? "text-2xl lg:text-3xl" : "text-xl"}`}>
          {pick(s.title, locale)}
        </h3>
        <p className={`relative mt-2 leading-relaxed text-cocoa ${featured ? "max-w-md text-base" : "text-sm"}`}>
          {pick(s.summary, locale)}
        </p>

        <ul className={`relative mt-5 gap-x-6 gap-y-2 ${featured ? "grid sm:grid-cols-2" : "flex flex-col gap-2"}`}>
          {s.points.map((pt) => (
            <PointRow key={pt.id}>{pick(pt, locale)}</PointRow>
          ))}
        </ul>

        <span className="relative mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-terracotta">
          Pelajari
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Tilt>
  );
}

export function ServicesPreview() {
  const t = useTranslations("home.services");
  const locale = useLocale();
  const [featured, ...rest] = services;

  return (
    <section className="relative bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-lg leading-relaxed text-cocoa">{t("subtitle")}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaggerItem className="sm:col-span-2 lg:col-span-2">
            <ServiceTile s={featured} locale={locale} featured />
          </StaggerItem>
          {rest.map((s) => (
            <StaggerItem key={s.slug}>
              <ServiceTile s={s} locale={locale} />
            </StaggerItem>
          ))}

          {/* inline CTA tile fills the final cell of the bento */}
          <StaggerItem>
            <Link
              href="/layanan"
              className="group flex h-full flex-col justify-between rounded-[1.75rem] bg-espresso p-6 text-cream transition-transform duration-300 hover:-translate-y-1 lg:p-7"
            >
              <p className="font-display text-xl font-semibold leading-snug">{t("cta")}</p>
              <span className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-warm-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
