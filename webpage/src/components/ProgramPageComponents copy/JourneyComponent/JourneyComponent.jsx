import React from 'react';
import styles from './JourneyComponent.module.css';

const JourneyComponent = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyContent}>
        <h1 className={styles.journeyTitle}>
          Get ready for an incredible 4-month journey!
        </h1>
        <h2 className={styles.journeySubtitle}>What's in it for you?</h2>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/081a8a96961afd2962804b4021dd19ba3036179992d146e6ad45ecd84f5e1951?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
          alt="Journey illustration" 
          className={styles.journeyImage} 
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default JourneyComponent;