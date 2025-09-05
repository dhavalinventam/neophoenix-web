'use client';

import styles from './page.module.scss';

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className={`${styles.privacyContainer} hero`}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.headline}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.description}>
                  Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                </p>
                <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainSection}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                <div className={styles.sectionContent}>
                  <h3 className={styles.subsectionTitle}>Personal Information</h3>
                  <p className={styles.paragraph}>
                    When you use Neophoenix, we may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className={styles.list}>
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account credentials and profile information</li>
                    <li>Communication preferences and feedback</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                  </ul>

                  <h3 className={styles.subsectionTitle}>Usage Information</h3>
                  <p className={styles.paragraph}>
                    We automatically collect certain information about your use of our platform:
                  </p>
                  <ul className={styles.list}>
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and interactions with our services</li>
                    <li>Log data and analytics information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We use the information we collect to:
                  </p>
                  <ul className={styles.list}>
                    <li>Provide, maintain, and improve our AI tools directory services</li>
                    <li>Process transactions and manage your account</li>
                    <li>Communicate with you about our services and updates</li>
                    <li>Personalize your experience and recommend relevant AI tools</li>
                    <li>Analyze usage patterns to enhance our platform</li>
                    <li>Ensure security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <h2 className={styles.sectionTitle}>3. Information Sharing and Disclosure</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className={styles.list}>
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our platform</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    <li><strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
                  </ul>
                </div>

                <h2 className={styles.sectionTitle}>4. Data Security</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className={styles.list}>
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication systems</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                </div>

                <h2 className={styles.sectionTitle}>5. Your Rights and Choices</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    You have certain rights regarding your personal information:
                  </p>
                  <ul className={styles.list}>
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Receive a copy of your data in a portable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                  <p className={styles.paragraph}>
                    To exercise these rights, please contact us at privacy@neophoenix.com.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>6. Cookies and Tracking Technologies</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>7. Third-Party Services</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Our platform may contain links to third-party AI tools and services. This privacy policy does not apply to these external sites. We encourage you to review the privacy policies of any third-party services you access through our platform.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>8. International Data Transfers</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>9. Children's Privacy</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information promptly.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>10. Changes to This Policy</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                <h2 className={styles.sectionTitle}>11. Contact Us</h2>
                <div className={styles.sectionContent}>
                  <p className={styles.paragraph}>
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className={styles.contactInfo}>
                    <p><strong>Email:</strong> privacy@neophoenix.com</p>
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
