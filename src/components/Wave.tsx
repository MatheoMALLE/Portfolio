"use client";

import { motion } from "framer-motion";
import styles from "./Wave.module.css";

export default function Wave({
  topColor,
  bottomColor,
}: {
  topColor: string;
  bottomColor: string;
}) {
  return (
    <div className={styles.wave} style={{ background: topColor }} aria-hidden="true">
      <motion.div
        className={styles.track}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      >
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox="0 0 1440 96"
            height={96}
            preserveAspectRatio="none"
            className={styles.strip}
          >
            <path
              fill={bottomColor}
              d="M0,48 C120,86 240,10 360,48 C480,86 600,10 720,48 C840,86 960,10 1080,48 C1200,86 1320,10 1440,48 L1440,96 L0,96 Z"
            />
          </svg>
        ))}
      </motion.div>
    </div>
  );
}
