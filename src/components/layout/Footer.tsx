import React from 'react';
import { FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tangled-purple text-white py-4 md:py-6 relative overflow-hidden">
      {/* Background decorations - made smaller and less obtrusive */}
      <div className="absolute -top-4 left-1/4 opacity-5 md:opacity-10">
        <div className="text-tangled-gold text-3xl md:text-5xl animate-spin-slow">✦</div>
      </div>
      <div className="absolute bottom-2 right-1/3 opacity-5 md:opacity-10">
        <div className="text-tangled-gold text-2xl md:text-4xl animate-spin-slow">✦</div>
      </div>
      
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 gap-2">
          {/* Social Media - more compact arrangement */}
          <div className="text-center">
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6 items-center justify-center">
              <a 
                href="https://www.instagram.com/cnh_dcon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 md:space-x-2 hover:text-tangled-gold transition duration-300 w-full justify-center md:justify-start md:w-auto text-xs md:text-sm"
              >
                <FaInstagram className="text-md md:text-xl" />
                <span>@cnh_dcon</span>
              </a>
              
              <a 
                href="https://www.instagram.com/cnh_keyclub/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 md:space-x-2 hover:text-tangled-gold transition duration-300 w-full justify-center md:justify-start md:w-auto text-xs md:text-sm"
              >
                <FaInstagram className="text-md md:text-xl" />
                <span>@cnh_keyclub</span>
              </a>
              
              <a 
                href="https://www.cnhkeyclub.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 md:space-x-2 hover:text-tangled-gold transition duration-300 w-full justify-center md:justify-start md:w-auto text-xs md:text-sm"
              >
                <FaGlobe className="text-md md:text-xl" />
                <span>CNH CyberKey</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-tangled-lavender/30 mt-3 pt-2 md:mt-4 md:pt-3 text-center">
          <p className="text-xs md:text-sm">
            Produced by District Technology Editor and District Technology Team 2024-2025
          </p>
          <p className="text-xs md:text-sm mt-1 md:mt-2 text-tangled-lavender">
            &copy; {new Date().getFullYear()} Tangled in Service DCON 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 