# Portfolio — Mathéo Malle

Portfolio professionnel de **Mathéo Malle**, étudiant ingénieur informatique à CY Tech (Cergy), construit avec **Next.js 16 (App Router)**, **TypeScript**, du **CSS pur (CSS Modules)** et **Framer Motion** pour les animations. Le site présente son parcours, ses compétences et ses projets, avec une maquette soignée (vagues animées entre les sections, anneaux flottants dans le hero, révélations au scroll), chaque section principale occupant toute la hauteur de l'écran.

🔗 **Démo en ligne :** [portfolio-matheo8.vercel.app](https://portfolio-matheo8.vercel.app)

## 🧭 Contenu du site

- **À propos** — présentation, parcours et statistiques (projets suivis, années d'expérience, mois en entreprise)
- **Compétences** — organisées par catégorie : Programming, Web Development, Data & Databases, DevOps, Tools, Design
- **Expérience professionnelle** — postes occupés (IA/Web développeur, Président et Responsable du suivi des études chez CY Junior Engineering)
- **Projets réalisés** — sélection de projets avec liens vers les dépôts GitHub (CyBreathe, Conception d'un processeur, CyNapse, Coin-Rush, C-Wire, Ramsauer-Townsend Effect, Cosmic-Yonder...)
- **Contact** — formulaire de contact et liens vers GitHub / LinkedIn

## 🛠️ Roadmap

- mise en place du projet Next.js (App Router) et de la structure de base
- intégration du design system (tokens de couleurs, typographies, espacements)
- développement des sections plein écran (Hero, About, Skills, Experience, Projects, Contact)
- ajout des animations (Framer Motion) et des révélations au scroll
- ajout des vagues animées de transition entre les sections
- déploiement sur Vercel

## 🧰 Skills required

- Next.js / React
- TypeScript
- CSS Modules
- Framer Motion

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # layout racine + métadonnées SEO
│   ├── page.tsx             # assemble toutes les sections + vagues de transition
│   └── globals.css           # reset + styles de base uniquement
├── styles/
│   ├── tokens.css             # couleurs, polices, espacements, ombres — source unique de vérité
│   ├── fonts.css                # import des polices (Bricolage Grotesque + DM Sans)
│   └── shared.module.css         # classes réutilisées entre les sections
├── components/
│   ├── FadeUp.tsx               # révélation au scroll réutilisée par toutes les sections
│   ├── Wave.tsx                  # vague SVG animée entre deux sections
│   ├── icons.tsx                  # icônes GitHub / LinkedIn
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx                 # grille de projets avec images (next/image)
│   └── Contact.tsx                   # inclut la barre de pied de page
└── lib/
    └── data.ts                       # tout le contenu texte du site
```

## 📖 Documentation

### Installation et lancement en local

```bash
npm install
npm run dev
```

Le site est ensuite accessible sur [http://localhost:3000](http://localhost:3000).

### Philosophie CSS

Le style est complètement séparé du JSX : pas de classes utilitaires dans le markup, uniquement des classes sémantiques importées depuis un fichier `.module.css` dédié à chaque composant.

- `src/styles/tokens.css` : variables globales (couleurs, polices, espacements) — modifier ici change tout le site.
- `src/app/globals.css` : reset navigateur et styles de base des balises HTML.
- `src/styles/shared.module.css` : classes communes à plusieurs sections.
- `ComponentName.module.css` : styles propres à un composant, scopés automatiquement par Next.js.

### Personnaliser le contenu

Tout le texte (expériences, compétences, projets) est centralisé dans `src/lib/data.ts`. Les images de démonstration (photo de profil, captures d'écran de projets) sont à remplacer par les visuels réels, hébergés dans `public/`.

### Déploiement

1. Pousser le projet sur un dépôt GitHub.
2. Importer le dépôt sur [vercel.com](https://vercel.com) — Vercel détecte automatiquement Next.js.
3. Chaque `git push` redéploie automatiquement le site.

## 👤 Auteur

**Mathéo Malle** — Étudiant ingénieur informatique, CY Tech (Cergy)

- GitHub : [MatheoMALLE](https://github.com/MatheoMALLE)
- LinkedIn : [mathéo-malle](https://www.linkedin.com/in/math%C3%A9o-malle/)
- Email : [matheo.malle@gmail.com](mailto:matheo.malle@gmail.com)
