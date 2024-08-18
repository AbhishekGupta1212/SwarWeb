import React from 'react';
import styles from './SignUpSection.module.css';

const LogoImage = ({ src, alt, className }) => {
  return (
    <img 
      loading="lazy" 
      src={src} 
      alt={alt} 
      className={`${styles.logo} ${className || ''}`}
    />
  );
};

export default LogoImage;