'use client';

import styles from './page.module.scss';

export default function TermsConditionsPage() {
  return (
    <>
      <div className={`${styles.termsContainer} hero`}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.headline}>
                <h1 className={styles.title}>Terms & Conditions</h1>
                <p className={styles.description}>
                  Please read these terms carefully before using our AI tools directory platform.
                </p>
                <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainSection}>
          <div className="container">
            <div className={styles.contentWrapper}>
              <div className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    By accessing and using Neophoenix ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>2. Description of Service</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Neophoenix is an online directory that curates and lists AI tools, applications, and services to help users discover and access various AI-powered solutions. Our platform provides:
                  </p>
                  <ul className={styles.list}>
                    <li>Curated listings of AI tools and applications</li>
                    <li>Search and filtering capabilities</li>
                    <li>User reviews and ratings</li>
                    <li>Direct links to third-party AI services</li>
                    <li>Educational content about AI tools</li>
                  </ul>
                </div>

                <h2 className={styles.sectionTitle}>3. User Accounts and Registration</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    To access certain features of our platform, you may be required to create an account. You agree to:
                  </p>
                  <ul className={styles.list}>
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                </div>

                <h2 className={styles.sectionTitle}>4. Acceptable Use Policy</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    You agree to use our platform only for lawful purposes and in accordance with these terms. You agree NOT to:
                  </p>
                  <ul className={styles.list}>
                    <li>Use the platform for any illegal or unauthorized purpose</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Transmit any harmful, threatening, or offensive content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the platform's functionality</li>
                    <li>Use automated systems to access the platform without permission</li>
                    <li>Impersonate any person or entity</li>
                  </ul>
                </div>

                <h2 className={styles.sectionTitle}>5. Third-Party Services and Content</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Our platform may contain links to third-party AI tools and services. We are not responsible for:
                  </p>
                  <ul className={styles.list}>
                    <li>The content, privacy policies, or practices of third-party services</li>
                    <li>The availability or functionality of external websites</li>
                    <li>Any transactions between you and third-party providers</li>
                    <li>Any damages or losses resulting from third-party services</li>
                  </ul>
                  <p className={styles.paragraph}>
                    Your use of third-party services is subject to their respective terms and conditions.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>6. Intellectual Property Rights</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    The platform and its original content, features, and functionality are owned by Neophoenix and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  <p className={styles.paragraph}>
                    You may not reproduce, distribute, modify, or create derivative works of our content without express written permission.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>7. User-Generated Content</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    If you submit content to our platform (reviews, comments, etc.), you grant us a non-exclusive, royalty-free license to use, modify, and display such content. You represent that you have the right to submit such content and that it does not violate any third-party rights.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>8. Privacy and Data Protection</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>9. Disclaimers and Limitations of Liability</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className={styles.list}>
                    <li>Warranties of merchantability and fitness for a particular purpose</li>
                    <li>Warranties regarding the accuracy or reliability of information</li>
                    <li>Warranties that the platform will be uninterrupted or error-free</li>
                  </ul>
                  <p className={styles.paragraph}>
                    IN NO EVENT SHALL NEOPHOENIX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>10. Indemnification</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    You agree to indemnify and hold harmless Neophoenix, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the platform or violation of these terms.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>11. Termination</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We may terminate or suspend your account and access to the platform immediately, without prior notice, for any reason, including breach of these terms. Upon termination, your right to use the platform will cease immediately.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>12. Governing Law and Dispute Resolution</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms or your use of the platform shall be resolved through binding arbitration.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>13. Changes to Terms</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on this page. Your continued use of the platform after such changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>14. Severability</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>15. Contact Information</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    If you have any questions about these terms and conditions, please contact us:
                  </p>
                  <div className={styles.contactInfo}>
                    <p><strong>Email:</strong> legal@neophoenix.com</p>
                    <p><strong>Address:</strong> Neophoenix, [Your Business Address]</p>
                    <p><strong>Phone:</strong> [Your Contact Number]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
