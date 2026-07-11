import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { TermsContent } from "@/components/legal/TermsContent";
import { legalMeta } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Conditions générales d'utilisation de l'application et du site RDV, plateforme congolaise de rencontres.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Conditions d'utilisation" updatedAt={legalMeta.lastUpdated}>
      <TermsContent />
    </LegalPage>
  );
}
