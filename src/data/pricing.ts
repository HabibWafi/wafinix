type Bi = { id: string; en: string };

export interface Tier {
  slug: string;
  name: Bi;
  forWhom: Bi;
  priceId: string; // display range in IDR (shown on /id)
  priceEn: string; // display range in USD (shown on /en)
  priceNote: Bi;
  highlighted?: boolean;
  ctaType: "order" | "consult";
  features: Bi[];
  documents: Bi; // documents the client receives at this tier
  security: Bi; // security baseline at this tier
}

// Indicative pricing (2025–2026 market research). Display ranges; refined into
// exact quotes per project. Server-read source of truth — never trust client.
export const tiers: Tier[] = [
  {
    slug: "personal",
    name: { id: "Personal", en: "Personal" },
    forWhom: {
      id: "Portfolio, undangan digital, landing pribadi",
      en: "Portfolios, digital invitations, personal landing pages",
    },
    priceId: "Rp 1,9 – 3,5 jt",
    priceEn: "$350 – $700",
    priceNote: { id: "per proyek", en: "per project" },
    ctaType: "order",
    features: [
      { id: "1–3 halaman, desain responsif", en: "1–3 pages, responsive design" },
      { id: "Animasi & motion ringan", en: "Light animation & motion" },
      { id: "Form kontak + WhatsApp", en: "Contact form + WhatsApp" },
      { id: "Setup domain & hosting", en: "Domain & hosting setup" },
      { id: "2× revisi, garansi bug 14 hari", en: "2 revisions, 14-day bug warranty" },
    ],
    documents: {
      id: "Sitemap + ringkasan kebutuhan",
      en: "Sitemap + requirements summary",
    },
    security: {
      id: "SSL, security headers, validasi input, backup",
      en: "SSL, security headers, input validation, backups",
    },
  },
  {
    slug: "umkm",
    name: { id: "UMKM", en: "Small Business" },
    forWhom: {
      id: "Company profile, landing bisnis, katalog",
      en: "Company profiles, business landing, catalogs",
    },
    priceId: "Rp 4,5 – 9 jt",
    priceEn: "$900 – $1.800",
    priceNote: { id: "per proyek", en: "per project" },
    ctaType: "order",
    features: [
      { id: "5–8 halaman + CMS sederhana", en: "5–8 pages + simple CMS" },
      { id: "Katalog produk/jasa", en: "Product/service catalog" },
      { id: "SEO dasar + Google Business", en: "Basic SEO + Google Business" },
      { id: "Integrasi WhatsApp & maps", en: "WhatsApp & maps integration" },
      { id: "3× revisi, garansi bug 30 hari", en: "3 revisions, 30-day bug warranty" },
    ],
    documents: {
      id: "Mini-PRD + UI mockup + checklist testing",
      en: "Mini-PRD + UI mockup + testing checklist",
    },
    security: {
      id: "SSL, security headers, validasi input, backup",
      en: "SSL, security headers, input validation, backups",
    },
  },
  {
    slug: "bisnis",
    name: { id: "Bisnis", en: "Business" },
    forWhom: {
      id: "Toko online, booking, web trip, haji & umroh",
      en: "Online stores, booking, trip & travel, Hajj & Umrah",
    },
    priceId: "Rp 12 – 35 jt",
    priceEn: "$2.500 – $7.000",
    priceNote: { id: "per proyek", en: "per project" },
    highlighted: true,
    ctaType: "order",
    features: [
      { id: "E-commerce / booking / reservasi", en: "E-commerce / booking / reservations" },
      { id: "Payment gateway (QRIS, VA, kartu, crypto)", en: "Payment gateway (QRIS, VA, cards, crypto)" },
      { id: "Dashboard admin + laporan", en: "Admin dashboard + reports" },
      { id: "Bilingual + animasi premium", en: "Bilingual + premium animation" },
      { id: "4× revisi, garansi bug 60 hari", en: "4 revisions, 60-day bug warranty" },
    ],
    documents: {
      id: "PRD + UI/UX Spec + Database Design + Testing Plan + dokumentasi",
      en: "PRD + UI/UX Spec + Database Design + Testing Plan + docs",
    },
    security: {
      id: "+ rate limiting, audit log, verifikasi webhook pembayaran",
      en: "+ rate limiting, audit log, verified payment webhooks",
    },
  },
  {
    slug: "enterprise",
    name: { id: "Enterprise", en: "Enterprise" },
    forWhom: {
      id: "POS, ERP, integrasi pembayaran, multi-cabang",
      en: "POS, ERP, payment integration, multi-branch",
    },
    priceId: "mulai Rp 40 jt",
    priceEn: "from $8.000",
    priceNote: { id: "berdasarkan penawaran", en: "by quote" },
    ctaType: "consult",
    features: [
      { id: "Sistem custom (POS, ERP, aplikasi)", en: "Custom systems (POS, ERP, apps)" },
      { id: "Multi-cabang & integrasi pihak ketiga", en: "Multi-branch & third-party integrations" },
      { id: "Aplikasi mobile pendamping", en: "Companion mobile app" },
      { id: "AI & chatbot opsional", en: "Optional AI & chatbot" },
      { id: "SLA, pelatihan tim, dukungan prioritas", en: "SLA, team training, priority support" },
    ],
    documents: {
      id: "Project Charter, BRD, SRS, SOW, Architecture & DB Design, UI/UX Spec, Roadmap, UAT, SLA",
      en: "Project Charter, BRD, SRS, SOW, Architecture & DB Design, UI/UX Spec, Roadmap, UAT, SLA",
    },
    security: {
      id: "+ review keamanan, RBAC, audit trail penuh, MFA admin, SLA keamanan",
      en: "+ security review, RBAC, full audit trail, admin MFA, security SLA",
    },
  },
];

export interface AddOn {
  name: Bi;
  price: Bi;
}

export const addOns: AddOn[] = [
  {
    name: { id: "Maintenance bulanan", en: "Monthly maintenance" },
    price: { id: "Rp 500rb – 2 jt / bln", en: "$35 – $130 / mo" },
  },
  {
    name: { id: "Domain + hosting managed", en: "Managed domain + hosting" },
    price: { id: "mulai Rp 1,5 jt / thn", en: "from $100 / yr" },
  },
  {
    name: { id: "SEO & copywriting", en: "SEO & copywriting" },
    price: { id: "mulai Rp 2 jt", en: "from $150" },
  },
  {
    name: { id: "Motion & animasi premium", en: "Premium motion & animation" },
    price: { id: "mulai Rp 3 jt", en: "from $200" },
  },
  {
    name: { id: "Chatbot AI", en: "AI chatbot" },
    price: { id: "mulai Rp 4 jt", en: "from $280" },
  },
  {
    name: { id: "Security hardening & audit", en: "Security hardening & audit" },
    price: { id: "mulai Rp 5 jt", en: "from $350" },
  },
];
