'use client';

import { useState } from 'react';
import { Form, FormControl, FormSelect } from 'react-bootstrap';
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
          message: 'Thank you! Your request has been sent successfully. We\'ll get back to you soon!'
        });
        // Reset form
        setFormData({ fullName: '', email: '', aiInterests: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send request. Please try again.'
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
    <section id="personalized-wishlist" className={styles.personalizedWishlistSection}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            {/* Top Section - Title and Description */}
            <div className={styles.contentSection}>
              <div className={styles.header}>
                <h2 className={styles.title}>AI That Adapts to Your Business</h2>
                <p className={styles.subtitle}>
                Every enterprise is unique. That’s why Neophoenix offers <b>tailored AI solutions—</b>
from white-label platforms to custom-built integrations. We collaborate closely
with your team to align AI adoption with your strategic goals, ensuring measurable
impact across operations, customer experience, and decision-making.
                </p>
              </div>
            </div>

            {/* Bottom Section - Form */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <div className={styles.formIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className={styles.formTitle}>Join the AI Revolution</h3>
                <p className={styles.formSubtitle}>
                  Start building your personalized AI toolkit today
                </p>
              </div>

              <Form onSubmit={handleSubmit} className={styles.form}>
                <div className="row">
                  <div className="col-md-6">
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
                        <div className={styles.inputFocus}></div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
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
                        <div className={styles.inputFocus}></div>
                      </div>
                    </Form.Group>
                  </div>
                </div>

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
                    <div className={styles.inputFocus}></div>
                  </div>
                </Form.Group>

                <div className={styles.buttonWrapper}>
                  <Button 
                    label={isSubmitting ? "Request a Custom Solution..." : "Request a Custom Solution"} 
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
        </div>
      </div>
    </section>
  );
};

export default PersonalizedWishlist;
