import React from 'react';
import OurServices from '@/components/pages/Landing/our-services';
import styles from './service.module.scss';

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <div className="hero">
        <OurServices />
      </div>
    </div>
  );
}
