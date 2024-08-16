import React from 'react';
import styles from './StatSection.module.css';
import StatCard from './StatCard';

const statsData = [
  { number: '300+', description: 'Live session by industry experts' },
  { number: '50+', description: 'Hackathons, designathons & ideathons' },
  { number: '1,500+', description: 'Free events organized' }
];

const StatsSection = () => (
  <section className={styles.statsSection}>
    <div className={styles.statsGrid}>
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  </section>
);

export default StatsSection;