import React, { useState } from 'react';
import styles from './FAQs.module.css';
import FAQItem from './FAQItem';

const faqData = [
  { question: "What exactly is swanirbhar", answer: "Because it is one of india's largest student communities.", isActive: false },
  { question: "Do I have to pay for something?", answer: "No. Swanirbhar is 100% free.", isActive: true },
  { question: "How to find work on swanirbhar", answer: "Because it is one of india's largest student communities.", isActive: false },
  { question: "How to hire?", answer: "Because it is one of india's largest student communities.", isActive: false },
  { question: "My question isn't listed here (Send us feedback)", answer: "Because it is one of india's largest student communities.", isActive: false }
];

const FAQs = () => {
  const [activeFAQ, setActiveFAQ] = useState(1); // initialize active FAQ to the second item

  const handleFAQClick = (index) => {
    setActiveFAQ(index);
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>FAQs</h2>
        <h2>Answers</h2>
      </header>
      <main className={styles.content}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.column}>
            <nav className={styles.faqList}>
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  isActive={index === activeFAQ}
                  onClick={() => handleFAQClick(index)}
                />
              ))}
            </nav>
          </div>
          <div className={styles.column}>
            <article className={styles.answerBox}>
              <div className={styles.answerIndicator} />
              <p className={styles.answerText}>{faqData[activeFAQ].answer}</p>
            </article>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FAQs;