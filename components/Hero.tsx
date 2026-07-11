import Image from "next/image";
import { landingConfig, type LandingButton } from "@/lib/landing-config";

function HeroButton({
  button,
  variant,
}: {
  button: LandingButton;
  variant: "primary" | "ghost";
}) {
  const className =
    variant === "primary"
      ? "btn-primary btn-compact w-full sm:w-auto"
      : "btn-ghost-light btn-compact w-full sm:w-auto";

  const isExternal =
    button.external === true || /^https?:\/\//.test(button.href);

  if (isExternal) {
    return (
      <a
        href={button.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {button.label}
      </a>
    );
  }

  return (
    <a href={button.href} className={className}>
      {button.label}
    </a>
  );
}

export default function Hero() {
  const { hero } = landingConfig;

  return (
    <section className="hero-section" aria-label="Accueil RDV">
      <div className="hero-image-wrap">
        <Image
          src={hero.banner.src}
          alt={hero.banner.alt}
          fill
          priority
          quality={85}
          className="hero-image object-cover object-[center_40%]"
          sizes="(max-width: 768px) 100%, 100vw"
        />
      </div>

      <div className="hero-overlay absolute inset-0" aria-hidden />
      <div className="hero-overlay-bottom absolute inset-0" aria-hidden />

      <div className="hero-content">
        <span className="hero-enter hero-enter-1 badge-hero mb-2 max-w-full text-[11px] leading-snug sm:mb-3 sm:text-xs">
          {hero.badge}
        </span>

        <h1 className="hero-enter hero-enter-2 section-title-on-dark max-w-full text-on-dark drop-shadow-sm">
          {hero.title}
        </h1>

        <p className="hero-enter hero-enter-3 mt-2 max-w-full text-sm leading-snug text-on-dark-muted drop-shadow-sm sm:mt-2.5 sm:text-base">
          {hero.subtitle}
        </p>

        <div className="hero-enter hero-enter-4 mt-3 flex w-full min-w-0 flex-col gap-2 sm:mt-4 sm:flex-row sm:gap-3">
          <HeroButton button={hero.buttons.primary} variant="primary" />
          <HeroButton button={hero.buttons.secondary} variant="ghost" />
        </div>
      </div>
    </section>
  );
}
