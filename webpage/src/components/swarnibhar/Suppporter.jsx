import React from "react";
import styles from "./Supporter.module.css";
import LogoGallery from "./LogoGallery";

function Supporter() {
  return (
    <section className={styles.supporters}>
      <h2 className={styles.supportersTitle}>OUR SUPPORTERS</h2>
      <LogoGallery/>
    </section>
  );
}

export default Supporter;