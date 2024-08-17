import React from 'react';
import styles from './FAQs.module.css';
import FAQItem from './FAQItem';

const faqData = [
  { question: "Who is eligible to apply for the program?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "I have recently graduated. Can I still apply for the program?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "When can I apply?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "What can I expect in the incubation program?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "Why is this program different from other Incubation programs?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "What does NSRCEL expect from you?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "What is the duration of the program?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "Does the program focus on specific sectors or geographies?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "Where will the program take place?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
  { question: "Will I receive any financial support from NSRCEL?", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" }
];

const FAQs = () => {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>FAQs</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} iconSrc={faq.iconSrc} />
      ))}
      <p className={styles.faqAnswer}>
        If you are a college-based startup founder or a recent graduate who is receptive to learning and demonstrates a sense of responsibility for maintaining their entrepreneurial path, this program is the right fit for you
      </p>
    </section>
  );
};

export default FAQs;