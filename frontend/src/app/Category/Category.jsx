"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Smartphone, Tv, Headphones, Camera, Wind, Tablet, Monitor } from 'lucide-react';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Smart Watches",
      icon: Smartphone,
      count: 45,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "Latest wearable technology",
      featured: true
    },
    {
      id: 2,
      name: "Televisions",
      icon: Tv,
      count: 23,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      description: "4K, OLED & Smart TVs",
      featured: false
    },
    {
      id: 3,
      name: "Audio",
      icon: Headphones,
      count: 67,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      description: "Headphones & Speakers",
      featured: true
    },
    {
      id: 4,
      name: "Tablets",
      icon: Tablet,
      count: 34,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      description: "iPad & Android tablets",
      featured: false
    },
    {
      id: 5,
      name: "Cameras",
      icon: Camera,
      count: 29,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      description: "DSLR & Mirrorless",
      featured: true
    },
    {
      id: 6,
      name: "Air Conditioners",
      icon: Wind,
      count: 18,
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-50 to-green-50",
      description: "Split & Window ACs",
      featured: false
    },
    {
      id: 7,
      name: "Monitors",
      icon: Monitor,
      count: 42,
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      description: "Gaming & Professional",
      featured: false
    },
    {
      id: 8,
      name: "Gaming",
      icon: Zap,
      count: 56,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      description: "Console & PC Gaming",
      featured: true
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory?.id === category.id ? null : category);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-8 lg:py-12 w-full font-sans">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover our wide range of electronics across different categories. Find exactly what you're looking for.
          </p>
        </div>

        {/* Featured Categories Banner */}
        <div className="mb-8 lg:mb-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Zap className="w-5 h-5 text-yellow-500 mr-2" />
            Featured Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.filter(cat => cat.featured).map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className={`bg-gradient-to-br ${category.bgGradient} rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 text-sm">{category.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{category.count} products</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Categories Grid */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-6">All Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isHovered = hoveredCategory === category.id;
              const isSelected = selectedCategory?.id === category.id;
              
              return (
                <div
                  key={category.id}
                  className={`bg-white rounded-xl border transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 overflow-hidden group ${
                    isSelected ? 'border-blue-400 shadow-lg ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleCategoryClick(category)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Header with Icon */}
                  <div className={`bg-gradient-to-br ${category.bgGradient} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{category.name}</h3>
                          <p className="text-gray-600 text-sm">{category.description}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">{category.count}</span>
                      <span className="text-sm text-gray-500">products</span>
                    </div>
                    
                    {/* Progress bar showing relative popularity */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${(category.count / Math.max(...categories.map(c => c.count))) * 100}%` }}
                      />
                    </div>
                    
                    <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isSelected 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 group-hover:bg-gray-200'
                    }`}>
                      {isSelected ? 'Selected' : 'Browse'}
                    </button>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Category Details */}
        {selectedCategory && (
          <div className="mt-8 lg:mt-12 bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedCategory.gradient} rounded-xl flex items-center justify-center mr-4`}>
                  <selectedCategory.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCategory.name}</h3>
                  <p className="text-gray-600">{selectedCategory.description} • {selectedCategory.count} products available</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">{selectedCategory.count}</div>
                <div className="text-sm text-blue-700">Total Products</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">{Math.floor(selectedCategory.count * 0.3)}</div>
                <div className="text-sm text-green-700">On Sale</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">{Math.floor(selectedCategory.count * 0.15)}</div>
                <div className="text-sm text-purple-700">New Arrivals</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">{Math.floor(selectedCategory.count * 0.8)}</div>
                <div className="text-sm text-orange-700">In Stock</div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className={`bg-gradient-to-r ${selectedCategory.gradient} text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                Explore {selectedCategory.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;