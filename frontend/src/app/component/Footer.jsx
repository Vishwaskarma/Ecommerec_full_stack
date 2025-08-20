"use client"

import React from 'react';
import { 
  ShoppingBag, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Linkedin,
  Heart,
  Award,
  Truck,
  Shield,
  CreditCard,
  ArrowRight,
  Star
} from 'lucide-react';

const EcommerceFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-['Work_Sans'] bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPgo8L2c+CjwvZz4KPHN2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
            <p className="text-green-100 text-xl max-w-2xl mx-auto">
              Get exclusive deals, latest trends, and insider news delivered straight to your inbox
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex rounded-2xl bg-white p-2 shadow-2xl">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:outline-none text-gray-700 placeholder-gray-500"
                />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold flex items-center gap-2 group">
                Subscribe
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-green-100 text-sm mt-3 text-center">
              Join 50,000+ subscribers and never miss our updates
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ShopMart</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your trusted partner for premium quality products. We bring you the best shopping experience with unmatched customer service and authentic products.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
                  { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
                  { icon: Youtube, href: '#', color: 'hover:text-red-600' },
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  'About Us',
                  'Contact Us',
                  'Track Your Order',
                  'Return & Exchange',
                  'Size Guide',
                  'Care Instructions',
                  'Gift Cards'
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Categories</h4>
              <ul className="space-y-4">
                {[
                  'Electronics',
                  'Fashion & Clothing',
                  'Home & Garden',
                  'Sports & Outdoors',
                  'Health & Beauty',
                  'Books & Media',
                  'Toys & Games'
                ].map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Get in Touch</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Visit Our Store</p>
                    <p className="text-gray-600 text-sm">123 Shopping Street, Commerce City, CC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Call Us</p>
                    <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Email Us</p>
                    <p className="text-gray-600 text-sm">support@shopmart.com</p>
                  </div>
                </div>
              </div>

              {/* Customer Rating */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">Based on 12,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-gray-200 pt-12 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
                { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
                { icon: Award, title: 'Quality Guarantee', desc: 'Certified products' },
                { icon: CreditCard, title: 'Easy Returns', desc: '30-day policy' }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">{feature.title}</h5>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Secure Payment Methods</h5>
                <div className="flex gap-3">
                  {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay', 'Stripe'].map((payment, index) => (
                    <div key={index} className="w-12 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs font-semibold text-gray-600">{payment.slice(0, 4)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <h5 className="font-semibold text-gray-900 mb-3">Download Our App</h5>
                <div className="flex gap-3">
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                    App Store
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <span>© {currentYear} ShopMart. Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                <span>for amazing shopping experience.</span>
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceFooter;