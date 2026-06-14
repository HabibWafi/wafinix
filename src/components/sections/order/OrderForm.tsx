"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";

export interface OrderPackage {
  slug: string;
  name: string;
  price: string;
}

export function OrderForm({
  packages,
  whatsappNumber,
  initialPackage,
}: {
  packages: OrderPackage[];
  whatsappNumber: string;
  initialPackage: string;
}) {
  const t = useTranslations("order");

  const schema = z.object({
    packageSlug: z.string().min(1, t("errRequired")),
    name: z.string().min(1, t("errRequired")),
    email: z.string().email(t("errEmail")),
    whatsapp: z.string().min(8, t("errWhatsapp")),
    company: z.string().optional(),
    brief: z.string().min(10, t("errBrief")),
    budget: z.string().optional(),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    trigger,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      packageSlug: packages.some((p) => p.slug === initialPackage)
        ? initialPackage
        : packages[0]?.slug ?? "",
      name: "",
      email: "",
      whatsapp: "",
      company: "",
      brief: "",
      budget: "",
    },
  });

  const [step, setStep] = useState(0);
  const total = 3;
  const stepFields: (keyof FormData)[][] = [
    ["packageSlug"],
    ["name", "email", "whatsapp"],
    ["brief"],
  ];
  const selected = watch("packageSlug");

  async function next() {
    const ok = await trigger(stepFields[step]);
    if (ok) setStep((s) => Math.min(total - 1, s + 1));
  }

  function onValid(data: FormData) {
    const pkg = packages.find((p) => p.slug === data.packageSlug);
    const lines = [
      t("waGreeting"),
      "",
      `${t("waPackage")}: ${pkg ? `${pkg.name} (${pkg.price})` : data.packageSlug}`,
      `${t("waName")}: ${data.name}`,
      `${t("waEmail")}: ${data.email}`,
      `${t("waWhatsapp")}: ${data.whatsapp}`,
      data.company ? `${t("waCompany")}: ${data.company}` : null,
      `${t("waBrief")}: ${data.brief}`,
      data.budget ? `${t("waBudget")}: ${data.budget}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const input =
    "w-full rounded-2xl border border-cocoa/15 bg-warm-white px-4 py-3 text-espresso outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20";
  const titles = [t("step1"), t("step2"), t("step3")];

  return (
    <div className="mx-auto max-w-2xl">
      {/* Stepper */}
      <div className="flex items-center gap-2">
        {titles.map((title, i) => (
          <div key={title} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                i < step
                  ? "bg-sage text-warm-white"
                  : i === step
                    ? "bg-terracotta text-warm-white"
                    : "bg-sand text-cocoa/50"
              }`}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span
              className={`hidden text-sm font-medium sm:inline ${
                i === step ? "text-espresso" : "text-cocoa/50"
              }`}
            >
              {title}
            </span>
            {i < titles.length - 1 && (
              <span className="h-px flex-1 bg-cocoa/15" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-cocoa/60">
        {t("stepLabel", { current: step + 1, total })}
      </p>

      <form onSubmit={handleSubmit(onValid)} className="mt-6">
        {/* Step 1: package */}
        {step === 0 && (
          <div>
            <p className="mb-3 font-medium text-espresso">{t("packageLabel")}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {packages.map((p) => (
                <button
                  type="button"
                  key={p.slug}
                  onClick={() => setValue("packageSlug", p.slug)}
                  className={`rounded-2xl border p-4 text-left transition active:scale-[0.99] ${
                    selected === p.slug
                      ? "border-terracotta bg-terracotta/5 ring-2 ring-terracotta/20"
                      : "border-cocoa/15 bg-warm-white hover:border-terracotta/40"
                  }`}
                >
                  <span className="font-semibold text-espresso">{p.name}</span>
                  <span className="mt-1 block text-sm text-terracotta">
                    {p.price}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: contact */}
        {step === 1 && (
          <div className="grid gap-4">
            <Field label={t("nameLabel")} error={errors.name?.message}>
              <input className={input} {...register("name")} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("emailLabel")} error={errors.email?.message}>
                <input className={input} type="email" {...register("email")} />
              </Field>
              <Field label={t("whatsappLabel")} error={errors.whatsapp?.message}>
                <input className={input} inputMode="tel" {...register("whatsapp")} />
              </Field>
            </div>
            <Field label={t("companyLabel")}>
              <input className={input} {...register("company")} />
            </Field>
          </div>
        )}

        {/* Step 3: brief */}
        {step === 2 && (
          <div className="grid gap-4">
            <Field label={t("briefLabel")} error={errors.brief?.message}>
              <textarea
                rows={5}
                className={input}
                placeholder={t("briefPlaceholder")}
                {...register("brief")}
              />
            </Field>
            <Field label={t("budgetLabel")}>
              <input className={input} {...register("budget")} />
            </Field>
            <p className="text-sm text-cocoa/60">{t("note")}</p>
          </div>
        )}

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex items-center gap-2 rounded-full border border-cocoa/20 px-5 py-3 font-semibold text-espresso transition hover:border-terracotta hover:text-terracotta active:scale-[0.97]"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("back")}
            </button>
          ) : (
            <span />
          )}

          {step < total - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3 font-semibold text-warm-white shadow-md transition hover:bg-terracotta-light active:scale-[0.97]"
            >
              {t("next")}
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3 font-semibold text-warm-white shadow-md transition hover:bg-terracotta-light active:scale-[0.97]"
            >
              <MessageCircle className="h-4 w-4" />
              {t("submit")}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-espresso">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-sm text-terracotta">{error}</span>}
    </label>
  );
}
