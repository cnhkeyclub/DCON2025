import React from 'react';
import PositionSection from '../components/delegates/PositionSection';
import Lanterns from '../components/home/Lanterns';
import { FaCrown, FaScroll } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

const HouseOfDelegates: React.FC = () => {
  // Candidate data
  const governorCandidates = [
    {
      name: 'D05S Haley Alberto',
      bio: 'Haley is passionate about service and leadership. She has been an active member of Key Club for 3 years and has served in various club officer positions.',
    },
    {
      name: 'D15S Charlize Lin',
      bio: 'Charlize has demonstrated exceptional leadership skills throughout her Key Club journey. She believes in empowering members to make a positive impact in their communities.',
    },
  ];

  const secretaryCandidates = [
    {
      name: 'D22M Malakai Keawe-Correa',
      bio: 'Malakai is dedicated to improving communication within the district. With his organizational skills, he aims to streamline processes and enhance reporting systems.',
    },
    {
      name: 'D35W Emily Lin',
      bio: 'Emily has a strong background in documentation and record-keeping. She plans to implement innovative strategies to make information more accessible to all clubs.',
    },
    {
      name: 'D03S Jacklyn Song',
      bio: 'Jacklyn brings creativity and precision to all her endeavors. She is committed to maintaining accurate records and facilitating effective communication.',
    },
  ];

  const treasurerCandidates = [
    {
      name: 'D36N Ward Halwani',
      bio: 'Ward has experience in managing finances for various organizations. He is dedicated to ensuring transparent financial practices and responsible resource allocation.',
    },
    {
      name: 'D07N Katelynn Nguyen',
      bio: 'Katelynn is passionate about financial literacy and education. She plans to implement training programs to help clubs better manage their finances.',
    },
    {
      name: 'D05N Shaianne Relucio',
      bio: 'Shaianne has a background in accounting and budget management. She is committed to maximizing the impact of district funds for service projects.',
    },
    {
      name: 'D16W Taye Sangkhae',
      bio: 'Taye believes in fiscal responsibility and transparency. He aims to develop sustainable financial strategies for the long-term success of the district.',
    },
  ];

  const trusteeCandidates = [
    {
      name: 'D28S Tyler Moran',
      bio: 'Tyler is committed to strengthening the connection between our district and Kiwanis International. He plans to advocate for resources and support to help our district thrive.',
    },
  ];

  // CSS for text effects
  const keyframesStyles = `
    @keyframes subtle-pulse {
      0%, 100% { opacity: 0.9; filter: brightness(1); }
      50% { opacity: 1; filter: brightness(1.1); }
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241435] via-[#30194a] to-[#3d2160]">
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: keyframesStyles }} />
      
      {/* Enhanced Header Banner with better lantern styling */}
      <div className="relative min-h-[60vh] pt-16 overflow-hidden">
        {/* Dark purple background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0E2E] via-[#261339] to-[#362154]"></div>
        
        {/* Stars - subtle background elements */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
        
        {/* Main Lanterns - centralized and fullscreen */}
        <div className="absolute inset-0 overflow-visible" style={{ height: '100vh' }}>
          <Lanterns count={15} className="opacity-90" />
        </div>
        
        {/* Subtle particle effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-amber-300/20 animate-float-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 15}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Enhanced radial glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 pt-12 pb-16 text-center relative z-10">
          <div className="mb-6">
            <h4 className="text-base md:text-xl text-amber-200 font-light mb-2">
              California-Nevada-Hawai'i Key Club
            </h4>
          </div>
          
          {/* Title with styling similar to home page */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <h1 className="font-tangled text-4xl md:text-7xl lg:text-8xl leading-tight flex items-center justify-center">
                <span className="mr-4 inline-block">
                  <FaSun className="text-yellow-300 text-3xl md:text-5xl transform rotate-12 animate-pulse" 
                    style={{filter: "drop-shadow(0 0 10px rgba(255, 200, 0, 0.6))"}} 
                  />
                </span>
                <span 
                  className="bg-clip-text text-transparent" 
                  style={{
                    backgroundImage: "linear-gradient(to bottom, #FFFFFF 0%, #FFFDE7 30%, #FFF9C4 60%, #FFEE58 100%)",
                    textShadow: "0 1px 4px rgba(255, 255, 255, 0.4), 0 4px 8px rgba(255, 236, 179, 0.2)",
                    filter: "drop-shadow(0 1px 4px rgba(255, 255, 255, 0.4))"
                  }}
                >
                  House of Delegates
                </span>
                <span className="ml-4 inline-block">
                  <FaSun className="text-yellow-300 text-3xl md:text-5xl transform -rotate-12 animate-pulse" 
                    style={{filter: "drop-shadow(0 0 10px rgba(255, 200, 0, 0.6))"}} 
                  />
                </span>
              </h1>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            </div>
          </div>
          
          <p className="text-amber-200 text-sm md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-tangled" style={{
            background: "linear-gradient(to bottom, #FFD54F 0%, #FFB74D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3))"
          }}>
            Meet the candidates running for district leadership positions
          </p>
        </div>
      </div>
      
      {/* Content sections directly without the wave divider */}
      <div className="relative pt-8 pb-20 text-white">
        {/* Governor Section */}
        <PositionSection 
          title="Governor" 
          candidates={governorCandidates} 
          positionColor="bg-tangled-purple"
          className="mb-8"
        />
        
        {/* Secretary Section */}
        <PositionSection 
          title="Secretary" 
          candidates={secretaryCandidates} 
          positionColor="bg-tangled-sage"
          className="mb-8"
        />
        
        {/* Treasurer Section */}
        <PositionSection 
          title="Treasurer" 
          candidates={treasurerCandidates} 
          positionColor="bg-tangled-gold"
          className="mb-8"
        />
        
        {/* Trustee Section */}
        <PositionSection 
          title="Trustee" 
          candidates={trusteeCandidates} 
          positionColor="bg-tangled-lavender"
          className="mb-8"
        />
      </div>
    </div>
  );
};

export default HouseOfDelegates; 