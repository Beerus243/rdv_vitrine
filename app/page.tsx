import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Download from "@/components/Download";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rdv-app.cd";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RDV",
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "Android",
  description:
    "Plateforme congolaise de rencontres et d'intérêts communs.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: siteUrl,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Download />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
