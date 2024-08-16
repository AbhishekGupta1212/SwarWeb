import React from 'react';
// import Template from './Template';
import styles from './TemplateList.module.css';
import TemplateCard from './TemplateCard';

const templateData = [
  {
    title: "Whiteboarding",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb6414901799aac17efed548d7d221663b0b491be690546c34d3bff9001eff5b?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    imageAlt: "Whiteboarding feature illustration"
  },
  {
    title: "Customer Journey Mapping",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f8f685f13ad28a39a7e5fc373d9403fe81e2c3ae9cfb1de537e4e29adc77d1d?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    imageAlt: "Customer Journey Mapping feature illustration"
  },
  {
    title: "Technical Diagramming",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/01ed028385fb94118dcf9e1af15cd774c6bca9dd4752ae9e367cf43cc7a605a1?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    imageAlt: "Technical Diagramming feature illustration"
  },
  {
    title: "Mind Mapping",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e6dc4ba9a03de6b33248f96910123a95abcd799e834259e2376d5afff42a36d?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    imageAlt: "Mind Mapping feature illustration"
  },
  {
    title: "Scaled Product Planning",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/51fd83cc91656535e4f7048813dadf05642148f4ec140184a46936e46bba9cf9?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    imageAlt: "Scaled Product Planning feature illustration"
  }
];

const TemplateList = () => {
  return (
    <section className={styles.templateList}>
      {templateData.map((feature, index) => (
        <TemplateCard
          key={index}
          title={feature.title}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
        />
      ))}
    </section>
  );
};

export default TemplateList;