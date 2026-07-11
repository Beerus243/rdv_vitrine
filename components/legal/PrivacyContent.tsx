import { legalMeta } from "@/lib/legal";

export function PrivacyContent() {
  const { appName, contactEmail, jurisdiction } = legalMeta;

  return (
    <>
      <section>
        <h2>1. Introduction</h2>
        <p>
          La présente politique de confidentialité explique comment {appName}
          (« nous », « notre ») collecte, utilise, conserve et protège vos données
          personnelles lorsque vous utilisez notre site web, notre application
          mobile et nos services associés (le « Service »).
        </p>
        <p>
          Nous accordons une importance particulière à la protection de votre vie
          privée, conformément aux principes applicables en {jurisdiction} et aux
          bonnes pratiques internationales en matière de protection des données.
        </p>
      </section>

      <section>
        <h2>2. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données personnelles liées au Service
          est l&apos;équipe {appName}. Pour toute demande relative à vos données,
          écrivez-nous à{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </section>

      <section>
        <h2>3. Données que nous collectons</h2>
        <p>Selon votre utilisation du Service, nous pouvons collecter :</p>
        <ul>
          <li>
            <strong>Données d&apos;identification</strong> : prénom ou pseudo,
            date de naissance, genre, photo de profil, numéro de téléphone, adresse
            e-mail.
          </li>
          <li>
            <strong>Données de profil</strong> : centres d&apos;intérêt,
            préférences, biographie, localisation approximative (ville ou région).
          </li>
          <li>
            <strong>Données d&apos;usage</strong> : interactions dans
            l&apos;application, likes, messages, signalements, journaux techniques
            (type d&apos;appareil, version de l&apos;OS, langue).
          </li>
          <li>
            <strong>Données de la liste d&apos;attente</strong> : e-mail et,
            optionnellement, numéro de téléphone fournis via le formulaire du site.
          </li>
          <li>
            <strong>Données de support</strong> : contenu de vos échanges avec notre
            équipe lorsque vous nous contactez.
          </li>
        </ul>
        <p>
          Nous ne collectons que les données nécessaires au fonctionnement du
          Service et à l&apos;amélioration de votre expérience.
        </p>
      </section>

      <section>
        <h2>4. Finalités du traitement</h2>
        <p>Nous utilisons vos données pour :</p>
        <ul>
          <li>créer et gérer votre compte utilisateur ;</li>
          <li>vous proposer des profils compatibles et faciliter les mises en relation ;</li>
          <li>permettre l&apos;envoi et la réception de messages entre utilisateurs ;</li>
          <li>assurer la sécurité, la modération et la prévention des abus ;</li>
          <li>vous envoyer des communications liées au Service (mises à jour, bêta, support) ;</li>
          <li>analyser l&apos;usage du Service afin d&apos;améliorer ses fonctionnalités ;</li>
          <li>respecter nos obligations légales et répondre aux demandes des autorités compétentes.</li>
        </ul>
      </section>

      <section>
        <h2>5. Bases légales</h2>
        <p>Le traitement de vos données repose notamment sur :</p>
        <ul>
          <li>l&apos;exécution du contrat lié à votre utilisation du Service ;</li>
          <li>votre consentement (ex. inscription à la liste d&apos;attente, certaines notifications) ;</li>
          <li>notre intérêt légitime (sécurité, amélioration du produit, lutte contre la fraude) ;</li>
          <li>le respect d&apos;obligations légales applicables.</li>
        </ul>
      </section>

      <section>
        <h2>6. Partage des données</h2>
        <p>
          Nous ne vendons pas vos données personnelles. Elles peuvent être partagées
          uniquement dans les cas suivants :
        </p>
        <ul>
          <li>
            avec d&apos;autres utilisateurs, dans la limite de ce que vous choisissez
            d&apos;afficher sur votre profil ou d&apos;envoyer en message ;
          </li>
          <li>
            avec nos prestataires techniques (hébergement, envoi d&apos;e-mails,
            analytique) liés par des obligations de confidentialité ;
          </li>
          <li>
            si la loi l&apos;exige ou pour protéger nos droits, la sécurité des
            utilisateurs ou celle du public.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Durée de conservation</h2>
        <p>
          Nous conservons vos données aussi longtemps que nécessaire pour fournir le
          Service et respecter nos obligations légales. En règle générale :
        </p>
        <ul>
          <li>
            les données de compte sont conservées tant que votre compte est actif,
            puis supprimées ou anonymisées dans un délai raisonnable après
            suppression ;
          </li>
          <li>
            les inscriptions à la liste d&apos;attente sont conservées jusqu&apos;au
            lancement officiel ou jusqu&apos;à votre demande de désinscription ;
          </li>
          <li>
            certaines données techniques ou de sécurité peuvent être conservées plus
            longtemps à des fins de prévention des abus.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données contre l&apos;accès non autorisé,
          la perte, la divulgation ou l&apos;altération. Aucune méthode de
          transmission ou de stockage n&apos;étant totalement infaillible, nous ne
          pouvons garantir une sécurité absolue.
        </p>
      </section>

      <section>
        <h2>9. Vos droits</h2>
        <p>
          Selon la réglementation applicable, vous pouvez disposer des droits
          suivants concernant vos données personnelles :
        </p>
        <ul>
          <li>droit d&apos;accès et de rectification ;</li>
          <li>droit de suppression (« droit à l&apos;oubli ») ;</li>
          <li>droit de limitation ou d&apos;opposition à certains traitements ;</li>
          <li>droit de retirer votre consentement lorsque le traitement en dépend ;</li>
          <li>droit de demander la portabilité de certaines données.</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Nous pourrons vous
          demander de vérifier votre identité avant de traiter votre demande.
        </p>
      </section>

      <section>
        <h2>10. Mineurs</h2>
        <p>
          Le Service n&apos;est pas destiné aux personnes de moins de 18 ans. Nous
          ne collectons pas sciemment de données concernant des mineurs. Si vous
          pensez qu&apos;un mineur nous a fourni des données, contactez-nous afin
          que nous puissions les supprimer.
        </p>
      </section>

      <section>
        <h2>11. Cookies et technologies similaires</h2>
        <p>
          Le site web peut utiliser des cookies ou technologies similaires pour
          assurer son bon fonctionnement, mémoriser vos préférences ou mesurer
          l&apos;audience de manière agrégée. Vous pouvez configurer votre navigateur
          pour refuser certains cookies ; certaines fonctionnalités du site pourraient
          alors être limitées.
        </p>
      </section>

      <section>
        <h2>12. Transferts hors du pays</h2>
        <p>
          Certains de nos prestataires peuvent traiter des données en dehors de la{" "}
          {jurisdiction}. Dans ce cas, nous veillons à ce que des garanties
          appropriées soient mises en place pour protéger vos informations
          conformément aux standards applicables.
        </p>
      </section>

      <section>
        <h2>13. Modifications</h2>
        <p>
          Nous pouvons mettre à jour cette politique pour refléter l&apos;évolution
          du Service ou des exigences légales. La date de dernière mise à jour est
          indiquée en haut de cette page. Nous vous informerons des changements
          importants par des moyens appropriés (notification dans l&apos;app, e-mail
          ou message sur le site).
        </p>
      </section>

      <section>
        <h2>14. Contact</h2>
        <p>
          Pour toute question sur cette politique ou sur vos données personnelles,
          écrivez-nous à{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </section>
    </>
  );
}
