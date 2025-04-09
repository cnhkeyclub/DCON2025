import React from 'react';

interface TangledLilyProps {
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
  onClick?: () => void;
  className?: string;
}

const TangledLily: React.FC<TangledLilyProps> = ({
  size = 'md',
  glowing = true,
  onClick,
  className = '',
}) => {
  // Size classes for the flower
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
  };

  // Number of petals
  const petalCount = 6;
  
  // Create petals with different rotation angles
  const petals = Array.from({ length: petalCount }).map((_, i) => {
    const angle = (i * 360) / petalCount;
    const animationDelay = i * 0.1;
    
    return (
      <div
        key={i}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          animation: `flower-sway 3s ease-in-out ${animationDelay}s infinite`,
        }}
      >
        <div
          className={`
            bg-gradient-to-t from-amber-300 to-amber-100
            absolute w-1/3 h-3/4 -translate-x-1/2 -translate-y-1/2
            rounded-full origin-bottom
            ${glowing ? 'shadow-[0_0_15px_5px_rgba(255,215,0,0.6)]' : ''}
          `}
          style={{
            clipPath: 'ellipse(50% 100% at 50% 0%)'
          }}
        ></div>
      </div>
    );
  });

  // Interactive properties
  const interactiveClasses = onClick ? 'cursor-pointer hover:scale-105 transition-transform' : '';

  return (
    <div 
      className={`relative ${sizeClasses[size]} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {/* Center of the flower */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-amber-400 z-10">
        {glowing && (
          <div className="absolute inset-0 rounded-full bg-amber-300 opacity-60 animate-pulse"></div>
        )}
      </div>
      
      {/* Petals */}
      {petals}
    </div>
  );
};

export default TangledLily; 