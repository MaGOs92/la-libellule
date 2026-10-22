export const site = {
  name: "La Libellule",
  url: "https://la-libellule.tech",
  baseline: "Photogrammétrie & cartographie par drone",
  description:
    "Télépilote professionnel à Tours et en Touraine : orthophotos, modèles 3D, MNT, volumétrie et suivi de chantier par drone, avec une précision centimétrique.",
  email: "contact@la-libellule.tech",
  phone: "+33 6 51 64 75 49",
  zone: "Touraine (37) et départements limitrophes",
  contactFormUrl: "https://tally.so/embed/OQD8ek?hideTitle=1",
  contactFormShareUrl: "https://tally.so/r/OQD8ek",
};

export const navLinks = [
  { href: "/#territoire", label: "Territoire" },
  { href: "/#prestations", label: "Prestations" },
  { href: "/#projets", label: "Projets" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

// Source : annuaire-entreprises.data.gouv.fr (SIRET 91485964000049). Capital à renseigner si la forme juridique l'exige.
export const legal = {
  owner: "Guillaume Fay",
  company: "Guillaume Fay - Websolutions",
  form: "société à responsabilité limitée (EURL)",
  capital: "1000 €",
  address: "",
  siren: "914 859 640",
  siret: "914 859 640 00049",
  vat: "FR16 914859640",
  retention: "3 ans",
  updatedAt: "22 octobre 2026",
};

// Préfixe le basePath de GitHub Pages pour les fichiers de /public.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
