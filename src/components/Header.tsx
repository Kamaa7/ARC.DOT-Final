import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import SearchModal from './SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navigateToCollections = () => {
    console.log('Navigating to collections page');
    setCurrentPage('collections');
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    console.log('Navigating to home page');
    setCurrentPage('home');
    setIsMenuOpen(false);
  };

  const handleProductCategory = (category: string) => {
    console.log(`Navigating to ${category} category`);
    scrollToSection('products');
    // In a real app, this would filter products by category
    setTimeout(() => {
      alert(`Showing ${category} products. In a real application, this would filter the product catalog.`);
    }, 500);
  };

  const handleCartClick = () => {
    console.log('Cart clicked');
    alert('Shopping cart functionality would be implemented here.');
  };

  return (
    <>
      {/* Centered Logo Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 sm:h-20">
            <button 
              onClick={navigateToHome}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] text-gray-900 hover:text-gray-700 transition-colors"
            >
              ARC DOT
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="fixed top-16 sm:top-20 left-0 right-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 mx-auto">
              <button 
                onClick={() => handleProductCategory('Textiles')}
                className="text-gray-700 hover:text-black transition-colors font-light tracking-wide text-sm xl:text-base"
              >
                Textiles
              </button>
              <button 
                onClick={() => handleProductCategory('Rexines')}
                className="text-gray-700 hover:text-black transition-colors font-light tracking-wide text-sm xl:text-base"
              >
                Rexines
              </button>
              <button 
                onClick={() => handleProductCategory('Fibers')}
                className="text-gray-700 hover:text-black transition-colors font-light tracking-wide text-sm xl:text-base"
              >
                Fibers
              </button>
              <button 
                onClick={navigateToCollections}
                className="text-gray-700 hover:text-black transition-colors font-light tracking-wide text-sm xl:text-base"
              >
                Collections
              </button>
              <button 
                onClick={() => scrollToSection('footer')}
                className="text-gray-700 hover:text-black transition-colors font-light tracking-wide text-sm xl:text-base"
              >
                Contact
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute right-0">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-700" />
              </button>
              <button 
                onClick={handleCartClick}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-3 ml-auto">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-gray-700" />
              </button>
              <button 
                onClick={handleCartClick}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => handleProductCategory('Textiles')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors font-light tracking-wide"
                >
                  Textiles
                </button>
                <button 
                  onClick={() => handleProductCategory('Rexines')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors font-light tracking-wide"
                >
                  Rexines
                </button>
                <button 
                  onClick={() => handleProductCategory('Fibers')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors font-light tracking-wide"
                >
                  Fibers
                </button>
                <button 
                  onClick={navigateToCollections}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors font-light tracking-wide"
                >
                  Collections
                </button>
                <button 
                  onClick={() => scrollToSection('footer')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors font-light tracking-wide"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Pass navigation state to parent */}
      {window.dispatchEvent && window.dispatchEvent(new CustomEvent('pageChange', { 
        detail: { page: currentPage } 
      }))}
    </>
  );
};

export default Header;