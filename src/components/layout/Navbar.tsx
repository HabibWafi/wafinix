"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/data/site";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // The home hero is a dark stage — render the nav light while sitting over it.
  const onDarkHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 shadow-[0_1px_0_rgba(51,38,28,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link href="/" aria-label="Wafinix" className="shrink-0">
          <Logo variant="horizontal" onDark={onDarkHero} priority className="h-8 w-auto sm:h-9" />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                onDarkHero ? "text-cream/85 hover:text-amber" : "text-cocoa hover:text-terracotta"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/harga"
            className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-warm-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-terracotta-light"
          >
            {t("cta")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t("openMenu")}
          className={`rounded-full p-2 transition-colors lg:hidden ${
            onDarkHero ? "text-cream hover:bg-white/10" : "text-espresso hover:bg-sand"
          }`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto bg-cream px-6 py-5 lg:hidden"
            initial={reduce ? false : { y: "-100%" }}
            animate={{ y: 0 }}
            exit={reduce ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Logo variant="horizontal" className="h-8 w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("closeMenu")}
                className="rounded-full p-2 text-espresso transition-colors hover:bg-sand"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cocoa/10 py-4 font-display text-2xl text-espresso transition-colors hover:text-terracotta"
                >
                  {t(l.key)}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <LanguageSwitcher className="self-start" />
              <Link
                href="/harga"
                onClick={() => setOpen(false)}
                className="rounded-full bg-terracotta px-5 py-3 text-center font-semibold text-warm-white"
              >
                {t("cta")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
