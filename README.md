# Portfolio — Mathéo Malle

Creation of my portfolio, built using **Next.js** for the animations.
The site showcases my background, my skills, and my projects.

🔗 **The Online Demo:** [portfolio-matheo8.vercel.app](https://portfolio-matheo8.vercel.app)

## 🛠️ Roadmap
- Setting up the Next.js project (App Router) and the basic structure
- Integrating the system design (color tokens, fonts, spacing)
- Developing the sections (Hero, About, Skills, Experience, Projects, Contact)
- Adding animations and scroll-based reveal effects
- Deploying to Vercel

## 🧰 Skills required
- Next.js / React
- TypeScript
- CSS Modules
- Framer Motion

## 🧭 Site Content
- **About** — introduction, background, and statistics (projects worked on, years of experience, months at companies)
- **Skills** — organized by category: Programming, Web Development, Data & Databases, DevOps, Tools, Design
- **Professional Experience** — positions held (AI/Web Developer, President and Head of Academic Monitoring at CY Junior Engineering)
- **Completed Projects** — selection of projects with links to GitHub repositories
- **Contact** — contact form and links to social media
---
## 📖 Documentation
### Local Installation and Launch
```bash
npm install
npm run dev
```
The site can then be accessed at [http://localhost:3000](http://localhost:3000).

### Customize the Content
All text (experience, skills, projects) is centralized in `src/lib/data.ts`.
Images (profile photo, project screenshots) are hosted in `public/`.

### Deployment
1. Push the project to a GitHub repository.
3. Each `git push` automatically redeploys the site to Vercel.

## 📁 Project Structure
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
