import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} GreenClean Co. All rights reserved.</p>
    </footer>
  );
}