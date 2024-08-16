import React from "react";
import styles from './TemplateSection.module.css';
import TemplateList from "./TemplateList";

function TemplateSection() {
  return (
    <section className={styles.templateSection}>
      <h2 className={styles.templateh2}>Don't start from scratch — dive right into one of our templates</h2>
      {/* <TemplateList/> */}
    </section>
  );
}

export default TemplateSection;