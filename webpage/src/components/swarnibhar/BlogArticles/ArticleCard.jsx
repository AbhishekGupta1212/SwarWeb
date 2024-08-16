import React from 'react';
import styles from './BlogArticle.module.css';

function ArticleCard({ image, title, description, author, date }) {
  return (
    <article className={styles.articleCard}>
      <img src={image} alt="" className={styles.articleImage} />
      <h2 className={styles.articleTitle}>{title}</h2>
      <p className={styles.articleDescription}>{description}</p>
      <a href="#" className={styles.readMore}>Read More</a>
      <div className={styles.authorInfo}>
        <img src='https://s3-alpha-sig.figma.com/img/e0bf/ada2/60e618980301683f9b2e1b03029cc0e2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nFK07Vx-~dirdufD0jnQrGv4FQUbmNQpUpq8pVFQIAphhJxc1Xr0MFYqUBiYi7b-sHozubO7rmgMCKFVr6plgwLa4iI4xI853T5khjjceVO5s~y6djWAVha72EmaB0nkEADK9blX7s~W01Z5lpkVuJmnWClUn9PlLmgMoQM-rfEWXC3s~WiFkByD~lf4IUZv1hs0oz~Pq-2~Y1bFm1nk0Y29DBSAq0XhI2RxLrJbjtN2-T6749NvzN-pNTSA65-myMnhKo3Mu8qYSNkOM4sIBVsS4ugkptgvfMGPENbZzhu6LR1B-e~e7CIjuP4ftaOM9FU3dj59gBgTIZ6QGH~xEA__' alt="" className={styles.authorAvatar} />
        <div className={styles.authorDetails}>
          <p>By {author}</p>
          <time className={styles.publishDate}>{date}</time>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;