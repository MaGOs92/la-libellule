import {
  Boxes,
  Building2,
  HardHat,
  Landmark,
  Map as MapIcon,
  Mountain,
  type LucideIcon,
} from "lucide-react";

// Contenu fictif : à remplacer par le vrai.

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Cartographie & orthophotos",
    description:
      "Plans géoréférencés haute résolution pour vos études, dossiers réglementaires ou suivis d'évolution.",
    deliverables: ["Orthophoto GeoTIFF", "Export QGIS / SIG", "GSD jusqu'à 1 cm/px"],
    icon: MapIcon,
  },
  {
    title: "Modèles 3D & photogrammétrie",
    description:
      "Reconstruction fidèle de bâtiments, ouvrages et sites complexes en maillage texturé ou nuage de points.",
    deliverables: ["Maillage texturé", "Nuage de points LAS/E57", "Visualiseur web"],
    icon: Building2,
  },
  {
    title: "MNT, MNS & courbes de niveau",
    description:
      "Modèles numériques de terrain précis, profils en long et en travers, courbes de niveau exploitables en CAO.",
    deliverables: ["MNT / MNS", "Courbes de niveau DXF", "Profils & coupes"],
    icon: Mountain,
  },
  {
    title: "Volumétrie",
    description:
      "Calcul de volumes de stocks, carrières, remblais et déblais, avec comparaison entre deux dates.",
    deliverables: ["Rapport de volumes", "Cartes de différence", "Suivi périodique"],
    icon: Boxes,
  },
  {
    title: "Suivi de chantier & inspection",
    description:
      "Avancement, contrôle de conformité et inspection d'ouvrages ou de toitures sans échafaudage.",
    deliverables: ["Reporting daté", "Comparaison as-built", "Détection de défauts"],
    icon: HardHat,
  },
  {
    title: "Patrimoine & jumeaux numériques",
    description:
      "Documentation 3D du patrimoine bâti et création de jumeaux numériques pour l'archivage et la valorisation.",
    deliverables: ["Relevé 3D complet", "Fichiers BIM-ready", "Rendus & vidéos"],
    icon: Landmark,
  },
];

export const workflow = [
  { step: "01", title: "Brief", text: "Analyse du besoin, du site et de la réglementation de vol." },
  { step: "02", title: "Vol", text: "Plan de vol automatisé, points de contrôle RTK au sol." },
  { step: "03", title: "Traitement", text: "Photogrammétrie, calage et contrôle qualité des données." },
  { step: "04", title: "Livraison", text: "Livrables exploitables et accompagnement à la prise en main." },
];

export const projectCategories = [
  "Tous",
  "Cartographie",
  "Modélisation 3D",
  "Topographie",
  "Inspection",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "Tous">;

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  description: string;
  stats: { label: string; value: string }[];
  seed: number;
  hue: number;
};

export const projects: Project[] = [
  {
    id: "carriere-des-roches",
    title: "Carrière des Roches",
    category: "Topographie",
    location: "Drôme (26)",
    year: "2025",
    description:
      "Levé volumétrique mensuel des fronts de taille et des stocks pour le suivi d'exploitation.",
    stats: [
      { label: "Surface", value: "38 ha" },
      { label: "GSD", value: "2 cm/px" },
      { label: "Précision", value: "± 3 cm" },
    ],
    seed: 11,
    hue: 190,
  },
  {
    id: "domaine-viticole",
    title: "Domaine viticole",
    category: "Cartographie",
    location: "Gironde (33)",
    year: "2025",
    description:
      "Orthophoto et modèle de surface pour la gestion parcellaire et l'analyse du drainage.",
    stats: [
      { label: "Surface", value: "120 ha" },
      { label: "GSD", value: "3 cm/px" },
      { label: "Images", value: "4 800" },
    ],
    seed: 27,
    hue: 160,
  },
  {
    id: "chapelle-saint-jean",
    title: "Chapelle Saint-Jean",
    category: "Modélisation 3D",
    location: "Ardèche (07)",
    year: "2024",
    description:
      "Numérisation 3D complète d'un édifice du XIIe siècle pour archivage et étude de restauration.",
    stats: [
      { label: "Points", value: "42 M" },
      { label: "GSD", value: "0,8 cm/px" },
      { label: "Livrable", value: "Maillage 3D" },
    ],
    seed: 42,
    hue: 265,
  },
  {
    id: "zone-industrielle",
    title: "Zone industrielle Nord",
    category: "Inspection",
    location: "Isère (38)",
    year: "2024",
    description:
      "Inspection de toitures et suivi d'avancement d'un chantier de 6 bâtiments sur 12 mois.",
    stats: [
      { label: "Bâtiments", value: "6" },
      { label: "Passages", value: "12" },
      { label: "Livrable", value: "Reporting" },
    ],
    seed: 63,
    hue: 210,
  },
  {
    id: "berges-de-la-riviere",
    title: "Berges de la rivière",
    category: "Topographie",
    location: "Savoie (73)",
    year: "2024",
    description:
      "MNT haute précision pour l'étude hydraulique et la modélisation des zones inondables.",
    stats: [
      { label: "Linéaire", value: "7 km" },
      { label: "GSD", value: "2,5 cm/px" },
      { label: "Livrable", value: "MNT + profils" },
    ],
    seed: 78,
    hue: 175,
  },
  {
    id: "ferme-solaire",
    title: "Ferme solaire",
    category: "Cartographie",
    location: "Vaucluse (84)",
    year: "2023",
    description:
      "Cartographie préalable et plan topographique pour l'implantation d'un parc photovoltaïque.",
    stats: [
      { label: "Surface", value: "65 ha" },
      { label: "GSD", value: "3 cm/px" },
      { label: "Livrable", value: "Plan + MNT" },
    ],
    seed: 95,
    hue: 230,
  },
];

export const about = {
  name: "Prénom Nom",
  role: "Télépilote professionnel & photogrammètre",
  bio: [
    "Passionné de géomatique et de vol, j'ai fondé La Libellule pour mettre la photogrammétrie par drone au service des professionnels : géomètres, bureaux d'études, collectivités, exploitants et architectes.",
    "Chaque mission est pensée de bout en bout : préparation du vol, acquisition sécurisée, traitement rigoureux et livrables directement exploitables dans vos outils.",
  ],
  stats: [
    { value: "8+", label: "ans d'expérience" },
    { value: "1 200", label: "hectares cartographiés" },
    { value: "150+", label: "missions réalisées" },
  ],
  certifications: ["Télépilote certifié (catégorie Ouverte A1/A2/A3)", "Scénarios STS-01 / STS-02", "Assurance RC professionnelle"],
};

export type Equipment = {
  name: string;
  detail: string;
  kind: "Drone" | "Capteur" | "GNSS" | "Logiciel";
};

export const equipment: Equipment[] = [
  { kind: "Drone", name: "DJI Matrice 350 RTK", detail: "Plateforme longue endurance, positionnement RTK centimétrique" },
  { kind: "Capteur", name: "Zenmuse P1 (45 MP)", detail: "Capteur plein format dédié à la photogrammétrie" },
  { kind: "Drone", name: "DJI Mavic 3 Enterprise", detail: "Compact et rapide, idéal pour les sites contraints" },
  { kind: "GNSS", name: "Récepteur GNSS RTK", detail: "Points de contrôle au sol et calage des modèles" },
  { kind: "Logiciel", name: "Metashape · Pix4D", detail: "Traitement photogrammétrique et génération des nuages" },
  { kind: "Logiciel", name: "QGIS · CloudCompare", detail: "Analyse SIG, comparaison de nuages et mise en forme" },
];
