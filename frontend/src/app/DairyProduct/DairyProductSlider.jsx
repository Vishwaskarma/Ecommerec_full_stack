"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import fanta from '../../../public/drinks/fanta.png';
import maaza from '../../../public/drinks/maza.png';
import pepsi from '../../../public/drinks/pepesi.png';
import thumbsup from '../../../public/drinks/thumbsup.png';
import cock from '../../../public/drinks/cocka.png';
import sprite from '../../../public/drinks/sprite.png';

const SnacksSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate random rating (1 to 5) for each product
  const getRandomRating = () => Math.floor(Math.random() * 5) + 1;

  const beverages = [
    {
      "id": 1,
      "title": "Coca-Cola Original Taste",
      "quantity": "300 ml",
      "price": "₹30",
      "image": cock
    },
    {
      "id": 2,
      "title": "Pepsi Black Can",
      "quantity": "330 ml",
      "price": "₹35",
      "image": pepsi
    },
    {
      "id": 3,
      "title": "Sprite Lemon-Lime",
      "quantity": "500 ml",
      "price": "₹40",
      "image": sprite
    },
    {
      "id": 4,
      "title": "Fanta Orange",
      "quantity": "250 ml",
      "price": "₹25",
      "image": fanta
    },
    {
      "id": 5,
      "title": "Maaza Mango Drink",
      "quantity": "400 ml",
      "price": "₹35",
      "image": maaza
    },
    {
      "id": 6,
      "title": "Thums Up Strong Soda",
      "quantity": "300 ml",
      "price": "₹30",
      "image": thumbsup
    }
  ].map(product => ({
    ...product,
    rating: getRandomRating()
  }));

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === beverages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? beverages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white py-12 w-full font-['Work_Sans']">
      {/* Slider Section */}
      <div className="w-full px-[30px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Beverages</h2>
        
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
              {beverages.map((product) => (
                <div key={product.id} className="w-[calc(25%-10px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-10px)] lg:w-[calc(25%-10px)] flex-shrink-0">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="bg-gray-100 h-48 flex items-center justify-center mb-4 rounded-lg">
                      <Image 
                        src={product.image}
                        alt={product.title}
                        width={160}
                        height={160}
                        className="h-40 object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">{product.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.quantity}</p>
                    {/* Rating Display */}
                    <div className="flex items-center text-yellow-500 mb-2">
                      {/* {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'fill-none stroke-current'}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          stroke="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))} */}
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

export default SnacksSlider;