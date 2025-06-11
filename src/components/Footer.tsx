import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">Brewscape</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your neighborhood coffee shop where every cup tells a story and every visit feels like home.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-300 hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Catering</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Dine-in</span></li>
              <li><span className="text-gray-300">Takeout</span></li>
              <li><span className="text-gray-300">Delivery</span></li>
              <li><span className="text-gray-300">Private Events</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest offers and new arrivals.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-amber-400"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Brewscape. All rights reserved. Made with ❤️ and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;