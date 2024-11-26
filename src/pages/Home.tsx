import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: 'Easy Scheduling',
      description: 'Book appointments with just a few clicks',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: '24/7 Availability',
      description: 'Access healthcare services anytime',
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Expert Doctors',
      description: 'Connect with qualified healthcare professionals',
    },
  ];

  return (
    <div className="space-y-20">
      <HeroSlider />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=300`}
                alt={`Doctor ${id}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">Cardiologist</p>
                <Link
                  to={`/doctor/${id}`}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  View Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;