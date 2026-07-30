"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { capitalFormCopy, type CapitalFormKind } from "@/lib/capital-content";
import type { SiteConfig } from "@/lib/site-config";

import { CapitalForm } from "./capital-form";

const routes: Array<{
  key: CapitalFormKind;
  query: string;
  title: string;
  copy: string;
}> = [
  {
    key: "deploy",
    query: "capital",
    title: "Deploy Capital",
    copy: "For principals, family offices and advisers with a real estate capital mandate.",
  },
  {
    key: "transaction",
    query: "transaction",
    title: "Discuss A Transaction",
    copy: "For owners, developers and authorised representatives bringing an asset or capital requirement.",
  },
  {
    key: "memorandum",
    query: "memorandum",
    title: "Request Memorandum",
    copy: "For qualified counterparties referencing a private transaction already shared with them.",
  },
];

export function CapitalPrivateDesk({ site }: { site: SiteConfig }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedFromQuery = searchParams.get("route");
  const active = useMemo(
    () => routes.find((route) => route.query === selectedFromQuery)?.key ?? "deploy",
    [selectedFromQuery],
  );

  function selectRoute(route: (typeof routes)[number]) {
    router.replace(`/private-desk?route=${route.query}`, { scroll: false });
  }

  const activeCopy = capitalFormCopy[active];

  return (
    <section className="capital-private-selector" aria-label="Private desk route selection">
      <div className="capital-private-selector__intro">
        <p className="capital-eyebrow">Private Desk</p>
        <h2>Choose how you would like to engage.</h2>
        <p>
          Select one route. The form below will adapt to the conversation you want to begin.
        </p>
      </div>

      <div className="capital-route-tabs" role="tablist" aria-label="Private desk routes">
        {routes.map((route) => {
          const selected = active === route.key;

          return (
            <button
              key={route.key}
              aria-controls={`capital-panel-${route.key}`}
              aria-selected={selected}
              id={`capital-tab-${route.key}`}
              role="tab"
              type="button"
              onClick={() => selectRoute(route)}
            >
              <span>{route.title}</span>
              <small>{route.copy}</small>
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`capital-tab-${active}`}
        className="capital-private-selector__panel"
        id={`capital-panel-${active}`}
        role="tabpanel"
      >
        <div className="capital-private-selector__context">
          <p className="capital-eyebrow">{activeCopy.eyebrow}</p>
          <h3>{activeCopy.title}</h3>
          <p>{activeCopy.description}</p>
          <Link href={active === "deploy" ? "/capital" : active === "transaction" ? "/transactions" : "/private-desk?route=memorandum"}>
            View route context
          </Link>
        </div>
        <CapitalForm site={site} kind={active} />
      </div>
    </section>
  );
}
