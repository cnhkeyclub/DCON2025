import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaArrowUp } from 'react-icons/fa';
import Lanterns from '../components/home/Lanterns';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>('general');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  // CSS for text effects
  const keyframesStyles = `
    @keyframes subtle-pulse {
      0%, 100% { opacity: 0.9; filter: brightness(1); }
      50% { opacity: 1; filter: brightness(1.1); }
    }
  `;

  // FAQ data
  const faqData: FAQItem[] = [
    // General Questions
    {
      question: "What is District Convention (DCON)?",
      answer: "DCON is an annual gathering where Key Club members from California, Nevada, and Hawai'i come together to celebrate service, elect district leaders, participate in workshops, and recognize achievements from the past year.",
      category: "general"
    },
    {
      question: "When and where is DCON 2025?",
      answer: "DCON 2025 will be held from April 25-27, 2025, at the Ontario Convention Center in Ontario, California.",
      category: "general"
    },
    {
      question: "Who can attend DCON?",
      answer: "Any Key Club member in good standing from the California-Nevada-Hawai'i District may attend DCON. Advisors, chaperones, and Kiwanis family members are also welcome.",
      category: "general"
    },
    
    // Registration Questions
    {
      question: "How do I register for DCON?",
      answer: "Registration is handled through your club and division. Speak to your club president or faculty advisor about registering. The official registration deadline is typically about one month before the event.",
      category: "registration"
    },
    {
      question: "What is included in the registration fee?",
      answer: "The registration fee covers admission to all sessions, workshops, and events, as well as meals during the convention (Friday dinner through Sunday breakfast), a convention T-shirt, and various souvenirs.",
      category: "registration"
    },
    {
      question: "Is there a discount for early registration?",
      answer: "Yes, early bird registration is available until March 1, 2025, at a discounted rate. After that date, regular registration fees will apply.",
      category: "registration"
    },
    
    // Accommodations
    {
      question: "Where should I stay during DCON?",
      answer: "Official DCON hotels near the convention center offer special rates for attendees. Information about booking will be provided during registration. All attendees must stay at one of the approved hotels.",
      category: "accommodations"
    },
    {
      question: "How are hotel rooms assigned?",
      answer: "Rooms are typically assigned by your club advisor or division leadership. All rooms are gender-specific and will have adult chaperone supervision.",
      category: "accommodations"
    },
    {
      question: "How do I get from the hotel to the convention center?",
      answer: "Most official hotels are within walking distance of the convention center. For hotels that are further away, shuttle service will be provided throughout the convention.",
      category: "accommodations"
    },
    
    // Events & Activities
    {
      question: "What should I wear to DCON?",
      answer: "Different events have different dress codes. General sessions require business professional attire, while workshops allow business casual. The Governor's Ball requires formal attire. More specific dress code information will be provided before the convention.",
      category: "events"
    },
    {
      question: "Will there be food at the convention?",
      answer: "Yes, meals are included with your registration, from Friday dinner through Sunday breakfast. Please note any dietary restrictions during registration.",
      category: "events"
    },
    {
      question: "What is the Governor's Ball?",
      answer: "The Governor's Ball is a formal dance held on Saturday night of the convention. It's a chance to celebrate with friends and make lasting memories. Formal attire is required.",
      category: "events"
    },
    
    // House of Delegates
    {
      question: "What is the House of Delegates?",
      answer: "The House of Delegates is where voting on district leadership positions and amendments to the district bylaws takes place. Each club in good standing may send two delegates to vote on behalf of their club.",
      category: "delegates"
    },
    {
      question: "How are delegates selected?",
      answer: "Delegates are selected by individual clubs, usually through an application or election process. Contact your club president or faculty advisor for information about becoming a delegate.",
      category: "delegates"
    },
    {
      question: "What responsibilities do delegates have?",
      answer: "Delegates are required to attend caucuses to learn about candidates, the House of Delegates session where voting takes place, and report back to their clubs about election results and district decisions.",
      category: "delegates"
    }
  ];

  // Available categories
  const categories = [
    { id: 'general', name: 'General Information' },
    { id: 'registration', name: 'Registration' },
    { id: 'accommodations', name: 'Accommodations' },
    { id: 'events', name: 'Events & Activities' },
    { id: 'delegates', name: 'House of Delegates' }
  ];

  // Filter FAQs by active category
  const filteredFAQs = activeCategory 
    ? faqData.filter(faq => faq.category === activeCategory) 
    : faqData;

  // Toggle expanded state of a question
  const toggleQuestion = (question: string) => {
    setExpandedQuestions(prev => 
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  // Check if a question is expanded
  const isExpanded = (question: string) => expandedQuestions.includes(question);

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
                  <FaQuestionCircle className="text-yellow-300 text-3xl md:text-5xl transform rotate-12 animate-pulse" 
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
                  Frequently Asked Questions
                </span>
                <span className="ml-4 inline-block">
                  <FaQuestionCircle className="text-yellow-300 text-3xl md:text-5xl transform -rotate-12 animate-pulse" 
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
            Everything you need to know about DCON 2025
          </p>
        </div>
      </div>
      
      {/* FAQ Content Section */}
      <div className="relative pt-8 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-amber-300 text-purple-900 shadow-lg' 
                    : 'bg-[#2c1b48] text-white/80 hover:bg-[#3c2a58] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-amber-300/20 transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleQuestion(faq.question)}
                  className="w-full text-left p-5 flex justify-between items-center"
                >
                  <span className="text-white font-medium text-lg">{faq.question}</span>
                  {isExpanded(faq.question) ? (
                    <FaChevronUp className="text-amber-300 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-amber-300 flex-shrink-0" />
                  )}
                </button>
                
                {isExpanded(faq.question) && (
                  <div className="px-5 pb-5 pt-0 text-white/80 border-t border-amber-300/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Back to top button */}
          <div className="text-center mt-16">
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

export default FAQ; 