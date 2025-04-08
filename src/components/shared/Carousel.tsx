import React, { useState, useEffect, ReactNode, useRef, TouchEvent } from 'react';
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  className?: string;
  hideArrowsForSingleSlide?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
  className = '',
  hideArrowsForSingleSlide = false
}) => {
  const [current, setCurrent] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const length = childrenArray.length;
  
  // Touch handling state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50; // Minimum distance required for a swipe

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Touch event handlers
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    
    // Check if the swipe was significant enough
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left -> go to next slide
        nextSlide();
      } else {
        // Swipe right -> go to previous slide
        prevSlide();
      }
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current, autoSlide, autoSlideInterval]);

  if (!Array.isArray(children) || children.length <= 0) {
    return null;
  }

  // Determine if arrows should be shown
  const showArrows = !(hideArrowsForSingleSlide && length === 1);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation buttons - conditionally rendered */}
      {showArrows && (
        <>
          <button 
            className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-tangled-purple/50 hover:bg-tangled-purple text-white p-2 rounded-full"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button 
            className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-tangled-purple/50 hover:bg-tangled-purple text-white p-2 rounded-full"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Indicators - only show if there's more than one slide */}
      {length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`text-xs transition-colors duration-300 ${
                index === current ? 'text-tangled-gold' : 'text-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <FaCircle />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel; 