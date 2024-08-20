import React from 'react';
import BusinessStep from './BusinessStep';
import styles from './BusinessSteps.module.css';
import WhatYouCanExpect from './WhatCanYouExpect';

const businessSteps = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/192411ef59353d18b3106c69fe5c77cdf8dd04e41684d85b68b5f301e2d91cf7?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Validate your idea",
    altText: "Idea validation icon"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/84cb7bfa534ae3bcfc659c3f9abc5f55337ec04eeedc1893b7e7968c4c9b4df1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Test and refine your business model",
    altText: "Business model refinement icon"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2bc801e46a360aea72e45ba935d49f5a65336c8c5fbaad7bd41d17f5fb9f000?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Figure out the value proposition for your business",
    altText: "Value proposition icon"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/712eb9ab7ad2a3a848e2d762699320d028ec0999abf5e513aa6705a77f59d5df?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Develop a growth driven product roadmap",
    altText: "Product roadmap icon"
  }
];

const data = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/70ec55822b790f93ca8afcd4b1130a48fa4a75181a6f8cfb6d143cfc49304ca4?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Craft a Go-To-Market strategy"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c8d0648d6579a84ab9995d788c19aaebd8a144b61c09c24b8dd6c911f9ba8f8?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Gain the ability to secure startup funding"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3959a1ac848e5cdc5ddf821802e750f89b7278a0853145746a934eeae0e113bf?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Learn the essentials of legal, finance and marketing"
  }]

const BusinessSteps = () => {
  return (
    <section className={styles.container}>
      <div className={styles.stepsWrapper1}>
        {businessSteps.map((step, index) => (
          <BusinessStep
            key={index}
            iconSrc={step.iconSrc}
            title={step.title}
            altText={step.altText}
          />
        ))}
      </div>
      <div className={styles.stepsWrapper2}>
        {data.map((step, index) => (
          <BusinessStep
            key={index}
            iconSrc={step.iconSrc}
            title={step.title}
            altText={step.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default BusinessSteps;