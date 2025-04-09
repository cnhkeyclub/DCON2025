import React from 'react';
import FlowerBorder from './FlowerBorder';
import FallingPetals from './FallingPetals';
import TangledVine from './TangledVine';
import { FaLeaf } from 'react-icons/fa';

interface PageNatureDecorationsProps {
  theme?: 'purple' | 'green' | 'gold';
  density?: 'light' | 'medium' | 'dense';
}

/**
 * A component that adds nature-themed decorative elements to pages
 * This is used to maintain consistent styling across all pages
 */
const PageNatureDecorations: React.FC<PageNatureDecorationsProps> = ({
  theme = 'purple',
  density = 'medium',
}) => {
  // Colors based on theme
  const themeColors = {
    purple: {
      primary: 'purple',
      secondary: 'gold',
      accent: 'green'
    },
    green: {
      primary: 'green',
      secondary: 'purple',
      accent: 'gold'
    },
    gold: {
      primary: 'gold',
      secondary: 'green',
      accent: 'purple'
    }
  };

  const colors = themeColors[theme];
  
  // The number of decorative elements based on density - increased leaf count
  const elementCounts = {
    light: {
      flowers: 3,
      petals: 10,
      leaves: 12,   // Increased from 5
      vines: 2      // Added vine count
    },
    medium: {
      flowers: 5,
      petals: 20,
      leaves: 20,   // Increased from 8
      vines: 4      // Added vine count
    },
    dense: {
      flowers: 8,
      petals: 30,
      leaves: 30,   // Increased from 12
      vines: 6      // Added vine count
    }
  };
  
  const counts = elementCounts[density];
  
  // Generate random positions for vines
  const vinePositions = Array.from({ length: counts.vines }).map(() => {
    const topPercent = Math.random() * 70 + 15; // Between 15% and 85%
    const leftPercent = Math.random() * 80 + 10; // Between 10% and 90%
    const size = Math.random() > 0.5 ? 'md' : 'sm';
    const leafCount = Math.floor(Math.random() * 5) + 2; // 2-6 leaves per vine
    const position = Math.random() > 0.5 ? 'left' : 'right';
    
    return { top: `${topPercent}%`, left: `${leftPercent}%`, size, leafCount, position };
  });
  
  return (
    <>
      {/* Falling petals for a dynamic effect */}
      <FallingPetals 
        count={counts.petals} 
        speed="medium" 
        density={density === 'light' ? 'sparse' : density === 'medium' ? 'medium' : 'dense'} 
      />
      
      {/* Flower borders on top and bottom */}
      <FlowerBorder
        position="top"
        color={colors.primary as 'gold' | 'green' | 'purple'}
        density={density === 'light' ? 'sparse' : 'dense'}
        animated={true}
        className="opacity-70"
      />
      
      <FlowerBorder
        position="bottom"
        color={colors.secondary as 'gold' | 'green' | 'purple'}
        density={density === 'light' ? 'sparse' : 'dense'}
        animated={true}
        className="opacity-70"
      />
      
      {/* Random vines throughout the page */}
      {vinePositions.map((pos, index) => (
        <TangledVine
          key={`vine-${index}`}
          position={pos.position as 'left' | 'right'}
          size={pos.size as 'sm' | 'md'}
          color="green"
          leafCount={pos.leafCount}
          className={`absolute ${pos.position === 'left' ? 'left-0' : 'right-0'} ${pos.top}`}
        />
      ))}
      
      {/* Side vines for more greenery - increased leaf count */}
      <TangledVine
        position="left"
        size="md"
        color="green"
        leafCount={counts.leaves / 3}
        className="top-1/3"
      />
      
      <TangledVine
        position="right"
        size="md"
        color="green"
        leafCount={counts.leaves / 3}
        className="bottom-1/3"
      />
      
      <TangledVine
        position="left"
        size="sm"
        color="green"
        leafCount={counts.leaves / 4}
        className="bottom-1/4"
      />
      
      <TangledVine
        position="right"
        size="sm"
        color="green"
        leafCount={counts.leaves / 4}
        className="top-1/4"
      />
      
      {/* Significantly more floating leaf icons for added detail */}
      {Array.from({ length: counts.leaves }).map((_, i) => (
        <div 
          key={`leaf-${i}`}
          className="absolute pointer-events-none"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `leaf-rustle ${3 + Math.random() * 2}s ease-in-out infinite`,
            opacity: 0.2 + (Math.random() * 0.3)
          }}
        >
          <FaLeaf 
            className={`text-${colors.accent === 'green' ? 'green-600' : colors.accent === 'gold' ? 'amber-400' : 'purple-500'} ${Math.random() > 0.7 ? 'text-3xl' : 'text-2xl'}`}
          />
        </div>
      ))}
    </>
  );
};

export default PageNatureDecorations; 