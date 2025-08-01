import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Sparkles, 
  Scissors, 
  Droplets, 
  Home, 
  Vacuum, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Calendar
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const gardenServices = [
    {
      icon: <Scissors className="h-6 w-6" />,
      name: 'Lawn Mowing & Edging',
      description: 'Regular grass cutting, edging, and cleanup to keep your lawn neat and healthy.'
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      name: 'Pruning & Trimming',
      description: 'Professional tree and shrub care to promote healthy growth and beautiful shapes.'
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      name: 'Garden Maintenance',
      description: 'Weeding, planting, mulching, and seasonal garden care services.'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      name: 'Seasonal Cleanup',
      description: 'Spring and fall cleanup, leaf removal, and garden preparation services.'
    }
  ];

  const cleaningServices = [
    {
      icon: <Home className="h-6 w-6" />,
      name: 'Regular House Cleaning',
      description: 'Weekly, bi-weekly, or monthly cleaning to maintain your home\'s cleanliness.'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      name: 'Deep Cleaning',
      description: 'Thorough, detailed cleaning including areas often missed in regular cleaning.'
    },
    {
      icon: <Vacuum className="h-6 w-6" />,
      name: 'Move-in/Move-out',
      description: 'Complete cleaning for property transitions, ensuring everything is spotless.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      name: 'One-time Cleaning',
      description: 'Perfect for special occasions, parties, or when you need extra help.'
    }
  ];

  const pricingPlans = [
    {
      type: 'Basic Garden Care',
      price: '$80',
      period: 'per visit',
      features: [
        'Lawn mowing and edging',
        'Basic weeding',
        'Debris removal',
        'Up to 2 hours service'
      ],
      popular: false
    },
    {
      type: 'Complete Garden Maintenance',
      price: '$150',
      period: 'per visit',
      features: [
        'All basic services',
        'Pruning and trimming',
        'Fertilizing',
        'Seasonal planting',
        'Up to 4 hours service'
      ],
      popular: true
    },
    {
      type: 'Home Cleaning',
      price: '$120',
      period: 'per visit',
      features: [
        'All rooms cleaned',
        'Kitchen and bathrooms',
        'Vacuuming and mopping',
        'Dusting and wiping',
        '3-4 hours service'
      ],
      popular: false
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive gardening and home cleaning services to keep your 
              property beautiful, clean, and well-maintained year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Garden Maintenance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Leaf className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Garden Maintenance
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Transform your outdoor space into a beautiful, thriving garden with our 
                professional maintenance services. Our experienced team handles everything 
                from basic lawn care to comprehensive landscape maintenance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {gardenServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-100 rounded-lg flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary text-center">
                  Book Garden Service
                </Link>
                <Link to="/contact" className="btn-outline text-center">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-primary-800">
                  <Leaf className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Beautiful Garden</p>
                  <p className="text-sm">Professional Maintenance</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  <span className="font-medium text-gray-900">Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Cleaning Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-secondary-800">
                  <Sparkles className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Spotless Home</p>
                  <p className="text-sm">Professional Cleaning</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-secondary-600" />
                  <span className="font-medium text-gray-900">Flexible Scheduling</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary-100 rounded-lg">
                  <Sparkles className="h-8 w-8 text-secondary-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Home Cleaning
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Keep your home spotless and fresh with our professional cleaning services. 
                We use eco-friendly products and thorough techniques to ensure every corner 
                of your home shines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cleaningServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-secondary-100 rounded-lg flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-secondary text-center">
                  Book Cleaning Service
                </Link>
                <Link to="/contact" className="btn-outline text-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Service Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, competitive pricing for all our services. Contact us for custom packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`card h-full ${plan.popular ? 'border-2 border-primary-600' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.type}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary-600">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/booking" 
                    className={`w-full text-center block ${
                      plan.popular ? 'btn-primary' : 'btn-outline'
                    }`}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and personalized service quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Get Free Quote
            </Link>
            <Link to="/booking" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;