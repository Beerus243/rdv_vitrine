import { getAbsoluteUrl, siteConfig } from "@/lib/site";

export const legalMeta = {
  lastUpdated: "11 juillet 2026",
  contactEmail: siteConfig.contactEmail,
  appName: siteConfig.name,
  jurisdiction: "République Démocratique du Congo",
} as const;

/** URLs à charger dans un WebView Flutter (sans header/footer du site). */
export const flutterWebviewUrls = Object.fromEntries(
  siteConfig.legal.map((item) => [
    item.href === "/terms" ? "terms" : "privacy",
    getAbsoluteUrl(item.webviewHref),
  ]),
) as { terms: string; privacy: string };
