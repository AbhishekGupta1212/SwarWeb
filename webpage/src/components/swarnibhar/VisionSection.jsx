import React from 'react';
import VisionCard from './VisionCard';
import styles from './VisionSection.module.css';

const visions = [
  {
    title: "The idea",
    description: "Examine your vision with our subject-matter specialists, covering its inception, development stage, and dissemination throughout the creative process. We have a tried-and-true method of thinking through the concept from start to finish. To put the ideal finishing touches on a gem in the rough, excellent branding is necessary.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a61f4f13e3799a673a5424abc75e5e4d2e4fd0cafbd431ce107fcfcc272f86e0?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    imageAlt: "Idea concept illustration"
  },
  {
    title: "Validation",
    description: "A crucial aspect of our service is timely delivery and testing our findings with your target audience. We consistently validate our findings using data-driven techniques, which have a significant impact on the market.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/26db772ad02de550fff3504b7861baf51e1b1bd927080f22bd0b032f22856c39?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    imageAlt: "Validation process illustration"
  },
  {
    title: "Production",
    description: "Production of polished assets that are consistent with the concept's claim and your personal brand. Our team of professionals will develop a concept that is precisely tailored to your market based on the outcomes of the joint ideation.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f56eda7c7bc77382782c2a403e009761f2fa901e4832819182350f9fcfeedd38?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca",
    imageAlt: "Production process illustration"
  },
  {
    title: "Iteration",
    description: "On your brand's journey, continuous optimization is paramount in a regular iteration process, solutions will constantly analyzed and optimized until every detail reaches a perfect polish.",
    imageSrc: "https://s3-alpha-sig.figma.com/img/30dc/f4b2/a8fa2a78e16e16bd43a640d932f5eeb0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jaFHADixMma15gn~pIaqYVFSNX5VpmF15riqBX7MFIV1WuzHyt2-i2wtyEqB-gbH-NPVfzPHOGDakXKQT7k2bHrarT9-Z8REZQ3-XLXTJwomaMbUzL1ODDXJgZFds9pAMn9H542SU08XJBW4CEXkNE9C2i41xWE4NNHpj~ILW4EjJNwj-Ia3B3miMfXrrYmHMNfIrR-UIkR0GncTyjlqc-oYVBscYzrpIiz6T8~Nh5CegG2Nm1DbRxN9FJCv-eBFhN6YvGyHSmWNs9pRfaIA~7j-1Evj6G2ru7ChuLWL4f3oZ9dsaE4qA-tY9XsdlXqPPzulpV0iF41VbelyAKK8mA__",
    imageAlt: "Iteration on brand"
  }

];

const VisionSection = () => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureGrid}>
        {visions.map((vision, index) => (
          <VisionCard key={index} {...vision} />
        ))}
      </div>
    </section>
  );
};

export default VisionSection;