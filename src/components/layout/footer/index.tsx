import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {year} Neophoenix</span>
        <span>Built with Next.js 14</span>
      </div>
    </footer>
  );
}
