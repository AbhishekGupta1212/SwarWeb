import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ date, title, imageSrc }) => (
  <article className={styles.eventCard}>
    <img src={imageSrc} alt={title} className={styles.eventImage} />
    <div className={styles.eventDetails}>
      <time className={styles.eventDate}>{date}</time>
      <h3 className={styles.eventTitle}>{title}</h3>
    </div>
  </article>
);

export default EventCard;