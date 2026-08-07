"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import shared from "@/styles/shared.module.css";
import styles from "./Contact.module.css";
import FadeUp from "./FadeUp";
import { GithubIcon, LinkedinIcon } from "./icons";

const socials = [
  { Icon: GithubIcon, label: "GitHub", href: "https://github.com/MatheoMALLE" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/math%C3%A9o-malle/" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <FadeUp>
          <p className={shared.eyebrow}>Contact</p>
          <h2 className={`${shared.sectionTitle} ${styles.title}`}>
            Travaillons
            <br />
            ensemble
          </h2>
          <p className={styles.description}>
            Disponible pour des missions freelance, des collaborations à
            temps plein ou simplement discuter d&apos;un projet sympa.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <motion.a
            href="mailto:matheo.malle@gmail.com"
            className={`${shared.buttonPrimary} ${styles.emailButton}`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.18 }}
          >
            <Mail size={18} />
            matheo.malle@gmail.com
          </motion.a>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className={styles.social}>
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={shared.buttonOutline}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.18 }}
              >
                <Icon size={15} />
                {label}
              </motion.a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
