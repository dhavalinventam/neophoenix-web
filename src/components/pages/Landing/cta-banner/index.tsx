import styles from './CtaBanner.module.scss';

const CtaBanner = () => {
  return (
    <section className={styles.ctaBanner}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div className={styles.content}>
              <h2 className={styles.headline}>Unleash Instant Results with Secure AI Automation</h2>
              <p className={styles.supportingText}>
                Stop wasting time on manual tasks and scattered tools. Our platform transforms raw
                data and complex workflows into private, production-grade automations backed by
                enterprise-level privacy and real-time insights.
              </p>
              <div className={styles.buttonGroup}>
                <button className={styles.claimButton}>
                  Get Started Free
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
