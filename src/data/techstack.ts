export interface TechCategory {
  label: { id: string; en: string };
  items: string[];
}

// Full categorized stack — /layanan (Tahap 5) renders the grid; Home uses the
// flat `techMarquee` list below.
export const techCategories: TechCategory[] = [
  {
    label: { id: "Bahasa", en: "Languages" },
    items: ["PHP", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Dart"],
  },
  {
    label: { id: "Backend", en: "Backend" },
    items: ["Laravel", "CodeIgniter", "Node.js", "Express", "NestJS", "REST API"],
  },
  {
    label: { id: "Frontend", en: "Frontend" },
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    label: { id: "Mobile", en: "Mobile" },
    items: ["Flutter", "React Native"],
  },
  {
    label: { id: "Database", en: "Database" },
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Supabase"],
  },
  {
    label: { id: "CMS & E-commerce", en: "CMS & E-commerce" },
    items: ["WordPress", "WooCommerce"],
  },
  {
    label: { id: "AI", en: "AI" },
    items: ["Claude API", "OpenAI API", "Gemini", "LangChain", "RAG", "pgvector"],
  },
  {
    label: { id: "Pembayaran & Integrasi", en: "Payments & Integration" },
    items: ["Midtrans", "Xendit", "PayPal", "Crypto (USDT/USDC)", "WhatsApp API", "Google Maps API"],
  },
  {
    label: { id: "Infrastruktur", en: "Infrastructure" },
    items: ["Docker", "Nginx", "AWS", "Google Cloud", "Vercel", "Cloudflare", "Git"],
  },
];

// Curated, recognizable subset for the home marquee.
export const techMarquee: string[] = [
  "Next.js",
  "Laravel",
  "React",
  "TypeScript",
  "Flutter",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Midtrans",
  "Claude API",
  "Three.js",
  "GSAP",
  "Docker",
  "Vue.js",
  "WordPress",
];
