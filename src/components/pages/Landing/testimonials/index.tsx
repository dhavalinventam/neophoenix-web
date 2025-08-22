'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './testimonials.module.scss';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    text: 'Tech Pilot has been a game-changer for our AI adoption strategy. The detailed reviews and hands-on insights helped us choose the right tools for our workflow.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'AI Engineer',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: 'The weekly AI insights keep me updated with the latest breakthroughs. The community here is incredibly knowledgeable and supportive.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    text: 'As a startup founder, staying ahead of AI trends is crucial. Tech Pilot provides actionable strategies that actually work in real business scenarios.',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Data Scientist',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    text: 'The tool comparisons and integration guides saved me countless hours of research. This is exactly what the AI community needed.',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    text: "Implementing AI in our marketing campaigns became so much easier with Tech Pilot's guidance. The ROI has been incredible.",
  },
  {
    id: 6,
    name: 'Alex Morgan',
    role: 'Tech Consultant',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    text: 'I recommend Tech Pilot to all my clients. The quality of content and practical advice is unmatched in the industry.',
  },
];

const Testimonials = () => {
  // const cardVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 50,
  //     scale: 0.95,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //   },
  // };

  // const hoverVariants = {
  //   hover: {
  //     scale: 1.05,
  //     y: -8,
  //     transition: {
  //       duration: 0.3,
  //       ease: 'easeOut',
  //     },
  //   },
  // };

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
            Join thousands of professionals who trust Tech Pilot for their AI journey
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
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
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
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
                  <p className={styles.testimonialText}>{testimonial.text}</p>

                  {/* User Info */}
                  <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                      <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                    </div>
                    <div className={styles.userDetails}>
                      <h4 className={styles.userName}>{testimonial.name}</h4>
                      <p className={styles.userRole}>{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className={`swiper-button-prev ${styles.customNavigation}`}></div>
          <div className={`swiper-button-next ${styles.customNavigation}`}></div>

          {/* Custom Pagination */}
          {/* <div className={`swiper-pagination ${styles.customPagination}`}></div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
