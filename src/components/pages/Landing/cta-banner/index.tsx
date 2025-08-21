import React from 'react';
import styles from './CtaBanner.module.scss';

const CtaBanner: React.FC = () => {
  return (
    <section className={styles.ctaBanner}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6 text-center">
            <div className={styles.content}>
              <h2 className={styles.headline}>Turn Your Ideas Into Reality With AI</h2>
              <p className={styles.supportingText}>Sign up today and get started in minutes.</p>
              <div className={styles.buttonGroup}>
                <button className={`${styles.ctaButton} ${styles.primaryButton}`}>
                  Get Started Free
                </button>
                <button className={`${styles.ctaButton} ${styles.secondaryButton}`}>
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
