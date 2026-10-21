import { ArrowRight, Crosshair, MapPin } from "lucide-react";
import { HeroBackdrop } from "./HeroBackdrop";
import { PointCloud } from "./PointCloud";
import { Reveal } from "./Reveal";

const hud = [
  { label: "Précision", value: "± 2 cm" },
  { label: "GSD", value: "1 cm/px" },
  { label: "Capteur", value: "45 MP" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-center overflow-hidden"
    >
      <HeroBackdrop />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-background/90 via-background/40 to-background/0" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background/60 via-transparent to-background" />
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_50%,black_20%,transparent_75%)]" />
      <div className="scanlines absolute inset-0 -z-10 opacity-30" />
      <div className="animate-sweep pointer-events-none absolute inset-y-0 left-0 -z-10 w-px bg-accent shadow-[0_0_24px_3px] shadow-accent/60" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-background/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-sand backdrop-blur">
              <MapPin className="h-3.5 w-3.5" />
              Touraine · Indre-et-Loire (37)
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Le Val de Loire vu du ciel,{" "}
              <span className="text-gradient">mesuré au centimètre.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
              Photogrammétrie et cartographie par drone autour de Tours :
              vignobles, berges de Loire, patrimoine et chantiers. Des données
              précises, directement exploitables par vos équipes.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3 font-medium text-background transition hover:brightness-110"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-background/40 px-6 py-3 font-medium backdrop-blur transition hover:border-accent/50"
            >
              Voir les projets
            </a>
          </Reveal>
        </div>

        <Reveal
          delay={0.4}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-widest"
        >
          {hud.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-foreground/60"
            >
              <Crosshair className="h-3.5 w-3.5 text-accent" />
              {item.label}
              <span className="text-foreground">{item.value}</span>
            </div>
          ))}
        </Reveal>

        <Reveal
          delay={0.5}
          className="absolute bottom-16 right-6 hidden w-80 lg:block"
        >
          <div className="overflow-hidden rounded-xl border border-line bg-background/60 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground/70">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                MNT · Val de Loire
              </span>
              <span className="text-accent">Live</span>
            </div>
            <PointCloud className="block h-48 w-full" zoom={0.6} />
            <div className="flex justify-between border-t border-line px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              <span>12,4 M pts</span>
              <span>RTK fix</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
