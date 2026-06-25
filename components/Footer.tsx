import { SocialIcon } from "@/components/icons";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-default bg-brand-muted">
      <div className="section-container py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="text-center md:text-left">
            <Logo size="lg" className="justify-center md:justify-start" />
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-subtle md:mx-0 md:max-w-none">
              {siteConfig.tagline}. Rencontrez, connectez et interagissez en RDC.
            </p>
          </div>

          <div className="text-center md:text-left">
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
              {siteConfig.legal.map((item) => (
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

          <div className="text-center md:text-left lg:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-default">
              Suivez-nous
            </h3>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start lg:justify-end">
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
            <p className="mx-auto mt-4 max-w-xs text-xs text-subtle lg:ml-auto lg:mr-0">
              Restez informé des nouveautés, lancements bêta et événements RDV.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-default pt-6 text-center sm:mt-10">
          <p className="text-sm text-subtle">
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
