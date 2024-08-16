import React from 'react';
import styles from './BlogHeader.module.css';
import { useState } from 'react';
import BlogArticles from '../BlogArticles/BlogArticles';
import LearningManagementSystem from '../LMS/LearningManagementSystem';
import BlogPage from './BlogPage';

const BlogHeader = () => {
  const [activeCategory, setActiveCategory] = useState('Blog'); 

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <header className={styles.header}>
      <div className={styles.categories}>
        <button
          className={`${styles.category} ${activeCategory === 'Blog' ? styles.activeCategory : styles.inactiveCategory}`}
          onClick={() => handleCategoryClick('Blog')}
        >
          Blog
        </button>
        <button
          className={`${styles.category} ${activeCategory === 'Article' ? styles.activeCategory : styles.inactiveCategory}`}
          onClick={() => handleCategoryClick('Article')}
        >
          Article
        </button>
        <button
          className={`${styles.category} ${activeCategory === 'Case Study' ? styles.activeCategory : styles.inactiveCategory}`}
          onClick={() => handleCategoryClick('Case Study')}
        >
          Case Study
        </button>
      </div>
      {activeCategory === 'Blog' && (
        <BlogPage />
      )}
      {activeCategory === 'Article' && (
        <BlogArticles />
      )}
      {activeCategory === 'Case Study' && (
        <LearningManagementSystem />
      )}
    </header>
  );
};

export default BlogHeader;