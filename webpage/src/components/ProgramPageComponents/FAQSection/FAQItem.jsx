import React from 'react';
import styles from './FAQs.module.css';

const FAQItem = ({ question, iconSrc }) => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion}>{question}</div>
      <img loading="lazy" src={iconSrc} alt="" className={styles.faqIcon} />
    </div>
  );
};

export default FAQItem;