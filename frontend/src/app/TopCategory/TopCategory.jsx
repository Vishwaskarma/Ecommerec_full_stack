"use client"
import React, { useState, useEffect } from 'react';
import { 
  Grid3X3, Coffee, Home, Gamepad2, Leaf, Zap, Smartphone, Sparkles, Shirt,
  ChevronLeft, ChevronRight, Star, Heart, TrendingUp, Gift, Crown
} from 'lucide-react';

const TopCategoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState('Electronics');
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const categories = [
    {
      id: 'all',
      name: 'All',
      icon: Grid3X3,
      color: 'from-slate-600 to-slate-800',
      bgColor: 'from-slate-50 to-slate-100',
      emoji: '🛍️',
      count: '50K+',
      isNew: false,
      isHot: false
    },
    {
      id: 'cafe',
      name: 'Cafe',
      icon: Coffee,
      color: 'from-amber-600 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      emoji: '☕',
      count: '2.5K+',
      isNew: false,
      isHot: true
    },
    {
      id: 'home',
      name: 'Home',
      icon: Home,
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
      emoji: '🏠',
      count: '8.3K+',
      isNew: false,
      isHot: false
    },
    {
      id: 'toys',
      name: 'Toys',
      icon: Gamepad2,
      color: 'from-pink-600 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50',
      emoji: '🧸',
      count: '3.7K+',
      isNew: true,
      isHot: false
    },
    {
      id: 'fresh',
      name: 'Fresh',
      icon: Leaf,
      color: 'from-lime-600 to-green-600',
      bgColor: 'from-lime-50 to-green-50',
      emoji: '🥬',
      count: '1.2K+',
      isNew: false,
      isHot: true
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Zap,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      emoji: '⚡',
      count: '12K+',
      isNew: false,
      isHot: true
    },
    {
      id: 'mobiles',
      name: 'Mobiles',
      icon: Smartphone,
      color: 'from-purple-600 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
      emoji: '📱',
      count: '4.8K+',
      isNew: false,
      isHot: false
    },
    {
      id: 'beauty',
      name: 'Beauty',
      icon: Sparkles,
      color: 'from-fuchsia-600 to-pink-600',
      bgColor: 'from-fuchsia-50 to-pink-50',
      emoji: '💄',
      count: '6.1K+',
      isNew: true,
      isHot: false
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: Shirt,
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50',
      emoji: '👗',
      count: '15K+',
      isNew: false,
      isHot: true
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const scrollCategories = (direction) => {
    const container = document.getElementById('categories-container');
    const scrollAmount = 200;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    const container = document.getElementById('categories-container');
    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Elegant Top Navigation */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Navigation */}
          <div className="relative py-4">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollCategories('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 lg:hidden"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Categories Container */}
            <div
              id="categories-container"
              className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-12 lg:px-0 lg:justify-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => {
                const IconComponent = category.icon;
                const isActive = activeCategory === category.id;
                const isHovered = hoveredCategory === category.id;

                return (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    onMouseEnter={() => setHoveredCategory(category.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    className={`relative flex-shrink-0 cursor-pointer group transition-all duration-500 ${
                      isActive ? 'scale-105' : 'hover:scale-105'
                    }`}
                  >
                    {/* Badge Indicators */}
                    {category.isNew && (
                      <div className="absolute -top-2 -right-2 z-20">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                          NEW
                        </div>
                      </div>
                    )}
                    
                    {category.isHot && (
                      <div className="absolute -top-2 -right-2 z-20">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                          🔥 HOT
                        </div>
                      </div>
                    )}

                    {/* Main Category Card */}
                    <div
                      className={`relative min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] p-4 lg:p-6 rounded-2xl lg:rounded-3xl border-2 transition-all duration-500 ${
                        isActive
                          ? `border-transparent bg-gradient-to-br ${category.color} text-white shadow-2xl`
                          : `border-gray-200 bg-gradient-to-br ${category.bgColor} hover:border-gray-300 hover:shadow-xl`
                      }`}
                    >
                      {/* Floating Background Elements */}
                      <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl opacity-20 ${
                        isActive || isHovered ? 'animate-pulse' : ''
                      }`}>
                        <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/10 rounded-full"></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* Icon Container */}
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-white/20 backdrop-blur-sm'
                            : `bg-gradient-to-br ${category.color}`
                        } ${isHovered ? 'scale-110 rotate-12' : ''}`}>
                          <IconComponent className={`w-6 h-6 lg:w-8 lg:h-8 ${
                            isActive ? 'text-white' : 'text-white'
                          }`} />
                        </div>

                        {/* Emoji */}
                        <div className={`text-2xl lg:text-3xl mb-2 transition-all duration-300 ${
                          isHovered ? 'scale-125' : ''
                        }`}>
                          {category.emoji}
                        </div>

                        {/* Category Name */}
                        <div className={`font-bold text-sm lg:text-base mb-1 ${
                          isActive ? 'text-white' : 'text-gray-800'
                        }`}>
                          {category.name}
                        </div>

                        {/* Product Count */}
                        <div className={`text-xs lg:text-sm font-medium ${
                          isActive ? 'text-white/80' : 'text-gray-600'
                        }`}>
                          {category.count}
                        </div>

                        {/* Active Indicator */}
                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-white rounded-full"></div>
                        )}
                      </div>

                      {/* Hover Glow Effect */}
                      {isHovered && (
                        <div className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${category.color} opacity-10 animate-pulse`}></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollCategories('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 lg:hidden"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Active Category Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center mb-4">
            {(() => {
              const activeObj = categories.find(cat => cat.id === activeCategory);
              if (!activeObj) return null;
              const IconComponent = activeObj.icon;
              return (
                <>
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${activeObj.color} rounded-3xl flex items-center justify-center mr-4 animate-pulse`}>
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {activeObj.name}
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 mt-2">
                      {activeObj.count} Products Available
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Trending Products Card */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Trending Now</h3>
                <p className="text-gray-600">Hot picks this week</p>
              </div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mr-3"></div>
                    <div>
                      <div className="font-medium text-gray-800">Product {item}</div>
                      <div className="text-sm text-gray-600">⭐ 4.{8 + item}/5</div>
                    </div>
                  </div>
                  <Heart className="w-5 h-5 text-red-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Best Deals Card */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Best Deals</h3>
                <p className="text-gray-600">Save up to 70% off</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2">70% OFF</div>
                <div className="text-green-100">Limited Time Offer</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl text-center">
                  <div className="text-2xl font-bold text-green-600">50%</div>
                  <div className="text-xs text-green-700">Flash Sale</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl text-center">
                  <div className="text-2xl font-bold text-green-600">30%</div>
                  <div className="text-xs text-green-700">Daily Deal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Collection Card */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Premium</h3>
                <p className="text-gray-600">Luxury collection</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl text-center">
                <div className="flex items-center justify-center mb-2">
                  <Crown className="w-8 h-8 mr-2" />
                  <span className="text-xl font-bold">VIP</span>
                </div>
                <div className="text-purple-100">Exclusive Access</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600 mb-1">Free Shipping</div>
                  <div className="text-sm text-purple-700">+ Premium Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Shopping?
              </h2>
              <p className="text-blue-100 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
                Discover amazing products, unbeatable deals, and exceptional quality across all categories
              </p>
              <button className="bg-white text-blue-600 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Shop Now ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategoriesPage;