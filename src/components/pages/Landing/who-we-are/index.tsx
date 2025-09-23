'use client';
import Button from '../../../ui/button';
import { Container, Row, Col } from 'react-bootstrap';
import NeuralNetworkBackground from '../../../ui/neural-network-background';
import styles from './WhoWeAre.module.scss';

const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAre}>
      {/* Neural Network Background Animation */}
      <NeuralNetworkBackground 
        nodeCount={80}
        maxConnectionDist={120}
        opacity={0.6}
        color="rgba(0, 229, 255, 0.8)"
        mouseInfluence={80}
      />

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
