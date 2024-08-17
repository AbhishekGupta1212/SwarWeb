import React from "react";
import styles from './VisionComponent.module.css';
import FeatureSection from "./VisionSection";

function VisionComponent() {
  return (
    <>
     <section className={styles.visionText}>Things You Can Do On Swanirbhar.</section>
     <FeatureSection/>
    </>
   
  );
}

export default VisionComponent;