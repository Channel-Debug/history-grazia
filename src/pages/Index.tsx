
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IndexSection from '../components/IndexSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <IndexSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
