"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, Heart, Menu, X, LogOut, Settings, Package, UserCircle, Crown, Star, Gift, Sparkles } from 'lucide-react';

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate checking authentication status on component mount
  useEffect(() => {
    try {
      const userData = localStorage.getItem('user');
      if (userData && userData !== 'null' && userData !== 'undefined' && userData.trim() !== '') {
        const parsedUser = JSON.parse(userData);
        if (parsedUser && typeof parsedUser === 'object' && parsedUser.id) {
          setUser(parsedUser);
          setIsLoggedIn(true);
        } else {
          console.warn('Invalid user data structure, clearing localStorage');
          localStorage.removeItem('user');
          setUser(null);
          setIsLoggedIn(false);
        }
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      localStorage.removeItem('user');
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  // Update handleLogin function to remove avatar
  const handleLogin = () => {
    try {
      const mockUser = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        membershipLevel: 'Premium'
      };
      const userDataString = JSON.stringify(mockUser);
      localStorage.setItem('user', userDataString);
      setUser(mockUser);
      setIsLoggedIn(true);
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error('Error saving user data:', error);
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  // Update handleLogout function
  const handleLogout = () => {
    try {
      localStorage.removeItem('user');
      setUser(null);
      setIsLoggedIn(false);
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error('Error during logout:', error);
      setUser(null);
      setIsLoggedIn(false);
      setIsUserMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'HOME', href: '/', icon: Sparkles },
    { name: 'LUXURY', href: '/luxury', icon: Crown },
    { name: 'MENS', href: '/mens', icon: null },
    { name: 'WOMENS', href: '/womens', icon: null },
    { name: 'KIDS', href: '/kids', icon: null },
    { name: 'PERFUME', href: '/perfume', icon: null },
    { name: 'BAGS', href: '/bags', icon: null },
    { name: 'HOT OFFERS', href: '/offers', icon: Gift },
  ];

  return (
    <>
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="font-light tracking-wide">Free Shipping on Orders $100+</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Crown className="w-3 h-3 text-yellow-400" />
                <span className="font-light tracking-wide">Premium Members Get 20% Off</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-light tracking-wide">24/7 Support</span>
              <div className="w-px h-3 bg-white/30"></div>
              <span className="font-light tracking-wide">Track Order</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100/50'
      }`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-teal-100 to-green-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20 py-4">
            {/* Luxury Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    <span className="text-white text-xl font-bold tracking-wider">K</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                    <Crown className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300">
                    KANIDHI
                  </span>
                  <span className="text-xs text-gray-500 font-light tracking-widest -mt-1">
                    L U X U R Y  •  S T Y L E
                  </span>
                </div>
              </Link>
            </div>

            {/* Premium Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative group">
                <div
                  className={`flex items-center border-2 rounded-2xl bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-xl transition-all duration-500 shadow-lg ${
                    isSearchFocused 
                      ? 'border-green-500 shadow-xl shadow-green-500/25 scale-105' 
                      : 'border-gray-200 group-hover:border-gray-300 group-hover:shadow-xl'
                  }`}
                >
                  <div className="pl-6 pr-4 py-1">
                    <Search className={`w-5 h-5 transition-colors duration-300 ${
                      isSearchFocused ? 'text-green-500' : 'text-gray-400'
                    }`} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search luxury products, brands, categories..."
                    className="flex-1 px-2 py-3.5 text-sm bg-transparent outline-none font-light placeholder-gray-400 focus:placeholder-gray-300"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    aria-label="Search products"
                  />
                  <button className="m-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 font-medium">
                    <Search size={18} />
                  </button>
                </div>

                {/* Search Suggestions (appears on focus) */}
                {isSearchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-2xl p-4 z-50">
                    <div className="text-xs text-gray-500 font-medium mb-3 tracking-wide">TRENDING SEARCHES</div>
                    <div className="flex flex-wrap gap-2">
                      {['Luxury Watches', 'Designer Bags', 'Premium Perfumes', 'Fashion Jewelry'].map((term, index) => (
                        <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-lg text-xs font-medium cursor-pointer hover:from-green-100 hover:to-emerald-100 transition-colors duration-200">
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Premium Right Side Icons */}
            <div className="flex items-center space-x-8">
              {/* Account/User Menu */}
              <div className="relative">
                {isLoggedIn ? (
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex flex-col items-center group relative"
                    aria-label="User menu"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-2xl border-2 border-gradient-to-r from-green-500 to-emerald-500 p-0.5 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-xl flex items-center justify-center bg-gray-200">
                          <User size={20} className="text-gray-600" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-500 border-2 border-white rounded-full flex items-center justify-center">
                        <Crown className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-green-600 transition-colors duration-300 max-w-20 truncate">
                      {user?.name?.split(' ')[0] || 'User'}
                    </span>
                  </button>
                ) : (
                  <Link
                    href="/Login"
                    className="flex flex-col items-center group"
                    aria-label="Login"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:from-green-200 group-hover:to-emerald-200">
                      <User size={20} className="text-green-600 group-hover:text-green-700" />
                    </div>
                    <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-green-600 transition-colors duration-300">
                      Login
                    </span>
                  </Link>
                )}

                {/* Premium User Dropdown Menu */}
                {isLoggedIn && isUserMenuOpen && (
                  <div className="absolute right-0 mt-4 w-80 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 py-6 z-50 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-50"></div>
                    
                    {/* User Info Section */}
                    <div className="px-6 pb-6 border-b border-gray-200/50 relative">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-2xl border-2 border-gradient-to-r from-green-500 to-emerald-500 p-0.5 flex items-center justify-center bg-gray-200">
                            <User size={24} className="text-gray-600" />
                          </div>
                          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-1">
                            <Crown className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-900">{user?.name}</p>
                          <p className="text-sm text-gray-500">{user?.email}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg text-xs font-medium">
                              {user?.membershipLevel || 'Premium'}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-2 relative">
                      {[
                        { icon: UserCircle, label: 'My Profile', href: '/profile', color: 'text-green-600' },
                        { icon: Package, label: 'My Orders', href: '/orders', color: 'text-emerald-600' },
                        { icon: Heart, label: 'Wishlist', href: '/WishList', color: 'text-teal-600' },
                        { icon: Settings, label: 'Settings', href: '/settings', color: 'text-gray-600' }
                      ].map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-white/70 hover:text-gray-900 transition-all duration-200 group"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <item.icon size={18} className={`mr-4 ${item.color} group-hover:scale-110 transition-transform duration-200`} />
                          {item.label}
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Logout Button */}
                    <div className="border-t border-gray-200/50 pt-2 relative">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-6 py-3 text-sm text-red-600 hover:bg-red-50/70 transition-all duration-200 group"
                      >
                        <LogOut size={18} className="mr-4 group-hover:scale-110 transition-transform duration-200" />
                        Sign Out
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="flex flex-col items-center relative group"
                aria-label="Wishlist"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:from-green-200 group-hover:to-emerald-200 relative overflow-hidden">
                  <Heart size={20} className="text-green-600 group-hover:text-green-700 group-hover:fill-green-600 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-green-600 transition-colors duration-300">
                  Wishlist
                </span>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium shadow-lg">
                  3
                </span>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="flex flex-col items-center relative group"
                aria-label="Cart"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:from-teal-200 group-hover:to-green-200 relative overflow-hidden">
                  <ShoppingBag size={20} className="text-teal-600 group-hover:text-green-700 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-teal-600 transition-colors duration-300">
                  Cart
                </span>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-500 to-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium shadow-lg animate-pulse">
                  2
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:from-gray-200 hover:to-gray-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? 
                  <X size={20} className="text-gray-600" /> : 
                  <Menu size={20} className="text-gray-600" />
                }
              </button>
            </div>
          </div>

          {/* Premium Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-gray-200/50 shadow-2xl z-50">
              <div className="p-6 space-y-6">
                {/* Mobile Auth Section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-200/50">
                  {isLoggedIn ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-2xl border-2 border-green-300 flex items-center justify-center bg-gray-200">
                          <User size={24} className="text-gray-600" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-900">{user?.name}</p>
                          <p className="text-sm text-gray-600">{user?.email}</p>
                        </div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-2 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                      >
                        <LogOut size={20} />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link
                        href="/login"
                        className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-2xl text-center font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login to Your Account
                      </Link>
                      <Link
                        href="/register"
                        className="block w-full border-2 border-green-300 text-green-700 py-3 px-6 rounded-2xl text-center font-medium hover:bg-green-50 transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Create Account
                      </Link>
                    </div>
                  )}
                </div>

                {/* Navigation Items */}
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-4 text-lg font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 rounded-2xl transition-all duration-300 group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon && <item.icon size={20} className="mr-3 text-green-500 group-hover:scale-110 transition-transform duration-200" />}
                      {item.name}
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Mobile User Menu Items (when logged in) */}
                {isLoggedIn && (
                  <div className="border-t border-gray-200 pt-4 space-y-1">
                    {[
                      { icon: UserCircle, label: 'My Profile', href: '/profile' },
                      { icon: Package, label: 'My Orders', href: '/orders' },
                      { icon: Settings, label: 'Account Settings', href: '/settings' }
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-2xl transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon size={18} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
                        {item.label}
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Luxury Desktop Navigation Menu */}
        <div className="hidden md:block bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 backdrop-blur-xl border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center space-x-12 h-16">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 relative group py-2"
                >
                  {item.icon && <item.icon size={16} className="text-purple-500 group-hover:scale-110 transition-transform duration-200" />}
                  <span className="tracking-wide">{item.name}</span>
                  <span className="absolute inset-x-0 -bottom-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Demo Login Button (for testing) */}
      {!isLoggedIn && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleLogin}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium hover:scale-105 hover:shadow-purple-500/25"
          >
            ✨ Demo Login
          </button>
        </div>
      )}

      {/* Premium Backdrop */}
      {(isMobileMenuOpen || isUserMenuOpen) && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-black/30 via-purple-900/20 to-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsUserMenuOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Header;