import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  Leaf,
  Sparkles
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  timeSlot: string;
  frequency: string;
  specialRequests?: string;
}

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormData>();

  const watchedService = watch('service');

  const services = [
    {
      id: 'garden-basic',
      name: 'Basic Garden Care',
      price: 80,
      duration: '2 hours',
      description: 'Lawn mowing, edging, basic weeding, debris removal',
      icon: <Leaf className="h-6 w-6 text-primary-600" />
    },
    {
      id: 'garden-complete',
      name: 'Complete Garden Maintenance',
      price: 150,
      duration: '4 hours',
      description: 'All basic services plus pruning, fertilizing, seasonal planting',
      icon: <Leaf className="h-6 w-6 text-primary-600" />
    },
    {
      id: 'home-regular',
      name: 'Regular Home Cleaning',
      price: 120,
      duration: '3-4 hours',
      description: 'All rooms, kitchen, bathrooms, vacuuming, mopping, dusting',
      icon: <Sparkles className="h-6 w-6 text-secondary-600" />
    },
    {
      id: 'home-deep',
      name: 'Deep Home Cleaning',
      price: 200,
      duration: '5-6 hours',
      description: 'Thorough cleaning including areas often missed in regular cleaning',
      icon: <Sparkles className="h-6 w-6 text-secondary-600" />
    }
  ];

  const timeSlots = [
    { value: '08:00', label: '8:00 AM - 10:00 AM' },
    { value: '10:00', label: '10:00 AM - 12:00 PM' },
    { value: '12:00', label: '12:00 PM - 2:00 PM' },
    { value: '14:00', label: '2:00 PM - 4:00 PM' },
    { value: '16:00', label: '4:00 PM - 6:00 PM' }
  ];

  const frequencyOptions = [
    { value: 'one-time', label: 'One-time service', discount: 0 },
    { value: 'weekly', label: 'Weekly', discount: 10 },
    { value: 'bi-weekly', label: 'Bi-weekly', discount: 5 },
    { value: 'monthly', label: 'Monthly', discount: 0 }
  ];

  // Filter available dates (excluding Sundays and past dates)
  const filterDate = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day !== 0 && date >= today; // Exclude Sundays and past dates
  };

  const getSelectedServiceDetails = () => {
    return services.find(service => service.id === watchedService);
  };

  const calculateTotal = () => {
    const serviceDetails = getSelectedServiceDetails();
    if (!serviceDetails) return 0;
    
    const frequency = watch('frequency');
    const frequencyOption = frequencyOptions.find(opt => opt.value === frequency);
    const discount = frequencyOption?.discount || 0;
    
    const discountAmount = (serviceDetails.price * discount) / 100;
    return serviceDetails.price - discountAmount;
  };

  const onSubmit = async (data: FormData) => {
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const bookingData = {
      ...data,
      date: selectedDate,
      total: calculateTotal()
    };
    
    console.log('Booking submitted:', bookingData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    setSelectedDate(null);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for booking with GreenClean! We've received your request and will contact you within 2 hours to confirm your appointment details.
            </p>
            <div className="bg-primary-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-primary-800">
                <strong>What's Next?</strong><br />
                • You'll receive a confirmation email shortly<br />
                • Our team will call to confirm details<br />
                • We'll send a reminder 24 hours before your service
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary w-full"
            >
              Book Another Service
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Book Your Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your garden maintenance or home cleaning service in just a few simple steps. 
              Choose your preferred date, time, and service package.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Service Selection */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Choose Your Service
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`block cursor-pointer p-4 border-2 rounded-lg transition-all duration-200 ${
                      watchedService === service.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <input
                      type="radio"
                      value={service.id}
                      {...register('service')}
                      className="sr-only"
                    />
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {service.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {service.name}
                          </h3>
                          <span className="text-lg font-bold text-primary-600">
                            ${service.price}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {service.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          Duration: {service.duration}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              
              {errors.service && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.service.message}
                </p>
              )}
            </div>

            {/* Date and Time Selection */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Select Date & Time
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Date Picker */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: Date | null) => setSelectedDate(date)}
                      filterDate={filterDate}
                      placeholderText="Select a date"
                      className="input-field w-full"
                      dateFormat="MMMM d, yyyy"
                      minDate={new Date()}
                      inline={false}
                    />
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Available Monday - Saturday. Closed Sundays.
                  </p>
                </div>

                {/* Time Slot */}
                <div>
                  <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="timeSlot"
                    {...register('timeSlot')}
                    className={`input-field ${errors.timeSlot ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                  {errors.timeSlot && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.timeSlot.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Service Frequency */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Service Frequency
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {frequencyOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`block cursor-pointer p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                      watch('frequency') === option.value
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register('frequency')}
                      className="sr-only"
                    />
                    <div className="font-semibold text-gray-900 mb-1">
                      {option.label}
                    </div>
                    {option.discount > 0 && (
                      <div className="text-sm text-green-600 font-medium">
                        Save {option.discount}%
                      </div>
                    )}
                  </label>
                ))}
              </div>
              
              {errors.frequency && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.frequency.message}
                </p>
              )}
            </div>

            {/* Contact Information */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Contact Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                                      <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
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
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Address *
                </label>
                <input
                  type="text"
                  id="address"
                  {...register('address')}
                  className={`input-field ${errors.address ? 'border-red-500' : ''}`}
                  placeholder="Enter the address where service is needed"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            {/* Special Requests */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Special Requests (Optional)
              </h2>
              
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="specialRequests"
                  rows={4}
                  {...register('specialRequests')}
                  className="input-field resize-none"
                  placeholder="Please share any specific requirements, areas of focus, allergies, pets, or special instructions..."
                />
              </div>
            </div>

            {/* Booking Summary */}
            {watchedService && (
              <div className="card bg-gradient-to-br from-primary-50 to-secondary-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Booking Summary
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Service:</span>
                    <span className="text-gray-900">{getSelectedServiceDetails()?.name}</span>
                  </div>
                  
                  {selectedDate && (
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Date:</span>
                      <span className="text-gray-900">{selectedDate.toLocaleDateString()}</span>
                    </div>
                  )}
                  
                  {watch('timeSlot') && (
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Time:</span>
                      <span className="text-gray-900">
                        {timeSlots.find(slot => slot.value === watch('timeSlot'))?.label}
                      </span>
                    </div>
                  )}
                  
                  {watch('frequency') && (
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">Frequency:</span>
                      <span className="text-gray-900">
                        {frequencyOptions.find(opt => opt.value === watch('frequency'))?.label}
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-gray-900">Total:</span>
                      <span className="text-primary-600">${calculateTotal()}</span>
                    </div>
                                         {watch('frequency') && frequencyOptions.find(opt => opt.value === watch('frequency'))?.discount && frequencyOptions.find(opt => opt.value === watch('frequency'))!.discount > 0 && (
                       <p className="text-sm text-green-600 text-right">
                         You save ${getSelectedServiceDetails()?.price! - calculateTotal()} with {frequencyOptions.find(opt => opt.value === watch('frequency'))?.label.toLowerCase()} service!
                       </p>
                     )}
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || !selectedDate}
                className={`w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 ${
                  isSubmitting || !selectedDate
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Booking...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Confirm Booking</span>
                  </div>
                )}
              </button>
              
              <p className="mt-4 text-sm text-gray-600">
                By booking, you agree to our terms of service. We'll contact you within 2 hours to confirm your appointment.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;