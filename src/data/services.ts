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
  points: { id: string; en: string }[];
}

// 7 service categories. Home shows the summary; /layanan shows points too.
export const services: ServiceItem[] = [
  {
    slug: "website",
    icon: Globe,
    title: { id: "Website", en: "Websites" },
    summary: {
      id: "Landing page, company profile, toko online, hingga web booking & travel yang cepat dan enak dilihat.",
      en: "Landing pages, company profiles, online stores, and booking & travel sites that are fast and beautiful.",
    },
    points: [
      { id: "Company profile & landing yang cepat", en: "Fast company profiles & landing pages" },
      { id: "Toko online dengan keranjang & checkout", en: "Online stores with cart & checkout" },
      { id: "Web booking, travel, & reservasi", en: "Booking, travel & reservation sites" },
    ],
  },
  {
    slug: "sistem-manajerial",
    icon: Calculator,
    title: { id: "Sistem Manajerial", en: "Management Systems" },
    summary: {
      id: "Kasir/POS, inventori, dan pencatatan keuangan dengan laporan otomatis untuk operasional harian.",
      en: "POS, inventory, and bookkeeping with automated reports for day-to-day operations.",
    },
    points: [
      { id: "Kasir/POS multi-cabang", en: "Multi-branch POS" },
      { id: "Inventori & stok real-time", en: "Real-time inventory & stock" },
      { id: "Laporan keuangan otomatis", en: "Automated financial reports" },
    ],
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
    points: [
      { id: "QRIS, VA, e-wallet & kartu", en: "QRIS, VA, e-wallet & cards" },
      { id: "Crypto: USDT, USDC, USDe", en: "Crypto: USDT, USDC, USDe" },
      { id: "Webhook terverifikasi & rekonsiliasi", en: "Verified webhooks & reconciliation" },
    ],
  },
  {
    slug: "erp-custom",
    icon: Boxes,
    title: { id: "ERP & Aplikasi Custom", en: "ERP & Custom Apps" },
    summary: {
      id: "Modul HR, akuntansi, produksi, dan multi-cabang yang dirancang sesuai alur kerja perusahaan Anda.",
      en: "HR, accounting, production, and multi-branch modules designed around your company's workflow.",
    },
    points: [
      { id: "Modul HR, akuntansi & produksi", en: "HR, accounting & production modules" },
      { id: "Alur kerja sesuai perusahaan", en: "Workflows tailored to your company" },
      { id: "Dashboard & hak akses per peran", en: "Dashboards & role-based access" },
    ],
  },
  {
    slug: "ai-chatbot",
    icon: Bot,
    title: { id: "AI & Chatbot", en: "AI & Chatbot" },
    summary: {
      id: "Chatbot AI untuk web & WhatsApp, plus integrasi AI ke sistem untuk ringkasan dan rekomendasi.",
      en: "AI chatbots for web & WhatsApp, plus AI baked into your system for summaries and recommendations.",
    },
    points: [
      { id: "Chatbot AI web & WhatsApp", en: "AI chatbot for web & WhatsApp" },
      { id: "Ringkasan & rekomendasi otomatis", en: "Automated summaries & recommendations" },
      { id: "Integrasi AI ke sistem Anda", en: "AI integrated into your system" },
    ],
  },
  {
    slug: "aplikasi-mobile",
    icon: Smartphone,
    title: { id: "Aplikasi Mobile", en: "Mobile Apps" },
    summary: {
      id: "Aplikasi pendamping Android & iOS yang terhubung mulus dengan sistem yang kami bangun.",
      en: "Android & iOS companion apps that connect seamlessly with the systems we build.",
    },
    points: [
      { id: "Android & iOS (Flutter)", en: "Android & iOS (Flutter)" },
      { id: "Sinkron dengan sistem web", en: "In sync with your web system" },
      { id: "Notifikasi & mode offline", en: "Push notifications & offline mode" },
    ],
  },
  {
    slug: "uiux-motion",
    icon: Wand2,
    title: { id: "UI/UX & Motion Design", en: "UI/UX & Motion Design" },
    summary: {
      id: "Desain antarmuka dan animasi premium — persis seperti yang Anda rasakan di situs ini.",
      en: "Premium interface design and motion — exactly like what you're experiencing on this site.",
    },
    points: [
      { id: "Desain antarmuka & prototipe", en: "Interface design & prototypes" },
      { id: "Animasi & scroll premium", en: "Premium animation & scroll effects" },
      { id: "Aksesibilitas & reduced-motion", en: "Accessibility & reduced-motion" },
    ],
  },
];
