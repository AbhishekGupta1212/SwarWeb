import React from "react";
import ProgramList from "./ProgramList";
import WaitlistButton from "./WaitlistButton";
import styles from "./MainContent.module.css";
import Header from "./Header";
import Supporter from "./Suppporter";
import headerbg from '../Images/header-bg.png'
import featuredimg from '../Images/featured.png'
function MainContent() {
  return (
    <main className={styles.mainContent}>
      <img src={headerbg} alt="" className={styles.image} />
      <Header/>
      <div className={styles.contentWrapper}>
        <section className={styles.descriptionSection}>
          <h2 className={styles.description}>
            Swanirbhar takes pride in being a platform that gives people access to tools that enable them to collabrate and create innovative solutions for India's future
          </h2>
          <div className={styles.programsContainer}>
              <WaitlistButton />  
            <ProgramList />
          </div>
        </section>
        <img loading="lazy" src={featuredimg} alt="Featured content" className={styles.featuredImage} />
      </div>
      <Supporter/>
    </main>
  );
}

export default MainContent;