import React from 'react';
import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import SearchModal from './SearchModal';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Main Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Search Icon */}
            <div className="flex items-center">
              <Search 
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-black cursor-pointer transition-colors" 
                onClick={() => setIsSearchOpen(true)}
                title="Search products"
              />
            </div>
            
            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-black cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>ARC DOT</h1>
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-6 lg:space-x-12 pb-3 lg:pb-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors py-1">HOME</button>
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors py-1">ALL PRODUCTS</button>
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors py-1">PREMIUM TEXTILES</button>
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors py-1">REXINES</button>
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors py-1">FIBERS</button>
            <button onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors py-1">COLLECTIONS</button>
            <button onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors py-1">EXCLUSIVES</button>
            <button onClick={() => console.log('Contact clicked')} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors py-1">CONTACT US</button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-700 hover:text-black font-light text-sm tracking-wider transition-colors py-2">
                HOME
              </button>
              <button 
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-700 hover:text-black font-light text-sm tracking-wider transition-colors py-2">
                ALL PRODUCTS
              </button>
              <button 
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-700 hover:text-black font-light text-sm tracking-wider transition-colors py-2">
                PREMIUM TEXTILES
              </button>
              <button 
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-700 hover:text-black font-light text-sm tracking-wider transition-colors py-2">
                REXINES
              </button>
              <button 
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-700 hover:text-black font-light text-sm tracking-wider transition-colors py-2">
                FIBERS
              </button>
              <button 
                onClick={() => {
                  document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-700 hover:text-black font-light text-sm tracking-wider transition-colors py-2">
                COLLECTIONS
              </button>
              <button 
                onClick={() => {
                  document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-700 hover:text-black font-light text-sm tracking-wider transition-colors py-2">
                EXCLUSIVES
              </button>
              <button 
                onClick={() => {
                  console.log('Contact clicked');
                  setIsMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-gray-700 hover:text-black font-light text-sm tracking-wider transition-colors py-2">
                CONTACT US
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;