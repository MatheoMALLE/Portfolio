"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <a href="#top" className={scrolled ? styles.logoScrolled : styles.logo}>
        MM<span className={styles.logoDot}>.</span>
      </a>

      <ul className={styles.links}>
        {nav.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={scrolled ? styles.linkScrolled : styles.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:matheo.malle@gmail.com" className={scrolled ? styles.ctaScrolled : styles.cta}>
        <Mail size={14} />
        Me contacter
      </a>

      <button
        className={scrolled ? styles.menuButtonScrolled : styles.menuButton}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className={styles.mobilePanel}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={styles.mobileLink}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:theo.laurent@dev.fr"
            onClick={() => setOpen(false)}
            className={styles.mobileCta}
          >
            <Mail size={16} />
            Me contacter
          </a>
        </div>
      )}
    </motion.header>
  );
}
