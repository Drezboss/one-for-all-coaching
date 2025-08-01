import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Home, TreePine, Droplets, Scissors, Sparkles } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const gardenServices = [
    { icon: <Scissors className="h-8 w-8" />, name: "Lawn Mowing", description: "Regular lawn cutting and edging services" },
    { icon: <TreePine className="h-8 w-8" />, name: "Tree & Shrub Care", description: "Pruning, trimming, and shaping of trees and bushes" },
    { icon: <Leaf className="h-8 w-8" />, name: "Garden Design", description: "Complete landscape design and implementation" },
    { icon: <Droplets className="h-8 w-8" />, name: "Irrigation", description: "Sprinkler system installation and maintenance" },
  ];

  const cleaningServices = [
    { icon: <Sparkles className="h-8 w-8" />, name: "Regular Cleaning", description: "Weekly or bi-weekly house cleaning services" },
    { icon: <Home className="h-8 w-8" />, name: "Deep Cleaning", description: "Thorough seasonal cleaning of your entire home" },
    { icon: <CheckCircle className="h-8 w-8" />, name: "Move-in/Move-out", description: "Complete cleaning for property transitions" },
    { icon: <Sparkles className="h-8 w-8" />, name: "Office Cleaning", description: "Professional cleaning for business spaces" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        {/* Garden Maintenance Section */}
        <section className="mb-16">
          <div className="bg-green-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-800">Garden Maintenance</h2>
                <p className="text-gray-700 mb-6">
                  Transform your outdoor space into a beautiful oasis with our comprehensive garden maintenance services. 
                  Our experienced team uses eco-friendly practices and professional equipment to keep your garden 
                  looking its best year-round.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {gardenServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-green-600 mt-1">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-green-800">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pricing:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Basic lawn service: From $50/visit</li>
                    <li>• Full garden maintenance: From $150/month</li>
                    <li>• Custom quotes available for large properties</li>
                  </ul>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <img 
                  src={require('../assets/images/garden-maintenance.svg')} 
                  alt="Garden Maintenance" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Home Cleaning Section */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-last lg:order-first">
                <img 
                  src={require('../assets/images/home-cleaning.svg')} 
                  alt="Home Cleaning" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-800">Home Cleaning</h2>
                <p className="text-gray-700 mb-6">
                  Enjoy a spotless home without lifting a finger. Our professional cleaning team uses 
                  high-quality, eco-friendly products and proven techniques to ensure every corner of 
                  your home sparkles. We're thorough, reliable, and respectful of your space.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {cleaningServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-blue-600 mt-1">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pricing:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Regular cleaning: From $80/visit</li>
                    <li>• Deep cleaning: From $200</li>
                    <li>• Customized packages available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
          <p className="text-xl mb-8">Schedule your service today and experience the difference</p>
          <Link 
            to="/bookings" 
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Book Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;