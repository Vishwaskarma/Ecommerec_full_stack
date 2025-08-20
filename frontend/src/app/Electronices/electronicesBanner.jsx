"use client"
import React from 'react';

const ElectronicsBanner = () => {
  return (
    <div className="relative w-full h-[520px] overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      
      {/* Futuristic grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Animated tech elements */}
        <div className="absolute top-20 right-16 w-32 h-32 border-2 border-blue-400/30 rounded-lg rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-24 left-20 w-24 h-24 border border-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg blur-sm animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-16 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-2/3 left-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent backdrop-blur-[0.5px]"></div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center">
          
          {/* Left Content Section */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tech Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-blue-400/30">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <span className="font-semibold text-cyan-300 text-sm tracking-wide">TECH FORWARD</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4">
                <span className="block text-white">Smart</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  TECH
                </span>
                <span className="block text-slate-300 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">Revolution</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-lg">
                Discover cutting-edge electronics that redefine innovation. Premium quality meets 
                futuristic design in every product we deliver.
              </p>
            </div>

            {/* Tech Categories */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/50">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 font-medium text-sm">AI Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/50">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-purple-300 font-medium text-sm">5G Ready</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/50">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-blue-300 font-medium text-sm">Eco Smart</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-sm sm:text-base">Explore Tech</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/80 backdrop-blur-md text-cyan-300 font-semibold rounded-2xl shadow-lg border border-slate-700 hover:border-cyan-400 hover:bg-slate-700/80 transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm sm:text-base">View Deals</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Tech Showcase Section */}
          <div className="relative mt-8 lg:mt-0">
            {/* Central Tech Hub */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-indigo-800/80 to-purple-800/70 rounded-3xl shadow-2xl border-2 border-slate-600/50 backdrop-blur-lg"></div>
              
              {/* Inner tech core */}
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-indigo-900/60 backdrop-blur-xl border border-slate-500/40 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">1000+</h3>
                    <p className="text-slate-400 text-sm">Premium Devices</p>
                  </div>
                </div>
              </div>

              {/* Orbiting Tech Icons */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-800/90 rounded-lg shadow-lg animate-bounce delay-200 flex items-center justify-center border border-slate-600">
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>

              <div className="absolute bottom-4 right-8 w-14 h-14 bg-slate-800/90 rounded-lg shadow-lg animate-bounce delay-700 flex items-center justify-center border border-slate-600">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 bg-slate-800/90 rounded-lg shadow-md animate-bounce delay-1000 flex items-center justify-center border border-slate-600">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-2 7.465c.36.203.815.26 1.207.315.55.078 1.073-.36 1.073-.916v-.001c0-.32-.17-.613-.423-.797a2.5 2.5 0 01.143-4.502c.253-.184.423-.477.423-.797v-.001c0-.556-.522-.994-1.073-.916-.392.055-.846.112-1.207.315z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-slate-800/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-600">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-cyan-400">4.8⭐</div>
                <div className="text-xs text-slate-400">Customer Rating</div>
              </div>
            </div>

            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-slate-800/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-600">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-purple-400">2Hr</div>
                <div className="text-xs text-slate-400">Express Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Accent Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
      
      {/* Scanning beam effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform skew-x-12 translate-x-full animate-pulse opacity-70"></div>

      {/* Corner tech indicators */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-green-400 text-xs font-semibold tracking-wide">ONLINE</span>
      </div>

      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span className="text-cyan-400 text-xs font-semibold tracking-wide">24/7 SUPPORT</span>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ElectronicsBanner;