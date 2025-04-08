import { FaHome, FaInfoCircle, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-slate-900 py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">CNHD Conference 2025</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-white hover:text-indigo-300 transition-colors flex items-center gap-1">
                <FaHome className="inline" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-indigo-300 transition-colors flex items-center gap-1">
                <FaInfoCircle className="inline" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-indigo-300 transition-colors flex items-center gap-1">
                <FaCalendarAlt className="inline" />
                <span>Schedule</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-indigo-300 transition-colors flex items-center gap-1">
                <FaEnvelope className="inline" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 