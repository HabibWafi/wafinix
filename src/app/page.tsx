import { Logo } from "@/components/layout/Logo";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="mb-6 rounded-full bg-sand px-4 py-1.5 text-sm font-medium text-cocoa">
        Tahap 2 — brand & logo siap
      </p>
      <Logo variant="stacked" priority className="h-44 w-auto" />
      <p className="mt-8 max-w-xl text-lg leading-relaxed">
        Website, sistem, dan aplikasi untuk bisnis Anda — dari UMKM sampai
        enterprise. Situs lengkap sedang dibangun.
      </p>
      <div className="mt-8 flex items-center gap-3" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-terracotta" />
        <span className="h-3 w-3 rounded-full bg-amber" />
        <span className="h-3 w-3 rounded-full bg-sage" />
        <span className="h-3 w-3 rounded-full bg-espresso" />
      </div>
    </main>
  );
}
