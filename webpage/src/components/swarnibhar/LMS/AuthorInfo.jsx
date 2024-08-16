import React from "react";
import styles from './LearningManagementSystem.module.css';

function AuthorInfo() {
  return (
    <div className={styles.authorInfo}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0623bc5fb56d57c61c5fdc79238601d1fa2f85960cdee0ac253cd7a30a16114?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Author avatar" className={styles.authorAvatar} />
      <div className={styles.authorDetails}>
        <div className={styles.authorNameFollow}>
          <span className={styles.authorName}>Alicescarl</span>
          <button className={styles.followButton}>Follow</button>
        </div>
        <div className={styles.articleMeta}>
          <span className={styles.readTime}>5 min read</span>
          <time dateTime="2024-06-10">Jun 10, 2024</time>
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;