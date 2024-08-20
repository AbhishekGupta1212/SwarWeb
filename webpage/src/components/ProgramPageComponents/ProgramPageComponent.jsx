import React from 'react'
import Footer from '../swarnibhar/Footer'
import CampusFounders from './CampusFounders/CampusFounders'
import PartCard from './Part/PartCard'
import EligibilityCriteria from './Eligibility/EligibilityCriteria'
import JourneyComponent from './JourneyComponent/JourneyComponent'
import SignUpSection from './SignUpSection/SignUpSection'
import BusinessSteps from './What/BusinessSteps'
import CampusFoundersProgram from './Help/CampusFoundersProgram'
import FAQs from './FAQSection/FAQs'
import WhatYouCanExpect from './What/WhatCanYouExpect'

export const ProgramPageComponent = () => {
  return (
    <div>
      <div data-aos="fade-up">
            <CampusFounders/>
      </div>
      <div data-aos="fade-right">
 <PartCard/>        
      </div>
      <div data-aos="flip-right">
         <EligibilityCriteria/>
      </div>
      <div data-aos="zoom-in">
  <JourneyComponent/>       
      </div>
      <div data-aos="fade-right">
         <SignUpSection/>
      </div>
      <div data-aos="fade-up-right">
         <WhatYouCanExpect/>
          <BusinessSteps/>
      </div>


 <CampusFoundersProgram/>
 <div data-aos="zoom-in-up">
<FAQs/>  
 </div>
 
 <Footer/>
    </div>
  )
}
