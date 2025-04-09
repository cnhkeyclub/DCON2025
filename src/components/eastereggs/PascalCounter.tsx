import React, { useState, useEffect } from 'react';

const PascalCounter: React.FC = () => {
  const [clicks, setClicks] = useState<number>(0);

  useEffect(() => {
    const handleClick = () => {
      setClicks(prev => prev + 1);
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Only show counter if clicks reach a certain number
  if (clicks < 5) return null;

  return (
    <div className="fixed bottom-2 right-2 bg-black/30 backdrop-blur-sm p-2 rounded-lg text-white text-xs">
      Pascal clicks: {clicks}
    </div>
  );
};

export default PascalCounter; 