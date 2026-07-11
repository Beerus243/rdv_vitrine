import {
  getApkDownloadName,
  getDownloadHref,
  getDownloadNote,
  isDownloadExternal,
  landingConfig,
} from "@/lib/landing-config";
import Reveal from "@/components/Reveal";

export default function Download() {
  const { download } = landingConfig;
  const href = getDownloadHref();
  const external = isDownloadExternal();
  const fileName = getApkDownloadName();
  const useStaticDownload = !external && href.startsWith("/") && !href.startsWith("/api/");

  return (
    <section id={download.sectionId} className="section-muted section-block">
      <div className="section-container mx-auto max-w-3xl text-center">
        <Reveal className="section-header">
          <p className="badge-brand mb-3">{download.badge}</p>
          <h2 className="section-title">{download.title}</h2>
          <p className="section-lead">{download.description}</p>
        </Reveal>
        <Reveal delay={120} className="download-card mt-6 sm:mt-8">
          <a
            href={href}
            className="btn-primary btn-pulse w-full sm:w-auto"
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : useStaticDownload
                ? { download: fileName }
                : {})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a2.25 2.25 0 0 0 2.25 2.25h12a2.25 2.25 0 0 0 2.25-2.25V16.5a.75.75 0 0 1 1.5 0v2.25a3.75 3.75 0 0 1-3.75 3.75h-12A3.75 3.75 0 0 1 3.75 18.75V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            {download.button.label}
          </a>
          <p className="mt-4 max-w-md text-sm text-subtle">{getDownloadNote()}</p>
          <p className="mt-2 max-w-md text-xs text-subtle">
            Le fichier fait environ 90 Mo — le téléchargement peut prendre
            quelques secondes selon votre connexion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
