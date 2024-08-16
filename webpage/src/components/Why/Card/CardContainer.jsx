import React from 'react';
import styles from './CardContainer.module.css';
import ImageCard from './ImageCard';
import TextCard from './TextCard';

const CardContainer = () => {
  const cards = [
    {
      type: 'image',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c27d73872af24cf26642dd2f5758f76cdde44c008f4b9bc5850765029820ddde?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
      text: 'Zero commission (It\'s Actually free)'
    },
    {
      type: 'text',
      text: 'Only pre-Screened, high quality candidates'
    }
  ];

  return (
    <main className={styles.cardContainer}>
      <section className={styles.cardGrid}>
        {cards.map((card, index) => (
          card.type === 'image' ? (
            <ImageCard key={index} imageUrl={card.imageUrl} text={card.text} />
          ) : (
            <TextCard key={index} text={card.text} />
          )
        ))}
      </section>
    </main>
  );
};

export default CardContainer;