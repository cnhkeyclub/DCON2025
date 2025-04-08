import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241435] via-[#30194a] to-[#3d2160] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-amber-300/20 shadow-xl">
        <FaExclamationTriangle className="text-amber-300 text-6xl mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-tangled text-white mb-4">404 - Page Not Found</h1>
        
        <p className="text-amber-200 text-lg mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        
        <div className="flex flex-col items-center space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-amber-400/80 hover:bg-amber-500/80 text-purple-900 font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FaHome className="mr-2" />
            Return to Home Page
          </Link>
          
          <div className="flex space-x-4 mt-4">
            <Link to="/house-of-delegates" className="text-amber-300 hover:text-amber-100 transition-colors">
              House of Delegates
            </Link>
            <Link to="/schedule" className="text-amber-300 hover:text-amber-100 transition-colors">
              Schedule
            </Link>
            <Link to="/map" className="text-amber-300 hover:text-amber-100 transition-colors">
              Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 