import React from 'react';
import styles from './LearnSection.module.css';

const LearnSection = () => {
  return (
    <section className={styles.learnSection}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <span className={styles.highlight}>Acquire</span> knowledge by doing and drawing ideas from others .
        </h3>
        <p className={styles.description}>
          Talk to individuals about marketing, business, creativity and lots of other topics.
        </p>
        <p className={styles.description}>
          Participate in speaker sessions <span className={styles.highlight}>live events</span>, and award shows to advance your skills.
        </p>
      </div>
      <div className={styles.imageContainer}/>
      

    </section>
  );
};

export default LearnSection;