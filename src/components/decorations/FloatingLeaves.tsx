import React, { useMemo } from 'react';
import { FaLeaf } from 'react-icons/fa';

interface FloatingLeavesProps {
  count?: number;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

const FloatingLeaves: React.FC<FloatingLeavesProps> = ({
  count = 10,
  speed = 'medium',
  className = '',
}) => {
  // Define the animation duration based on speed
  const durationRange = {
    slow: { min: 15, max: 30 },
    medium: { min: 10, max: 20 },
    fast: { min: 5, max: 15 }
  }[speed];
  
  // Generate leaves with random properties
  const leaves = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Randomize the leaf properties
      return {
        id: i,
        initialX: Math.random() * 100, // Random starting position
        initialY: Math.random() * 100,
        size: Math.random() * 15 + 10, // Random size between 10-25px
        duration: Math.random() * (durationRange.max - durationRange.min) + durationRange.min,
        delay: Math.random() * 10, // Random delay for animation
        rotation: Math.random() * 360, // Random rotation
        color: Math.random() > 0.7 ? 'text-green-400' : Math.random() > 0.4 ? 'text-green-600' : 'text-green-800',
        opacity: Math.random() * 0.5 + 0.1 // Subtle opacity
      };
    });
  }, [count, durationRange]);
  
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`absolute ${leaf.color}`}
          style={{
            top: `${leaf.initialY}%`,
            left: `${leaf.initialX}%`,
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
            transform: `rotate(${leaf.rotation}deg)`,
            animation: `float ${leaf.duration}s ease-in-out ${leaf.delay}s infinite alternate, leaf-rustle 3s ease-in-out infinite`
          }}
        >
          <FaLeaf />
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves; 