import React from 'react';
import styles from './CampusFoundersProgram.module.css';
import Card from './Card';
import Carousel from "react-multi-carousel";

const CampusFoundersProgram = () => {
  const cardContents = [
    {content:'TACKLING THE CHALLENGES'},
    {content:'BUSINESS KNOW-HOW'},
    {content:'ENTREPRENEURIAL MINDSET'},
    {content:'As students, we are certain that youre brimming with enthusiasm and big dreams. However, you may want to build knowledge about the real-life obstacles you may face. Thats why you can benefit from a program that helps you understand the challenges ahead and equips you with the tools to overcome them.'},
    {content:'Sure, youve got creativity and ideation skills in your backpacks, but what about the nitty-gritty of running a business? You need to learn the fundamentals of business concepts and strategies that will empower you to manage and grow your startups successfully.'},
    {content:'Building a startup entails more than just having a great idea. It calls for an entrepreneurial mindset, resilience, and a strong support system. These qualities are necessary for you to thrive as a founder, however, these become secondary if the focus is solely on innovation.'}
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>How Campus Founders Program can help you?</h2>
        <div className={styles.cardContainer}>
        <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlaySpeed={3000}
  centerMode={false}
  className={styles.mycarousel}
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
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
      partialVisibilityGutter: 20
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
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
  showDots={true}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
            {cardContents.map((el, index) => (
     <div className={styles.cardGrid} key={index}>
              <Card  data={el.content} />
          </div>
            ))}
</Carousel>
       
        </div>
      </div>
    </section>
  );
};

export default CampusFoundersProgram;