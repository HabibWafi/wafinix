"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { Globe, ShoppingCart, BarChart3, MessageSquare, Smartphone, Cpu } from "lucide-react";

// Option C — "Orbital Phoenix": the brand mark at the centre of a slowly
// orbiting system of service nodes. SVG/CSS only → razor-sharp at any size and
// effortless on mobile. Conveys "the phoenix at the heart of every service".

const ORBITS = [
  {
    size: 70, // % of stage
    dur: 34,
    reverse: false,
    nodes: [
      { icon: Globe, at: 12 },
      { icon: ShoppingCart, at: 58 },
      { icon: MessageSquare, at: 84 },
    ],
  },
  {
    size: 104,
    dur: 52,
    reverse: true,
    nodes: [
      { icon: BarChart3, at: 30 },
      { icon: Smartphone, at: 66 },
      { icon: Cpu, at: 92 },
    ],
  },
];

function Node({ icon: Icon }: { icon: typeof Globe }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-terracotta/15 bg-warm-white/80 text-terracotta shadow-[0_10px_30px_-12px_rgba(200,98,62,0.5)] backdrop-blur-sm">
      <Icon className="h-5 w-5" strokeWidth={1.25} />
    </span>
  );
}

export function OrbitalPhoenix() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute h-3/4 w-3/4 rounded-full bg-amber/25 blur-3xl" aria-hidden />
      <div className="absolute h-1/2 w-1/2 rounded-full bg-terracotta/20 blur-2xl" aria-hidden />

      {/* Orbit rings + nodes */}
      {ORBITS.map((orbit, oi) => {
        const anim = reduce
          ? undefined
          : `wfxspin ${orbit.dur}s linear infinite${orbit.reverse ? " reverse" : ""}`;
        const counter = reduce
          ? undefined
          : `wfxspin ${orbit.dur}s linear infinite${orbit.reverse ? "" : " reverse"}`;
        return (
          <div
            key={oi}
            className="absolute rounded-full border border-dashed border-cocoa/15"
            style={{ width: `${orbit.size}%`, height: `${orbit.size}%`, animation: anim }}
            aria-hidden
          >
            {orbit.nodes.map((n, ni) => (
              <div
                key={ni}
                className="absolute left-1/2 top-1/2 h-0 w-0"
                style={{ transform: `rotate(${n.at * 3.6}deg) translateY(-${orbit.size / 2}%)` }}
              >
                {/* keep the chip upright while the ring spins */}
                <div
                  className="-translate-x-1/2 -translate-y-1/2"
                  style={{ animation: counter, transform: `rotate(-${n.at * 3.6}deg)` }}
                >
                  <Node icon={n.icon} />
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {/* Centre mark */}
      <div className="relative" style={reduce ? undefined : { animation: "wfxbreathe 5s ease-in-out infinite" }}>
        <Image
          src="/brand/mark.png"
          alt="Wafinix"
          width={264}
          height={245}
          priority
          className="h-auto w-36 drop-shadow-[0_18px_40px_rgba(200,98,62,0.4)] sm:w-44"
        />
      </div>

      <style jsx global>{`
        @keyframes wfxspin {
          to { transform: rotate(360deg); }
        }
        @keyframes wfxbreathe {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.03); }
        }
      `}</style>
    </div>
  );
}

export default OrbitalPhoenix;
