import { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-gray-900">Brewscape</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-amber-600 transition-colors">Home</a>
              <a href="#menu" className="text-gray-900 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="text-gray-900 hover:text-amber-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-900 hover:text-amber-600 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-amber-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Home</a>
            <a href="#menu" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Menu</a>
            <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-amber-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;