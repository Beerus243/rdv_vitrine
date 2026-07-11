import { legalMeta } from "@/lib/legal";

export function TermsContent() {
  const { appName, contactEmail, jurisdiction } = legalMeta;

  return (
    <>
      <section>
        <h2>1. Objet</h2>
        <p>
          Les présentes conditions d&apos;utilisation (« Conditions ») régissent
          l&apos;accès et l&apos;utilisation de l&apos;application mobile {appName},
          du site web associé et des services proposés (collectivement, le « Service »).
        </p>
        <p>
          En créant un compte, en téléchargeant l&apos;application ou en utilisant
          le Service, vous acceptez ces Conditions dans leur intégralité. Si vous
          n&apos;acceptez pas ces Conditions, vous ne devez pas utiliser le Service.
        </p>
      </section>

      <section>
        <h2>2. Éligibilité</h2>
        <p>
          Le Service est réservé aux personnes âgées d&apos;au moins <strong>18 ans</strong>.
          En utilisant {appName}, vous déclarez et garantissez que vous remplissez
          cette condition d&apos;âge et que vous avez la capacité juridique de
          contracter.
        </p>
        <p>
          Nous nous réservons le droit de suspendre ou supprimer tout compte dont
          l&apos;âge ou l&apos;identité ne pourrait être vérifié de manière
          satisfaisante.
        </p>
      </section>

      <section>
        <h2>3. Compte utilisateur</h2>
        <p>
          Pour accéder à certaines fonctionnalités, vous devez créer un compte et
          fournir des informations exactes, complètes et à jour. Vous êtes
          responsable de la confidentialité de vos identifiants et de toute activité
          réalisée via votre compte.
        </p>
        <p>
          Vous vous engagez à nous informer sans délai en cas d&apos;accès non
          autorisé à votre compte à l&apos;adresse{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </section>

      <section>
        <h2>4. Utilisation du Service</h2>
        <p>Vous vous engagez à utiliser {appName} de manière loyale et respectueuse. Il est notamment interdit de :</p>
        <ul>
          <li>usurper l&apos;identité d&apos;une autre personne ou créer un profil trompeur ;</li>
          <li>publier du contenu illégal, diffamatoire, haineux, violent, pornographique ou harcelant ;</li>
          <li>solliciter de l&apos;argent, promouvoir des arnaques ou des activités frauduleuses ;</li>
          <li>collecter des données personnelles d&apos;autres utilisateurs sans leur consentement ;</li>
          <li>utiliser des robots, scripts ou outils automatisés pour accéder au Service ;</li>
          <li>contourner les mesures de sécurité ou perturber le bon fonctionnement du Service.</li>
        </ul>
        <p>
          Nous pouvons modérer les contenus, signaler aux autorités compétentes
          toute activité illicite et suspendre ou résilier les comptes en violation
          de ces règles.
        </p>
      </section>

      <section>
        <h2>5. Contenu utilisateur</h2>
        <p>
          Vous conservez la propriété des contenus que vous publiez (photos, textes,
          messages, etc.). En publiquant du contenu sur {appName}, vous nous accordez
          une licence non exclusive, mondiale et gratuite pour héberger, afficher,
          reproduire et traiter ce contenu uniquement dans le cadre du fonctionnement
          du Service.
        </p>
        <p>
          Vous garantissez disposer des droits nécessaires sur les contenus publiés
          et que ceux-ci ne portent pas atteinte aux droits de tiers.
        </p>
      </section>

      <section>
        <h2>6. Rencontres et interactions</h2>
        <p>
          {appName} est une plateforme de mise en relation. Nous ne garantissons
          ni l&apos;identité, ni le comportement, ni les intentions des
          utilisateurs. Toute rencontre ou communication hors ligne se fait sous
          votre entière responsabilité.
        </p>
        <p>
          Nous vous encourageons à faire preuve de prudence, à ne pas partager
          d&apos;informations sensibles trop rapidement et à signaler tout
          comportement inapproprié via les outils prévus à cet effet dans
          l&apos;application.
        </p>
      </section>

      <section>
        <h2>7. Version bêta</h2>
        <p>
          {appName} est actuellement proposé en version bêta. Le Service peut
          contenir des bugs, être modifié, interrompu ou retiré temporairement
          sans préavis. Certaines fonctionnalités peuvent évoluer ou disparaître
          au fil des mises à jour.
        </p>
        <p>
          En participant à la bêta, vous acceptez que l&apos;expérience puisse
          être instable et que vos retours puissent être utilisés pour améliorer
          le produit.
        </p>
      </section>

      <section>
        <h2>8. Propriété intellectuelle</h2>
        <p>
          Le nom {appName}, le logo, l&apos;interface, le code, les textes et
          l&apos;ensemble des éléments du Service sont protégés par le droit de
          la propriété intellectuelle. Toute reproduction, modification ou
          exploitation non autorisée est interdite.
        </p>
      </section>

      <section>
        <h2>9. Limitation de responsabilité</h2>
        <p>
          Dans les limites autorisées par la loi applicable, {appName} est fourni
          « en l&apos;état ». Nous ne garantissons pas une disponibilité continue
          ni l&apos;absence d&apos;erreurs. Notre responsabilité ne saurait être
          engagée pour les dommages indirects, pertes de données, préjudices
          résultant d&apos;interactions entre utilisateurs ou de l&apos;usage que
          vous faites du Service.
        </p>
      </section>

      <section>
        <h2>10. Suspension et résiliation</h2>
        <p>
          Vous pouvez supprimer votre compte à tout moment depuis l&apos;application
          ou en nous contactant. Nous pouvons suspendre ou résilier votre accès en
          cas de violation des présentes Conditions, de risque pour la sécurité des
          utilisateurs ou sur demande des autorités compétentes.
        </p>
      </section>

      <section>
        <h2>11. Modifications</h2>
        <p>
          Nous pouvons mettre à jour ces Conditions pour refléter l&apos;évolution
          du Service ou des exigences légales. La date de dernière mise à jour est
          indiquée en haut de cette page. L&apos;utilisation continue du Service
          après publication des modifications vaut acceptation des nouvelles
          Conditions.
        </p>
      </section>

      <section>
        <h2>12. Droit applicable</h2>
        <p>
          Les présentes Conditions sont régies par le droit de la{" "}
          {jurisdiction}, sous réserve des dispositions impératives applicables
          à votre situation. En cas de litige, les parties s&apos;efforceront de
          trouver une solution amiable avant toute action judiciaire.
        </p>
      </section>

      <section>
        <h2>13. Contact</h2>
        <p>
          Pour toute question relative à ces Conditions, contactez-nous à{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </section>
    </>
  );
}
