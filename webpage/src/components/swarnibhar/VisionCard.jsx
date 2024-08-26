import React from 'react';
import styles from './VisionCard.module.css';

const VisionCard = ({ title, description,  imageAlt,imageSrc }) => {
  return (
    <article className={styles.featureCard}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <img src={imageSrc} alt={imageAlt} className={styles.image} loading="lazy" />
    </article>
  );
};

export default VisionCard;