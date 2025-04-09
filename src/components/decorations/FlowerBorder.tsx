import React from 'react';

interface FlowerBorderProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  color?: 'gold' | 'green' | 'purple';
  density?: 'sparse' | 'dense';
  animated?: boolean;
  className?: string;
}

const FlowerBorder: React.FC<FlowerBorderProps> = ({
  position = 'bottom',
  color = 'green',
  density = 'dense',
  animated = true,
  className = '',
}) => {
  // Color mappings
  const colorVariants = {
    gold: {
      primary: '#FDBB2D',
      secondary: '#F9D780',
      accent: '#FF9D00',
    },
    green: {
      primary: '#5B8C5A',
      secondary: '#8CC88A',
      accent: '#1A8754',
    },
    purple: {
      primary: '#8975B4',
      secondary: '#B59EF0', 
      accent: '#5E4A8B',
    },
  };

  const selectedColor = colorVariants[color];
  
  // Position classes
  const positionClasses = {
    top: 'top-0 left-0 right-0 h-16 md:h-20',
    bottom: 'bottom-0 left-0 right-0 h-16 md:h-20',
    left: 'top-0 bottom-0 left-0 w-16 md:w-20', 
    right: 'top-0 bottom-0 right-0 w-16 md:w-20',
  };
  
  // Determine the number of flowers based on density
  const flowerCount = density === 'dense' ? 7 : 5;
  
  // Generate flower positions
  const flowers = Array.from({ length: flowerCount }).map((_, i) => {
    const isHorizontal = position === 'top' || position === 'bottom';
    const spacing = 100 / (flowerCount - 1);
    
    return {
      position: isHorizontal 
        ? { left: `${i * spacing}%`, [position]: '0' } 
        : { top: `${i * spacing}%`, [position]: '0' },
      size: Math.random() > 0.7 ? 'lg' : Math.random() > 0.4 ? 'md' : 'sm',
      rotation: Math.floor(Math.random() * 360),
      delay: i * 0.5,
    };
  });
  
  // SVG viewBox based on position
  const viewBox = (position === 'top' || position === 'bottom') 
    ? "0 0 100 20" 
    : "0 0 20 100";
  
  return (
    <div 
      className={`absolute ${positionClasses[position]} overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      {flowers.map((flower, index) => (
        <div 
          key={index}
          className={`absolute ${flower.size === 'sm' ? 'w-10 h-10' : flower.size === 'md' ? 'w-14 h-14' : 'w-16 h-16'}`}
          style={{
            ...flower.position,
            transform: `rotate(${flower.rotation}deg)`,
            animation: animated 
              ? `flower-sway 3s ease-in-out ${flower.delay}s infinite alternate` 
              : 'none',
          }}
        >
          <svg viewBox="0 0 40 40" className="w-full h-full">
            {/* Stem */}
            <path 
              d={position === 'bottom' ? "M20,40 C20,30 20,25 20,20" : "M20,0 C20,10 20,15 20,20"}
              stroke={selectedColor.accent}
              strokeWidth="1.5"
              fill="none"
            />
            
            {/* Flower petals - simpler design */}
            <g transform="translate(20, 20)">
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <path 
                  key={angle}
                  d="M0,0 C3,-8 0,-15 -3,-8 C-6,-15 -9,-8 -6,0 C-9,8 -6,15 -3,8 C0,15 3,8 0,0"
                  fill={selectedColor.secondary}
                  transform={`rotate(${angle})`}
                  opacity="0.9"
                />
              ))}
              
              {/* Center of flower */}
              <circle 
                cx="0" 
                cy="0" 
                r="4" 
                fill={selectedColor.primary} 
              />
              
              {/* Light accent */}
              <circle 
                cx="0" 
                cy="0" 
                r="2" 
                fill={selectedColor.accent} 
              />
            </g>
            
            {/* Small leaves on stem for bottom flowers */}
            {position === 'bottom' && (
              <>
                <path 
                  d="M20,35 C17,33 15,34 16,36 C17,38 19,37 20,35"
                  fill={selectedColor.accent}
                  opacity="0.9"
                />
                <path 
                  d="M20,30 C23,28 25,29 24,31 C23,33 21,32 20,30"
                  fill={selectedColor.accent}
                  opacity="0.9"
                />
              </>
            )}
            
            {/* Small leaves on stem for top flowers */}
            {position === 'top' && (
              <>
                <path 
                  d="M20,5 C17,7 15,6 16,4 C17,2 19,3 20,5"
                  fill={selectedColor.accent}
                  opacity="0.9"
                />
                <path 
                  d="M20,10 C23,12 25,11 24,9 C23,7 21,8 20,10"
                  fill={selectedColor.accent}
                  opacity="0.9"
                />
              </>
            )}
          </svg>
        </div>
      ))}
      
      {/* Add vines connecting the flowers */}
      <svg 
        viewBox={viewBox} 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio={
          position === 'top' || position === 'bottom' 
            ? 'xMidYMin slice' 
            : 'xMin yMid slice'
        }
      >
        {position === 'top' && (
          <path 
            d="M0,20 C20,15 30,5 50,10 C70,15 80,5 100,10" 
            stroke={selectedColor.accent}
            strokeWidth="0.5"
            fill="none"
          />
        )}
        
        {position === 'bottom' && (
          <path 
            d="M0,0 C20,5 30,15 50,10 C70,5 80,15 100,10" 
            stroke={selectedColor.accent}
            strokeWidth="0.5"
            fill="none"
          />
        )}
        
        {position === 'left' && (
          <path 
            d="M20,0 C15,20 5,30 10,50 C15,70 5,80 10,100" 
            stroke={selectedColor.accent}
            strokeWidth="0.5"
            fill="none"
          />
        )}
        
        {position === 'right' && (
          <path 
            d="M0,0 C5,20 15,30 10,50 C5,70 15,80 10,100" 
            stroke={selectedColor.accent}
            strokeWidth="0.5"
            fill="none"
          />
        )}
        
        {/* Add small leaf accents along the vine */}
        {(position === 'top' || position === 'bottom') && 
          [10, 30, 70, 90].map((x, i) => (
            <path 
              key={`leaf-${i}`}
              d={position === 'bottom' 
                ? `M${x},5 C${x+3},2 ${x+5},3 ${x+3},6` 
                : `M${x},15 C${x+3},18 ${x+5},17 ${x+3},14`}
              fill={selectedColor.accent}
              opacity="0.8"
            />
          ))
        }
        
        {(position === 'left' || position === 'right') && 
          [10, 30, 70, 90].map((y, i) => (
            <path 
              key={`leaf-${i}`}
              d={position === 'right' 
                ? `M5,${y} C2,${y+3} 3,${y+5} 6,${y+3}` 
                : `M15,${y} C18,${y+3} 17,${y+5} 14,${y+3}`}
              fill={selectedColor.accent}
              opacity="0.8"
            />
          ))
        }
      </svg>
    </div>
  );
};

export default FlowerBorder; 