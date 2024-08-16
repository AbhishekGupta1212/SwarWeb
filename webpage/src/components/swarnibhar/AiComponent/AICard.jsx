import React from 'react';
import styles from './AIComponent.module.css';

function AICard({ image, title, subtitle, shadowColor }) {
  return (
    <article className={styles.card}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a993dac91b920c3498e766d549304da6cdf5d8b503f342da2ce862b15191d81c?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" className={styles.cardBackground} />
      <img
        src={image}
        alt={`Illustration for ${title}`}
        className={styles.cardImage}
        style={{ boxShadow: `0px 10px 4px ${shadowColor}` }}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.visuallyhidden}>{subtitle}</h3>
        <p>{subtitle}</p>
        <p className={styles.cardTitle}>{title}</p>
      </div>
    </article>
  );
}

export default AICard;