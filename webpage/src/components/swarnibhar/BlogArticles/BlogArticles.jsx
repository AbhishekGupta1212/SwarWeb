import React from 'react';
import styles from './BlogArticle.module.css';
import ArticleCard from './ArticleCard';

const articles = [
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/144d900b270bcb455aceb12c3a39386f870c92352cd35cbb606482b0ccb028a1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'QUICK ASSESSMENT GUIDE',
    description: 'Happy to announce that a one-pager quick assessment guide is now available for download.',
    author: 'Christopher Poppas',
    date: '27 Apr 2022'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/44b440b42fbf40dd2765983f4cffb8e3c34c4c37db8e12586f2204695b54fc58?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'MARKETING CANVAS MASTER CLASS INTRODUCTION',
    description: 'Happy to announce that a one-pager quick assessment guide is now available for download.',
    author: 'Christopher Poppas',
    date: '27 Apr 2022'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dab0d5f4020c6356703c1e29075b78f38a945933362dc35ec1aab7c8e7de09bb?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'MARKETING CANVAS AND CUSTOMERS',
    description: 'When working on the Customers part of the Marketing Canvas, you are trying to identify relevant',
    author: 'Christopher Poppas',
    date: '27 Apr 2022'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b69233915fc7d761df2c8a0dfdb5910125b873e897b85c57b3dc84858fbbc891?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'THANK YOU - MARKETING METHOD',
    description: 'Happy to announce that a one-pager quick assessment guide is now available for download.',
    author: 'Christopher Poppas',
    date: '27 Apr 2022'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/911ee999d56d933d6dc3f2aaac8419fa016c4a5e2815f1e0c3abd3d4eb9720e7?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'Mastering Enterprise Learning: Unleash The Potential Of Training With The Extended Enterprise LMS [eBook Launch]',
    description: 'Explore how to overcome training challenges and maximize the power of your L&D program with the extended enterprise LMS.',
    author: 'Christopher Poppas',
    date: '27 Apr 2022'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c641a54b1c1b4849dd6b49d83bcd47aaa0b4750991f00ba91372276928a73af3?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    title: 'The Future Of Learning: LMS Trends Transforming Associations In 2024',
    description: 'In 2024, LMS trends like AI-driven personalization, microlearning, mobile learning, data insights, and system integration are revolutionizing associations education delivery.',
    author: 'Christopher Poppas',
    date: '27 Apr 2022'
  }
];

function BlogArticles() {
  return (
    <section className={styles.articleSection}>
      <div className={styles.articleGrid}>
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className={styles.articleRow}>
            {articles.slice(rowIndex * 3, (rowIndex + 1) * 3).map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogArticles;