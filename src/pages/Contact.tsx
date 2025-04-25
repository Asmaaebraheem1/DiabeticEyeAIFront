import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.details) {
          setValidationErrors(errorData.details);
          return; // Don't throw error to prevent alert
        }
        throw new Error(errorData.error || 'Failed to submit form');
      }
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error: unknown) {
      console.error('Submission error:', error);
      if (error instanceof Error) {
        alert(error.message || 'An error occurred while submitting the form');
      } else {
        alert('An unknown error occurred while submitting the form');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Have questions about our blood line density AI technology? 
            We're here to help and would love to hear from you.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@blooddensityai.com</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Medical Research Center, Suite 200</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  
                  <p className="mb-6">
                    We value your feedback and inquiries. Please fill out the form 
                    and our team will get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="mt-1 mr-3 flex-shrink-0" size={18} />
                      <div>
                        <h3 className="font-medium">Email Inquiries</h3>
                        <p className="text-sm opacity-80">For general questions and information</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="mt-1 mr-3 flex-shrink-0" size={18} />
                      <div>
                        <h3 className="font-medium">Phone Support</h3>
                        <p className="text-sm opacity-80">Available Monday-Friday, 9am-5pm EST</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                  
                  {submitSuccess ? (
                    <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">
                            Thank you for your message! We'll get back to you shortly.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-2 border ${
                            validationErrors.name ? 'border-red-500' : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        <div className="h-5">
                          {validationErrors.name && (
                            <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-2 border ${
                            validationErrors.email ? 'border-red-500' : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {validationErrors.email && (
                          <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership Opportunity</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-2 border ${
                            validationErrors.message ? 'border-red-500' : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        ></textarea>
                        {validationErrors.message && (
                          <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
                        )}
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center py-2 px-4 ${
                          isSubmitting 
                            ? 'bg-blue-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700'
                        } text-white font-medium rounded-md transition-colors`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;