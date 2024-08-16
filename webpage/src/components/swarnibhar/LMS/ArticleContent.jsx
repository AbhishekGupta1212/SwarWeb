import React from "react";
import styles from './LearningManagementSystem.module.css';
import AuthorInfo from './AuthorInfo';

function ArticleContent() {
  return (
    <article className={styles.contentContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainColumn}>
          <div className={styles.articleContent}>
            <AuthorInfo />
            <h2 className={styles.articleTitle}>
              <strong>Learning Management Systems</strong> (LMS)
            </h2>
            <p className={styles.articleText}>
              Learning Management Systems (LMS) have transformed the landscape of education by providing innovative solutions for online and blended learning. These platforms offer a wide range of tools and features that streamline course management, enhance engagement, and support personalized learning experiences. Educational institutions around the world have recognized the benefits of LMS and have implemented them to improve teaching and learning outcomes. In this article, we will explore several case studies of successful LMS implementations in educational institutions, highlighting their unique challenges, strategies, and the positive impact on students, educators, and the institutions as a whole.
            </p>
            <div className={styles.socialIcons}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8276f286efb26fa6e0d134f837f1d7fad7a38f5ae1cee351a041595ed54057f5?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Social media icon" className={styles.socialIcon} />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec640f9fe57ebf62d745abeef16cbf7add917797edc44df2c7bc5fb8c45be2d?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Social media icon" className={styles.socialIconWide} />
            </div>
          </div>
        </div>
        {/* <div className={styles.dividerColumn}>
          <hr className={styles.divider} />
        </div> */}
        <div className={styles.imageColumn}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/62bd1dcc6bd70084c6d767286532dbecb9dc1f4101d1e8718c8507dc321497f7?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Illustration related to Learning Management Systems" className={styles.articleImage} />
        </div>
      </div>
    </article>
  );
}

export default ArticleContent;