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
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Chair's image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-tangled-gold/30 rounded-full blur-xl"></div>
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-tangled-gold shadow-xl relative">
                  {/* Placeholder image - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-tangled-lavender/30 to-tangled-yellow/20 flex items-center justify-center">
                    <span className="text-tangled-purple font-medium">Chair's Photo</span>
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
                    <p className="text-sm md:text-base mb-3 md:mb-5 text-white">
                      Welcome to our 2025 District Convention! As your DCON Chair, I'm thrilled to invite you to this celebration of service and friendship. Over the next three days, we'll share in workshops, recognition, and plenty of fun together!
                    </p>
                    
                    <p className="text-sm md:text-base mb-3 md:mb-5 text-white">
                      This year's theme, "Tangled in Service," highlights how our individual contributions weave together to create something beautiful. When we unite our efforts, we create a tapestry of positive change that illuminates our communities.
                    </p>
                    
                    <p className="text-sm md:text-base text-white">
                      The convention team has worked tirelessly to create a memorable experience for everyone. From our exciting workshops to our celebratory banquet, we hope this weekend inspires you to continue shining your light through service. Let's make this the best DCON yet, together!
                    </p>
                  </div>
                  
                  <div className="flex justify-end mt-6 md:mt-8">
                    <div className="text-right">
                      <p className="font-tangled text-xl md:text-2xl text-tangled-gold mb-1">Your Name</p>
                      <p className="text-xs md:text-sm text-tangled-green">CNH District Convention Chair 2024-25</p>
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