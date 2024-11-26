import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Stethoscope, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu when a section is selected
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">MediBook</span>
          </Link>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {location.pathname === "/" && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={false}
                />
              )}
              Home
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <Link
              to="/about"
              className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {location.pathname === "/about" && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={false}
                />
              )}
              About
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600"
              to={""}
            >
              Services
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link to="/contact">
              {" "}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
