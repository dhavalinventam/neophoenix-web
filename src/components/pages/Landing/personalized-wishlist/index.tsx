'use client';

import React, { useState } from 'react';
import { Form, FormControl, FormSelect } from 'react-bootstrap';
import Button from '@/components/ui/button';
import styles from './PersonalizedWishlist.module.scss';

const PersonalizedWishlist: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    aiInterests: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const features = [
    'Access to 100+ curated AI tools',
    'Save favorites to your wishlist',
    'Get personalized recommendations',
    'Weekly newsletter with new tools',
  ];

  return (
    <section id="personalized-wishlist" className={styles.personalizedWishlistSection}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section - Benefits and Description */}
          <div className="col-lg-6 col-md-12 mb-3 mb-md-5 mb-lg-0">
            <div className={styles.contentSection}>
              <div className={styles.titleWrapper}>
                <h2 className={styles.title}>Build Your Personalized AI Wishlist</h2>
                {/* <div className={styles.titleUnderline}></div> */}
              </div>

              <p className={styles.description}>
                Create your account to save your favorite AI tools, get personalized
                recommendations, and stay updated on the latest additions.
              </p>

              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.checkmark}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="col-lg-6 col-md-12">
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
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                      placeholder="Your name"
                      className={styles.input}
                      required
                    />
                    <div className={styles.inputFocus}></div>
                  </div>
                </Form.Group>

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
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                      placeholder="your@email.com"
                      className={styles.input}
                      required
                    />
                    <div className={styles.inputFocus}></div>
                  </div>
                </Form.Group>

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
                <div className="d-flex justify-content-center mt-3">
                  <Button label="Create Free Account" />
                </div>

                <p className={styles.legalText}>
                  By signing up, you agree to our{' '}
                  <a href="/terms" className={styles.legalLink}>
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className={styles.legalLink}>
                    Privacy Policy
                  </a>
                  .
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedWishlist;
