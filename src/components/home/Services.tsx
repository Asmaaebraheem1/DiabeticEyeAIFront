import React from 'react';
import { 
  Microscope, 
  FileCheck, 
  Clock3, 
  BrainCircuit, 
  FileBarChart, 
  HeartPulse 
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive blood line density analysis powered by advanced AI technology, 
            providing accurate and reliable results for medical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Automated Analysis */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl mb-6">
              <BrainCircuit size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              AI-Powered Analysis
            </h3>
            <p className="text-gray-600">
              Advanced machine learning algorithms analyze blood line density with 
              high precision, providing accurate measurements within seconds.
            </p>
          </div>

          {/* Real-time Processing */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 text-teal-600 rounded-xl mb-6">
              <Clock3 size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Real-time Results
            </h3>
            <p className="text-gray-600">
              Get instant analysis results with detailed metrics, enabling quick 
              decision-making for medical professionals.
            </p>
          </div>

          {/* Multi-format Support */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl mb-6">
              <FileCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Multi-format Support
            </h3>
            <p className="text-gray-600">
              Process images and PDFs from various sources, supporting multiple file 
              formats for maximum flexibility.
            </p>
          </div>

          {/* Detailed Reports */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-xl mb-6">
              <FileBarChart size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Comprehensive Reports
            </h3>
            <p className="text-gray-600">
              Generate detailed analysis reports with visualizations and key metrics 
              for thorough documentation.
            </p>
          </div>

          {/* Clinical Analysis */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-xl mb-6">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Clinical Integration
            </h3>
            <p className="text-gray-600">
              Seamlessly integrate with existing clinical workflows and healthcare 
              management systems.
            </p>
          </div>

          {/* Research Support */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-xl mb-6">
              <Microscope size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Research Support
            </h3>
            <p className="text-gray-600">
              Advanced tools for research institutions, supporting large-scale 
              analysis and data collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;