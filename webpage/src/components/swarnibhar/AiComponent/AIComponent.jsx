import React from 'react';
import styles from './AIComponent.module.css';
import AICard from './AICard';



const cardData = [
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e2123a1c90814d487116bb5d94c1bfcb547f836e99568b574a3bf568da298b61?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'Customer Support',
    subtitle: '24x7',
    shadowColor: 'rgba(226, 78, 233, 1)',
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c1c30debc70991baba5d670c18ae403972756edcb620349f124346752a57a655?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'Employee Support',
    subtitle: 'Automated',
    shadowColor: 'rgba(107, 65, 254, 1)',
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/29fea17ae37326301b2247f3def741ec43ec8909141ad1f98345440543333445?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'Commerce',
    subtitle: 'Conversational',
    shadowColor: 'rgba(254, 179, 66, 1)',
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc8866c23d05aa19b8adaaaf87cab9ad4a61de320c1e56e830697a16fd602cda?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'trained on your Data',
    subtitle: 'AI Copilots',
    shadowColor: 'rgba(106, 88, 201, 0.25)',
  },
];

function AIComponents() {
  return (
    <main className={styles.container}>
      <section className={styles.cardContainer}>
        <div className={styles.cardGrid}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.cardColumn}>
              <AICard {...card} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AIComponents;