import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section
      className="text-center py-20 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 py-20">
        <h2 className="text-4xl font-bold mb-4">Fresh Gardens & Clean Homes</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          GreenClean Co. offers professional gardening and domestic cleaning
          services so you can enjoy a beautiful garden and a spotless home
          without lifting a finger.
        </p>
        <Link
          to="/services"
          className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-semibold px-6 py-3 rounded"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
}