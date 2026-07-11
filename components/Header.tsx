"use client";

import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "@/components/icons";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`site-header sticky top-0 z-50 w-full max-w-full border-b bg-surface/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "site-header-scrolled border-transparent" : "border-default"}`}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-3.5 sm:px-6">
        <Logo size="md" onClick={closeMenu} />

        <nav
          className="hidden items-center gap-6 text-sm lg:flex"
          aria-label="Navigation principale"
        >
          {siteConfig.nav.map((item) =>
            item.cta ? (
              <a key={item.href} href={item.href} className="btn-primary px-4 py-2 text-sm">
                {item.label}
              </a>
            ) : (
              <a key={item.href} href={item.href} className="link-nav">
                {item.label}
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-default transition-colors duration-200 hover:bg-brand-light active:scale-95 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="mobile-nav-overlay lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          />
          <nav className="mobile-nav-panel" aria-label="Navigation mobile">
            {siteConfig.nav.map((item, index) =>
              item.cta ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-item btn-primary w-full text-center"
                  style={{ animationDelay: `${index * 60}ms` }}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-item mobile-nav-link"
                  style={{ animationDelay: `${index * 60}ms` }}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
