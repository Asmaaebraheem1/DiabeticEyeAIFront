import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, BarChart3, Users, Cloud, Lock } from 'lucide-react';

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with user-friendly features
            to deliver accurate diabetic retinopathy detection.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg">
                <Shield size={24} />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Security
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with end-to-end encryption for all your sensitive medical data.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
                <Zap size={24} />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time Processing
              </h3>
              <p className="text-gray-600">
                Get instant results with our high-performance AI processing engine.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg">
                <BarChart3 size={24} />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Detailed Analytics
              </h3>
              <p className="text-gray-600">
                Comprehensive analysis with detailed metrics and visual representations.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg">
                <Users size={24} />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Share results and collaborate with team members seamlessly.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-lg">
                <Cloud size={24} />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cloud Storage
              </h3>
              <p className="text-gray-600">
                Secure cloud storage for all your analysis results and reports.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg">
                <Lock size={24} />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                HIPAA Compliant
              </h3>
              <p className="text-gray-600">
                Fully compliant with healthcare data protection regulations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;