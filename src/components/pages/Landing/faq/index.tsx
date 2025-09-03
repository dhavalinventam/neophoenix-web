'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './faq.module.scss';

const faqData = [
  {
    id: 1,
    question: 'How are these <strong>AI tools</strong> different from anything else?',
    answer:
      '<strong>Neophoenix</strong> ensures your data never leaves your infrastructure; <em>prompts are always in your context</em>, not generic. We provide <strong>enterprise-grade security</strong> with <em>zero data exposure</em>.',
  },
  {
    id: 2,
    question: 'What\'s the risk in <strong>early access</strong>?',
    answer: 'None at all! <strong>No credit card required</strong>, <em>no vendor lock-in</em>, and <strong>complete data privacy</strong>. Start exploring our <em>AI solutions</em> risk-free.',
  },
  {
    id: 3,
    question: 'Who should sign up for <strong>Neophoenix</strong>?',
    answer: '<strong>Tech and operations teams</strong> wanting to <em>automate processes</em>, <strong>secure their AI workflows</strong>, and <em>lead innovation</em> before everyone else. Perfect for <strong>enterprise teams</strong> and <em>startups alike</em>.',
  },
  {
    id: 4,
    question: 'What <strong>support</strong> is available if we run into issues?',
    answer:
      '<strong>Direct Slack/Email support</strong>, <em>comprehensive documentation</em>, and if you need priority assistance, an <strong>enterprise SLA</strong> with <em>live debugging sessions</em>. No chatbots or ticket limbo - just <strong>real human experts</strong>.',
  },
  {
    id: 5,
    question: 'Is <strong>technical expertise</strong> required to get started?',
    answer:
      'Minimal technical knowledge needed. If you can <em>connect to a database</em> or <em>install a browser extension</em>, you\'re good to go. <strong>No deep ML expertise</strong> required - we handle the <em>complex AI integration</em> for you.',
  },
  {
    id: 6,
    question: 'Is my <strong>business data</strong> ever sent to your servers?',
    answer:
      'Absolutely not. <strong>All processing and storage</strong> happen entirely on your infrastructure. Your <em>sensitive business data</em> never leaves your environment, ensuring <strong>complete data sovereignty</strong> and <em>compliance</em>.',
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
          <p className={styles.subtitle}>Everything you need to know about <strong>Neophoenix</strong></p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className={styles.faqContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {faqData.map((item) => (
            <motion.div key={item.id} className={styles.faqItem}>
              <button
                className={`${styles.questionButton} ${openItem === item.id ? styles.active : ''}`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className={styles.questionText} dangerouslySetInnerHTML={{ __html: item.question }} />
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
                    <div className={styles.answer} dangerouslySetInnerHTML={{ __html: item.answer }} />

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
