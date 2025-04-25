import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update document title based on current page
  useEffect(() => {
    const titles = {
      home: 'BloodDensityAI - AI-Powered Blood Line Density Measurement',
      about: 'About - BloodDensityAI',
      contact: 'Contact Us - BloodDensityAI'
    };
    
    document.title = titles[currentPage as keyof typeof titles] || 'BloodDensityAI';
  }, [currentPage]);

  // Render appropriate page based on route
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;