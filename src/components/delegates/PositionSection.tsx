import React from 'react';
import CandidateCard from './CandidateCard';
import Carousel from '../shared/Carousel';
import { FaStar, FaRegStar, FaCircle } from 'react-icons/fa';

interface Candidate {
  name: string;
  bio?: string;
  photoUrl?: string;
}

interface PositionSectionProps {
  title: string;
  candidates: Candidate[];
  positionColor?: string;
  className?: string;
  description?: string;
}

const PositionSection: React.FC<PositionSectionProps> = ({
  title,
  candidates,
  positionColor = 'bg-tangled-purple',
  className = '',
  description
}) => {
  // Determine if this is the Trustee section or International Endorsement section
  const isTrusteeSection = title === 'Trustee' || title === 'International Endorsement';

  // Check if the title is "International Endorsement" - we'll remove "District" only for this title
  const displayTitle = title;
  
  return (
    <section className={`py-10 relative overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-300/15 animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          ></div>
        ))}
        
        {/* Decorative diagonal line */}
        <div className="absolute top-1/3 -right-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300/20 to-transparent transform -rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 relative">
          {/* Enhanced decorative elements */}
          <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 opacity-20">
            <FaStar className="text-amber-300 text-3xl drop-shadow-[0_1px_2px_rgba(251,191,36,0.5)] animate-pulse-slow" />
          </div>
          <div className="absolute top-4 right-1/4 transform translate-x-1/2 opacity-20">
            <FaRegStar className="text-amber-300 text-2xl drop-shadow-[0_1px_2px_rgba(251,191,36,0.5)] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
          </div>
          <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 opacity-10">
            <FaCircle className="text-amber-300 text-lg animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className={`inline-block ${positionColor} text-white px-6 py-2 rounded-full mb-3 shadow-md transform hover:scale-105 transition-all duration-300`}>
            <h2 className="text-xl font-medium">{displayTitle}</h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-3"></div>
          <p className="text-gray-200/70 max-w-xl mx-auto text-sm">Meet the candidates for {displayTitle}</p>
        </div>
        
        {/* Position Description */}
        {description && (
          <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto mb-8 px-6 py-4 bg-white/5 rounded-lg border border-amber-300/20 shadow-lg">
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        )}
        
        {/* Carousel Layout - like cafe cards */}
        <div className="max-w-6xl mx-auto">
          <Carousel className="pb-12" hideArrowsForSingleSlide={isTrusteeSection}>
            {candidates.map((candidate, index) => (
              <div key={index} className="flex justify-center px-4">
                <div className="w-full max-w-xs">
                  <CandidateCard
                    name={candidate.name}
                    position={title}
                    bio={candidate.bio}
                    photoUrl={candidate.photoUrl}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PositionSection; 