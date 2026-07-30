"use client";

import { useMemo, useState } from "react";

import { trackEvent } from "@/lib/analytics";
import { capitalFormCopy, type CapitalFormKind } from "@/lib/capital-content";
import type { LeadField, SiteConfig } from "@/lib/site-config";

type SubmitState = "idle" | "loading" | "success" | "error";
type FormValues = Record<string, string>;

export function CapitalForm({
  site,
  kind,
  compact = false,
}: {
  site: SiteConfig;
  kind: CapitalFormKind;
  compact?: boolean;
}) {
  const copy = capitalFormCopy[kind];
  const initialValues = useMemo<FormValues>(
    () => Object.fromEntries(copy.fields.map((field) => [field.name, ""])),
    [copy.fields],
  );

  const [values, setValues] = useState<FormValues>(initialValues);
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    trackEvent("form_submit", {
      domain: site.primaryDomain,
      leadTag: site.form.leadTag,
      leadType: kind,
    });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain: site.primaryDomain,
          companyWebsite,
          leadTag: site.form.leadTag,
          leadType: kind,
          ...values,
        }),
      });

      const result = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setMessage(result.message || "We could not submit your request.");
        return;
      }

      setStatus("success");
      setMessage(copy.successMessage);
      setValues(initialValues);
      setCompanyWebsite("");
      trackEvent("conversion", {
        domain: site.primaryDomain,
        leadTag: site.form.leadTag,
        leadType: kind,
      });
    } catch {
      setStatus("error");
      setMessage("We could not reach the private desk. Please try again or email us directly.");
    }
  }

  return (
    <div className="capital-form-card">
      <div className="capital-form-card__intro">
        <p className="capital-eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
      </div>

      {status === "success" ? (
        <div className="capital-success" role="status">
          <p className="capital-eyebrow">Received</p>
          <h3>{copy.successTitle}</h3>
          <p>{message}</p>
        </div>
      ) : (
        <form className="capital-form" onSubmit={onSubmit}>
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

          {copy.fields.map((field) => (
            <CapitalField
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

          <button className="capital-button capital-button--full" disabled={status === "loading"} type="submit">
            {status === "loading" ? "Submitting" : copy.submitLabel}
          </button>

          {status === "error" ? (
            <p className="capital-form__error" role="alert">
              {message}
            </p>
          ) : null}

          <p className="capital-form__fine">
            This is an initial enquiry only. Hacoco Capital does not provide legal, tax, regulated investment or lending advice. Independent professional review is required before any transaction decision.
          </p>
        </form>
      )}
    </div>
  );
}

function CapitalField({
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
    field.type === "textarea" || field.fullWidth || compact ? "capital-field--wide" : "";

  if (field.type === "select") {
    return (
      <label className={`capital-field ${wrapperClass}`}>
        <span>{field.label}</span>
        <select
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
      <label className={`capital-field ${wrapperClass}`}>
        <span>{field.label}</span>
        <textarea
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
    <label className={`capital-field ${wrapperClass}`}>
      <span>{field.label}</span>
      <input
        autoComplete={getAutocomplete(field.name, field.type)}
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
  if (name === "organisation") return "organization";
  return "off";
}
