import FAQ from '@/components/pages/Landing/faq';
import styles from './page.module.scss';
import Button from '@/components/ui/button';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with us.',
};

export default function ContactPage() {
  return (
    <>
      <div className={`${styles.contactContainer} hero`}>
        <div className="container">
          <div className="row g-4">
            {/* Left Section - Get in touch Information */}
            <div className="col-lg-5">
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>Get in touch</h2>

                <div className={styles.infoSection}>
                  <h3 className={styles.infoHeading}>Visit us</h3>
                  <p className={styles.infoText}>Come say hello at our office HQ.</p>
                  <p className={styles.infoAddress}>67 Wisteria Way Croydon South VIC 3136 AU</p>
                </div>

                <div className={styles.infoSection}>
                  <h3 className={styles.infoHeading}>Chat to us</h3>
                  <p className={styles.infoText}>Our friendly team is here to help.</p>
                  <p className={styles.infoEmail}>hello@paysphere.com</p>
                </div>

                <div className={styles.infoSection}>
                  <h3 className={styles.infoHeading}>Call us</h3>
                  <p className={styles.infoText}>Mon-Fri from 8am to 5pm</p>
                  <p className={styles.infoPhone}>(+995) 555-55-55-55</p>
                </div>

                <div className={styles.infoSection}>
                  <h3 className={styles.infoHeading}>Social media</h3>
                  <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialIcon} aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="col-lg-7">
              <div className={styles.formContainer}>
                <form className={styles.contactForm}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className={styles.formLabel}>
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${styles.formInput}`}
                        id="firstName"
                        defaultValue="Randomfirst"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className={styles.formLabel}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${styles.formInput}`}
                        id="lastName"
                        defaultValue="Randomlast"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className={styles.formLabel}>
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control ${styles.formInput}`}
                        id="email"
                        defaultValue="Random@gmail.com"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className={styles.formLabel}>
                        Message
                      </label>
                      <textarea
                        className={`form-control ${styles.formTextarea}`}
                        id="message"
                        rows={5}
                        placeholder="Tell us what we can help you with"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className={`form-check-input ${styles.checkbox}`}
                          type="checkbox"
                          id="privacyPolicy"
                        />
                        <label
                          className={`form-check-label ${styles.checkboxLabel}`}
                          htmlFor="privacyPolicy"
                        >
                          I'd like to receive more information about company, I understand and agree
                          to the{' '}
                          <a href="#" className={styles.privacyLink}>
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <Button label="Send Message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
}
