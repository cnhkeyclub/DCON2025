import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import PascalEasterEgg from './components/eastereggs/PascalEasterEgg';
import PascalCounter from './components/eastereggs/PascalCounter';

// Import your page components
import Home from './pages/Home';
import HouseOfDelegates from './pages/HouseOfDelegates';
import Schedule from './pages/Schedule';
import Map from './pages/Map';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import ScavengerHunt from './pages/ScavengerHunt';
import Contests from './pages/Contests';

const Routes: React.FC = () => {
  return (
    <>
      {/* Include the Pascal easter egg cursor on all pages */}
      <PascalEasterEgg />
      <PascalCounter />
      
      {/* Define routes */}
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/delegates" element={<HouseOfDelegates />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/map" element={<Map />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/scavenger-hunt" element={<ScavengerHunt />} />
        <Route path="/contests" element={<Contests />} />
      </RouterRoutes>
    </>
  );
};

export default Routes; 