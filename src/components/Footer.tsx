import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CNHD Conference 2025</h3>
            <p className="text-slate-300 mb-4">Bringing together the best minds in healthcare innovation.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-slate-300 mb-2 flex items-center gap-2">
              <FaEnvelope /> 
              <span>info@cnhdcon2025.com</span>
            </p>
            <p className="text-slate-300 flex items-center gap-2">
              <FaPhone />
              <span>(123) 456-7890</span>
            </p>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} CNHD Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 