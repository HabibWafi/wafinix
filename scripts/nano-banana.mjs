#!/usr/bin/env node
/**
 * nano-banana.mjs — bridge for the nano-banana (Gemini image) skills.
 * Generates or edits an image via Google AI Studio's Gemini image model and
 * saves it to disk. The installed nano-banana skills construct the prompt;
 * this script performs the actual generation.
 *
 * Reads NANO_BANANA_API_KEY (or GEMINI_API_KEY / GOOGLE_API_KEY) from .env.local.
 *
 * Usage:
 *   node scripts/nano-banana.mjs --prompt "..." [--image in.png] [--out out.png] [--model gemini-2.5-flash-image]
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, extname } from "node:path";

function loadEnvLocal() {
  const p = resolve(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}
loadEnvLocal();

function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
}

const apiKey =
  process.env.NANO_BANANA_API_KEY ||
  process.env.GEMINI_API_KEY ||
  process.env.GOOGLE_API_KEY;
if (!apiKey) {
  console.error("Missing NANO_BANANA_API_KEY (set it in .env.local).");
  process.exit(1);
}

const prompt = arg("prompt");
if (!prompt) {
  console.error('Missing --prompt "..."');
  process.exit(1);
}
const model = arg("model", "gemini-2.5-flash-image");
const out = arg("out", `nano-banana-${Date.now()}.png`);
const imagePath = arg("image");

const parts = [{ text: prompt }];
if (imagePath) {
  if (!existsSync(imagePath)) {
    console.error(`Input image not found: ${imagePath}`);
    process.exit(1);
  }
  const ext = extname(imagePath).toLowerCase();
  const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  parts.push({
    inlineData: { mimeType: mime, data: readFileSync(imagePath).toString("base64") },
  });
}

const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
  body: JSON.stringify({ contents: [{ parts }] }),
});

if (!res.ok) {
  const body = await res.text();
  console.error(`API error ${res.status}: ${body.slice(0, 800)}`);
  process.exit(1);
}

const data = await res.json();
const outParts = data?.candidates?.[0]?.content?.parts ?? [];
for (const p of outParts) {
  if (p.inlineData?.data) {
    writeFileSync(out, Buffer.from(p.inlineData.data, "base64"));
    console.log(`OK: saved image -> ${out}`);
    process.exit(0);
  }
}

const txt = outParts.map((p) => p.text).filter(Boolean).join("\n");
console.error("No image in response. Model returned:\n" + (txt || JSON.stringify(data).slice(0, 800)));
process.exit(2);
