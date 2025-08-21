import React from 'react';
import styles from './HowItWorks.module.scss';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and AI opportunities to create a tailored strategy.',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 19.5L28 26L26 28L19.5 21.5C17.8 22.8 15.6 23.5 13.25 23.5C7.5 23.5 2.75 18.75 2.75 13C2.75 7.25 7.5 2.5 13.25 2.5C19 2.5 23.75 7.25 23.75 13C23.75 15.35 23.05 17.55 21.75 19.25L21.5 19.5ZM13.25 5.5C9.1 5.5 5.75 8.85 5.75 13C5.75 17.15 9.1 20.5 13.25 20.5C17.4 20.5 20.75 17.15 20.75 13C20.75 8.85 17.4 5.5 13.25 5.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 2,
      number: '02',
      title: 'Custom Solution Design',
      description: 'Our team designs a bespoke AI solution that integrates seamlessly with your existing workflows.',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4C5.79 4 4 5.79 4 8V24C4 26.21 5.79 28 8 28H24C26.21 28 28 26.21 28 24V8C28 5.79 26.21 4 24 4H8ZM8 6H24C25.1 6 26 6.9 26 8V24C26 25.1 25.1 26 24 26H8C6.9 26 6 25.1 6 24V8C6 6.9 6.9 6 8 6Z"
            fill="currentColor"
          />
          <path
            d="M10 10H22V12H10V10ZM10 14H18V16H10V14ZM10 18H20V20H10V18Z"
            fill="currentColor"
          />
          <path
            d="M12 22H20V24H12V22Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 3,
      number: '03',
      title: 'Implementation & Training',
      description: 'We implement the solution and provide comprehensive training to your team for maximum adoption.',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4C18.21 4 20 5.79 20 8C20 10.21 18.21 12 16 12C13.79 12 12 10.21 12 8C12 5.79 13.79 4 16 4ZM16 6C14.9 6 14 6.9 14 8C14 9.1 14.9 10 16 10C17.1 10 18 9.1 18 8C18 6.9 17.1 6 16 6Z"
            fill="currentColor"
          />
          <path
            d="M24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C22.9 12 22 11.1 22 10C22 8.9 22.9 8 24 8ZM24 10C24 10.55 24.45 11 25 11C25.55 11 26 10.55 26 10C26 9.45 25.55 9 25 9C24.45 9 24 9.45 24 10Z"
            fill="currentColor"
          />
          <path
            d="M8 8C9.1 8 10 8.9 10 10C10 11.1 9.1 12 8 12C6.9 12 6 11.1 6 10C6 8.9 6.9 8 8 8ZM8 10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10C10 9.45 9.55 9 9 9C8.45 9 8 9.45 8 10Z"
            fill="currentColor"
          />
          <path
            d="M16 14C19.31 14 22 16.69 22 20V24H10V20C10 16.69 12.69 14 16 14ZM16 16C13.79 16 12 17.79 12 20V22H20V20C20 17.79 18.21 16 16 16Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 4,
      number: '04',
      title: 'Ongoing Support',
      description: 'Continuous monitoring, optimization, and support to ensure your AI solution delivers maximum value.',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12C6.9 12 6 12.9 6 14V20C6 21.1 6.9 22 8 22H10V26H14V22H16C17.1 22 18 21.1 18 20V14C18 12.9 17.1 12 16 12H8ZM8 14H16V20H14V24H10V20H8V14Z"
            fill="currentColor"
          />
          <path
            d="M20 8C18.9 8 18 8.9 18 10V16C18 17.1 18.9 18 20 18H22V22H26V18H28C29.1 18 30 17.1 30 16V10C30 8.9 29.1 8 28 8H20ZM20 10H28V16H26V20H22V16H20V10Z"
            fill="currentColor"
          />
          <path
            d="M12 16C12.55 16 13 16.45 13 17C13 17.55 12.55 18 12 18C11.45 18 11 17.55 11 17C11 16.45 11.45 16 12 16Z"
            fill="currentColor"
          />
          <path
            d="M24 16C24.55 16 25 16.45 25 17C25 17.55 24.55 18 24 18C23.45 18 23 17.55 23 17C23 16.45 23.45 16 24 16Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className="container text-center">
        <div className={styles.header}>
          <h2 className={styles.title}>
            How It Works
            <span className={styles.underline}></span>
          </h2>
          <p className={styles.description}>
            Our proven 4-step process ensures successful AI implementation and maximum ROI for your business.
          </p>
        </div>

        <div className="row g-4 mt-5">
          {steps.map((step, index) => (
            <div key={step.id} className="col-lg-3 col-md-6 col-sm-12">
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                
                <div className={styles.stepIcon}>
                  <span className={styles.iconWrapper}>{step.icon}</span>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>

                <p className={styles.stepDescription}>{step.description}</p>

                {index < steps.length - 1 && (
                  <div className={styles.connector}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
