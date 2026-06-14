"use server";

import { z } from "zod";
import { tiers } from "@/data/pricing";
import { supabaseAdmin } from "@/lib/supabase/server";

const schema = z.object({
  packageSlug: z.string().min(1),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  whatsapp: z.string().trim().min(8).max(30),
  company: z.string().trim().max(160).optional().default(""),
  brief: z.string().trim().min(10).max(4000),
  budget: z.string().trim().max(120).optional().default(""),
  locale: z.enum(["id", "en"]).default("id"),
});

function genOrderCode(): string {
  const year = new Date().getFullYear();
  const rand = crypto.randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
  return `WFX-${year}-${rand}`;
}

// Creates an order. Price is derived server-side from pricing.ts — never trusted
// from the client. Returns the generated order code.
export async function createOrder(input: unknown): Promise<{ code: string }> {
  const data = schema.parse(input);
  const tier = tiers.find((t) => t.slug === data.packageSlug);
  if (!tier) throw new Error("Invalid package");

  const code = genOrderCode();
  const supabase = supabaseAdmin();
  const { error } = await supabase.from("orders").insert({
    order_code: code,
    locale: data.locale,
    name: data.name,
    email: data.email,
    whatsapp: data.whatsapp,
    company: data.company || null,
    package_slug: tier.slug,
    package_snapshot: {
      name: tier.name,
      priceId: tier.priceId,
      priceEn: tier.priceEn,
    },
    brief: data.brief,
    budget: data.budget || null,
    currency: data.locale === "en" ? "USD" : "IDR",
    status: "pending_payment",
  });
  if (error) throw new Error(error.message);
  return { code };
}
