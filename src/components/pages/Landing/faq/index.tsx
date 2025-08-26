'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './faq.module.scss';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How are these tools different from anything else?',
    answer:
      'Binary: Your data never leaves your infra; prompts are always in your context, not generic.',
  },
  {
    id: 2,
    question: 'What’s the risk in early access?',
    answer: 'None, no credit card, no vendor lock-in, no data exposure.',
  },
  {
    id: 3,
    question: 'Who should sign up?',
    answer: 'Tech and ops teams wanting to automate, secure, and lead before everyone else.',
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ [key: number]: 'yes' | 'no' | null }>({});

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const handleFeedback = (faqId: number, value: 'yes' | 'no') => {
    setFeedback((prev) => ({
      ...prev,
      [faqId]: value,
    }));
  };

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: 0.1,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 20,
  //     scale: 0.95,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     transition: {
  //       duration: 0.1,
  //       ease: [0.25, 0.46, 0.45, 0.94],
  //     },
  //   },
  // };

  // const contentVariants = {
  //   hidden: {
  //     height: 0,
  //     opacity: 0,
  //   },
  //   visible: {
  //     height: 'auto',
  //     opacity: 1,
  //     transition: {
  //       height: {
  //         duration: 0.1,
  //         ease: 'easeOut',
  //       },
  //       opacity: {
  //         duration: 0.1,
  //         delay: 0.1,
  //       },
  //     },
  //   },
  //   exit: {
  //     height: 0,
  //     opacity: 0,
  //     transition: {
  //       height: {
  //         duration: 0.1,
  //         ease: 'easeIn',
  //       },
  //       opacity: {
  //         duration: 0.1,
  //       },
  //     },
  //   },
  // };

  return (
    <section className={styles.faq}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know about Tech Pilot and AI tools
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className={styles.faqContainer}
          // variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {faqData.map((item) => (
            <motion.div key={item.id} className={styles.faqItem}>
              <button
                className={`${styles.questionButton} ${openItem === item.id ? styles.active : ''}`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className={styles.questionText}>{item.question}</span>
                <motion.div
                  className={styles.icon}
                  animate={{ rotate: openItem === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    className={styles.answerContainer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    id={`faq-answer-${item.id}`}
                  >
                    <div className={styles.answer}>{item.answer}</div>

                    {/* Feedback Section */}
                    <div className={styles.feedbackSection}>
                      <span className={styles.feedbackText}>Was this helpful?</span>
                      <div className={styles.feedbackButtons}>
                        <button
                          className={`${styles.feedbackButton} ${styles.feedbackYes} ${feedback[item.id] === 'yes' ? styles.active : ''}`}
                          onClick={() => handleFeedback(item.id, 'yes')}
                          disabled={feedback[item.id] !== null}
                        >
                          <span>Yes</span>
                        </button>
                        <button
                          className={`${styles.feedbackButton} ${styles.feedbackNo} ${feedback[item.id] === 'no' ? styles.active : ''}`}
                          onClick={() => handleFeedback(item.id, 'no')}
                          disabled={feedback[item.id] !== null}
                        >
                          <span>No</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
