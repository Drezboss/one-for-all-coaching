import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@greenandclean.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Main St, Your City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-green-400 transition-colors">Our Services</a></li>
              <li><a href="/team" className="hover:text-green-400 transition-colors">Meet the Team</a></li>
              <li><a href="/bookings" className="hover:text-green-400 transition-colors">Book a Service</a></li>
              <li><a href="/contact" className="hover:text-green-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Green & Clean Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;