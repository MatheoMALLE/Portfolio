import type { Metadata } from "next";
import "@/styles/tokens.css";
import "@/styles/fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathéo Malle — Ingénieur informatique",
  description:
    "étudiant Ingénieur à CY Tech, Cergy. Freelance, je développe des solutions digitales pour les entreprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
