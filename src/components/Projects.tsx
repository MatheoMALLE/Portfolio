"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import shared from "@/styles/shared.module.css";
import styles from "./Projects.module.css";
import FadeUp from "./FadeUp";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (  
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <p className={shared.eyebrowOnDark}>Réalisations</p>
          <h2 className={shared.sectionTitleOnDark}>
            Projets réalisés
          </h2>
        </FadeUp>

        <div className={styles.grid}>
          {projects.map((project, i) => (



            <FadeUp key={project.title} delay={i * 0.06}>
              <div className={styles.card} aria-label={project.title}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={75}
                  className={styles.image}
                />

                <div className={styles.overlay}>
                  <span className={styles.overlayTitle}>{project.title}</span>

                  <div className={styles.overlayTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.overlayTag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.overlayLink}>
                    <a href={project.href} className={styles.primaryLink} style={{ pointerEvents: "none" }}> {/*a suprimer + CSS pour réactiver le lien du projet*/}
                      <span className={styles.stretchedLinkText}>
                        Voir le projet <ExternalLink size={13} />
                      </span>
                      <span className={styles.stretchedLink} />
                    </a>

                    {project.repo?.trim() && (
                      <>
                        <span className={styles.divider}>|</span>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.secondaryLink}
                        >
                          <GithubIcon size={13} /> Repo
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
