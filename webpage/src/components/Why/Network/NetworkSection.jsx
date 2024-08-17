import React from 'react';
import styles from './NetworkSection.module.css';

const NetworkSection = () => {
  return (
    <section className={styles.networkSection}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <span className={styles.highlight}>Network</span> with people who have been pre-screened.
        </h3>
        <p className={styles.description}>
          When outstanding people join together, amazing things happen. It works like the impossible possible!
        </p>
        <p className={styles.description}>
          Connect with a diverse community of creative minds to network, exchange ideas, and learn important skills for developing your business.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2e4817ce2d601da0c246a78de5ee2dce3a32f49b899ddecd0b1922cf7c90fce?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Networking background" className={styles.backgroundImage} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f87ea6a4d8ac4f3b0f7c3b11b85b2f11004eadd8a9603f74f8c3f134a50c990d?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Profile" className={styles.profileImage} />
      </div>
    </section>
  );
};

export default NetworkSection;