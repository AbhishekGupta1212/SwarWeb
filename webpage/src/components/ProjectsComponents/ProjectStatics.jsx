import React from 'react';
import styles from './ProjectStatics.module.css';
import staticsboard from '../Images/dboard.png'

const ProjectStatistics = () => {
  return (
    <section className={styles.container}>
      <div className={styles.highlight}>Did you know?</div>
      <div className={styles.statistic}>37% increase</div>
      <p className={styles.description}>
        In members productivity after 6 months with swanirbhar
      </p>
      <div className={styles.imageWrapper}>
        <img 
          src={staticsboard}
          alt="Developer productivity chart" 
          className={styles.image} 
        />
      </div>
    </section>
  );
};

export default ProjectStatistics;