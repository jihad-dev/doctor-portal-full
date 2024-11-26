import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div 
      initial={false}
      className="border-b border-gray-200 py-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-gray-600">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by selecting your preferred doctor and clicking the 'Book Appointment' button on their profile. Choose your preferred time slot and follow the booking process."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans. Please contact our support team with your specific insurance details for verification."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time through your patient dashboard."
    },
    {
      question: "How long is the typical appointment?",
      answer: "Most appointments are scheduled for 30 minutes, but the duration may vary depending on the type of consultation and medical needs."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our services</p>
        </motion.div>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;