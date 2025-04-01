import React from 'react';
import { FaInstagram, FaGlobe, FaSun } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tangled-purple text-white py-8 relative overflow-hidden">
      {/* Sun icon decorations */}
      <div className="absolute -top-6 left-1/4 opacity-10">
        <FaSun className="text-tangled-gold text-5xl animate-spin-slow" />
      </div>
      <div className="absolute bottom-5 right-1/3 opacity-10">
        <FaSun className="text-tangled-gold text-4xl animate-spin-slow" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Social Media */}
          <div className="text-center">
            <div className="flex flex-row space-x-6 items-center justify-center">
              <a 
                href="https://www.instagram.com/cnh_dcon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-tangled-gold transition duration-300"
              >
                <FaInstagram className="text-xl" />
                <span>@cnh_dcon</span>
              </a>
              
              <a 
                href="https://www.instagram.com/cnh_keyclub/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-tangled-gold transition duration-300"
              >
                <FaInstagram className="text-xl" />
                <span>@cnh_keyclub</span>
              </a>
              
              <a 
                href="https://www.cnhkeyclub.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-tangled-gold transition duration-300"
              >
                <FaGlobe className="text-xl" />
                <span>CNH CyberKey</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-tangled-lavender/30 mt-4 pt-4 text-center">
          <p className="text-sm">
            Produced by District Technology Editor and District Technology Team 2024-2025
          </p>
          <p className="text-sm mt-2 text-tangled-lavender">
            &copy; {new Date().getFullYear()} Tangled in Service DCON 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 