import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Garden Maintenance',
    description:
      'Regular lawn mowing, hedge trimming, weeding and seasonal planting to keep your garden flourishing all year round.',
    image:
      'https://images.unsplash.com/photo-1568600891621-1b39c316fee4?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Home Cleaning',
    description:
      'Thorough domestic cleaning including dusting, vacuuming, mopping and sanitizing to give you a sparkling clean living space.',
    image:
      'https://images.unsplash.com/photo-1581578018066-ada7d9a530c8?auto=format&fit=crop&w=800&q=60',
  },
];

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}