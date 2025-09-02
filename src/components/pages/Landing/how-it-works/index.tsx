import styles from './HowItWorks.module.scss';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Deep-Dive Assessment',
      description:
        'Pinpoint real business bottlenecks and map integration points no cookie cutter analysis, just actionable insights.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 4C8.48 4 4 8.48 4 14C4 19.52 8.48 24 14 24C16.39 24 18.68 23.21 20.47 21.77L26.59 27.89L28 26.47L21.88 20.35C23.22 18.56 24 16.35 24 14C24 8.48 19.52 4 14 4ZM14 6C18.42 6 22 9.58 22 14C22 18.42 18.42 22 14 22C9.58 22 6 18.42 6 14C6 9.58 9.58 6 14 6Z"
            fill="currentColor"
          />
          <path
            d="M10 12H12V18H10V12ZM13 10H15V18H13V10ZM16 14H18V18H16V14Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 2,
      number: '02',
      title: 'Rapid Solution Blueprint',
      description:
        'Architect a fit for purpose AI workflow built around your actual data, tech stack, and performance goals no wasted cycles.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 4C4.9 4 4 4.9 4 6V26C4 27.1 4.9 28 6 28H26C27.1 28 28 27.1 28 26V6C28 4.9 27.1 4 26 4H6ZM6 6H26V26H6V6Z"
            fill="currentColor"
          />
          <path
            d="M8 8H24V10H8V8ZM8 12H20V14H8V12ZM8 16H24V18H8V16ZM8 20H16V22H8V20Z"
            fill="currentColor"
          />
          <path
            d="M22 12H24V14H22V12ZM22 16H24V18H22V16ZM22 20H24V22H22V20Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 3,
      number: '03',
      title: 'Fast Deployment & Enablement',
      description:
        'Plug in, go live, and upskill your team with hands on onboarding measurable impact from day one, not wishful promises.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 4L18.5 8.5L23 9L18.5 9.5L16 14L13.5 9.5L9 9L13.5 8.5L16 4Z"
            fill="currentColor"
          />
          <path
            d="M8 20C8 18.9 8.9 18 10 18H22C23.1 18 24 18.9 24 20V26C24 27.1 23.1 28 22 28H10C8.9 28 8 27.1 8 26V20ZM10 20V26H22V20H10Z"
            fill="currentColor"
          />
          <path
            d="M12 22H20V24H12V22ZM12 26H16V28H12V26Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 4,
      number: '04',
      title: 'Relentless Optimization',
      description:
        '24/7 monitoring, usage analytics, and ongoing updates so your AI solution gets smarter and more efficient over time.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 4C4.9 4 4 4.9 4 6V26C4 27.1 4.9 28 6 28H26C27.1 28 28 27.1 28 26V6C28 4.9 27.1 4 26 4H6ZM6 6H26V26H6V6Z"
            fill="currentColor"
          />
          <path
            d="M8 8H12V12H8V8ZM14 8H18V16H14V8ZM20 8H24V20H20V8Z"
            fill="currentColor"
          />
          <path
            d="M8 14H12V20H8V14ZM14 18H18V20H14V18ZM20 22H24V24H20V22Z"
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
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.description}>
            Our no-nonsense 4 step deployment gets you from Product to powerhouse - ready AI with
            minimal hassle and maximum ROI.
          </p>
        </div>

        <div className="row mt-0">
          {steps.map((step) => (
            <div key={step.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIcon}>
                  <span className={styles.iconWrapper}>{step.icon}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
