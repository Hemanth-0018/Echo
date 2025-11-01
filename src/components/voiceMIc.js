import React from 'react';
import { Mic } from 'lucide-react';

export default function VoiceInput() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white pt-20 pb-20 overflow-hidden">
      {/* Background Waveform */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-40">
        <svg
          viewBox="0 0 1000 400"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Animated Sine Wave 1 (Cyan) */}
          <path
            d="M 0 200 C 100 100, 150 100, 250 200 S 400 300, 500 200 S 600 100, 750 200 S 900 300, 1000 200"
            stroke="#00F0FF"
            fill="none"
            strokeWidth="2"
            className="animate-wave"
          />
          {/* Animated Sine Wave 2 (Magenta) */}
          <path
            d="M 0 200 C 100 300, 150 300, 250 200 S 400 100, 500 200 S 600 300, 750 200 S 900 100, 1000 200"
            stroke="#FF00FF"
            fill="none"
            strokeWidth="2"
            className="animate-wave-delay"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl font-light text-gray-200 mb-12">
          How are you feeling tonight?
        </h2>

        {/* Mic Button */}
        <div
          className="w-48 h-48 rounded-full bg-gray-900/60 backdrop-blur-md 
                     border-2 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.2)]
                     flex items-center justify-center cursor-pointer
                     hover:border-white/40 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all"
        >
          <Mic size={80} className="text-white opacity-90" />
        </div>

        {/* Text Input */}
        <input
          type="text"
          placeholder="Or type your emotion..."
          className="mt-12 w-80 px-6 py-3 bg-transparent border-2 border-white/30 rounded-full
                     text-center text-white placeholder-gray-400
                     focus:outline-none focus:border-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.5)]
                     transition-all"
        />

        {/* Detect Button */}
        <button
          className="mt-6 px-10 py-3 text-lg font-semibold text-white bg-transparent border-2 border-[#FF00FF] rounded-full
                     shadow-[0_0_15px_rgba(255,0,255,0.6)]
                     hover:bg-[#FF00FF]/20 hover:shadow-[0_0_25px_rgba(255,0,255,1)]
                     transition-all duration-300 transform hover:scale-105"
        >
          Detect My Mood
        </button>
      </div>
    </div>
  );
}