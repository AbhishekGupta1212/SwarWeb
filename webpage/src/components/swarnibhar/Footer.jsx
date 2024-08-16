import React from "react";
import styles from './Footer.module.css';

function Footer() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f8718afa8169bff1fc5a32429dd4e549518dddf12826ef59ac9154489c01d28?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
      className={styles.image}
      alt="Description of the image"
    />
  );
}

export default Footer;