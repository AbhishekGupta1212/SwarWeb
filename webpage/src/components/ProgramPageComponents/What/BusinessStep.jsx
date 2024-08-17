import React from 'react';
import styles from './BusinessSteps.module.css';

const BusinessStep = ({ iconSrc, title, altText }) => {
  return (
    <div className={styles.stepColumn}>
      <div className={styles.stepIconWrapper}>
        <img src={iconSrc} alt={altText} className={styles.stepIcon} />
      </div>
      <h3 className={styles.stepTitle}>{title}</h3>
    </div>
  );
};

export default BusinessStep;