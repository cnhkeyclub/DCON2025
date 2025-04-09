import React, { useEffect } from 'react';

const PascalEasterEgg: React.FC = () => {
  useEffect(() => {
    // This component previously imported cursor.css
    // Cursor styles are now in index.css
    // Pascal chameleons are hidden throughout the site as easter eggs
    console.log('Pascal easter egg activated');
  }, []);

  return null; // This component doesn't render anything
};

export default PascalEasterEgg; 