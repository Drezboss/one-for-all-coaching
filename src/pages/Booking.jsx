import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Booking() {
  const [date, setDate] = useState(new Date());

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Book a Service</h2>
      <div className="flex flex-col items-center">
        <Calendar onChange={setDate} value={date} className="react-calendar" />
        <p className="mt-4">
          Selected date: <span className="font-semibold">{date.toDateString()}</span>
        </p>
        <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600">
          Confirm Booking
        </button>
      </div>
    </section>
  );
}