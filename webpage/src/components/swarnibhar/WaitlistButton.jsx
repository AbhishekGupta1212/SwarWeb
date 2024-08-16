import React from "react";
import styles from "./WaitlistButton.module.css";


function WaitlistButton() {
const handleClick=()=>{
  alert("Added to Waitlist, please wait for email notification")
 
}
  return (
    <button className={styles.waitlistButton} onClick={handleClick}>
      <span className={styles.buttonText}>Join The Waitlist</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6346415e2eae3a82ef236c6b31f5942471496131028abfc66b7454a2781f6c?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" className={styles.buttonIcon} />
    </button>
  );
}

export default WaitlistButton;