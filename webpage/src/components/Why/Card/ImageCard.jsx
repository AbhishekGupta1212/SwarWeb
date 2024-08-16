import React from 'react';
import styles from './CardContainer.module.css';

const ImageCard = ({ imageUrl, text }) => {
  return (
    <article className={styles.imageCard}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="" className={styles.cardImage} />
        <p className={styles.imageOverlay}>{text}</p>
      </div>
    </article>
  );
};

export default ImageCard;