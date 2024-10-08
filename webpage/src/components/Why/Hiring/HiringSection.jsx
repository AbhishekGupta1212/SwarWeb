import React from 'react';
import styles from './HiringSection.module.css';

const HiringSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.candidateColumn}>
          <div className={styles.candidateCard}>
            <h2 className={styles.cardTitle}>
             Automate your tasks, available 24x7 with your personalized AI assistant
            </h2>
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc82a1e1c94cfea53cd74a7ca9c380cb254e3f14746c96d8721376b23f16c03b?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
              alt="Illustration of candidate interaction" 
              className={styles.cardImage}
            />
          </div>
        </div>
        <div className={styles.roleColumn}>
          <div className={styles.roleCard}>
            <h2 className={styles.visuallyhidden}>Hiring </h2>
           for any role: part-time, freelance, or full-time.
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HiringSection;