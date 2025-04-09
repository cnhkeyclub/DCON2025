import React, { ReactNode } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PascalEasterEgg from '../components/eastereggs/PascalEasterEgg';
import PascalPlacement from '../components/eastereggs/PascalPlacement';
import FloatingLeaves from '../components/decorations/FloatingLeaves';
import VineDecoration from '../components/decorations/VineDecoration';
import Plants from '../components/decorations/Plants';
import TangledVine from '../components/decorations/TangledVine';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <PascalEasterEgg />
      
      {/* Increased number of floating leaves in the background */}
      <FloatingLeaves count={20} />
      
      {/* Additional floating leaves with different speeds */}
      <FloatingLeaves count={8} speed="slow" className="opacity-70" />
      <FloatingLeaves count={6} speed="fast" className="opacity-50" />
      
      {/* Vines in corners - increased size and more prominent */}
      <VineDecoration position="top-left" opacity={0.5} size="lg" />
      <VineDecoration position="bottom-right" opacity={0.5} size="lg" />
      
      {/* Additional vines for more greenery */}
      <TangledVine
        position="right"
        size="md"
        color="green"
        leafCount={6}
        className="top-20 right-5 opacity-70"
      />
      
      <TangledVine
        position="left"
        size="md"
        color="green"
        leafCount={6}
        className="bottom-40 left-5 opacity-70"
      />
      
      {/* Plants at the bottom of the page */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none h-32 md:h-40 z-0 overflow-hidden">
        <Plants type="fern" position="left" size="lg" color="dark" />
        <Plants type="bush" position="right" size="md" color="medium" />
        <Plants type="grass" position="bottom" size="sm" color="medium" quantity={5} className="w-full" />
      </div>
      
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
        <PascalPlacement />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 