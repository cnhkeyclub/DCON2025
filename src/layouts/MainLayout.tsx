import React, { ReactNode } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PascalEasterEgg from '../components/eastereggs/PascalEasterEgg';
import PascalPlacement from '../components/eastereggs/PascalPlacement';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <PascalEasterEgg />
      <Navbar />
      <main className="flex-grow relative">
        {children}
        <PascalPlacement />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 