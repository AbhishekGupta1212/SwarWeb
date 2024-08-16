import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2a7d150057bd49f94616d15ac0a503847ee10d85092334f66ab0e39eb47b5d4?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Logo" className={styles.logo} />
       {/* <button>Toggle</button> */}
      <div className={styles.headerContent}>
        <div className={styles.tagline}>#SwanirbhaBano</div>
        <h1 className={styles.mainTitle}>Learn,Earn & Yearn</h1>
      </div>
      <button className={styles.loginButton}>Log In</button>
     
    </header>
  );
}

export default Header;