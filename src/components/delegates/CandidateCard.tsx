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
  photoUrl,
}) => {
  // Extract district code if present (format: "D05S Name")
  const districtCode = name.match(/^D\d+[A-Z]/)?.[0] || '';
  const displayName = name.replace(/^D\d+[A-Z]\s+/, '');
  
  return (
    <div className="bg-[#2a1642] rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.03]">
      {/* Photo container - changed to circle shape */}
      <div className="w-full aspect-square relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-full h-full rounded-full overflow-hidden">
          {photoUrl ? (
            <img 
              src={photoUrl} 
              alt={`Photo of ${displayName}`} 
              className="w-full h-full object-cover rounded-full"
            />
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
      <div className="p-4">
        <h3 className="font-medium text-white text-lg mb-1">{displayName}</h3>
        <p className="text-amber-300/70 text-xs truncate">{districtCode} {position}</p>
      </div>
    </div>
  );
};

export default CandidateCard; 