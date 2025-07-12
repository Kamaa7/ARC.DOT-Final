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
      image: Collection1,
      category: "rexine"
    },
    {
      id: 2,
      name: "SILK FIBER TREASURES",
      description: "Premium silk fibers sourced from the finest silk farms",
      image: Collection2,
      category: "fiber"
    },
    {
      id: 3,
      name: "LUXURY TEXTILE COLLECTION",
      description: "Handwoven premium textiles with intricate patterns and designs",
      image: Collection3,
      category: "textile"
    },
    {
      id: 4,
      name: "PREMIUM FIBER BLEND",
      description: "Exclusive blend of natural and synthetic fibers for superior quality",
      image: Collection4,
      category: "fiber"
    }
  ];

  const handleProductClick = (product: typeof products[0]) => {
    // Simulate product detail view
    alert(`Viewing ${product.name}\n\nCategory: ${product.category.toUpperCase()}\nDescription: ${product.description}\n\nThis would normally open a detailed product page.`);
  };

  const handleViewAllProducts = () => {
    alert('This would navigate to a complete product catalog page with filters for:\n\n• Premium Textiles\n• Luxury Rexines\n• High-Quality Fibers\n• Specialty Blends\n\nWith advanced search and filtering options.');
  };

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
              onClick={() => console.log(`Product ${product.name} clicked`)}>
              <div className="relative overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-cover transform group-hover:scale-105 transition-transform duration-500 ${
                      index % 2 === 0 ? 'h-64 sm:h-72 lg:h-80 xl:h-96' : 'h-56 sm:h-64 lg:h-72 xl:h-80'
                    }`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-light text-gray-900 mb-2 sm:mb-3 lg:mb-4 uppercase tracking-[0.1em] sm:tracking-[0.15em] leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-sm leading-relaxed font-light tracking-wide">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button 
            onClick={() => console.log('View all products clicked')}
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