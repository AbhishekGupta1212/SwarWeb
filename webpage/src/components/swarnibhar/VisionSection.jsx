import React from 'react';
import VisionCard from './VisionCard';
import styles from './VisionSection.module.css';
import Carousel from 'react-multi-carousel';
import iterationimg from '../Images/iteration.png'
import productionimg from '../Images/production.png'
import validationimg from '../Images/validation.png'
import ideaimg from '../Images/idea.png'

const visions = [
  {
    title: "The idea",
    description: "Examine your vision with our subject-matter specialists, covering its inception, development stage, and dissemination throughout the creative process. We have a tried-and-true method of thinking through the concept from start to finish. To put the ideal finishing touches on a gem in the rough, excellent branding is necessary.",
    imageSrc: ideaimg,
    imageAlt: "Idea concept illustration"
  },
  {
    title: "Validation",
    description: "A crucial aspect of our service is timely delivery and testing our findings with your target audience. We consistently validate our findings using data-driven techniques, which have a significant impact on the market.",
    imageSrc: validationimg,
    imageAlt: "Validation process illustration"
  },
  {
    title: "Production",
    description: "Production of polished assets that are consistent with the concept's claim and your personal brand. Our team of professionals will develop a concept that is precisely tailored to your market based on the outcomes of the joint ideation.",
    imageSrc: productionimg,
    imageAlt: "Production process illustration"
  },
  {
    title: "Iteration",
    description: "On your brand's journey, continuous optimization is paramount in a regular iteration process, solutions will constantly analyzed and optimized until every detail reaches a perfect polish.",
    imageSrc: iterationimg,
    imageAlt: "Iteration on brand"
  }

];

const VisionSection = () => {
  return (
    <section className={styles.featureSection}>
      
      <Carousel
         additionalTransfrom={0}
         arrows={false}
         autoPlaySpeed={3000}
         centerMode={false}
         className=""
         containerClass="container"
         dotListClass=""
         draggable={true}
         focusOnSelect={false}
         infinite={false}
         itemClass=""
         keyBoardControl
         minimumTouchDrag={40}
         pauseOnHover
         renderArrowsWhenDisabled={false}
         renderButtonGroupOutside={false}
         renderDotsOutside={false}
         responsive={{
           desktop: {
             breakpoint: {
               max: 3000,
               min: 1024
             },
             items: 3,
             partialVisibilityGutter: 40
           },
           mobile: {
             breakpoint: {
               max: 464,
               min: 0
             },
             items: 2,
             partialVisibilityGutter: 30
           },
           tablet: {
             breakpoint: {
               max: 1024,
               min: 464
             },
             items: 2,
             partialVisibilityGutter: 30
           }
         }}
         rewind={false}
         rewindWithAnimation={false}
         rtl={false}
         shouldResetAutoplay
         showDots={false}
         sliderClass=""
         slidesToSlide={2}
         swipeable
        >
           {visions.map((vision, index) => (
               <div className={styles.featureGrid} key={index}>
          <VisionCard {...vision}  />
           </div>
        ))}
        </Carousel>
            
       
      
     
      
    </section>
  );
};

export default VisionSection;