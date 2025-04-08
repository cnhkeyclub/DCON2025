import React, { useState } from 'react';
import { FaCamera, FaSearch, FaArrowUp } from 'react-icons/fa';
import Lanterns from '../components/home/Lanterns';
import Carousel from '../components/shared/Carousel';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  day: 'Friday' | 'Saturday' | 'Sunday';
}

const Gallery: React.FC = () => {
  // Using _ prefix to indicate the setter is intentionally unused
  const [activeCategory, _setActiveCategory] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // CSS for text effects
  const keyframesStyles = `
    @keyframes subtle-pulse {
      0%, 100% { opacity: 0.9; filter: brightness(1); }
      50% { opacity: 1; filter: brightness(1.1); }
    }
  `;

  // Gallery data
  const galleryImages: GalleryImage[] = [
    // Friday images
    {
      id: "fri-1",
      src: "/images/gallery/friday_1.jpg",
      alt: "Candidate Meet & Greet",
      category: "leadership",
      day: "Friday"
    },
    {
      id: "fri-2",
      src: "/images/gallery/friday_2.jpg",
      alt: "Opening Ceremony",
      category: "social",
      day: "Friday"
    },
    {
      id: "fri-3",
      src: "/images/gallery/friday_3.jpg",
      alt: "First General Session Keynote",
      category: "leadership",
      day: "Friday"
    },
    {
      id: "fri-4",
      src: "/images/gallery/friday_4.jpg",
      alt: "Region Sessions",
      category: "workshop",
      day: "Friday"
    },
    
    // Saturday images
    {
      id: "sat-1",
      src: "/images/gallery/saturday_1.jpg",
      alt: "House of Delegates Voting",
      category: "leadership",
      day: "Saturday"
    },
    {
      id: "sat-2",
      src: "/images/gallery/saturday_2.jpg",
      alt: "Service Project: Making Blankets",
      category: "service",
      day: "Saturday"
    },
    {
      id: "sat-3",
      src: "/images/gallery/saturday_3.jpg",
      alt: "Workshop Sessions",
      category: "workshop",
      day: "Saturday"
    },
    {
      id: "sat-4",
      src: "/images/gallery/saturday_4.jpg",
      alt: "Recognition Session",
      category: "social",
      day: "Saturday"
    },
    {
      id: "sat-5",
      src: "/images/gallery/saturday_5.jpg",
      alt: "Governor's Ball",
      category: "social",
      day: "Saturday"
    },
    
    // Sunday images
    {
      id: "sun-1",
      src: "/images/gallery/sunday_1.jpg",
      alt: "Farewell Breakfast",
      category: "social",
      day: "Sunday"
    },
    {
      id: "sun-2",
      src: "/images/gallery/sunday_2.jpg",
      alt: "Board Transition Ceremony",
      category: "leadership",
      day: "Sunday"
    },
    {
      id: "sun-3",
      src: "/images/gallery/sunday_3.jpg",
      alt: "Closing Session",
      category: "leadership",
      day: "Sunday"
    }
  ];

  // Since we don't have actual images, we'll use placeholders
  // This function generates a consistent color based on the image ID for the placeholders
  const getPlaceholderColor = (id: string) => {
    const colors = [
      'bg-amber-300', 'bg-purple-400', 'bg-blue-400', 
      'bg-pink-400', 'bg-green-400', 'bg-red-400',
      'bg-yellow-400', 'bg-indigo-400', 'bg-teal-400',
      'bg-orange-400', 'bg-cyan-400', 'bg-lime-400'
    ];
    const index = parseInt(id.split('-')[1]) % colors.length;
    return colors[index];
  };

  // Get day color
  const getDayColor = (day: string) => {
    switch(day) {
      case 'Friday':
        return 'from-amber-400 to-amber-600';
      case 'Saturday':
        return 'from-purple-400 to-purple-600';
      case 'Sunday':
        return 'from-emerald-500 to-emerald-700';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  // Days for filtering
  const days = ['Friday', 'Saturday', 'Sunday'];

  // Filter images based on active filters
  const filteredImages = galleryImages.filter(img => {
    if (activeCategory && img.category !== activeCategory) return false;
    if (activeDay && img.day !== activeDay) return false;
    return true;
  });

  // Group filtered images by day
  const fridayImages = filteredImages.filter(img => img.day === 'Friday');
  const saturdayImages = filteredImages.filter(img => img.day === 'Saturday');
  const sundayImages = filteredImages.filter(img => img.day === 'Sunday');

  // Open the image modal
  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close the image modal
  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Render an image card for the carousel
  const renderImageCard = (image: GalleryImage) => (
    <div 
      key={image.id} 
      className="group h-full overflow-hidden rounded-lg border border-amber-300/20 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl mx-2"
      onClick={() => openImage(image)}
    >
      {/* Placeholder instead of actual image for this demo */}
      <div className={`w-full h-64 ${getPlaceholderColor(image.id)} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <FaCamera className="text-white text-5xl" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="text-white text-sm font-medium">{image.day}</div>
          <div className="text-white font-medium line-clamp-2">{image.alt}</div>
        </div>
      </div>
    </div>
  );

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
                  <FaCamera className="text-yellow-300 text-3xl md:text-5xl transform rotate-12 animate-pulse" 
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
                  DCON Memories
                </span>
                <span className="ml-4 inline-block">
                  <FaCamera className="text-yellow-300 text-3xl md:text-5xl transform -rotate-12 animate-pulse" 
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
            Capturing the spirit and service of our past conventions
          </p>
        </div>
      </div>
      
      {/* Gallery Content Section */}
      <div className="relative pt-8 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Controls */}
          <div className="mb-12">
            {/* Day Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveDay(null)}
                className={`py-2 px-8 rounded-full font-medium transition-all duration-300 ${
                  activeDay === null 
                    ? 'bg-amber-300 text-purple-900 shadow-lg' 
                    : 'bg-[#2c1b48] text-white/80 hover:bg-[#3c2a58] hover:text-white'
                }`}
              >
                All Days
              </button>
              
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`py-2 px-8 rounded-full font-medium transition-all duration-300 ${
                    activeDay === day 
                      ? 'bg-amber-300 text-purple-900 shadow-lg' 
                      : 'bg-[#2c1b48] text-white/80 hover:bg-[#3c2a58] hover:text-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Carousels by Day */}
          <div className="space-y-16">
            {/* Only show sections for the days that have images after filtering */}
            {(activeDay === null || activeDay === 'Friday') && fridayImages.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${getDayColor('Friday')}`}></div>
                  <h2 className="text-2xl md:text-3xl text-amber-300 font-medium font-tangled">
                    Friday, April 25, 2025
                  </h2>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
                  <Carousel autoSlide={false} className="h-64">
                    {fridayImages.length === 0 ? (
                      [<div key="empty-friday" className="flex items-center justify-center h-full">
                        <p className="text-white/70">No photos available for Friday</p>
                      </div>]
                    ) : fridayImages.map(image => renderImageCard(image))}
                  </Carousel>
                </div>
              </div>
            )}

            {(activeDay === null || activeDay === 'Saturday') && saturdayImages.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${getDayColor('Saturday')}`}></div>
                  <h2 className="text-2xl md:text-3xl text-amber-300 font-medium font-tangled">
                    Saturday, April 26, 2025
                  </h2>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
                  <Carousel autoSlide={false} className="h-64">
                    {saturdayImages.length === 0 ? (
                      [<div key="empty-saturday" className="flex items-center justify-center h-full">
                        <p className="text-white/70">No photos available for Saturday</p>
                      </div>]
                    ) : saturdayImages.map(image => renderImageCard(image))}
                  </Carousel>
                </div>
              </div>
            )}

            {(activeDay === null || activeDay === 'Sunday') && sundayImages.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${getDayColor('Sunday')}`}></div>
                  <h2 className="text-2xl md:text-3xl text-amber-300 font-medium font-tangled">
                    Sunday, April 27, 2025
                  </h2>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6">
                  <Carousel autoSlide={false} className="h-64">
                    {sundayImages.length === 0 ? (
                      [<div key="empty-sunday" className="flex items-center justify-center h-full">
                        <p className="text-white/70">No photos available for Sunday</p>
                      </div>]
                    ) : sundayImages.map(image => renderImageCard(image))}
                  </Carousel>
                </div>
              </div>
            )}
          </div>
          
          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <FaSearch className="text-amber-300/40 text-5xl mx-auto mb-4" />
              <h3 className="text-white text-xl mb-2">No images found</h3>
              <p className="text-white/60">Try adjusting your filters to see more results</p>
            </div>
          )}
          
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
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div 
            className="bg-[#241435] rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Placeholder instead of actual image */}
            <div className={`w-full h-96 ${getPlaceholderColor(selectedImage.id)} relative`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <FaCamera className="text-white text-7xl" />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-white text-xl font-medium mb-2">{selectedImage.alt}</h3>
              <div className="flex items-center justify-between text-white/70">
                <div>{selectedImage.day}, April {selectedImage.day === 'Friday' ? '25' : selectedImage.day === 'Saturday' ? '26' : '27'}, 2025</div>
                <div className="capitalize">{selectedImage.category}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 