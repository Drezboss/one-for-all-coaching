import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Clock, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Professional Gardening & Cleaning Services
            </h1>
            <p className="text-xl mb-8">
              Transform your space with our expert garden maintenance and home cleaning solutions
            </p>
            <div className="space-x-4">
              <Link 
                to="/services" 
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                View Services
              </Link>
              <Link 
                to="/bookings" 
                className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-600">Professional and thorough service every time</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced and friendly professionals</p>
            </div>
            <div className="text-center">
              <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">On-Time Service</h3>
              <p className="text-gray-600">Punctual and reliable scheduling</p>
            </div>
            <div className="text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Complete peace of mind with full coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src={require('../assets/images/garden-maintenance.svg')} 
                alt="Garden Maintenance" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Garden Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Professional lawn care, pruning, planting, and landscaping services
                </p>
                <Link 
                  to="/services" 
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src={require('../assets/images/home-cleaning.svg')} 
                alt="Home Cleaning" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Home Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Thorough house cleaning, deep cleaning, and regular maintenance
                </p>
                <Link 
                  to="/services" 
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Book your service today and enjoy a cleaner, greener space</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;