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
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        {/* Floating Geometric Shapes */}
        <div
          className={styles.floatingShapes}
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <div className={`${styles.shape} ${styles.shape1}`}></div>
          <div className={`${styles.shape} ${styles.shape3}`}></div>
        </div>

        {/* Gradient Orbs */}
        <div
          className={styles.gradientOrbs}
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <div className={`${styles.orb} ${styles.orb1}`}></div>
          <div className={`${styles.orb} ${styles.orb3}`}></div>
        </div>

        {/* Neural Network Grid */}
        <div
          className={styles.neuralGrid}
          data-aos="fade-in"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.gridNode}></div>
          ))}
        </div>

        {/* Particle System */}
        <div
          className={styles.particleSystem}
          data-aos="fade-in"
          data-aos-delay="800"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          {[...Array(10)].map((_, i) => (
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
      </div>

      {/* Content Container */}
      <div
        className={styles.contentContainer}
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <Container>
          <Row>
            <Col xs={12}>
              {/* Main Content */}
              <div className={styles.mainContent}>
                {/* Headline */}
                <h2
                  className={styles.headline}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  Who We Are <br /> An AI-First Team with Human Ingenuity
                </h2>

                {/* Description */}
                <div
                  className={styles.description}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
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
                  data-aos-delay="400"
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
