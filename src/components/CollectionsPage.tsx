import React, { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';

const CollectionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');

  const collections = [
    {
      id: 1,
      name: "Premium Rexine Collection",
      category: "rexine",
      description: "Luxury automotive grade rexine with superior durability and finish. Perfect for high-end furniture and automotive applications.",
      image: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹2,500 - ₹4,200 per meter",
      colors: ["Black", "Brown", "Tan", "Navy"],
      inStock: true
    },
    {
      id: 2,
      name: "Silk Fiber Treasures",
      category: "silk",
      description: "Premium silk fibers sourced from the finest silk farms. Exceptional quality for luxury textile manufacturing.",
      image: "https://images.pexels.com/photos/3965547/pexels-photo-3965547.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹8,500 - ₹12,000 per kg",
      colors: ["Ivory", "Gold", "Crimson", "Royal Blue"],
      inStock: true
    },
    {
      id: 3,
      name: "Luxury Textile Collection",
      category: "textile",
      description: "Handwoven premium textiles with intricate patterns and designs. Crafted by master artisans using traditional techniques.",
      image: "https://images.pexels.com/photos/1148961/pexels-photo-1148961.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹3,200 - ₹6,800 per meter",
      colors: ["Emerald", "Burgundy", "Gold", "Silver"],
      inStock: true
    },
    {
      id: 4,
      name: "Premium Fiber Blend",
      category: "fiber",
      description: "Exclusive blend of natural and synthetic fibers for superior quality. Ideal for high-performance textile applications.",
      image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹1,800 - ₹3,500 per kg",
      colors: ["Natural", "Charcoal", "Cream", "Beige"],
      inStock: true
    },
    {
      id: 5,
      name: "Velvet Elegance Series",
      category: "textile",
      description: "Rich velvet textures with deep colors. Perfect for luxury upholstery and premium furniture applications.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹4,500 - ₹7,200 per meter",
      colors: ["Deep Purple", "Emerald", "Midnight Blue", "Wine Red"],
      inStock: true
    },
    {
      id: 6,
      name: "Leather Craft Collection",
      category: "leather",
      description: "Artisan leather textiles with premium finishes. Handcrafted for timeless elegance and durability.",
      image: "https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹5,200 - ₹9,800 per sq ft",
      colors: ["Cognac", "Black", "Mahogany", "Camel"],
      inStock: false
    },
    {
      id: 7,
      name: "Cotton Blend Fabrics",
      category: "textile",
      description: "Premium cotton blends with enhanced durability. Sustainable and eco-friendly textile solutions.",
      image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹1,200 - ₹2,800 per meter",
      colors: ["White", "Cream", "Light Blue", "Sage Green"],
      inStock: true
    },
    {
      id: 8,
      name: "Synthetic Leather Premium",
      category: "rexine",
      description: "High-grade synthetic leather with authentic texture. Perfect for modern furniture and automotive interiors.",
      image: "https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹1,800 - ₹3,200 per meter",
      colors: ["Black", "Grey", "Brown", "White"],
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections', count: collections.length },
    { id: 'textile', name: 'Textiles', count: collections.filter(c => c.category === 'textile').length },
    { id: 'rexine', name: 'Rexines', count: collections.filter(c => c.category === 'rexine').length },
    { id: 'silk', name: 'Silk Fibers', count: collections.filter(c => c.category === 'silk').length },
    { id: 'fiber', name: 'Premium Fibers', count: collections.filter(c => c.category === 'fiber').length },
    { id: 'leather', name: 'Leather Craft', count: collections.filter(c => c.category === 'leather').length }
  ];

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(collection => collection.category === selectedCategory);

  const sortedCollections = [...filteredCollections].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const handleProductClick = (product: any) => {
    console.log(`Opening product: ${product.name}`);
    alert(`Opening detailed view for ${product.name}.\n\nPrice: ${product.price}\nCategory: ${product.category}\nIn Stock: ${product.inStock ? 'Yes' : 'No'}`);
  };

  const handleBackToHome = () => {
    window.dispatchEvent(new CustomEvent('pageChange', { detail: { page: 'home' } }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={handleBackToHome}
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-light tracking-wide">Back to Home</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {viewMode === 'grid' ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-[0.1em]">
              OUR COLLECTIONS
            </h1>
            <p className="text-gray-600 font-light tracking-wide max-w-2xl mx-auto">
              Discover our complete range of premium textiles, rexines, and fibers. 
              Each collection is carefully curated for quality and excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wide">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-light tracking-wide ${
                      selectedCategory === category.id
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm opacity-75">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-light text-gray-900 mb-3 tracking-wide">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 font-light"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 font-light">
                Showing {sortedCollections.length} of {collections.length} collections
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedCollections.map(collection => (
                  <div 
                    key={collection.id}
                    onClick={() => handleProductClick(collection)}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-light">
                          {collection.category}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          collection.inStock 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {collection.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">
                        {collection.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 font-light line-clamp-3">
                        {collection.description}
                      </p>
                      <div className="mb-4">
                        <p className="text-gray-900 font-light tracking-wide">{collection.price}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {collection.colors.slice(0, 4).map((color, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-light">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedCollections.map(collection => (
                  <div 
                    key={collection.id}
                    onClick={() => handleProductClick(collection)}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="sm:w-48 aspect-[4/3] overflow-hidden rounded-lg flex-shrink-0">
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs uppercase tracking-wider text-gray-500 font-light">
                            {collection.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            collection.inStock 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {collection.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                        <h3 className="text-xl font-light text-gray-900 mb-3 tracking-wide">
                          {collection.name}
                        </h3>
                        <p className="text-gray-600 mb-4 font-light">
                          {collection.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-gray-900 font-light tracking-wide">{collection.price}</p>
                          <div className="flex flex-wrap gap-1">
                            {collection.colors.slice(0, 4).map((color, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-light">
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;