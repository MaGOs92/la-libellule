import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${site.name}`,
  description: `Comment ${site.name} collecte et utilise les données transmises via le formulaire de contact.`,
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Responsable du traitement",
    body: (
      <p>
        {legal.company} (nom commercial : {site.name}), SIRET {legal.siret},
        représentée par {legal.owner}, {legal.address}. Contact :{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    ),
  },
  {
    title: "Données collectées",
    body: (
      <>
        <p>
          Les données sont collectées uniquement via le formulaire de contact :
          nom et prénom, adresse e-mail, numéro de téléphone et organisation (si
          renseignés), localisation du site, nature du projet, description et
          pièces jointes éventuelles.
        </p>
        <p>
          Ce site n&apos;utilise ni outil de mesure d&apos;audience, ni cookie
          publicitaire, ni service de suivi.
        </p>
      </>
    ),
  },
  {
    title: "Finalités et base légale",
    body: (
      <ul>
        <li>
          Répondre à votre demande de contact ou de devis : consentement, et
          mesures précontractuelles prises à votre demande.
        </li>
        <li>
          Gérer la relation commerciale et les obligations comptables en cas de
          prestation : exécution du contrat et obligation légale.
        </li>
      </ul>
    ),
  },
  {
    title: "Destinataires et sous-traitants",
    body: (
      <>
        <p>
          Vos données sont destinées uniquement à {legal.owner}. Elles ne sont
          ni vendues ni cédées à des tiers à des fins commerciales.
        </p>
        <ul>
          <li>
            <strong>Tally</strong> : prestataire du formulaire de contact, qui
            héberge les réponses. Le formulaire intégré peut déposer des cookies
            techniques nécessaires à son fonctionnement ; voir la{" "}
            <a
              href="https://tally.so/help/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de confidentialité de Tally
            </a>
            .
          </li>
          <li>
            <strong>GitHub Pages</strong> : hébergement du site. Comme tout
            hébergeur, il peut enregistrer des journaux techniques de connexion
            (adresse IP).
          </li>
        </ul>
        <p>
          Ces prestataires peuvent traiter des données en dehors de l&apos;Union
          européenne, dans le cadre de garanties appropriées (clauses
          contractuelles types notamment).
        </p>
      </>
    ),
  },
  {
    title: "Durée de conservation",
    body: (
      <p>
        Les demandes de contact sont conservées {legal.retention} à compter du
        dernier échange. Les documents liés à une prestation sont conservés
        pendant les durées légales applicables, notamment comptables.
      </p>
    ),
  },
  {
    title: "Vos droits",
    body: (
      <>
        <p>
          Vous disposez des droits d&apos;accès, de rectification,
          d&apos;effacement, de limitation, d&apos;opposition et de portabilité
          de vos données, ainsi que du droit de retirer votre consentement à
          tout moment.
        </p>
        <p>
          Pour les exercer, écrivez à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. En cas de
          difficulté, vous pouvez introduire une réclamation auprès de la{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function ConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      updatedAt={legal.updatedAt}
      sections={sections}
    />
  );
}
