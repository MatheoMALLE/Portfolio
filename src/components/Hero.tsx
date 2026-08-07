"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import shared from "@/styles/shared.module.css";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.dotGrid} aria-hidden="true" />

      <motion.div
        className={styles.ringLarge}
        animate={{ scale: [1, 1.04, 1], rotate: [0, 4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className={styles.ringMedium}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        aria-hidden="true"
      />
      <motion.div
        className={styles.ringSmall}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        aria-hidden="true"
      />

      <div className={styles.content}>
        {/*<motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className={styles.badge}
        >
          <span className={styles.badgeDot} />
          Disponible pour des missions freelance
        </motion.div>*/}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className={styles.title}
        >
          Mathéo
          <br />
          <span className={styles.titleMuted}>Malle</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={styles.subtitle}
        >
          Ingénieur Informatique — je transforme des idées en{" "}
          <span className={styles.subtitleStrong}>expériences digitales</span> modernes, pensées pour être{" "}
          <span className={styles.subtitleStrong}>utiles</span> et agréables à utiliser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65 }}
          className={styles.actions}
        >
          <a href="#projects" className={shared.buttonPrimaryOnDark}>
            Voir mes projets
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className={shared.buttonGhostOnDark}>
            Me contacter
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scrollIndicator}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Défiler vers la section suivante"
      >
        <svg width="26" height="38" viewBox="0 0 26 38" fill="none">
          <rect
            x="1.5"
            y="1.5"
            width="23"
            height="35"
            rx="11.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <motion.rect
            x="12"
            y="8"
            width="2"
            height="7"
            rx="1"
            fill="currentColor"
            animate={{ y: [0, 10, 0], opacity: [0.9, 0.2, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.a>
    </section>
  );
}
