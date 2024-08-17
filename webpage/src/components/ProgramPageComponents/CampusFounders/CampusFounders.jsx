import React from "react";
import styles from './CampusFounder.module.css';

function CampusFounders() {
  return (
    <>
        <section className={styles.heroContainer}>
      <h1 className={styles.title}>Campus Founders</h1>
      <h2 className={styles.subtitle}>-a GPS Fellows initiative</h2>
      <p className={styles.description}>
        Identifying and nurturing India's budding talents
      </p>
    </section>
    <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a716ffb0054bbe64be2357efd026cc9ecbb7dd970d178ebf39e161e12487f427?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
        alt="Camous Founders initiative visual representation" 
        className={styles.heroImage} 
        loading="lazy"
      />
    <p className={styles.mixed}>Picture this – You’ve got this incredible idea buzzing in your head ready to take the entrepreneurial world by storm. How can you make this happen? Transforming that brilliant idea into a successful business is no walk in the park. And that is exactly where NSRCEL can help you.
      <br />
      <a href="">Now that we have caught your attention</a> 
       <br />
    The Campus Founders – a GPS Fellows initiative is an exciting 4 month program funded by GPS Renewables, specially crafted for recent grads and student entrepreneurs like you!</p>
    </>

  );
}

export default CampusFounders;