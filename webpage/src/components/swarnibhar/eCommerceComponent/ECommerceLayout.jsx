import React from 'react';
import styles from './ECommerceLayout.module.css';
import ProductCard from './ProductCard';

const ECommerceLayout = () => {
  const products = [
    {
      id: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef69fe74215691aa0f353fec388903145343479c88311867417402243d25b0e6?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
      author: {
        name: "Robert Ransdell",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cf75fa9e7dd203530366d7705755fad4cc00b861c96453eb8bd97ad16b97f06?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
      },
      title: "Painting tools",
      description: "In Design Tools",
      rating: 5,
      price: 25
    },
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef69fe74215691aa0f353fec388903145343479c88311867417402243d25b0e6?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
      author: {
        name: "Robert Ransdell",
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cf75fa9e7dd203530366d7705755fad4cc00b861c96453eb8bd97ad16b97f06?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
      },
      title: "Painting tools",
      description: "In Design Tools",
      rating: 5,
      price: 25
    }
  ];

  return (
    <main className={styles.eCommerceLayout}>
      <section className={styles.productGrid}>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
};

export default ECommerceLayout;