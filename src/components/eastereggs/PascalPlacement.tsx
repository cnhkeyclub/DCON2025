import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { keyframes } from "@emotion/react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

// Define shimmer animation
const shimmer = keyframes`
  0% { opacity: 0.3; transform: scale(0.95); filter: brightness(0.9); }
  50% { opacity: 0.8; transform: scale(1.05); filter: brightness(1.3); }
  100% { opacity: 0.3; transform: scale(0.95); filter: brightness(0.9); }
`;

const PascalPlacement: React.FC = () => {
  const [foundPascals, setFoundPascals] = useState<string[]>([]);
  const [visiblePascals, setVisiblePascals] = useState<string[]>([]);
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Load found pascals from localStorage on mount
  useEffect(() => {
    const storedPascals = localStorage.getItem('foundPascals');
    if (storedPascals) {
      setFoundPascals(JSON.parse(storedPascals));
    }
  }, []);
  
  const handlePascalFound = (color: string) => {
    // Make pascal visible when clicked
    if (!visiblePascals.includes(color)) {
      setVisiblePascals([...visiblePascals, color]);
      
      // If not already found, mark as found
      if (!foundPascals.includes(color)) {
        const updatedFoundPascals = [...foundPascals, color];
        setFoundPascals(updatedFoundPascals);
        localStorage.setItem('foundPascals', JSON.stringify(updatedFoundPascals));
        
        // Show toast notification instead of alert
        toast.success(
          <div className="flex items-center">
            <FaStar className="text-yellow-300 mr-2" />
            <span>You found the {color} Pascal chameleon! {updatedFoundPascals.length}/3 found.</span>
          </div>,
          { duration: 4000 }
        );
      }
    }
  };
  
  return (
    <>
      {/* Green Pascal - Only on Schedule page, at the bottom */}
      {currentPath === '/schedule' && (
        <div 
          className="absolute bottom-8 right-16 w-20 h-20 cursor-pointer z-40 hover:scale-110 transition-transform"
          onClick={() => handlePascalFound('green')}
          title="Click the magical shimmer!"
        >
          {visiblePascals.includes('green') ? (
            <img 
              src="/images/easter-eggs/pascal-green.png" 
              alt=""
              className="w-full h-full object-contain opacity-100 transition-opacity duration-500"
            />
          ) : (
            <div 
              className="w-full h-full rounded-full bg-green-500/30 backdrop-blur-sm"
              style={{ animation: `${shimmer} 2.5s ease-in-out infinite` }}
            >
              <FaStar className="text-green-300/70 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}
        </div>
      )}
      
      {/* Yellow Pascal - Only on Contests page - moved further down to avoid overlap */}
      {currentPath === '/contests' && (
        <div 
          className="absolute top-[750px] left-20 w-20 h-20 cursor-pointer z-40 hover:scale-110 transition-transform"
          onClick={() => handlePascalFound('yellow')}
          title="Click the magical shimmer!"
        >
          {visiblePascals.includes('yellow') ? (
            <img 
              src="/images/easter-eggs/pascal-yellow.png" 
              alt=""
              className="w-full h-full object-contain opacity-100 transition-opacity duration-500"
            />
          ) : (
            <div 
              className="w-full h-full rounded-full bg-yellow-500/30 backdrop-blur-sm"
              style={{ animation: `${shimmer} 2.5s ease-in-out infinite` }}
            >
              <FaStar className="text-yellow-300/70 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}
        </div>
      )}
      
      {/* Pink Pascal - Only on FAQ page */}
      {currentPath === '/faq' && (
        <div 
          className="absolute right-20 top-[500px] w-20 h-20 cursor-pointer z-40 hover:scale-110 transition-transform"
          onClick={() => handlePascalFound('pink')}
          title="Click the magical shimmer!"
        >
          {visiblePascals.includes('pink') ? (
            <img 
              src="/images/easter-eggs/pascal-pink.png" 
              alt=""
              className="w-full h-full object-contain opacity-100 transition-opacity duration-500"
            />
          ) : (
            <div 
              className="w-full h-full rounded-full bg-pink-500/30 backdrop-blur-sm"
              style={{ animation: `${shimmer} 2.5s ease-in-out infinite` }}
            >
              <FaStar className="text-pink-300/70 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PascalPlacement; 