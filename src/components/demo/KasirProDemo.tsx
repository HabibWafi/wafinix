"use client";

import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Boxes,
  BarChart3,
  Users,
  Settings,
  Search,
  Wallet,
  Receipt,
  TrendingUp,
  Plus,
  Bell,
  QrCode,
  Banknote,
  CreditCard,
  Smartphone,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { Rise } from "@/components/demo/kit";

// Modern POS SaaS palette — violet primary on a cool app canvas.
const BG = "#f4f5f9";
const SURFACE = "#ffffff";
const INK = "#1b2030";
const MUTED = "#6b7280";
const VIOLET = "#6d28d9";
const SOFT = "#f1ecfb";
const EMER = "#059669";
const BORDER = "rgba(17,24,39,0.07)";

const nav: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Penjualan" },
  { icon: Package, label: "Produk" },
  { icon: Boxes, label: "Stok" },
  { icon: BarChart3, label: "Laporan" },
  { icon: Users, label: "Pelanggan" },
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

const payments = [
  { icon: QrCode, label: "QRIS", amount: "Rp 2.328.000", pct: 48 },
  { icon: Banknote, label: "Tunai", amount: "Rp 1.309.500", pct: 27 },
  { icon: CreditCard, label: "Kartu", amount: "Rp 727.500", pct: 15 },
  { icon: Smartphone, label: "E-wallet", amount: "Rp 485.000", pct: 10 },
];

const products = [
  { name: "Es Kopi Susu", sold: 84, rev: "Rp 2.100.000", pct: 100 },
  { name: "Croissant", sold: 52, rev: "Rp 1.040.000", pct: 62 },
  { name: "Americano", sold: 47, rev: "Rp 1.175.000", pct: 56 },
  { name: "Red Velvet Slice", sold: 38, rev: "Rp 950.000", pct: 45 },
  { name: "Matcha Latte", sold: 31, rev: "Rp 837.000", pct: 37 },
];

const txns = [
  { inv: "#INV-1042", time: "14:32", items: "3 item", method: "QRIS", total: "Rp 86.000" },
  { inv: "#INV-1041", time: "14:18", items: "1 item", method: "Tunai", total: "Rp 28.000" },
  { inv: "#INV-1040", time: "13:55", items: "5 item", method: "Kartu", total: "Rp 142.000" },
  { inv: "#INV-1039", time: "13:40", items: "2 item", method: "QRIS", total: "Rp 54.000" },
  { inv: "#INV-1038", time: "13:12", items: "4 item", method: "E-wallet", total: "Rp 98.000" },
];

const lowStock = [
  { name: "Susu Full Cream 1L", qty: "3 tersisa" },
  { name: "Sirup Vanila", qty: "2 tersisa" },
  { name: "Cup 16oz", qty: "40 tersisa" },
];

