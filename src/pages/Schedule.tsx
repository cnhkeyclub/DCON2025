import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaChevronRight } from 'react-icons/fa';
import Lanterns from '../components/home/Lanterns';

// Define schedule item type
interface ScheduleItem {
  id: string;
  day: 'Friday' | 'Saturday' | 'Sunday';
  startTime: string;
  endTime: string;
  title: string;
  subtitle?: string;
  location: string;
  presenter?: string;
}

const Schedule: React.FC = () => {
  // State to track which day is selected
  const [selectedDay, setSelectedDay] = useState<'All' | 'Friday' | 'Saturday' | 'Sunday'>('All');

  // CSS for text effects
  const keyframesStyles = `
    @keyframes subtle-pulse {
      0%, 100% { opacity: 0.9; filter: brightness(1); }
      50% { opacity: 1; filter: brightness(1.1); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `;

  // Schedule data from the table
  const scheduleData: ScheduleItem[] = [
    // Friday events
    { id: 'fri-1', day: 'Friday', startTime: '2:30pm', endTime: '4:30pm', title: 'Candidate Meet & Greet', location: 'Room 202A/B' },
    { id: 'fri-2', day: 'Friday', startTime: '2:30pm', endTime: '6:00pm', title: 'Member Recognition Registration', location: 'Room 103 (MR Room)' },
    { id: 'fri-3', day: 'Friday', startTime: '2:30pm', endTime: '7:00pm', title: 'SAA Registration', location: 'Exhibit Hall Pre-Function' },
    { id: 'fri-4', day: 'Friday', startTime: '2:30pm', endTime: '7:00pm', title: 'Convention Registration', location: 'Exhibit Hall Pre-Function' },
    { id: 'fri-5', day: 'Friday', startTime: '2:30pm', endTime: '7:00pm', title: 'T-Shirt / Souvenir Pickup', location: 'Exhibit Hall Pre-Function' },
    { id: 'fri-6', day: 'Friday', startTime: '2:30pm', endTime: '7:00pm', title: 'Delegate Registration', location: 'Exhibit Hall Pre-Function' },
    { id: 'fri-7', day: 'Friday', startTime: '4:00pm', endTime: '5:10pm', title: 'Presenters Meeting', location: 'Ballroom C' },
    { id: 'fri-8', day: 'Friday', startTime: '5:30pm', endTime: '6:10pm', title: 'Candidates Meeting', location: 'Room 202A/B' },
    { id: 'fri-9', day: 'Friday', startTime: '5:30pm', endTime: '6:10pm', title: 'Sergeant-at-Arms Meeting', location: 'Ballroom C' },
    { id: 'fri-10', day: 'Friday', startTime: '5:30pm', endTime: '7:00pm', title: 'Talent Rehearsals', location: 'Exhibit Hall A' },
    { id: 'fri-11', day: 'Friday', startTime: '5:30pm', endTime: '6:10pm', title: 'Education Session 1', subtitle: '(40 min session)', location: 'Various Rooms' },
    { id: 'fri-12', day: 'Friday', startTime: '6:00pm', endTime: '7:00pm', title: 'Scrapbook Judging', location: 'Room 103 (MR Room)' },
    { id: 'fri-13', day: 'Friday', startTime: '6:20pm', endTime: '7:00pm', title: 'Education Session 2', subtitle: '(40 min session)', location: 'Various Rooms' },
    { id: 'fri-14', day: 'Friday', startTime: '7:10pm', endTime: '8:15pm', title: 'Advisor/Chaperone Security Briefing', subtitle: '(Mandatory)', location: 'Ballroom C' },
    { id: 'fri-15', day: 'Friday', startTime: '7:10pm', endTime: '8:15pm', title: 'Region Sessions', location: 'Various Rooms' },
    { id: 'fri-16', day: 'Friday', startTime: '8:30pm', endTime: '10:30pm', title: 'First General Session', subtitle: '(Keynote)', location: 'Exhibit Hall A' },
    { id: 'fri-17', day: 'Friday', startTime: '10:30pm', endTime: '11:00pm', title: 'Delegate Registration', location: 'Exhibit Hall Pre-Function' },
    { id: 'fri-18', day: 'Friday', startTime: '11:00pm', endTime: '', title: 'Convention Area Closed', location: '' },
    { id: 'fri-19', day: 'Friday', startTime: '11:15pm', endTime: '', title: 'Curfew', subtitle: '(In Your Assigned Room)', location: '' },

    // Saturday events
    { id: 'sat-1', day: 'Saturday', startTime: '7:00am', endTime: '7:45am', title: 'Convention, SAA, and Delegate Registration', location: 'Exhibit Hall Pre-Function' },
    { id: 'sat-2', day: 'Saturday', startTime: '7:00am', endTime: '7:45am', title: 'Breakfast', location: 'Exhibit Hall B' },
    { id: 'sat-3', day: 'Saturday', startTime: '8:00am', endTime: '8:40am', title: 'Education Session 3', subtitle: '(40 min session)', location: 'Various Rooms' },
    { id: 'sat-4', day: 'Saturday', startTime: '8:00am', endTime: '10:00am', title: 'Caucus Session', subtitle: '(All Delegates Required to Attend)', location: 'Exhibit Hall A' },
    { id: 'sat-5', day: 'Saturday', startTime: '8:50am', endTime: '9:30am', title: 'Education Session 4', subtitle: '(40 min session)', location: 'Various Rooms' },
    { id: 'sat-6', day: 'Saturday', startTime: '9:40am', endTime: '10:20am', title: 'Education Session 5', subtitle: '(40 min session)', location: 'Various Rooms' },
    { id: 'sat-7', day: 'Saturday', startTime: '10:30am', endTime: '11:20am', title: 'Education Session 6', subtitle: '(50 min session)', location: 'Various Rooms' },
    { id: 'sat-8', day: 'Saturday', startTime: '10:30am', endTime: '12:20pm', title: 'House of Delegates', subtitle: '(All Delegates Required to Attend)', location: 'Exhibit Hall A' },
    { id: 'sat-9', day: 'Saturday', startTime: '11:30am', endTime: '12:20pm', title: 'Education Session 7', subtitle: '(50 min session)', location: 'Various Rooms' },
    { id: 'sat-10', day: 'Saturday', startTime: '12:30pm', endTime: '1:30pm', title: 'Lunch', location: 'Exhibit Hall B' },
    { id: 'sat-11', day: 'Saturday', startTime: '1:45pm', endTime: '3:10pm', title: 'Second General Session', subtitle: '(Kiwanis Family)', location: 'Exhibit Hall A' },
    { id: 'sat-12', day: 'Saturday', startTime: '3:15pm', endTime: '4:45pm', title: 'EXPOs', subtitle: '(KFF SP MG INTL CHAMPION)', location: 'Ballrooms A, B, C' },
    { id: 'sat-13', day: 'Saturday', startTime: '3:15pm', endTime: '4:45pm', title: 'Hands-On Service Projects', location: 'Ballroom C' },
    { id: 'sat-14', day: 'Saturday', startTime: '3:45pm', endTime: '4:45pm', title: 'Education Session 8', subtitle: '(Position Specific Workshops - 60 min session)', location: 'Various Rooms' },
    { id: 'sat-15', day: 'Saturday', startTime: '4:45pm', endTime: '5:45pm', title: 'Change for Recognition Session and Gov Ball', location: 'Hotels' },
    { id: 'sat-16', day: 'Saturday', startTime: '5:45pm', endTime: '6:45pm', title: 'Dinner', location: 'Exhibit Hall B' },
    { id: 'sat-17', day: 'Saturday', startTime: '7:00pm', endTime: '9:15pm', title: 'Third General Session', subtitle: '(Recognition)', location: 'Exhibit Hall A' },
    { id: 'sat-18', day: 'Saturday', startTime: '9:45pm', endTime: '11:30pm', title: 'Governor\'s Ball', location: 'Exhibit Hall A' },
    { id: 'sat-19', day: 'Saturday', startTime: '9:45pm', endTime: '11:30pm', title: 'Alternate Activities', subtitle: '(Karaoke, board games, ETC)', location: 'Exhibit Hall B' },
    { id: 'sat-20', day: 'Saturday', startTime: '10:00pm', endTime: '11:30pm', title: 'Advisor\'s Ice Cream Social', location: 'Ballroom C' },
    { id: 'sat-21', day: 'Saturday', startTime: '11:45pm', endTime: '', title: 'Convention Area Curfew', location: '' },
    { id: 'sat-22', day: 'Saturday', startTime: '12:00am', endTime: '', title: 'Hotel Curfew', location: '' },

    // Sunday events
    { id: 'sun-1', day: 'Sunday', startTime: '8:30am', endTime: '9:15am', title: 'Breakfast', location: 'Exhibit Hall B' },
    { id: 'sun-2', day: 'Sunday', startTime: '9:30am', endTime: '11:30am', title: 'Fourth General Session', subtitle: '(Farewell & Board Transition)', location: 'Exhibit Hall A' },
  ];

  // Filter events based on selected day
  const filteredEvents = selectedDay === 'All' 
    ? scheduleData 
    : scheduleData.filter(event => event.day === selectedDay);

  // Group events by day for display
  const fridayEvents = filteredEvents.filter(event => event.day === 'Friday');
  const saturdayEvents = filteredEvents.filter(event => event.day === 'Saturday');
  const sundayEvents = filteredEvents.filter(event => event.day === 'Sunday');

  // Helper function to get a gradient color based on day
  const getGradient = (day: string) => {
    switch(day) {
      case 'Friday':
        return 'from-amber-400 to-amber-600';
      case 'Saturday':
        return 'from-purple-400 to-purple-600';
      case 'Sunday':
        return 'from-blue-400 to-blue-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

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
          
          {/* Title with styling similar to House of Delegates page */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <h1 className="font-tangled text-4xl md:text-7xl lg:text-8xl leading-tight flex items-center justify-center">
                <span className="mr-4 inline-block">
                  <FaCalendarAlt className="text-yellow-300 text-3xl md:text-5xl transform rotate-12 animate-pulse" 
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
                  DCON 2025 Schedule
                </span>
                <span className="ml-4 inline-block">
                  <FaCalendarAlt className="text-yellow-300 text-3xl md:text-5xl transform -rotate-12 animate-pulse" 
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
            A complete overview of all DCON events from April 25-27, 2025
          </p>
        </div>
      </div>
      
      {/* Schedule Content Section */}
      <div className="relative pt-8 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['All', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day as 'All' | 'Friday' | 'Saturday' | 'Sunday')}
                className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
                  selectedDay === day 
                    ? 'bg-amber-300 text-purple-900 shadow-lg' 
                    : 'bg-[#2c1b48] text-white/80 hover:bg-[#3c2a58] hover:text-white'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Calendar View with Cards */}
          <div className="space-y-10">
            {/* Only show sections for the days that are included in the filtered events */}
            {(selectedDay === 'All' || selectedDay === 'Friday') && fridayEvents.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl text-amber-300 font-medium text-center mb-4 font-tangled">
                  Friday, April 25, 2025
                </h2>
                <div className="relative pl-8 border-l-2 border-amber-300/30">
                  {fridayEvents.map((event) => (
                    <div key={event.id} className="mb-8 relative">
                      {/* Time indicator */}
                      <div className="absolute -left-8 flex flex-col items-center">
                        <div className="w-4 h-4 bg-amber-300 rounded-full"></div>
                        <div className="w-0.5 h-full bg-amber-300/30 absolute top-4"></div>
                      </div>
                      
                      {/* Time display */}
                      <div className="text-white/90 font-medium mb-2">
                        {event.startTime}{event.endTime ? ` - ${event.endTime}` : ''}
                      </div>
                      
                      {/* Event card */}
                      <div className={`bg-gradient-to-r ${getGradient('Friday')} rounded-xl p-4 shadow-lg hover:shadow-amber-300/20 transition-shadow duration-300`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-white">{event.title}</h3>
                            {event.subtitle && (
                              <p className="text-white/80 text-sm">{event.subtitle}</p>
                            )}
                          </div>
                          <div className="text-white/80">
                            <FaChevronRight />
                          </div>
                        </div>
                        
                        {event.location && (
                          <div className="mt-3 flex items-center text-white/80 text-sm">
                            <FaMapMarkerAlt className="mr-1" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        
                        {event.presenter && (
                          <div className="mt-1 flex items-center text-white/80 text-sm">
                            <FaUser className="mr-1" />
                            <span>{event.presenter}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(selectedDay === 'All' || selectedDay === 'Saturday') && saturdayEvents.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl text-amber-300 font-medium text-center mb-4 font-tangled">
                  Saturday, April 26, 2025
                </h2>
                <div className="relative pl-8 border-l-2 border-purple-300/30">
                  {saturdayEvents.map((event) => (
                    <div key={event.id} className="mb-8 relative">
                      {/* Time indicator */}
                      <div className="absolute -left-8 flex flex-col items-center">
                        <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-purple-300/30 absolute top-4"></div>
                      </div>
                      
                      {/* Time display */}
                      <div className="text-white/90 font-medium mb-2">
                        {event.startTime}{event.endTime ? ` - ${event.endTime}` : ''}
                      </div>
                      
                      {/* Event card */}
                      <div className={`bg-gradient-to-r ${getGradient('Saturday')} rounded-xl p-4 shadow-lg hover:shadow-purple-300/20 transition-shadow duration-300`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-white">{event.title}</h3>
                            {event.subtitle && (
                              <p className="text-white/80 text-sm">{event.subtitle}</p>
                            )}
                          </div>
                          <div className="text-white/80">
                            <FaChevronRight />
                          </div>
                        </div>
                        
                        {event.location && (
                          <div className="mt-3 flex items-center text-white/80 text-sm">
                            <FaMapMarkerAlt className="mr-1" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        
                        {event.presenter && (
                          <div className="mt-1 flex items-center text-white/80 text-sm">
                            <FaUser className="mr-1" />
                            <span>{event.presenter}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(selectedDay === 'All' || selectedDay === 'Sunday') && sundayEvents.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl text-amber-300 font-medium text-center mb-4 font-tangled">
                  Sunday, April 27, 2025
                </h2>
                <div className="relative pl-8 border-l-2 border-blue-300/30">
                  {sundayEvents.map((event) => (
                    <div key={event.id} className="mb-8 relative">
                      {/* Time indicator */}
                      <div className="absolute -left-8 flex flex-col items-center">
                        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                        <div className="w-0.5 h-full bg-blue-300/30 absolute top-4"></div>
                      </div>
                      
                      {/* Time display */}
                      <div className="text-white/90 font-medium mb-2">
                        {event.startTime}{event.endTime ? ` - ${event.endTime}` : ''}
                      </div>
                      
                      {/* Event card */}
                      <div className={`bg-gradient-to-r ${getGradient('Sunday')} rounded-xl p-4 shadow-lg hover:shadow-blue-300/20 transition-shadow duration-300`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-white">{event.title}</h3>
                            {event.subtitle && (
                              <p className="text-white/80 text-sm">{event.subtitle}</p>
                            )}
                          </div>
                          <div className="text-white/80">
                            <FaChevronRight />
                          </div>
                        </div>
                        
                        {event.location && (
                          <div className="mt-3 flex items-center text-white/80 text-sm">
                            <FaMapMarkerAlt className="mr-1" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        
                        {event.presenter && (
                          <div className="mt-1 flex items-center text-white/80 text-sm">
                            <FaUser className="mr-1" />
                            <span>{event.presenter}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* End of convention message */}
                {selectedDay === 'Sunday' || selectedDay === 'All' ? (
                  <div className="text-center py-4 bg-pink-200/20 backdrop-blur-sm rounded-lg">
                    <p className="text-lg font-medium text-white">SAFE TRAVELS HOME!</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule; 