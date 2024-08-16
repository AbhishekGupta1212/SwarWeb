import React from "react";
import styles from './VisionComponent.module.css';
import FeatureSection from "./VisionSection";

function VisionComponent() {
  return (
    <>
     <section className={styles.visionText}>Vision</section>
     <FeatureSection/>
    </>
   
  );
}

export default VisionComponent;