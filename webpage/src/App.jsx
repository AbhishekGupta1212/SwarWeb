import React from "react";

import styles from "./App.module.css";
import Main from "./components/swarnibhar/Main";
import { ProgramPageComponent } from "./components/ProgramPageComponents/ProgramPageComponent";
import { AllRoutes } from "./components/Routes/AllRoutes";

const App = () => {
  return (
    <div className={styles.app}>
      <AllRoutes/>
{/* <Main/> */}
{/* <ProgramPageComponent/> */}
    </div>
  );
};

export default App;