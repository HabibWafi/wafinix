import {
  ShieldCheck,
  Users,
  Plane,
  Headphones,
  CalendarDays,
  Star,
  BadgeCheck,
  BadgePercent,
  UserRound,
  Palmtree,
  Leaf,
  Coffee,
  Sprout,
  Ship,
  Globe2,
  PackageCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Centralized free stock photos (Unsplash CDN). Swap any URL for your own asset
// later — this is the only place demo imagery is defined.
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export interface DemoCta {
  label: string;
  primary?: boolean;
}
export interface DemoCard {
  image: string;
  badge?: string;
  title: string;
  meta?: string[];
  desc?: string;
  price?: string;
  priceNote?: string;
}
export interface DemoBadge {
  icon: LucideIcon;
  title: string;
  sub: string;
}
export interface DemoStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface DemoConfig {
  brand: string;
  brandSub?: string;
  // palette
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  brandColor: string;
  accent: string;
  onBrand: string;
  announcement?: string;
  nav: string[];
  navCta: string;
  heroLayout: "split" | "overlay";
  heroDark: boolean; // dark hero band (light text)
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    image: string;
    ctas: DemoCta[];
  };
  widget?: { fields: { label: string; value: string }[]; cta: string };
  badges?: DemoBadge[];
  badgesDark?: boolean;
  sectionEyebrow?: string;
  sectionTitle: string;
  sectionCta?: string;
  cards: DemoCard[];
  cardCols?: 3 | 4;
  stats?: DemoStat[];
  footerTagline: string;
}

