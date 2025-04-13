
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gelato-black text-white pt-16 pb-8">
      <div className="gelato-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="font-playfair text-2xl mb-6">Gelato Gallery</h3>
            <p className="text-gray-400 mb-6">
              Artisanal gelato that merges tradition with innovation and pop culture.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gelato-pink transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" className="hover:text-gelato-pink transition-colors">
                <Facebook size={22} />
              </a>
              <a href="#" className="hover:text-gelato-pink transition-colors">
                <Twitter size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#flavors" className="text-gray-400 hover:text-white transition-colors">Flavors</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#lab" className="text-gray-400 hover:text-white transition-colors">The Lab</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Main: Via Montenapoleone, 24, Milan</li>
              <li>Phone: +39 02 1234 5678</li>
              <li>Email: hello@gelatogallery.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Monday - Thursday: 11:00 - 22:00</li>
              <li>Friday - Saturday: 10:00 - 23:00</li>
              <li>Sunday: 10:00 - 22:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gelato Gallery. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <div className="flex items-center gap-2">
              <span>Language:</span>
              <select className="bg-transparent border-none focus:outline-none cursor-pointer">
                <option value="en">EN</option>
                <option value="it">IT</option>
                <option value="es">ES</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
