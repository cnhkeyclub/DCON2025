import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-slate-900 py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white mb-4 md:mb-0 hover:text-amber-300 transition-colors">
          CNHD Conference 2025
        </Link>
        <nav>
          <ul className="flex flex-wrap space-x-4 md:space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-amber-300 transition-colors flex items-center gap-1">
                <FaHome className="inline" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/house-of-delegates" className="text-white hover:text-amber-300 transition-colors flex items-center gap-1">
                <FaUsers className="inline" />
                <span>Delegates</span>
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="text-white hover:text-amber-300 transition-colors flex items-center gap-1">
                <FaCalendarAlt className="inline" />
                <span>Schedule</span>
              </Link>
            </li>
            <li>
              <Link to="/map" className="text-white hover:text-amber-300 transition-colors flex items-center gap-1">
                <FaMapMarkedAlt className="inline" />
                <span>Map</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 