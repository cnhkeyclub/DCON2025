import React, { useState, useEffect, useRef } from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active link based on current path
  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path === '/' ? '/' : path);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'House of Delegates', path: '/delegates' },
    { name: 'Schedule', path: '#schedule' },
    { name: 'Map', path: '/map' },
    { name: 'Workshops', path: '#workshops' },
    { name: 'Contests', path: '#contests' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-x-hidden max-w-[100vw] ${
      isScrolled 
        ? 'bg-[#231537]/90 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Subtle gradient overlay for better readability when not scrolled */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E102F]/90 to-transparent pointer-events-none"></div>
      )}
      
      {/* Navbar Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand - reduced size */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <FaCrown className="text-tangled-gold text-xl md:text-2xl mr-2" />
              <div className="absolute inset-0 bg-tangled-gold/20 rounded-full blur-xl scale-150 opacity-70"></div>
            </div>
            <span className="font-tangled text-lg md:text-2xl text-white group-hover:text-tangled-gold transition duration-300">
              DCON 2025
            </span>
          </Link>

          {/* Desktop Navigation - Fixed for web view */}
          <nav className="hidden md:flex items-center justify-end space-x-2 lg:space-x-4">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                className="text-white hover:text-tangled-gold font-medium transition-all duration-300 px-2 py-1 relative group text-sm whitespace-nowrap"
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-tangled-gold transition-all duration-300 ${
                  activeLink === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-tangled-gold transition duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Horizontal Scrolling */}
      {isMobileMenuOpen && (
        <div className="bg-[#231537]/95 border-t border-tangled-gold/20 backdrop-blur-sm shadow-lg md:hidden overflow-hidden">
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-none py-4 scrolling-touch"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex items-center whitespace-nowrap px-4 min-w-full">
              {navLinks.map((link, index) => (
                <Link
                  key={index} 
                  to={link.path}
                  className={`flex-shrink-0 mx-3 first:ml-2 last:mr-6 py-2 px-4 relative ${
                    activeLink === link.path ? 'text-tangled-gold' : 'text-white'
                  }`}
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.name}
                  {activeLink === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tangled-gold"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 