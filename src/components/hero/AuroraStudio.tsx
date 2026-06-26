"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

// Option B — "Aurora Studio": warm animated mesh behind a Z-axis cascade of
// floating product cards (website · dashboard · mobile app) that parallax-tilt
// toward the pointer. Says "we build digital products" without a single asset.

const EASE = [0.32, 0.72, 0, 1] as const;

function Bezel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.6rem] border border-white/60 bg-white/55 p-1.5 shadow-[0_30px_60px_-30px_rgba(51,38,28,0.45)] backdrop-blur-md ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-[1.25rem] bg-warm-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
        {children}
      </div>
    </div>
  );
}

function Card({
  px,
  py,
  depth,
  float,
  className,
  children,
}: {
  px: MotionValue<number>;
  py: MotionValue<number>;
  depth: number;
  float: { d: number; delay: number };
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const rotateY = useTransform(px, [-0.5, 0.5], [depth * 9, depth * -9]);
  const rotateX = useTransform(py, [-0.5, 0.5], [depth * -9, depth * 9]);
  const tx = useTransform(px, [-0.5, 0.5], [depth * -22, depth * 22]);
  const ty = useTransform(py, [-0.5, 0.5], [depth * -16, depth * 16]);

  return (
    <motion.div
      className={`absolute ${className ?? ""}`}
      style={reduce ? undefined : { x: tx, y: ty, rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -float.d, 0] }}
        transition={{ duration: 5 + float.delay, ease: "easeInOut", repeat: Infinity, delay: float.delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function AuroraStudio() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 120, damping: 20 });
  const py = useSpring(rawY, { stiffness: 120, damping: 20 });

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      ref={ref}
      onPointerMove={reduce ? undefined : onMove}
      onPointerLeave={reduce ? undefined : onLeave}
      className="relative mx-auto aspect-square w-full max-w-[460px] [perspective:1400px]"
    >
      {/* Aurora mesh */}
      <motion.div
        aria-hidden
        className="absolute left-[6%] top-[8%] h-44 w-44 rounded-full bg-terracotta/35 blur-3xl"
        animate={reduce ? undefined : { x: [0, 26, 0], y: [0, 18, 0] }}
        transition={{ duration: 13, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[4%] top-[28%] h-48 w-48 rounded-full bg-amber/35 blur-3xl"
        animate={reduce ? undefined : { x: [0, -24, 0], y: [0, 22, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[6%] left-[26%] h-40 w-40 rounded-full bg-sage/35 blur-3xl"
        animate={reduce ? undefined : { x: [0, 20, 0], y: [0, -18, 0] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Browser / website — anchor card */}
      <Card px={px} py={py} depth={0.5} float={{ d: 10, delay: 0 }} className="left-1/2 top-1/2 w-[74%] -translate-x-1/2 -translate-y-1/2">
        <Bezel>
          <div className="flex items-center gap-1.5 border-b border-espresso/5 bg-sand/60 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-terracotta/60" />
            <span className="h-2 w-2 rounded-full bg-amber/70" />
            <span className="h-2 w-2 rounded-full bg-sage/60" />
            <span className="ml-2 h-3 flex-1 rounded-full bg-espresso/5" />
          </div>
          <div className="space-y-2.5 p-4">
            <div className="h-16 rounded-xl bg-gradient-to-br from-terracotta to-amber" />
            <div className="h-2.5 w-3/4 rounded-full bg-espresso/10" />
            <div className="h-2.5 w-1/2 rounded-full bg-espresso/10" />
            <div className="mt-3 flex gap-2">
              <span className="h-6 w-20 rounded-full bg-terracotta" />
              <span className="h-6 w-14 rounded-full border border-espresso/15" />
            </div>
          </div>
        </Bezel>
      </Card>

      {/* Analytics / POS-ERP */}
      <Card px={px} py={py} depth={1.1} float={{ d: 16, delay: 0.8 }} className="right-0 top-[4%] w-[46%] rotate-[4deg]">
        <Bezel>
          <div className="p-3.5">
            <p className="text-[10px] font-medium text-cocoa">Penjualan hari ini</p>
            <p className="mt-0.5 font-display text-lg font-semibold text-espresso">Rp 4,85jt</p>
            <div className="mt-3 flex h-12 items-end gap-1.5">
              {[42, 64, 50, 78, 92, 70].map((h, i) => (
                <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-terracotta to-amber" style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="mt-2 text-[10px] font-semibold text-sage">▲ 12% vs kemarin</p>
          </div>
        </Bezel>
      </Card>

      {/* Mobile app */}
      <Card px={px} py={py} depth={1.4} float={{ d: 13, delay: 1.6 }} className="bottom-[2%] left-0 w-[34%] -rotate-[6deg]">
        <Bezel className="rounded-[1.8rem]">
          <div className="rounded-[1.45rem] bg-espresso p-2.5">
            <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-cream/30" />
            <div className="rounded-xl bg-cream p-2.5">
              <div className="h-8 rounded-lg bg-gradient-to-br from-terracotta to-amber" />
              <div className="mt-2 space-y-1.5">
                <div className="h-2 w-full rounded-full bg-espresso/10" />
                <div className="h-2 w-2/3 rounded-full bg-espresso/10" />
              </div>
              <div className="mt-2.5 h-6 rounded-full bg-terracotta" />
            </div>
          </div>
        </Bezel>
      </Card>

      {/* Floating accent chips */}
      <motion.span
        className="absolute right-[10%] top-[2%] rounded-full border border-terracotta/20 bg-warm-white/90 px-3 py-1 text-[11px] font-semibold text-terracotta shadow-sm backdrop-blur-sm"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
      >
        AI Chatbot
      </motion.span>
      <motion.span
        className="absolute bottom-[12%] right-[6%] rounded-full border border-sage/30 bg-warm-white/90 px-3 py-1 text-[11px] font-semibold text-sage shadow-sm backdrop-blur-sm"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
      >
        QRIS · Crypto
      </motion.span>
    </div>
  );
}

export default AuroraStudio;
