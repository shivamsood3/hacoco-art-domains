"use client";

import { useMemo, useState } from "react";

import { trackEvent } from "@/lib/analytics";
import type { LeadField, SiteConfig } from "@/lib/site-config";

type LeadFormProps = {
  site: SiteConfig;
  className?: string;
  compact?: boolean;
};

type SubmitState = "idle" | "loading" | "success" | "error";

type FormValues = Record<string, string>;

export function LeadForm({ site, className = "", compact = false }: LeadFormProps) {
  const initialValues = useMemo<FormValues>(
    () =>
      Object.fromEntries(site.form.fields.map((field) => [field.name, ""])),
    [site.form.fields],
  );

  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    trackEvent("form_submit", {
      domain: site.primaryDomain,
      leadTag: site.form.leadTag,
    });

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        domain: site.primaryDomain,
        leadTag: site.form.leadTag,
        ...values,
      }),
    });

    const result = (await response.json()) as { ok: boolean; message: string };

    if (!response.ok || !result.ok) {
      setStatus("error");
      setMessage(
        result.message || "We could not submit your request. Please try again.",
      );
      return;
    }

    setStatus("success");
    setMessage(result.message);
    setValues(initialValues);
    trackEvent("conversion", {
      domain: site.primaryDomain,
      leadTag: site.form.leadTag,
    });
  }

  return (
    <div className={`glass-panel rounded-[2rem] p-6 md:p-8 ${className}`}>
      <div className="mb-6">
        <p className="gold-label text-[11px]">{site.form.eyebrow}</p>
        <h3 className="font-display mt-3 text-3xl leading-none text-white md:text-4xl">
          {site.form.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 md:text-base">
          {site.form.description}
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-[1.6rem] border border-[var(--color-line-soft)] bg-[rgba(182,155,99,0.08)] p-6">
          <p className="gold-label text-[11px]">{site.success.eyebrow}</p>
          <h4 className="font-display mt-3 text-3xl text-white">
            {site.success.title}
          </h4>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/72 md:text-base">
            {message}
          </p>
        </div>
      ) : (
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          {site.form.fields.map((field) => (
            <Field
              key={field.name}
              compact={compact}
              field={field}
              value={values[field.name] ?? ""}
              onChange={(value) =>
                setValues((current) => ({
                  ...current,
                  [field.name]: value,
                }))
              }
            />
          ))}

          <div className="md:col-span-2">
            <button
              className="w-full rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold tracking-[0.18em] text-black uppercase hover:translate-y-[-1px] hover:bg-[var(--color-gold-soft)] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "loading"}
              type="submit"
            >
              {status === "loading" ? "Submitting" : site.form.submitLabel}
            </button>
          </div>

          {status === "error" ? (
            <p className="md:col-span-2 text-sm text-[#f0b7aa]">{message}</p>
          ) : null}

          <p className="md:col-span-2 text-xs leading-5 text-white/48">
            By submitting, you agree to be contacted by the Hacoco team regarding
            your stated art acquisition interests.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  field,
  value,
  onChange,
  compact,
}: {
  field: LeadField;
  value: string;
  onChange: (value: string) => void;
  compact: boolean;
}) {
  const wrapperClass =
    field.type === "textarea" || field.fullWidth
      ? "md:col-span-2"
      : compact
        ? "md:col-span-2"
        : "";
  const baseClass =
    "w-full rounded-[1.2rem] border border-white/10 bg-white/4 px-4 py-3 text-sm text-white outline-none placeholder:text-white/32 focus:border-[var(--color-gold)] focus:bg-white/6";

  if (field.type === "select") {
    return (
      <label className={`block ${wrapperClass}`}>
        <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/48">
          {field.label}
        </span>
        <select
          className={baseClass}
          name={field.name}
          required={field.required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="">{field.placeholder ?? `Select ${field.label}`}</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <label className={`block ${wrapperClass}`}>
        <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/48">
          {field.label}
        </span>
        <textarea
          className={`${baseClass} min-h-32 resize-y`}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    );
  }

  return (
    <label className={`block ${wrapperClass}`}>
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/48">
        {field.label}
      </span>
      <input
        className={baseClass}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        type={field.type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
