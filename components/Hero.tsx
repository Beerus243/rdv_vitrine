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
      <Image
        src={hero.banner.src}
        alt={hero.banner.alt}
        fill
        priority
        quality={85}
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />

      <div className="hero-overlay absolute inset-0" aria-hidden />
      <div className="hero-overlay-bottom absolute inset-0" aria-hidden />

      <div className="hero-content">
        <span className="badge-hero mb-2 line-clamp-2 w-fit max-w-full text-[11px] leading-snug sm:mb-3 sm:text-xs">
          {hero.badge}
        </span>

        <h1 className="section-title-on-dark max-w-2xl text-on-dark drop-shadow-sm">
          {hero.title}
        </h1>

        <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-snug text-on-dark-muted drop-shadow-sm sm:mt-2.5 sm:line-clamp-3 sm:text-base lg:max-w-2xl">
          {hero.subtitle}
        </p>

        <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:gap-3">
          <HeroButton button={hero.buttons.primary} variant="primary" />
          <HeroButton button={hero.buttons.secondary} variant="ghost" />
        </div>
      </div>
    </section>
  );
}
