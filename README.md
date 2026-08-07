# Portfolio — Théo Laurent

Portfolio pro construit avec **Next.js 16 (App Router)**, **TypeScript**, du **CSS pur (CSS Modules)** et **Framer Motion** pour les animations — reproduction fidèle de la maquette Figma fournie (palette bleu `#1752E8` / navy `#0A1628`, polices Bricolage Grotesque + DM Sans, vagues animées entre sections, anneaux flottants dans le hero, révélations au scroll). Chaque section occupe toute la hauteur de l'écran.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/
    layout.tsx           # layout racine + métadonnées SEO
    page.tsx              # assemble toutes les sections + vagues de transition
    globals.css            # reset + styles de base uniquement (pas de règles de composant ici)
  styles/
    tokens.css              # toutes les couleurs, polices, espacements, ombres — une seule source de vérité
    fonts.css                # import Google Fonts (Bricolage Grotesque + DM Sans), chargé côté client
    shared.module.css        # classes réutilisées entre sections (conteneur plein écran, boutons, tags, titres)
  components/
    FadeUp.tsx               # révélation au scroll réutilisée par toutes les sections
    Wave.tsx    + Wave.module.css     # vague SVG animée entre deux sections
    icons.tsx                 # icônes GitHub/LinkedIn (absentes de la version de lucide-react installée)
    Navbar.tsx  + Navbar.module.css
    Hero.tsx    + Hero.module.css
    About.tsx   + About.module.css
    Skills.tsx  + Skills.module.css
    Experience.tsx + Experience.module.css
    Projects.tsx + Projects.module.css   # grille de projets avec vraies images (next/image)
    Contact.tsx + Contact.module.css     # inclut la barre de pied de page
  lib/
    data.ts               # tout le contenu texte centralisé ici
```

### Sections plein écran

Chaque section principale (`Hero`, `About`, `Skills`, `Experience`, `Projects`, `Contact`) utilise la classe partagée `.fullSection` (dans `shared.module.css`) : `min-height: 100dvh` + contenu centré verticalement. Une section au contenu plus long que l'écran (ex. Experience avec beaucoup d'expériences) s'étend naturellement au-delà de cette hauteur minimale — c'est le comportement voulu.

### Philosophie CSS

Le style est **complètement séparé du JSX** : aucune classe utilitaire (type Tailwind) n'apparaît dans le markup, seulement des noms de classes sémantiques (`styles.card`, `styles.cardTitle`, etc.) importés depuis un fichier `.module.css` dédié à chaque composant.

- **`src/styles/tokens.css`** — variables CSS globales (couleurs, polices, espacements, rayons, ombres). Change une valeur ici, elle se répercute partout.
- **`src/app/globals.css`** — reset navigateur + styles des balises HTML de base (`body`, `h1`, `a`, etc.), rien de spécifique à un composant.
- **`src/styles/shared.module.css`** — classes réutilisées par plusieurs sections (conteneurs, boutons, badges, titres de section) pour éviter de dupliquer les mêmes règles partout.
- **`ComponentName.module.css`** — tout le reste, propre à un seul composant. Les noms de classes sont scopés automatiquement par Next.js (pas de collision possible entre composants).

Pour changer une couleur du site : modifie `src/styles/tokens.css`. Pour changer la mise en page d'une section précise : ouvre son fichier `.module.css` à côté du composant.

## Personnaliser le contenu

Tout le texte (expériences, compétences, projets, statistiques) est dans **`src/lib/data.ts`** — modifie ce fichier plutôt que les composants pour mettre à jour le contenu.

Remplace aussi :
- La photo dans `About.tsx` (actuellement une photo Unsplash de démo)
- Les images de projets dans `src/lib/data.ts` (champ `image` de chaque projet, actuellement des photos Unsplash de démo) — remplace par tes vraies captures d'écran hébergées dans `public/`
- Le mail et les liens GitHub/LinkedIn dans `Contact.tsx`

## Polices

Contrairement à la version précédente, les polices (**Bricolage Grotesque** + **DM Sans**) sont déjà en place et fonctionnelles : elles sont chargées via un `@import` Google Fonts dans `src/styles/fonts.css`, résolu par le navigateur de la personne qui visite le site. Aucune configuration supplémentaire n'est nécessaire, y compris dans cet environnement de génération sans accès réseau au build.

Si tu préfères un jour passer à `next/font/google` (polices auto-hébergées, zéro requête externe), remplace le contenu de `fonts.css` par :

```tsx
// src/app/layout.tsx
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
```

## Déployer gratuitement

1. Pousse ce dossier sur un repo GitHub
2. Va sur [vercel.com](https://vercel.com), connecte ton compte GitHub
3. Importe le repo → Vercel détecte Next.js automatiquement → Deploy

Chaque `git push` redéploiera automatiquement.
