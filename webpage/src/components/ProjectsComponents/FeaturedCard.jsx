import React from 'react';
import styles from './FeaturedCard.module.css';

const FeatureCard = ({ iconSrc, title, description, decorativeIconSrc }) => {
  return (
    <div className={styles.card}>
      <img src={iconSrc} alt="" className={styles.icon} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <img src={decorativeIconSrc} alt="" className={styles.decorativeIcon} />
    </div>
  );
};

export default FeatureCard;