export const demos: Record<string, DemoConfig> = {
  "kopi-nusantara": {
    brand: "Kopi Nusantara",
    bg: "#f5efe6",
    surface: "#fbf7f0",
    ink: "#2b1d12",
    muted: "#5c4a3b",
    brandColor: "#4a5d3a",
    accent: "#8a5a2b",
    onBrand: "#f5efe6",
    announcement: "Gratis ongkir untuk pembelian di atas Rp150.000",
    nav: ["Beranda", "Shop", "Tentang Kami", "Blog", "Kontak"],
    navCta: "Belanja",
    heroLayout: "split",
    heroDark: false,
    hero: {
      eyebrow: "Kopi Spesialti Indonesia",
      title: "Rasa Asli, Dari Nusantara",
      sub: "Biji pilihan dari petani lokal, dipanggang dengan penuh perhatian untuk cita rasa terbaik.",
      image: img("photo-1495474472287-4d71bcdd2085"),
      ctas: [
        { label: "Belanja Sekarang", primary: true },
        { label: "Tentang Kami" },
      ],
    },
    badges: [
      { icon: Leaf, title: "Biji Pilihan", sub: "Kualitas terbaik" },
      { icon: Coffee, title: "Sangrai Harian", sub: "Fresh setiap hari" },
      { icon: Sprout, title: "Petani Lokal", sub: "Dukung Indonesia" },
    ],
    sectionEyebrow: "Koleksi Kami",
    sectionTitle: "Kopi Pilihan",
    sectionCta: "Lihat Semua",
    cardCols: 4,
    cards: [
      { image: img("photo-1447933601403-0c6688de566e", 800), badge: "Baru", title: "Gayo", desc: "Aceh", price: "Rp 95.000" },
      { image: img("photo-1559496417-e7f25cb247f3", 800), title: "Toraja", desc: "Sulawesi Selatan", price: "Rp 110.000" },
      { image: img("photo-1442512595331-e89e73853f31", 800), title: "Kintamani", desc: "Bali", price: "Rp 105.000" },
      { image: img("photo-1509042239860-f550ce710b93", 800), title: "Flores", desc: "Nusa Tenggara Timur", price: "Rp 98.000" },
    ],
    footerTagline: "Kopi spesialti dari kebun Nusantara.",
  },

  "sajira-restaurant": {
    brand: "Sajira",
    brandSub: "Restaurant",
    bg: "#15110f",
    surface: "#241f1c",
    ink: "#f3ece0",
    muted: "#cfc4b4",
    brandColor: "#c9622e",
    accent: "#c9a227",
    onBrand: "#ffffff",
    nav: ["Home", "Menu", "Reservasi", "Event", "Tentang Kami", "Kontak"],
    navCta: "Reservasi Meja",
    heroLayout: "split",
    heroDark: true,
    hero: {
      eyebrow: "Rasa Istimewa, Momen Berkesan",
      title: "Sajian Hangat, Untuk Cerita Indah",
      sub: "Nikmati perpaduan cita rasa lokal dan internasional dalam suasana yang hangat dan berkelas.",
      image: img("photo-1546833999-b9f581a1996d"),
      ctas: [{ label: "Reservasi Meja", primary: true }, { label: "Lihat Menu" }],
    },
    widget: {
      fields: [
        { label: "Tanggal", value: "Pilih Tanggal" },
        { label: "Tamu", value: "2 Orang" },
        { label: "Waktu", value: "19:00" },
      ],
      cta: "Pesan Sekarang",
    },
    sectionEyebrow: "Menu Pilihan",
    sectionTitle: "Favorit Kami",
    cardCols: 3,
    cards: [
      { image: img("photo-1546833999-b9f581a1996d", 800), title: "Grilled Black Pepper Steak", desc: "Steak pilihan dengan saus black pepper spesial.", price: "IDR 165.000" },
      { image: img("photo-1467003909585-2f8a72700288", 800), title: "Salmon Teriyaki", desc: "Salmon panggang dengan saus teriyaki rumahan.", price: "IDR 145.000" },
      { image: img("photo-1551183053-bf91a1d81141", 800), title: "Creamy Truffle Pasta", desc: "Pasta dengan saus krim truffle yang harum.", price: "IDR 125.000" },
    ],
    footerTagline: "Cita rasa yang dikenang.",
  },

  "amara-hotel": {
    brand: "Amara",
    brandSub: "Hotel",
    bg: "#f4f1ec",
    surface: "#ffffff",
    ink: "#0f4c4c",
    muted: "#44403a",
    brandColor: "#0f4c4c",
    accent: "#b8915a",
    onBrand: "#f4f1ec",
    nav: ["Beranda", "Kamar", "Fasilitas", "Galeri", "Promo", "Lokasi", "Kontak"],
    navCta: "Pesan Sekarang",
    heroLayout: "overlay",
    heroDark: true,
    hero: {
      eyebrow: "Ketenangan. Kenyamanan. Kenangan.",
      title: "Menginap dengan Sentuhan Berbeda",
      sub: "Amara Hotel menghadirkan pengalaman menginap yang tenang, hangat, dan tak terlupakan.",
      image: img("photo-1566073771259-6a8506099945", 1600),
      ctas: [{ label: "Jelajahi Kamar", primary: true }],
    },
    widget: {
      fields: [
        { label: "Check-in", value: "24 Mei 2025" },
        { label: "Check-out", value: "25 Mei 2025" },
        { label: "Tamu", value: "2 Dewasa, 0 Anak" },
        { label: "Kamar", value: "1 Kamar" },
      ],
      cta: "Cari Kamar",
    },
    sectionEyebrow: "Pilihan Kamar",
    sectionTitle: "Kamar Pilihan Kami",
    sectionCta: "Lihat Semua Kamar",
    cardCols: 3,
    cards: [
      { image: img("photo-1611892440504-42a792e24d32", 800), title: "Deluxe Room", meta: ["2 Dewasa", "28 m²"], price: "IDR 1.250.000", priceNote: "/malam" },
      { image: img("photo-1582719478250-c89cae4dc85b", 800), title: "Premier Room", meta: ["2 Dewasa", "36 m²"], price: "IDR 1.850.000", priceNote: "/malam" },
      { image: img("photo-1571896349842-33c89424de2d", 800), title: "Suite Ocean View", meta: ["2 Dewasa", "56 m²"], price: "IDR 2.750.000", priceNote: "/malam" },
    ],
    footerTagline: "Menginap dalam ketenangan.",
  },

  tripnusa: {
    brand: "TripNusa",
    brandSub: "Jelajah Indonesia",
    bg: "#f0fbfb",
    surface: "#ffffff",
    ink: "#0f3a3a",
    muted: "#3a5a5a",
    brandColor: "#ff6b5e",
    accent: "#0fb5b5",
    onBrand: "#ffffff",
    nav: ["Beranda", "Paket Tur", "Destinasi", "Promo", "Tentang Kami", "Kontak"],
    navCta: "Hubungi Kami",
    heroLayout: "overlay",
    heroDark: true,
    hero: {
      eyebrow: "Liburan Berkesan, Harga Bersahabat",
      title: "Jelajahi Indonesia, Ciptakan Cerita",
      sub: "Nikmati pengalaman perjalanan yang tak terlupakan bersama TripNusa. Temukan destinasi terbaik Indonesia!",
      image: img("photo-1537953773345-d172ccf13cf1", 1600),
      ctas: [{ label: "Lihat Paket", primary: true }],
    },
    widget: {
      fields: [
        { label: "Tujuan", value: "Mau ke mana?" },
        { label: "Tanggal Berangkat", value: "Pilih tanggal" },
        { label: "Durasi", value: "Semua Durasi" },
        { label: "Tamu", value: "2 Dewasa" },
      ],
      cta: "Cari Paket",
    },
    badges: [
      { icon: BadgePercent, title: "Harga Terbaik", sub: "Jaminan harga bersahabat" },
      { icon: UserRound, title: "Pemandu Profesional", sub: "Berpengalaman & ramah" },
      { icon: ShieldCheck, title: "Pemesanan Mudah", sub: "Cepat, aman, & terpercaya" },
      { icon: Palmtree, title: "Destinasi Terbaik", sub: "Pilihan destinasi favorit" },
    ],
    sectionEyebrow: "Paket Pilihan",
    sectionTitle: "Paket Wisata Favorit",
    sectionCta: "Lihat Semua Paket",
    cardCols: 4,
    cards: [
      { image: img("photo-1573790387438-4da905039392", 800), badge: "4 Hari 3 Malam", title: "Labuan Bajo Komodo", desc: "Labuan Bajo, NTT", meta: ["4 Hari 3 Malam", "2-10 Orang"], price: "IDR 4.250.000", priceNote: "/orang" },
      { image: img("photo-1518548419970-58e3b4079ab2", 800), badge: "3 Hari 2 Malam", title: "Bali Island Escape", desc: "Bali", meta: ["3 Hari 2 Malam", "2-12 Orang"], price: "IDR 2.750.000", priceNote: "/orang" },
      { image: img("photo-1604999565976-8913ad2ddb7c", 800), badge: "5 Hari 4 Malam", title: "Explore Danau Toba", desc: "Sumatera Utara", meta: ["5 Hari 4 Malam", "2-8 Orang"], price: "IDR 5.150.000", priceNote: "/orang" },
      { image: img("photo-1488646953014-85cb44e25828", 800), badge: "3 Hari 2 Malam", title: "Bromo Midnight Tour", desc: "Jawa Timur", meta: ["3 Hari 2 Malam", "2-10 Orang"], price: "IDR 1.850.000", priceNote: "/orang" },
    ],
    footerTagline: "Petualangan dimulai di sini.",
  },

  "safar-mabrur": {
    brand: "Safar Mabrur",
    brandSub: "Haji & Umroh",
    bg: "#f4f1ea",
    surface: "#ffffff",
    ink: "#0e3a2f",
    muted: "#44504a",
    brandColor: "#0e3a2f",
    accent: "#c9a227",
    onBrand: "#f4f1ea",
    nav: ["Beranda", "Paket Haji & Umroh", "Layanan", "Tentang Kami", "Artikel", "Kontak"],
    navCta: "Konsultasi Gratis",
    heroLayout: "overlay",
    heroDark: true,
    hero: {
      eyebrow: "Amanah, Nyaman, Insyaallah Mabrur",
      title: "Perjalanan Ibadah, Menuju Mabrur",
      sub: "Kami hadir untuk membimbing setiap langkah ibadah Anda dengan amanah dan pelayanan terbaik.",
      image: img("photo-1591604129939-f1efa4d9f7fa", 1600),
      ctas: [{ label: "Lihat Paket", primary: true }, { label: "Konsultasi Gratis" }],
    },
    badges: [
      { icon: ShieldCheck, title: "Izin Resmi", sub: "PPIU No. 1234 Tahun 2021" },
      { icon: Users, title: "Pembimbing", sub: "Berpengalaman & Profesional" },
      { icon: Plane, title: "Keberangkatan Pasti", sub: "Jadwal Terpercaya" },
      { icon: Headphones, title: "Layanan 24/7", sub: "Siap Melayani Anda" },
    ],
    badgesDark: true,
    sectionEyebrow: "Paket Pilihan",
    sectionTitle: "Paket Haji & Umroh Pilihan",
    sectionCta: "Lihat Semua Paket",
    cardCols: 4,
    cards: [
      { image: img("photo-1564769662533-4f00a87b4056", 800), badge: "UMROH", title: "Umroh Reguler", meta: ["9 Hari", "Hotel Bintang 4"], price: "IDR 26.900.000", priceNote: "/pax" },
      { image: img("photo-1542816417-0983c9c9ad53", 800), badge: "UMROH", title: "Umroh Plus Thaif", meta: ["12 Hari", "Hotel Bintang 4"], price: "IDR 32.900.000", priceNote: "/pax" },
      { image: img("photo-1591604129939-f1efa4d9f7fa", 800), badge: "HAJI", title: "Haji Plus", meta: ["25 Hari", "Hotel Bintang 5"], price: "IDR 98.500.000", priceNote: "/pax" },
      { image: img("photo-1519817650390-64a93db51149", 800), badge: "HAJI", title: "Haji Furoda", meta: ["16 Hari", "Hotel Bintang 5"], price: "IDR 185.000.000", priceNote: "/pax" },
    ],
    stats: [
      { icon: Users, value: "10.000+", label: "Jamaah Berangkat" },
      { icon: CalendarDays, value: "12+ Tahun", label: "Pengalaman" },
      { icon: Star, value: "4.9/5", label: "Kepuasan Jamaah" },
      { icon: BadgeCheck, value: "Garansi", label: "Sesuai Syariah" },
    ],
    footerTagline: "Membimbing setiap langkah ibadah Anda.",
  },

  primaland: {
    brand: "PrimaLand",
    brandSub: "Properti",
    bg: "#f3f5f8",
    surface: "#ffffff",
    ink: "#1f2a44",
    muted: "#4a5568",
    brandColor: "#1f3a8a",
    accent: "#e0a800",
    onBrand: "#ffffff",
    nav: ["Beranda", "Jual", "Sewa", "Agen", "Tentang Kami", "Kontak"],
    navCta: "Pasang Iklan",
    heroLayout: "overlay",
    heroDark: true,
    hero: {
      eyebrow: "Temukan Rumah Impian Anda",
      title: "Properti Terbaik, di Lokasi Terbaik",
      sub: "Ribuan listing rumah, apartemen, dan tanah dengan pencarian mudah dan agen terpercaya.",
      image: img("photo-1568605114967-8130f3a36994", 1600),
      ctas: [{ label: "Cari Properti", primary: true }],
    },
    widget: {
      fields: [
        { label: "Lokasi", value: "Kota / area" },
        { label: "Tipe", value: "Rumah" },
        { label: "Harga", value: "Semua harga" },
      ],
      cta: "Cari Properti",
    },
    sectionEyebrow: "Listing Pilihan",
    sectionTitle: "Properti Unggulan",
    sectionCta: "Lihat Semua Listing",
    cardCols: 3,
    cards: [
      { image: img("photo-1564013799919-ab600027ffc6", 800), badge: "Dijual", title: "Rumah Modern Bintaro", desc: "Tangerang Selatan", meta: ["4 KT", "3 KM", "220 m²"], price: "Rp 2,4 M" },
      { image: img("photo-1512917774080-9991f1c4c750", 800), badge: "Dijual", title: "Villa Asri Dago", desc: "Bandung", meta: ["3 KT", "2 KM", "180 m²"], price: "Rp 1,8 M" },
      { image: img("photo-1600596542815-ffad4c1539a9", 800), badge: "Disewa", title: "Apartemen Sudirman", desc: "Jakarta Pusat", meta: ["2 KT", "1 KM", "65 m²"], price: "Rp 12 Jt", priceNote: "/bln" },
    ],
    footerTagline: "Menemukan properti, mempertemukan agen.",
  },

  eximtrade: {
    brand: "EximTrade",
    brandSub: "Export-Import",
    bg: "#f2f4f6",
    surface: "#ffffff",
    ink: "#1c2a38",
    muted: "#465263",
    brandColor: "#2c4a63",
    accent: "#e3a547",
    onBrand: "#ffffff",
    nav: ["Home", "Products", "About Us", "Export", "Contact"],
    navCta: "Request Quote",
    heroLayout: "overlay",
    heroDark: true,
    hero: {
      eyebrow: "Trusted Indonesian Exporter",
      title: "Connecting Indonesia to Global Markets",
      sub: "Quality commodities and reliable supply chains for buyers worldwide. Bilingual support, every step.",
      image: img("photo-1494412574643-ff11b0a5c1c3", 1600),
      ctas: [{ label: "View Catalog", primary: true }, { label: "Request Quote" }],
    },
    badges: [
      { icon: Globe2, title: "20+ Countries", sub: "Global reach" },
      { icon: Ship, title: "FOB / CIF", sub: "Flexible terms" },
      { icon: PackageCheck, title: "Quality Assured", sub: "Inspected & certified" },
    ],
    sectionEyebrow: "Our Commodities",
    sectionTitle: "Featured Products",
    sectionCta: "View Catalog",
    cardCols: 4,
    cards: [
      { image: img("photo-1447933601403-0c6688de566e", 800), title: "Arabica Coffee", desc: "Green beans, grade 1" },
      { image: img("photo-1596040033229-a9821ebd058d", 800), title: "Spices", desc: "Nutmeg, clove, pepper" },
      { image: img("photo-1518977676601-b53f82aba655", 800), title: "Cacao", desc: "Fermented dry beans" },
      { image: img("photo-1601493700631-2b16ec4b4716", 800), title: "Rattan Furniture", desc: "Handcrafted, export-grade" },
    ],
    footerTagline: "Your reliable export partner from Indonesia.",
  },
};
