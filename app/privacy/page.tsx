import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PrivacyContent } from "@/components/legal/PrivacyContent";
import { legalMeta } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de RDV : données collectées, finalités, droits des utilisateurs et contact.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt={legalMeta.lastUpdated}>
      <PrivacyContent />
    </LegalPage>
  );
}
