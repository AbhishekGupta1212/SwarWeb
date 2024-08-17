import React from "react";

import styles from "./App.module.css";
import Main from "./components/swarnibhar/Main";
import CampusFounders from "./components/ProgramPageComponents/CampusFounders/CampusFounders";
import PartCard from "./components/ProgramPageComponents/Part/PartCard";
import EligibilityCriteria from "./components/ProgramPageComponents/Eligibility/EligibilityCriteria";
import JourneyComponent from "./components/ProgramPageComponents/JourneyComponent/JourneyComponent";
import SignUpSection from "./components/ProgramPageComponents/SignUpSection/SignUpSection";
import BusinessSteps from "./components/ProgramPageComponents/What/BusinessSteps";
import CampusFoundersProgram from "./components/ProgramPageComponents/Help/CampusFoundersProgram";
import FAQs from "./components/ProgramPageComponents/FAQSection/FAQs";

const App = () => {
  return (
    <div className={styles.app}>
      
{/* <Main/> */}

 <CampusFounders/>
 <PartCard/>
 <EligibilityCriteria/>
 <JourneyComponent/>
 <SignUpSection/>
 <BusinessSteps/>
 <CampusFoundersProgram/>
 <FAQs/>
    </div>
  );
};

export default App;