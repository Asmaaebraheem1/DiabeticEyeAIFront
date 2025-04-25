import React, { useState, useRef } from 'react';
import { Upload, Link, FileText, Check, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResultData } from '../../types';

interface InputFormProps {
  onResultGenerated: (result: ResultData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onResultGenerated }) => {
  const [activeTab, setActiveTab] = useState<'image' | 'pdf' | 'url'>('image');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file');
        return;
      }
      setImageFile(file);
      setError('');
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Please upload a valid PDF file');
        return;
      }
      setPdfFile(file);
      setError('');
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (activeTab === 'image' && !imageFile) {
      setError('Please upload an image');
      return;
    }
    if (activeTab === 'pdf' && !pdfFile) {
      setError('Please upload a PDF file');
      return;
    }
    if (activeTab === 'url' && !imageUrl) {
      setError('Please enter an image URL');
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      
      let resultImageUrl = 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      
      if (activeTab === 'image' && imageFile) {
        resultImageUrl = URL.createObjectURL(imageFile);
      }
      
      onResultGenerated({
        imageUrl: resultImageUrl,
        densityValue: Math.random() * 10 + 5,
        status: 'success',
        message: 'Analysis completed successfully'
      });
    }, 2000);
  };

  return (
    <section id="input-form" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-6 text-gray-800"
        >
          Analyze Retinal Images
        </motion.h2>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200"
        >
          <div className="flex items-start">
            <Info className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Image Upload Guidelines</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Use high-quality retinal fundus images</li>
                <li>• Ensure the image is properly focused and well-lit</li>
                <li>• Include the entire retinal area in the image</li>
                <li>• Avoid blurry or overexposed images</li>
                <li>• Recommended image size: 2048x2048 pixels or larger</li>
                <li>• Supported formats: PNG, JPG, or WEBP</li>
                <li>• Maximum file size: 10MB</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 ${
                activeTab === 'image' 
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('image')}
            >
              <Upload size={18} />
              <span>Upload Image</span>
            </button>
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 ${
                activeTab === 'pdf' 
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('pdf')}
            >
              <FileText size={18} />
              <span>Upload PDF</span>
            </button>
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 ${
                activeTab === 'url' 
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('url')}
            >
              <Link size={18} />
              <span>Image URL</span>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8">
            {activeTab === 'image' && (
              <div className="space-y-4">
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {imageFile ? (
                    <div className="flex flex-col items-center">
                      <Check size={48} className="text-green-500 mb-2" />
                      <p className="text-green-600 font-medium">{imageFile.name}</p>
                      <p className="text-sm text-gray-500 mt-2">Click to change file</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload size={48} className="text-blue-500 mb-2" />
                      <p className="text-gray-700 font-medium">Click to upload a retinal image</p>
                      <p className="text-sm text-gray-500 mt-2">PNG, JPG, or WEBP (max 10MB)</p>
                    </div>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'pdf' && (
              <div className="space-y-4">
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
                  onClick={() => pdfInputRef.current?.click()}
                >
                  {pdfFile ? (
                    <div className="flex flex-col items-center">
                      <Check size={48} className="text-green-500 mb-2" />
                      <p className="text-green-600 font-medium">{pdfFile.name}</p>
                      <p className="text-sm text-gray-500 mt-2">Click to change file</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <FileText size={48} className="text-blue-500 mb-2" />
                      <p className="text-gray-700 font-medium">Click to upload a PDF</p>
                      <p className="text-sm text-gray-500 mt-2">PDF document (max 10MB)</p>
                    </div>
                  )}
                  
                  <input
                    ref={pdfInputRef}
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={handlePdfChange}
                  />
                </div>
              </div>
            )}
            
            {activeTab === 'url' && (
              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700">Image URL</span>
                  <input
                    type="url"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="https://example.com/image.jpg"
                    value={imageUrl}
                    onChange={handleUrlChange}
                  />
                </label>
              </div>
            )}
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                <AlertCircle size={18} className="mr-2" />
                {error}
              </div>
            )}
            
            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 rounded-md font-medium text-white ${
                  isLoading 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors shadow-md`}
              >
                {isLoading ? 'Processing...' : 'Analyze Image'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default InputForm;