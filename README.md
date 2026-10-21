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
- Formulaire de contact : variable `NEXT_PUBLIC_CONTACT_FORM_URL` (URL d'embed Typeform, ex. `https://form.typeform.com/to/XXXXXXXX`)

## Déploiement GitHub Pages

1. Dans le dépôt GitHub : Settings > Pages > Source : **GitHub Actions**.
2. Settings > Secrets and variables > Actions > Variables : ajouter `CONTACT_FORM_URL`.
3. Pousser sur `main` : le workflow `.github/workflows/deploy.yml` lint, build (export statique dans `out/`) et déploie. Le site est servi à la racine du domaine personnalisé défini dans `public/CNAME`.

Sans domaine personnalisé (page de projet `<user>.github.io/<repo>`), définir `NEXT_PUBLIC_BASE_PATH=/<repo>` au build.
