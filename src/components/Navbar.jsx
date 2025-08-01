import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Meet the Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
  { name: 'Bookings', path: '/bookings' },
];

export default function Navbar() {
  return (
    <header className="bg-green-700 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold">GreenClean Co.</h1>
        <nav className="space-x-4">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? 'underline' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}