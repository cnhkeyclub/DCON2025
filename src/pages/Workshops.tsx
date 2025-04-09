import React, { useState } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaClock, FaChalkboardTeacher, FaArrowUp } from 'react-icons/fa';
import Lanterns from '../components/home/Lanterns';
import PageNatureDecorations from '../components/decorations/PageNatureDecorations';

// Define interfaces for our data structure
interface Session {
  id: number;
  name: string;
  time: string;
  day: string;
  duration: string;
}

interface Workshop {
  id: string;
  title: string;
  presenters: string;
  roomId: string;
  sessionId: number;
}

interface Room {
  id: string;
  name: string;
  capacity: number;
}

const Workshops: React.FC = () => {
  // State for mobile view filter
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  
  // State for scroll to top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Monitor scrolling to show/hide the scroll button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Session data
  const sessions: Session[] = [
    { id: 1, name: "Session 1", time: "5:30 pm - 6:10 pm", day: "Friday", duration: "40 min" },
    { id: 2, name: "Session 2", time: "6:20 pm - 7:00 pm", day: "Friday", duration: "40 min" },
    { id: 3, name: "Session 3", time: "8:00 am - 8:40 am", day: "Saturday", duration: "40 min" },
    { id: 4, name: "Session 4", time: "8:50 am - 9:30 am", day: "Saturday", duration: "40 min" },
    { id: 5, name: "Session 5", time: "9:40 am - 10:20 am", day: "Saturday", duration: "40 min" },
    { id: 6, name: "Session 6", time: "10:30 am - 11:20 am", day: "Saturday", duration: "50 min" },
    { id: 7, name: "Session 7", time: "11:30 am - 12:20 pm", day: "Saturday", duration: "50 min" },
    { id: 8, name: "Session 8", time: "3:45 pm - 4:45 pm", day: "Saturday", duration: "60 min" },
  ];

  // Room data
  const rooms: Room[] = [
    { id: "ballroomA", name: "Ballroom A", capacity: 272 },
    { id: "ballroomB", name: "Ballroom B", capacity: 272 },
    { id: "ballroomC", name: "Ballroom C", capacity: 408 },
    { id: "room104", name: "Room 104 A/B", capacity: 162 },
    { id: "room200", name: "Room 200 A/B/C", capacity: 132 },
    { id: "room203", name: "Room 203 A/B/C", capacity: 154 },
    { id: "room204", name: "Room 204", capacity: 98 },
    { id: "room100", name: "Room 100 A/B", capacity: 90 },
  ];

  // Workshop data (populated based on the tabular data provided)
  const workshops: Workshop[] = [
    // Ballroom A workshops
    { id: "ba-s1", title: "Keshi 101", presenters: "Devin Le, Lukas Minkevich, Kyle Nguyen", roomId: "ballroomA", sessionId: 1 },
    { id: "ba-s2", title: "Key-nnecting", presenters: "Alina Giang, Jay Giang, Alen Moshkan", roomId: "ballroomA", sessionId: 2 },
    { id: "ba-s3", title: "The Ultimate Key Club Memes, Games and Icebreakers", presenters: "Martmariam Mikhail, Raymond Yan", roomId: "ballroomA", sessionId: 3 },
    { id: "ba-s4", title: "How to be an Academic Weapon Using Time Management", presenters: "Martmariam Mikhail", roomId: "ballroomA", sessionId: 4 },
    { id: "ba-s5", title: "How to End the Global Water Crisis with Thirst Project", presenters: "Andrew Reese", roomId: "ballroomA", sessionId: 5 },
    { id: "ba-s6", title: "How to Boss Up Your Social Game", presenters: "Chelsie Baham", roomId: "ballroomA", sessionId: 6 },
    { id: "ba-s8", title: "EXPO SECTIONS", presenters: "", roomId: "ballroomA", sessionId: 8 },
    
    // Ballroom B workshops
    { id: "bb-s1", title: "International Updates", presenters: "Ariana Lee", roomId: "ballroomB", sessionId: 1 },
    { id: "bb-s2", title: "Clawing Your Way to Service", presenters: "Jackie Wei, Natalie Do, Rico Tan Chen, Joey Choi", roomId: "ballroomB", sessionId: 2 },
    { id: "bb-s3", title: "Helping Advisors to Understand the MRF", presenters: "Charlene Masuhara, Marshall Roberson", roomId: "ballroomB", sessionId: 3 },
    { id: "bb-s4", title: "Key Advisor 101", presenters: "Elsie Nash", roomId: "ballroomB", sessionId: 4 },
    { id: "bb-s5", title: "Money Matters", presenters: "Elsie Nash", roomId: "ballroomB", sessionId: 5 },
    { id: "bb-s6", title: "Youth Protection Guidelines", presenters: "Lon Salgren", roomId: "ballroomB", sessionId: 6 },
    { id: "bb-s7", title: "Meet the CNH Key Club Kiwanis Leadership Team", presenters: "CNH Key Club Kiwanis Leadership Team", roomId: "ballroomB", sessionId: 7 },
    { id: "bb-s8", title: "EXPO SECTIONS", presenters: "", roomId: "ballroomB", sessionId: 8 },
    
    // Ballroom C workshops
    { id: "bc-s1", title: "Unicef Workshop: U (Yes, YOU) Can Change the World", presenters: "Shamak Gowda", roomId: "ballroomC", sessionId: 1 },
    { id: "bc-s2", title: "How to be GOATED!", presenters: "Sienna Villalobos, Joannah Silvestre", roomId: "ballroomC", sessionId: 2 },
    { id: "bc-s3", title: "Key Advisor 201: Navigating Advisor Stress, Burn Out and Resiliency", presenters: "Kathy Kendrick", roomId: "ballroomC", sessionId: 3 },
    { id: "bc-s4", title: "Making KEY-nnections", presenters: "Nadine Aquino, Abril Lizarraga", roomId: "ballroomC", sessionId: 4 },
    { id: "bc-s8", title: "EXPO SECTIONS", presenters: "", roomId: "ballroomC", sessionId: 8 },
    
    // Room 104 A/B workshops
    { id: "r104-s1", title: "How to Pivot", presenters: "Sunyodh Sandhu", roomId: "room104", sessionId: 1 },
    { id: "r104-s2", title: "Leadership Team Q&A", presenters: "", roomId: "room104", sessionId: 2 },
    { id: "r104-s3", title: "Effective Communication Strategies!", presenters: "Jacob Gutierrez, Janelle Vargas", roomId: "room104", sessionId: 3 },
    { id: "r104-s4", title: "Effective Communication Strategies!", presenters: "Jacob Gutierrez, Janelle Vargas", roomId: "room104", sessionId: 4 },
    { id: "r104-s8", title: "Presidents & Vice Presidents", presenters: "Austin Alves", roomId: "room104", sessionId: 8 },
    
    // Room 200 A/B/C workshops
    { id: "r200-s1", title: "How to be Safe-KEY and What to Do in Sticky Situations (Slime-Making)", presenters: "Bryan Nguyen, Sean Patrick Lee, Oralee Tran", roomId: "room200", sessionId: 1 },
    { id: "r200-s2", title: "Taste the Rainbow!", presenters: "Aliyah Soto, Angel Cui, Bianca Dong, Katelyn Vo", roomId: "room200", sessionId: 2 },
    { id: "r200-s3", title: "Editors", presenters: "Isabelle Schinzing, Cassie Nguyen, Nia Danelia, Faith del Rio", roomId: "room200", sessionId: 3 },
    { id: "r200-s4", title: "Graphic Standards", presenters: "Isabelle Schinzing, Cassie Nguyen, Nia Danelia, Faith del Rio", roomId: "room200", sessionId: 4 },
    { id: "r200-s8", title: "Secretaries", presenters: "Tak Nishida", roomId: "room200", sessionId: 8 },
    
    // Room 203 A/B/C workshops
    { id: "r203-s1", title: "Service Projects", presenters: "Alice Sar", roomId: "room203", sessionId: 1 },
    { id: "r203-s2", title: "Buzzing with a Purpose: How to Lead with Intention", presenters: "Ashley Wang, Alyson Tan", roomId: "room203", sessionId: 2 },
    { id: "r203-s3", title: "How to Not Crash Out", presenters: "Katie Ha, Andre Nguyen", roomId: "room203", sessionId: 3 },
    { id: "r203-s8", title: "Treasurers", presenters: "Elizabeth Gilmore", roomId: "room203", sessionId: 8 },
    
    // Room 204 workshops
    { id: "r204-s1", title: "Serving CNH: A Guide to BEEing a BadBEE", presenters: "Isabella Cardenas, Kaori Delacruz", roomId: "room204", sessionId: 1 },
    { id: "r204-s2", title: "The BEE-auty of Cybertruck", presenters: "Jacklyn Song, Max Robinson, Vance Grimes", roomId: "room204", sessionId: 2 },
    { id: "r204-s3", title: "Growing Take-Aways from Key Club", presenters: "Emma Richards", roomId: "room204", sessionId: 3 },
    { id: "r204-s8", title: "How to Grow Club Memberhip to 200+ Dues-Paid Members", presenters: "Emily Lin, Aye Kyaw, Elizabeth Nguyen", roomId: "room204", sessionId: 8 },
    
    // Room 100 A/B workshops - UPDATED with only two workshops
    { id: "r100-s1", title: "Presidents Setting Precedents", presenters: "Brad Hager, Claire Liao", roomId: "room100", sessionId: 1 },
    { id: "r100-s2", title: "Overcoming Procrastination", presenters: "Emily Chhuon, Vincent Tiet", roomId: "room100", sessionId: 2 },
  ];

  // Filter workshops based on selected session and room for mobile view
  const getFilteredWorkshops = () => {
    let filtered = [...workshops];
    
    if (selectedSession !== null) {
      filtered = filtered.filter(workshop => workshop.sessionId === selectedSession);
    }
    
    if (selectedRoom !== null) {
      filtered = filtered.filter(workshop => workshop.roomId === selectedRoom);
    }
    
    return filtered;
  };

  // Get session details by ID
  const getSessionDetails = (sessionId: number): Session | undefined => {
    return sessions.find(s => s.id === sessionId);
  };
  
  // Helper to get cell background color based on session
  const getCellBgColor = (sessionId: number) => {
    const session = getSessionDetails(sessionId);
    if (!session) return "bg-purple-900/20";
    
    if (session.day === "Friday") {
      return "bg-amber-900/30 hover:bg-amber-800/40";
    } else {
      // Different gradients for different session durations on Saturday
      if (session.duration === "40 min") {
        return "bg-purple-900/30 hover:bg-purple-800/40";
      } else if (session.duration === "50 min") {
        return "bg-indigo-900/30 hover:bg-indigo-800/40";
      } else {
        return "bg-blue-900/30 hover:bg-blue-800/40";
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241435] via-[#30194a] to-[#3d2160]">
      {/* Add nature decorations */}
      <PageNatureDecorations theme="purple" density="dense" />
      
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: keyframesStyles }} />
      
      {/* Enhanced Header Banner with lantern styling */}
      <div className="relative min-h-[40vh] pt-16 overflow-hidden">
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
          <Lanterns count={10} className="opacity-90" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 pt-12 pb-8 text-center relative z-10">
          <div className="mb-4">
            <h4 className="text-base md:text-xl text-amber-200 font-light mb-2">
              California-Nevada-Hawai'i Key Club
            </h4>
          </div>
          
          {/* Title */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <h1 className="font-tangled text-4xl md:text-6xl lg:text-7xl leading-tight flex items-center justify-center">
                <span className="mr-4 inline-block">
                  <FaGraduationCap className="text-yellow-300 text-3xl md:text-5xl transform rotate-12 animate-pulse" 
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
                  Workshop Sessions
                </span>
                <span className="ml-4 inline-block">
                  <FaChalkboardTeacher className="text-yellow-300 text-3xl md:text-5xl transform -rotate-12 animate-pulse" 
                    style={{filter: "drop-shadow(0 0 10px rgba(255, 200, 0, 0.6))"}} 
                  />
                </span>
              </h1>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            </div>
          </div>
          
          <p className="text-amber-200 text-sm md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed" style={{
            background: "linear-gradient(to bottom, #FFD54F 0%, #FFB74D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3))"
          }}>
            Find your perfect workshops at DCON 2025
          </p>
        </div>
      </div>
      
      {/* Workshop Schedule Content - Desktop Version (hidden on mobile) */}
      <div className="relative py-8 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto bg-[#1F0F33]/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl text-amber-300 font-medium font-tangled mb-6 text-center">Workshop Schedule</h2>
          
          {/* Workshop Table - Desktop View */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-amber-400/30">
                  <th className="py-3 px-2 text-left text-amber-300 font-medium">Location (Capacity)</th>
                  {sessions.map(session => (
                    <th key={session.id} className="py-3 px-2 text-center text-amber-300 font-medium">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{session.name}</span>
                        <span className="text-xs text-amber-200/80">{session.day}</span>
                        <span className="text-xs text-amber-200/80">{session.time}</span>
                        <span className="text-xs text-purple-300/80">{session.duration}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rooms.map(room => (
                  <tr key={room.id} className="border-b border-purple-900/30 hover:bg-purple-900/10">
                    <td className="py-3 px-2 text-white font-medium">
                      <div className="flex flex-col">
                        <span>{room.name}</span>
                        <span className="text-xs text-purple-300/80">Capacity: {room.capacity}</span>
                      </div>
                    </td>
                    
                    {sessions.map(session => {
                      const workshop = workshops.find(w => w.roomId === room.id && w.sessionId === session.id);
                      return (
                        <td key={`${room.id}-${session.id}`} className={`py-2 px-3 text-white text-sm ${workshop ? getCellBgColor(session.id) : 'bg-transparent'}`}>
                          {workshop && (
                            <div className="flex flex-col">
                              <span className="font-medium">{workshop.title}</span>
                              {workshop.presenters && (
                                <span className="text-xs text-purple-200/80 mt-1">
                                  {workshop.presenters}
                                </span>
                              )}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Workshop Schedule Content - Mobile Version (hidden on desktop) */}
      <div className="relative py-8 px-4 md:hidden">
        <div className="max-w-lg mx-auto">
          <div className="mb-6 bg-[#1F0F33]/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-4 shadow-lg">
            <h2 className="text-xl text-amber-300 font-medium font-tangled mb-4 text-center">Workshop Filters</h2>
            
            {/* Filter controls */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-white text-sm mb-1 block">Filter by Session:</label>
                <select 
                  className="w-full bg-purple-900/50 text-white border border-purple-600 rounded-lg p-2 text-sm"
                  value={selectedSession === null ? "" : selectedSession}
                  onChange={(e) => setSelectedSession(e.target.value ? parseInt(e.target.value) : null)}
                >
                  <option value="">All Sessions</option>
                  {sessions.map(session => (
                    <option key={session.id} value={session.id}>
                      {session.name} - {session.day} {session.time}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="text-white text-sm mb-1 block">Filter by Room:</label>
                <select 
                  className="w-full bg-purple-900/50 text-white border border-purple-600 rounded-lg p-2 text-sm"
                  value={selectedRoom || ""}
                  onChange={(e) => setSelectedRoom(e.target.value || null)}
                >
                  <option value="">All Rooms</option>
                  {rooms.map(room => (
                    <option key={room.id} value={room.id}>
                      {room.name} (Capacity: {room.capacity})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Workshop cards */}
          <div className="space-y-4">
            {getFilteredWorkshops().length > 0 ? (
              getFilteredWorkshops().map(workshop => {
                const room = rooms.find(r => r.id === workshop.roomId);
                const session = sessions.find(s => s.id === workshop.sessionId);
                
                return (
                  <div 
                    key={workshop.id} 
                    className={`bg-[#1F0F33]/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-4 shadow-lg ${getCellBgColor(workshop.sessionId)}`}
                  >
                    <h3 className="text-white font-medium text-lg">{workshop.title}</h3>
                    
                    <div className="mt-3">
                      {workshop.presenters && (
                        <div className="flex items-start gap-2 text-sm text-purple-200/90 mb-2">
                          <FaChalkboardTeacher className="mt-1 flex-shrink-0" />
                          <span>{workshop.presenters}</span>
                        </div>
                      )}
                      
                      {room && (
                        <div className="flex items-start gap-2 text-sm text-amber-200/90 mb-2">
                          <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                          <span>{room.name} (Capacity: {room.capacity})</span>
                        </div>
                      )}
                      
                      {session && (
                        <div className="flex items-start gap-2 text-sm text-green-200/90">
                          <FaClock className="mt-1 flex-shrink-0" />
                          <span>
                            {session.name} - {session.day} {session.time}
                            <span className="block text-xs text-purple-300/90">({session.duration})</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="bg-[#1F0F33]/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg text-center text-white">
                <p>No workshops found with the selected filters.</p>
                <button 
                  className="mt-3 px-4 py-2 bg-purple-700 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors"
                  onClick={() => {
                    setSelectedRoom(null);
                    setSelectedSession(null);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Legend & Notes Section */}
      <div className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto bg-[#1F0F33]/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg mb-12">
          <h2 className="text-xl text-amber-300 font-medium font-tangled mb-4">Session Times</h2>
          <ul className="space-y-2 text-white">
            {sessions.map(session => (
              <li key={session.id} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${session.day === 'Friday' ? 'bg-amber-500' : session.duration === '40 min' ? 'bg-purple-500' : session.duration === '50 min' ? 'bg-indigo-500' : 'bg-blue-500'}`}></div>
                <span className="text-sm">
                  <strong>{session.name}:</strong> {session.day} {session.time} ({session.duration})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500/80 hover:bg-amber-500 text-white p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Workshops; 