import React from 'react';
import styles from './CategoryButton.module.css';

const CategoryButton = ({ category }) => (
  <button className={`${styles.categoryButton} ${category === 'ALL' ? styles.active : ''}`}>
    {category}
  </button>
);

export default CategoryButton;