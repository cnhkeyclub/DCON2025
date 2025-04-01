import React, { useState, useEffect, ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
  className = ''
}) => {
  const [current, setCurrent] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const length = childrenArray.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current, autoSlide, autoSlideInterval]);

  if (!Array.isArray(children) || children.length <= 0) {
    return null;
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
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

      {/* Indicators */}
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
    </div>
  );
};

export default Carousel; 