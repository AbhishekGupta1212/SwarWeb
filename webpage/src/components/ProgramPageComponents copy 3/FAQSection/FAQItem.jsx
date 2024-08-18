import React, { useState } from 'react';
import styles from './FAQs.module.css';

const FAQItem = ({ question, iconSrc, answer, activeIconSrc }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [icon, setIcon] = useState(iconSrc);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
    setIcon(showAnswer ? iconSrc : activeIconSrc);
  };

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={handleClick}>{question}</div>
      <img loading="lazy" src={icon} alt="" className={styles.faqIcon} />
      {showAnswer && <p className={styles.faqAnswer}>{answer}</p>}
    </div>
  );
};

export default FAQItem;