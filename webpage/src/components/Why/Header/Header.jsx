import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const logos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/57d450e6798a2508fdfb98cd5f94474d52a316fe1a919cd25c64b53f32187555?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Logo 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/87e620ac4f7ac145b599a9fa69399d4ca93c33167d0ae9018cae4de0e63a5de0?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Logo 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6c998a325201ddc82b71e01cd557ef3c8803d7461110ed57615a44e48396e10?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Logo 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f51a64a1911058ab0d28175e83b793bf1ec7358936f51506078eebe36412379?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Logo 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d94299b28f4ecbcf064e7b9cb141317bf0109637602e933d016f9f84b6d6e0ac?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Logo 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/34be3292d4e3d200181e37fedcb082bb02419c41ead986faf406a5d7758f9cd6?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Logo 6" }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className={styles[`logo${index + 1}`]} />
        ))}
      </div>
    </header>
  );
};

export default Header;