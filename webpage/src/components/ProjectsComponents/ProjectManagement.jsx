import React from 'react';
import styles from './ProjectManagement.module.css';
import ProjectStatistics from './ProjectStatics';
import FeatureCard from './FeaturedCard';
import MilestoneChart from './MilestoneChart';
import GanttChart from './GanttChart';
import Rectangle from './Rectangle';
import CategoryFilter from './CategoryFilter';
import ProjectSection from './ProjectSection';
import OnePlace from './OnePlace';


const ProjectManagement = () => {
  return (
    <main className={styles.container}>
      <ProjectStatistics />
      <section className={styles.row}>
        <div className={styles.column}>
          <FeatureCard
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/34711f3eaf10664bce9c3a94f2ef1607b519ddd925f353d8758af24711798381?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
            title="Milestones"
            description="Project milestones provide clear progress markers, aiding in tracking and timely adjustments."
            decorativeIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d9475dcaae0f5e2c0c30c72c68feeb6678a572b651fd8e429b5a3ae7436132?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
          />
        </div>
        <div className={styles.columnRight}>
        <div data-aos="zoom-in-down">
            <MilestoneChart />
        </div>
        
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles.column}>
        <div data-aos="zoom-in-down">
             <GanttChart />
        </div>
       
        </div>
        <div className={styles.columnRight}>
          <FeatureCard
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/34711f3eaf10664bce9c3a94f2ef1607b519ddd925f353d8758af24711798381?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
            title="Gantt"
            description="Project Gantt chart visualize tasks and timelines, enhancing project scheduling and coordination"
            decorativeIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d9475dcaae0f5e2c0c30c72c68feeb6678a572b651fd8e429b5a3ae7436132?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
          />
        </div>
      </section>
      <h2 className={styles.sectionTitle}>Create a portfolio of work that brings in profit.</h2>
      <div data-aos="flip-up">
           <Rectangle/>
      </div>
   
      <CategoryFilter/>


     <ProjectSection/>
     <div data-aos="zoom-out-right">
       <OnePlace/>
     </div>
     
    </main>
  );
};

export default ProjectManagement;