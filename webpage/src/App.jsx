import React from "react";

import styles from "./App.module.css";
import Main from "./components/swarnibhar/Main";
import { ProgramPageComponent } from "./components/ProgramPageComponents/ProgramPageComponent";

const App = () => {
  return (
    <div className={styles.app}>
      
{/* <Main/> */}

 <ProgramPageComponent/>
    </div>
  );
};

export default App;