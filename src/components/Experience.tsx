"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import shared from "@/styles/shared.module.css";
import styles from "./Experience.module.css";
import FadeUp from "./FadeUp";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <p className={shared.eyebrow}>Parcours</p>
          <h2 className={shared.sectionTitle}>
            Expérience
            <br />
            professionnelle
          </h2>
        </FadeUp>

        <ol className={styles.timeline}>
          {experiences.map((exp, i) => (
            <FadeUp key={exp.role} delay={i * 0.1}>
              <li className={styles.item}>
                <motion.span
                  className={styles.marker}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                />
                <div className={styles.heading}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <div className={styles.meta}>
                  <span>{exp.period}</span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={shared.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
