import React from 'react';
import styles from './ForumComponent.module.css';

function UserInfoCard() {
  return (
    <section className={styles.userInfoCard}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52517fcd06df84f43e66a48739c3dac5621bcf18442b754c1bfc3186a0f9683?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Jade Harrison" className={styles.userAvatar} />
      <h2 className={styles.userName}>Jade Harrison</h2>
      <div className={styles.userRole}>Student</div>
      <div className={styles.userStats}>
        <div className={styles.userStatsLeft}>
          <div>Posts :</div>
          <div>Members since :</div>
          <div>Location :</div>
        </div>
        <div className={styles.userStatsRight}>
          <div>3</div>
          <div>25 Nov 2024</div>
          <div>France</div>
        </div>
      </div>
    </section>
  );
}

export default UserInfoCard;