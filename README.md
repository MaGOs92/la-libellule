# La Libellule

Site vitrine statique (Next.js, Tailwind, Framer Motion) pour une activité de photogrammétrie et cartographie par drone.

## Développement

```bash
npm install
npm run dev
```

## Contenu à remplacer

- Textes, prestations, projets, matériel : `src/lib/content.ts`
- Nom, e-mail, téléphone : `src/lib/site.ts`
- Formulaire de contact (Tally) : `contactFormUrl` et `contactFormShareUrl` dans `src/lib/site.ts`

## Déploiement GitHub Pages

1. Dans le dépôt GitHub : Settings > Pages > Source : **GitHub Actions**.
2. Pousser sur `main` : le workflow `.github/workflows/deploy.yml` lint, build (export statique dans `out/`) et déploie. Le site est servi à la racine du domaine personnalisé défini dans `public/CNAME`.

Sans domaine personnalisé (page de projet `<user>.github.io/<repo>`), définir `NEXT_PUBLIC_BASE_PATH=/<repo>` au build.
