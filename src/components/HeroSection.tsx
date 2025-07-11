import React from 'react';
import anyoneEveryone9 from '../assets/anyone-everyone9.jpg';

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: `url(${anyoneEveryone9}) center center / cover no-repeat`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-8 lg:space-y-12 relative z-10">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-light text-yellow-400 tracking-[0.2em]">
            </h1>
            
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-wide">
                <br />
                <span className="font-normal text-yellow-400"></span>
              </h2>
              
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
              </p>
            </div>
            
            <div className="space-y-3 lg:space-y-4">
              <p className="text-yellow-400 text-lg lg:text-xl tracking-[0.3em] font-light"></p>
              <p className="text-white text-xs lg:text-sm tracking-[0.2em] font-light"></p>
              <p className="text-white text-xs lg:text-sm tracking-[0.2em] font-light"></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
    </section>
  );
};

export default HeroSection;