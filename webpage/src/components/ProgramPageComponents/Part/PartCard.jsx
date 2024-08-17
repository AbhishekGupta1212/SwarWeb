import React from 'react';
import styles from './PartCard.module.css';
import Step from './Step';
import "react-multi-carousel/lib/styles.css";


const PartCard = () => {
  const steps = [
    { number: 1, content: 'Submit your application on our website', outlined: false },
    { number: 2, content: 'Shortlisted startups will be invited by NSRCEl, IIMB for pitching their ideas to a panel of mentors and experts', outlined: true },
    { number: 3, content: 'Get selected for Campus Founders Program', outlined: true }
  ];

  return (
    <section className={styles.container}>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/937a41044392e7c2c15e87508196660ad76cca1fcef349a5dbe55ed5ebcca107?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
        alt="" 
        className={styles.backgroundImage} 
        aria-hidden="true"
      />
      <h1 className={styles.title}>How can you be part of Campus Founders?</h1>
      
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f05280e8f6a2fd887e3f01c012c86ede2b6f057888e3977d823f856c7b8000?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
            alt="Campus Founders Program visual representation" 
            className={styles.contentImage}
          />
        </div>
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={step.number}
              content={step.content}
              outlined={step.outlined}
            />
          ))}
        </div>
      </div>
      <p className={styles.note}>
        Please note: <span>Selected participants will enter 4-month Campus Founders Incubation program</span>
      </p>
    </section>
  );
};

export default PartCard;