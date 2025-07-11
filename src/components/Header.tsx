import React from 'react';
import { useState } from 'react';
import { Search, User, Menu } from 'lucide-react';
import SearchModal from './SearchModal';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Main Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Search Icon */}
            <div className="flex items-center">
              <Search 
                className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 hover:text-black cursor-pointer transition-colors" 
                onClick={() => setIsSearchOpen(true)}
                title="Search products"
              />
            </div>
            
            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <h1 className="text-2xl lg:text-3xl font-light tracking-[0.3em] text-black cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>ARC DOT</h1>
            </div>
            
            {/* User Icon */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Menu className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 hover:text-black cursor-pointer transition-colors md:hidden"
                onClick={() => console.log('Mobile menu clicked')} />
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex justify-center space-x-8 lg:space-x-12 pb-4 lg:pb-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors">HOME</button>
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors">ALL PRODUCTS</button>
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors">PREMIUM TEXTILES</button>
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors">REXINES</button>
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors">FIBERS</button>
            <button onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors">COLLECTIONS</button>
            <button onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors">EXCLUSIVES</button>
            <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} 
              className="text-gray-700 hover:text-black font-light text-xs lg:text-sm tracking-wider transition-colors">Contact Us</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;