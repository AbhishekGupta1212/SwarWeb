import React from 'react';
import styles from './SignUpSection.module.css';
import LogoImage from './LogoImage';

const SignUpSection = () => {
  return (
    <section className={styles.container}>
      <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e13b25da8c2754ae29fbe22301532b28fcfa4544a3609eb876250c72648e3836?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" className={styles.logo} alt="" />
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
              <div className={styles.imageStack}>
                <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ccdc5926f07eb462168531e9ae02aff38028ef61f7b4762324fb7a138469ce?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" />
                <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/3688fbe0c4633136871c541f71023f0cd5e417ab82167c6512905babbc0540c5?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.signUpContent}>
                <h2 className={styles.signUpHeading}>Sign up here to get started!</h2>
                <div className={styles.maskGroup} aria-hidden="true" />
                <button className={styles.submitButton}>
                  Submit your application here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/f58a4b7c7ebee9d9ad72f608c0a472ae92b8a60455c99208e631aee6161b5bbc?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" />
          <div>
            <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/baa7cea78b41ec2776f86738c3adc8e8117dea6aa8e947b7134b31fd19a25cbc?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" />
            <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a18b51a263db6cf31f47eb98bc3669e6fe1c60644f828f21f85b5ca1809527?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;