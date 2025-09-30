'use client';

import styles from './page.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className={`${styles.privacyContainer} hero`}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <Container>
            <div className={styles.heroContent}>
              <div className={styles.headline}>
                <h1 className={styles.title}>Privacy Policy</h1>
                {/* <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p> */}
              </div>
            </div>
          </Container>
        </div>

        {/* Main Content */}
        <div className={styles.mainSection}>
          <Container>
              <div className={styles.mainContent}>
                <p className={styles.description}>
                  Neophoenix respects your privacy and is committed to protecting it through this Privacy Policy.
                </p>
                <p className={styles.description}>
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <b><a href="https://www.neophoenix.ai" target="_blank">www.neophoenix.ai</a></b> and use our services. Please read this carefully. If you do not agree with the terms of this Privacy Policy, please do not access the website.
                </p>

                {/* Information 1 */}
                
                <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We may collect the following types of information:
                  </p>
                  <ul className={styles.list}>
                    <li>Personal Information: Name, email address, phone number, company details, payment information, etc.</li>
                    <li>Non-Personal Information: Browser type, operating system, referring URLs, IP address, device information.</li>
                    <li>Cookies & Tracking Data: We use cookies, pixels, and analytics tools (e.g., Google Analytics) to improve user experience and performance.
                    </li>
                  </ul>
                </div>

                {/* Information 2 */}

                <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We may use collected information to:
                  </p>
                  <ul className={styles.list}>
                    <li>Provide, operate, and maintain our website and services.</li>
                    <li>Personalize user experience.</li>
                    <li>Improve website functionality and customer service.</li>
                    <li>Process transactions and deliver services you requested.</li>
                    <li>Send periodic emails, newsletters, and marketing communications (with opt-out options).</li>
                    <li>Comply with legal obligations.</li>
                  </ul>
                </div>

                {/* Information 3 */}

                <h2 className={styles.sectionTitle}>3. Sharing of Information</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We do not sell or rent your personal data. We may share information with:
                  </p>
                  <ul className={styles.list}>
                    <li><strong>Service Providers:</strong> (payment gateways, hosting providers, analytics)</li>
                    <li><strong>Legal Requirements:</strong> (when required by law, regulation, or court order)</li>
                    <li><strong>Business Transfers:</strong> (mergers, acquisitions, restructuring)</li>
                  </ul>
                </div>

                {/* Information 4 */}

                <h2 className={styles.sectionTitle}>4. Data Retention</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.list}>
                    <li>We retain your personal information only as long as necessary for business, legal, or contractual obligations.</li>
                  </ul>
                </div>

                {/* Information 5 */}

                <h2 className={styles.sectionTitle}>5. Data Security</h2>
                <div className={styles.sectionContent}>
                  <ul className={styles.list}>
                    <li>We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no method of transmission over the internet is 100% secure.</li>
                  </ul>
                </div>

                {/* Information 6 */}

                <h2 className={styles.sectionTitle}>6. Your Rights</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Depending on your jurisdiction (e.g., GDPR, CCPA), you may have the right to:
                  </p>
                  <ul className={styles.list}>
                    <li>Access, correct, or delete your personal data.</li>
                    <li>Restrict or object to processing.</li>
                    <li>Request data portability.</li>
                    <li>Opt out of marketing emails.</li>
                  </ul>
                  <p className={styles.paragraph}>
                    You may exercise these rights by contacting us at <b><a href="mailto:business@neophoenix.com">business@neophoenix.com</a></b>
                  </p>
                </div>

                {/* Information 7 */}

                <h2 className={styles.sectionTitle}>7. Cookies Policy</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We use cookies to:
                  </p>
                  <ul className={styles.list}>
                    <li>Improve functionality.</li>
                    <li>Analyze site traffic.</li>
                    <li>Personalize content.</li>
                    <li>You can disable cookies via your browser settings, but this may affect website performance.</li>
                  </ul>
                </div>

                {/* Information 8 */}

                <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of such websites.
                  </p>
                </div>

                {/* Information 9 */}

                <h2 className={styles.sectionTitle}>9. Children’s Privacy</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Our services are not directed at individuals under the age of 13. We do not knowingly collect information from children.
                  </p>
                </div>

                {/* Information 10 */}

                <h2 className={styles.sectionTitle}>10. Changes to Privacy Policy</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised “Last Updated” date.
                  </p>
                </div>

                {/* Information 11 */}

                <h2 className={styles.sectionTitle}>11. Contact Us</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    For any questions or concerns about this Privacy Policy, please contact us at:
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
