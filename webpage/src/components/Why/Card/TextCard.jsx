import React from 'react';
import styles from './CardContainer.module.css';

const TextCard = ({ text }) => {
  return (
    <article className={styles.textCard}>
      <p className={styles.cardText}>{text}</p>
    </article>
  );
};

export default TextCard;