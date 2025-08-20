'use client';

import { useState } from 'react';
import { Minus, Plus, Trash2, Heart, ArrowLeft, ShoppingBag, Shield, Truck, RefreshCw, Crown, Star, Gift } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Luxury Swiss Watch',
      brand: 'Rolex Submariner',
      price: 8500,
      originalPrice: 9000,
      quantity: 1,
      image: '/api/placeholder/200/200?text=Rolex+Watch',
      color: 'Gold',
      size: '42mm',
      inStock: true,
      rating: 5,
      discount: 6
    },
    {
      id: 2,
      name: 'Designer Leather Handbag',
      brand: 'Louis Vuitton',
      price: 2400,
      originalPrice: 2600,
      quantity: 2,
      image: '/api/placeholder/200/200?text=LV+Bag',
      color: 'Brown',
      size: 'Medium',
      inStock: true,
      rating: 5,
      discount: 8
    },
    {
      id: 3,
      name: 'Premium Diamond Necklace',
      brand: 'Tiffany & Co',
      price: 5200,
      originalPrice: 5500,
      quantity: 1,
      image: '/api/placeholder/200/200?text=Diamond+Necklace',
      color: 'White Gold',
      size: '18 inch',
      inStock: false,
      rating: 5,
      discount: 5
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const moveToWishlist = (id) => {
    removeItem(id);
    // Add to wishlist logic here
  };

  const applyPromoCode = () => {
    if (promoCode === 'LUXURY10') {
      setAppliedPromo({ code: 'LUXURY10', discount: 10 });
    } else if (promoCode === 'PREMIUM20') {
      setAppliedPromo({ code: 'PREMIUM20', discount: 20 });
    }
    setPromoCode('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const promoDiscount = appliedPromo ? (subtotal * appliedPromo.discount / 100) : 0;
  const shipping = subtotal > 5000 ? 0 : 50;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal - promoDiscount + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Elegant Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200 group">
                <ArrowLeft size={20} className="group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Continue Shopping</span>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <ShoppingBag className="text-green-600" size={24} />
              <h1 className="text-2xl font-light text-gray-900 tracking-wide">Shopping Cart</h1>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                {cartItems.length} Items
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="w-full md:w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-2xl">
                          <span className="text-white font-medium bg-red-500 px-3 py-1 rounded-full text-sm">
                            Out of Stock
                          </span>
                        </div>
                      )}
                      {item.discount > 0 && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          -{item.discount}%
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Crown className="text-amber-500" size={16} />
                          <span className="text-sm text-gray-500 font-medium tracking-wide">{item.brand}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="bg-gray-100 px-3 py-1 rounded-full">Color: {item.color}</span>
                          <span className="bg-gray-100 px-3 py-1 rounded-full">Size: {item.size}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={`${i < item.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({item.rating}.0)</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => moveToWishlist(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                          aria-label="Move to wishlist"
                        >
                          <Heart size={18} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-gray-900">
                            ${item.price.toLocaleString()}
                          </span>
                          {item.originalPrice > item.price && (
                            <span className="text-lg text-gray-400 line-through">
                              ${item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-green-600 font-medium">
                          You save ${((item.originalPrice - item.price) * item.quantity).toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-300 rounded-2xl bg-white/80 backdrop-blur-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-l-2xl transition-all duration-200"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-6 py-3 font-medium text-gray-900 min-w-[60px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-r-2xl transition-all duration-200"
                            disabled={!item.inStock}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-900">
                            ${(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-12 text-center">
                <ShoppingBag className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some luxury items to your cart to get started</p>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium">
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            {/* Promo Code */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Gift className="text-green-500 mr-2" size={20} />
                Promo Code
              </h3>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white/80 backdrop-blur-sm"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromo && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center justify-between">
                    <span className="text-green-700 font-medium">{appliedPromo.code} Applied</span>
                    <span className="text-green-600 font-semibold">-{appliedPromo.discount}%</span>
                  </div>
                )}
                <div className="space-y-1 text-xs text-gray-500">
                  <p>Try: LUXURY10 (10% off) or PREMIUM20 (20% off)</p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toLocaleString()}</span>
                </div>
                
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Promo Discount</span>
                    <span className="font-medium">-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center">
                    <Truck size={16} className="mr-1" />
                    Shipping
                  </span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-semibold text-gray-900">
                    <span>Total</span>
                    <span className="text-green-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-green-500/25">
                Proceed to Checkout
              </button>

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Shield className="text-green-500" size={20} />
                  <span className="text-xs text-gray-500 font-medium">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Truck className="text-green-500" size={20} />
                  <span className="text-xs text-gray-500 font-medium">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <RefreshCw className="text-green-500" size={20} />
                  <span className="text-xs text-gray-500 font-medium">Easy Returns</span>
                </div>
              </div>
            </div>

            {/* Recommended Products */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">You might also like</h3>
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-2xl transition-colors duration-200 cursor-pointer">
                    <img
                      src={`/api/placeholder/60/60?text=Product+${item}`}
                      alt="Recommended product"
                      className="w-15 h-15 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">Premium Item {item}</h4>
                      <p className="text-green-600 font-semibold text-sm">$299</p>
                    </div>
                    <Plus className="text-green-500 hover:text-green-600" size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;