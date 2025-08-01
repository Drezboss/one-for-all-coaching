import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf, Home } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Leaf className="h-6 w-6" />
            <span>Green & Clean Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-green-200 transition-colors">Services</Link>
            <Link to="/team" className="hover:text-green-200 transition-colors">Meet the Team</Link>
            <Link to="/contact" className="hover:text-green-200 transition-colors">Contact</Link>
            <Link to="/bookings" className="hover:text-green-200 transition-colors">Book Now</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-green-700 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/team" 
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Meet the Team
              </Link>
              <Link 
                to="/contact" 
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/bookings" 
                className="block py-2 px-4 hover:bg-green-700 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;