import Image from "next/image";
import { photos, type PhotoId } from "@/lib/photos";
import { asset } from "@/lib/site";

type PhotoProps = {
  id: PhotoId;
  sizes: string;
  priority?: boolean;
  className?: string;
};

// À placer dans un parent `relative` : l'image remplit son conteneur.
export function Photo({ id, sizes, priority, className = "" }: PhotoProps) {
  const photo = photos[id];
  return (
    <Image
      src={asset(photo.src)}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}

// Repères de visée et trame de scan superposés aux photos.
export function TechOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="scanlines absolute inset-0 opacity-40" />
      <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-accent/80" />
      <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-accent/80" />
      <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-accent/80" />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-accent/80" />
    </div>
  );
}
