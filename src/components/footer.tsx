import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBar}>
        <span>© {new Date().getFullYear()} Mathéo Malle</span>
        <span>Site réalisé par un professionnel, ne faites pas ça chez vous.</span>
        <span>Cergy, France.</span>
      </div>
    </footer>
  );
}