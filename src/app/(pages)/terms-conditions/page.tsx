'use client';

import styles from './page.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default function TermsConditionsPage() {
  return (
    <>
      <div className={`${styles.termsContainer} hero`}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <Container>
            <div className={styles.heroContent}>
              <div className={styles.headline}>
                <h1 className={styles.title}>Terms & Conditions</h1>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Content */}
        <div className={styles.mainSection}>
          <Container>
              <div className={styles.mainContent}>
                <p className={styles.description}>
                  These Terms & Conditions (“Terms”, “Agreement”) govern your use of our website <b><a href="https://www.neophoenix.ai" target="_blank">www.neophoenix.ai</a></b> and services provided by Neophoenix. By accessing or using our website, you agree to these Terms.
                </p>

                {/* Information 1 */}

                <h2 className={styles.sectionTitle}>1. Use of Website</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.list}>
                    <li>You must be at least 18 years old to use our services.</li>
                    <li>You agree to use our website only for lawful purposes and not to engage in fraudulent, harmful, or malicious activity.</li>
                  </ul>
                </div>

                {/* Information 2 */}

                <h2 className={styles.sectionTitle}>2. Intellectual Property</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.list}>
                    <li>All content, design, trademarks, logos, software, and materials on this website are the property of Neophoenix and are protected by copyright and intellectual property laws.</li>
                    <li>You may not copy, reproduce, distribute, or create derivative works without our prior written consent.</li>
                  </ul>
                </div>

                {/* Information 3 */}

                <h2 className={styles.sectionTitle}>3. User Accounts</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.list}>
                    <li>If you create an account, you are responsible for maintaining confidentiality of login details.</li>
                    <li>You must notify us immediately of any unauthorized use of your account.</li>
                    <li>We reserve the right to suspend or terminate accounts at our discretion.</li>
                  </ul>
                </div>

                {/* Information 4 */}

                <h2 className={styles.sectionTitle}>4. Purchases & Payments</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.list}>
                    <li>All purchases are subject to availability and acceptance.</li>
                    <li>You agree to provide accurate billing and payment details.</li>
                    <li>We use secure third-party payment processors.</li>
                  </ul>
                </div>

                {/* Information 5 */}

                <h2 className={styles.sectionTitle}>5. Prohibited Activities</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    You agree not to:
                  </p>
                  <ul className={styles.list}>
                    <li>Engage in hacking, scraping, or exploiting the website.</li>
                    <li>Upload harmful or malicious content (viruses, malware).</li>
                    <li>Infringe on intellectual property rights.</li>
                    <li>Use automated tools (bots) without permission.</li>
                  </ul>
                </div>

                {/* Information 6 */}

                <h2 className={styles.sectionTitle}>6. Disclaimer of Warranties</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.list}>
                    <li>Our services are provided on an “as is” and “as available” basis.</li>
                    <li>We make no warranties that the site will be uninterrupted, error-free, or secure.</li>
                  </ul>
                </div>

                {/* Information 7 */}

                <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.list}>
                    <li>Neophoenix shall not be liable for any indirect, incidental, or consequential damages arising from use of our services.</li>
                    <li>Our total liability is limited to the amount paid by you (if any) for using our services.</li>
                  </ul>
                </div>

                {/* Information 8 */}

                <h2 className={styles.sectionTitle}>8. Indemnification</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    You agree to indemnify and hold harmless Neophoenix, its employees, partners, and affiliates against claims, liabilities, damages, or expenses arising out of your use of our services.
                  </p>
                </div>

                {/* Information 9 */}

                <h2 className={styles.sectionTitle}>9. Termination</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We may suspend or terminate access if you violate these Terms. Upon termination, your right to use our website and services will immediately cease.
                  </p>
                </div>

                {/* Information 10 */}

                <h2 className={styles.sectionTitle}>10. Changes to Terms</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We reserve the right to update these Terms at any time. Changes will be posted with an updated “Effective Date”. Continued use of the website constitutes acceptance of the revised Terms.
                  </p>
                </div>

                {/* Information 11 */}

                <h2 className={styles.sectionTitle}>11. Contact Us</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    If you have any questions about these Terms & Conditions, contact us at:
                  </p>
                  <div className={styles.contactInfo}>
                    <p><strong>Company Name:</strong> Neophoenix</p>
                    <p><strong>Email:</strong> <a href="mailto:business@neophoenix.com">business@neophoenix.com</a></p>
                    <p><strong>Website:</strong> <a href="https://www.neophoenix.ai" target="_blank">www.neophoenix.ai</a></p>
                  </div>
                </div>
              </div>
          </Container>
        </div>
      </div>
    </>
  );
}
