import React from 'react';
import styles from './MilestoneChart.module.css';

const MilestoneChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.percentage}>
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <div className={styles.title}>Milestones</div>
                <div className={styles.statisticsWrapper}>
                  <div className={styles.statisticsContent}>
                    <div className={styles.percentageInner}>36%</div>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b04ac8f6e261cabdb06579eeed5c73de6c96b6d97171de35c944dad1dd4112?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="" className={styles.icon} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.tab}>
                <div className={styles.tabInner}>80%</div>
              </div>
            </div>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dfb80dd4703aa07f3d4bbc6c597c26a379f5660f05157f6cee961fe269e7ea3?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Milestone chart" className={styles.chart} />
        </div>
      </div>
    </div>
  );
};

export default MilestoneChart;