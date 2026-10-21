import { ArrowRight, Crosshair, Radio } from "lucide-react";
import { site } from "@/lib/site";
import { PointCloud } from "./PointCloud";
import { Reveal } from "./Reveal";

const hud = [
  { label: "Précision", value: "± 2 cm" },
  { label: "GSD", value: "1 cm/px" },
  { label: "Fix", value: "RTK" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh items-center overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -left-40 top-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent-2/10 blur-[120px]" />
      <PointCloud className="absolute inset-0 -z-10 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent backdrop-blur">
              <Radio className="h-3.5 w-3.5" />
              {site.baseline}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Le terrain en <span className="text-gradient">trois dimensions</span>, au centimètre près.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Orthophotos, modèles 3D, MNT et volumétrie réalisés par drone. Des données fiables et
              directement exploitables pour vos projets d&apos;aménagement, de construction et
              d&apos;exploitation.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-background shadow-[0_0_30px_-4px] shadow-accent/60 transition hover:brightness-110"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3 font-medium backdrop-blur transition hover:border-accent/50"
            >
              Voir les projets
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-widest">
          {hud.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-muted">
              <Crosshair className="h-3.5 w-3.5 text-accent" />
              {item.label}
              <span className="text-foreground">{item.value}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
