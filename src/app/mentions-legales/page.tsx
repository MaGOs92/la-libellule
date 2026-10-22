import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Mentions légales — ${site.name}`,
  description: `Mentions légales du site ${site.name}.`,
  alternates: { canonical: "/mentions-legales" },
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Éditeur du site",
    body: (
      <>
        <p>
          Le site {site.name} ({site.baseline.toLowerCase()}) est édité par{" "}
          <strong>{legal.company}</strong>, {legal.form}
          {legal.capital ? ` au capital de ${legal.capital}` : ""}.
        </p>
        <ul>
          <li>Siège social : {legal.address}</li>
          <li>SIREN : {legal.siren}</li>
          <li>SIRET : {legal.siret}</li>
          <li>TVA intracommunautaire : {legal.vat}</li>
          <li>
            Contact : <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Directeur de la publication",
    body: <p>{legal.owner}, gérant.</p>,
  },
  {
    title: "Hébergement",
    body: (
      <p>
        Le site est hébergé par GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly
        Jr. Street, San Francisco, CA 94107, États-Unis —{" "}
        <a
          href="https://pages.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          pages.github.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "Propriété intellectuelle",
    body: (
      <>
        <p>
          Les textes, éléments graphiques et modèles 3D présentés sur ce site
          sont la propriété de {legal.company}, sauf mention contraire. Toute
          reproduction, même partielle, nécessite une autorisation préalable.
        </p>
        <p>
          Certaines photographies, indiquées dans les crédits en pied de page,
          proviennent de Wikimedia Commons et sont diffusées sous licences
          libres (CC0, CC BY, CC BY-SA) ; elles restent la propriété de leurs
          auteurs.
        </p>
      </>
    ),
  },
  {
    title: "Responsabilité",
    body: (
      <p>
        {legal.company} s&apos;efforce d&apos;assurer l&apos;exactitude des
        informations publiées mais ne peut garantir qu&apos;elles soient
        exemptes d&apos;erreurs ou à jour. Les liens vers des sites tiers sont
        fournis à titre d&apos;information : leur contenu n&apos;engage pas la
        responsabilité de l&apos;éditeur.
      </p>
    ),
  },
  {
    title: "Données personnelles",
    body: (
      <p>
        Le traitement des données transmises via le formulaire de contact est
        décrit dans la{" "}
        <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      updatedAt={legal.updatedAt}
      sections={sections}
    />
  );
}
