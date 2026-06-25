"use client";

import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "@/components/icons";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b border-default bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo size="md" onClick={closeMenu} />

        {/* Desktop */}
        <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Navigation principale">
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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-default transition hover:bg-brand-light lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={`mobile-nav lg:hidden ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Fermer le menu"
          onClick={closeMenu}
        />
        <nav className="mobile-nav-panel" aria-label="Navigation mobile">
          {siteConfig.nav.map((item) =>
            item.cta ? (
              <a
                key={item.href}
                href={item.href}
                className="btn-primary w-full text-center"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
