import React from 'react';

// Different plant types
type PlantType = 'bush' | 'fern' | 'flower' | 'grass';

interface PlantsProps {
  type?: PlantType;
  position?: 'left' | 'right' | 'bottom' | 'top';
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'medium' | 'dark';
  quantity?: number; // How many plants to render
  className?: string;
}

const Plants: React.FC<PlantsProps> = ({
  type = 'bush',
  position = 'bottom',
  size = 'md',
  color = 'medium',
  quantity = 1,
  className = '',
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'h-16 md:h-20',
    md: 'h-24 md:h-32',
    lg: 'h-32 md:h-48',
  };
  
  // Position classes
  const positionClasses = {
    left: 'left-0 transform-gpu -translate-x-1/4',
    right: 'right-0 transform-gpu translate-x-1/4',
    bottom: 'bottom-0 left-0 right-0 mx-auto',
    top: 'top-0 left-0 right-0 mx-auto transform-gpu -translate-y-1/2',
  };
  
  // Color variations
  const colorVariants = {
    light: {
      primary: '#8CC88A', // Light green
      secondary: '#5B8C5A', // Sage green
      accent: '#3A6839', // Darker green
    },
    medium: {
      primary: '#1A8754', // Pascal green
      secondary: '#3A6839', // Darker green
      accent: '#244B23', // Deep forest green
    },
    dark: {
      primary: '#244B23', // Deep forest green
      secondary: '#1C3A1C', // Very dark green
      accent: '#0F2D1E', // Almost black green
    },
  };
  
  const selectedColor = colorVariants[color];
  
  // Plant SVG paths based on type
  const plantPaths = {
    bush: (index: number) => {
      // Create a bushier appearance with multiple rounded shapes
      const xOffset = index * 15;
      return (
        <g transform={`translate(${xOffset}, 0)`}>
          <ellipse cx="40" cy="70" rx="40" ry="30" fill={selectedColor.primary} />
          <ellipse cx="20" cy="50" rx="20" ry="15" fill={selectedColor.secondary} />
          <ellipse cx="60" cy="50" rx="25" ry="20" fill={selectedColor.secondary} />
          <ellipse cx="35" cy="30" rx="30" ry="25" fill={selectedColor.primary} />
          <ellipse cx="45" cy="15" rx="15" ry="15" fill={selectedColor.secondary} />
          <path d="M20,60 Q40,90 60,60 Q40,40 20,60 Z" fill={selectedColor.accent} />
        </g>
      );
    },
    fern: (index: number) => {
      // Create a fern with fronds
      const xOffset = index * 25;
      return (
        <g transform={`translate(${xOffset}, 0)`}>
          <path d="M50,100 Q49,30 50,10" stroke={selectedColor.secondary} strokeWidth="2" fill="none" />
          {/* Fronds on left */}
          {[20, 30, 40, 50, 60, 70, 80].map((y, i) => (
            <path 
              key={`left-${i}`}
              d={`M50,${y} Q30,${y-10} 15,${y-5}`} 
              stroke={selectedColor.primary} 
              strokeWidth="1.5" 
              fill="none" 
            />
          ))}
          {/* Fronds on right */}
          {[25, 35, 45, 55, 65, 75, 85].map((y, i) => (
            <path 
              key={`right-${i}`}
              d={`M50,${y} Q70,${y-10} 85,${y-5}`} 
              stroke={selectedColor.primary} 
              strokeWidth="1.5" 
              fill="none" 
            />
          ))}
          {/* Small leaf details */}
          {[20, 30, 40, 50, 60, 70, 80].map((y, i) => (
            <React.Fragment key={`detail-${i}`}>
              <path 
                d={`M35,${y-7} Q30,${y-12} 25,${y-9}`} 
                stroke={selectedColor.accent} 
                strokeWidth="1" 
                fill="none" 
              />
              <path 
                d={`M65,${y-7} Q70,${y-12} 75,${y-9}`} 
                stroke={selectedColor.accent} 
                strokeWidth="1" 
                fill="none" 
              />
            </React.Fragment>
          ))}
        </g>
      );
    },
    flower: (index: number) => {
      // Create a flowering plant with stem and flowers
      const xOffset = index * 20;
      return (
        <g transform={`translate(${xOffset}, 0)`}>
          {/* Stem */}
          <path d="M50,100 C40,80 60,60 50,30" stroke={selectedColor.secondary} strokeWidth="2" fill="none" />
          {/* Leaves */}
          <path d="M50,80 C30,75 20,85 30,90" fill={selectedColor.primary} />
          <path d="M50,60 C70,55 80,65 70,70" fill={selectedColor.primary} />
          <path d="M50,70 C30,65 20,75 30,80" fill={selectedColor.primary} />
          
          {/* Flowers */}
          <circle cx="50" cy="30" r="10" fill="#F9D780" />
          <circle cx="50" cy="30" r="5" fill="#FDBB2D" />
          
          <circle cx="40" cy="40" r="8" fill="#F9D780" />
          <circle cx="40" cy="40" r="4" fill="#FDBB2D" />
          
          <circle cx="60" cy="45" r="7" fill="#F9D780" />
          <circle cx="60" cy="45" r="3.5" fill="#FDBB2D" />
        </g>
      );
    },
    grass: (index: number) => {
      // Create grass blades
      const xOffset = index * 10;
      return (
        <g transform={`translate(${xOffset}, 0)`}>
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, i) => (
            <path 
              key={`grass-${i}`}
              d={`M${x},100 C${x-10},70 ${x+10},40 ${x},20`} 
              stroke={i % 2 === 0 ? selectedColor.primary : selectedColor.secondary} 
              strokeWidth="2" 
              fill="none" 
            />
          ))}
          {/* Additional shorter grass */}
          {[15, 25, 35, 45, 55, 65, 75, 85, 95].map((x, i) => (
            <path 
              key={`short-grass-${i}`}
              d={`M${x},100 C${x-5},80 ${x+5},60 ${x},40`} 
              stroke={i % 2 === 0 ? selectedColor.secondary : selectedColor.accent} 
              strokeWidth="1.5" 
              fill="none" 
            />
          ))}
        </g>
      );
    }
  };
  
  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${className} pointer-events-none z-0`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full"
      >
        {Array.from({ length: quantity }).map((_, i) => (
          <React.Fragment key={i}>
            {plantPaths[type](i)}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default Plants; 