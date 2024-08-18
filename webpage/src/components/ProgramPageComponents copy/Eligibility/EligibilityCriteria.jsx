import React from 'react';
import CriteriaItem from './CriteriaItem';
import styles from './EligibilityCriteria.module.css';

const criteriaData = [
  {
    number: '1',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/57cfe36f8f40a06580db11d535f18c98565900d54ac3074c34bd277c7c5d98da?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    description: 'The startup should have a working prototype',
    colorClass: 'blue'
  },
  {
    number: '2',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f79eec10559e2ff88e9957fe86f2e852c0d2d1103496fdb8dc18b084fdcd629?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    description: 'The program is open to students from any academic discipline',
    arrowSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2d2a4d8810d778a468b266e80cf2fd02e437a1a0a7ccaf7368fbcb7ab9bea708?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    colorClass: 'purple'
  },
  {
    number: '3',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b19dcf955e235cf126f6c90e177c761793e6b182919c6e2c4bde78026c98c59a?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    description: 'We are only looking for founders from PAN India',
    arrowSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8235570c7cec25c5a77d7f62a620659d3b46e9504b15ba2257039c0212455125?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    colorClass: 'black'
  },
  {
    number: '4',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c0842a85a5c95f029b6c072f56e03410995e7734b9c9eac05a8adbc3095ad56f?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    description: 'If you have graduated, you must have graduated less than a year ago',
    arrowSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/20c492c21bc24a0f2f7232584d7082621dd043cb1c3117a5f25eac1fb652b4c0?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    colorClass: 'lightPurple'
  }
];

const EligibilityCriteria = () => {
  return (
    <section className={styles.eligibilityCriteria}>
      <div className={styles.criteriaList}>
        {criteriaData.map((criteria, index) => (
          <CriteriaItem key={index} {...criteria} />
        ))}
      </div>
    </section>
  );
};

export default EligibilityCriteria;