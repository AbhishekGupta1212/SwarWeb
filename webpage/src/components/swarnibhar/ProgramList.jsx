import React,{useState} from "react";
import styles from "./ProgramList.module.css";
import { ProgramPageComponent } from "../ProgramPageComponents/ProgramPageComponent";
import { Link } from "react-router-dom";
// import CampusFounders from "./CampusFounders/CampusFounders";

const programs = [
  { title: "Summitup 2024", buttonText: "RSVP Now", color: "purple" },
  { title: "Freelancers Incubation", buttonText: "Apply Now", color: "green" },
  { title: "Entrepreneur Incubation", buttonText: "Apply Now", color: "orange" },
  { title: "Swanirbhar 10000 women program", buttonText: "Apply Now", color: "lavender" },
  { title: "Apply to be a motor", buttonText: "Apply Now", color: "pink" }
];

function ProgramList() {
  const [showComponent, setShowComponent] = useState(false);;

  return (
    <ul className={styles.programList}>
      {programs.map((program, index) => (
        <li key={index} className={`${styles.programItem} ${styles[program.color]}`}>
          <span className={styles.programTitle}>{program.title}</span>
          <Link to='/summit'>
         <button className={styles.programButton}>{program.buttonText}</button> 
          </Link>
          
        </li>
      ))}
    </ul>
  );
}

export default ProgramList;