'use client';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormControl, FormSelect } from 'react-bootstrap';
import Button from '@/components/ui/button';
import styles from './PersonalizedWishlist.module.scss';

const PersonalizedWishlist = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    aiInterests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        body: JSON.stringify({
          ...formData,
          message: `AI Interest: ${formData.aiInterests}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            "Thank you! Your request has been sent successfully. We'll get back to you soon!",
        });
        // Reset form
        setFormData({ fullName: '', email: '', aiInterests: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send request. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="personalized-wishlist" className={styles.personalizedWishlistSection}>
      

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

      {/* Geometric Pattern Elements */}
      <div className={styles.geometricPattern}>
        {/* Large geometric elements - reduced to 2 */}
        <div 
          className={styles.geometricElementLarge}
          style={{
            top: '15%',
            left: '8%',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className={styles.geometricElementLarge}
          style={{
            bottom: '20%',
            right: '8%',
            animationDelay: '3s'
          }}
        ></div>

        {/* Medium geometric elements - reduced to 2 */}
        <div 
          className={styles.geometricElement}
          style={{
            top: '35%',
            right: '15%',
            animationDelay: '1.5s'
          }}
        ></div>
        <div 
          className={styles.geometricElement}
          style={{
            top: '60%',
            left: '5%',
            animationDelay: '2s'
          }}
        ></div>

        {/* Small geometric elements - reduced to 2 */}
        <div 
          className={styles.geometricElementSmall}
          style={{
            top: '25%',
            right: '10%',
            animationDelay: '0.8s'
          }}
        ></div>
        <div 
          className={styles.geometricElementSmall}
          style={{
            bottom: '20%',
            left: '13%',
            animationDelay: '3.8s'
          }}
        ></div>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12} xs={12}>
            {/* Main Content Card */}
            <div className={styles.mainCard}>
              {/* Header Section */}
              <div className={styles.headerSection}>
                <h2 className={styles.title}>AI That Adapts to Your Business</h2>
                <p className={styles.subtitle}>
                  Every enterprise is unique. That's why Neophoenix offers{' '}
                  <strong>Tailored AI Solutions </strong>
                  from white-label platforms to custom-built integrations. We collaborate closely
                  with your team to align AI adoption with your strategic goals, ensuring measurable
                  impact across operations, customer experience, and decision-making.
                </p>
              </div>

              {/* Form Section */}
              <div className={styles.formSection}>
                <div className={styles.formHeader}></div>

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
                    <Form.Label htmlFor="aiInterests" className={styles.label}>
                      AI Interests
                    </Form.Label>
                    <div className={styles.inputWrapper}>
                      <FormSelect
                        id="aiInterests"
                        name="aiInterests"
                        value={formData.aiInterests}
                        onChange={handleInputChange}
                        className={styles.select}
                        required
                      >
                        <option value="">Select your primary interest</option>
                        <option value="content-creation">Content Creation</option>
                        <option value="data-analysis">Data Analysis</option>
                        <option value="automation">Automation</option>
                        <option value="design">Design & Creative</option>
                        <option value="development">Development</option>
                        <option value="marketing">Marketing</option>
                        <option value="productivity">Productivity</option>
                        <option value="research">Research</option>
                      </FormSelect>
                      <div className={styles.inputGlow}></div>
                    </div>
                  </Form.Group>

                  <div className={styles.buttonWrapper}>
                    <Button
                      label={isSubmitting ? 'Creating Your Solution...' : 'Get Custom AI Solutions'}
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
    </section>
  );
};

export default PersonalizedWishlist;
