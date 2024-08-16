import React from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = () => {
  const categories = ['All', 'Startup', 'Design', 'Tech', 'Product', 'Marketing'];

  return (
    <>
        <h2 className={styles.heading}>
        Explore projects in different niches
      </h2>
        <nav className={styles.filterContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={styles.filterButton}
          tabIndex="0"
        >
          {category}
        </button>
      ))}
    </nav>
    </>

  );
};

export default CategoryFilter;