import React from 'react';
import styles from './FeatureComparison.module.scss';

const FeatureComparison: React.FC = () => {
  const features = [
    { name: 'AI Voiceover', neophoenix: true, competitorA: false, competitorB: true },
    { name: 'Templates', neophoenix: true, competitorA: true, competitorB: false },
    { name: 'Branding', neophoenix: true, competitorA: false, competitorB: false },
    { name: 'Scalability', neophoenix: true, competitorA: true, competitorB: true },
    { name: 'Real-time Preview', neophoenix: true, competitorA: false, competitorB: false },
    { name: 'Integrations', neophoenix: true, competitorA: true, competitorB: false },
  ];

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
    </svg>
  );

  const CrossIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <section className={styles.featureComparison}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.header}>
              <h2 className={styles.title}>Feature Comparison</h2>
              <p className={styles.subtitle}>
                Discover what makes Neophoenix the superior choice for your video creation needs
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className={styles.tableWrapper}>
              <div className={`table-responsive ${styles.tableContainer}`}>
                <table className={`table ${styles.comparisonTable}`}>
                  <thead>
                    <tr>
                      <th className={styles.featureHeader}>Features</th>
                      <th className={`${styles.neophoenixHeader} ${styles.highlighted}`}>
                        <div className={styles.brandColumn}>
                          <span className={styles.brandName}>Neophoenix</span>
                          <div className={styles.accentGlow}></div>
                        </div>
                      </th>
                      <th className={styles.competitorHeader}>Competitor A</th>
                      <th className={styles.competitorHeader}>Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className={styles.featureRow}>
                        <td className={styles.featureName}>{feature.name}</td>
                        <td className={`${styles.neophoenixCell} ${styles.highlighted}`}>
                          <div className={styles.iconWrapper}>
                            {feature.neophoenix ? <CheckIcon /> : <CrossIcon />}
                          </div>
                        </td>
                        <td className={styles.competitorCell}>
                          <div className={styles.iconWrapper}>
                            {feature.competitorA ? <CheckIcon /> : <CrossIcon />}
                          </div>
                        </td>
                        <td className={styles.competitorCell}>
                          <div className={styles.iconWrapper}>
                            {feature.competitorB ? <CheckIcon /> : <CrossIcon />}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
