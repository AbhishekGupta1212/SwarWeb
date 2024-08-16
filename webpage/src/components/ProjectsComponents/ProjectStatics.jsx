import React from 'react';
import styles from './ProjectStatics.module.css';

const ProjectStatistics = () => {
  return (
    <section className={styles.container}>
      <div className={styles.highlight}>Did you know?</div>
      <div className={styles.statistic}>22% increase</div>
      <p className={styles.description}>
        In developer productivity after three years with swanirbhar
      </p>
      <div className={styles.imageWrapper}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/00b5466883e913e578fc6e82831ef109e1dbd9d1846347495a80d24e3976e137?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
          alt="Developer productivity chart" 
          className={styles.image} 
        />
      </div>
    </section>
  );
};

export default ProjectStatistics;