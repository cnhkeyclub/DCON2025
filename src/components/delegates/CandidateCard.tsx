import React from 'react';

interface CandidateCardProps {
  name: string;
  position: string;
  bio?: string;
  photoUrl?: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  name,
  position,
  bio = "Biography information will be available soon.",
  photoUrl
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className="p-1 bg-gradient-to-r from-tangled-purple to-tangled-sage">
        <div className="bg-white p-6 h-full flex flex-col">
          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
            {/* Candidate Photo */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-tangled-yellow flex-shrink-0 mx-auto md:mx-0">
              {photoUrl ? (
                <img 
                  src={photoUrl} 
                  alt={`Photo of ${name}`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-tangled-lavender/30 flex items-center justify-center">
                  <span className="text-tangled-purple font-medium text-center">
                    Photo Coming Soon
                  </span>
                </div>
              )}
            </div>
            
            {/* Candidate Info */}
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-tangled-purple">{name}</h3>
              <p className="text-tangled-sage font-medium mb-4">Candidate for {position}</p>
              
              <div className="bg-tangled-yellow/20 p-4 rounded-lg">
                <h4 className="font-bold text-tangled-green mb-2">Biography</h4>
                <p className="text-gray-700">{bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard; 