import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Medical Professionals
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            See what healthcare professionals are saying about our blood line density analysis platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "The accuracy and speed of the analysis have significantly improved our diagnostic process. 
              This tool has become indispensable in our daily practice."
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Dr. Sarah Johnson</h4>
              <p className="text-gray-500">Hematology Specialist</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "The AI-powered analysis has revolutionized how we process blood samples. 
              The detailed reports help us make more informed decisions quickly."
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Dr. Michael Chen</h4>
              <p className="text-gray-500">Research Director</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "The platform's ease of use and accuracy have made it an essential tool 
              in our laboratory. The support team is also incredibly responsive."
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Dr. Emily Rodriguez</h4>
              <p className="text-gray-500">Clinical Pathologist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;