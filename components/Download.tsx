import {
  getDownloadHref,
  getDownloadNote,
  isDownloadExternal,
  landingConfig,
} from "@/lib/landing-config";

export default function Download() {
  const { download } = landingConfig;
  const href = getDownloadHref();
  const external = isDownloadExternal();

  return (
    <section id={download.sectionId} className="section-muted section-block">
      <div className="section-container mx-auto max-w-3xl text-center">
        <div className="section-header">
          <p className="badge-brand mb-3">{download.badge}</p>
          <h2 className="section-title">{download.title}</h2>
          <p className="section-lead">{download.description}</p>
        </div>
        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
          <a
            href={href}
            className="btn-primary w-full sm:w-auto"
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : { download: !href.startsWith("/api/") ? "" : undefined })}
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
          <p className="max-w-md text-sm text-subtle">{getDownloadNote()}</p>
        </div>
      </div>
    </section>
  );
}
