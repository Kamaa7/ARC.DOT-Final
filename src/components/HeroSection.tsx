import React from 'react';
import anyoneEveryone9 from '../assets/anyone-everyone9.jpg';

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${anyoneEveryone9}) center center / cover no-repeat`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12 relative z-10">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] leading-tight">
            </h1>
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight tracking-wide px-4">
                <br />
                <span className="font-normal text-yellow-400"></span>
              </h2>
              
              <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed font-light tracking-wide max-w-xl lg:max-w-2xl mx-auto px-4">
              </p>
            </div>
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 px-4">
              <p className="text-yellow-400 text-base sm:text-lg lg:text-xl tracking-[0.2em] sm:tracking-[0.3em] font-light">
                LUXURY • QUALITY • INNOVATION
              </p>
              <p className="text-white text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-light">
                PREMIUM MATERIALS FOR DISCERNING PROFESSIONALS
              </p>
              <p className="text-white text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-light">
                TRUSTED BY LEADING DESIGNERS WORLDWIDE
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 text-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 font-light tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-base hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                EXPLORE COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;