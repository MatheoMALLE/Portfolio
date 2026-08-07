import Image from "next/image";
import { aboutStats } from "@/lib/data";
import shared from "@/styles/shared.module.css";
import styles from "./About.module.css";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        <FadeUp>
          <div className={styles.photoWrap}>
            <div className={styles.photo}>
              <Image
                src="/CV.png"
                alt="Portrait de Théo Laurent, développeur full-stack basé à Paris"
                fill
                sizes="(min-width: 768px) 20rem, 18rem"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/*<div className={styles.statCard}>
              <div className={styles.statCardValue}>5+</div>
              <div className={styles.statCardLabel}>ans d&apos;expérience</div>
            </div>*/}
          </div>
        </FadeUp>

        <div>
          <FadeUp>
            <p className={shared.eyebrow}>À propos</p>
            <h2 className={shared.sectionTitle}>
              Passionné par
              <br />
              le code et l&apos;intelligence artificielle
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className={styles.body}>
              Actuellement étudiant en deuxième année d&apos;école d&apos;ingénieur à CY Tech,
              je me spécialise en génie informatique et je développe chaque jour mes
              compétences autour du développement logiciel et des nouvelles technologies.
            </p>
            <p className={styles.bodySecond}>
              Passionné par l&apos;intelligence artificielle, j&apos;aime expérimenter,
              apprendre et transformer mes idées en projets concrets.
              Tu retrouveras ici une sélection des projets que j&apos;ai développés,
              de mes expérimentations personnelles aux réalisations techniques plus ambitieuses.
            </p>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className={styles.statsGrid}>
              {aboutStats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <div className={styles.statItemValue}>{stat.value}</div>
                  <div className={styles.statItemLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
