import React from 'react';
import StatsSection from '../StatSection/StatSection';
import EventsSection from './EventSection';


const EventsPage = () => (
  <main>
    <div data-aos="fade-up">
          <StatsSection />
    </div>

    <EventsSection />
  </main>
);

export default EventsPage;