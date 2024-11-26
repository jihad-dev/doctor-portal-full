import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MediBook</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {location.pathname === '/' && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={false}
                />
              )}
              Home
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <Link
              to="/about"
              className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {location.pathname === '/about' && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={false}
                />
              )}
              About
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;