export default function KasirProDemo() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: MUTED }}>
      <DemoBanner />
      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r p-4 lg:flex" style={{ background: SURFACE, borderColor: BORDER }}>
          <div className="mb-6 flex items-center gap-2.5 px-2 py-1.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ background: VIOLET }}>
              <ShoppingCart className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className="font-display text-lg font-semibold" style={{ color: INK }}>KasirPro</span>
          </div>

          <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#9aa0ad" }}>Menu</p>
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <span
                key={n.label}
                className="relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium"
                style={n.active ? { background: SOFT, color: VIOLET } : { color: MUTED }}
              >
                {n.active && <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full" style={{ background: VIOLET }} />}
                <n.icon className="h-5 w-5" strokeWidth={1.75} />
                {n.label}
              </span>
            ))}
          </nav>

          <div className="mt-auto space-y-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white" style={{ background: VIOLET }}>
              <Plus className="h-4 w-4" strokeWidth={2.5} /> Buka Kasir
            </button>
            <div className="flex items-center gap-3 rounded-xl border p-3" style={{ borderColor: BORDER }}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold" style={{ background: SOFT, color: VIOLET }}>WF</span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium" style={{ color: INK }}>Wafi Store</p>
                <p className="truncate text-xs">Kasir · Pusat</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-5 lg:p-8">
          {/* Topbar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl font-semibold" style={{ color: INK }}>Dashboard</h1>
              <p className="text-sm">Senin, 25 Juni 2026 · Ringkasan hari ini</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 rounded-full border bg-white px-3.5 py-2 text-sm sm:flex" style={{ borderColor: BORDER }}>
                <Search className="h-4 w-4 opacity-50" /> <span className="opacity-60">Cari produk…</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white" style={{ background: VIOLET }}>
                <Plus className="h-4 w-4" strokeWidth={2.5} /> Transaksi Baru
              </span>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border bg-white" style={{ borderColor: BORDER }}>
                <Bell className="h-4 w-4" strokeWidth={1.75} />
                <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full" style={{ background: VIOLET }} />
              </span>
            </div>
          </div>

          {/* KPI cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((k, i) => (
              <Rise key={k.label} delay={i * 0.05} y={16}>
                <div className="rounded-2xl border bg-white p-5" style={{ borderColor: BORDER, boxShadow: "0 18px 40px -34px rgba(27,32,48,0.5)" }}>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: SOFT, color: VIOLET }}>
                      <k.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold" style={{ background: "rgba(5,150,105,0.1)", color: EMER }}>
                      <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} /> {k.trend}
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-semibold" style={{ color: INK }}>{k.value}</p>
                  <p className="mt-1 text-sm">{k.label} <span className="opacity-60">· vs kemarin</span></p>
                </div>
              </Rise>
            ))}
          </div>

          {/* Chart + payments */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <Rise className="lg:col-span-2" y={18}>
              <div className="h-full rounded-2xl border bg-white p-6" style={{ borderColor: BORDER }}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="font-semibold" style={{ color: INK }}>Penjualan 7 Hari Terakhir</h2>
                    <p className="mt-1 text-sm">Total minggu ini <span className="font-semibold" style={{ color: INK }}>Rp 28.450.000</span></p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: "rgba(5,150,105,0.1)", color: EMER }}>
                    <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} /> +18% dari minggu lalu
                  </span>
                </div>
                <div className="mt-8 flex h-52 items-end gap-2 sm:gap-4">
                  {chart.map((c, i) => (
                    <div key={c.d} className="group flex h-full flex-1 flex-col items-center justify-end gap-2">
                      <span className="text-[11px] font-semibold opacity-0 transition-opacity group-hover:opacity-100" style={{ color: INK }}>
                        Rp {(c.v * 40).toLocaleString("id-ID")}rb
                      </span>
                      <div
                        className="w-full rounded-t-lg transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-90"
                        style={{
                          height: `${c.v}%`,
                          background: i === 5 ? `linear-gradient(180deg, ${VIOLET}, #8b5cf6)` : `linear-gradient(180deg, #c4b5fd, #ddd6fe)`,
                        }}
                      />
                      <span className="text-xs" style={{ color: i === 5 ? VIOLET : undefined }}>{c.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Rise>

            <Rise delay={0.08} y={18}>
              <div className="h-full rounded-2xl border bg-white p-6" style={{ borderColor: BORDER }}>
                <h2 className="font-semibold" style={{ color: INK }}>Metode Pembayaran</h2>
                <div className="mt-5 space-y-4">
                  {payments.map((p) => (
                    <div key={p.label}>
                      <div className="flex items-center justify-between gap-2 text-sm">
                        <span className="flex items-center gap-2" style={{ color: INK }}>
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: SOFT, color: VIOLET }}>
                            <p.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                          </span>
                          {p.label}
                        </span>
                        <span className="text-xs font-medium">{p.pct}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "#eef0f4" }}>
                        <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg, ${VIOLET}, #a78bfa)` }} />
                      </div>
                      <p className="mt-1 text-xs">{p.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Rise>
          </div>

          {/* Transactions + side column */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <Rise className="lg:col-span-2" y={18}>
              <div className="overflow-hidden rounded-2xl border bg-white" style={{ borderColor: BORDER }}>
                <div className="flex items-center justify-between border-b p-5" style={{ borderColor: BORDER }}>
                  <h2 className="font-semibold" style={{ color: INK }}>Transaksi Terbaru</h2>
                  <span className="text-sm font-semibold" style={{ color: VIOLET }}>Lihat semua</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-xs uppercase tracking-wide" style={{ color: "#9aa0ad" }}>
                      <tr>
                        <th className="px-5 py-3 font-medium">Invoice</th>
                        <th className="px-5 py-3 font-medium">Waktu</th>
                        <th className="px-5 py-3 font-medium">Item</th>
                        <th className="px-5 py-3 font-medium">Metode</th>
                        <th className="px-5 py-3 font-medium">Total</th>
                        <th className="px-5 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {txns.map((t) => (
                        <tr key={t.inv} className="border-t" style={{ borderColor: BORDER }}>
                          <td className="px-5 py-3.5 font-medium" style={{ color: INK }}>{t.inv}</td>
                          <td className="px-5 py-3.5">{t.time}</td>
                          <td className="px-5 py-3.5">{t.items}</td>
                          <td className="px-5 py-3.5">
                            <span className="rounded-md px-2 py-0.5 text-xs font-medium" style={{ background: SOFT, color: VIOLET }}>{t.method}</span>
                          </td>
                          <td className="px-5 py-3.5 font-medium" style={{ color: INK }}>{t.total}</td>
                          <td className="px-5 py-3.5">
                            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: "rgba(5,150,105,0.1)", color: EMER }}>
                              <span className="h-1.5 w-1.5 rounded-full" style={{ background: EMER }} /> Lunas
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Rise>

            <div className="flex flex-col gap-6">
              <Rise delay={0.06} y={18}>
                <div className="rounded-2xl border bg-white p-6" style={{ borderColor: BORDER }}>
                  <h2 className="font-semibold" style={{ color: INK }}>Produk Terlaris</h2>
                  <div className="mt-5 space-y-4">
                    {products.map((p, i) => (
                      <div key={p.name}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2.5 text-sm font-medium" style={{ color: INK }}>
                            <span className="flex h-5 w-5 items-center justify-center rounded-md text-[11px] font-semibold" style={{ background: SOFT, color: VIOLET }}>{i + 1}</span>
                            {p.name}
                          </span>
                          <span className="text-sm font-semibold" style={{ color: INK }}>{p.rev}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="h-1 flex-1 overflow-hidden rounded-full" style={{ background: "#eef0f4" }}>
                            <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: VIOLET }} />
                          </div>
                          <span className="text-xs">{p.sold} terjual</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Rise>

              <Rise delay={0.12} y={18}>
                <div className="rounded-2xl border p-6" style={{ borderColor: "rgba(217,119,6,0.25)", background: "#fffbeb" }}>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" strokeWidth={2} style={{ color: "#d97706" }} />
                    <h2 className="font-semibold" style={{ color: "#92400e" }}>Stok Menipis</h2>
                  </div>
                  <div className="mt-4 space-y-3">
                    {lowStock.map((s) => (
                      <div key={s.name} className="flex items-center justify-between gap-3 text-sm">
                        <span style={{ color: INK }}>{s.name}</span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold" style={{ color: "#b45309" }}>{s.qty}</span>
                      </div>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex text-sm font-semibold" style={{ color: "#b45309" }}>Buat pesanan restok →</span>
                </div>
              </Rise>
            </div>
          </div>

          <p className="mt-10 text-center text-xs" style={{ color: "#9aa0ad" }}>Demo konsep oleh Wafinix</p>
        </main>
      </div>
    </div>
  );
}
