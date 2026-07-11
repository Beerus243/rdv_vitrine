import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LegalPageProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
  embedded?: boolean;
};

export default function LegalPage({
  title,
  updatedAt,
  children,
  embedded = false,
}: LegalPageProps) {
  const article = (
    <article className={embedded ? "webview-legal" : "section-block section-surface"}>
      <div
        className={`legal-prose mx-auto max-w-3xl ${embedded ? "webview-legal-inner" : "section-container"}`}
      >
        <header
          className={`mb-6 border-b border-default pb-5 text-center sm:mb-8 sm:pb-6 ${embedded ? "webview-legal-header" : "mb-8 pb-6 sm:mb-10 sm:pb-8"}`}
        >
          {!embedded && <p className="badge-brand mb-3">Informations légales</p>}
          <h1 className={embedded ? "webview-legal-title" : "section-title"}>{title}</h1>
          <p className="mt-2 text-sm text-subtle sm:mt-3">
            Dernière mise à jour : {updatedAt}
          </p>
        </header>
        {children}
      </div>
    </article>
  );

  if (embedded) {
    return article;
  }

  return (
    <>
      <Header />
      <main className="page-shell w-full max-w-full">{article}</main>
      <Footer />
    </>
  );
}
