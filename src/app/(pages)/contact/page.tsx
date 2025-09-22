'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from '@/components/ui/button';
import SoftParticleGlow from '@/components/ui/soft-particle-glow';
import FloatingDataBlocks from '@/components/ui/floating-data-blocks';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Reset form
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={`${styles.contactContainer} hero`}>
        {/* Soft Particle Glow Animation */}
        <SoftParticleGlow />
        
        {/* Floating Data Blocks Animation */}
        <FloatingDataBlocks 
          blockCount={10}
          intensity="medium"
          className={styles.floatingBlocks}
        />

        {/* Animated Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.gradientMesh}></div>
          <div className={styles.particleField}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={styles.particle}
                style={
                  {
                    '--delay': `${i * 0.1}s`,
                    '--duration': `${3 + (i % 3)}s`,
                    '--x': `${Math.random() * 100}%`,
                    '--y': `${Math.random() * 100}%`,
                  } as React.CSSProperties
                }
              ></div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className={styles.heroSection}>
          <Container>
            <div className={styles.heroContent}>
              <div className={styles.headline}>
                <h1 className={styles.title}>Let&apos;s Build Something Amazing.</h1>
                <p className={styles.description}>
                  Ready to transform your ideas into reality? We&apos;re here to help you create
                  something extraordinary.
                </p>
              </div>
            </div>

            <Row>
              {/* Contact Information */}
              <Col lg={4}>
                <div className={styles.infoSection}>
                  <div className={styles.infoHeader}>
                    <h2 className={styles.infoTitle}>Get in Touch</h2>
                    <p className={styles.infoSubtitle}>We'd love to hear from you</p>
                  </div>

                  <div className={styles.contactMethods}>


                    <div className={styles.contactMethod}>
                      <div className={styles.methodIcon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className={styles.methodContent}>
                        <h3 className={styles.methodTitle}>Email Us</h3>
                        <p className={styles.methodText}>contact@neophoenix.com</p>
                      </div>
                    </div>

                    <div className={styles.contactMethod}>
                      <div className={styles.methodIcon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className={styles.methodContent}>
                        <h3 className={styles.methodTitle}>Call Us</h3>
                        <p className={styles.methodText}>+1 (XXX) XXX-XXXX</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialSection}>
                    <h3 className={styles.socialTitle}>Follow Us</h3>
                    <div className={styles.socialIcons}>
                      <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a href="#" className={styles.socialIcon} aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="#" className={styles.socialIcon} aria-label="Twitter/X">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Contact Form */}
              <Col lg={8}>
                <div className={styles.mainCard}>
                  <div className={styles.formSection}>
                    <div className={styles.formHeader}>
                      <h2 className={styles.formTitle}>Send us a Message</h2>
                      <p className={styles.formSubtitle}>
                        Tell us about your project and we&apos;ll get back to you
                      </p>
                    </div>

                    <Form onSubmit={handleSubmit} className={styles.form}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className={styles.formGroup}>
                            <Form.Label htmlFor="fullName" className={styles.label}>
                              Full Name
                            </Form.Label>
                            <div className={styles.inputWrapper}>
                              <FormControl
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                  handleInputChange(e)
                                }
                                placeholder="Your name"
                                className={styles.input}
                                required
                              />
                              <div className={styles.inputGlow}></div>
                            </div>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className={styles.formGroup}>
                            <Form.Label htmlFor="email" className={styles.label}>
                              Email Address
                            </Form.Label>
                            <div className={styles.inputWrapper}>
                              <FormControl
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                  handleInputChange(e)
                                }
                                placeholder="your@email.com"
                                className={styles.input}
                                required
                              />
                              <div className={styles.inputGlow}></div>
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className={styles.formGroup}>
                        <Form.Label htmlFor="message" className={styles.label}>
                          Message
                        </Form.Label>
                        <div className={styles.inputWrapper}>
                          <FormControl
                            as="textarea"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                              handleInputChange(e)
                            }
                            placeholder="Tell us about your project, goals, or any questions you have..."
                            className={styles.input}
                            rows={4}
                            required
                          />
                          <div className={styles.inputGlow}></div>
                        </div>
                      </Form.Group>

                      <div className={styles.buttonWrapper}>
                        <Button
                          label={isSubmitting ? 'Sending Message...' : 'Send Message'}
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Status Messages */}
                      {submitStatus.type && (
                        <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
                          {submitStatus.message}
                        </div>
                      )}
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

