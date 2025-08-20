"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import watch from "../../../public/Electronices/watch.png"
import tv from "../../../public/Electronices/led.png"
import headphone from "../../../public/Electronices/headphone.jpg"
import tab from "../../../public/Electronices/tab.webp";
import camera from "../../../public/Electronices/camera.png"
import ac from "../../../public/Electronices/ac.png"

const ElectronicsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const electronicsProducts = [
    {
      "id": 1,
      "title": "Apple Watch Series 9",
      "category": "Smart Watch",
      "price": "₹41,900",
      "image":watch,
      "rating": 4.8
    },
    {
      "id": 2,
      "title": "Sony Bravia 4K OLED TV",
      "category": "Television",
      "price": "₹1,29,990",
      "image":tv,
      "rating": 4.7
    },
    {
      "id": 3,
      "title": "Bose QuietComfort Headphones",
      "category": "Audio",
      "price": "₹29,500",
      "image": headphone,
      "rating": 4.6
    },
    {
      "id": 4,
      "title": "Samsung Galaxy Tab S9",
      "category": "Tablet",
      "price": "₹72,999",
      "image": tab,
      "rating": 4.5
    },
    {
      "id": 5,
      "title": "Canon EOS R6 Mark II",
      "category": "Camera",
      "price": "₹1,89,995",
      "image": camera,
      "rating": 4.9
    },
    {
      "id": 6,
      "title": "LG 1Ton 5-Star AC",
      "category": "Air Conditioner",
      "price": "₹42,490",
      "image": ac,
      "rating": 4.4
    },

  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === electronicsProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? electronicsProducts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-50 py-8 w-full font-['Work_Sans']">
      <div className="w-full px-[30px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium Electronics</h2>
        
        <div className="relative w-[calc(100%-60px)] mx-auto">
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Product slider */}
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-[10px]"
              style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
              {electronicsProducts.map((product) => (
                <div key={product.id} className="w-[calc(25%-10px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-10px)] lg:w-[calc(25%-10px)] flex-shrink-0">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow h-full">
                    <div className="bg-gray-100 h-48 flex items-center justify-center mb-4 rounded-lg">
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        width={160}
                        height={160}
                        className="h-40 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <h3 className="font-medium text-gray-800 mb-1 mt-2 line-clamp-2">{product.title}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="font-bold text-gray-900">{product.price}</span>
                      <button className="bg-green-600 text-white px-4 py-1 rounded-md text-sm hover:bg-green-700 transition-colors">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsSlider;