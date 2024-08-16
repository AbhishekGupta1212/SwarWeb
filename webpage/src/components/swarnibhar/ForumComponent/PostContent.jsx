import React from 'react';
import styles from './ForumComponent.module.css';

function PostContent() {
  return (
    <div className={styles.postText}>
      <p>
        Hello everyone ❣️ I don't know if I'm at the right place for my question, but I hope so... 😅 <br />
        In your opinion, what is the best size, dpi and the rest of the settings related to the quality of the PNG file, in order to make the texture looking great and non blurry after uploading it in SL? <br />
        What file format do you prefer to upload in SL - PNG or JPEG? <br />
        What editor/ app/ program do you use to create your textures? <br />
        Also, I work with Photoshop, so I would be very thankful if you can give me a few tips and tricks about the process of creation of textures exactly with this program. <br />
        Thank you for your time! Have an awesome day ☀️
      </p>
      <hr className={styles.postDivider} />
      <footer className={styles.postFooter}>
        <time className={styles.postDate}>21 Jun 2024 | 01:53</time>
        <button className={styles.likeButton}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/13bbbeaecbe650c3f7862706b84e09b464066b914b2a70a7c7df38eb1c7c11c4?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" className={styles.likeIcon} />
          <span>0 Likes</span>
        </button>
      </footer>
    </div>
  );
}

export default PostContent;