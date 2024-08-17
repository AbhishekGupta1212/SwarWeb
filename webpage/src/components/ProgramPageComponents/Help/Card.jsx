import React from "react";
import styles from "./CampusFoundersProgram.module.css";

const Card = ({ data }) => {
  return <div className={styles.card}>
    <p>{data}</p>
  </div>;
};

export default Card;
