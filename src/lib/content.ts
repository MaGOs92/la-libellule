import {
  Boxes,
  Building2,
  HardHat,
  Landmark,
  Map as MapIcon,
  Mountain,
  type LucideIcon,
} from "lucide-react";
import type { PhotoId } from "./photos";

// Contenu fictif : à remplacer par le vrai.

export type Place = {
  name: string;
  label: string;
  coords: string;
  image: PhotoId;
};

export const places: Place[] = [
  {
    name: "Tours & la Loire",
    label: "Quais, ponts, ville et berges",
    coords: "47.394° N · 0.685° E",
    image: "loire-tours",
  },
  {
    name: "Vouvray",
    label: "Coteaux et vignobles",
    coords: "47.413° N · 0.801° E",
    image: "vouvray",
  },
  {
    name: "Chenonceau",
    label: "Châteaux et domaines du Cher",
    coords: "47.325° N · 1.070° E",
    image: "chenonceau",
  },
  {
    name: "Amboise",
    label: "Patrimoine royal sur la Loire",
    coords: "47.413° N · 0.984° E",
    image: "amboise-2",
  },
];

export type Service = {
  title: string;
  description: string;
  audience: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Cartographie & orthophotos",
    description:
      "Orthophotos et plans géoréférencés haute résolution réalisés par drone en Touraine, pour vos études, dossiers réglementaires ou suivis d'évolution.",
    audience: "Collectivités, bureaux d'études, géomètres, domaines viticoles",
    deliverables: [
      "Orthophoto GeoTIFF",
      "Export QGIS / SIG",
      "GSD jusqu'à 1 cm/px",
    ],
    icon: MapIcon,
  },
  {
    title: "Modèles 3D & photogrammétrie",
    description:
      "Modélisation 3D par photogrammétrie de bâtiments, ouvrages d'art et sites complexes, en maillage texturé ou nuage de points, à Tours et dans toute l'Indre-et-Loire.",
    audience: "Architectes, gestionnaires d'ouvrages, promoteurs, assureurs",
    deliverables: [
      "Maillage texturé",
      "Nuage de points LAS/E57",
      "Visualiseur web",
    ],
    icon: Building2,
  },
  {
    title: "MNT, MNS & courbes de niveau",
    description:
      "Modèles numériques de terrain précis, profils en long et en travers et courbes de niveau exploitables en CAO, pour l'aménagement, l'hydraulique et la voirie.",
    audience: "Géomètres, bureaux d'études VRD, études hydrauliques",
    deliverables: ["MNT / MNS", "Courbes de niveau DXF", "Profils & coupes"],
    icon: Mountain,
  },
  {
    title: "Volumétrie",
    description:
      "Calcul de volumes de stocks, carrières, remblais et déblais par drone, avec comparaison entre deux dates et rapport chiffré.",
    audience: "Carrières, négoces de matériaux, entreprises de TP",
    deliverables: [
      "Rapport de volumes",
      "Cartes de différence",
      "Suivi périodique",
    ],
    icon: Boxes,
  },
  {
    title: "Suivi de chantier & inspection",
    description:
      "Suivi d'avancement, contrôle de conformité et inspection de toitures ou d'ouvrages par drone, sans échafaudage et en toute sécurité.",
    audience: "Maîtres d'ouvrage, conducteurs de travaux, syndics, assureurs",
    deliverables: [
      "Reporting daté",
      "Comparaison as-built",
      "Détection de défauts",
    ],
    icon: HardHat,
  },
  {
    title: "Patrimoine & jumeaux numériques",
    description:
      "Documentation 3D des châteaux, églises et bâti ancien de Touraine, et création de jumeaux numériques pour l'archivage, la restauration et la valorisation.",
    audience: "Monuments historiques, communes, propriétaires de domaines",
    deliverables: [
      "Relevé 3D complet",
      "Fichiers BIM-ready",
      "Rendus & vidéos",
    ],
    icon: Landmark,
  },
];

export const workflow = [
  {
    step: "01",
    title: "Brief",
    text: "Analyse du besoin, du site et de la réglementation de vol.",
  },
  {
    step: "02",
    title: "Vol",
    text: "Plan de vol automatisé, points de contrôle RTK au sol.",
  },
  {
    step: "03",
    title: "Traitement",
    text: "Photogrammétrie, calage et contrôle qualité des données.",
  },
  {
    step: "04",
    title: "Livraison",
    text: "Livrables exploitables et accompagnement à la prise en main.",
  },
];

export const projectCategories = [
  "Tous",
  "Cartographie",
  "Modélisation 3D",
  "Topographie",
  "Patrimoine",
] as const;

export type ProjectCategory = Exclude<
  (typeof projectCategories)[number],
  "Tous"
>;

export type ProjectModel = {
  src: string;
  poster: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  description: string;
  stats: { label: string; value: string }[];
  image?: PhotoId;
  model?: ProjectModel;
  seed: number;
  hue: number;
};

