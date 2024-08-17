import React from 'react';
// import FeatureCard from './FeatureCard';
import styles from './Rectangle.module.css';
import RectangleCard from './RectangleCards';

const RectangleData = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0d34bf93685f1c4ff94c6c4b7a9c0d29f1005e4a472263c858a64af62b6a586?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Become launch ready",
    description: "Develop outstanding evidence of work to launch your career"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e150eb675fee652d48a329a7506f915927640b55ff27efee538f163cfb2f39b7?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Gain knowledge by doing.",
    description: "Upskill by constructing practical projects under expert guidance"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/22cf411cf7bd8e8284339cefd7bc0f5609efb0cda1b97546f781a8e3fd568949?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    title: "Get feedback",
    description: "Grow with the community and get feedback from mentors"
  }
];

const Rectangle = () => {
  return (
    <section className={styles.featureCardsContainer}>
      <div className={styles.featureCardsGrid}>
        {RectangleData.map((card, index) => (
          <div key={index} className={styles.featureCardWrapper}>
            <RectangleCard
              iconSrc={card.iconSrc}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rectangle;