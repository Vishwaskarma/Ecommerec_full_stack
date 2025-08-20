'use client';

import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Share2, Filter, Grid3X3, List, Star, Crown, Gift, ArrowLeft, Trash2, Check, AlertCircle } from 'lucide-react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Luxury Diamond Ring',
      brand: 'Cartier',
      price: 12500,
      originalPrice: 13000,
      image: '/api/placeholder/300/300?text=Cartier+Ring',
      category: 'Jewelry',
      rating: 5,
      reviews: 128,
      discount: 4,
      inStock: true,
      isNew: true,
      dateAdded: '2024-01-15'
    },
    {
      id: 2,
      name: 'Swiss Automatic Watch',
      brand: 'Patek Philippe',
      price: 45000,
      originalPrice: 47000,
      image: '/api/placeholder/300/300?text=Patek+Watch',
      category: 'Watches',
      rating: 5,
      reviews: 89,
      discount: 4,
      inStock: true,
      isNew: false,
      dateAdded: '2024-01-10'
    },
    {
      id: 3,
      name: 'Designer Silk Scarf',
      brand: 'Hermès',
      price: 450,
      originalPrice: 500,
      image: '/api/placeholder/300/300?text=Hermes+Scarf',
      category: 'Accessories',
      rating: 4,
      reviews: 256,
      discount: 10,
      inStock: false,
      isNew: false,
      dateAdded: '2024-01-08'
    },
    {
      id: 4,
      name: 'Leather Handbag',
      brand: 'Chanel',
      price: 5200,
      originalPrice: 5500,
      image: '/api/placeholder/300/300?text=Chanel+Bag',
      category: 'Bags',
      rating: 5,
      reviews: 342,
      discount: 5,
      inStock: true,
      isNew: false,
      dateAdded: '2024-01-05'
    },
    {
      id: 5,
      name: 'Premium Sunglasses',
      brand: 'Ray-Ban',
      price: 320,
      originalPrice: 350,
      image: '/api/placeholder/300/300?text=RayBan+Sunglasses',
      category: 'Accessories',
      rating: 4,
      reviews: 89,
      discount: 9,
      inStock: true,
      isNew: true,
      dateAdded: '2024-01-12'
    },
    {
      id: 6,
      name: 'Luxury Perfume',
      brand: 'Tom Ford',
      price: 280,
      originalPrice: 300,
      image: '/api/placeholder/300/300?text=Tom+Ford+Perfume',
      category: 'Fragrance',
      rating: 5,
      reviews: 156,
      discount: 7,
      inStock: true,
      isNew: false,
      dateAdded: '2024-01-03'
    }
  ]);

  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('dateAdded');
  const [filterBy, setFilterBy] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    setSelectedItems(selectedItems.filter(itemId => itemId !== id));
  };

  const addToCart = (id) => {
    // Add to cart logic here
    console.log('Added to cart:', id);
  };

  const toggleSelection = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredItems.map(item => item.id));
    }
  };

  const addSelectedToCart = () => {
    selectedItems.forEach(id => addToCart(id));
    setSelectedItems([]);
  };

  const removeSelectedItems = () => {
    setWishlistItems(wishlistItems.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  // Filter and sort items
  const filteredItems = wishlistItems
    .filter(item => {
      if (filterBy === 'all') return true;
      if (filterBy === 'inStock') return item.inStock;
      if (filterBy === 'outOfStock') return !item.inStock;
      return item.category.toLowerCase() === filterBy.toLowerCase();
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        case 'dateAdded': return new Date(b.dateAdded) - new Date(a.dateAdded);
        default: return 0;
      }
    });

  const categories = ['all', 'jewelry', 'watches', 'bags', 'accessories', 'fragrance'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Premium Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors duration-200 group">
                <ArrowLeft size={20} className="group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back</span>
              </button>
              <div className="flex items-center space-x-3">
                <Heart className="text-pink-600 fill-pink-600" size={24} />
                <h1 className="text-2xl font-light text-gray-900 tracking-wide">My Wishlist</h1>
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  {wishlistItems.length} Items
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-pink-600'
                  }`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-pink-600'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              >
                <option value="dateAdded">Recently Added</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>

              {/* Filter Dropdown */}
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              >
                <option value="all">All Categories</option>
                <option value="jewelry">Jewelry</option>
                <option value="watches">Watches</option>
                <option value="bags">Bags</option>
                <option value="accessories">Accessories</option>
                <option value="fragrance">Fragrance</option>
                <option value="inStock">In Stock</option>
                <option value="outOfStock">Out of Stock</option>
              </select>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedItems.length > 0 && (
            <div className="mt-4 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200/50 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-pink-700 font-medium">
                  {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
                </span>
                <div className="flex space-x-3">
                  <button
                    onClick={addSelectedToCart}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={removeSelectedItems}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {wishlistItems.length === 0 ? (
          // Empty State
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-16 text-center shadow-xl">
            <Heart className="mx-auto text-gray-400 mb-6" size={64} />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Start building your dream collection by adding items you love to your wishlist
            </p>
            <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-2xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 font-medium shadow-xl">
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Select All Option */}
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={selectAll}
                className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors duration-200"
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedItems.length === filteredItems.length 
                    ? 'bg-pink-500 border-pink-500' 
                    : 'border-gray-300 hover:border-pink-400'
                }`}>
                  {selectedItems.length === filteredItems.length && (
                    <Check size={12} className="text-white" />
                  )}
                </div>
                <span className="font-medium">
                  {selectedItems.length === filteredItems.length ? 'Deselect All' : 'Select All'}
                </span>
              </button>
              <span className="text-sm text-gray-500">
                Showing {filteredItems.length} of {wishlistItems.length} items
              </span>
            </div>

            {/* Items Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden ${
                    viewMode === 'list' ? 'flex items-center space-x-6 p-6' : 'p-6'
                  } ${selectedItems.includes(item.id) ? 'ring-2 ring-pink-500 ring-offset-2' : ''}`}
                >
                  {/* Selection Checkbox */}
                  <button
                    onClick={() => toggleSelection(item.id)}
                    className={`absolute top-4 left-4 z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      selectedItems.includes(item.id)
                        ? 'bg-pink-500 border-pink-500'
                        : 'bg-white/80 border-gray-300 hover:border-pink-400'
                    }`}
                  >
                    {selectedItems.includes(item.id) && (
                      <Check size={14} className="text-white" />
                    )}
                  </button>

                  {/* Product Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-32 h-32' : 'w-full h-64'} bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2">
                      {item.isNew && (
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          NEW
                        </span>
                      )}
                      {item.discount > 0 && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          -{item.discount}%
                        </span>
                      )}
                      {!item.inStock && (
                        <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                          <AlertCircle size={10} />
                          <span>Out of Stock</span>
                        </span>
                      )}
                    </div>

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-3">
                      <button
                        onClick={() => addToCart(item.id)}
                        disabled={!item.inStock}
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ShoppingCart size={20} className="text-green-600" />
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200">
                        <Eye size={20} className="text-blue-600" />
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200">
                        <Share2 size={20} className="text-purple-600" />
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : 'mt-4'} space-y-3`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Crown className="text-amber-500" size={14} />
                          <span className="text-xs text-gray-500 font-medium tracking-wide">{item.brand}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
                                className={`${i < item.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">({item.reviews})</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        ${item.price.toLocaleString()}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ${item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(item.id)}
                      disabled={!item.inStock}
                      className={`w-full py-3 rounded-2xl font-medium transition-all duration-300 ${
                        item.inStock
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl hover:shadow-green-500/25'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;