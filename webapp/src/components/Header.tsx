"use client";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Neophoenix
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
