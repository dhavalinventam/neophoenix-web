'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import Button from '@/components/ui/button';

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
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
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
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.headline}>
                <h1 className={styles.title}>Let&apos;s Build Something Amazing.</h1>
                <p className={styles.description}>
                  Ready to transform your ideas into reality? We&apos;re here to help you create
                  something extraordinary.
                </p>
              </div>
            </div>

            <div className="row">
              {/* Contact Information */}
              <div className="col-lg-4">
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
                        <p className={styles.methodText}>hello@neophoenix.com</p>
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
                        <p className={styles.methodText}>+91 7383 921251 (HR)</p>
                        <p className={styles.methodText}>+91 91575 94215 (Business)</p>
                        <span className={styles.methodNote}>Mon-Fri from 8am to 5pm</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialSection}>
                    <h3 className={styles.socialTitle}>Follow Us</h3>
                    <div className={styles.socialIcons}>
                      <a href="#" className={styles.socialIcon} aria-label="Facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
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
              </div>

              {/* Contact Form */}
              <div className="col-lg-8">
                <div className={styles.formSection}>
                  <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Send us a Message</h2>
                    <p className={styles.formSubtitle}>
                      Tell us about your project and we&apos;ll get back to you
                    </p>
                  </div>

                  <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className={styles.formGroup}>
                          <label htmlFor="fullName" className={styles.formLabel}>
                            Full Name
                          </label>
                          <input
                            type="text"
                            className={styles.formInput}
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={styles.formGroup}>
                          <label htmlFor="email" className={styles.formLabel}>
                            Email Address
                          </label>
                          <input
                            type="email"
                            className={styles.formInput}
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="row g-2">
                      <div className="col-12">
                        <div className={styles.formGroup}>
                          <label htmlFor="message" className={styles.formLabel}>
                            Message
                          </label>
                          <textarea
                            className={styles.formTextarea}
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            placeholder="Tell us about your project, goals, or any questions you have..."
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="row g-2">
                      <div className="col-12">
                        <div
                          className={styles.formSubmit}
                          style={{ display: 'flex', justifyContent: 'center' }}
                        >
                          <Button 
                            label={isSubmitting ? "Sending..." : "Send Message"} 
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      
                      {/* Status Messages */}
                      {submitStatus.type && (
                        <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
                          {submitStatus.message}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

