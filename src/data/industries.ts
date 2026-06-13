import {
  Store,
  Ship,
  UtensilsCrossed,
  Hotel,
  Palmtree,
  Plane,
  Building2,
  Landmark,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IndustryItem {
  slug: string;
  icon: LucideIcon;
  name: { id: string; en: string };
  desc: { id: string; en: string };
}

// 9 target industries. Home shows them in a horizontal scroll; /solusi (Tahap 5)
// gives each a full section.
export const industries: IndustryItem[] = [
  {
    slug: "umkm",
    icon: Store,
    name: { id: "UMKM", en: "Small Business" },
    desc: {
      id: "Toko online & company profile terjangkau yang siap bersaing di Google.",
      en: "Affordable online stores & profiles ready to compete on Google.",
    },
  },
  {
    slug: "ekspor-impor",
    icon: Ship,
    name: { id: "Ekspor-Impor", en: "Export-Import" },
    desc: {
      id: "Company profile bilingual & katalog produk untuk pembeli global.",
      en: "Bilingual company profiles & product catalogs for global buyers.",
    },
  },
  {
    slug: "restoran",
    icon: UtensilsCrossed,
    name: { id: "Restoran", en: "Restaurants" },
    desc: {
      id: "Menu digital QR, reservasi, dan kasir yang jadi satu sistem.",
      en: "QR digital menus, reservations, and POS in one system.",
    },
  },
  {
    slug: "hotel",
    icon: Hotel,
    name: { id: "Hotel & Penginapan", en: "Hotels & Stays" },
    desc: {
      id: "Booking kamar real-time dengan pembayaran yang langsung tercatat.",
      en: "Real-time room booking with payments recorded instantly.",
    },
  },
  {
    slug: "pariwisata",
    icon: Palmtree,
    name: { id: "Pariwisata", en: "Tourism" },
    desc: {
      id: "Etalase destinasi & paket wisata yang memikat sejak gulir pertama.",
      en: "Destination & tour showcases that captivate from the first scroll.",
    },
  },
  {
    slug: "web-trip",
    icon: Plane,
    name: { id: "Web Trip & Travel", en: "Trip & Travel" },
    desc: {
      id: "Paket tur, jadwal, dan pemesanan online untuk biro perjalanan.",
      en: "Tour packages, schedules, and online booking for travel agencies.",
    },
  },
  {
    slug: "properti",
    icon: Building2,
    name: { id: "Properti", en: "Property" },
    desc: {
      id: "Listing properti dengan filter pencarian dan pengaturan agen.",
      en: "Property listings with search filters and agent management.",
    },
  },
  {
    slug: "haji-umroh",
    icon: Landmark,
    name: { id: "Haji & Umroh", en: "Hajj & Umrah" },
    desc: {
      id: "Paket, jadwal keberangkatan, dan pendaftaran jamaah yang rapi.",
      en: "Packages, departure schedules, and tidy pilgrim registration.",
    },
  },
  {
    slug: "korporat",
    icon: Briefcase,
    name: { id: "Korporat", en: "Corporate" },
    desc: {
      id: "Sistem internal, ERP, dan dashboard untuk perusahaan menengah-besar.",
      en: "Internal systems, ERP, and dashboards for mid-to-large companies.",
    },
  },
];
