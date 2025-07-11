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
    <section id="products" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-4 tracking-[0.2em]">
            THE BESTSELLING COLLECTION
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="group cursor-pointer"
              onClick={() => console.log(`Product ${product.name} clicked`)}>
              <div className="bg-white overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      index % 2 === 0 ? 'h-80 lg:h-96' : 'h-64 lg:h-80'
                    }`}
                  />
                </div>
                <div className="p-6 lg:p-8 text-center">
                  <h3 className="text-base lg:text-lg font-light text-gray-900 mb-3 lg:mb-4 uppercase tracking-[0.15em]">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed font-light tracking-wide">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;