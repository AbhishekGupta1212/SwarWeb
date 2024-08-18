// import React from 'react';
// import styles from './PartCard.module.css';

// const Step = ({ number, content, outlined }) => {
//   return (
//     <div className={styles.stepContent}>
//       <div className={styles.stepInner}>
//         <div className={`${styles.stepNumber} ${outlined ? styles.outlined : ''}`}>
//           {number}
//         </div>
//         <div className={styles.stepText}>{content}</div>
//       </div>
//     </div>
//   );
// };

// export default Step;
import React from 'react';
import styles from './PartCard.module.css';

const Step = ({ number, content, outlined, onClick }) => {
  return (
    <div className={styles.stepContent} onClick={() => onClick(number)}>
      <div className={styles.stepInner}>
        <div className={`${styles.stepNumber} ${outlined ? styles.outlined : ''}`}>
          {number}
        </div>
        <div className={styles.stepText}>{content}</div>
      </div>
    </div>
  );
};

export default Step;