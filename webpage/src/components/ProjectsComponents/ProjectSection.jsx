import React from 'react';
import ProjectGrid from './ProjectGrid';
import styles from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>Project Challenges</h2>
      <div data-aos="flip-right"
     data-aos-anchor="#example-anchor"
     data-aos-duration='1500'>
         <ProjectGrid />
</div>
    
     
    </section>
  );
};

export default ProjectSection;