import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.main}>
        <h1>Build faster with Next.js 14</h1>
        <p>TypeScript, SCSS Modules, and reusable components out of the box.</p>
        <div className={styles.ctas}>
          <Link className={styles.primary} href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
