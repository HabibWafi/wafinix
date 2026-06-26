"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// Option A — "Ember Phoenix": a canvas particle field that samples the real
// Wafinix mark (public/brand/mark.png) and reassembles it from glowing embers,
// with rising sparks and a cursor that scatters the flames. Best on a dark stage.

type P = { x: number; y: number; tx: number; ty: number; vx: number; vy: number; c: string; s: number; ph: number };

export function EmberPhoenix() {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let W = 0;
    let H = 0;
    let dpr = 1;
    let particles: P[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    let t = 0;

    const img = new Image();
    img.src = "/brand/mark.png";

    function buildTargets() {
      // Sample the logo into a grid of target points (position + colour).
      const mark = img;
      if (!mark.complete || !mark.naturalWidth) return;
      const aspect = mark.naturalWidth / mark.naturalHeight;
      const boxW = Math.min(W * 0.78, H * 0.78 * aspect);
      const boxH = boxW / aspect;
      const ox = (W - boxW) / 2;
      const oy = (H - boxH) / 2;

      const off = document.createElement("canvas");
      const sw = Math.round(boxW);
      const sh = Math.round(boxH);
      off.width = sw;
      off.height = sh;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.drawImage(mark, 0, 0, sw, sh);
      const data = octx.getImageData(0, 0, sw, sh).data;

      const mobile = W < 640;
      const gap = mobile ? 6 : 4;
      const targets: { x: number; y: number; c: string }[] = [];
      for (let y = 0; y < sh; y += gap) {
        for (let x = 0; x < sw; x += gap) {
          const i = (y * sw + x) * 4;
          if (data[i + 3] > 130) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            targets.push({ x: ox + x, y: oy + y, c: `rgba(${r},${g},${b},0.92)` });
          }
        }
      }

      particles = targets.map((tg) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        tx: tg.x,
        ty: tg.y,
        vx: 0,
        vy: 0,
        c: tg.c,
        s: Math.random() * 1.1 + 0.9,
        ph: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      const rect = wrap!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildTargets();
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, W, H);
      if (!img.complete || !img.naturalWidth) return;
      const aspect = img.naturalWidth / img.naturalHeight;
      const boxW = Math.min(W * 0.7, H * 0.7 * aspect);
      const boxH = boxW / aspect;
      ctx!.drawImage(img, (W - boxW) / 2, (H - boxH) / 2, boxW, boxH);
    }

    function frame() {
      t += 0.016;
      ctx!.clearRect(0, 0, W, H);
      ctx!.globalCompositeOperation = "lighter";

      for (const p of particles) {
        // gentle idle drift around the target
        const ax = p.tx + Math.sin(t * 0.8 + p.ph) * 2.2;
        const ay = p.ty + Math.cos(t * 0.7 + p.ph) * 2.2;
        p.vx += (ax - p.x) * 0.022;
        p.vy += (ay - p.y) * 0.022;

        // pointer scatters nearby embers
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 13000) {
            const f = (13000 - d2) / 13000;
            const d = Math.sqrt(d2) || 1;
            p.vx += (dx / d) * f * 4.5;
            p.vy += (dy / d) * f * 4.5;
          }
        }

        p.vx *= 0.86;
        p.vy *= 0.86;
        p.x += p.vx;
        p.y += p.vy;

        ctx!.fillStyle = p.c;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx!.fill();
      }

      // rising sparks
      const sparkCount = W < 640 ? 14 : 26;
      for (let i = 0; i < sparkCount; i++) {
        const sx = (Math.sin(i * 12.9 + t * 0.6) * 0.5 + 0.5) * W;
        const sy = H - ((t * 22 + i * 90) % (H + 60)) + 30;
        const a = Math.max(0, 1 - (H - sy) / H) * 0.5;
        ctx!.fillStyle = `rgba(227,165,71,${a})`;
        ctx!.beginPath();
        ctx!.arc(sx, sy, 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(frame);
    }

    function onPointer(e: PointerEvent) {
      const rect = wrap!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    }
    function onLeave() {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(wrap);

    const start = () => {
      resize();
      if (reduce) {
        drawStatic();
      } else {
        wrap.addEventListener("pointermove", onPointer);
        wrap.addEventListener("pointerleave", onLeave);
        raf = requestAnimationFrame(frame);
      }
    };

    if (img.complete) start();
    else img.onload = start;

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener("pointermove", onPointer);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <div ref={wrapRef} className="relative mx-auto aspect-square w-full max-w-[480px]">
      {/* warm core glow behind the embers */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/25 blur-3xl" aria-hidden />
      <canvas ref={canvasRef} className="relative h-full w-full" />
    </div>
  );
}

export default EmberPhoenix;
