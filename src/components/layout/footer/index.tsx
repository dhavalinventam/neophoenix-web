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

                {/* Email Subscription Form */}
                {/* <div className={styles.emailSection}>
                  <form className={styles.emailForm}>
                    <div className={styles.emailInputGroup}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className={styles.emailInput}
                        required
                      />
                      <button type="submit" className={styles.emailButton}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={styles.sendIcon}
                        >
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
          </div>

          <div className={styles.footer_rightColumn_section}>
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
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className={styles.bottomSection}>
          <div className={styles.copyrightContent}>
            <p className={styles.copyrightText}>
              © {year} Neophoenix. All rights reserved. 
            </p>
            <div className={styles.socialIcons}>
              <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="Twitter/X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
