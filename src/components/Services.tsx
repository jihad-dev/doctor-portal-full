import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye 
} from 'lucide-react';

const ServiceCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Cardiology",
      description: "Expert care for heart conditions with state-of-the-art diagnostic services."
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "Neurology",
      description: "Specialized treatment for neurological disorders and conditions."
    },
    {
      icon: <Baby className="h-6 w-6 text-blue-600" />,
      title: "Pediatrics",
      description: "Comprehensive healthcare services for children of all ages."
    },
    {
      icon: <Bone className="h-6 w-6 text-blue-600" />,
      title: "Orthopedics",
      description: "Treatment for bone, joint, and muscle conditions."
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Ophthalmology",
      description: "Complete eye care services and vision treatments."
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />,
      title: "General Medicine",
      description: "Primary healthcare services for all your medical needs."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive healthcare solutions for you and your family</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;