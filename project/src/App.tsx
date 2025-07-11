import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import FeatureSection from './components/FeatureSection';
import CollectionsSection from './components/CollectionsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeatureSection />
      <CollectionsSection />
      <Footer />
    </div>
  );
}

export default App;