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
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");
    setMessage("");

    trackEvent("form_submit", {
      domain: site.primaryDomain,
      leadTag: site.form.leadTag,
    });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domain: site.primaryDomain,
          companyWebsite,
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
      setCompanyWebsite("");
      trackEvent("conversion", {
        domain: site.primaryDomain,
        leadTag: site.form.leadTag,
      });
    } catch {
      setStatus("error");
      setMessage(
        `We could not reach the ${
          site.vertical === "commodities" ? "trade desk" : "property desk"
        }. Please try again or email us directly.`,
      );
    }
  }

  return (
    <div className={`surface-card p-6 md:p-8 ${className}`}>
      <div className="mb-6">
        <p className="eyebrow">{site.form.eyebrow}</p>
        <h3 className="font-display mt-3 text-3xl leading-none text-[var(--textStrong)] md:text-4xl">
          {site.form.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--textMuted)] md:text-base">
          {site.form.description}
        </p>
      </div>

      {status === "success" ? (
        <div className="surface-card-tint p-6" role="status">
          <p className="eyebrow">{site.success.eyebrow}</p>
          <h4 className="font-display mt-3 text-3xl text-[var(--textStrong)]">
            {site.success.title}
          </h4>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--textMuted)] md:text-base">
            {message}
          </p>
        </div>
      ) : (
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <label
            aria-hidden="true"
            className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden"
          >
            Company website
            <input
              autoComplete="off"
              name="companyWebsite"
              tabIndex={-1}
              value={companyWebsite}
              onChange={(event) => setCompanyWebsite(event.target.value)}
            />
          </label>

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
              className="w-full rounded-full bg-[var(--textStrong)] px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white uppercase shadow-[var(--shadowSoft)] hover:translate-y-[-1px] hover:bg-[#312924] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "loading"}
              type="submit"
            >
              {status === "loading" ? "Submitting" : site.form.submitLabel}
            </button>
          </div>

          {status === "error" ? (
            <p className="md:col-span-2 text-sm text-[#a33f32]" role="alert">
              {message}
            </p>
          ) : null}

          <p className="md:col-span-2 text-xs leading-5 text-[var(--textSoft)]">
            By submitting, you agree to be contacted by the Hacoco team regarding
            your stated {site.vertical === "commodities" ? "commodity trade" : "real estate"} interests.
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
    "focus-luxury w-full rounded-[1.2rem] border border-subtle bg-[var(--bgSurface)] px-4 py-3 text-sm text-[var(--textStrong)] outline-none placeholder:text-[var(--textSoft)]";

  if (field.type === "select") {
    return (
      <label className={`block ${wrapperClass}`}>
        <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[var(--textSoft)]">
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
        <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[var(--textSoft)]">
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
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[var(--textSoft)]">
        {field.label}
      </span>
      <input
        autoComplete={getAutocomplete(field.name, field.type)}
        className={baseClass}
        inputMode={field.type === "tel" ? "tel" : undefined}
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

function getAutocomplete(name: string, type: LeadField["type"]) {
  if (name === "name") return "name";
  if (name === "email" || type === "email") return "email";
  if (name === "phone" || type === "tel") return "tel";
  return "off";
}
