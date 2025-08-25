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
    question: 'What makes Tech Pilot different from other AI tool review sites?',
    answer:
      'Tech Pilot stands out by providing hands-on, practical insights rather than just surface-level reviews. We test each tool extensively in real business scenarios, offer detailed integration guides, and maintain an active community of AI practitioners who share their experiences and best practices.',
  },
  {
    id: 2,
    question: 'How often do you update your AI tool reviews?',
    answer:
      'We update our reviews monthly to ensure accuracy and relevance. With AI technology evolving rapidly, we continuously monitor updates, new features, and pricing changes to keep our community informed with the latest information.',
  },
  {
    id: 3,
    question: 'Do you offer consulting services for AI implementation?',
    answer:
      'Yes! Our team of AI experts provides personalized consulting services to help businesses integrate AI tools effectively. We offer strategy development, tool selection, implementation support, and ongoing optimization to maximize your AI investment ROI.',
  },
  {
    id: 4,
    question: 'Is the content suitable for beginners in AI?',
    answer:
      'Absolutely! We cater to all skill levels, from complete beginners to advanced practitioners. Our content includes beginner-friendly explanations, step-by-step tutorials, and advanced strategies. We believe everyone should have access to quality AI education.',
  },
  {
    id: 5,
    question: 'How can I contribute to the Tech Pilot community?',
    answer:
      'We welcome contributions from our community! You can share your experiences with AI tools, submit guest articles, participate in our forums, or suggest tools for review. Join our Discord server to connect with fellow AI enthusiasts and share insights.',
  },
  {
    id: 6,
    question: 'What types of AI tools do you cover?',
    answer:
      'We cover a comprehensive range of AI tools including content creation, image generation, data analysis, automation, customer service, marketing, development, and productivity tools. Our focus is on practical, business-ready solutions that deliver real value.',
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
    <section className={styles.faqSection}>
      <div className={styles.container}>
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
