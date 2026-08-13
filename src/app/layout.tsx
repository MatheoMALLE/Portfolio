import type { Metadata } from "next";
import "@/styles/tokens.css";
import "@/styles/fonts.css";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Mathéo Malle — Ingénieur informatique | CY Tech",
  description:
    "étudiant Ingénieur informatique à CY Tech, Cergy. Je développe des solutions digitales pour les entreprises en Freelance.",
  keywords: [
    "Mathéo Malle",
    "ingénieur informatique",
    "développeur web",
    "développement logiciel",
    "intelligence artificielle",
    "CY Tech",
    "freelance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
