import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { commonsUrl, photos } from "@/lib/photos";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-6 text-sm text-muted">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Logo className="h-6 w-6" />
            <span>
              © {new Date().getFullYear()} {site.name} — {site.baseline}
            </span>
          </div>
          <nav
            className="flex flex-wrap justify-center gap-6"
            aria-label="Pied de page"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/confidentialite"
              className="transition-colors hover:text-foreground"
            >
              Confidentialité
            </Link>
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-foreground"
            >
              Mentions légales
            </Link>
          </nav>
        </div>

        <details className="mt-8 text-xs">
          <summary className="cursor-pointer select-none hover:text-foreground">
            Crédits photographiques (images provisoires)
          </summary>
          <ul className="mt-3 grid gap-1 sm:grid-cols-2">
            {Object.values(photos).map((photo) => (
              <li key={photo.file}>
                <a
                  href={commonsUrl(photo.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {photo.alt}
                </a>{" "}
                — {photo.author}, {photo.license}, Wikimedia Commons
              </li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  );
}
