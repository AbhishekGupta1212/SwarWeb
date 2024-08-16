import React from 'react';
import styles from './RectangleCard.module.css';

const RectangleCard = ({ iconSrc, title, description }) => {
  return (
    <article className={styles.featureCard}>
      <img loading="lazy" src={iconSrc} alt="" className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default RectangleCard;