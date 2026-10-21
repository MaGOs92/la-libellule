import { Check } from "lucide-react";
import { services, workflow } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="prestations" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          eyebrow="Prestations"
          title={
            <>
              De l&apos;acquisition au{" "}
              <span className="text-gradient">livrable</span>
            </>
          }
          description="Une offre complète de relevés par drone, adaptée à la taille et aux contraintes de votre site."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 0.08}
              className="h-full"
            >
              <article className="card flex h-full flex-col p-6 hover:-translate-y-1">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-sm">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Méthode de travail
          </h3>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <li key={item.step} className="bg-surface p-6">
                <span className="font-mono text-sm text-accent">
                  {item.step}
                </span>
                <h4 className="mt-3 text-lg font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
