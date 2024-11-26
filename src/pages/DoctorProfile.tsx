import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star, MapPin, Phone, Mail } from 'lucide-react';

const DoctorProfile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
              alt="Doctor profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <div className="flex items-center mb-4">
              <h1 className="text-3xl font-bold mr-4">Dr. Sarah Johnson</h1>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">4.9</span>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-6">Cardiologist</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span>123 Medical Center, New York</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span>dr.sarah@medibook.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span>Mon - Fri, 9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment
            </button>
          </div>
        </div>

        <div className="p-8 border-t">
          <h2 className="text-2xl font-bold mb-4">About Dr. Sarah Johnson</h2>
          <p className="text-gray-600 mb-6">
            Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of
            experience in treating various heart conditions. She completed her medical
            degree at Harvard Medical School and her residency at Mayo Clinic.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Specializations</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Interventional Cardiology</li>
                <li>Heart Failure Management</li>
                <li>Preventive Cardiology</li>
                <li>Cardiac Imaging</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Harvard Medical School - MD</li>
                <li>Mayo Clinic - Residency</li>
                <li>Johns Hopkins - Fellowship</li>
                <li>Board Certified in Cardiology</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DoctorProfile;