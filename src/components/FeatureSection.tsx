import React from 'react';
import Fabric1 from '../assets/Fabric1.jpg';
import Fabric2 from '../assets/Fabric2.jpg';
import Fabric3 from '../assets/Fabric3.jpg';

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "RICH INGREDIENTS",
      description: "We collaborate with master craftsmen from India, Italy, and Germany, each bringing their unique artistry and expertise to create textiles that are a harmonious blend of tradition and innovation. Whether it's the rich fabrics from the mills of Tamil Nadu, the exotic fibers from European workshops, or the cutting-edge synthetics from German laboratories, every material in our collection is a testament to our unwavering pursuit of perfection.",
      image: Fabric1
    },
    {
      id: 2,
      title: "EMOTIONAL SCENTS",
      description: "Our textiles are a journey through the founders' cherished memories and dreams. Each fabric captures the essence of their travels, childhood moments, or even imagined worlds, blending these experiences into unique design stories, like the exotic allure of Kashmir silk or the adventure of synthetic fiber innovations. Others transport you to fantastical worlds, like the opulence of royal Indian textiles or the vibrant energy of contemporary fiber art.",
      image: Fabric2
    },
    {
      id: 3,
      title: "ANYONE & EVERYONE",
      description: "Our premium textiles are crafted to resonate with every space, celebrating individuality and breaking away from traditional limitations. We take pride in offering a collection where everyone can find their perfect fabric that speaks to their taste and reflects their true essence. Each textile is a personal journey, inviting you to explore and connect with your own unique style and preferences.",
      image: Fabric3
    }
  ];

  return (
    <section className="py-0">
      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden">
        {features.map((feature, index) => (
          <div key={feature.id} className="relative group overflow-hidden cursor-pointer"
            onClick={() => {
              console.log(`Feature ${feature.title} clicked`);
              alert(`Learn more about ${feature.title}...`);
            }}>
            <div className="relative">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white text-black px-3 py-1 text-xs font-light tracking-wider">LEARN MORE</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-end p-6 sm:p-8 md:p-12">
              <div className="text-white space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.1em] sm:tracking-[0.15em] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90 font-light tracking-wide line-clamp-4">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={feature.id} className="relative group overflow-hidden cursor-pointer"
            onClick={() => {
              console.log(`Feature ${feature.title} clicked`);
              alert(`Learn more about ${feature.title}...`);
            }}>
            <div className="relative">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[600px] xl:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white text-black px-4 py-2 text-sm font-light tracking-wider">LEARN MORE</span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-end p-8 lg:p-10 xl:p-12">
              <div className="text-white space-y-4 max-w-sm">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light tracking-[0.15em] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs lg:text-sm xl:text-base leading-relaxed opacity-90 font-light tracking-wide">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;