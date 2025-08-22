'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../../../public/logo.png.png';
import Button from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scroll : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.brand}>
          <div className={styles.logoContainer}>
            <div className={styles.logoImage}>
              <Image
                src={logo}
                alt="Neophoenix Logo"
                width={60}
                height={60}
                className={styles.phoenixImage}
              />
            </div>
            <span className={styles.brandText}>NEOPHONIEX</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/services">
            Services
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className={styles.ctaContainer}>
          <Button label="Join Waitlist" />
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNavContent}>
          <Link className={styles.mobileLink} href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link className={styles.mobileLink} href="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link className={styles.mobileLink} href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Button label="Join Waitlist" />
        </nav>
      </div>
    </header>
  );
}
