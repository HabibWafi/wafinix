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

type Bi = { id: string; en: string };

export interface IndustryItem {
  slug: string;
  icon: LucideIcon;
  name: Bi;
  desc: Bi;
  problem: Bi;
  solution: Bi;
  features: Bi[];
}

// 9 target industries. Home shows name + desc; /solusi shows problem/solution/features.
export const industries: IndustryItem[] = [
  {
    slug: "umkm",
    icon: Store,
    name: { id: "UMKM", en: "Small Business" },
    desc: {
      id: "Toko online & company profile terjangkau yang siap bersaing di Google.",
      en: "Affordable online stores & profiles ready to compete on Google.",
    },
    problem: {
      id: "Belum punya kehadiran online yang meyakinkan dan sulit ditemukan calon pembeli.",
      en: "No convincing online presence, and hard for buyers to find.",
    },
    solution: {
      id: "Website & toko online yang cepat, mobile-friendly, dan dioptimalkan untuk pencarian lokal.",
      en: "A fast, mobile-friendly website & store optimized for local search.",
    },
    features: [
      { id: "Toko online & katalog", en: "Online store & catalog" },
      { id: "Optimasi SEO lokal", en: "Local SEO" },
      { id: "Integrasi WhatsApp & pembayaran", en: "WhatsApp & payment integration" },
    ],
  },
  {
    slug: "ekspor-impor",
    icon: Ship,
    name: { id: "Ekspor-Impor", en: "Export-Import" },
    desc: {
      id: "Company profile bilingual & katalog produk untuk pembeli global.",
      en: "Bilingual company profiles & product catalogs for global buyers.",
    },
    problem: {
      id: "Pembeli global butuh kepercayaan dan informasi produk yang jelas dalam bahasa mereka.",
      en: "Global buyers need trust and clear product info in their language.",
    },
    solution: {
      id: "Company profile bilingual & katalog produk profesional untuk pasar internasional.",
      en: "A bilingual company profile & professional product catalog for international markets.",
    },
    features: [
      { id: "Bilingual ID/EN", en: "Bilingual ID/EN" },
      { id: "Katalog & spesifikasi produk", en: "Catalog & product specs" },
      { id: "Form inquiry & RFQ", en: "Inquiry & RFQ forms" },
    ],
  },
  {
    slug: "restoran",
    icon: UtensilsCrossed,
    name: { id: "Restoran", en: "Restaurants" },
    desc: {
      id: "Menu digital QR, reservasi, dan kasir yang jadi satu sistem.",
      en: "QR digital menus, reservations, and POS in one system.",
    },
    problem: {
      id: "Menu cetak cepat usang dan pencatatan order serta kasir masih manual.",
      en: "Printed menus go stale fast, and orders & checkout are still manual.",
    },
    solution: {
      id: "Menu digital QR, reservasi online, dan kasir yang menyatu dalam satu sistem.",
      en: "QR digital menus, online reservations, and POS unified in one system.",
    },
    features: [
      { id: "Menu digital QR", en: "QR digital menu" },
      { id: "Reservasi & pemesanan", en: "Reservations & ordering" },
      { id: "Kasir & laporan penjualan", en: "POS & sales reports" },
    ],
  },
  {
    slug: "hotel",
    icon: Hotel,
    name: { id: "Hotel & Penginapan", en: "Hotels & Stays" },
    desc: {
      id: "Booking kamar real-time dengan pembayaran yang langsung tercatat.",
      en: "Real-time room booking with payments recorded instantly.",
    },
    problem: {
      id: "Tamu ingin cek ketersediaan dan memesan kamar langsung tanpa menunggu balasan.",
      en: "Guests want to check availability and book instantly without waiting for a reply.",
    },
    solution: {
      id: "Booking kamar real-time dengan manajemen tarif dan pembayaran yang langsung tercatat.",
      en: "Real-time room booking with rate management and instantly recorded payments.",
    },
    features: [
      { id: "Booking real-time", en: "Real-time booking" },
      { id: "Manajemen kamar & tarif", en: "Room & rate management" },
      { id: "Pembayaran terintegrasi", en: "Integrated payments" },
    ],
  },
  {
    slug: "pariwisata",
    icon: Palmtree,
    name: { id: "Pariwisata", en: "Tourism" },
    desc: {
      id: "Etalase destinasi & paket wisata yang memikat sejak gulir pertama.",
      en: "Destination & tour showcases that captivate from the first scroll.",
    },
    problem: {
      id: "Destinasi dan paket sulit menonjol dan kurang memikat secara online.",
      en: "Destinations and packages struggle to stand out and engage online.",
    },
    solution: {
      id: "Etalase destinasi memikat dengan visual kuat dan alur pemesanan yang jelas.",
      en: "Captivating destination showcases with strong visuals and a clear booking flow.",
    },
    features: [
      { id: "Galeri destinasi", en: "Destination gallery" },
      { id: "Paket & itinerary", en: "Packages & itineraries" },
      { id: "Pemesanan online", en: "Online booking" },
    ],
  },
  {
    slug: "web-trip",
    icon: Plane,
    name: { id: "Web Trip & Travel", en: "Trip & Travel" },
    desc: {
      id: "Paket tur, jadwal, dan pemesanan online untuk biro perjalanan.",
      en: "Tour packages, schedules, and online booking for travel agencies.",
    },
    problem: {
      id: "Biro perjalanan mengelola paket, jadwal, dan pendaftaran secara terpisah dan manual.",
      en: "Agencies manage packages, schedules, and sign-ups separately and manually.",
    },
    solution: {
      id: "Satu platform untuk paket tur, jadwal, pendaftaran, dan pembayaran online.",
      en: "One platform for tour packages, schedules, sign-ups, and online payment.",
    },
    features: [
      { id: "Manajemen paket & jadwal", en: "Package & schedule management" },
      { id: "Pendaftaran & pembayaran", en: "Sign-up & payment" },
      { id: "Dashboard admin", en: "Admin dashboard" },
    ],
  },
  {
    slug: "properti",
    icon: Building2,
    name: { id: "Properti", en: "Property" },
    desc: {
      id: "Listing properti dengan filter pencarian dan pengaturan agen.",
      en: "Property listings with search filters and agent management.",
    },
    problem: {
      id: "Calon pembeli sulit memfilter listing dan menghubungi agen dengan cepat.",
      en: "Buyers struggle to filter listings and reach agents quickly.",
    },
    solution: {
      id: "Listing properti dengan filter pencarian, peta, dan pengelolaan lead & agen.",
      en: "Property listings with search filters, maps, and lead & agent management.",
    },
    features: [
      { id: "Listing & filter pencarian", en: "Listings & search filters" },
      { id: "Peta & detail properti", en: "Maps & property details" },
      { id: "Lead & manajemen agen", en: "Leads & agent management" },
    ],
  },
  {
    slug: "haji-umroh",
    icon: Landmark,
    name: { id: "Haji & Umroh", en: "Hajj & Umrah" },
    desc: {
      id: "Paket, jadwal keberangkatan, dan pendaftaran jamaah yang rapi.",
      en: "Packages, departure schedules, and tidy pilgrim registration.",
    },
    problem: {
      id: "Jamaah butuh informasi paket, jadwal, dan pendaftaran yang jelas dan terpercaya.",
      en: "Pilgrims need clear, trustworthy package, schedule, and registration info.",
    },
    solution: {
      id: "Web travel haji & umroh dengan paket, jadwal keberangkatan, dan pendaftaran yang rapi.",
      en: "A Hajj & Umrah travel site with packages, departure schedules, and tidy registration.",
    },
    features: [
      { id: "Paket & jadwal keberangkatan", en: "Packages & departure schedules" },
      { id: "Pendaftaran jamaah", en: "Pilgrim registration" },
      { id: "Pembayaran & status", en: "Payment & status tracking" },
    ],
  },
  {
    slug: "korporat",
    icon: Briefcase,
    name: { id: "Korporat", en: "Corporate" },
    desc: {
      id: "Sistem internal, ERP, dan dashboard untuk perusahaan menengah-besar.",
      en: "Internal systems, ERP, and dashboards for mid-to-large companies.",
    },
    problem: {
      id: "Proses internal tersebar di spreadsheet dan tools terpisah yang sulit dipantau.",
      en: "Internal processes are scattered across spreadsheets and disconnected tools.",
    },
    solution: {
      id: "Sistem internal, ERP, dan dashboard custom yang dirancang sesuai alur kerja perusahaan.",
      en: "Internal systems, ERP, and custom dashboards designed around your workflow.",
    },
    features: [
      { id: "ERP & modul custom", en: "ERP & custom modules" },
      { id: "Dashboard & laporan", en: "Dashboards & reports" },
      { id: "Hak akses per peran", en: "Role-based access" },
    ],
  },
];
