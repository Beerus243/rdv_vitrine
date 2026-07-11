import Image, { type StaticImageData } from "next/image";
import screen1 from "@/assets/screen/1.jpg";
import screen2 from "@/assets/screen/2.jpg";
import screen3 from "@/assets/screen/3.jpg";
import screen4 from "@/assets/screen/4.jpg";
import screenDark from "@/assets/screen/dark_mode.png";
import screenDecouvert from "@/assets/screen/decouvert.jpg";
import screenLight from "@/assets/screen/ligth_mode.png";
import screenParametre from "@/assets/screen/parametre.jpg";
import Reveal from "@/components/Reveal";

type Screen = {
  id: string;
  src: StaticImageData;
  alt: string;
  label: string;
};

const screens: Screen[] = [
  {
    id: "welcome",
    src: screen2,
    alt: "Écran d'accueil RDV — Drague comme tu es",
    label: "Accueil",
  },
  {
    id: "meet",
    src: screen4,
    alt: "Rencontrez des personnes qui partagent les mêmes idées",
    label: "Rencontres",
  },
  {
    id: "profile",
    src: screen1,
    alt: "Fiche profil utilisateur sur RDV",
    label: "Profil",
  },
  {
    id: "chat",
    src: screen3,
    alt: "Conversations et messages sur RDV",
    label: "Messages",
  },
  {
    id: "discover",
    src: screenDecouvert,
    alt: "Écran de découverte de profils sur RDV",
    label: "Découverte",
  },
  {
    id: "light",
    src: screenLight,
    alt: "Interface RDV en mode clair",
    label: "Mode clair",
  },
  {
    id: "dark",
    src: screenDark,
    alt: "Interface RDV en mode sombre",
    label: "Mode sombre",
  },
  {
    id: "settings",
    src: screenParametre,
    alt: "Écran des paramètres RDV",
    label: "Paramètres",
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="section-surface section-block">
      <div className="section-container">
        <Reveal className="section-header">
          <p className="badge-brand mb-3">L&apos;application</p>
          <h2 className="section-title">Aperçu de l&apos;application</h2>
          <p className="section-lead">
            Une expérience simple, élégante et pensée pour la RDC.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {screens.map((screen, index) => (
            <Reveal key={screen.id} delay={(index % 4) * 70} className="flex min-w-0 flex-col items-center">
              <figure className="screen-card group flex w-full min-w-0 flex-col items-center">
                <div className="screen-frame">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 200px"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-2 text-center text-xs font-semibold text-brand sm:text-sm">
                  {screen.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
