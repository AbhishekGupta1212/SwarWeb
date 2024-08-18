// import React from 'react';
// import styles from './PartCard.module.css';
// import Step from './Step';
// import "react-multi-carousel/lib/styles.css";


// const PartCard = () => {
//   const steps = [
//     { number: 1, content: 'Submit your application on our website', outlined: false },
//     { number: 2, content: 'Shortlisted startups will be invited by NSRCEl, IIMB for pitching their ideas to a panel of mentors and experts', outlined: true },
//     { number: 3, content: 'Get selected for Campus Founders Program', outlined: true }
//   ];

//   return (
//     <section className={styles.container}>
//       <img 
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/937a41044392e7c2c15e87508196660ad76cca1fcef349a5dbe55ed5ebcca107?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
//         alt="" 
//         className={styles.backgroundImage} 
//         aria-hidden="true"
//       />
//       <h1 className={styles.title}>How can you be part of Campus Founders?</h1>
      
//       <div className={styles.contentWrapper}>
//               <div className={styles.imageContainer}>
//           <img 
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f05280e8f6a2fd887e3f01c012c86ede2b6f057888e3977d823f856c7b8000?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
//             alt="Campus Founders Program visual representation" 
//             className={styles.contentImage}
//           />
//         </div>
//         <div className={styles.stepsContainer}>
//           {steps.map((step, index) => (
//             <Step 
//               key={index}
//               number={step.number}
//               content={step.content}
//               outlined={step.outlined}
//             />
//           ))}
//         </div>
//       </div>
//       <p className={styles.note}>
//         Please note: <span>Selected participants will enter 4-month Campus Founders Incubation program</span>
//       </p>
//     </section>
//   );
// };

// export default PartCard;

import React, { lazy, useState } from 'react';
import styles from './PartCard.module.css';
import Step from './Step';
import "react-multi-carousel/lib/styles.css";

const PartCard = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    { number: 1, content: 'Submit your application on our website', outlined: false, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8f05280e8f6a2fd887e3f01c012c86ede2b6f057888e3977d823f856c7b8000?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" },
    { number: 2, content: 'Shortlisted startups will be invited by NSRCEl, IIMB for pitching their ideas to a panel of mentors and experts', outlined: false, image: "https://s3-alpha-sig.figma.com/img/8f5f/5855/e126bc4e7b58a0ee1efb191028bf6038?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNV-T37ueEA18-mO27dnNzSKb3S-1xJnFmW4p0AT2cWSLdEmil7q3zelWnFVoFfUdv0ruor-JBfmYhoJK2NiXqaLPEPT99pzg16Dl4kxT-7SXUO5PYieLZBR2FloG9pxbLBZafSuGY7QbrvNHYpeNcfF9unZsYUO90rkmoPX7Y4UYBuDNMgGJANl5kRdVKZC7pGuzgOKK0Znu4FHLPCszDEnh5WVGEDbxNfdY32kLK~sPDcMOD0rMhp2M5cdSorho0yC8LKayjSvx267rdCwJ3GIExNgpChzKHaUTi~j-CO9MEF~IDvqJYRDd-r82YX-zOHL79yiV~ZPJgvYjlRFAA__"},
    { number: 3, content: 'Get selected for Campus Founders Program', outlined: false, image: "https://s3-alpha-sig.figma.com/img/e442/5b8d/68fff781815ef90a27887e87f7ffeb28?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHMT5O9huky75DeqTrsgTQUnXQ4eN8lxklKeTf1A5XtLWmucFbWYUkhpXsn26OTmmT7eNH5BzLMmJOeuhmU5EK~Y8ljGX3Q261t8J8saxCA01FYnoABp5ZRCDWCG1oQ8xk4p7rTZfAQYHxd~UCtHiKNNAN7JQUHj7fGHRMCnIYONsnFrctn6JW9akHw8KZtm4YH9yhKhKekX7VynDe3vESV~lvRm4eXDLS3yVJ862-eJjTRSKUV0380zbkDuT-YBg3NmOkPaXjDtbzcbEFpzTwj0C0gxReuSkBeAy1LiCB4LJe9i6p6r0Omh1ptKafgoN5pAho9ofzK119gyq3euvQ__" }
  ];

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
  };

  return (
    <section className={styles.container}>
      
      <img 
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/937a41044392e7c2c15e87508196660ad76cca1fcef349a5dbe55ed5ebcca107?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca'
        alt="" 
        className={styles.backgroundImage} 
        aria-hidden="true"
      />
      <h1 className={styles.title}>How can you be part of Campus Founders?</h1>
      
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>

        <img 
            src={`${steps[activeStep - 1].image}`} 
            alt="Campus Founders Program visual representation" 
            className={styles.contentImage}
     
          />

        </div>
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={step.number}
              content={step.content}
              outlined={step.number === activeStep}
              onClick={() => handleStepClick(step.number)}
            />
          ))}
        </div>
      </div>
      <p className={styles.note}>
        Please note: <span>Selected participants will enter 4-month Campus Founders Incubation program</span>
      </p>
    </section>
  );
};

export default PartCard;