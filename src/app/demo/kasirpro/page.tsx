import type { Metadata } from "next";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  Settings,
  Search,
  Wallet,
  Receipt,
  TrendingUp,
  Boxes,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";

export const metadata: Metadata = {
  title: "KasirPro — Demo oleh Wafinix",
  robots: { index: false },
};

const ink = "#1f2433";
const accent = "#6d28d9";

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Penjualan" },
  { icon: Package, label: "Produk" },
  { icon: Boxes, label: "Stok" },
  { icon: BarChart3, label: "Laporan" },
  { icon: Settings, label: "Pengaturan" },
];

const kpis = [
  { icon: Wallet, label: "Penjualan Hari Ini", value: "Rp 4.850.000", trend: "+12%" },
  { icon: Receipt, label: "Transaksi", value: "128", trend: "+8%" },
  { icon: ShoppingCart, label: "Produk Terjual", value: "342", trend: "+5%" },
  { icon: TrendingUp, label: "Laba Kotor", value: "Rp 1.920.000", trend: "+9%" },
];

const chart = [
  { d: "Sen", v: 58 },
  { d: "Sel", v: 72 },
  { d: "Rab", v: 64 },
  { d: "Kam", v: 86 },
  { d: "Jum", v: 92 },
  { d: "Sab", v: 100 },
  { d: "Min", v: 78 },
];

const txns = [
  ["#INV-1042", "14:32", "3 item", "Rp 86.000", "Lunas"],
  ["#INV-1041", "14:18", "1 item", "Rp 28.000", "Lunas"],
  ["#INV-1040", "13:55", "5 item", "Rp 142.000", "Lunas"],
  ["#INV-1039", "13:40", "2 item", "Rp 54.000", "Lunas"],
  ["#INV-1038", "13:12", "4 item", "Rp 98.000", "Lunas"],
];

const products = [
  ["Es Kopi Susu", "84 terjual", "Rp 2.100.000"],
  ["Croissant", "52 terjual", "Rp 1.040.000"],
  ["Americano", "47 terjual", "Rp 1.175.000"],
  ["Red Velvet Slice", "38 terjual", "Rp 950.000"],
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f5f6f9] text-[#5b6172]">
      <DemoBanner />
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 flex-col gap-1 border-r border-black/5 bg-white p-4 lg:flex">
          <div className="mb-5 flex items-center gap-2 px-2 py-2">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
              style={{ background: accent }}
            >
              <ShoppingCart className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold" style={{ color: ink }}>
              KasirPro
            </span>
          </div>
          {nav.map((n) => (
            <span
              key={n.label}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium"
              style={
                n.active
                  ? { background: "#f1ecfb", color: accent }
                  : { color: "#5b6172" }
              }
            >
              <n.icon className="h-4.5 w-4.5" />
              {n.label}
            </span>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 p-5 lg:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl font-semibold" style={{ color: ink }}>
                Dashboard
              </h1>
              <p className="text-sm">Ringkasan penjualan hari ini</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm sm:flex">
                <Search className="h-4 w-4 opacity-50" />
                Cari produk…
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold" style={{ color: accent }}>
                WF
              </span>
            </div>
          </div>

          {/* KPI cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-2xl border border-black/5 bg-white p-5">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ background: "#f1ecfb", color: accent }}
                  >
                    <k.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                    {k.trend}
                  </span>
                </div>
                <p className="mt-4 text-2xl font-semibold" style={{ color: ink }}>
                  {k.value}
                </p>
                <p className="mt-1 text-sm">{k.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* Chart */}
            <div className="rounded-2xl border border-black/5 bg-white p-6 lg:col-span-2">
              <h2 className="font-semibold" style={{ color: ink }}>
                Penjualan 7 Hari Terakhir
              </h2>
              <div className="mt-6 flex h-48 items-end gap-3">
                {chart.map((c) => (
                  <div key={c.d} className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full items-end" style={{ height: "100%" }}>
                      <div
                        className="w-full rounded-t-lg"
                        style={{
                          height: `${c.v}%`,
                          background: `linear-gradient(180deg, ${accent}, #a78bfa)`,
                        }}
                      />
                    </div>
                    <span className="text-xs">{c.d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top products */}
            <div className="rounded-2xl border border-black/5 bg-white p-6">
              <h2 className="font-semibold" style={{ color: ink }}>
                Produk Terlaris
              </h2>
              <div className="mt-4 space-y-4">
                {products.map(([name, sold, rev]) => (
                  <div key={name} className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium" style={{ color: ink }}>
                        {name}
                      </p>
                      <p className="text-xs">{sold}</p>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: ink }}>
                      {rev}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/5 bg-white">
            <div className="border-b border-black/5 p-5">
              <h2 className="font-semibold" style={{ color: ink }}>
                Transaksi Terbaru
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase tracking-wide text-[#9aa0ad]">
                  <tr>
                    <th className="px-5 py-3 font-medium">Invoice</th>
                    <th className="px-5 py-3 font-medium">Waktu</th>
                    <th className="px-5 py-3 font-medium">Item</th>
                    <th className="px-5 py-3 font-medium">Total</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {txns.map((t) => (
                    <tr key={t[0]} className="border-t border-black/5">
                      <td className="px-5 py-3 font-medium" style={{ color: ink }}>
                        {t[0]}
                      </td>
                      <td className="px-5 py-3">{t[1]}</td>
                      <td className="px-5 py-3">{t[2]}</td>
                      <td className="px-5 py-3 font-medium" style={{ color: ink }}>
                        {t[3]}
                      </td>
                      <td className="px-5 py-3">
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                          {t[4]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-[#9aa0ad]">
            Demo konsep oleh Wafinix
          </p>
        </main>
      </div>
    </div>
  );
}
