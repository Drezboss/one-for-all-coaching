import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Sparkles, Phone, Star, Users, Award, Clock, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-primary-600" />,
      title: 'Professional Garden Care',
      description: 'Expert lawn maintenance, pruning, and landscape design to keep your garden beautiful year-round.'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-secondary-600" />,
      title: 'Deep Home Cleaning',
      description: 'Thorough cleaning services including regular maintenance and one-time deep cleans for your home.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Experienced Team',
      description: 'Our trained professionals bring years of experience and attention to detail to every job.'
    },
    {
      icon: <Award className="h-8 w-8 text-secondary-600" />,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with a satisfaction guarantee on all our services.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'GreenClean transformed our garden! Professional, reliable, and the results speak for themselves.'
    },
    {
      name: 'Mike Chen',
      rating: 5,
      comment: 'Their cleaning service is exceptional. My house has never looked better. Highly recommend!'
    },
    {
      name: 'Emma Davis',
      rating: 5,
      comment: 'Friendly team, great communication, and always on time. Couldn\'t be happier with their service.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Home & Garden 
                  <span className="text-primary-600"> Deserve</span>
                  <span className="text-secondary-600"> The Best</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional gardening and cleaning services that bring beauty and cleanliness to your doorstep. 
                  Let us take care of your home while you enjoy life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary text-center">
                  Book Service Now
                </Link>
                <Link to="/services" className="btn-outline text-center">
                  View Our Services
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">4.9/5 (200+ reviews)</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Why Choose GreenClean?</h3>
                <div className="space-y-4">
                  {['Licensed & Insured', 'Eco-Friendly Products', 'Flexible Scheduling', 'Satisfaction Guaranteed'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Get Free Quote
                </Link>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-20 w-20 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-secondary-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From garden maintenance to home cleaning, we provide comprehensive services 
              to keep your property looking its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="text-sm font-semibold text-gray-900">
                  - {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get started today with a free consultation and see why hundreds of customers trust GreenClean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Service
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;