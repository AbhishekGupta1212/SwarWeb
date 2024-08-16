import React from "react";
import styles from "./ProgramList.module.css";

const programs = [
  { title: "Summitup 2024", buttonText: "RSVP Now", color: "purple" },
  { title: "Freelancers Incubation", buttonText: "Apply Now", color: "green" },
  { title: "Entrepreneur Incubation", buttonText: "Apply Now", color: "orange" },
  { title: "Swanirbhar 10000 women program", buttonText: "Apply Now", color: "lavender" },
  { title: "Apply to be a motor", buttonText: "Apply Now", color: "pink" }
];

function ProgramList() {
  return (
    <ul className={styles.programList}>
      {programs.map((program, index) => (
        <li key={index} className={`${styles.programItem} ${styles[program.color]}`}>
          <span className={styles.programTitle}>{program.title}</span>
          <button className={styles.programButton}>{program.buttonText}</button>
        </li>
      ))}
    </ul>
  );
}

export default ProgramList;