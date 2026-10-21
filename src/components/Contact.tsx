import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const infos = [
  {
    icon: Mail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  { icon: MapPin, label: "Zone d'intervention", value: site.zone },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-line bg-surface/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title={
            <>
              Parlons de votre <span className="text-gradient">projet</span>
            </>
          }
          description="Décrivez votre besoin : je reviens vers vous avec une proposition sous 48 h."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="space-y-4 lg:col-span-2">
            {infos.map((info) => {
              const content = (
                <>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {info.label}
                    </div>
                    <div className="truncate font-medium">{info.value}</div>
                  </div>
                </>
              );
              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="card flex items-center gap-4 p-4"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={info.label}
                  className="card flex items-center gap-4 p-4"
                >
                  {content}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="card overflow-hidden">
              {site.contactFormUrl ? (
                <>
                  <iframe
                    src={site.contactFormUrl}
                    title="Formulaire de contact"
                    loading="lazy"
                    className="block h-[560px] w-full border-0 bg-surface-2"
                  />
                  <a
                    href={site.contactFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-t border-line py-3 text-sm text-muted transition-colors hover:text-accent"
                  >
                    Ouvrir le formulaire dans un nouvel onglet
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </>
              ) : (
                <div className="bg-grid flex h-[560px] flex-col items-center justify-center gap-3 p-8 text-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    Emplacement du formulaire
                  </span>
                  <p className="max-w-sm text-muted">
                    Définissez{" "}
                    <code className="font-mono text-foreground">
                      NEXT_PUBLIC_CONTACT_FORM_URL
                    </code>{" "}
                    avec l&apos;URL d&apos;embed de votre formulaire (Typeform,
                    Tally…) pour l&apos;afficher ici.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
