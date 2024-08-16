import React from 'react';
import styles from './BlogPost.module.css';

const BlogPost = ({ author, date, title, content, imageSrc, comments, views }) => {
  return (
    <article className={styles.blogPost}>
      <header className={styles.authorInfo}>
        <img src={author.avatar} alt={author.name} className={styles.authorAvatar} />
        <span className={styles.authorName}>{author.name}</span>
        <span className={styles.postDate}>{date}</span>
      </header>
      <h2 className={styles.postTitle}>{title}</h2>
      <p className={styles.postContent}>{content}</p>
      {imageSrc && <img src={imageSrc} alt="" className={styles.postImage} />}
      <footer className={styles.postFooter}>
        <div className={styles.postStats}>
          <button className={styles.readMore}>Read more</button>
          <span>View all {comments} comments</span>
          <span>View : {views}</span>
        </div>
        <div className={styles.interactionIcons}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bccfda6bcf94f92caf73e0a602fbbf3ca0401813e8b243cce4460098ba5854c?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Like" className={styles.icon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa4cbf8cb4dc8689e6d9dc828ad24d2e7fb4a055a9d89ca60c97df62f2ed031?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Comment" className={styles.icon} />
        </div>
      </footer>
    </article>
  );
};

export default BlogPost;