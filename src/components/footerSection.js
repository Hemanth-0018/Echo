import React from 'react';
import { Facebook, Twitter } from 'lucide-react'; // Example icons

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A061C]/80 backdrop-blur-sm border-t border-purple-900/50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <span className="text-sm text-gray-400">Echo © 2025</span>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            Terms
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            Feedback
          </a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-white">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}