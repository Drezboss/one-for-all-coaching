import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Users,
  Calendar
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  message: string;
  urgency: string;
}

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '(555) 123-4567',
      subtitle: 'Call us anytime'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'info@greenclean.com',
      subtitle: 'Send us a message'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: '123 Garden Street, Green City, GC 12345',
      subtitle: 'Visit our office'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: 'Mon-Sat: 8AM-6PM',
      subtitle: 'Sunday: Closed'
    }
  ];

  const businessHours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your home and garden? Contact us today for a free consultation 
              and personalized service quote. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone and Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className={`input-field ${errors.service ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select a service</option>
                      <option value="garden-maintenance">Garden Maintenance</option>
                      <option value="home-cleaning">Home Cleaning</option>
                      <option value="both">Both Services</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Property Type and Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      {...register('propertyType')}
                      className={`input-field ${errors.propertyType ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential Home</option>
                      <option value="apartment">Apartment/Condo</option>
                      <option value="commercial">Commercial Property</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.propertyType && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.propertyType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                      Urgency Level *
                    </label>
                    <select
                      id="urgency"
                      {...register('urgency')}
                      className={`input-field ${errors.urgency ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select urgency</option>
                      <option value="asap">ASAP (Within 24 hours)</option>
                      <option value="this-week">This Week</option>
                      <option value="flexible">Flexible Timing</option>
                      <option value="quote-only">Quote Only</option>
                    </select>
                    {errors.urgency && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.urgency.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell us about your specific needs, property size, preferred schedule, or any special requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with us through any of these channels. We're here to help!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-500">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary-600 mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-gray-700 font-medium">
                        {schedule.day}
                      </span>
                      <span className={`text-sm ${schedule.hours === 'Closed' ? 'text-red-600' : 'text-gray-600'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-800">
                    <strong>Emergency Services:</strong> Available 24/7 for urgent cleaning and garden emergencies.
                  </p>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Immediate Help?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Phone className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">Call Now: (555) 123-4567</span>
                  </a>
                  <a
                    href="mailto:info@greenclean.com"
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Mail className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">Email: info@greenclean.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                How quickly can you respond to service requests?
              </h3>
              <p className="text-gray-600">
                We typically respond to new requests within 2-4 hours during business hours. 
                For urgent needs, we offer same-day or next-day service availability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you provide free estimates?
              </h3>
              <p className="text-gray-600">
                Yes! We provide free, no-obligation quotes for all our services. 
                We can often provide estimates over the phone or via email for standard services.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Are you licensed and insured?
              </h3>
              <p className="text-gray-600">
                Absolutely. We are fully licensed and carry comprehensive liability insurance 
                to protect both our team and your property.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;