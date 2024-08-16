import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import styles from "./Main.module.css";
import Supporter from "./Suppporter";
import VisionComponent from "./VisionComponent";
import TemplateSection from "./TemplateSection";
import TemplateList from "./TemplateList";
import NavigationMenu from "./NavigationMenu";
import ProjectManagement from "../ProjectsComponents/ProjectManagement";
import MainComponent from "../Why/Main/MainComponent";
import Footer from "./Footer";

function Main() {
  return (
    <div className={styles.mainContainer}>
      {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b339543a9142dee91dd2230c7788b0a6d2b62dba90c1256cdecc55cdd808cf04?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" className={styles.backgroundImage} /> */}
      
      <Header />
      <MainContent />
      <Supporter />
      <VisionComponent/>
      <TemplateSection/>
      <TemplateList/>
      <NavigationMenu/>
      <ProjectManagement/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default Main;