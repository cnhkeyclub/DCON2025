import React from 'react';
import { FaLeaf } from 'react-icons/fa';

interface TangledVineProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
  color?: 'green' | 'gold';
  leafCount?: number;
  className?: string;
}

const TangledVine: React.FC<TangledVineProps> = ({
  position = 'left',
  size = 'md',
  color = 'green',
  leafCount = 3,
  className = '',
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'h-24 w-1.5',
    md: 'h-40 w-2',
    lg: 'h-60 w-3',
  };

  // Color classes
  const colorClasses = {
    green: 'bg-green-600',
    gold: 'bg-amber-500',
  };

  // Position classes
  const positionClasses = {
    left: 'left-0 -translate-x-1/2',
    right: 'right-0 translate-x-1/2',
    top: 'top-0 -translate-y-1/2 rotate-90',
    bottom: 'bottom-0 translate-y-1/2 rotate-90',
  };

  // Generate random leaf positions
  const leaves = Array.from({ length: leafCount }).map((_, i) => {
    const position = Math.random() * 100;
    const rotation = Math.random() * 360;
    const delay = i * 0.2;
    
    return (
      <div 
        key={i} 
        className="absolute transform -translate-x-1/2" 
        style={{ 
          top: `${position}%`, 
          transform: `rotate(${rotation}deg)`,
          animation: `leaf-rustle 3s ease-in-out ${delay}s infinite`
        }}
      >
        <FaLeaf 
          className={`${color === 'green' ? 'text-green-500' : 'text-amber-400'} text-lg`}
        />
      </div>
    );
  });

  return (
    <div className={`absolute ${positionClasses[position]} ${className}`}>
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-[vine-grow_1.5s_ease-out]`}
      />
      {leaves}
    </div>
  );
};

export default TangledVine; 