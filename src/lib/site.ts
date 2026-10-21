export const site = {
  name: "La Libellule",
  baseline: "Photogrammétrie & cartographie par drone",
  description:
    "Photogrammétrie et cartographie par drone en Touraine : orthophotos, modèles 3D, MNT et suivi de chantier haute précision autour de Tours et du Val de Loire.",
  email: "contact@la-libellule.example",
  phone: "+33 6 00 00 00 00",
  zone: "Touraine (37) et départements limitrophes",
  // URL d'embed du formulaire (ex. https://form.typeform.com/to/XXXXXXXX).
  // Définie via la variable CI/locale NEXT_PUBLIC_CONTACT_FORM_URL ou en dur ici.
  contactFormUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL ?? "",
};

export const navLinks = [
  { href: "#territoire", label: "Territoire" },
  { href: "#prestations", label: "Prestations" },
  { href: "#projets", label: "Projets" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

// Préfixe le basePath de GitHub Pages pour les fichiers de /public.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
