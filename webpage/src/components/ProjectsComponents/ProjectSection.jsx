import React from 'react';
import ProjectGrid from './ProjectGrid';
import styles from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>Project Challenges</h2>
      <ProjectGrid />
    </section>
  );
};

export default ProjectSection;