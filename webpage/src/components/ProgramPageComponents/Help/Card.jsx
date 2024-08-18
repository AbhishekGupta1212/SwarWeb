import React,{useState} from 'react';
import styles from './CampusFoundersProgram.module.css';

const Card = ({ data }) => {

  const {content, flipContent} = data;

  return (
    <div className={styles.card}>
      <div
      className={styles.flipCardInner}  >
      <div
        className={styles.flipCardFront} >
      <p>{content}</p>
      </div>
      <div
        className={styles.flipCardBack} >
        <p className={styles.backContent}>{flipContent}</p>
      </div>
    </div>
    </div>
  );
};

export default Card;