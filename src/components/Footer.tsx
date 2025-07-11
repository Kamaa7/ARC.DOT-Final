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
    <footer className="bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Links Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-12 lg:mb-16 tracking-[0.1em]">
            Quick links
          </h3>
          
          {/* First Row of Links */}
          <div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-12 gap-y-4 mb-6 lg:mb-8">
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
          <div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-12 gap-y-4">
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
        
        {/* Newsletter Section */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-xl lg:text-2xl font-light text-gray-900 text-center mb-8 lg:mb-12 tracking-[0.1em]">
            Subscribe to our emails
          </h3>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 border border-gray-300 focus:outline-none focus:border-black font-light tracking-wide text-sm lg:text-base pr-12"
                />
                <button type="submit" className="absolute right-0 top-0 h-full px-4 lg:px-6 hover:bg-gray-50 transition-colors">
                  <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-2 text-green-700 font-serif text-lg mt-2">
                  <span className="text-xl">✔</span>
                  Thanks for subscribing
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 lg:space-x-8">
          <Facebook onClick={() => console.log('Facebook clicked')} 
            className="h-6 w-6 lg:h-7 lg:w-7 text-gray-600 hover:text-black cursor-pointer transition-colors" />
          <Instagram onClick={() => console.log('Instagram clicked')} 
            className="h-6 w-6 lg:h-7 lg:w-7 text-gray-600 hover:text-black cursor-pointer transition-colors" />
          <Youtube onClick={() => console.log('Youtube clicked')} 
            className="h-6 w-6 lg:h-7 lg:w-7 text-gray-600 hover:text-black cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;