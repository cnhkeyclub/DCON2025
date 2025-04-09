import React, { useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';

// Animation keyframes
const glow = keyframes`
  0%, 100% { 
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 15px rgba(253, 187, 45, 0.5)) brightness(1);
    transform: scale(1);
  }
  50% { 
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 20px rgba(253, 187, 45, 0.7)) brightness(1.2);
    transform: scale(1.05);
  }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const petalShimmer = keyframes`
  0%, 100% { opacity: 0.8; filter: brightness(1); }
  50% { opacity: 1; filter: brightness(1.3); }
`;

const centerGlow = keyframes`
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.5); }
`;

// Petal sway animation
const petalSway = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(5deg); }
`;

// Stamen movement animation
const stamenMovement = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(1px); }
`;

interface MagicFlowerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'gold' | 'green' | 'purple';
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  animated?: boolean;
  className?: string;
  glowing?: boolean;
}

const MagicFlower: React.FC<MagicFlowerProps> = ({
  size = 'md',
  color = 'gold',
  position = {},
  animated = true,
  className = '',
  glowing = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Size mappings
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32'
  };
  
  // Color mappings
  const colorMap = {
    gold: {
      primary: '#F7D06F',
      secondary: '#FFB627',
      glow: '#FFE9B8',
      accent: '#FF9505',
    },
    green: {
      primary: '#2D6A4F',
      secondary: '#1B4332',
      glow: '#74C69D',
      accent: '#40916C',
    },
    purple: {
      primary: '#9D4EDD',
      secondary: '#7B2CBF',
      glow: '#E0AAFF',
      accent: '#5A189A',
    }
  };
  
  const selectedColor = colorMap[color];
  
  // Fade in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Position styling
  const positionStyle = {
    position: 'absolute' as const,
    top: position.top,
    left: position.left,
    right: position.right,
    bottom: position.bottom,
    zIndex: 10
  };
  
  // Animation styling
  const animationStyle = animated ? {
    animation: `${glow} 4s ease-in-out infinite, ${floatAnimation} 6s ease-in-out infinite`
  } : {};
  
  // Size variations
  const sizeClasses = sizeMap[size] || 'w-12 h-12';
  
  // Color variations - primary colors
  const colorVariants = selectedColor;

  const animationClass = animated ? 'animate-pulse' : '';
  const glowClass = glowing ? 'filter drop-shadow(0 0 5px ' + colorVariants.glow + ')' : '';
  
  return (
    <div 
      className={`${sizeClasses} ${className} transition-opacity duration-1000 pointer-events-none`}
      style={{
        ...positionStyle,
        opacity: isVisible ? 1 : 0,
        ...animationStyle
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className={`w-full h-full ${glowClass}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Larger outer glow effect */}
        {glowing && (
          <circle 
            cx="50" 
            cy="50" 
            r="35" 
            fill={colorVariants.glow} 
            className={`opacity-20 ${animationClass}`} 
          />
        )}
        
        {/* Inner glow effect */}
        {glowing && (
          <circle 
            cx="50" 
            cy="50" 
            r="20" 
            fill={colorVariants.glow} 
            className={`opacity-40 ${animationClass}`} 
          />
        )}
        
        {/* Lily Petals - more elongated and curved to resemble a true lily */}
        {/* Petal 1 - top */}
        <path
          d="M50 10C58 15 65 25 58 40C53 35 47 35 42 40C35 25 42 15 50 10Z"
          fill={colorVariants.primary}
          stroke={colorVariants.secondary}
          strokeWidth="1"
          style={{ 
            animation: animated ? `${petalSway} 5s ease-in-out infinite` : 'none',
            transformOrigin: 'center 50px'
          }}
        />
        
        {/* Petal 2 - top right */}
        <path
          d="M80 25C78 35 65 45 55 45C53 38 50 33 53 25C65 20 75 22 80 25Z"
          fill={colorVariants.primary}
          stroke={colorVariants.secondary}
          strokeWidth="1"
          style={{ 
            animation: animated ? `${petalSway} 5s ease-in-out infinite 0.5s` : 'none',
            transformOrigin: '50px 50px'
          }}
        />
        
        {/* Petal 3 - bottom right */}
        <path
          d="M75 75C65 80 55 75 50 65C57 60 62 62 67 55C72 65 75 70 75 75Z"
          fill={colorVariants.primary}
          stroke={colorVariants.secondary}
          strokeWidth="1"
          style={{ 
            animation: animated ? `${petalSway} 5s ease-in-out infinite 1s` : 'none',
            transformOrigin: '50px 50px'
          }}
        />
        
        {/* Petal 4 - bottom */}
        <path
          d="M50 90C42 85 35 75 42 60C47 65 53 65 58 60C65 75 58 85 50 90Z"
          fill={colorVariants.primary}
          stroke={colorVariants.secondary}
          strokeWidth="1"
          style={{ 
            animation: animated ? `${petalSway} 5s ease-in-out infinite 1.5s` : 'none',
            transformOrigin: 'center 50px'
          }}
        />
        
        {/* Petal 5 - bottom left */}
        <path
          d="M20 75C22 65 35 55 45 55C47 62 50 67 47 75C35 80 25 78 20 75Z"
          fill={colorVariants.primary}
          stroke={colorVariants.secondary}
          strokeWidth="1"
          style={{ 
            animation: animated ? `${petalSway} 5s ease-in-out infinite 2s` : 'none',
            transformOrigin: '50px 50px'
          }}
        />
        
        {/* Petal 6 - top left */}
        <path
          d="M25 25C35 20 45 25 50 35C43 40 38 38 33 45C28 35 25 30 25 25Z"
          fill={colorVariants.primary}
          stroke={colorVariants.secondary}
          strokeWidth="1"
          style={{ 
            animation: animated ? `${petalSway} 5s ease-in-out infinite 2.5s` : 'none',
            transformOrigin: '50px 50px'
          }}
        />
        
        {/* Petal veins and texture - adding realistic lily details */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <path 
            key={`vein-${i}`}
            d={`M50 50 
               L${50 + 28 * Math.cos(angle * Math.PI / 180)} ${50 + 28 * Math.sin(angle * Math.PI / 180)}`}
            stroke={colorVariants.secondary}
            strokeWidth="0.5"
            strokeOpacity="0.7"
            strokeDasharray="1 2"
          />
        ))}
        
        {/* Petal highlights - for a more realistic look */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <path 
            key={`highlight-${i}`}
            d={`M${50 + 15 * Math.cos((angle) * Math.PI / 180)} ${50 + 15 * Math.sin((angle) * Math.PI / 180)} 
               Q${50 + 25 * Math.cos((angle + 10) * Math.PI / 180)} ${50 + 25 * Math.sin((angle + 10) * Math.PI / 180)},
               ${50 + 35 * Math.cos((angle + 5) * Math.PI / 180)} ${50 + 35 * Math.sin((angle + 5) * Math.PI / 180)}`}
            stroke={colorVariants.glow}
            strokeWidth="0.8"
            opacity="0.6"
            style={{ 
              animation: animated ? `${petalShimmer} 7s ease-in-out infinite ${i * 0.5}s` : 'none'
            }}
          />
        ))}
        
        {/* Lily stigma (center structure) */}
        <circle 
          cx="50" 
          cy="50" 
          r="8" 
          fill={colorVariants.accent} 
          className={animationClass}
          style={{ 
            animation: animated ? `${centerGlow} 4s ease-in-out infinite` : 'none'
          }}
        />
        
        {/* Lily stamens - longer and more prominent */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <React.Fragment key={`stamen-${index}`}>
            {/* Filament (stalk) */}
            <line 
              x1="50" 
              y1="50" 
              x2={50 + 20 * Math.cos(angle * Math.PI / 180)} 
              y2={50 + 20 * Math.sin(angle * Math.PI / 180)}
              stroke={colorVariants.secondary}
              strokeWidth="1.2"
              strokeLinecap="round"
              style={{ 
                animation: animated ? `${stamenMovement} 6s ease-in-out infinite ${index * 0.5}s` : 'none',
                transformOrigin: '50px 50px'
              }}
            />
            {/* Anther (pollen tip) - elongated for lily look */}
            <ellipse 
              cx={50 + 20 * Math.cos(angle * Math.PI / 180)} 
              cy={50 + 20 * Math.sin(angle * Math.PI / 180)}
              rx="2.5" 
              ry="1.5"
              transform={`rotate(${angle}, ${50 + 20 * Math.cos(angle * Math.PI / 180)}, ${50 + 20 * Math.sin(angle * Math.PI / 180)})`}
              fill={colorVariants.glow} 
              className="opacity-90"
              style={{ 
                animation: animated ? `${petalShimmer} 5s ease-in-out infinite ${index * 0.3}s` : 'none'
              }}
            />
          </React.Fragment>
        ))}
        
        {/* Center texture and highlights */}
        <circle 
          cx="50" 
          cy="50" 
          r="5" 
          fill={colorVariants.secondary} 
          fillOpacity="0.7"
        />
        <circle 
          cx="48" 
          cy="48" 
          r="2" 
          fill="#FFFFFF" 
          className="opacity-70" 
        />
        
        {/* Pollen dust effect */}
        {animated && Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`pollen-${i}`}
            cx={50 + (Math.random() * 20 - 10)}
            cy={50 + (Math.random() * 20 - 10)}
            r="0.5"
            fill={colorVariants.glow}
            opacity="0.8"
            style={{
              animation: `${petalShimmer} ${3 + Math.random() * 2}s ease-in-out infinite`
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default MagicFlower; 