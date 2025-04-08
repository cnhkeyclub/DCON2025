import React from 'react';

interface CandidateCardProps {
  name: string;
  position?: string; // Optional since we're not using it
  bio?: string; // Optional since we're not using it
  photoUrl?: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  name,
  photoUrl,
  // Removed unused props from destructuring
}) => {
  // Extract district code if present (format: "D05S Name")
  const districtCode = name.match(/^D\d+[A-Z]/)?.[0] || '';
  const displayName = name.replace(/^D\d+[A-Z]\s+/, '');
  
  return (
    <div className="bg-[#2a1642] rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.03]">
      {/* Photo container */}
      <div className="w-full pt-8 pb-6 px-6 flex items-center justify-center">
        <div className="w-[80%] aspect-square relative overflow-hidden rounded-full border-2 border-amber-300/20 shadow-md">
          {photoUrl ? (
            <div className="w-full h-full bg-[#251538] rounded-full flex items-center justify-center">
              <img 
                src={photoUrl} 
                alt={`Photo of ${displayName}`} 
                className="w-[85%] h-[85%] object-contain rounded-full"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#241435] rounded-full">
              <span className="text-amber-300 font-medium text-center p-3 text-sm">
                Photo Coming Soon
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Info container - cafe style minimal info */}
      <div className="p-4 text-center bg-[#241435]/50">
        <h3 className="font-medium text-white text-lg mb-1">{displayName}</h3>
        <p className="text-amber-300/80 text-sm">{districtCode}</p>
      </div>
    </div>
  );
};

export default CandidateCard; 