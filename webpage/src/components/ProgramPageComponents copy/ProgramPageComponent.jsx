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

export const ProgramPageComponent = () => {
  return (
    <div>
         <CampusFounders/>
 <PartCard/>
 <EligibilityCriteria/>
 <JourneyComponent/>
 <SignUpSection/>
 <BusinessSteps/>
 <CampusFoundersProgram/>
 <FAQs/>
 <Footer/>
    </div>
  )
}
