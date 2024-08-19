import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ difficulty, duration, title, skills, completions }) => {
  return (
    <article className={styles.projectCard}>
      <header className={styles.cardHeader}>
        <span className={`${styles.badge} ${styles[difficulty.toLowerCase()]}`}>{difficulty}</span>
        <span className={styles.duration}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/afe0139bb8e08be7bfcf690c2fb09cf1640fd3d52aef755a6318ca1ae33f1f34?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" className={styles.icon} />
          {duration}
        </span>
      </header>
      <h3 className={styles.projectTitle}>{title}</h3>
      <section className={styles.skillsSection}>
        <h4 className={styles.skillsHeading}>Skills you'll be learning</h4>
        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </section>
      <footer className={styles.cardFooter}>
        <span className={styles.completions}>{completions} completions</span>
      </footer>
    </article>
  );
};

export default ProjectCard;