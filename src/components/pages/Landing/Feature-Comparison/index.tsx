import React from 'react';
import styles from './FeatureComparison.module.scss';

const FeatureComparison: React.FC = () => {
  const features = [
    {
      name: 'AI Voiceover',
      description: 'High-quality AI-generated voiceovers with multiple voices',
      neophoenix: true,
      competitorA: false,
      competitorB: true,
      icon: '🎤',
    },
    {
      name: 'Video Templates',
      description: 'Ready-to-use professional video templates',
      neophoenix: true,
      competitorA: true,
      competitorB: false,
      icon: '🎬',
    },
    {
      name: 'Custom Branding',
      description: 'White-label and custom branding options',
      neophoenix: true,
      competitorA: false,
      competitorB: false,
      icon: '🏷️',
    },
    {
      name: 'Enterprise Scalability',
      description: 'Built for enterprise-level usage',
      neophoenix: true,
      competitorA: true,
      competitorB: true,
      icon: '🚀',
    },
    {
      name: 'Real-time Preview',
      description: 'Instant preview of all changes',
      neophoenix: true,
      competitorA: false,
      competitorB: false,
      icon: '👁️',
    },
    {
      name: 'API Integrations',
      description: 'Seamless third-party platform integrations',
      neophoenix: true,
      competitorA: true,
      competitorB: false,
      icon: '🔗',
    },
  ];

  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
    </svg>
  );

  const CrossIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <section className={styles.featureComparison}>
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-12">
            <div className={styles.header}>
              {/* <div className={styles.badge}>
                <span className={styles.badgeIcon}>⚡</span>
                <span>Feature Comparison</span>
              </div> */}
              <h2 className={styles.title}>
                Why Choose <span className={styles.highlight}>Neophoenix</span>
              </h2>
              <p className={styles.subtitle}>
                Discover what makes us the superior choice for your video creation needs
              </p>
            </div>
          </div>
        </div>

        {/* Modern Table */}
        <div className="row">
          <div className="col-12">
            <div className={styles.tableWrapper}>
              <div className={styles.tableContainer}>
                <table className={styles.comparisonTable}>
                  <thead>
                    <tr>
                      <th className={styles.featureHeader}>
                        <span className={styles.headerText}>Features</span>
                      </th>
                      <th className={`${styles.neophoenixHeader} ${styles.highlighted}`}>
                        <div className={styles.platformInfo}>
                          <div className={styles.platformIcon}>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className={styles.platformName}>Neophoenix</span>
                          <div className={styles.accentGlow}></div>
                        </div>
                      </th>
                      <th className={styles.competitorHeader}>
                        <div className={styles.platformInfo}>
                          <div className={styles.platformIcon}>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M12 6v6l4 2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className={styles.platformName}>Competitor A</span>
                        </div>
                      </th>
                      <th className={styles.competitorHeader}>
                        <div className={styles.platformInfo}>
                          <div className={styles.platformIcon}>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <circle cx="9" cy="9" r="2" fill="currentColor" />
                              <path
                                d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className={styles.platformName}>Competitor B</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className={styles.featureRow}>
                        <td className={styles.featureCell}>
                          <div className={styles.featureInfo}>
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <div className={styles.featureDetails}>
                              <h3 className={styles.featureName}>{feature.name}</h3>
                              <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className={`${styles.neophoenixCell} ${styles.highlighted}`}>
                          <div className={styles.statusWrapper}>
                            {feature.neophoenix ? (
                              <div className={styles.available}>
                                <CheckIcon />
                                <span>Available</span>
                              </div>
                            ) : (
                              <div className={styles.unavailable}>
                                <CrossIcon />
                                <span>Not Available</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className={styles.competitorCell}>
                          <div className={styles.statusWrapper}>
                            {feature.competitorA ? (
                              <div className={styles.available}>
                                <CheckIcon />
                                <span>Available</span>
                              </div>
                            ) : (
                              <div className={styles.unavailable}>
                                <CrossIcon />
                                <span>Not Available</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className={styles.competitorCell}>
                          <div className={styles.statusWrapper}>
                            {feature.competitorB ? (
                              <div className={styles.available}>
                                <CheckIcon />
                                <span>Available</span>
                              </div>
                            ) : (
                              <div className={styles.unavailable}>
                                <CrossIcon />
                                <span>Not Available</span>
                              </div>
                            )}
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

        {/* Summary Section */}
        <div className="row">
          <div className="col-12">
            <div className={styles.summary}>
              <div className={styles.summaryCard}>
                <div className={styles.summaryHeader}>
                  <h3 className={styles.summaryTitle}>The Clear Winner</h3>
                  <p className={styles.summaryText}>
                    Neophoenix offers the most comprehensive feature set, giving you everything you
                    need to create stunning videos with AI-powered tools.
                  </p>
                </div>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>6/6</span>
                    <span className={styles.statLabel}>Features Available</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Success Rate</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>24/7</span>
                    <span className={styles.statLabel}>Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
