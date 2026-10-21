import { Award, Cpu, Plane, Radar, Satellite, Wrench } from "lucide-react";
import { about, equipment, type Equipment } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const kindIcon: Record<Equipment["kind"], typeof Plane> = {
  Drone: Plane,
  Capteur: Radar,
  GNSS: Satellite,
  Logiciel: Cpu,
};

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="À propos"
          title={
            <>
              Un pilote, une <span className="text-gradient">méthode</span>, du matériel de pointe
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card p-6">
              <div className="relative mb-6 flex aspect-square max-w-[14rem] items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface-2">
                <div className="bg-grid absolute inset-0" />
                <span className="relative font-mono text-xs uppercase tracking-widest text-muted">
                  Photo
                </span>
              </div>
              <h3 className="text-xl font-semibold">{about.name}</h3>
              <p className="mt-1 text-accent">{about.role}</p>
              {about.bio.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm">
                {about.certifications.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <Reveal className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-surface p-5 text-center sm:p-6">
                  <div className="text-gradient text-3xl font-semibold sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
                <Wrench className="h-4 w-4 text-accent" />
                Matériel & logiciels
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {equipment.map((item) => {
                  const Icon = kindIcon[item.kind];
                  return (
                    <li key={item.name} className="card flex gap-4 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          {item.kind}
                        </div>
                        <div className="font-medium">{item.name}</div>
                        <p className="mt-0.5 text-sm leading-snug text-muted">{item.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
