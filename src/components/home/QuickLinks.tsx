import React from 'react';
import { 
  FaCalendarAlt, 
  FaUserFriends, 
  FaTrophy, 
  FaFileAlt, 
  FaCamera, 
  FaHandsHelping,
  FaSun,
  FaMapMarkerAlt,
  FaUsers
} from 'react-icons/fa';

// Card component for each quick link
const QuickLinkCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  linkUrl: string;
}> = ({ icon, title, description, linkUrl }) => {
  return (
    <a 
      href={linkUrl}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-tangled-lavender/10"
    >
      <div className="text-tangled-gold text-4xl mb-4">{icon}</div>
      <h3 className="font-tangled text-xl text-tangled-purple mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </a>
  );
};

const QuickLinks: React.FC = () => {
  const links = [
    {
      icon: <FaCalendarAlt />,
      title: 'Schedule',
      description: 'View the full convention schedule and plan your weekend',
      linkUrl: '/schedule'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Venue',
      description: 'Explore our convention venue and find your way around',
      linkUrl: '/venue'
    },
    {
      icon: <FaUsers />,
      title: 'Workshops',
      description: 'Browse our selection of leadership and service workshops',
      linkUrl: '/workshops'
    },
    {
      icon: <FaCamera />,
      title: 'Gallery',
      description: 'Photos from past events and convention highlights',
      linkUrl: '/gallery'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Service Projects',
      description: 'Join our service initiatives during the convention',
      linkUrl: '/service'
    },
    {
      icon: <FaUsers />,
      title: 'Contests',
      description: 'Check out the various contests and competitions',
      linkUrl: '/contests'
    }
  ];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-[#362154] via-[#473678] to-[#594b90] relative overflow-hidden">
      {/* Enhanced connecting element with previous section - improved blending */}
      <div className="absolute -top-36 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#362154]/80 to-[#362154] -z-10"></div>
      
      {/* Multi-layered wave divider for better visual connection */}
      <div className="absolute -top-16 left-0 right-0 overflow-hidden h-48 -z-5">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-48 text-[#362154] opacity-95"
          fill="currentColor"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".4"></path>
        </svg>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-8 left-0 w-full h-48 text-[#362154] opacity-95"
          fill="currentColor"
        >
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".6"></path>
        </svg>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-16 left-0 w-full h-48 text-[#362154] opacity-90"
          fill="currentColor"
        >
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
      
      {/* Decorative sun emblem */}
      <div className="absolute top-40 left-10 opacity-10">
        <FaSun className="text-tangled-gold text-8xl" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <FaSun className="text-tangled-gold text-6xl" />
      </div>
      
      {/* Diagonal decorative line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-full h-1 bg-tangled-gold/10 transform rotate-45"></div>
        <div className="absolute bottom-0 -right-1/4 w-full h-1 bg-tangled-gold/10 transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-tangled text-3xl md:text-4xl lg:text-5xl text-white mb-4 text-shadow-md">Quick Links</h2>
          <p className="text-white/80 max-w-2xl mx-auto my-4">
            Everything you need to know about Tangled in Service DCON 2025
          </p>
          <div className="w-24 h-1 bg-tangled-gold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <QuickLinkCard key={index} icon={link.icon} title={link.title} description={link.description} linkUrl={link.linkUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks; 