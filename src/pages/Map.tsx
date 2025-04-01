import React from 'react';
import { FaMapMarkedAlt, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const Map: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="bg-gradient-to-r from-tangled-purple to-tangled-green py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/tangled-pattern.png')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-tangled-gold/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-tangled-purple/20 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <FaMapMarkedAlt className="text-tangled-gold text-4xl mx-auto mb-4" />
          </div>
          
          <h1 className="font-tangled text-4xl md:text-6xl text-white mb-6">
            Venue Map
          </h1>
          
          <p className="text-tangled-yellow text-xl max-w-2xl mx-auto mb-8">
            Find your way around the DCON 2025 event spaces
          </p>
          
          <div className="w-32 h-1 bg-tangled-gold/70 mx-auto"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Location Info */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-tangled-purple mb-4">Main Event Venue</h2>
          <p className="text-lg text-gray-700 mb-6">
            California-Nevada-Hawaii District Convention 2025 will be held at the Tangled Kingdom Resort & Conference Center.
          </p>
          <div className="bg-tangled-purple/10 p-6 rounded-lg inline-block">
            <p className="flex items-center justify-center text-tangled-purple font-medium">
              <FaMapMarkerAlt className="mr-2 text-tangled-gold" />
              123 Corona Blvd, Sunshine Bay, CA 94000
            </p>
          </div>
        </div>
        
        {/* Interactive Map Placeholder */}
        <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg mb-12 max-w-5xl mx-auto aspect-[16/9] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-tangled-purple/30 to-tangled-gold/30"></div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg z-10 max-w-md">
            <FaMapMarkedAlt className="text-5xl text-tangled-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tangled-purple mb-2">Interactive Map</h3>
            <p className="text-gray-700 mb-4">
              An interactive venue map will be available closer to the event date. Check back soon!
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-tangled-purple/70">
              <FaInfoCircle /> 
              <span>Map updates will be announced via email and social media.</span>
            </div>
          </div>
        </div>
        
        {/* Key Locations */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-tangled-purple mb-6 text-center">Key Locations</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tangled-gold">
              <h3 className="text-xl font-bold text-tangled-purple mb-2">Main Ballroom</h3>
              <p className="text-gray-700">
                Located on the first floor, the Main Ballroom hosts opening and closing ceremonies, general sessions, and evening events.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tangled-purple">
              <h3 className="text-xl font-bold text-tangled-purple mb-2">Workshop Rooms</h3>
              <p className="text-gray-700">
                Workshop sessions are held in the Corona Wing (2nd floor), with rooms labeled C201-C210.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tangled-green">
              <h3 className="text-xl font-bold text-tangled-purple mb-2">House of Delegates</h3>
              <p className="text-gray-700">
                All House of Delegates sessions take place in the Kingdom Hall (3rd floor).
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tangled-sage">
              <h3 className="text-xl font-bold text-tangled-purple mb-2">Dining Area</h3>
              <p className="text-gray-700">
                Meals are served in the Lantern Dining Hall, located on the first floor adjacent to the courtyard.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-tangled-purple mb-6">Getting Around</h2>
            <p className="text-lg text-gray-700 mb-8">
              Directional signage will be placed throughout the venue. DCON volunteers in purple vests will be available to help you navigate to your sessions.
            </p>
            
            <div className="inline-block bg-white p-6 rounded-lg shadow-md border border-tangled-gold/30">
              <h3 className="text-xl font-bold text-tangled-purple mb-3">Need Assistance?</h3>
              <p className="text-gray-700">
                Visit the Information Desk in the Main Lobby or contact the DCON team at <a href="mailto:info@cnhdcon2025.org" className="text-tangled-gold hover:underline">info@cnhdcon2025.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map; 