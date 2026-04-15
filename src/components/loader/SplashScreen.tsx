import React, { useEffect } from 'react';

const SplashScreen: React.FC = () => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Purple animated grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10 animate-slow-pan"></div>

      {/* Subtle purple noise overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-purple-700/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-purple-500/15 rounded-full blur-2xl animate-ping-slow"></div>

      {/* Main glass panel */}
      <div className="relative -z-10 flex flex-col items-center space-y-8 p-10 rounded-3xl  backdrop-blur-xl shadow-xl animate-fade-in">
        {/* Logo */}
        <div className="w-36 h-36 flex items-center justify-center">
          <img
            src="/logo_dark.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Loading animation */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-purple-800/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-transparent border-r-purple-300/70 rounded-full animate-spin-reverse"></div>
          </div>

          <h2 className="text-2xl md:text-3xl uppercase font-bold text-purple-700 tracking-widest animate-pulse">
            Initializing...
          </h2>

          {/* Progress dots */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-purple-700 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-700 rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-purple-700 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>

      {/* Cyber scan line */}
      <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-700 to-transparent animate-scan"></div>
    </div>
  );
};

export default SplashScreen;
