"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a, button") : null;
      if (!target) return;

      const explicitEvent = target.getAttribute("data-analytics-event");
      const href = target instanceof HTMLAnchorElement ? target.getAttribute("href") ?? "" : "";
      const analyticsEvent = explicitEvent
        || (href.includes("lin.ee") ? "line_button_click" : "")
        || (href.startsWith("/contact") ? "free_consultation_start" : "");

      if (!analyticsEvent) return;
      // A plain dataLayer object needs a Tag Manager trigger. This site uses
      // gtag.js directly, so send the event through its supported API.
      // Do not include query strings, form values, or visitor-entered text.
      let linkPath: string | undefined;
      try {
        const destination = new URL(href, window.location.origin);
        if (destination.protocol === "https:" || destination.protocol === "http:") {
          linkPath = destination.origin + destination.pathname;
        }
      } catch { /* A button can have no destination. */ }
      window.gtag?.("event", analyticsEvent, {
        link_url: href ? linkPath : undefined,
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
