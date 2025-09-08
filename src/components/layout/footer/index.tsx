import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer Content - Three Column Layout */}
        <div className={styles.mainContent}>
          {/* Left Column - Company Information and Newsletter */}
          <div className={styles.leftColumn}>
            <div className={styles.companySection}>
              <div className={styles.logoSection}>
                <div className={styles.logoContainer}>
                  <div className={styles.logoImage}>
                    <Image
                      src={logo}
                      alt="Neophoenix Logo"
                      width={210}
                      height={60}
                      loading="lazy"
                      className={styles.phoenixImage}
                    />
                  </div>
                </div>
                <p className={styles.companyDescription}>
                  We create digital experiences for brands and companies by using cutting-edge
                  technology and innovative solutions.
                </p>

              </div>
            </div>
          </div>

          <div className={styles.footer_rightColumn_section}>
            <div className={styles.footer_rightColumn_section_inner}>
              {/* Middle Column - Products */}
              <div className={styles.middleColumn}>
                <div className={styles.productsSection}>
                  <h5 className={styles.sectionTitle}>Products</h5>
                  <ul className={styles.linkList}>
                    <li>
                      <Link href="#services" className={styles.link}>
                        RAG System
                      </Link>
                    </li>
                    <li>
                      <Link href="#services" className={styles.link}>
                        Task Prompt AI
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Let's Connect */}
              <div className={styles.rightColumn}>
                <div className={styles.connectSection}>
                  <h5 className={styles.sectionTitle}>Let's Connect</h5>
                  <ul className={styles.linkList}>
                    <li>
                      <Link href="/contact" className={styles.link}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Form */}
            <div className={styles.newsletterSection}>
              <h6 className={styles.newsletterTitle}>Newsletter</h6>
              <p className={styles.newsletterDescription}>
                Stay ahead with insights on enterprise AI.
              </p>
              <form className={styles.newsletterForm}>
                <div className={styles.emailInputGroup}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.emailInput}
                    required
                  />
                  <button type="submit" className={styles.subscribeButton}>
                    <span> Subscribe to Newsletter </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={styles.sendIcon}
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className={styles.bottomSection}>
          <div className={styles.copyrightContent}>
            <p className={styles.copyrightText}>
              © {year} Neophoenix. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.separator}>|</span>
              <Link href="/terms-conditions" className={styles.legalLink}>
                Terms & Conditions
              </Link>
            </div>
            <div className={styles.socialIcons}>
              <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
