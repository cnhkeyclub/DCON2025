import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CNHD Conference 2025</h3>
            <p className="text-slate-300 mb-4">California-Nevada-Hawai'i District Key Club Convention</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/cnhkeyclub" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.facebook.com/cnhkeyclub" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/cnhkeyclub" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/house-of-delegates" className="text-slate-300 hover:text-white transition-colors">House of Delegates</Link></li>
              <li><Link to="/schedule" className="text-slate-300 hover:text-white transition-colors">Schedule</Link></li>
              <li><Link to="/map" className="text-slate-300 hover:text-white transition-colors">Map</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-slate-300 mb-2 flex items-center gap-2">
              <FaEnvelope /> 
              <span>info@cnhkeyclub.org</span>
            </p>
            <p className="text-slate-300 flex items-center gap-2">
              <FaPhone />
              <span>(909) 989-1500</span>
            </p>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} CNH Key Club DCON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 