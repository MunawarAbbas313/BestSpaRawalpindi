"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GOOGLE_ADS } from "@/lib/site-config";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

type ContactType = "phone" | "whatsapp";

// Works out whether a clicked link is a phone or WhatsApp contact link.
function getContactType(href: string): ContactType | null {
  const h = href.trim().toLowerCase();
  if (h.startsWith("tel:")) return "phone";
  if (
    h.includes("wa.me/") ||
    h.includes("api.whatsapp.com") ||
    h.includes("web.whatsapp.com") ||
    h.startsWith("whatsapp:") ||
    /^(https?:\/\/[^/]*bestsparawalpindi\.com)?\/whatsapp\/?(\?|#|$)/.test(h)
  ) {
    return "whatsapp";
  }
  return null;
}

/**
 * Loads the Google tag (gtag.js) for Google Ads and records a conversion whenever
 * a visitor taps any phone (tel:) or WhatsApp link anywhere on the site.
 * One document-level listener covers every button, so new pages are tracked automatically.
 */
export function GoogleAdsTag() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const type = getContactType(link.getAttribute("href") || "");
      if (!type || typeof window.gtag !== "function") return;

      const sendTo =
        type === "phone" ? GOOGLE_ADS.conversions.phoneClick : GOOGLE_ADS.conversions.whatsappClick;

      window.gtag("event", "conversion", {
        send_to: sendTo,
        value: 1.0,
        currency: "PKR",
        transport_type: "beacon",
      });
      window.gtag("event", type === "phone" ? "phone_click" : "whatsapp_click", {
        link_url: link.href,
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      <Script
        id="google-ads-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS.id}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS.id}');
        `}
      </Script>
    </>
  );
}
