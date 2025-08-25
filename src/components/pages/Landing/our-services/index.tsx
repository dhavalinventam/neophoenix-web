import React from 'react';
import styles from './OurServices.module.scss';
import Button from '@/components/ui/button';

const OurServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Private Workshop Training For Business',
      description:
        'Transform your team into AI power users with hands-on workshops tailored to your industry and specific use cases.',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8C18.21 8 20 9.79 20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 9.79 13.79 8 16 8ZM16 18C19.31 18 22 20.69 22 24H10C10 20.69 12.69 18 16 18Z"
            fill="currentColor"
          />
          <path
            d="M24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C22.9 12 22 11.1 22 10C22 8.9 22.9 8 24 8ZM24 14C26.21 14 28 15.79 28 18H20C20 15.79 21.79 14 24 14Z"
            fill="currentColor"
          />
          <path
            d="M8 8C9.1 8 10 8.9 10 10C10 11.1 9.1 12 8 12C6.9 12 6 11.1 6 10C6 8.9 6.9 8 8 8ZM8 14C10.21 14 12 15.79 12 18H4C4 15.79 5.79 14 8 14Z"
            fill="currentColor"
          />
        </svg>
      ),
      features: [
        'Custom AI training programs',
        'Industry-specific use cases',
        'Hands-on implementation',
        'Ongoing support & resources',
      ],
      buttonText: 'Learn More →',
    },
    {
      id: 2,
      title: 'Integration & Development Services',
      description:
        'Seamlessly connect AI tools with your existing systems and workflows for maximum efficiency and minimal disruption.',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM16 26C10.48 26 6 21.52 6 16C6 10.48 10.48 6 16 6C21.52 6 26 10.48 26 16C26 21.52 21.52 26 16 26Z"
            fill="currentColor"
          />
          <path
            d="M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16C24 11.58 20.42 8 16 8ZM16 22C12.69 22 10 19.31 10 16C10 12.69 12.69 10 16 10C19.31 10 22 12.69 22 16C22 19.31 19.31 22 16 22Z"
            fill="currentColor"
          />
          <path
            d="M16 12C13.79 12 12 13.79 12 16C12 18.21 13.79 20 16 20C18.21 20 20 18.21 20 16C20 13.79 18.21 12 16 12Z"
            fill="currentColor"
          />
        </svg>
      ),
      features: [
        'API integrations & workflows',
        'Custom AI tool development',
        'Web Development Services',
        'Technical support & maintenance',
      ],
      buttonText: 'Learn More →',
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className="container text-center">
        <div className={styles.header}>
          <h2 className={styles.title}>Our AI-Powered Services</h2>
          <p className={styles.description}>
            We don&apos;t just plug in cookie-cutter bots. We tailor solutions that speak to your
            specific industry, challenges, goals and most importantly: deliver clear outcomes.
          </p>
        </div>

        <div className="row mt-0">
          {services.map((service) => (
            <div key={service.id} className="col-lg-6 col-md-12 mt-0 mb-3">
              <div className={styles.serviceCard}>
                <div className={styles.cardIcon}>
                  <span className={styles.iconText}>{service.icon}</span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>

                <p className={styles.cardDescription}>{service.description}</p>

                <ul className={styles.featuresList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-center">
                  <Button label={service.buttonText} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
