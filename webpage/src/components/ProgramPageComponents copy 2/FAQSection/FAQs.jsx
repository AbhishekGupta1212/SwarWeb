import React from 'react';
import styles from './FAQs.module.css';
import FAQItem from './FAQItem';

const faqData = [
    { question: "Who is eligible to apply for the program?", 
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer:"If you are a college-based startup founder or a recent graduate who is receptive to learning and demonstrates a sense of responsibility for maintaining their entrepreneurial path, this program is the right fit for you"
     },
    { question: "I have recently graduated. Can I still apply for the program?", 
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "Yes, you can still apply for the program" 
     },
    { question: "When can I apply?",
       iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "You can apply anytime"  
     },
    { question: "What can I expect in the incubation program?",
       iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "The incubation program at NSRCEL is designed to help you build your startup, develop a strong team, and gain valuable experience in the startup ecosystem. You will receive mentorship, networking opportunities, and a supportive environment that fosters innovation and growth"
     },
    { question: "Why is this program different from other Incubation programs?", 
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "NSRCEL is a unique program designed to help startup founders and entrepreneurs gain valuable experience and resources in the startup ecosystem. We offer a combination of mentorship, networking opportunities, and a supportive environment that fosters innovation and growth, while also providing a structured and challenging program that requires continuous learning and growth"
     },
    { question: "What does NSRCEL expect from you?", 
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "To be eligible for the NSRCEL program, you must have a strong background in entrepreneurship, startup management, and business administration. You will be required to complete a comprehensive application, which will include a portfolio of your startup's work, a resume, and a cover letter outlining your experience, skills, and goals. You will also be required to attend a series of workshops and presentations to demonstrate your skills and knowledge"
     },
    { question: "What is the duration of the program?",
       iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "The NSRCEL program is designed to be a 12-month program, with the first 4 months focusing on building your startup and developing a strong team, and the remaining 8 months focusing on building your startup and developing a strong team, while also providing continuous learning and growth"
     },
    { question: "Does the program focus on specific sectors or geographies?", 
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "The NSRCEL program is designed to be a comprehensive and inclusive program that offers a variety of opportunities to startups and entrepreneurs from all backgrounds and sectors. We will provide a mix of workshops, networking opportunities, and mentorship that cater to a wide range of skill levels and interests"
     },
    { question: "Where will the program take place?",
       iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "The NSRCEL program will take place at the National Schools for Renewable Energy (NSRCEL) in New York City, a leading public school for renewable energy and sustainable development. We will provide a variety of workshops, networking opportunities, and mentorship that cater to a wide range of skill levels and interests"
     },
    { question: "Will I receive any financial support from NSRCEL?", 
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7413245412b7cca86310e4505df02194ae69c6348faeb762f4afc46ef4d4a2f1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
    activeIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4063ae321ad76b7fd8b1e26add657228bcb532a9ca739b9d32de94e33a8f9793?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", 
      answer: "Yes, you will receive financial support from NSRCEL to help you build your startup, develop a strong team, and gain valuable experience in the startup ecosystem. This support will include tuition, living expenses, and other necessary costs"
     }
];

const FAQs = () => {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>FAQs</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} iconSrc={faq.iconSrc} activeIconSrc={faq.activeIconSrc} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FAQs;