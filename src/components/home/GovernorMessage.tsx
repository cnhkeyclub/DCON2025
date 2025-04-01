import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaSun, FaCrown } from 'react-icons/fa';

const GovernorMessage: React.FC = () => {
  return (
    <section className="pt-28 pb-28 bg-gradient-to-b from-white via-tangled-lavender/30 to-tangled-purple/40 relative overflow-hidden">
      {/* Enhanced connecting element with previous section */}
      <div className="absolute -top-24 left-0 right-0 h-48 bg-gradient-to-b from-white/98 via-white/95 to-transparent -z-10"></div>
      
      {/* Improved curved divider for smoother visual connection */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-24 -z-5">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute -top-1 left-0 w-full h-24 text-white"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-tangled-gold/10 rounded-br-full"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-tangled-purple/10 rounded-tl-full"></div>
      <div className="absolute bottom-10 left-10">
        <FaCrown className="text-tangled-gold/20 text-4xl transform rotate-12" />
      </div>
      <div className="absolute top-20 right-10">
        <FaSun className="text-tangled-gold/20 text-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-tangled text-4xl md:text-5xl lg:text-6xl text-tangled-purple mb-4 relative">
            <span className="inline-block relative">
              Governor's Message
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-tangled-gold rounded-full shadow-lg shadow-tangled-gold/50 animate-pulse"></div>
            </span>
          </h2>
          <div className="w-32 h-1 bg-tangled-gold mx-auto mt-8 rounded-full shadow-lg shadow-tangled-gold/30"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Governor's message first on mobile, but second on desktop */}
            <div className="md:col-span-8 md:order-1 order-2 relative">
              <div className="bg-tangled-purple/5 p-4 md:p-6 rounded-lg shadow-sm backdrop-blur-sm relative">
                <FaQuoteLeft className="absolute top-1 left-1 text-2xl md:text-3xl text-tangled-gold/40 z-10" />
                
                <div className="relative z-10">
                  <div className="bg-tangled-purple/10 border-l-4 border-tangled-purple p-4 md:p-6 rounded-r-md">
                    <p className="text-sm md:text-base mb-3 md:mb-5 text-white">
                      Fellow Key Clubbers of the California-Nevada-Hawai'i District, it is with great honor and excitement that I welcome you to our 2025 District Convention, "Tangled in Service." This year's theme reminds us that though our individual service projects may seem small, together they create an illuminating impact on our communities.
                    </p>
                    
                    <p className="text-sm md:text-base mb-3 md:mb-5 text-white">
                      Every Key Clubber's contribution makes a difference. As we gather together, I encourage each of you to take this opportunity to learn, grow, and strengthen your commitment to service and leadership. Your dedication to serving your communities is what makes our organization extraordinary.
                    </p>
                    
                    <p className="text-sm md:text-base text-white">
                      I challenge each of you to approach this convention with an open heart and mind. Meet new friends, share your stories, and take what you learn back to your home clubs. Together we'll continue to light up our communities with service!
                    </p>
                  </div>
                  
                  <div className="flex justify-end mt-6 md:mt-8">
                    <div className="text-right">
                      <p className="font-tangled text-xl md:text-2xl text-tangled-purple mb-1">Governor's Name</p>
                      <p className="text-xs md:text-sm text-tangled-green">CNH District Governor 2024-25</p>
                    </div>
                  </div>
                </div>
                
                <FaQuoteRight className="absolute bottom-1 right-1 text-2xl md:text-3xl text-tangled-gold/40 z-10" />
              </div>
            </div>
            
            {/* Governor's image second on mobile, but first on desktop */}
            <div className="md:col-span-4 md:order-2 order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-tangled-gold/30 rounded-full blur-xl z-0"></div>
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-tangled-purple shadow-xl relative z-10">
                  {/* Placeholder image - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-tangled-gold/30 to-tangled-purple/20 flex items-center justify-center">
                    <span className="text-tangled-purple font-medium">Governor's Photo</span>
                  </div>
                </div>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-tangled-gold text-white text-sm py-2 px-6 rounded-full shadow-lg whitespace-nowrap z-20">
                  District Governor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition element to QuickLinks section */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#362154]/95"></div>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 left-0 w-full h-16 text-[#362154]"
          fill="currentColor"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default GovernorMessage; 