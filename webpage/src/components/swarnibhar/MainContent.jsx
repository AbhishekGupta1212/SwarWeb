import React from "react";
import ProgramList from "./ProgramList";
import WaitlistButton from "./WaitlistButton";
import styles from "./MainContent.module.css";
import Header from "./Header";
import Supporter from "./Suppporter";

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <img src="https://s3-alpha-sig.figma.com/img/047b/1ff6/b942cc95041f69a84cbd27c52d7c0bc7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GoggCSYVjIbCtkRwbczsg5D2nHuXVuEkClSoa7jA0fvh3XSpGyR1QtBYTk8S-uaX43fKeQ99gszhQcNrlOky9DUZvHM2C0b98oiGd96PiAoiVJyo13qiVXd~s1MlZiOgxvLPdyJirPMSwowByilZp2gWE0NP2gpAfvVoyD5SCd4u5C2DGvaJaMFMVUk8L~auewvtyEP7gALz0wGY9DdbYeRQY8CP8X~o7sAgu3VmZYxeuWa13uxLfY67jjOgUxN7aEXYQWm5VDjLGNnDnKrkVR~n6jVroFRhqA1PTXmHiFvOfEA0GB02DxDGnGff8k15twoXFowEU6KDQa~ukfp5cQ__" alt="" className={styles.image} />
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
        <img loading="lazy" src="https://s3-alpha-sig.figma.com/img/0982/0f1d/7533ec207cd8bb99e6b3f5f9f755b614?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HdvlXxpn5AUwskB8kMdFXN7ryC7AmS3LA8l~H~fiXfNpZbkAiGneEGDe-3rZYwJVvEsTxqVSe2Ym94nosRtFKqb6upF2r3LL--DIq3vW~~UKk1eCm92hnXLCbVaYZk3iupWILyz-Hp5AWxfy4h0MjItJAjfDpeGZft9Sc65ntxIFvIDDgKoap9dNmA9R79oAC0HTYkUqo~Ei5R60yvi~Slq5deHDpor2WMjIqqH8WnohpTQfmGGnUdO~HzcOP6UiDkzsXkl3By7qsQKRpUD3XEx5u2IsXgIqIp25txxQseeXGrjq7axirjgjDDjNhneoyTxvKF3xK2BhDF3g4feAXw__" alt="Featured content" className={styles.featuredImage} />
      </div>
      <Supporter/>
    </main>
  );
}

export default MainContent;