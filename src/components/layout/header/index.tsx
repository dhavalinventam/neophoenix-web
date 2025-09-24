'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../../../public/logo.png';
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

  // Handle smooth scrolling to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  // Handle Custom AI Solutions button click
  const handleCustomAIClick = () => {
    const element = document.querySelector('#personalized-wishlist');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

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
                width={200}
                height={57}
                priority
                className={styles.phoenixImage}
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link className={styles.link} href="/" onClick={(e) => handleNavClick(e, '/')}>
            Home
          </Link>
          <Link className={styles.link} href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className={styles.ctaContainer}>
          <Button label="Custom AI Solutions" onClick={handleCustomAIClick} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          data-mobile-menu
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`} data-mobile-menu>
        <nav className={styles.mobileNavContent}>
          <Link className={styles.mobileLink} href="/" onClick={(e) => handleNavClick(e, '/')}>
            Home
          </Link>
          <Link className={styles.mobileLink} href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
            Contact
          </Link>
          <Button label="Custom AI Solutions" onClick={handleCustomAIClick} />
        </nav>
      </div>
    </header>
  );
}