export const projects: Project[] = [
  {
    id: "terrain-poce-sur-cisse",
    title: "Terrain à Pocé-sur-Cisse",
    category: "Modélisation 3D",
    location: "Pocé-sur-Cisse (37)",
    year: "2026",
    description:
      "Modèle 3D texturé d'un terrain issu de la photogrammétrie par drone, à explorer en 3D directement dans le navigateur.",
    stats: [
      { label: "GSD moyenne", value: "2,72 cm" },
      { label: "Superficie", value: "4,64 ha" },
      { label: "Points", value: "17,5 M" },
    ],
    model: {
      src: "/portfolio/3d-models/poce-sur-cisse.glb",
      poster: "/portfolio/3d-models/poce-sur-cisse.webp",
    },
    seed: 7,
    hue: 170,
  },
  {
    id: "domaine-viticole",
    title: "Domaine viticole",
    category: "Cartographie",
    location: "Civray-de-Touraine (37)",
    year: "2025",
    description:
      "Orthophoto et modèle de surface d'un domaine viticole pour la gestion parcellaire et l'analyse du ruissellement.",
    stats: [
      { label: "Surface", value: "85 ha" },
      { label: "GSD", value: "3 cm/px" },
      { label: "Images", value: "3 900" },
    ],
    image: "civray",
    seed: 11,
    hue: 175,
  },
  {
    id: "abords-chenonceau",
    title: "Abords du château",
    category: "Modélisation 3D",
    location: "Chenonceaux (37)",
    year: "2025",
    description:
      "Modèle 3D texturé d'un ouvrage sur l'eau et de ses abords pour l'étude de maintenance.",
    stats: [
      { label: "Points", value: "58 M" },
      { label: "GSD", value: "1 cm/px" },
      { label: "Livrable", value: "Maillage 3D" },
    ],
    image: "chenonceau",
    seed: 27,
    hue: 190,
  },
  {
    id: "quais-de-loire",
    title: "Quais de Loire",
    category: "Topographie",
    location: "Tours (37)",
    year: "2024",
    description:
      "MNT haute précision des berges et des quais pour l'étude d'aménagement et de risque inondation.",
    stats: [
      { label: "Linéaire", value: "6 km" },
      { label: "GSD", value: "2 cm/px" },
      { label: "Livrable", value: "MNT + profils" },
    ],
    image: "tours-quais",
    seed: 42,
    hue: 165,
  },
  {
    id: "jardins-de-villandry",
    title: "Jardins à la française",
    category: "Cartographie",
    location: "Villandry (37)",
    year: "2024",
    description:
      "Cartographie de parterres et de plans d'eau pour le suivi paysager et le relevé de l'existant.",
    stats: [
      { label: "Surface", value: "12 ha" },
      { label: "GSD", value: "1,5 cm/px" },
      { label: "Livrable", value: "Orthophoto" },
    ],
    image: "villandry",
    seed: 63,
    hue: 180,
  },
  {
    id: "chateau-amboise",
    title: "Rempart et logis royal",
    category: "Patrimoine",
    location: "Amboise (37)",
    year: "2024",
    description:
      "Relevé 3D de façades et de remparts pour le diagnostic avant restauration.",
    stats: [
      { label: "Points", value: "42 M" },
      { label: "GSD", value: "0,8 cm/px" },
      { label: "Livrable", value: "Nuage LAS" },
    ],
    image: "amboise",
    seed: 78,
    hue: 195,
  },
  {
    id: "cite-royale-loches",
    title: "Cité royale",
    category: "Modélisation 3D",
    location: "Loches (37)",
    year: "2023",
    description:
      "Jumeau numérique d'un donjon et de son enceinte pour l'archivage et la médiation.",
    stats: [
      { label: "Points", value: "75 M" },
      { label: "GSD", value: "1 cm/px" },
      { label: "Livrable", value: "Visualiseur web" },
    ],
    image: "loches",
    seed: 95,
    hue: 170,
  },
];

export const about = {
  name: "Guillaume Fay",
  role: "Télépilote professionnel & photogrammètre",
  bio: [
    "Installé en Touraine, j'ai fondé La Libellule pour mettre la photogrammétrie par drone au service des professionnels du territoire : géomètres, bureaux d'études, collectivités, viticulteurs, exploitants et gestionnaires de patrimoine.",
    "Chaque mission est pensée de bout en bout : préparation du vol, acquisition sécurisée, traitement rigoureux et livrables directement exploitables dans vos outils.",
  ],
  stats: [
    { value: "8+", label: "ans d'expérience" },
    { value: "1 200", label: "hectares cartographiés" },
    { value: "150+", label: "missions réalisées" },
  ],
  certifications: [
    "Télépilote certifié (catégorie Ouverte A1/A2/A3)",
    "Scénarios STS-01 / STS-02",
    "Assurance RC professionnelle",
  ],
};

export type Equipment = {
  name: string;
  detail: string;
  kind: "Drone" | "Capteur" | "GNSS" | "Logiciel";
};

export const equipment: Equipment[] = [
  {
    kind: "Drone",
    name: "DJI Matrice 350 RTK",
    detail: "Plateforme longue endurance, positionnement RTK centimétrique",
  },
  {
    kind: "Capteur",
    name: "Zenmuse P1 (45 MP)",
    detail: "Capteur plein format dédié à la photogrammétrie",
  },
  {
    kind: "Drone",
    name: "DJI Mavic 3 Enterprise",
    detail: "Compact et rapide, idéal pour les sites contraints",
  },
  {
    kind: "GNSS",
    name: "Récepteur GNSS RTK",
    detail: "Points de contrôle au sol et calage des modèles",
  },
  {
    kind: "Logiciel",
    name: "Metashape · Pix4D",
    detail: "Traitement photogrammétrique et génération des nuages",
  },
  {
    kind: "Logiciel",
    name: "QGIS · CloudCompare",
    detail: "Analyse SIG, comparaison de nuages et mise en forme",
  },
];
