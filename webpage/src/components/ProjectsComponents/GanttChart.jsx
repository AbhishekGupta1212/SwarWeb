import React from 'react';
import styles from './GanttChart.module.css';

const GanttChart = () => {
  return (
    <div className={styles.container}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fece200291ccd64c8e791b813b5be26b139e4142f146908050e83eb038f05014?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" alt="Gantt chart" className={styles.chart} />
    </div>
  );
};

export default GanttChart;