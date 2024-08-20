import React from 'react';

import SectionTitle from '../Section/SectionTitle';
import LearnSection from '../Learn/LearnSection';
import EarnSection from '../Earn/EarnSection';
import NetworkSection from '../Network/NetworkSection';
import styles from './MainComponent.module.css';
import Header from '../Header/Header';
import EventsPage from '../EventSection/EventPage';
import CardContainer from '../Card/CardContainer';
import HiringSection from '../Hiring/HiringSection';
import SwanirbharEvents from '../SwarnibharEvents/SwanirbharEvents';
import FAQs from '../FAQ/FAQs';
import ParallaxOverlapping from '../VerticalMode';

const MainComponent = () => {
  return (
    <main className={styles.mainContainer}>
      <Header/>
      <SectionTitle>Why should you join the community? 👇🏻</SectionTitle>
      <div data-aos="fade-down-left">
      <LearnSection />  
      </div>
      <div data-aos="flip-down">
      <EarnSection />  
      </div>
      
      {/* <ParallaxOverlapping/> */}
      <div data-aos="fade-up-left">
       <NetworkSection />  
      </div>
     
      <SectionTitle>Why Swanirbhar?</SectionTitle>
      <div data-aos="fade-up-right">
        <CardContainer/>
      </div>
      <div data-aos="flip-right">
        <HiringSection/>  
      </div>
    
      <SwanirbharEvents/>
      <EventsPage/>
      <FAQs/>
    </main>
  );
};

export default MainComponent;