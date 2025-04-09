import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PascalPlacement: React.FC = () => {
  const [foundPascals, setFoundPascals] = useState<string[]>([]);
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
    if (!foundPascals.includes(color)) {
      const updatedFoundPascals = [...foundPascals, color];
      setFoundPascals(updatedFoundPascals);
      localStorage.setItem('foundPascals', JSON.stringify(updatedFoundPascals));
      alert(`You found the ${color} Pascal chameleon! ${updatedFoundPascals.length}/3 found.`);
    }
  };
  
  return (
    <>
      {/* Show the counter regardless of the page if any have been found */}
      {foundPascals.length > 0 && (
        <div className="fixed bottom-2 left-2 bg-black/70 backdrop-blur-sm p-2 rounded-lg text-white text-xs z-50">
          Pascal chameleons found: {foundPascals.length}/3
        </div>
      )}
      
      {/* Green Pascal - Only on Schedule page, at the bottom */}
      {currentPath === '/schedule' && (
        <div 
          className="absolute bottom-32 right-10 w-20 h-20 cursor-pointer z-40 hover:scale-110 transition-transform"
          onClick={() => handlePascalFound('green')}
          title="You found a Pascal chameleon!"
        >
          <img 
            src="/images/easter-eggs/pascal-green.png" 
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}
      
      {/* Yellow Pascal - Only on Contests page */}
      {currentPath === '/contests' && (
        <div 
          className="absolute top-[500px] left-10 w-24 h-24 cursor-pointer z-40 hover:scale-110 transition-transform"
          onClick={() => handlePascalFound('yellow')}
          title="You found a Pascal chameleon!"
        >
          <img 
            src="/images/easter-eggs/pascal-yellow.png" 
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}
      
      {/* Pink Pascal - Only on FAQ page */}
      {currentPath === '/faq' && (
        <div 
          className="absolute right-16 top-[400px] w-20 h-20 cursor-pointer z-40 hover:scale-110 transition-transform"
          onClick={() => handlePascalFound('pink')}
          title="You found a Pascal chameleon!"
        >
          <img 
            src="/images/easter-eggs/pascal-pink.png" 
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default PascalPlacement; 