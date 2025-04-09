import React, { useState, useEffect } from 'react';
import { FaMapMarkedAlt, FaCheckSquare, FaCamera, FaStar, FaUsers, FaArrowUp, FaInstagram, FaHeart, FaHashtag, FaHandshake, FaMusic, FaVideo, FaCheck } from 'react-icons/fa';
import { GiPartyPopper, GiDuck } from 'react-icons/gi';
import Lanterns from '../components/home/Lanterns';
import PageNatureDecorations from '../components/decorations/PageNatureDecorations';

const ScavengerHunt: React.FC = () => {
  // State to track completed challenges
  const [completedChallenges, setCompletedChallenges] = useState<number[]>(() => {
    // Try to load from localStorage on initialization
    const saved = localStorage.getItem('dcon2025-scavenger-hunt');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever completedChallenges changes
  useEffect(() => {
    localStorage.setItem('dcon2025-scavenger-hunt', JSON.stringify(completedChallenges));
  }, [completedChallenges]);

  // Toggle completion status for a challenge
  const toggleCompletion = (id: number) => {
    setCompletedChallenges(prev => {
      if (prev.includes(id)) {
        return prev.filter(challengeId => challengeId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

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
    @keyframes glow {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.3) saturate(1.5); }
    }
  `;

  // Scavenger hunt items - using the new list provided
  const huntItems = [
    { id: 1, task: "Make a heart with an advisor", icon: <FaHeart className="text-pink-400" /> },
    { id: 2, task: "Spell out DCON with people from at least 2 other divisions", icon: <FaUsers className="text-blue-400" /> },
    { id: 3, task: "Take a photo with your roomies and your decorated lanterns", icon: <GiPartyPopper className="text-amber-400" /> },
    { id: 4, task: "Video high fiving an LTG or elect", icon: <FaHandshake className="text-green-400" /> },
    { id: 5, task: "Picture with a hidden rubber duck", icon: <GiDuck className="text-yellow-400" /> },
    { id: 6, task: "Take a picture with someone on international board", icon: <FaUsers className="text-purple-400" /> },
    { id: 7, task: "Dance to/sing a song from tangled with your roomies", icon: <FaMusic className="text-indigo-400" /> },
    { id: 8, task: "Video cheering at a general session", icon: <FaVideo className="text-red-400" /> },
    { id: 9, task: "Picture with your club", icon: <FaUsers className="text-teal-400" /> },
    { id: 10, task: "Picture of you and someone with the same division colors", icon: <FaStar className="text-amber-400" /> },
    { id: 11, task: "Picture with a workshop presenter", icon: <FaUsers className="text-cyan-400" /> },
    { id: 12, task: "Division sign with someone from another division", icon: <FaCheckSquare className="text-emerald-400" /> },
    { id: 13, task: "Picture in the art room", icon: <FaCamera className="text-orange-400" /> },
    { id: 14, task: "Mirror picture with your roomies", icon: <FaCamera className="text-rose-400" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241435] via-[#30194a] to-[#3d2160]">
      {/* Add nature decorations */}
      <PageNatureDecorations theme="gold" density="medium" />
      
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
                  <FaMapMarkedAlt className="text-yellow-300 text-3xl md:text-5xl transform rotate-12 animate-pulse" 
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
                  Scavenger Hunt
                </span>
                <span className="ml-4 inline-block">
                  <FaMapMarkedAlt className="text-yellow-300 text-3xl md:text-5xl transform -rotate-12 animate-pulse" 
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
            Create memories, capture moments, and celebrate DCON 2025 together!
          </p>
        </div>
      </div>
      
      {/* Scavenger Hunt Content Section */}
      <div className="relative pt-8 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-10">
            <h2 className="text-2xl text-amber-300 font-medium mb-4 font-tangled">How It Works</h2>
            <div className="space-y-4 text-white/90">
              <p>
                Welcome to the DCON 2025 Scavenger Hunt! This exciting adventure will take you through the 
                magic of our convention, helping you make friends, capture memories, and experience 
                everything DCON has to offer.
              </p>
              <p>
                Complete the tasks below by taking photos or videos as indicated. Share your adventures 
                on social media and collect your special DCON scavenger hunt ribbon when you've completed 
                the challenge!
              </p>

              <div className="bg-purple-900/40 p-4 rounded-lg mt-6">
                <h3 className="text-lg text-amber-300 font-medium mb-2">Instructions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckSquare className="text-amber-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Click on the challenge number to track your progress</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckSquare className="text-amber-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Screenshot your stories as you complete the Scavenger Hunt</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckSquare className="text-amber-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Go to the Creative Media Team room (Room 106) for questions and prize redemption</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckSquare className="text-amber-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Claim your special DCON scavenger hunt ribbon (only awarded to those who complete the scavenger hunt)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckSquare className="text-amber-300 mt-1 mr-2 flex-shrink-0" />
                    <span>Make sure to tag <span className="text-pink-300">@cnh_dcon</span> and use <span className="text-pink-300">#TangledinService</span> and <span className="text-pink-300">#CNHDCON2025</span> when sharing your scavenger hunt photos!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bonus section */}
          <div className="relative bg-gradient-to-r from-purple-900/50 via-fuchsia-900/50 to-purple-900/50 p-6 rounded-xl mb-10 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-yellow-300"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `glow 3s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                ></div>
              ))}
            </div>
            <h2 className="text-2xl text-yellow-300 font-medium mb-4 text-center font-tangled relative z-10">BONUS</h2>
            <p className="text-white text-center font-tangled text-lg italic relative z-10" style={{
              textShadow: "0 0 10px rgba(255, 255, 0, 0.3)"
            }}>
              "Like lanterns in the night sky, our stories shine bright—follow the glow to see the magic in sight!"
            </p>
          </div>
          
          {/* Scavenger Hunt Items - new grid layout with smaller, square cards */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl text-amber-300 font-medium text-center mb-8 font-tangled">
              Your Scavenger Hunt Challenges
            </h2>
            
            {/* Completed challenges counter */}
            <div className="bg-purple-900/40 rounded-lg p-3 mb-6 text-center">
              <p className="text-white">
                <span className="text-amber-300 font-medium">{completedChallenges.length}</span> 
                <span> of </span>
                <span className="text-amber-300 font-medium">{huntItems.length}</span> 
                <span> challenges completed</span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {huntItems.map((item) => {
                const isCompleted = completedChallenges.includes(item.id);
                return (
                  <div 
                    key={item.id} 
                    className={`aspect-square bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md border ${isCompleted ? 'border-green-500/50' : 'border-purple-500/30'} hover:border-amber-500/60 transition-all duration-300 hover:shadow-amber-500/20 transform hover:scale-105 group`}
                  >
                    <div className="h-full p-3 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <button 
                          onClick={() => toggleCompletion(item.id)}
                          className={`w-8 h-8 rounded-full ${isCompleted ? 'bg-green-600' : 'bg-purple-700/70'} flex items-center justify-center text-amber-300 font-bold border border-amber-300/50 shadow transition-colors duration-300`}
                        >
                          {isCompleted ? <FaCheck /> : item.id}
                        </button>
                        <div className="text-2xl">
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-white text-sm flex-grow flex items-center">
                        {item.task}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Social Media Sharing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-12">
            <h2 className="text-2xl text-amber-300 font-medium mb-4 font-tangled text-center">Share Your Adventure!</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-1 rounded-lg">
                <div className="bg-purple-900/80 rounded-lg p-3 text-white flex items-center">
                  <FaInstagram className="text-pink-400 text-2xl mr-2" />
                  <span>@cnh_dcon</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-pink-500 p-1 rounded-lg">
                <div className="bg-purple-900/80 rounded-lg p-3 text-white flex items-center">
                  <FaHashtag className="text-amber-400 text-2xl mr-2" />
                  <span>TangledinService</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-amber-500 p-1 rounded-lg">
                <div className="bg-purple-900/80 rounded-lg p-3 text-white flex items-center">
                  <FaHashtag className="text-blue-400 text-2xl mr-2" />
                  <span>CNHDCON2025</span>
                </div>
              </div>
            </div>
            <p className="text-center text-white/80">Use these tags in your stories and posts to be featured on our official DCON pages!</p>
          </div>
          
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-amber-500/80 hover:bg-amber-500 text-white p-3 rounded-full shadow-lg transition-all z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScavengerHunt; 