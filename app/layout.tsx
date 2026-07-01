import type { Metadata } from "next";
import { Geist } from "next/font/google";
import logo from "@/assets/icon/icon.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rdv-app.cd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RDV — Rencontrez, connectez, interagissez",
    template: "%s | RDV",
  },
  description:
    "RDV est une plateforme congolaise de rencontres et d'intérêts communs. Téléchargez la bêta Android et rejoignez la liste d'attente.",
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: siteUrl,
    siteName: "RDV",
    title: "RDV — La plateforme congolaise de rencontres",
    description:
      "RDV vous connecte à des gens partageant vos centres d'intérêt en RDC.",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: "RDV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RDV — La plateforme congolaise de rencontres",
    description:
      "RDV vous connecte à des gens partageant vos centres d'intérêt en RDC.",
    images: ["/images/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: logo.src, type: "image/png" }],
    apple: [{ url: logo.src, type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="page-shell min-h-full w-full max-w-full overflow-x-clip bg-brand-muted text-default">
        {children}
      </body>
    </html>
  );
}
