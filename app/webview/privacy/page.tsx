import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PrivacyContent } from "@/components/legal/PrivacyContent";
import { legalMeta } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: false },
};

export default function WebviewPrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      updatedAt={legalMeta.lastUpdated}
      embedded
    >
      <PrivacyContent />
    </LegalPage>
  );
}
