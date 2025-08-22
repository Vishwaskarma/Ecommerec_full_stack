// "use client";

// import React, { useState } from 'react';
// import { 
//   Star, 
//   Heart, 
//   ShoppingCart, 
//   Plus, 
//   Minus, 
//   Share2, 
//   Shield, 
//   Truck, 
//   RotateCcw, 
//   Award,
//   CheckCircle,
//   Clock,
//   MapPin,
//   ChevronLeft,
//   ChevronRight
// } from 'lucide-react';

// const ProductDetail = () => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedColor, setSelectedColor] = useState('midnight');
//   const [selectedSize, setSelectedSize] = useState('44mm');
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');

//   const product = {
//     id: 1,
//     title: "Apple Watch Series 9",
//     category: "Smart Watch",
//     brand: "Apple",
//     price: "₹41,900",
//     originalPrice: "₹49,900",
//     discount: "16%",
//     savings: "₹8,000",
//     rating: 4.8,
//     reviews: 2341,
//     inStock: true,
//     stockCount: 12,
//     images: [
//       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop",
//       "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
//       "https://images.unsplash.com/photo-1510017098667-27dfc7150e7d?w=600&h=600&fit=crop",
//       "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=600&h=600&fit=crop"
//     ],
//     colors: [
//       { name: 'midnight', color: '#1a1a2e', label: 'Midnight' },
//       { name: 'starlight', color: '#f5f5dc', label: 'Starlight' },
//       { name: 'red', color: '#dc2626', label: 'Product Red' },
//       { name: 'blue', color: '#2563eb', label: 'Ocean Blue' }
//     ],
//     sizes: ['40mm', '44mm'],
//     features: [
//       "Advanced S9 SiP chip",
//       "Always-On Retina display",
//       "GPS + Cellular options",
//       "Water resistant to 50m",
//       "ECG & Blood Oxygen monitoring",
//       "Crash Detection"
//     ],
//     specifications: {
//       "Display": "Always-On Retina LTPO OLED",
//       "Chip": "S9 SiP with 64-bit dual-core processor",
//       "Storage": "64GB",
//       "Connectivity": "Wi-Fi, Bluetooth 5.3, GPS",
//       "Battery": "Up to 18 hours",
//       "Water Resistance": "50 meters"
//     }
//   };

//   const reviews = [
//     {
//       id: 1,
//       user: "Rahul S.",
//       rating: 5,
//       date: "2 weeks ago",
//       comment: "Excellent watch! The battery life is amazing and the health features are very accurate.",
//       verified: true
//     },
//     {
//       id: 2,
//       user: "Priya M.",
//       rating: 4,
//       date: "1 month ago",
//       comment: "Love the design and functionality. Only wish it was slightly cheaper.",
//       verified: true
//     },
//     {
//       id: 3,
//       user: "Arjun K.",
//       rating: 5,
//       date: "3 weeks ago",
//       comment: "Best smartwatch I've owned. The fitness tracking is spot on!",
//       verified: false
//     }
//   ];

//   const handleQuantityChange = (action) => {
//     if (action === 'increase') {
//       setQuantity(prev => Math.min(prev + 1, product.stockCount));
//     } else {
//       setQuantity(prev => Math.max(prev - 1, 1));
//     }
//   };

//   const nextImage = () => {
//     setSelectedImage((prev) => (prev + 1) % product.images.length);
//   };

//   const prevImage = () => {
//     setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-8 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
//           {/* Left Column - Images */}
//           <div className="space-y-4">
//             {/* Main Image */}
//             <div className="bg-white rounded-2xl border border-gray-200 p-8 relative overflow-hidden group">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Navigation arrows for main image */}
//               <button 
//                 onClick={prevImage}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
//               >
//                 <ChevronLeft className="w-5 h-5 text-gray-600" />
//               </button>
              
//               <button 
//                 onClick={nextImage}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-600" />
//               </button>

//               <div className="aspect-square flex items-center justify-center relative">
//                 <img 
//                   src={product.images[selectedImage]} 
//                   alt={product.title}
//                   className="max-w-full max-h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-300"
//                 />
                
//                 {/* Discount badge */}
//                 {product.discount && (
//                   <div className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-br-lg rounded-tl-2xl text-sm font-medium shadow-lg">
//                     {product.discount} OFF
//                   </div>
//                 )}
                
//                 {/* Wishlist button */}
//                 <button 
//                   onClick={() => setIsWishlisted(!isWishlisted)}
//                   className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
//                 >
//                   <Heart className={`w-5 h-5 transition-colors ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
//                 </button>
//               </div>
//             </div>

