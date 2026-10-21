import { Compass } from "lucide-react";
import { places } from "@/lib/content";
import { Photo, TechOverlay } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Territory() {
  const [main, ...others] = places;

  return (
    <section id="territoire" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="00"
          eyebrow="Territoire"
          title={
            <>
              Un terrain de jeu :{" "}
              <span className="text-gradient">la Touraine</span>
            </>
          }
          description="Basé à Tours, j'interviens sur toute l'Indre-et-Loire : de la Loire aux coteaux viticoles, des centres historiques aux domaines royaux."
        />

        <div className="grid auto-rows-[200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="sm:col-span-2 lg:row-span-2">
            <PlaceTile
              place={main}
              sizes="(min-width:1024px) 50vw, 100vw"
              large
            />
          </Reveal>
          {others.map((place, i) => (
            <Reveal key={place.name} delay={0.08 * (i + 1)}>
              <PlaceTile place={place} sizes="(min-width:1024px) 25vw, 50vw" />
            </Reveal>
          ))}
          <Reveal delay={0.32} className="h-full">
            <div className="card flex h-full flex-col justify-between p-5">
              <Compass className="h-6 w-6 text-accent" />
              <div>
                <div className="font-serif text-4xl font-medium text-sand">
                  60 km
                </div>
                <p className="mt-1 text-sm leading-snug text-muted">
                  de rayon autour de Tours, sans frais de déplacement. Au-delà,
                  sur devis.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PlaceTile({
  place,
  sizes,
  large = false,
}: {
  place: (typeof places)[number];
  sizes: string;
  large?: boolean;
}) {
  return (
    <figure className="group relative h-full overflow-hidden rounded-xl border border-line">
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Photo
          id={place.image}
          sizes={sizes}
          className="brightness-90 saturate-[.9]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
      <TechOverlay />
      <span className="absolute left-8 top-4 rounded bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur">
        {place.coords}
      </span>
      <figcaption className="absolute inset-x-0 bottom-0 p-6">
        <div
          className={`font-serif font-medium ${large ? "text-3xl" : "text-xl"}`}
        >
          {place.name}
        </div>
        <div className="mt-0.5 text-sm text-foreground/70">{place.label}</div>
      </figcaption>
    </figure>
  );
}
