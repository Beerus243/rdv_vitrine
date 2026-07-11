import { SocialIcon } from "@/components/icons";
import Logo from "@/components/Logo";
import { getAbsoluteUrl, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-default bg-brand-muted">
      <div className="section-container py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="text-center sm:text-left">
            <Logo size="lg" className="justify-center sm:justify-start" />
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-subtle sm:mx-0 sm:max-w-none">
              {siteConfig.tagline}. Rencontrez, connectez et interagissez en RDC.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-default">
              Liens utiles
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav
                .filter((item) => !item.cta)
                .map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="link-footer text-sm hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="link-footer text-sm hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-default">
              Légal
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.legal.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-footer text-sm hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-default">
              Liens WebView (app Flutter)
            </p>
            <ul className="mt-2 space-y-2">
              {siteConfig.legal.map((item) => (
                <li key={item.webviewHref}>
                  <a
                    href={item.webviewHref}
                    className="footer-webview-link text-xs hover:underline"
                    title={getAbsoluteUrl(item.webviewHref)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left lg:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-default">
              Suivez-nous
            </h3>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start lg:justify-end">
              {siteConfig.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-xs text-xs text-subtle sm:mx-0 lg:ml-auto lg:mr-0">
              Restez informé des nouveautés, lancements bêta et événements RDV.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-default pt-6 text-center sm:mt-10">
          <p className="text-sm text-subtle">
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <nav
            className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm"
            aria-label="Liens légaux"
          >
            {siteConfig.legal.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-3">
                {index > 0 && (
                  <span className="text-subtle" aria-hidden>
                    ·
                  </span>
                )}
                <a href={item.href} className="link-footer hover:underline">
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
