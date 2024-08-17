import React from "react";
import styles from './OnePlace.module.css';
import Carousel from "react-multi-carousel";

function OnePlace() {
  
  return (
    <section className={styles.section}>
       <h1 className={styles.oneTitle}>Hire the best talent with proof of work.</h1>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>
              Hire in 15 minutes from nation's largest pre-screened talent pool.
            </h2>
            <button className={styles.ctaButton}>Download the app</button>
          </div>
        </div>
        <div className={styles.rightColumn}>
        <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
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
      items: 1,
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
          <div className={styles.featureBox}>
            <p className={styles.featureText}>
             Discover <span style={{color: "#000"}}> rare, unique talent that other platforms can't provide </span>
            </p>
            <div className={styles.imageWrapper}>
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d598b89a747fb5ffd16a0a907cd465798e4c610ff606428dda2bc41511e80a?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
                className={styles.featureImage} 
                alt="Feature illustration"
              />
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.iconCircle} />
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/950713bff6c71cb1400277ad60df3ced361c667d62c03108da3da6f84d6bb3ca?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
                className={styles.iconImage} 
                alt="Decorative icon"
              />
            </div>
          </div>
          <div className={styles.featureBox}>
            <p className={styles.featureText}>
              Delegate <span style={{color: "#000"}}> tasks and enhance teamwork by involving multiple contributors </span>
            </p>
            <div className={styles.imageWrapper}>
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c8309be613befe33c366e4f5f5ee434d93a8351a293de8ba8c88d9ad8cb2728?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
                className={styles.featureImage} 
                alt="Feature illustration"
              />
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.iconCircle} />
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/950713bff6c71cb1400277ad60df3ced361c667d62c03108da3da6f84d6bb3ca?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
                className={styles.iconImage} 
                alt="Decorative icon"
              />
            </div>
          </div>
          <div className={styles.featureBox}>
            <p className={styles.featureText}>
              Form teams, <span style={{color: "#000"}}>assign members, manage events, and customize permissions effortlessly</span>
            </p>
            <div className={styles.imageWrapper}>
              <img 
                loading="lazy" 
                src="https://s3-alpha-sig.figma.com/img/199e/fe07/0f7da27641f326a6a715f1e00e3acef1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dH1eRnp-rOqp2KE6Ofvr0h1UaMhPbqV5PZMGOxZB4GKz~ive3mQ-RngEeOmDpTJCNNEs2HUNvhJZ7R1UXe4KWvbPBD5aMnBPFT8P4AbWEbTxYOgE7w0R7spzZ3f0ceyV0Nn23DJqpY8iX9olLXwKu-ubSQ1dmMGziVQMlF~SgxJF77YpTu6aDWUjrytFo0cBqrTVCMGI3RFyBj6CTxER7qQdhgfaBrTjMxCS1ehXb-yGvJDOXuxkHv4d1LXvHBnkjJrjMlIUjxzpxx9atBDm33VaVrja1dim-Ov-ZwwSJwTOAHWmik6Mhoi5uLMzOToNU0B~lxd66pLHdc5HxcJkUA__" 
                className={styles.featureImage} 
                alt="Feature illustration"
              />
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.iconCircle} />
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/950713bff6c71cb1400277ad60df3ced361c667d62c03108da3da6f84d6bb3ca?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca" 
                className={styles.iconImage} 
                alt="Decorative icon"
              />
            </div>
          </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default OnePlace;