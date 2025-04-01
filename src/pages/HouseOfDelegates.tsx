import React from 'react';
import PositionSection from '../components/delegates/PositionSection';
import { FaCrown, FaScroll, FaCoins, FaGlobe, FaSun } from 'react-icons/fa';

const HouseOfDelegates: React.FC = () => {
  // Candidate data
  const governorCandidates = [
    {
      name: 'Haley Alberto',
      bio: 'Haley is passionate about service and leadership. She has been an active member of Key Club for 3 years and has served in various club officer positions.',
    },
    {
      name: 'Charlize Lin',
      bio: 'Charlize has demonstrated exceptional leadership skills throughout her Key Club journey. She believes in empowering members to make a positive impact in their communities.',
    },
  ];

  const secretaryCandidates = [
    {
      name: 'Malakai Keawe-Correa',
      bio: 'Malakai is dedicated to improving communication within the district. With his organizational skills, he aims to streamline processes and enhance reporting systems.',
    },
    {
      name: 'Emily Lin',
      bio: 'Emily has a strong background in documentation and record-keeping. She plans to implement innovative strategies to make information more accessible to all clubs.',
    },
    {
      name: 'Jacklyn Song',
      bio: 'Jacklyn brings creativity and precision to all her endeavors. She is committed to maintaining accurate records and facilitating effective communication.',
    },
  ];

  const treasurerCandidates = [
    {
      name: 'Ward Halwani',
      bio: 'Ward has experience in managing finances for various organizations. He is dedicated to ensuring transparent financial practices and responsible resource allocation.',
    },
    {
      name: 'Katelynn Nguyen',
      bio: 'Katelynn is passionate about financial literacy and education. She plans to implement training programs to help clubs better manage their finances.',
    },
    {
      name: 'Shaianne Relucio',
      bio: 'Shaianne has a background in accounting and budget management. She is committed to maximizing the impact of district funds for service projects.',
    },
    {
      name: 'Taye Sangkhae',
      bio: 'Taye believes in fiscal responsibility and transparency. He aims to develop sustainable financial strategies for the long-term success of the district.',
    },
  ];

  const trusteeCandidates = [
    {
      name: 'Tyler Moran',
      bio: 'Tyler is committed to strengthening the connection between our district and Kiwanis International. He plans to advocate for resources and support to help our district thrive.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="bg-gradient-to-r from-tangled-purple via-tangled-sage to-tangled-green py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/tangled-pattern.png')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-tangled-gold/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-tangled-purple/20 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <FaCrown className="text-tangled-gold text-4xl mx-auto mb-4" />
          </div>
          
          <h1 className="font-tangled text-4xl md:text-6xl text-white mb-6">
            House of Delegates
          </h1>
          
          <p className="text-tangled-yellow text-xl max-w-2xl mx-auto mb-8">
            Meet the candidates running for district leadership positions for the 2025-2026 term
          </p>
          
          <div className="w-32 h-1 bg-tangled-gold/70 mx-auto"></div>
        </div>
        
        {/* Decorative icons */}
        <div className="absolute top-10 left-10 text-tangled-yellow/20">
          <FaCrown className="text-5xl" />
        </div>
        <div className="absolute bottom-10 right-10 text-tangled-yellow/20">
          <FaScroll className="text-5xl" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-white/10">
          <FaSun className="text-7xl animate-spin-slow" />
        </div>
      </div>
      
      {/* Order of positions as specified */}
      <PositionSection 
        title="Treasurer" 
        candidates={treasurerCandidates} 
        positionColor="bg-tangled-gold"
        className="bg-gradient-to-b from-white to-tangled-yellow/10"
      />
      
      <PositionSection 
        title="Secretary" 
        candidates={secretaryCandidates} 
        positionColor="bg-tangled-sage"
        className="bg-white"
      />
      
      <PositionSection 
        title="Governor" 
        candidates={governorCandidates} 
        positionColor="bg-tangled-purple"
        className="bg-gradient-to-b from-white to-tangled-lavender/10"
      />
      
      {/* Special styling for International Trustee since there's only one candidate */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 relative">
            <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 opacity-10">
              <FaGlobe className="text-tangled-gold text-3xl" />
            </div>
            
            <div className="inline-block bg-tangled-lavender text-white px-5 py-2 rounded-full mb-2 shadow-md">
              <h2 className="text-xl font-medium">International Trustee</h2>
            </div>
            <div className="w-32 h-1 bg-tangled-gold mx-auto mb-4"></div>
            <p className="text-gray-600 mb-8">Meet our International Trustee candidate</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {trusteeCandidates.map((candidate, index) => (
              <div key={index} className="px-4 py-2">
                <div className="card-tangled overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-1 bg-gradient-to-r from-tangled-purple to-tangled-lavender">
                    <div className="bg-white p-8 flex flex-col">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Candidate Photo */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-tangled-yellow flex-shrink-0 mx-auto md:mx-0 shadow-lg relative">
                          <div className="w-full h-full bg-gradient-to-br from-tangled-lavender/30 to-tangled-yellow/20 flex items-center justify-center">
                            <span className="text-tangled-purple font-medium text-center">
                              Photo Coming Soon
                            </span>
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-tangled-gold/10 rounded-full blur-lg -z-10 scale-110"></div>
                        </div>
                        
                        {/* Candidate Info */}
                        <div className="flex-grow text-center md:text-left">
                          <h3 className="text-3xl font-bold text-tangled-purple mb-4">{candidate.name}</h3>
                          <p className="text-tangled-sage font-medium mb-6 inline-block px-4 py-1 bg-tangled-lavender/10 rounded-full">
                            Candidate for International Trustee
                          </p>
                          
                          <div className="bg-tangled-yellow/10 p-6 rounded-lg border-l-4 border-tangled-gold">
                            <h4 className="font-bold text-tangled-green mb-3">Biography</h4>
                            <p className="text-gray-700">{candidate.bio}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfDelegates; 