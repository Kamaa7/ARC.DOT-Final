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
    <section id="collections" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-4 tracking-[0.2em]">
            EXPLORE ALL COLLECTIONS
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto">
            Discover our curated selection of premium textiles and upholstery fabrics, 
            crafted for the most discerning interior designers and furniture makers.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {[anyoneEveryone7, anyoneEveryone5, anyoneEveryone6].map((img, idx) => (
            <div key={idx} className="w-full aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Collection ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;