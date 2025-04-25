import React, { useRef, useState } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import InputForm from '../components/home/InputForm';
import Results from '../components/home/Results';
import FAQ from '../components/home/FAQ';
import { ResultData } from '../types';

const Home: React.FC = () => {
  const [result, setResult] = useState<ResultData | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResultGenerated = (newResult: ResultData) => {
    setResult(newResult);
  };

  return (
    <main>
      <Hero onTryNowClick={scrollToForm} />
      <Features />
      <Services />
      <Testimonials />
      <div ref={formRef}>
        <InputForm onResultGenerated={handleResultGenerated} />
      </div>
      <Results result={result} />
      <FAQ />
    </main>
  );
};

export default Home;