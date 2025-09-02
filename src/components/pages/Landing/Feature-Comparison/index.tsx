import styles from './FeatureComparison.module.scss';

const FeatureComparison = () => {
  const features = [
    {
      name: 'Zero Data Migration',
      description: 'No data migration required for seamless integration',
      plugAndPlayRAG: true,
      taskPromptAI: true,
      competitors: false,
      icon: '🔄',
    },
    {
      name: 'Integrated in Workflow',
      description: 'Seamlessly integrated into existing workflows',
      plugAndPlayRAG: true,
      taskPromptAI: true,
      competitors: false,
      icon: '⚙️',
    },
    {
      name: 'Personalized Automation',
      description: 'AI-powered personalized automation features',
      plugAndPlayRAG: true,
      taskPromptAI: true,
      competitors: false,
      icon: '🤖',
    },
    {
      name: 'Fast Onboarding (<2 min)',
      description: 'Quick setup and onboarding process',
      plugAndPlayRAG: true,
      taskPromptAI: true,
      competitors: false,
      icon: '⚡',
    },
    {
      name: 'Free Early Access',
      description: 'Free early access to new features',
      plugAndPlayRAG: true,
      taskPromptAI: true,
      competitors: false,
      icon: '🎁',
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
              <h2 className={styles.title}>
                Why Choose <span className={styles.highlight}>Neophoenix</span>
              </h2>
              <p className={styles.subtitle}>
                Discover what makes us the superior choice for your needs
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
                      <th className={`${styles.featureHeader} ${styles.highlighted}`}>
                        <span className={styles.headerText}>Features</span>
                      </th>
                      <th className={styles.plugAndPlayRAGHeader}>
                        <div className={styles.platformInfo}>
                          <span className={styles.platformName}>Plug-and-Play RAG</span>
                        </div>
                      </th>
                      <th className={styles.taskPromptAIHeader}>
                        <div className={styles.platformInfo}>
                          <span className={styles.platformName}>Task Prompt AI</span>
                        </div>
                      </th>
                      <th className={styles.competitorsHeader}>
                        <div className={styles.platformInfo}>
                          <span className={styles.platformName}>Competitors</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className={styles.featureRow}>
                        <td className={`${styles.featureCell} ${styles.highlighted}`}>
                          <div className={styles.featureInfo}>
                            <div className={styles.featureDetails}>
                              <h3 className={styles.featureName}>{feature.name}</h3>
                            </div>
                          </div>
                        </td>
                        <td className={styles.plugAndPlayRAGCell}>
                          <div className={styles.statusWrapper}>
                            {feature.plugAndPlayRAG ? (
                              <div className={styles.available}>
                                <CheckIcon />
                                <span>Yes</span>
                              </div>
                            ) : (
                              <div className={styles.unavailable}>
                                <CrossIcon />
                                <span>No</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className={styles.taskPromptAICell}>
                          <div className={styles.statusWrapper}>
                            {feature.taskPromptAI ? (
                              <div className={styles.available}>
                                <CheckIcon />
                                <span>Yes</span>
                              </div>
                            ) : (
                              <div className={styles.unavailable}>
                                <CrossIcon />
                                <span>No</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className={styles.competitorsCell}>
                          <div className={styles.statusWrapper}>
                            {feature.competitors ? (
                              <div className={styles.available}>
                                <CheckIcon />
                                <span>Yes</span>
                              </div>
                            ) : (
                              <div className={styles.unavailable}>
                                <CrossIcon />
                                <span>No</span>
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
      </div>
    </section>
  );
};

export default FeatureComparison;
