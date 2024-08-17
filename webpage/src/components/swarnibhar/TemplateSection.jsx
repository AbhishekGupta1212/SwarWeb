import React from "react";
import styles from './TemplateSection.module.css';
import TemplateList from "./TemplateList";

function TemplateSection() {
  return (
    <section className={styles.templateSection}>
      <h2 className={styles.templateh2}>Build more than a portfolio</h2>
      {/* <TemplateList/> */}
    </section>
  );
}

export default TemplateSection;