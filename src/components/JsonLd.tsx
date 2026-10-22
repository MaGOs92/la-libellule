import { legal, site } from "@/lib/site";
import { services } from "@/lib/content";

// L'adresse postale reste volontairement absente : activité à zone d'intervention.
const data = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  legalName: legal.company,
  description: site.description,
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  identifier: legal.siret.replace(/\s/g, ""),
  vatID: legal.vat.replace(/\s/g, ""),
  founder: { "@type": "Person", name: legal.owner },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Touraine" },
    { "@type": "AdministrativeArea", name: "Indre-et-Loire" },
    { "@type": "City", name: "Tours" },
  ],
  knowsAbout: [
    "Photogrammétrie",
    "Cartographie par drone",
    "Modélisation 3D",
    "Modèle numérique de terrain",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
