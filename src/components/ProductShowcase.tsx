import React from 'react';
import Collection1 from '../assets/Collection1.jpg';
import Collection2 from '../assets/Collection2.jpg';
import Collection3 from '../assets/Collection3.jpg';
import Collection4 from '../assets/Collection4.jpg';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "PREMIUM REXINE COLLECTION",
      description: "Luxury automotive grade rexine with superior durability and finish",
      image: Collection1
    },
    {
      id: 2,
      name: "SILK FIBER TREASURES",
      description: "Premium silk fibers sourced from the finest silk farms",
      image: Collection2
    },
    {
      id: 3,
      name: "LUXURY TEXTILE COLLECTION",
      description: "Handwoven premium textiles with intricate patterns and designs",
      image: Collection3
    },
    {
      id: 4,
      name: "PREMIUM FIBER BLEND",
      description: "Exclusive blend of natural and synthetic fibers for superior quality",
      image: Collection4
    }
  ];

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] px-4">
            THE BESTSELLING COLLECTION
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light tracking-wide max-w-2xl mx-auto px-4">
            Discover our most popular premium textiles and materials
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="group cursor-pointer"
              onClick={() => {
                console.log(`Product ${product.name} clicked`);
                // Simulate product detail view
                alert(`Opening ${product.name} details...`);
              }}>
              <div className="bg-white overflow-hidden hover:shadow-xl transition-all duration-500 rounded-lg sm:rounded-none">
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      index % 2 === 0 ? 'h-64 sm:h-72 lg:h-80 xl:h-96' : 'h-56 sm:h-64 lg:h-72 xl:h-80'
                    }`}
                  />
                </div>
                <div className="p-4 sm:p-6 lg:p-8 text-center">
                  <h3 className="text-sm sm:text-base lg:text-lg font-light text-gray-900 mb-2 sm:mb-3 lg:mb-4 uppercase tracking-[0.1em] sm:tracking-[0.15em] leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-sm leading-relaxed font-light tracking-wide">
                    {product.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-gray-500 font-light tracking-wider">CLICK TO VIEW DETAILS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button 
            onClick={() => {
              console.log('View all products clicked');
              alert('Redirecting to full product catalog...');
            }}
            className="border border-gray-900 text-gray-900 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 font-light tracking-[0.1em] sm:tracking-[0.15em] text-sm sm:text-base hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;