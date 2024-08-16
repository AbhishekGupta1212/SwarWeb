import React from 'react';
import styles from './EventSection.module.css';
import EventCard from './EventCard';
import CategoryButton from './CategoryButton';

const eventCategories = [
  'ALL', 'Marketing', 'Product', 'Design', 'Web & Mobile Development',
  'Video Editing', 'Tech', 'Business & Finance'
];

const pastEvents = [
  {
    date: 'Aug 7, 2022 @ 12:30 AM',
    title: 'Design for Non Designers | Abhinav Chitkara',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6ddf54fe036444e187f159cf60c5c602cc96f8600b14d2e4a7b57ccc5856db6c?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca'
  },
  {
    date: 'Aug 7, 2022 @ 12:30 AM',
    title: 'Let\'s ace the open source',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b0831e62c06858045721b36d3ff76959dbb9d12af98e0cca632aef3a4f2140f7?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca'
  },
  {
    date: 'Aug 7, 2022 @ 12:30 AM',
    title: 'Future of Leadership | Jalak Rawal',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d1a0a2855e81067d348c380422a8b00f2da574e2dc08ca89fd12bea93af77ee5?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca'
  }
];

const EventsSection = () => (
  <section className={styles.eventsSection}>
    <h2 className={styles.sectionTitle}>Upcoming events you shouldn't miss</h2>
    <h2 className={styles.pastEventsTitle}>
      Discover something for every interest: Explore our past events
    </h2>
    <div className={styles.categoryButtons}>
      {eventCategories.map((category, index) => (
        <CategoryButton key={index} category={category} />
      ))}
    </div>
    <div className={styles.eventGrid}>
      {pastEvents.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  </section>
);

export default EventsSection;