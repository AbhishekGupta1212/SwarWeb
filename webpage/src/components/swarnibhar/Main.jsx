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