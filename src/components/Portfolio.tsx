"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { projectCategories, projects } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TopoVisual } from "./TopoVisual";

export function Portfolio() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("Tous");
  const visible = category === "Tous" ? projects : projects.filter((p) => p.category === category);

  return (
    <section id="projets" className="scroll-mt-16 border-y border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Projets réalisés"
          title={
            <>
              Quelques <span className="text-gradient">réalisations</span>
            </>
          }
          description="Un aperçu de missions menées pour des industriels, des collectivités et des exploitants."
        />

        <Reveal className="mb-10 flex flex-wrap gap-2" delay={0.1}>
          {projectCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                category === item
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-line text-muted hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="card group overflow-hidden"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <TopoVisual
                    seed={project.seed}
                    hue={project.hue}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-accent shadow-[0_0_16px_2px] shadow-accent/70" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-background/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-1.5 text-xs text-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location} · {project.year}
                  </div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                  <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                          {stat.label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-medium">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
