import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { TermsContent } from "@/components/legal/TermsContent";
import { legalMeta } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  robots: { index: false, follow: false },
};

export default function WebviewTermsPage() {
  return (
    <LegalPage
      title="Conditions d'utilisation"
      updatedAt={legalMeta.lastUpdated}
      embedded
    >
      <TermsContent />
    </LegalPage>
  );
}
