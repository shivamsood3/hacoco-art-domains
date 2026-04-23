import { defaultDomain, getSiteConfigByDomain } from "./site-config";

type HeaderStore = {
  get(name: string): string | null;
};

export function normalizeHostname(host: string | null | undefined) {
  if (!host) {
    return defaultDomain;
  }

  return host.toLowerCase().replace(/:\d+$/, "");
}

export function getSiteConfigFromHeaders(headerStore: HeaderStore) {
  const forwardedHost = headerStore.get("x-site-hostname");
  const host = normalizeHostname(forwardedHost ?? headerStore.get("host"));

  return getSiteConfigByDomain(host);
}
