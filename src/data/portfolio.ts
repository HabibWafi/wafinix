type Bi = { id: string; en: string };

export interface PortfolioItem {
  slug: string;
  client: string;
  category: Bi;
  title: Bi;
  summary: Bi;
  challenge: Bi;
  solution: Bi;
  result: Bi;
  features: Bi[];
  tech: string[];
  accent: string; // card/cover accent color
  demo: boolean; // whether /demo/<slug> exists yet
}

// 8 illustrative case studies (fictional clients). Replace with real projects:
// add an entry + cover image in public/portfolio/<slug>/. Demos 1–4 are live;
// 5–8 land in Tahap 8.
export const portfolio: PortfolioItem[] = [
  {
    slug: "kopi-nusantara",
    client: "Kopi Nusantara",
    category: { id: "UMKM", en: "Small Business" },
    title: { id: "Company profile & katalog roaster kopi", en: "Coffee roaster profile & catalog" },
    summary: {
      id: "Profil dan katalog online untuk roaster kopi spesialti yang siap bersaing di Google.",
      en: "An online profile and catalog for a specialty coffee roaster, ready to compete on Google.",
    },
    challenge: {
      id: "Belum punya kehadiran online; pelanggan sulit melihat varian biji dan memesan.",
      en: "No online presence; customers couldn't browse bean varieties or order.",
    },
    solution: {
      id: "Website cepat dengan katalog produk, cerita brand, dan checkout via WhatsApp.",
      en: "A fast website with a product catalog, brand story, and WhatsApp checkout.",
    },
    result: {
      id: "Pesanan online naik dan brand tampil profesional sejak gulir pertama.",
      en: "Online orders grew and the brand looks professional from the first scroll.",
    },
    features: [
      { id: "Katalog produk", en: "Product catalog" },
      { id: "Cerita brand", en: "Brand story" },
      { id: "Checkout WhatsApp", en: "WhatsApp checkout" },
    ],
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    accent: "#8a5a2b",
    demo: true,
  },
  {
    slug: "sajira-restaurant",
    client: "Sajira",
    category: { id: "Restoran", en: "Restaurant" },
    title: { id: "Web restoran + reservasi & menu QR", en: "Restaurant site + reservations & QR menu" },
    summary: {
      id: "Pengalaman bersantap digital: menu QR, reservasi meja, dan galeri yang menggugah selera.",
      en: "A digital dining experience: QR menu, table reservations, and an appetizing gallery.",
    },
    challenge: {
      id: "Menu cetak cepat usang dan reservasi masih lewat telepon.",
      en: "Printed menus went stale fast and reservations were phone-only.",
    },
    solution: {
      id: "Menu digital QR yang mudah diperbarui dan reservasi online real-time.",
      en: "An easily-updated QR digital menu and real-time online reservations.",
    },
    result: {
      id: "Reservasi lebih tertata dan menu selalu mutakhir.",
      en: "Tidier reservations and an always-current menu.",
    },
    features: [
      { id: "Menu digital QR", en: "QR digital menu" },
      { id: "Reservasi online", en: "Online reservations" },
      { id: "Galeri hidangan", en: "Dish gallery" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    accent: "#c9a227",
    demo: true,
  },
  {
    slug: "amara-hotel",
    client: "Amara Hotel",
    category: { id: "Hotel", en: "Hotel" },
    title: { id: "Web hotel + booking kamar", en: "Hotel site + room booking" },
    summary: {
      id: "Situs boutique hotel dengan pengecekan ketersediaan dan pemesanan kamar real-time.",
      en: "A boutique hotel site with real-time availability and room booking.",
    },
    challenge: {
      id: "Tamu harus menunggu balasan untuk cek ketersediaan kamar.",
      en: "Guests had to wait for replies to check room availability.",
    },
    solution: {
      id: "Booking kamar real-time dengan pembayaran yang langsung tercatat.",
      en: "Real-time room booking with instantly recorded payments.",
    },
    result: {
      id: "Pemesanan langsung jadi, tanpa antre balasan manual.",
      en: "Instant bookings, no waiting on manual replies.",
    },
    features: [
      { id: "Booking real-time", en: "Real-time booking" },
      { id: "Manajemen kamar & tarif", en: "Room & rate management" },
      { id: "Pembayaran terintegrasi", en: "Integrated payments" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Midtrans", "Supabase"],
    accent: "#0f4c4c",
    demo: true,
  },
  {
    slug: "tripnusa",
    client: "TripNusa",
    category: { id: "Pariwisata", en: "Tourism" },
    title: { id: "Web trip + paket tur & jadwal", en: "Trip site + tour packages & schedules" },
    summary: {
      id: "Etalase paket wisata yang energik dengan jadwal dan pemesanan online.",
      en: "An energetic tour-package showcase with schedules and online booking.",
    },
    challenge: {
      id: "Paket dan jadwal tersebar dan sulit menonjol secara online.",
      en: "Packages and schedules were scattered and hard to stand out online.",
    },
    solution: {
      id: "Satu platform untuk paket, itinerary, jadwal, dan pemesanan.",
      en: "One platform for packages, itineraries, schedules, and booking.",
    },
    result: {
      id: "Calon wisatawan langsung tergerak sejak halaman pertama.",
      en: "Travelers are drawn in from the very first page.",
    },
    features: [
      { id: "Paket & itinerary", en: "Packages & itineraries" },
      { id: "Jadwal keberangkatan", en: "Departure schedules" },
      { id: "Pemesanan online", en: "Online booking" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    accent: "#0fb5b5",
    demo: true,
  },
  {
    slug: "safar-mabrur",
    client: "Safar Mabrur",
    category: { id: "Haji & Umroh", en: "Hajj & Umrah" },
    title: { id: "Web travel haji & umroh", en: "Hajj & Umrah travel site" },
    summary: {
      id: "Paket, jadwal keberangkatan, dan pendaftaran jamaah yang rapi dan terpercaya.",
      en: "Packages, departure schedules, and tidy, trustworthy pilgrim registration.",
    },
    challenge: {
      id: "Informasi paket dan pendaftaran tersebar dan kurang meyakinkan.",
      en: "Package info and registration were scattered and unconvincing.",
    },
    solution: {
      id: "Situs dengan paket jelas, jadwal, dan pendaftaran online.",
      en: "A site with clear packages, schedules, and online registration.",
    },
    result: {
      id: "Calon jamaah lebih percaya dan mudah mendaftar.",
      en: "Prospective pilgrims trust more and register easily.",
    },
    features: [
      { id: "Paket & jadwal", en: "Packages & schedules" },
      { id: "Pendaftaran jamaah", en: "Pilgrim registration" },
      { id: "Pembayaran & status", en: "Payment & status" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    accent: "#1f7a5a",
    demo: true,
  },
  {
    slug: "primaland",
    client: "PrimaLand",
    category: { id: "Properti", en: "Property" },
    title: { id: "Platform listing properti", en: "Property listing platform" },
    summary: {
      id: "Listing properti dengan filter pencarian, peta, dan pengelolaan agen.",
      en: "Property listings with search filters, maps, and agent management.",
    },
    challenge: {
      id: "Calon pembeli sulit memfilter listing dan menghubungi agen.",
      en: "Buyers struggled to filter listings and reach agents.",
    },
    solution: {
      id: "Pencarian bertenaga filter, peta, dan manajemen lead & agen.",
      en: "Filter-powered search, maps, and lead & agent management.",
    },
    result: {
      id: "Pencarian lebih cepat dan lead lebih tertata.",
      en: "Faster search and tidier leads.",
    },
    features: [
      { id: "Filter pencarian", en: "Search filters" },
      { id: "Peta & detail", en: "Maps & details" },
      { id: "Manajemen agen", en: "Agent management" },
    ],
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Google Maps API"],
    accent: "#1f3a8a",
    demo: true,
  },
  {
    slug: "eximtrade",
    client: "EximTrade",
    category: { id: "Ekspor-Impor", en: "Export-Import" },
    title: { id: "Company profile ekspor-impor bilingual", en: "Bilingual export-import profile" },
    summary: {
      id: "Profil perusahaan bilingual dan katalog komoditas untuk pembeli global.",
      en: "A bilingual company profile and commodity catalog for global buyers.",
    },
    challenge: {
      id: "Pembeli internasional butuh kepercayaan dan info produk dalam bahasa mereka.",
      en: "International buyers needed trust and product info in their language.",
    },
    solution: {
      id: "Profil bilingual ID/EN dengan katalog dan form RFQ.",
      en: "A bilingual ID/EN profile with a catalog and RFQ form.",
    },
    result: {
      id: "Citra global yang solid dan inquiry yang lebih berkualitas.",
      en: "A solid global image and higher-quality inquiries.",
    },
    features: [
      { id: "Bilingual ID/EN", en: "Bilingual ID/EN" },
      { id: "Katalog komoditas", en: "Commodity catalog" },
      { id: "Form RFQ", en: "RFQ form" },
    ],
    tech: ["Next.js", "Tailwind CSS", "next-intl"],
    accent: "#3a5a78",
    demo: true,
  },
  {
    slug: "kasirpro",
    client: "KasirPro",
    category: { id: "Sistem", en: "System" },
    title: { id: "Dashboard kasir/POS + laporan", en: "POS dashboard + reports" },
    summary: {
      id: "Sistem kasir dengan dashboard penjualan, stok, dan laporan keuangan otomatis.",
      en: "A POS system with a sales, stock, and automated financial-report dashboard.",
    },
    challenge: {
      id: "Pencatatan penjualan dan stok masih manual dan rawan salah.",
      en: "Sales and stock recording was manual and error-prone.",
    },
    solution: {
      id: "Dashboard real-time dengan laporan yang dihasilkan otomatis.",
      en: "A real-time dashboard with automatically generated reports.",
    },
    result: {
      id: "Pemilik tahu persis omzet dan stok tanpa hitung manual.",
      en: "Owners know exact revenue and stock without manual counting.",
    },
    features: [
      { id: "Dashboard penjualan", en: "Sales dashboard" },
      { id: "Manajemen stok", en: "Stock management" },
      { id: "Laporan otomatis", en: "Automated reports" },
    ],
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Recharts"],
    accent: "#5b3a8a",
    demo: true,
  },
];
