'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './testimonials.module.scss';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    text: 'Neophoenix has been a <strong>game-changer</strong> for our AI adoption strategy. The <em>detailed insights</em> and hands-on guidance helped us choose the right tools for our workflow.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'AI Engineer',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: 'The <strong>weekly AI insights</strong> keep me updated with the latest breakthroughs. The <em>community</em> here is incredibly knowledgeable and supportive.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    text: 'As a startup founder, staying ahead of <strong>AI trends</strong> is crucial. Neophoenix provides <em>actionable strategies</em> that actually work in real business scenarios.',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Data Scientist',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    text: 'The <strong>tool comparisons</strong> and integration guides saved me countless hours of research. This is exactly what the <em>AI community</em> needed.',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    text: "Implementing <strong>AI in our marketing campaigns</strong> became so much easier with Neophoenix's guidance. The <em>ROI has been incredible</em>.",
  },
  {
    id: 6,
    name: 'Alex Morgan',
    role: 'Tech Consultant',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    text: 'I recommend <strong>Neophoenix</strong> to all my clients. The quality of <em>content and practical advice</em> is unmatched in the industry.',
  },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((_, index) => (
        <span key={index} className={styles.star}>
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>What Our Users Say</h2>
          <p className={styles.subtitle}>
            Join thousands of professionals who trust <strong>Neophoenix</strong> for their <em>AI journey</em>
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className={styles.testimonialsSwiper}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className={styles.swiperSlide}>
                <motion.div
                  className={styles.testimonialCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Quote Icon */}
                  <div className={styles.quoteIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className={styles.testimonialText} dangerouslySetInnerHTML={{ __html: testimonial.text }} />

                  {/* User Info */}
                  <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={150}
                        height={150}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div className={styles.userDetails}>
                      <h4 className={styles.userName}>{testimonial.name}</h4>
                      <p className={styles.userRole}>{testimonial.role}</p>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className={`swiper-button-prev ${styles.customNavigation}`}></div>
          <div className={`swiper-button-next ${styles.customNavigation}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
