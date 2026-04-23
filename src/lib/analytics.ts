type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gtag) {
    window.gtag("event", eventName, payload);
  }

  if (window.fbq) {
    const metaEvent =
      eventName === "conversion" ? "Lead" : eventName === "form_submit" ? "SubmitApplication" : "PageView";
    window.fbq("trackCustom", metaEvent, payload);
  }
}
