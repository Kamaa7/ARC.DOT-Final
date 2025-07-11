import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const sampleProducts = [
    'Premium Rexine Collection',
    'Silk Fiber Treasures',
    'Luxury Textile Collection',
    'Premium Fiber Blend',
    'Velvet Upholstery',
    'Leather Craft Materials',
    'Cotton Blend Fabrics',
    'Synthetic Leather',
    'Decorative Textiles',
    'Automotive Rexine'
  ];

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = sampleProducts.filter(product =>
        product.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-2xl">
        {/* Search Header */}
        <div className="flex items-center p-6 border-b border-gray-200">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search for textiles, rexines, fibers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 text-lg focus:outline-none font-light tracking-wide"
            autoFocus
          />
          <button
            onClick={onClose}
            className="ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchTerm.length > 0 ? (
            searchResults.length > 0 ? (
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-4 font-light tracking-wide">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                </p>
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      console.log(`Selected: ${result}`);
                      onClose();
                    }}
                    className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center">
                      <Search className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="font-light tracking-wide">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500 font-light tracking-wide">
                  No results found for "{searchTerm}"
                </p>
                <p className="text-sm text-gray-400 mt-2 font-light">
                  Try searching for textiles, rexines, or fibers
                </p>
              </div>
            )
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500 font-light tracking-wide mb-4">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Premium Rexine', 'Silk Fibers', 'Luxury Textiles', 'Velvet'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors font-light tracking-wide"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;