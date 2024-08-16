import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, author, title, description, rating, price }) => {
  return (
    <article className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <div className={styles.authorInfo}>
          <img src={author.avatar} alt={author.name} className={styles.authorAvatar} />
          <div className={styles.authorName}>
            {author.name}
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9042f1287d9e0ece7a1138c4d47ba703fa64568f3c91410c5e30c8f4a55baa13?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" className={styles.verifiedIcon} />
          </div>
        </div>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.productRating}>
          {[...Array(5)].map((_, index) => (
            <img key={index} src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c659b6b6ec929c6fb9739694f07da7e86193e231ed92155489f1006fbf27c1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" className={styles.starIcon} />
          ))}
          <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
        </div>
        <p className={styles.productPrice}>${price}</p>
      </div>
    </article>
  );
};

export default ProductCard;