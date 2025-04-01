import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import ChairWelcome from '../components/home/ChairWelcome';
import GovernorMessage from '../components/home/GovernorMessage';
import QuickLinks from '../components/home/QuickLinks';

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <ChairWelcome />
      <GovernorMessage />
      <QuickLinks />
    </>
  );
};

export default Home; 