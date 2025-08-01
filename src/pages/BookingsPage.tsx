import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  time: string;
  address: string;
  notes: string;
}

const BookingsPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>();

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }
    
    console.log('Booking submitted:', { ...data, date: selectedDate });
    setIsBooked(true);
    reset();
    setSelectedDate(null);
    setTimeout(() => setIsBooked(false), 5000);
  };

  // Disable past dates and Sundays
  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0; // 0 is Sunday
  };

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Book a Service</h1>

        {isBooked && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-green-100 text-green-700 rounded-lg flex items-center">
            <CheckCircle className="h-6 w-6 mr-3" />
            <div>
              <p className="font-semibold">Booking Confirmed!</p>
              <p className="text-sm">We'll contact you shortly to confirm your appointment.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calendar Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CalendarIcon className="h-6 w-6 mr-2" />
              Select a Date
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Calendar
                onChange={(value) => setSelectedDate(value as Date)}
                value={selectedDate}
                tileDisabled={tileDisabled}
                className="w-full border-0"
              />
              {selectedDate && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-700">
                    Selected date: <strong>{selectedDate.toLocaleDateString()}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Service Information */}
            <div className="mt-8 bg-gray-100 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Service Duration</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Garden Maintenance: 2-4 hours</li>
                <li>• Home Cleaning: 2-3 hours</li>
                <li>• Deep Cleaning: 4-6 hours</li>
              </ul>
              
              <h3 className="font-semibold mt-6 mb-3">Cancellation Policy</h3>
              <p className="text-sm text-gray-600">
                Free cancellation up to 24 hours before your appointment.
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-2" />
              Booking Details
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email"
                      }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: "Phone is required" })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  {...register("service", { required: "Please select a service" })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.service ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="lawn-mowing">Lawn Mowing</option>
                  <option value="garden-maintenance">Full Garden Maintenance</option>
                  <option value="regular-cleaning">Regular Home Cleaning</option>
                  <option value="deep-cleaning">Deep Cleaning</option>
                  <option value="move-cleaning">Move-in/Move-out Cleaning</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  {...register("time", { required: "Please select a time" })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.time ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address *
                </label>
                <input
                  type="text"
                  {...register("address", { required: "Address is required" })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="123 Main St, City, ST 12345"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  {...register("notes")}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Any special instructions or requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;