// import React, { useState } from 'react';
// import styles from './CampusFoundersProgram.module.css';
// import Card from './Card';

// const CampusFoundersProgram = () => {
//   const cardContents = [
//     {content:'TACKLING THE CHALLENGES',
//       flipContent:'As students, we are certain that youre brimming with enthusiasm and big dreams. However, you may want to build knowledge about the real-life obstacles you may face. Thats why you can benefit from a program that helps you understand the challenges ahead and equips you with the tools to overcome them.'
//     },
//     {content:'BUSINESS KNOW-HOW',
//       flipContent:'Sure, youve got creativity and ideation skills in your backpacks, but what about the nitty-gritty of running a business? You need to learn the fundamentals of business concepts and strategies that will empower you to manage and grow your startups successfully.'
//     },
//     {content:'ENTREPRENEURIAL MINDSET',
//       flipContent:'Building a startup entails more than just having a great idea. It calls for an entrepreneurial mindset, resilience, and a strong support system. These qualities are necessary for you to thrive as a founder, however, these become secondary if the focus is solely on innovation.'
//     },
//   ];

//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h2 className={styles.title}>How Campus Founders Program can help you?</h2>
//         <div className={styles.cardContainer}>
//           {cardContents.map((el, index) => (
//             <div className={styles.cardGrid} key={index}>
//               <Card data={el} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CampusFoundersProgram;

import React from 'react';
import styles from './CampusFoundersProgram.module.css';
import Card from './Card';


const CampusFoundersProgram = () => {
  const cardContents = [
    {content:'TACKLING THE CHALLENGES',
      flipContent:'As students, we are certain that youre brimming with enthusiasm and big dreams. However, you may want to build knowledge about the real-life obstacles you may face. Thats why you can benefit from a program that helps you understand the challenges ahead and equips you with the tools to overcome them.'
    },
    {content:'BUSINESS KNOW-HOW',
      flipContent:'Sure, youve got creativity and ideation skills in your backpacks, but what about the nitty-gritty of running a business? You need to learn the fundamentals of business concepts and strategies that will empower you to manage and grow your startups successfully.'
    },
    {content:'ENTREPRENEURIAL MINDSET',
      flipContent:'Building a startup entails more than just having a great idea. It calls for an entrepreneurial mindset, resilience, and a strong support system. These qualities are necessary for you to thrive as a founder, however, these become secondary if the focus is solely on innovation.'
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>How Campus Founders Program can help you?</h2>
        <div className={styles.cardContainer}>
 
            {cardContents.map((el, index) => (
     <div className={styles.cardGrid} key={index}>
              <Card  data={el} />

          </div>
            ))}
       </div>
      </div>
    </section>
  );
};

export default CampusFoundersProgram;