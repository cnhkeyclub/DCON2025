import React from 'react';
import { FaTrophy, FaAward, FaStar, FaTicketAlt, FaUserTie, FaRegClock, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import Lanterns from '../components/home/Lanterns';

const Contests: React.FC = () => {
  // CSS for text effects
  const keyframesStyles = `
    @keyframes subtle-pulse {
      0%, 100% { opacity: 0.9; filter: brightness(1); }
      50% { opacity: 1; filter: brightness(1.1); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241435] via-[#30194a] to-[#3d2160]">
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: keyframesStyles }} />
      
      {/* Enhanced Header Banner with lantern styling */}
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
          
          {/* Title with styling similar to other pages */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <h1 className="font-tangled text-4xl md:text-7xl lg:text-8xl leading-tight flex items-center justify-center">
                <span className="mr-4 inline-block">
                  <FaTrophy className="text-yellow-300 text-3xl md:text-5xl transform rotate-12 animate-pulse" 
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
                  Contests & Recognition
                </span>
                <span className="ml-4 inline-block">
                  <FaTrophy className="text-yellow-300 text-3xl md:text-5xl transform -rotate-12 animate-pulse" 
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
            Celebrating excellence and achievement at DCON 2025
          </p>
        </div>
      </div>
      
      {/* Contests Content Section */}
      <div className="relative pt-8 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contest Information */}
          <div className="mb-12">
            <div className="bg-[#1F0F33]/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/80 rounded-full">
                  <FaAward className="text-amber-400 text-2xl md:text-3xl" />
                </div>
                <h2 className="text-2xl md:text-3xl text-amber-300 font-medium font-tangled">
                  On-Site Contests and District Judging
                </h2>
              </div>
              
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  If your club is entering the Non-Digital or Traditional Year-in-Review Contests, please bring all submissions to the Member Recognition Office in <span className="text-amber-300 font-medium">Room 103</span> on Friday, April 25 by <span className="text-amber-300 font-medium">6PM PST</span>. No late submissions will be accepted.
                </p>
                
                <div className="bg-purple-900/40 p-4 rounded-lg mt-4">
                  <div className="flex gap-2 items-center mb-2">
                    <FaRegClock className="text-amber-300" />
                    <h3 className="text-lg text-amber-300 font-medium">Important Deadline</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex items-center">
                      <div className="mr-3 p-2 bg-purple-800/50 rounded-lg">
                        <FaMapMarkerAlt className="text-amber-300" />
                      </div>
                      <div>
                        <p className="text-amber-300 font-medium">Location</p>
                        <p className="text-white">Member Recognition Office, Room 103</p>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className="mr-3 p-2 bg-purple-800/50 rounded-lg">
                        <FaRegClock className="text-amber-300" />
                      </div>
                      <div>
                        <p className="text-amber-300 font-medium">Deadline</p>
                        <p className="text-white">Friday, April 25 by 6:00 PM PST</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="leading-relaxed mt-6">
                  On-Site District Judges, please report to the Member Recognition Office at <span className="text-amber-300 font-medium">5:30PM</span> for judging.
                </p>
              </div>
            </div>
          </div>
          
          {/* Backstage Passes Section */}
          <div className="mb-12">
            <div className="bg-[#1F0F33]/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/80 rounded-full">
                  <FaTicketAlt className="text-amber-400 text-2xl md:text-3xl" />
                </div>
                <h2 className="text-2xl md:text-3xl text-amber-300 font-medium font-tangled">
                  Backstage Passes
                </h2>
              </div>
              
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  Club Advisors will receive a note to pick up backstage passes in their registration folders. Advisors, please pick up backstage passes from the Member Recognition Office in <span className="text-amber-300 font-medium">Room 103</span> on Saturday, April 26 from <span className="text-amber-300 font-medium">7:00am-7:45am</span> during breakfast.
                </p>
                
                <div className="bg-purple-900/40 p-4 rounded-lg mt-4">
                  <div className="flex gap-2 items-center mb-2">
                    <FaUserTie className="text-amber-300" />
                    <h3 className="text-lg text-amber-300 font-medium">Important Notes for Advisors</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>After backstage passes are picked up, please distribute them to your members prior to General Session 3</li>
                    <li>For club passes, please select one representative to go on stage</li>
                    <li className="font-medium text-amber-300/90">No students will be allowed to pick up backstage passes directly from the Member Recognition Office</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm p-4 rounded-lg mt-6 border-l-4 border-amber-500">
                  <div className="flex gap-2 items-center">
                    <FaRegClock className="text-amber-300" />
                    <h3 className="text-lg text-amber-300 font-medium">Pick-up Time</h3>
                  </div>
                  <p className="mt-2">Saturday, April 26 from 7:00am-7:45am (during breakfast)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* General Session 3 Section */}
          <div className="mb-12">
            <div className="bg-[#1F0F33]/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/80 rounded-full">
                  <FaStar className="text-amber-400 text-2xl md:text-3xl" />
                </div>
                <h2 className="text-2xl md:text-3xl text-amber-300 font-medium font-tangled">
                  General Session 3
                </h2>
              </div>
              
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  If you received a backstage pass, please make sure to follow the dress code in order to go on stage. Refer to the DCON Code of Conduct for appropriate attire guidelines. Further instructions will be listed on the reminder sheet.
                </p>
                
                <div className="mt-6 bg-purple-900/40 p-4 rounded-lg">
                  <div className="flex gap-2 items-center mb-2">
                    <FaAward className="text-amber-300" />
                    <h3 className="text-lg text-amber-300 font-medium">After the Session</h3>
                  </div>
                  <p>
                    After the session concludes, Region Advisors may pick up recognition packets from the Member Recognition Office in Room 103.
                  </p>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-900/50 via-purple-800/50 to-purple-900/50 border border-amber-300/20">
                  <div className="flex items-center justify-center">
                    <div className="animate-pulse">
                      <FaTrophy className="text-amber-300 text-3xl mx-auto mb-2" />
                    </div>
                    <p className="font-tangled text-lg text-white">
                      Congratulations to all contest participants and award recipients!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back to top button */}
          <div className="text-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-5 py-2 bg-purple-700/50 hover:bg-purple-700/70 text-white rounded-full shadow-md transform transition-all duration-300 hover:scale-105"
            >
              <FaArrowUp className="mr-2" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contests; 