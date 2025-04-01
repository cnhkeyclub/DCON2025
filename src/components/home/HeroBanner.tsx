import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import Lanterns from './Lanterns';

const HeroBanner: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('welcome-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // CSS for twinkling stars and subtle bounce animation
  const keyframesStyles = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    
    @keyframes subtle-bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
  `;

  return (
    <div className="relative min-h-screen pt-16 md:pt-20 flex flex-col items-center justify-between overflow-hidden w-full max-w-[100vw]">
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: keyframesStyles }} />
      
      {/* Nighttime background - darker purple gradient with subtle blue tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0E2E] via-[#261339] to-[#362154]"></div>
      
      {/* Stars - increased count with more variety in sizes */}
      {[...Array(150)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2.5 + 0.5}px`,
            height: `${Math.random() * 2.5 + 0.5}px`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      {/* Moon - slightly larger and brighter */}
      <div className="absolute top-40 right-10 md:right-40 opacity-90 hidden md:block">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-tangled-yellow"></div>
          <div className="absolute inset-0 bg-tangled-yellow/40 rounded-full blur-xl"></div>
        </div>
      </div>
      
      {/* Main content section - adjusted for better positioning */}
      <div className="container mx-auto px-4 sm:px-6 text-center z-20 py-8 md:py-0 w-full flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Main content box */}
          <div className="relative border-2 border-tangled-purple/20 rounded-lg p-6 md:p-12 bg-black/30 backdrop-blur-sm shadow-xl">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-6 md:w-8 h-6 md:h-8 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-tangled-gold rounded-tl-lg -translate-x-1 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-6 md:w-8 h-6 md:h-8 border-t-2 md:border-t-4 border-r-2 md:border-r-4 border-tangled-gold rounded-tr-lg translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-6 md:w-8 h-6 md:h-8 border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-tangled-gold rounded-bl-lg -translate-x-1 translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-6 md:w-8 h-6 md:h-8 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-tangled-gold rounded-br-lg translate-x-1 translate-y-1"></div>
            
            <h4 className="text-base md:text-2xl text-tangled-yellow font-light mb-2 md:mb-3">
              California-Nevada-Hawai'i Key Club
            </h4>
            
            {/* Tangled in Service Logo as main title */}
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <div className="relative">
                <h1 className="font-tangled text-4xl md:text-8xl lg:text-9xl leading-tight flex items-center justify-center">
                  <span className="mr-4 inline-block">
                    <FaSun className="text-yellow-300 text-5xl md:text-7xl transform rotate-12 animate-pulse" style={{filter: "drop-shadow(0 0 10px rgba(255, 200, 0, 0.6))"}} />
                  </span>
                  <span 
                    className="bg-clip-text text-transparent" 
                    style={{
                      backgroundImage: "linear-gradient(to bottom, #FFFFFF 0%, #FFFDE7 30%, #FFF9C4 60%, #FFEE58 100%)",
                      textShadow: "0 1px 4px rgba(255, 255, 255, 0.4), 0 4px 8px rgba(255, 236, 179, 0.2)",
                      filter: "drop-shadow(0 1px 4px rgba(255, 255, 255, 0.4))"
                    }}
                  >
                    Tangled in Service
                  </span>
                  <span className="ml-4 inline-block">
                    <FaSun className="text-yellow-300 text-5xl md:text-7xl transform -rotate-12 animate-pulse" style={{filter: "drop-shadow(0 0 10px rgba(255, 200, 0, 0.6))"}} />
                  </span>
                </h1>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
              </div>
            </div>
            
            <h2 className="text-xl md:text-4xl text-white mb-6 md:mb-8 font-tangled" style={{
              background: "linear-gradient(to bottom, #FFD54F 0%, #FFB74D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3))"
            }}>
              District Convention 2025
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-8">
              <a 
                href="/schedule" 
                className="btn-tangled-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                Schedule
              </a>
              <a 
                href="/map" 
                className="btn-tangled-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                Map
              </a>
            </div>
          </div>
          
          <div className="relative mt-10 md:mt-16 mb-10 md:mb-16 w-full max-w-md mx-auto">
            <div className="w-full h-1 bg-tangled-gold/50 rounded"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm px-6 md:px-8 py-1 rounded-full shadow-md whitespace-nowrap">
              <span className="font-tangled text-xl md:text-2xl text-tangled-gold">
                April 25th-27th, 2025
              </span>
            </div>
          </div>
          
          {/* Mobile scroll indicator - positioned BELOW date container with no overlap */}
          <div className="md:hidden mt-8 flex justify-center cursor-pointer z-30"
              onClick={scrollToNextSection}
              style={{ animation: 'subtle-bounce 2s ease-in-out infinite' }}>
            <div className="text-tangled-gold bg-black/70 backdrop-blur-sm rounded-full p-2 shadow-md">
              <FaChevronDown className="text-sm" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Tangled-style floating lanterns - reduced count as requested */}
      <Lanterns count={12} className="z-10" />
      
      {/* Desktop scroll indicator */}
      <div className="absolute hidden md:block bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
           onClick={scrollToNextSection}
           style={{ animation: 'subtle-bounce 2s ease-in-out infinite' }}>
        <div className="text-tangled-gold bg-black/70 backdrop-blur-sm rounded-full p-3 shadow-md">
          <FaChevronDown className="text-base" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 