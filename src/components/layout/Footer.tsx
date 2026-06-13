import { useTranslations } from "next-intl";
import { Mail, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { navLinks, legalLinks, site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-espresso text-cream/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <Logo variant="horizontal" onDark />
          <p className="mt-3 font-display text-lg text-amber">{t("tagline")}</p>
          <p className="mt-4 text-sm leading-relaxed">{t("blurb")}</p>
        </div>

        <FooterCol title={t("explore")}>
          {navLinks.map((l) => (
            <FooterLink key={l.key} href={l.href}>
              {tn(l.key)}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title={t("legal")}>
          {legalLinks.map((l) => (
            <FooterLink key={l.key} href={l.href}>
              {t(l.key)}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title={t("connect")}>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 py-1 text-sm transition-colors hover:text-amber"
          >
            <Mail className="h-4 w-4" /> {site.email}
          </a>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-1 text-sm transition-colors hover:text-amber"
          >
            <MessageCircle className="h-4 w-4" /> {site.whatsappDisplay}
          </a>
          <div className="mt-2 flex gap-4">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-amber"
              >
                {s.label}
              </a>
            ))}
          </div>
        </FooterCol>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-cream/50 sm:flex-row lg:px-8">
          <p>
            © {year} {site.name}. {t("rights")}
          </p>
          <p>{t("madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-cream/50">
        {title}
      </h3>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="py-1 text-sm transition-colors hover:text-amber"
    >
      {children}
    </Link>
  );
}
