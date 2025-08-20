"use client"
import React from 'react';

const DairyBanner = () => {
  return (
    <div className="relative w-full h-[520px] overflow-hidden bg-gradient-to-tr from-emerald-50 via-white to-amber-50">
      
      {/* Organic flowing background shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl animate-pulse" 
             style={{clipPath: 'ellipse(70% 80% at 30% 40%)'}}></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-yellow-200/40 to-orange-200/25 blur-3xl animate-pulse delay-1000"
             style={{clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)'}}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/15 rounded-full blur-2xl animate-pulse delay-700"></div>
        
        {/* Floating dairy elements */}
        <div className="absolute top-16 sm:top-20 right-8 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-white/80 rounded-full shadow-lg animate-bounce delay-300">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-70"></div>
          </div>
        </div>
        <div className="absolute bottom-16 sm:bottom-32 left-8 sm:left-16 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full shadow-md animate-bounce delay-1000">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>

      {/* Nature-inspired overlay pattern */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center">
          
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Brand Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-emerald-100">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="font-semibold text-emerald-700">Farm Fresh Promise</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4">
                <span className="block text-slate-800">Pure</span>
                <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent">
                  Dairy
                </span>
                <span className="block text-slate-700 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">Delivered Fresh</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg">
                From our family farm to your table. Experience the richest, creamiest dairy products 
                delivered fresh every morning with a commitment to sustainability and quality.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-emerald-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200/50">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-800 font-medium text-sm">Organic Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="text-blue-800 font-medium text-sm">Same Day Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200/50">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-700"></div>
                <span className="text-amber-800 font-medium text-sm">Local Sourced</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-sm sm:text-base">Start Shopping</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
              </button>
              
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-md text-slate-700 font-semibold rounded-2xl shadow-lg border border-slate-200 hover:bg-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a4 4 0 118 0v2M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5" />
                  </svg>
                  <span className="text-sm sm:text-base">Learn More</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Product Showcase Circle */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-green-100 rounded-full shadow-2xl border-4 border-white/60 backdrop-blur-md"></div>
              
              {/* Floating Product Icons */}
              <div className="absolute inset-8 rounded-full bg-white/40 backdrop-blur-lg border border-white/60 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Premium Quality</h3>
                    <p className="text-slate-600 text-sm">Fresh • Pure • Delicious</p>
                  </div>
                </div>
              </div>

              {/* Orbiting Product Items */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/90 rounded-full shadow-lg animate-bounce delay-200 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-4 right-8 w-14 h-14 bg-white/90 rounded-full shadow-lg animate-bounce delay-700 flex items-center justify-center">
                <div className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-md animate-bounce delay-1000 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-white/60">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-emerald-600">10k+</div>
                <div className="text-xs text-slate-600">Happy Families</div>
              </div>
            </div>

            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-white/60">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-blue-600">30min</div>
                <div className="text-xs text-slate-600">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400"></div>
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>
    </div>
  );
};

export default DairyBanner;