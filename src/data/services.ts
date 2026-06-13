import {
  Globe,
  Calculator,
  CreditCard,
  Boxes,
  Bot,
  Smartphone,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  title: { id: string; en: string };
  summary: { id: string; en: string };
}

// 7 service categories. Home shows the summary; /layanan (Tahap 5) expands these.
export const services: ServiceItem[] = [
  {
    slug: "website",
    icon: Globe,
    title: { id: "Website", en: "Websites" },
    summary: {
      id: "Landing page, company profile, toko online, hingga web booking & travel yang cepat dan enak dilihat.",
      en: "Landing pages, company profiles, online stores, and booking & travel sites that are fast and beautiful.",
    },
  },
  {
    slug: "sistem-manajerial",
    icon: Calculator,
    title: { id: "Sistem Manajerial", en: "Management Systems" },
    summary: {
      id: "Kasir/POS, inventori, dan pencatatan keuangan dengan laporan otomatis untuk operasional harian.",
      en: "POS, inventory, and bookkeeping with automated reports for day-to-day operations.",
    },
  },
  {
    slug: "order-pembayaran",
    icon: CreditCard,
    title: {
      id: "Order & Pembayaran Terintegrasi",
      en: "Integrated Orders & Payments",
    },
    summary: {
      id: "Pemesanan dan pembayaran (QRIS, transfer, kartu, crypto) yang tercatat otomatis tanpa input manual.",
      en: "Ordering and payments (QRIS, transfer, cards, crypto) recorded automatically — no manual entry.",
    },
  },
  {
    slug: "erp-custom",
    icon: Boxes,
    title: { id: "ERP & Aplikasi Custom", en: "ERP & Custom Apps" },
    summary: {
      id: "Modul HR, akuntansi, produksi, dan multi-cabang yang dirancang sesuai alur kerja perusahaan Anda.",
      en: "HR, accounting, production, and multi-branch modules designed around your company's workflow.",
    },
  },
  {
    slug: "ai-chatbot",
    icon: Bot,
    title: { id: "AI & Chatbot", en: "AI & Chatbot" },
    summary: {
      id: "Chatbot AI untuk web & WhatsApp, plus integrasi AI ke sistem untuk ringkasan dan rekomendasi.",
      en: "AI chatbots for web & WhatsApp, plus AI baked into your system for summaries and recommendations.",
    },
  },
  {
    slug: "aplikasi-mobile",
    icon: Smartphone,
    title: { id: "Aplikasi Mobile", en: "Mobile Apps" },
    summary: {
      id: "Aplikasi pendamping Android & iOS yang terhubung mulus dengan sistem yang kami bangun.",
      en: "Android & iOS companion apps that connect seamlessly with the systems we build.",
    },
  },
  {
    slug: "uiux-motion",
    icon: Wand2,
    title: { id: "UI/UX & Motion Design", en: "UI/UX & Motion Design" },
    summary: {
      id: "Desain antarmuka dan animasi premium — persis seperti yang Anda rasakan di situs ini.",
      en: "Premium interface design and motion — exactly like what you're experiencing on this site.",
    },
  },
];
