"use client";

import Script from "next/script";

/**
 * Floating SSPM / Superhuman avatar chat bubble.
 *
 * Renders a floating bubble; opening it starts the SSPM-powered lipsync
 * avatar for ~one minute, then falls back to free unlimited chat.
 *
 * NOTE: the SSPM tenant must have enough avatar minutes in its monthly pool
 * or the avatar taster never starts.
 */
export function SuperhumanWidget() {
  return (
    <Script
      src="https://savant-ai-production.up.railway.app/sdk/superhuman-widget.js?v=6"
      strategy="afterInteractive"
      data-tenant="f9c4f00cfec94f028f47b10d1c6d152f"
      data-mode="free-tier"
      data-persona="default"
      data-theme="sspm"
      data-contact="https://sspmconsultants.com/contact"
      data-label="Talk to our expert"
      data-color="#007ace"
      data-api="https://savant-ai-production.up.railway.app"
    />
  );
}
