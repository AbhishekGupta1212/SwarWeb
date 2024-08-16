import React from 'react';
import styles from './ForumComponent.module.css';
import UserInfoCard from './UserInfoCard';
import PostContent from './PostContent';



function ForumComponent() {
  return (
    <main className={styles.forum}>
      <article className={styles.postContainer}>
        <div className={styles.postContent}>
          <div className={styles.userInfoColumn}>
            <UserInfoCard />
          </div>
          <div className={styles.postColumn}>
            <PostContent />
          </div>
        </div>
      </article>
    </main>
  );
}

export default ForumComponent;