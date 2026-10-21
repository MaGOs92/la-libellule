export const site = {
  name: "La Libellule",
  baseline: "Photogrammétrie & cartographie par drone",
  description:
    "Cartographie, modélisation 3D et relevés par drone : orthophotos, nuages de points, MNT et suivi de chantier haute précision.",
  email: "contact@la-libellule.example",
  phone: "+33 6 00 00 00 00",
  zone: "France entière · interventions sur demande",
  // URL d'embed du formulaire (ex. https://form.typeform.com/to/XXXXXXXX).
  // Définie via la variable CI/locale NEXT_PUBLIC_CONTACT_FORM_URL ou en dur ici.
  contactFormUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL ?? "",
};

export const navLinks = [
  { href: "#prestations", label: "Prestations" },
  { href: "#projets", label: "Projets" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];
