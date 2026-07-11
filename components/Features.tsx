import {
  IconCamera,
  IconHeart,
  IconLock,
  IconSpark,
} from "@/components/icons";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: IconHeart,
    title: "Match intelligent",
    description: "Découvrez des profils compatibles avec vos centres d'intérêt.",
  },
  {
    icon: IconCamera,
    title: "Profils enrichis",
    description: "Montrez qui vous êtes réellement avec photos et passions.",
  },
  {
    icon: IconLock,
    title: "Sécurité",
    description: "Vos données restent protégées et votre vie privée respectée.",
  },
  {
    icon: IconSpark,
    title: "Expérience fluide",
    description: "Interface rapide et moderne, pensée pour le mobile.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-muted section-block">
      <div className="section-container">
        <Reveal className="section-header">
          <p className="badge-brand mb-3">Pourquoi RDV ?</p>
          <h2 className="section-title">Fonctionnalités</h2>
          <p className="section-lead">
            Tout ce dont vous avez besoin pour connecter authentiquement.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} as="article" delay={index * 80} className="feature-card">
                <div className="icon-feature mx-auto mb-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1.5 font-bold text-default">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-subtle">
                  {feature.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
