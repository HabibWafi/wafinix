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

// Brand logos for the home tech section + hero. `slug` is the simple-icons slug
// (rendered via https://cdn.simpleicons.org/<slug>). Keep only slugs that exist.
export interface TechLogo {
  name: string;
  slug: string;
}

export const techLogos: TechLogo[] = [
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Vue.js", slug: "vuedotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Laravel", slug: "laravel" },
  { name: "PHP", slug: "php" },
  { name: "Flutter", slug: "flutter" },
  { name: "Dart", slug: "dart" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "Supabase", slug: "supabase" },
  { name: "Three.js", slug: "threedotjs" },
  { name: "GSAP", slug: "greensock" },
  { name: "Framer Motion", slug: "framer" },
  { name: "Docker", slug: "docker" },
  { name: "Figma", slug: "figma" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Cloudflare", slug: "cloudflare" },
];

// Iconic few to float around the hero phoenix.
export const heroTechLogos: TechLogo[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Laravel", slug: "laravel" },
  { name: "Flutter", slug: "flutter" },
  { name: "Supabase", slug: "supabase" },
  { name: "TypeScript", slug: "typescript" },
];

// Logos are bundled locally in public/tech (downloaded from simple-icons) so
// there is no runtime CDN dependency. `white` returns the cream/white variant.
export const techIconUrl = (slug: string, white = false) =>
  `/tech/${slug}${white ? "-white" : ""}.svg`;
