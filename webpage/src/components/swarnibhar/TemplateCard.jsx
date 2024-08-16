import React from 'react';
import styles from './TemplateCard.module.css';

const TemplateCard = ({ title, imageSrc, imageAlt }) => {
  return (
    <article className={styles.templateCard}>
      <h2 className={styles.templateTitle}>{title}</h2>
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        loading="lazy" 
        className={styles.templateImage}
      />
    </article>
  );
};

export default TemplateCard;