import React from 'react';
import styles from './LearnSection.module.css';

const LearnSection = () => {
  return (
    <section className={styles.learnSection}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <span className={styles.highlight}>Learn</span> by doing and taking inspiration from others
        </h3>
        <p className={styles.description}>
          Talk to people about design, marketing, web3, and a lot more!
        </p>
        <p className={styles.description}>
          Upskill by participating in hackathons, live <span className={styles.highlight}>events</span>, and speaker sessions.
        </p>
      </div>
      <div className={styles.imageContainer}/>
      

    </section>
  );
};

export default LearnSection;