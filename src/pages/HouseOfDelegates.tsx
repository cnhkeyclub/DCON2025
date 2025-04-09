import React, { useState, useEffect } from 'react';
import PositionSection from '../components/delegates/PositionSection';
import Lanterns from '../components/home/Lanterns';
import { FaSun, FaDownload, FaFileAlt, FaBook, FaArrowUp } from 'react-icons/fa';
import PageNatureDecorations from '../components/decorations/PageNatureDecorations';

// We can use public paths for images instead of imports to fix build errors
const HouseOfDelegates: React.FC = () => {
  // State for scroll to top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Monitor scrolling to show/hide the scroll button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Candidate data
  const governorCandidates = [
    {
      name: 'D05S Haley Alberto',
      bio: 'Haley is passionate about service and leadership. She has been an active member of Key Club for 3 years and has served in various club officer positions.',
      photoUrl: '/images/candidates/haley_alberto.png'
    },
    {
      name: 'D15S Charlize Lin',
      bio: 'Charlize has demonstrated exceptional leadership skills throughout her Key Club journey. She believes in empowering members to make a positive impact in their communities.',
      photoUrl: '/images/candidates/charlize_lin.png'
    },
  ];

  const secretaryCandidates = [
    {
      name: 'D22M Malakai Keawe-Correa',
      bio: 'Malakai is dedicated to improving communication within the district. With his organizational skills, he aims to streamline processes and enhance reporting systems.',
      photoUrl: '/images/candidates/malakai_keawe_correa.png'
    },
    {
      name: 'D35W Emily Lin',
      bio: 'Emily has a strong background in documentation and record-keeping. She plans to implement innovative strategies to make information more accessible to all clubs.',
      photoUrl: '/images/candidates/emily_lin.png'
    },
    {
      name: 'D03S Jacklyn Song',
      bio: 'Jacklyn brings creativity and precision to all her endeavors. She is committed to maintaining accurate records and facilitating effective communication.',
      photoUrl: '/images/candidates/jacklyn_song.png'
    },
  ];

  const treasurerCandidates = [
    {
      name: 'D36N Ward Halwani',
      bio: 'Ward has experience in managing finances for various organizations. He is dedicated to ensuring transparent financial practices and responsible resource allocation.',
      photoUrl: '/images/candidates/ward_halwani.png'
    },
    {
      name: 'D07N Katelynn Nguyen',
      bio: 'Katelynn is passionate about financial literacy and education. She plans to implement training programs to help clubs better manage their finances.',
      photoUrl: '/images/candidates/katelynn_nguyen.png'
    },
    {
      name: 'D05N Shaianne Relucio',
      bio: 'Shaianne has a background in accounting and budget management. She is committed to maximizing the impact of district funds for service projects.',
      photoUrl: '/images/candidates/shaianne_relucio.png'
    },
    {
      name: 'D16W Taye Sangkhae',
      bio: 'Taye believes in fiscal responsibility and transparency. He aims to develop sustainable financial strategies for the long-term success of the district.',
      photoUrl: '/images/candidates/taye_sangkhae.png'
    },
  ];

  const trusteeCandidates = [
    {
      name: 'D28S Tyler Moran',
      bio: 'Tyler is committed to strengthening the connection between our district and Kiwanis International. He plans to advocate for resources and support to help our district thrive.',
      photoUrl: '/images/candidates/tyler_moran.jpeg'
    },
  ];

  // Position descriptions
  const positionDescriptions = {
    Governor: "The District Governor leads the California-Nevada-Hawai'i District, ensuring effective communication, planning, and support for board members and clubs. They guide the implementation of initiatives, maintain strong connections with Key Club International, represent our district at major events, and promote the values of Key Club to members of CNH.",
    Secretary: "The District Secretary keeps the district running smoothly by managing official records, meeting minutes, and service hour tracking. They support club secretaries, oversee the Monthly Report Form, and help board members stay organized and informed through clear, consistent communication.",
    Treasurer: "The District Treasurer ensures the district stays financially sound by managing dues, budgeting, and fundraising efforts. They guide club treasurers, educate board members on financial processes, and promote creative ways to support district initiatives.",
    "International Endorsement": "The International Trustee serves as a liaison between our district and Key Club International, representing the interests of CNH on the international level and bringing global initiatives back to our district."
  };

  // CSS for text effects
  const keyframesStyles = `
    @keyframes subtle-pulse {
      0%, 100% { opacity: 0.9; filter: brightness(1); }
      50% { opacity: 1; filter: brightness(1.1); }
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241435] via-[#30194a] to-[#3d2160]">
      {/* Add nature decorations */}
      <PageNatureDecorations theme="purple" density="medium" />
      
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
          
          {/* Candidates Booklet Download Button */}
          <div className="mt-4 mb-8">
            <a 
              href="https://drive.google.com/file/d/1-a95-bMrYFfqYxNuJEFNDKtMIltayl7j/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-amber-400/80 hover:bg-amber-500/80 text-purple-900 font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <FaFileAlt className="mr-2" />
              Download Candidates Booklet
              <FaDownload className="ml-2" />
            </a>
          </div>
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
          description={positionDescriptions.Governor}
        />
        
        {/* Secretary Section */}
        <PositionSection 
          title="Secretary" 
          candidates={secretaryCandidates} 
          positionColor="bg-tangled-sage"
          className="mb-8"
          description={positionDescriptions.Secretary}
        />
        
        {/* Treasurer Section */}
        <PositionSection 
          title="Treasurer" 
          candidates={treasurerCandidates} 
          positionColor="bg-tangled-gold"
          className="mb-8"
          description={positionDescriptions.Treasurer}
        />
        
        {/* Trustee Section - Change to International Endorsement */}
        <PositionSection 
          title="International Endorsement" 
          candidates={trusteeCandidates} 
          positionColor="bg-tangled-lavender"
          className="mb-8"
          description={positionDescriptions["International Endorsement"]}
        />
        
        {/* PDF Preview Section */}
        <div className="max-w-5xl mx-auto mt-16 px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-2 bg-amber-400/20 text-amber-300 rounded-full mb-6">
              <FaBook className="mr-2" />
              <h2 className="text-xl font-medium">Candidates Booklet Preview</h2>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto text-sm mb-8">
              Browse through the complete candidates booklet below or download it for offline viewing
            </p>
          </div>
          
          {/* PDF Embed */}
          <div className="w-full flex justify-center shadow-2xl border border-amber-300/20 rounded-xl overflow-hidden mb-8">
            <div className="w-full max-w-[850px] h-[580px] sm:h-[950px]">
              <iframe 
                src="https://drive.google.com/file/d/1-a95-bMrYFfqYxNuJEFNDKtMIltayl7j/preview" 
                className="w-full h-full border-0"
                title="Candidates Booklet"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500/80 hover:bg-amber-500 text-white p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default HouseOfDelegates; 