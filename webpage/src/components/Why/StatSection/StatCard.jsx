import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ number, description }) => (
  <div className={styles.statCard}>
    <h3 className={styles.statNumber}>{number}</h3>
    <p className={styles.statDescription}>{description}</p>
  </div>
);

export default StatCard;