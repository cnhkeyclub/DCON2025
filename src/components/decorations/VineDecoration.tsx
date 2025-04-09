import React from 'react';

interface VineDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
  opacity?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const VineDecoration: React.FC<VineDecorationProps> = ({
  position,
  color = 'tangled-green',
  opacity = 0.6,
  size = 'md',
  className = '',
}) => {
  // Size mappings
  const sizeMap = {
    sm: 'w-20 h-20 md:w-24 md:h-24',
    md: 'w-28 h-28 md:w-36 md:h-36',
    lg: 'w-40 h-40 md:w-56 md:h-56'
  };

  // Position classes
  const positionClasses = {
    'top-left': 'top-0 left-0 origin-top-left',
    'top-right': 'top-0 right-0 origin-top-right rotate-90',
    'bottom-left': 'bottom-0 left-0 origin-bottom-left -rotate-90',
    'bottom-right': 'bottom-0 right-0 origin-bottom-right rotate-180',
  };

  // SVG paths for different vine designs
  const vinePaths = {
    'top-left': 'M1,99 C20,70 40,90 70,60 C90,40 60,20 80,1 C40,5 30,30 20,40 C10,50 5,70 1,99 Z',
    'top-right': 'M1,99 C20,70 40,90 70,60 C90,40 60,20 80,1 C40,5 30,30 20,40 C10,50 5,70 1,99 Z',
    'bottom-left': 'M1,99 C20,70 40,90 70,60 C90,40 60,20 80,1 C40,5 30,30 20,40 C10,50 5,70 1,99 Z',
    'bottom-right': 'M1,99 C20,70 40,90 70,60 C90,40 60,20 80,1 C40,5 30,30 20,40 C10,50 5,70 1,99 Z',
  };

  // More detailed paths for leaves and vines
  const leafPath = "M10,1 C15,5 20,5 25,1 C25,10 25,15 10,20 C-5,15 -5,10 -5,1 C0,5 5,5 10,1 Z";
  const smallLeafPath = "M0,0 C3,3 7,3 10,0 C7,7 3,7 0,0 Z";

  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeMap[size]} pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full overflow-visible"
      >
        {/* Main vine */}
        <path 
          d={vinePaths[position]} 
          fill="none"
          stroke={`var(--vine-color, #1A8754)`} 
          strokeWidth="2"
          className={`text-${color} opacity-${Math.round(opacity * 10)}`}
        />
        
        {/* Leaf 1 */}
        <g transform="translate(75, 10) scale(0.15) rotate(20)">
          <path d={leafPath} fill={`var(--vine-color, #1A8754)`} className={`text-${color} opacity-${Math.round(opacity * 10)}`} />
        </g>
        
        {/* Leaf 2 */}
        <g transform="translate(40, 65) scale(0.12) rotate(-30)">
          <path d={leafPath} fill={`var(--vine-color, #1A8754)`} className={`text-${color} opacity-${Math.round(opacity * 10)}`} />
        </g>
        
        {/* Small decorative leaves */}
        <g transform="translate(60, 30) scale(0.08) rotate(45)">
          <path d={smallLeafPath} fill={`var(--vine-color, #1A8754)`} className={`text-${color} opacity-${Math.round(opacity * 10)}`} />
        </g>
        
        <g transform="translate(25, 75) scale(0.06) rotate(-15)">
          <path d={smallLeafPath} fill={`var(--vine-color, #1A8754)`} className={`text-${color} opacity-${Math.round(opacity * 10)}`} />
        </g>
        
        {/* Curling vine tendrils */}
        <path 
          d="M70,60 C75,55 80,55 82,58 C84,61 83,65 80,67 C77,69 73,68 72,65" 
          fill="none"
          stroke={`var(--vine-color, #1A8754)`} 
          strokeWidth="1.5"
          className={`text-${color} opacity-${Math.round(opacity * 10)}`}
        />
        
        <path 
          d="M20,40 C15,38 12,40 11,43 C10,46 12,49 15,50 C18,51 21,49 20,46" 
          fill="none"
          stroke={`var(--vine-color, #1A8754)`} 
          strokeWidth="1.5"
          className={`text-${color} opacity-${Math.round(opacity * 10)}`}
        />
      </svg>
    </div>
  );
};

export default VineDecoration; 