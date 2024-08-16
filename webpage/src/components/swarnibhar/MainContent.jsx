import React from "react";
import ProgramList from "./ProgramList";
import WaitlistButton from "./WaitlistButton";
import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <section className={styles.descriptionSection}>
          <h2 className={styles.description}>
            Thrive Global Creators And Communities: Swanirbhar: Your Platform For Member's Satisfaction And Revenue Generation
          </h2>
          <div className={styles.programsContainer}>
              <WaitlistButton />  
            <ProgramList />
          </div>
        </section>
        <img loading="lazy" src="https://s3-alpha-sig.figma.com/img/0982/0f1d/7533ec207cd8bb99e6b3f5f9f755b614?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HdvlXxpn5AUwskB8kMdFXN7ryC7AmS3LA8l~H~fiXfNpZbkAiGneEGDe-3rZYwJVvEsTxqVSe2Ym94nosRtFKqb6upF2r3LL--DIq3vW~~UKk1eCm92hnXLCbVaYZk3iupWILyz-Hp5AWxfy4h0MjItJAjfDpeGZft9Sc65ntxIFvIDDgKoap9dNmA9R79oAC0HTYkUqo~Ei5R60yvi~Slq5deHDpor2WMjIqqH8WnohpTQfmGGnUdO~HzcOP6UiDkzsXkl3By7qsQKRpUD3XEx5u2IsXgIqIp25txxQseeXGrjq7axirjgjDDjNhneoyTxvKF3xK2BhDF3g4feAXw__" alt="Featured content" className={styles.featuredImage} />
      </div>
    </main>
  );
}

export default MainContent;