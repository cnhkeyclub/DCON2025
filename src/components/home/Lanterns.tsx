import React from 'react';

interface LanternsProps {
  count?: number;
  className?: string;
}

const Lanterns: React.FC<LanternsProps> = ({ count = 15, className = "" }) => {
  // Generate random positions for lanterns - distributed throughout the screen
  const lanterns = Array.from({ length: count }, (_, i) => ({
    id: i,
    // More even distribution across the entire viewport
    left: `${Math.random() * 95 + 2.5}%`,
    // Distribute lanterns throughout the screen
    top: `${Math.random() * 90 + 5}%`,
    size: Math.random() * 0.4 + 0.6, // Wider range of sizes for more variety
    delay: Math.random() * 12, // More varied animation delay
    duration: Math.random() * 6 + 4, // Random animation duration between 4-10s
    rotation: Math.random() * 10 - 5, // Slight random rotation
    // Slight variation in opacity to create depth
    opacity: Math.random() * 0.3 + 0.7,
  }));

  // Enhanced CSS for floating animation with more dynamic movement
  const floatKeyframes = `
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      20% { transform: translateY(-15px) rotate(-1deg); }
      40% { transform: translateY(-25px) rotate(1deg); }
      60% { transform: translateY(-20px) rotate(0.5deg); }
      80% { transform: translateY(-10px) rotate(-0.5deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
    @keyframes sway {
      0% { transform: translateX(0) rotate(0deg); }
      25% { transform: translateX(12px) rotate(1deg); }
      50% { transform: translateX(0) rotate(0.5deg); }
      75% { transform: translateX(-10px) rotate(-1deg); }
      100% { transform: translateX(0) rotate(0deg); }
    }
    @keyframes pulse {
      0% { opacity: 0.8; filter: brightness(1); }
      50% { opacity: 1; filter: brightness(1.2); }
      100% { opacity: 0.8; filter: brightness(1); }
    }
    @keyframes glow {
      0% { box-shadow: 0 0 15px 3px rgba(253, 154, 0, 0.5); }
      50% { box-shadow: 0 0 25px 6px rgba(253, 154, 0, 0.7); }
      100% { box-shadow: 0 0 15px 3px rgba(253, 154, 0, 0.5); }
    }
  `;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none max-w-full ${className}`}>
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: floatKeyframes }} />
      
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          style={{
            position: 'absolute',
            left: lantern.left,
            top: lantern.top,
            transform: `scale(${lantern.size}) rotate(${lantern.rotation}deg)`,
            animation: `float ${lantern.duration}s ease-in-out infinite, sway ${lantern.duration * 0.8}s ease-in-out infinite`,
            animationDelay: `${lantern.delay}s, ${lantern.delay * 1.3}s`,
            zIndex: Math.floor(lantern.size * 10),
            maxWidth: '100%',
            opacity: lantern.opacity,
          }}
        >
          <div className="flex flex-col items-center relative">
            {/* Tangled-style lantern body with sun emblem - cylindrical design */}
            <div 
              className="w-16 h-24 relative overflow-hidden flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom, #FFC107 0%, #FFA000 40%, #FF8F00 100%)',
                borderRadius: '10px 10px 20px 20px',
                animation: `glow ${lantern.duration * 0.5}s ease-in-out infinite`,
                animationDelay: `${lantern.delay * 0.2}s`,
                boxShadow: '0 0 20px 5px rgba(255, 153, 0, 0.6)',
              }}
            >
              {/* Lantern frame with subtle edges for cylindrical effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Top decorative border */}
                <div className="absolute top-[6%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B6D3C] to-transparent opacity-70"></div>
                
                {/* Bottom decorative border */}
                <div className="absolute bottom-[6%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B6D3C] to-transparent opacity-70"></div>
              </div>
              
              {/* Inner glow effect - soft ambient light */}
              <div 
                className="absolute inset-0 opacity-60"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 210, 100, 0.7) 0%, rgba(255, 160, 0, 0.3) 70%, transparent 100%)',
                  animation: `pulse ${lantern.duration * 0.5}s ease-in-out infinite`,
                  animationDelay: `${lantern.delay * 0.3}s`,
                }}
              ></div>
              
              {/* Prominent sun emblem - based on Tangled's Corona symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-[80%] h-[80%]"
                  style={{ 
                    filter: 'drop-shadow(0 0 2px rgba(255, 180, 0, 0.7))',
                    animation: `pulse ${lantern.duration * 0.7}s ease-in-out infinite`,
                    animationDelay: `${lantern.delay * 0.5}s`,
                  }}
                >
                  {/* Main sun rays */}
                  {[...Array(16)].map((_, i) => (
                    <line 
                      key={i}
                      x1="50" 
                      y1="50" 
                      x2={50 + 40 * Math.cos(i * Math.PI / 8)} 
                      y2={50 + 40 * Math.sin(i * Math.PI / 8)}
                      stroke="#FF6F00"
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{
                        opacity: 0.9,
                        transformOrigin: 'center',
                      }}
                    />
                  ))}
                  
                  {/* Central sun circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="15" 
                    fill="url(#sunGradient)" 
                    stroke="#FF8F00"
                    strokeWidth="1"
                  />
                  
                  {/* Definitions for gradients */}
                  <defs>
                    <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#FFC107" />
                      <stop offset="80%" stopColor="#FF8F00" />
                      <stop offset="100%" stopColor="#FF6F00" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lanterns; 