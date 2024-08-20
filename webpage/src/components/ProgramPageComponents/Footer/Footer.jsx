import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const companyLinks = [
    { text: 'About us', href: '#' },
    { text: 'Privacy policy', href: '#' },
    { text: 'Terms & conditions', href: '#' },
    { text: 'Contact us', href: '#' },
  ];

  const quickLinks = [
    { text: 'Hire talent', href: '#' },
    { text: 'Find work', href: '#' },
    { text: 'Projects', href: '#' },
    { text: 'Community', href: '#' },
    { text: 'Events', href: '#' },
    { text: 'Blog', href: '#' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.mainSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftColumn}>
              <h2 className={styles.heroText}>
                Swanirbhar is one of India's largest student communities that provides a one-stop platform for students to learn new skills, network with peers, and{' '}
                <span className={styles.highlight}>grow as an individual.</span>
              </h2>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.credibilityCard}>
                <h3 className={styles.cardTitle}>
                  Establishing <span className={styles.credibilityHighlight}>CREDIBILITY</span> via Joint Accreditation Initiatives
                </h3>
                <div className={styles.logoContainer}>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce2710ca544e442de0dfaff638524067933f328cef91546b344f65ac01a2e7b?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" className={`${styles.logo} ${styles.logo1}`} alt="Accreditation logo 1" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0dffba5392f52dde6ff5a33616838d0f44d6e0fcba1163c32681a4bb3c1b5e9?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" className={`${styles.logo} ${styles.logo2}`} alt="Accreditation logo 2" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81474fdc866bb9b63f46eaa9e253c1511852c88011f4be315a329ed99f6a2096?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" className={`${styles.logo} ${styles.logo3}`} alt="Accreditation logo 3" />
                </div>
                <div className={styles.socialIcons}>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8727e5237439d41dec4d6b2de6824971330701d5840dde3bd30b4775bc4f7b1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" className={styles.socialIcon} alt="Social media icon 1" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6473ee586aff43daa917c0970397a0bc3c5d7e7ec291139ae9bf2ddd673c3b45?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" className={styles.socialIcon} alt="Social media icon 2" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkHeader}>COMPANY</h4>
            {companyLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.link}>
                {link.text}
              </a>
            ))}
          </div>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkHeader}>QUICK LINKS</h4>
            {quickLinks.map((link, index) => (
              <a key={index} href={link.href} className={styles.link}>
                {link.text}
              </a>
            ))}
          </div>
        </nav>
        <p className={styles.footerHeaading}>Swanirbhar</p>
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>All rights reserved. Copyrights © 2024 Ltd.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms & Conditions</a>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c316c85e5158a1374441dfb1f96c3a19015ebc382aea737bd48fe3cea81e791e?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" className={styles.logo} alt="Company logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;