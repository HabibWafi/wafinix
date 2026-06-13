// Central site metadata. PLACEHOLDERS — replace before production
// (see docs/CONTENT-GUIDE.md §Placeholder).

export const site = {
  name: "Wafinix",
  domain: "wafinix.com",
  email: "halo@wafinix.com",
  // WhatsApp: display + bare number for wa.me deep links
  whatsappDisplay: "+62 800-0000-0000",
  whatsappNumber: "628000000000",
  address: {
    id: "Indonesia",
    en: "Indonesia",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
  ],
} as const;

// Primary navigation. `key` maps to messages `nav.<key>`; `href` is locale-relative
// (next-intl Link prepends the active locale). Target pages arrive in later stages.
export const navLinks = [
  { key: "services", href: "/layanan" },
  { key: "solutions", href: "/solusi" },
  { key: "pricing", href: "/harga" },
  { key: "portfolio", href: "/portofolio" },
  { key: "about", href: "/tentang" },
  { key: "contact", href: "/kontak" },
] as const;

export const legalLinks = [
  { key: "terms", href: "/legal/syarat-ketentuan" },
  { key: "privacy", href: "/legal/kebijakan-privasi" },
  { key: "license", href: "/legal/lisensi-dan-sla" },
] as const;
