import React from 'react';
import Carousel from '../shared/Carousel';
import CandidateCard from './CandidateCard';
import { FaStar } from 'react-icons/fa';

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
}

const PositionSection: React.FC<PositionSectionProps> = ({
  title,
  candidates,
  positionColor = 'bg-tangled-purple',
  className = ''
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 opacity-10">
            <FaStar className="text-tangled-gold text-3xl" />
          </div>
          <div className="absolute top-2 right-1/4 transform translate-x-1/2 opacity-10">
            <FaStar className="text-tangled-gold text-2xl" />
          </div>
          
          <div className={`inline-block ${positionColor} text-white px-5 py-2 rounded-full mb-2`}>
            <h2 className="text-xl font-medium">District {title}</h2>
          </div>
          <div className="w-32 h-1 bg-tangled-gold mx-auto mb-2"></div>
          <p className="text-gray-600">Meet the candidates for District {title}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel 
            autoSlide={candidates.length > 1}
            className="h-full"
          >
            {candidates.map((candidate, index) => (
              <div key={index} className="px-4 py-2 h-full">
                <CandidateCard
                  name={candidate.name}
                  position={title}
                  bio={candidate.bio}
                  photoUrl={candidate.photoUrl}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PositionSection; 