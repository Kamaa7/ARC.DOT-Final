import React, { useState } from 'react';
import { ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer id="footer" className="bg-white text-black py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Links Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-8 sm:mb-12 lg:mb-16 tracking-[0.1em] px-4">
            Quick links
          </h3>
          
          {/* Mobile: Stacked Links */}
          <div className="sm:hidden space-y-4">
            <div className="space-y-3">
              <button onClick={() => console.log('Contact us clicked')} 
                className="block text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm">
                Contact us
              </button>
              <button onClick={() => console.log('Our Story clicked')} 
                className="block text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm">
                Our Story
              </button>
              <button onClick={() => console.log('Terms clicked')} 
                className="block text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm">
                Terms of Service
              </button>
              <button onClick={() => console.log('Refund policy clicked')} 
                className="block text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm">
                Refund policy
              </button>
              <button onClick={() => console.log('Shipping clicked')} 
                className="block text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm">
                Shipping Methods
              </button>
              <button onClick={() => console.log('FAQ clicked')} 
                className="block text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm">
                FAQ's
              </button>
              <button onClick={() => console.log('Stories clicked')} 
                className="block text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm">
                Arc Dot Stories
              </button>
              <button onClick={() => console.log('Privacy clicked')} 
                className="block text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm">
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Tablet and Desktop: Grid Layout */}
          <div className="hidden sm:block">
            {/* First Row of Links */}
            <div className="flex flex-wrap justify-center gap-x-6 lg:gap-x-12 gap-y-3 sm:gap-y-4 mb-4 sm:mb-6 lg:mb-8">
              <button onClick={() => console.log('Contact us clicked')} 
                className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm lg:text-base">
                Contact us
              </button>
              <button onClick={() => console.log('Our Story clicked')} 
                className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm lg:text-base">
                Our Story
              </button>
              <button onClick={() => console.log('Terms clicked')} 
                className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm lg:text-base">
                Terms of Service
              </button>
              <button onClick={() => console.log('Refund policy clicked')} 
                className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm lg:text-base">
                Refund policy
              </button>
              <button onClick={() => console.log('Shipping clicked')} 
                className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm lg:text-base">
                Shipping Methods
              </button>
              <button onClick={() => console.log('FAQ clicked')} 
                className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm lg:text-base">
                FAQ's
              </button>
            </div>
            
            {/* Second Row of Links */}
            <div className="flex flex-wrap justify-center gap-x-6 lg:gap-x-12 gap-y-3 sm:gap-y-4">
              <button onClick={() => console.log('Stories clicked')} 
                className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm lg:text-base">
                Arc Dot Stories
              </button>
              <button onClick={() => console.log('Privacy clicked')} 
                className="text-gray-600 hover:text-black transition-colors font-light tracking-wide text-sm lg:text-base">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-900 text-center mb-6 sm:mb-8 lg:mb-12 tracking-[0.1em] px-4">
            Subscribe to our emails
          </h3>
          <div className="max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 focus:outline-none focus:border-black font-light tracking-wide text-sm lg:text-base pr-12 sm:pr-14"
                />
                <button type="submit" className="absolute right-0 top-0 h-full px-3 sm:px-4 lg:px-6 hover:bg-gray-50 transition-colors">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center justify-center gap-2 text-green-700 font-serif text-base sm:text-lg mt-3">
                  <span className="text-lg sm:text-xl">✔</span>
                  Thanks for subscribing
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 sm:space-x-8 lg:space-x-10">
          <Facebook onClick={() => console.log('Facebook clicked')} 
            className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-gray-600 hover:text-black cursor-pointer transition-colors" />
          <Instagram onClick={() => console.log('Instagram clicked')} 
            className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-gray-600 hover:text-black cursor-pointer transition-colors" />
          <Youtube onClick={() => console.log('Youtube clicked')} 
            className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-gray-600 hover:text-black cursor-pointer transition-colors" />
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide">
            © 2024 Arc Dot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;