import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaSun, FaLeaf } from 'react-icons/fa';

const ChairWelcome: React.FC = () => {
  return (
    <section id="welcome-section" className="pt-28 pb-20 bg-gradient-to-b from-[#362154] via-[#362154]/70 to-white relative overflow-hidden">
      {/* Enhanced connecting element that overlaps with hero banner */}
      <div className="absolute -top-20 left-0 right-0 h-48 bg-gradient-to-b from-[#362154] via-[#362154]/95 to-[#362154]/70 -z-10"></div>
      
      {/* Wave-like divider for better section transition */}
      <div className="absolute -top-10 left-0 right-0 h-20 overflow-hidden -z-5">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-40 text-[#362154] opacity-95"
          fill="currentColor"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-tangled-yellow/10 rounded-bl-full"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-tangled-lavender/10 rounded-tr-full"></div>
      <div className="absolute bottom-10 right-10">
        <FaLeaf className="text-tangled-green/20 text-4xl transform rotate-45" />
      </div>
      <div className="absolute top-32 left-10">
        <FaSun className="text-tangled-gold/20 text-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-tangled text-3xl md:text-4xl lg:text-5xl text-white mb-4 text-shadow-md">DCON Chair's Message</h2>
          <div className="w-32 h-1 bg-tangled-gold mx-auto mt-4 rounded-full shadow-lg shadow-tangled-gold/30"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Chair's image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-tangled-gold/30 rounded-full blur-xl"></div>
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-tangled-gold shadow-xl relative flex items-center justify-center bg-[#241435]/80">
                  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                    <img 
                      src="/images/chairs/tristan-decious.png" 
                      alt="Tristan Decious - DCON Chair" 
                      className="w-[95%] h-auto object-contain transform translate-y-[0%]"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-tangled-purple text-white text-sm py-2 px-6 rounded-full shadow-lg whitespace-nowrap">
                  DCON 2025 Chair
                </div>
              </div>
            </div>
            
            {/* Chair's message */}
            <div className="md:col-span-8 relative">
              <div className="bg-tangled-gold/5 p-4 md:p-6 rounded-lg shadow-sm backdrop-blur-sm relative">
                <FaQuoteLeft className="absolute top-1 left-1 text-2xl md:text-3xl text-tangled-purple/40 z-10" />
                
                <div className="relative z-10">
                  <div className="bg-tangled-yellow/10 border-l-4 border-tangled-gold p-4 md:p-6 rounded-r-md">
                    <p className="text-sm md:text-base mb-3 md:mb-5 text-white font-medium">
                      BUZZ BUZZ CNH!
                    </p>
                    
                    <p className="text-sm md:text-base mb-3 md:mb-5 text-white">
                      My name is Tristan Decious and I serve you as your District Convention Chair at the 79th Annual California-Nevada-Hawaii DCON 2025! I am so glad you are joining CNH for this monumental occasion and I hope you're ready to get TANGLED IN SERVICE!
                    </p>
                    
                    <p className="text-sm md:text-base mb-3 md:mb-5 text-white">
                      District Convention 2025 is one for the books, for sure. On the convention site, you will find incredible workshops, inspiring service projects, an ambitious Keynote Speaker (shout out to the one and only Chelsie Baham), and much more. Do you want to share your passion with the district through artistic desires? Check out our Lantern Decorating stations in our new Art Room!
                    </p>
                    
                    <p className="text-sm md:text-base mb-3 md:mb-5 text-white">
                      The District Convention Committee has worked tirelessly to make sure this event can be YOUR Key Club moment. This year, we celebrate the light that shines in all of us, and we hope you take this opportunity to do just that. We are so excited to have you here, CNH! Thank you for your service and I hope you have a blast at DISTRICT CONVENTION 2025! Let's get TANGLED IN SERVICE!
                    </p>
                  </div>
                  
                  <div className="flex justify-end mt-3 md:mt-4">
                    <div className="text-right">
                      <p className="font-tangled text-xl md:text-2xl text-tangled-green mb-1">Tristan Decious</p>
                      <p className="text-xs md:text-sm text-tangled-green">District Convention Chair 2024-2025</p>
                    </div>
                  </div>
                </div>
                
                <FaQuoteRight className="absolute bottom-1 right-1 text-2xl md:text-3xl text-tangled-purple/40 z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairWelcome; 