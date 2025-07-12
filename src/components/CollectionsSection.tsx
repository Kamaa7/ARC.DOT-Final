import React from 'react';
import anyoneEveryone7 from '../assets/anyone-everyone7.png';
import anyoneEveryone5 from '../assets/anyone-everyone5.png';
import anyoneEveryone6 from '../assets/anyone-everyone6.png';

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      title: "LUXURY LIVING COLLECTION",
      subtitle: "Premium Upholstery & Textiles",
      description: "Exquisite fabrics for modern living spaces",
      image: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "EXPLORE LUXURY"
    },
    {
      id: 2,
      title: "VELVET ELEGANCE SERIES",
      subtitle: "Rich Textures & Deep Colors",
      description: "Sophisticated velvet collections for premium furniture",
      image: "https://images.pexels.com/photos/3965547/pexels-photo-3965547.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "DISCOVER VELVET"
    },
    {
      id: 3,
      title: "LEATHER CRAFT COLLECTION",
      subtitle: "Artisan Leather & Premium Finishes",
      description: "Handcrafted leather textiles for timeless elegance",
      image: "https://images.pexels.com/photos/1148961/pexels-photo-1148961.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "VIEW LEATHER"
    }
  ];

  return (
    <section id="collections" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] px-4">
            EXPLORE ALL COLLECTIONS
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 font-light tracking-wide max-w-2xl lg:max-w-3xl mx-auto px-4">
            Discover our curated selection of premium textiles and upholstery fabrics, 
            crafted for the most discerning interior designers and furniture makers.
          </p>
        </div>

        {/* Mobile and Tablet: Single Column */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:hidden">
          {[anyoneEveryone7, anyoneEveryone5, anyoneEveryone6].map((img, idx) => (
            <div key={idx} className="w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => console.log(`Collection ${idx + 1} clicked`)}>
              <img
                src={img}
                alt={`Collection ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {[anyoneEveryone7, anyoneEveryone5, anyoneEveryone6].map((img, idx) => (
            <div key={idx} className="w-full aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => console.log(`Collection ${idx + 1} clicked`)}>
              <img
                src={img}
                alt={`Collection ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button 
            onClick={() => console.log('View all collections clicked')}
            className="bg-gray-900 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 font-light tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-base hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            VIEW ALL COLLECTIONS
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;