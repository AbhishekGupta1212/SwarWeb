import React from 'react';
import styles from './EarnSection.module.css';

const EarnSection = () => {
  const jobCategories = [
    "Copywriters",
    "Product designer",
    "Cofounder",
    "Web developers",
    "Video editor"
  ];

  return (
    <div className={styles.div}>
        <section className={styles.earnSection}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Earn <span className={styles.highlight}>you next paycheck</span>
        </h3>
        <p className={styles.description}>
          Find the best gigs & internships from across 50+ niches to grow in your career.
        </p>
        <p className={styles.description}>
          Are you hiring? <span className={styles.link}>Find talent</span>.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8938d5f7db1769454e3ac2cf7b1dd9291f69ac6c0f442b886c83052f717f0d9?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Earn opportunities" className={styles.image} />
      </div>
    </section>
    <div className={styles.jobCategories}>
        {jobCategories.map((category, index) => (
          <span key={index} className={styles.jobCategory}>
            {category}
          </span>
        ))}
      </div>
    </div>

  );
};

export default EarnSection;