import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import FeatureSection from './components/FeatureSection';
import CollectionsSection from './components/CollectionsSection';
import Footer from './components/Footer';
import CollectionsPage from './components/CollectionsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handlePageChange = (event: any) => {
      setCurrentPage(event.detail.page);
    };

    window.addEventListener('pageChange', handlePageChange);
    return () => window.removeEventListener('pageChange', handlePageChange);
  }, []);

  return (
    <div className="min-h-screen pt-30 sm:pt-36">
      <Header />
      {currentPage === 'home' ? (
        <>
          <HeroSection />
          <ProductShowcase />
          <FeatureSection />
          <CollectionsSection />
          <Footer />
        </>
      ) : currentPage === 'collections' ? (
        <>
          <CollectionsPage />
          <Footer />
        </>
      ) : (
        <>
          <HeroSection />
          <ProductShowcase />
          <FeatureSection />
          <CollectionsSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;