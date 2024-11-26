import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    title: 'Your Health, Our Priority',
    description: 'Book appointments with top healthcare professionals in your area.',
  },
  {
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
    title: 'Expert Medical Care',
    description: 'Connect with specialized doctors for personalized treatment.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80',
    title: 'Modern Healthcare',
    description: 'Experience healthcare with cutting-edge technology and facilities.',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      effect="fade"
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      className="h-[600px] relative"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-50"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex items-center"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl mb-8 max-w-2xl">
                  {slide.description}
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Find a Doctor
                </button>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;