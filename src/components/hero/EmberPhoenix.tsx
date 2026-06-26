"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// Option A — "Ember Phoenix": a canvas particle field that samples the real
// Wafinix mark (public/brand/mark.png) and reassembles it from glowing embers.
// On first load the embers burst out from the centre and swirl back into the
// phoenix; afterwards they breathe and scatter away from the cursor.
//
// Init is self-healing: the animation loop keeps trying to build itself every
// frame until BOTH the image and the layout are ready, so it never depends on
// the order in which onload / ResizeObserver / hydration happen.

type P = { x: number; y: number; tx: number; ty: number; vx: number; vy: number; c: string; s: number; ph: number };

const INTRO_MS = 2200;

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
    let targets: { x: number; y: number; c: string }[] = [];
    let spawned = false;
    let imgReady = false;
    let introStart = 0;
    const pointer = { x: -9999, y: -9999, active: false };
    let t = 0;

    const img = new Image();

    function computeTargets() {
      if (!imgReady || W === 0) return;
      const aspect = img.naturalWidth / img.naturalHeight;
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
      octx.drawImage(img, 0, 0, sw, sh);
      const data = octx.getImageData(0, 0, sw, sh).data;

      const gap = W < 640 ? 6 : 4;
      const pts: { x: number; y: number; c: string }[] = [];
      for (let y = 0; y < sh; y += gap) {
        for (let x = 0; x < sw; x += gap) {
          const i = (y * sw + x) * 4;
          if (data[i + 3] > 130) {
            pts.push({ x: ox + x, y: oy + y, c: `rgba(${data[i]},${data[i + 1]},${data[i + 2]},0.92)` });
          }
        }
      }
      targets = pts;
    }

    function spawn() {
      const cx = W / 2;
      const cy = H / 2;
      particles = targets.map((tg) => {
        const ang = Math.random() * Math.PI * 2;
        const spd = 4 + Math.random() * 11;
        return {
          x: cx + (Math.random() - 0.5) * 50,
          y: cy + (Math.random() - 0.5) * 50,
          tx: tg.x,
          ty: tg.y,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          c: tg.c,
          s: Math.random() * 1.1 + 0.9,
          ph: Math.random() * Math.PI * 2,
        };
      });
      introStart = performance.now();
      spawned = true;
    }

    function maybeInit() {
      if (spawned || !imgReady || W === 0) return;
      computeTargets();
      if (targets.length) spawn();
    }

    function refit() {
      // Re-fit an existing formation to a new size without re-bursting.
      computeTargets();
      if (particles.length === targets.length) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].tx = targets[i].x;
          particles[i].ty = targets[i].y;
          particles[i].c = targets[i].c;
        }
      } else {
        spawn();
      }
    }

    function sizeCanvas() {
      const rect = wrap!.getBoundingClientRect();
      const nw = Math.round(rect.width);
      const nh = Math.round(rect.height);
      if (nw === W && nh === H) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = nw;
      H = nh;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (spawned) refit();
      else maybeInit();
      if (reduce) drawStatic();
    }

    function drawStatic() {
      if (!imgReady || W === 0) return;
      ctx!.clearRect(0, 0, W, H);
      const aspect = img.naturalWidth / img.naturalHeight;
      const boxW = Math.min(W * 0.7, H * 0.7 * aspect);
      const boxH = boxW / aspect;
      ctx!.drawImage(img, (W - boxW) / 2, (H - boxH) / 2, boxW, boxH);
    }

    function frame() {
      if (!spawned) {
        maybeInit();
        if (!spawned) {
          raf = requestAnimationFrame(frame);
          return;
        }
      }

      t += 0.016;
      const intro = Math.min(1, (performance.now() - introStart) / INTRO_MS);
      const pull = 0.006 + Math.pow(intro, 1.6) * 0.02;
      const cx = W / 2;
      const cy = H / 2;
      const sizeBoost = 1 + (1 - intro) * 0.7;

      ctx!.clearRect(0, 0, W, H);
      ctx!.globalCompositeOperation = "lighter";

      for (const p of particles) {
        const wobble = intro * 2.2;
        const ax = p.tx + Math.sin(t * 0.8 + p.ph) * wobble;
        const ay = p.ty + Math.cos(t * 0.7 + p.ph) * wobble;
        p.vx += (ax - p.x) * pull;
        p.vy += (ay - p.y) * pull;

        if (intro < 1) {
          const dx = p.x - cx;
          const dy = p.y - cy;
          const sw = (1 - intro) * 0.006;
          p.vx += -dy * sw;
          p.vy += dx * sw;
        }

        if (pointer.active && intro > 0.6) {
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
        ctx!.arc(p.x, p.y, p.s * sizeBoost, 0, Math.PI * 2);
        ctx!.fill();
      }

      const sparkCount = W < 640 ? 14 : 26;
      for (let i = 0; i < sparkCount; i++) {
        const sx = (Math.sin(i * 12.9 + t * 0.6) * 0.5 + 0.5) * W;
        const sy = H - ((t * 22 + i * 90) % (H + 60)) + 30;
        const a = Math.max(0, 1 - (H - sy) / H) * 0.5 * intro;
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

    const ro = new ResizeObserver(() => sizeCanvas());
    ro.observe(wrap);

    img.onload = () => {
      imgReady = true;
      if (reduce) drawStatic();
    };
    img.src = "/brand/mark.png";
    if (img.complete && img.naturalWidth) imgReady = true;

    sizeCanvas();

    if (reduce) {
      drawStatic();
    } else {
      wrap.addEventListener("pointermove", onPointer);
      wrap.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(frame);
    }

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
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

export default EmberPhoenix;
