import React from 'react';
import styles from './EligibilityCriteria.module.css';

const CriteriaItem = ({ number, iconSrc, description, arrowSrc, colorClass }) => {
  return (
    <article className={styles.criteriaItem}>
      <div className={styles.criteriaContent}>
        <div className={styles.criteriaWrapper}>
          <div className={styles.criteriaNumber}>
            <div className={`${styles.criteriaIcon} ${styles[colorClass]}`}>
              <div className={`${styles.iconNumber} ${styles[colorClass]}`}>{number}</div>
              <img loading="lazy" src={iconSrc} alt="" className={styles.iconImage} />
              {arrowSrc ? <img loading="lazy" src={arrowSrc} alt="" className={styles.criteriaArrow} /> : null}
             
            </div>
          </div>
          <p className={styles.criteriaDescription}>{description}</p>
        </div>
      </div>
  
    </article>
  );
};

export default CriteriaItem;