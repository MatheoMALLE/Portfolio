"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
            Projets
            <br />
            sélectionnés
          </h2>
        </FadeUp>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.1}>
              <motion.article
                className={styles.card}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={shared.tagOnDark}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    <a href={project.href} className={styles.primaryLink}>
                      Voir le projet <ExternalLink size={13} />
                    </a>
                    <span className={styles.divider}>|</span>
                    <a href={project.repo} className={styles.secondaryLink}>
                      <GithubIcon size={13} /> Repo
                    </a>
                  </div>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
