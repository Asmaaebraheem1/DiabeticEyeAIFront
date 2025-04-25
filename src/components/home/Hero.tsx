import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onTryNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTryNowClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 overflow-hidden">
      {/* Background pattern with animation */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          <span className="relative inline-block">
            DiabeticEye<span className="text-teal-400">AI</span>
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-1 bg-teal-400"
            ></motion.span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-6"
        >
          Advanced AI technology for early detection of diabetic retinopathy
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-blue-200 max-w-xl mx-auto mb-10"
        >
          A Graduation Project by Medical Informatics Students
          <br />
          Class of 2024
        </motion.p>
        
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onTryNowClick}
          className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
        >
          Try Now
        </motion.button>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;