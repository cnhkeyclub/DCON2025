import React, { useMemo } from 'react';
import { keyframes } from '@emotion/react';

// Define falling animation
const fallAnimation = keyframes`
  0% {
    transform: translateY(-10px) rotate(0deg) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(calc(100vh + 20px)) rotate(360deg) translateX(20px);
    opacity: 0;
  }
`;

// Petal shapes
const petalPaths = [
  // Lily petal shape
  "M5,0 C7,2 9,2 10,0 C12,5 10,10 5,7 C0,10 -2,5 0,0 C1,2 3,2 5,0 Z",
  // Round petal shape
  "M5,0 C8,0 10,3 10,5 C10,8 8,10 5,10 C2,10 0,8 0,5 C0,3 2,0 5,0 Z",
  // Elongated petal shape
  "M5,0 C8,0 10,5 8,10 C6,15 4,15 2,10 C0,5 2,0 5,0 Z"
];

// Petal colors
const petalColors = [
  '#FDBB2D', // gold
  '#F9D780', // light gold
  '#FF9D00', // orange gold
  '#5B8C5A', // sage green
  '#8CC88A', // light green
  '#B59EF0', // light purple
  '#FFFFFF', // white
];

// Generate a random number between min and max
const random = (min: number, max: number) => Math.random() * (max - min) + min;

interface PetalProps {
  path: string;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rotate: number;
  color: string;
  swayFactor: number;
}

const Petal: React.FC<PetalProps> = ({ 
  path, x, size, delay, duration, rotate, color, swayFactor
}) => {
  const style = {
    position: 'absolute' as const,
    left: `${x}%`,
    top: '-20px',
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotate(${rotate}deg)`,
    animation: `${fallAnimation} ${duration}s ease-in-out ${delay}s infinite`,
    zIndex: 0,
    filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))'
  } as React.CSSProperties;

  return (
    <svg 
      viewBox="0 0 10 10" 
      style={style}
      className="pointer-events-none"
    >
      <path 
        d={path} 
        fill={color} 
        opacity="0.7"
        transform={`translate(${swayFactor}, 0)`}
      />
    </svg>
  );
};

interface FallingPetalsProps {
  count?: number;
  speed?: 'slow' | 'medium' | 'fast';
  density?: 'sparse' | 'medium' | 'dense';
}

const FallingPetals: React.FC<FallingPetalsProps> = ({ 
  count = 20, 
  speed = 'medium',
  density = 'medium'
}) => {
  // Set duration range based on speed
  const durationRange = {
    slow: { min: 15, max: 30 },
    medium: { min: 10, max: 20 },
    fast: { min: 5, max: 15 }
  }[speed];
  
  // Set horizontal distribution based on density
  const distributionRange = {
    sparse: { min: 10, max: 90 },
    medium: { min: 5, max: 95 },
    dense: { min: 0, max: 100 }
  }[density];

  // Generate petals with random properties
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const petalPath = petalPaths[Math.floor(random(0, petalPaths.length))];
      const petalColor = petalColors[Math.floor(random(0, petalColors.length))];
      
      return {
        id: i,
        path: petalPath,
        x: random(distributionRange.min, distributionRange.max),
        size: random(10, 20),
        delay: random(0, 15),
        duration: random(durationRange.min, durationRange.max),
        rotate: random(0, 360),
        color: petalColor,
        swayFactor: random(-1, 1)
      };
    });
  }, [count, speed, density]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <Petal key={petal.id} {...petal} />
      ))}
    </div>
  );
};

export default FallingPetals; 