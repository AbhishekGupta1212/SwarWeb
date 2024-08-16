import React from 'react';
import styles from './FAQs.module.css';

const FAQItem = ({ question, isActive, onClick }) => {
  return (
    <div
      className={`${styles.faqItem} ${isActive ? styles.activeItem : ''}`}
      onClick={onClick}
    >
      <div>{question}</div>
      {isActive && <div className={styles.indicator} />}
    </div>
  );
};

export default FAQItem;