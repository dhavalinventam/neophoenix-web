import React from 'react';
import styles from './CtaBanner.module.scss';
import Button from '@/components/ui/button';

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
                <Button label="Get Started Free" />
                <Button label="Request a Demo" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
