import React from 'react';
import { FaChair, FaDownload } from 'react-icons/fa';
import Lanterns from '../components/home/Lanterns';
import PageNatureDecorations from '../components/decorations/PageNatureDecorations';

// Seating Images for each session
const sessionImages = [
  "/images/gen1.jpeg",
  "/images/gen2.jpeg",
  "/images/gen3.jpeg", 
  "/images/gen4.jpeg"
];

// Define sessions
const sessions = [
  { id: 1, title: "General Session 1" },
  { id: 2, title: "General Session 2" },
  { id: 3, title: "General Session 3" },
  { id: 4, title: "General Session 4" }
];

const Seating: React.FC = () => {
  // CSS for text effects
  const keyframesStyles = `
    @keyframes subtle-pulse {
      0%, 100% { opacity: 0.9; filter: brightness(1); }
      50% { opacity: 1; filter: brightness(1.1); }
    }
  `;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241435] via-[#30194a] to-[#3d2160]">
      {/* Add nature decorations */}
      <PageNatureDecorations theme="purple" density="light" />
      
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: keyframesStyles }} />
      
      {/* Enhanced Header Banner with lantern styling */}
      <div className="relative min-h-[60vh] pt-16 overflow-hidden">
        {/* Dark purple background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0E2E] via-[#261339] to-[#362154]"></div>
        
        {/* Stars - subtle background elements */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
        
        {/* Main Lanterns - centralized and fullscreen */}
        <div className="absolute inset-0 overflow-visible" style={{ height: '100vh' }}>
          <Lanterns count={15} className="opacity-90" />
        </div>
        
        {/* Subtle particle effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-amber-300/20 animate-float-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 15}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Enhanced radial glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 pt-12 pb-16 text-center relative z-10">
          <div className="mb-6">
            <h4 className="text-base md:text-xl text-amber-200 font-light mb-2">
              California-Nevada-Hawai'i Key Club
            </h4>
          </div>
          
          {/* Title with styling similar to House of Delegates page */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <h1 className="font-tangled text-4xl md:text-7xl lg:text-8xl leading-tight flex items-center justify-center">
                <span className="mr-4 inline-block">
                  <FaChair className="text-yellow-300 text-3xl md:text-5xl transform rotate-12 animate-pulse" 
                    style={{filter: "drop-shadow(0 0 10px rgba(255, 200, 0, 0.6))"}} 
                  />
                </span>
                <span 
                  className="bg-clip-text text-transparent" 
                  style={{
                    backgroundImage: "linear-gradient(to bottom, #FFFFFF 0%, #FFFDE7 30%, #FFF9C4 60%, #FFEE58 100%)",
                    textShadow: "0 1px 4px rgba(255, 255, 255, 0.4), 0 4px 8px rgba(255, 236, 179, 0.2)",
                    filter: "drop-shadow(0 1px 4px rgba(255, 255, 255, 0.4))"
                  }}
                >
                  Seating Charts
                </span>
                <span className="ml-4 inline-block">
                  <FaChair className="text-yellow-300 text-3xl md:text-5xl transform -rotate-12 animate-pulse" 
                    style={{filter: "drop-shadow(0 0 10px rgba(255, 200, 0, 0.6))"}} 
                  />
                </span>
              </h1>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            </div>
          </div>
          
          <p className="text-amber-200 text-sm md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-tangled" style={{
            background: "linear-gradient(to bottom, #FFD54F 0%, #FFB74D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3))"
          }}>
            Find your seat for all General Sessions at DCON 2025
          </p>
        </div>
      </div>
      
      {/* Main content section for seating charts */}
      <div className="relative pt-8 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* All Session Seating Charts */}
          {sessions.map((session, index) => (
            <div key={session.id} className="mb-20">
              <div className="bg-[#2c1b48]/70 rounded-lg p-6 backdrop-blur-sm mb-6">
                <h2 className="text-2xl md:text-3xl text-amber-300 font-medium mb-4 text-center flex items-center justify-center gap-2">
                  <FaChair className="text-amber-300" /> 
                  {session.title} Seating Layout
                </h2>
              </div>
              
              {/* Image container with download button */}
              <div className="relative group">
                {/* Seating chart image */}
                <div className="rounded-lg overflow-hidden border border-amber-300/20">
                  <img 
                    src={sessionImages[index]} 
                    alt={`${session.title} Seating Layout`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Download button that appears on hover */}
                <a 
                  href={sessionImages[index]} 
                  download={`DCON-2025-${session.title.replace(/\s+/g, '-')}-Seating-Chart.jpeg`}
                  className="absolute bottom-4 right-4 bg-amber-300 text-purple-900 font-medium px-4 py-2 rounded-full 
                    flex items-center gap-2 opacity-90 hover:opacity-100 transition-all shadow-lg hover:shadow-amber-300/50"
                >
                  <FaDownload /> Download Chart
                </a>
              </div>
              
              {/* Mobile-friendly note */}
              <p className="text-white/70 text-xs mt-4 italic text-right">
                Zoom or tap on the image to see details
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Seating; 