//             {/* Thumbnail Images */}
//             <div className="grid grid-cols-4 gap-4">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`bg-white rounded-xl border-2 p-3 aspect-square transition-all duration-300 hover:shadow-lg ${
//                     selectedImage === index ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-gray-300'
//                   }`}
//                 >
//                   <img 
//                     src={image} 
//                     alt={`${product.title} view ${index + 1}`}
//                     className="w-full h-full object-contain mix-blend-multiply"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Product Info */}
//           <div className="space-y-6">
            
//             {/* Header */}
//             <div>
//               <div className="flex items-center space-x-2 mb-2">
//                 <span className="inline-block text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
//                   {product.category}
//                 </span>
//                 <span className="text-sm text-gray-500">by {product.brand}</span>
//               </div>
              
//               <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
//                 {product.title}
//               </h1>
              
//               {/* Rating */}
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star 
//                       key={i}
//                       className={`w-5 h-5 ${
//                         i < Math.floor(product.rating) 
//                           ? 'text-yellow-400 fill-yellow-400' 
//                           : 'text-gray-300 fill-gray-300'
//                       }`}
//                     />
//                   ))}
//                   <span className="ml-2 text-lg font-semibold text-gray-900">{product.rating}</span>
//                 </div>
//                 <span className="text-gray-600">({product.reviews} reviews)</span>
//               </div>
//             </div>

//             {/* Price */}
//             <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <span className="text-3xl font-bold text-gray-900">{product.price}</span>
//                   {product.originalPrice && (
//                     <span className="text-lg text-gray-500 line-through ml-3">{product.originalPrice}</span>
//                   )}
//                   <div className="text-green-600 font-medium mt-1">
//                     You save {product.savings} ({product.discount})
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
//                     In Stock
//                   </div>
//                   <div className="text-sm text-gray-600 mt-1">
//                     Only {product.stockCount} left
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Options */}
//             <div className="space-y-6">
              
//               {/* Color Selection */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Color: {product.colors.find(c => c.name === selectedColor)?.label}</h3>
//                 <div className="flex space-x-3">
//                   {product.colors.map((color) => (
//                     <button
//                       key={color.name}
//                       onClick={() => setSelectedColor(color.name)}
//                       className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
//                         selectedColor === color.name 
//                           ? 'border-blue-500 shadow-lg scale-110' 
//                           : 'border-gray-300 hover:border-gray-400'
//                       }`}
//                       style={{ backgroundColor: color.color }}
//                       title={color.label}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Size Selection */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
//                 <div className="flex space-x-3">
//                   {product.sizes.map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-300 ${
//                         selectedSize === size 
//                           ? 'border-blue-500 bg-blue-50 text-blue-700' 
//                           : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quantity */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center border border-gray-300 rounded-lg bg-white">
//                     <button
//                       onClick={() => handleQuantityChange('decrease')}
//                       disabled={quantity === 1}
//                       className="p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="px-4 py-3 font-semibold text-lg min-w-[60px] text-center">{quantity}</span>
//                     <button
//                       onClick={() => handleQuantityChange('increase')}
//                       disabled={quantity === product.stockCount}
//                       className="p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <span className="text-gray-600">Max {product.stockCount} items</span>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-4">
//               <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
//                 <ShoppingCart className="w-5 h-5" />
//                 <span>Add to Cart</span>
//               </button>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
//                   <Heart className="w-4 h-4" />
//                   <span>Wishlist</span>
//                 </button>
//                 <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
//                   <Share2 className="w-4 h-4" />
//                   <span>Share</span>
//                 </button>
//               </div>
//             </div>

//             {/* Services */}
//             <div className="bg-gray-50 rounded-xl p-6 space-y-4">
//               <div className="flex items-center space-x-3">
//                 <Truck className="w-5 h-5 text-blue-600" />
//                 <div>
//                   <div className="font-medium text-gray-900">Free Delivery</div>
//                   <div className="text-sm text-gray-600">On orders above ₹999</div>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <RotateCcw className="w-5 h-5 text-green-600" />
//                 <div>
//                   <div className="font-medium text-gray-900">7 Days Return</div>
//                   <div className="text-sm text-gray-600">Easy return & exchange</div>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Shield className="w-5 h-5 text-purple-600" />
//                 <div>
//                   <div className="font-medium text-gray-900">1 Year Warranty</div>
//                   <div className="text-sm text-gray-600">Official brand warranty</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tabs Section */}
//         <div className="mt-12">
//           <div className="border-b border-gray-200">
//             <nav className="flex space-x-8">
//               {['description', 'specifications', 'reviews'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`py-4 px-1 border-b- 