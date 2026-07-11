import { landingConfig } from "@/lib/landing-config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rdv-app.cd";

export const siteConfig = {
  name: "RDV",
  tagline: "Plateforme congolaise de rencontres",
  contactEmail: "contact@rdv-app.cd",
  siteUrl,
  nav: [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Aperçu", href: "#screenshots" },
    {
      label: "Télécharger",
      href: `#${landingConfig.download.sectionId}`,
    },
    {
      label: "Liste d'attente",
      href: `#${landingConfig.waitlist.sectionId}`,
      cta: true,
    },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/rdv_congo?igsh=MWo5eWJrZDdpcDNxNw==",
      icon: "instagram" as const,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61591306469758",
      icon: "facebook" as const,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/243991760427",
      icon: "whatsapp" as const,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/rdvapp",
      icon: "x" as const,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@rdv_congo?_r=1&_t=ZS-97VeWGBshgl",
      icon: "tiktok" as const,
    },
  ],
  legal: [
    {
      label: "Conditions d'utilisation",
      href: "/terms",
      webviewHref: "/webview/terms",
    },
    {
      label: "Politique de confidentialité",
      href: "/privacy",
      webviewHref: "/webview/privacy",
    },
  ],
};

export function getAbsoluteUrl(path: string) {
  return `${siteConfig.siteUrl}${path}`;
}

export { landingConfig } from "@/lib/landing-config";
