import React from "react";
import styles from './LogoGallery.module.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
const logoData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2719b87237d6e90423ac66775623d07fecd9ee0282a782e400e2884a7607157f?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 1", className: styles.logo1 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d3b30c60e4e6dc008f1d2be5adbdfd73322fdb9f29a115c521de4f8551fb628?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 2", className: styles.logo2 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e7599a5c4295868c9bd5afdab96ce0c179d7072c0aaa24be85e4636205ef327?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 3", className: styles.logo3 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/36ba00045356ae3aa83dbf49f01a15d8acfcf54379b32d5a52e99d05cf9eb0d3?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 4", className: styles.logo4 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bbac70675d23bae20ba9e5e098cbe7304fca2d6f5ba49993075b46a5621d9dd?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 5", className: styles.logo5 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a5fff75043ce58b7bf4182498cede6dd38d1366090a639e95752b2478f5028d?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca", alt: "Company logo 6", className: styles.logo6 },
];

function LogoGallery() {
  return (
<div className={styles.logoGallery}>
  {logoData.map((item, index) => (
    <img
      key={index}
      src={item.src}
      className={`${styles.item} ${item.className}`}
    />
  ))}
</div>
  );
}


export default LogoGallery