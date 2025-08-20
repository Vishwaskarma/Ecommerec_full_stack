"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import choclate from "../../../public/snacks/choclate.png"
import millet from "../../../public/snacks/milletflour.png"
import cheese from "../../../public/snacks/cheese.png"
import pringles from "../../../public/snacks/pringles.png"
import Noogan from "../../../public/snacks/nogan.png"

const SnacksSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const snacksProducts = [
    {
      "id": 1,
      "title": "Beanty Dark Chocolate Spread with Breadsticks",
      "weight": "52 g",
      "price": "₹99",
      "originalPrice": "₹150",
      "image": choclate
    },
    {
      "id": 2,
      "title": "Lol Foods Gluten Free Millet flour",
      "weight": "75 g",
      "price": "₹99",
      "image": millet
    },
    {
      "id": 3,
      "title": "Kab's Jackpot Cheese Balls",
      "weight": "60 g",
      "price": "₹65",
      "image": cheese
    },
    {
      "id": 4,
      "title": "Pringles Original Potato Chips - Pack of 2",
      "weight": "2 x 107 g",
      "price": "₹213",
      "originalPrice": "₹250",
      "image":pringles
    },

    {
      "id": 6,
      "title": "Noogan Flavour",
      "weight": "75 g",
      "price": "₹139",
      "image": Noogan
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === snacksProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? snacksProducts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white py-8 w-full font-['Work_Sans']">
      <div className="w-full px-[30px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Snacks</h2>
        
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
              {snacksProducts.map((product) => (
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
                    <h3 className="font-medium text-gray-800 mb-1">{product.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.weight}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                      )}
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

export default SnacksSlider;