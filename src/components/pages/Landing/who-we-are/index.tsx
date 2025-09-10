'use client';
import Button from '../../../ui/button';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './WhoWeAre.module.scss';

const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAre}>
      {/* Smart Background Animation */}
      <div
        className={styles.backgroundAnimation}
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-duration="2000"
        data-aos-easing="ease-out-cubic"
      >
        {/* Floating Geometric Shapes */}
        <div
          className={styles.floatingShapes}
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-out-cubic"
        >
          <div className={`${styles.shape} ${styles.shape1}`}></div>
          <div className={`${styles.shape} ${styles.shape2}`}></div>
          <div className={`${styles.shape} ${styles.shape3}`}></div>
          <div className={`${styles.shape} ${styles.shape4}`}></div>
          <div className={`${styles.shape} ${styles.shape5}`}></div>
          <div className={`${styles.shape} ${styles.shape6}`}></div>
        </div>

        {/* Gradient Orbs */}
        <div
          className={styles.gradientOrbs}
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
        >
          <div className={`${styles.orb} ${styles.orb1}`}></div>
          <div className={`${styles.orb} ${styles.orb2}`}></div>
          <div className={`${styles.orb} ${styles.orb3}`}></div>
        </div>

        {/* Neural Network Grid */}
        <div
          className={styles.neuralGrid}
          data-aos="fade-in"
          data-aos-delay="600"
          data-aos-duration="1800"
          data-aos-easing="ease-out-cubic"
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.gridNode}></div>
          ))}
        </div>

        {/* Particle System */}
        <div
          className={styles.particleSystem}
          data-aos="fade-in"
          data-aos-delay="800"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${8 + i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* AI Circuit Pattern */}
        <div
          className={styles.circuitPattern}
          data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-duration="2500"
          data-aos-easing="ease-out-cubic"
        >
          <svg viewBox="0 0 1000 1000" className={styles.circuitSvg}>
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 107, 53, 0.3)" />
                <stop offset="50%" stopColor="rgba(46, 196, 182, 0.2)" />
                <stop offset="100%" stopColor="rgba(67, 97, 238, 0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M100,100 L300,100 L300,200 L500,200 L500,300 L700,300 L700,400 L900,400"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className={styles.circuitPath}
            />
            <path
              d="M200,500 L400,500 L400,600 L600,600 L600,700 L800,700"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className={styles.circuitPath}
            />
            <circle
              cx="100"
              cy="100"
              r="4"
              fill="rgba(255, 107, 53, 0.6)"
              className={styles.circuitNode}
            />
            <circle
              cx="300"
              cy="100"
              r="4"
              fill="rgba(46, 196, 182, 0.6)"
              className={styles.circuitNode}
            />
            <circle
              cx="500"
              cy="200"
              r="4"
              fill="rgba(67, 97, 238, 0.6)"
              className={styles.circuitNode}
            />
            <circle
              cx="700"
              cy="300"
              r="4"
              fill="rgba(255, 107, 53, 0.6)"
              className={styles.circuitNode}
            />
            <circle
              cx="900"
              cy="400"
              r="4"
              fill="rgba(46, 196, 182, 0.6)"
              className={styles.circuitNode}
            />
            <circle
              cx="200"
              cy="500"
              r="4"
              fill="rgba(67, 97, 238, 0.6)"
              className={styles.circuitNode}
            />
            <circle
              cx="400"
              cy="500"
              r="4"
              fill="rgba(255, 107, 53, 0.6)"
              className={styles.circuitNode}
            />
            <circle
              cx="600"
              cy="600"
              r="4"
              fill="rgba(46, 196, 182, 0.6)"
              className={styles.circuitNode}
            />
            <circle
              cx="800"
              cy="700"
              r="4"
              fill="rgba(67, 97, 238, 0.6)"
              className={styles.circuitNode}
            />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div
        className={styles.contentContainer}
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={10}>
              {/* Main Content */}
              <div className={styles.mainContent}>
                {/* Headline */}
                <h2
                  className={styles.headline}
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-easing="ease-out-cubic"
                >
                  Who We Are <br /> An AI-First Team with Human Ingenuity
                </h2>

                {/* Description */}
                <div
                  className={styles.description}
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1200"
                  data-aos-easing="ease-out-cubic"
                >
                  <p>
                    We believe the future of work is{' '}
                    <strong>80% AI-enabled, 20% human-crafted.</strong> At Neophoenix, our team of
                    model customizers, fine-tuners, LLM professionals, and product engineers is
                    redefining how enterprises adopt AI. We bring together technical mastery and
                    creative prompt engineering to deliver solutions that are powerful, practical,
                    and built for scale.
                  </p>
                </div>

                {/* CTA Button */}
                <div
                  className={styles.ctaSection}
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  <Button
                    variant="filled"
                    label="Meet Our Team"
                    className={styles.meetTeamButton}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default WhoWeAre;
