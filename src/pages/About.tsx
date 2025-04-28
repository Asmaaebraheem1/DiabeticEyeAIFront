import React from 'react';
import { Activity, Brain, Microscope, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Our Project</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            BloodDensityAI is a graduation project focused on measuring blood line density 
            using advanced artificial intelligence techniques.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Mission</h2>
            
            <div className="prose prose-lg mx-auto text-gray-700">
              <p>
                Blood line density measurement is a critical diagnostic tool in modern medicine. 
                Traditional methods can be time-consuming and prone to human error. Our mission 
                is to revolutionize this process using cutting-edge AI technology.
              </p>
              
              <p>
                Our team of medical and computer science researchers has developed an advanced 
                algorithm capable of analyzing blood samples with unprecedented accuracy. By 
                leveraging machine learning and computer vision, we're able to provide fast, 
                reliable measurements that can help medical professionals make more informed 
                decisions.
              </p>
              
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                "The future of medical diagnostics lies at the intersection of healthcare 
                and artificial intelligence. Our project aims to be at the forefront of 
                this revolution."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Key Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Precision</h3>
              <p className="text-gray-600">Our AI provides measurements with 95% accuracy, exceeding manual methods.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-gray-600">Using advanced neural networks trained on thousands of blood samples.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-6">
                <Microscope size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnostic Aid</h3>
              <p className="text-gray-600">Helps medical professionals in early detection of various blood disorders.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient Care</h3>
              <p className="text-gray-600">Faster results mean quicker diagnoses and improved patient outcomes.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Team</h2>
            
            <p className="text-lg text-gray-700 mb-12">
             DiabeticEyeAI is the result of collaboration between medical researchers, 
              AI specialists, and software engineers committed to advancing healthcare 
              through technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Dr. am Johnson</h3>
                <p className="text-gray-600">Lead Medical Researcher</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-indigo-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">dr . amera Maria Rodriguez</h3>
                <p className="text-gray-600">Software Development Lead</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">Lead Medical Researcher</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-teal-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Alex Chen</h3>
                <p className="text-gray-600">AI Algorithm Specialist</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-indigo-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Maria Rodriguez</h3>
                <p className="text-gray-600">Software Development Lead</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">Lead Medical Researcher</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-teal-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Alex Chen</h3>
                <p className="text-gray-600">AI Algorithm Specialist</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;