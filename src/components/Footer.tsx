import { navLinks, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Logo className="h-6 w-6" />
          <span>
            © {new Date().getFullYear()} {site.name} — {site.baseline}
          </span>
        </div>
        <nav className="flex gap-6" aria-label="Pied de page">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
