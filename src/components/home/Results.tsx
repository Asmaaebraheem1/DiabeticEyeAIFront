import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResultData } from '../../types';

interface ResultsProps {
  result: ResultData | null;
}

const Results: React.FC<ResultsProps> = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Analysis Results</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Analyzed Image</h3>
                    <div className="relative rounded-lg overflow-hidden shadow-md bg-white p-2">
                      <img 
                        src={result.imageUrl} 
                        alt="Retinal scan result" 
                        className="w-full h-auto rounded"
                      />
                      {result.status === 'processing' && (
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Diagnostic Analysis</h3>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">Status:</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            result.status === 'success' ? 'bg-green-100 text-green-800' : 
                            result.status === 'processing' ? 'bg-blue-100 text-blue-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {result.status === 'success' ? 'Completed' : 
                             result.status === 'processing' ? 'Processing' : 'Failed'}
                          </span>
                        </div>
                        
                        {result.densityValue && (
                          <div className="mt-4">
                            <p className="text-gray-700 font-medium mb-2">Severity Level:</p>
                            <div className="text-3xl font-bold text-blue-600">
                              {result.densityValue.toFixed(2)}
                            </div>
                            <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-teal-500"
                                style={{ width: `${Math.min(result.densityValue * 10, 100)}%` }}
                              ></div>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                              The analysis indicates {
                                result.densityValue < 8 ? 'mild' :
                                result.densityValue > 12 ? 'severe' :
                                'moderate'
                              } signs of diabetic retinopathy.
                            </p>
                          </div>
                        )}
                        
                        {result.message && (
                          <p className="mt-4 text-gray-700">
                            <span className="font-medium">Analysis Notes: </span> 
                            {result.message}
                          </p>
                        )}
                      </div>
                      
                      <button className="w-full mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                        Download Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Results;