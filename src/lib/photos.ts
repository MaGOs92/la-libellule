// Photos provisoires issues de Wikimedia Commons, à remplacer par vos propres prises de vue.

export type PhotoId =
  | "loire-tours"
  | "tours-pont-wilson"
  | "tours-quais"
  | "vouvray"
  | "civray"
  | "chenonceau"
  | "villandry"
  | "amboise"
  | "amboise-2"
  | "loches"
  | "chinon";

export type PhotoInfo = {
  src: string;
  alt: string;
  author: string;
  license: string;
  file: string;
};

const photo = (
  id: PhotoId,
  alt: string,
  author: string,
  license: string,
  file: string,
): [PhotoId, PhotoInfo] => [
  id,
  { src: `/images/touraine/${id}.jpg`, alt, author, license, file },
];

export const photos = Object.fromEntries([
  photo(
    "loire-tours",
    "La Loire vue depuis le pont Saint-Symphorien à Tours",
    "Gzen92",
    "CC BY-SA 4.0",
    "La Loire depuis le pont Saint-Symphorien (Tours) (1).jpg",
  ),
  photo(
    "tours-pont-wilson",
    "Le pont Wilson sur la Loire à Tours",
    "Benjamin Smith",
    "CC BY-SA 4.0",
    "Tours - Pont Wilson - 01.jpg",
  ),
  photo(
    "tours-quais",
    "Les quais de Loire à Tours",
    "Benjamin Smith",
    "CC BY-SA 4.0",
    "Tours - Quais de Loire - 1.jpg",
  ),
  photo(
    "vouvray",
    "Vignes de Vouvray au débourrement",
    "Peter Dutton",
    "CC BY 2.0",
    "Vouvray Vineyard after budbreak.jpg",
  ),
  photo(
    "civray",
    "Rangs de vigne à Civray-de-Touraine",
    "Civray-de-touraine",
    "CC BY-SA 4.0",
    "Vignoble à Civray de Touraine.jpg",
  ),
  photo(
    "chenonceau",
    "Vue aérienne du château de Chenonceau sur le Cher",
    "Lieven Smits",
    "CC BY-SA 3.0",
    "Chenonceau castle, aerial view.jpg",
  ),
  photo(
    "villandry",
    "Vue aérienne du château et des jardins de Villandry",
    "Carsten Steger",
    "CC BY-SA 4.0",
    "Aerial image of Château de Villandry (view from the southeast).jpg",
  ),
  photo(
    "amboise",
    "Le château d'Amboise",
    "Gzen92",
    "CC BY-SA 4.0",
    "Château (Amboise) (3).jpg",
  ),
  photo(
    "amboise-2",
    "Le château d'Amboise surplombant la Loire",
    "Janodile",
    "CC BY-SA 3.0",
    "Amboise (37) Le Château.jpg",
  ),
  photo(
    "loches",
    "La cité royale de Loches",
    "Krzysztof Golik",
    "CC BY-SA 4.0",
    "Castle of Loches 02.jpg",
  ),
  photo(
    "chinon",
    "Chinon et la Vienne vus depuis le château",
    "Nono vlf",
    "CC BY-SA 4.0",
    "Chinon, la Vienne (vue du château).JPG",
  ),
]) as Record<PhotoId, PhotoInfo>;

export const commonsUrl = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`;
