"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Layers, Monitor, Wrench, Navigation} from "lucide-react";
import { skillGroups } from "@/lib/data";
import shared from "@/styles/shared.module.css";
import styles from "./Skills.module.css";
import FadeUp from "./FadeUp";

const icons = {
  monitor: Monitor,
  database: Database,
  cloud: Cloud,
  layers: Layers,
  wrench: Wrench,
  navigation: Navigation,
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <p className={shared.eyebrowOnDark}>Stack technique</p>
          <h2 className={shared.sectionTitleOnDark}>Mes compétences</h2>
        </FadeUp>

        <div className={styles.grid}>
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <FadeUp key={group.title} delay={i * 0.09}>
                <motion.div
                  className={styles.card}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.cardIcon}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.cardTitle}>{group.title}</h3>
                  <div className={styles.tags}>
                    {group.tags.map((tag) => (
                      <span key={tag} className={shared.tagOnDark}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
