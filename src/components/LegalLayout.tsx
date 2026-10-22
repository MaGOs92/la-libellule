import { Footer } from "./Footer";
import { Header } from "./Header";

type LegalLayoutProps = {
  title: string;
  updatedAt: string;
  sections: { title: string; body: React.ReactNode }[];
};

export function LegalLayout({ title, updatedAt, sections }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24 pt-32 sm:pt-40">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Informations légales
        </p>
        <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-muted">Dernière mise à jour : {updatedAt}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <section key={section.title}>
              <h2 className="mb-3 font-serif text-2xl font-medium">
                <span className="mr-3 font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div className="space-y-3 leading-relaxed text-foreground/80 [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
