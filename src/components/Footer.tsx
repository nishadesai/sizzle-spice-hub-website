import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>+49 173 9494497</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@sizzlespicehub.de</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Tannenfleckstraße 16, 82194 Gröbenzell</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-gray-300">Products</Link></li> {/* Use Link component */}
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li> {/* Use Link component */}
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li> {/* Use Link component */}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Sizzle Spice Hub. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-300">
                Data Privacy
              </Link>
              <Link to="/impressum" className="text-gray-400 hover:text-gray-300">
                Imprint
              </Link>
            </div>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
