import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Bell } from 'lucide-react';

// The corrected NavItem uses NavLink and relies on the router's state for highlighting.
const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    // NavLink's 'className' prop is a function that gives us the 'isActive' boolean
    className={({ isActive }) =>
      `relative px-4 py-3 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-white' // Active text is white
          : 'text-gray-400 hover:text-white' // Inactive text
      }`
    }
  >
    {({ isActive }) => (
      <>
        {children}
        {/* Active state underline and glow using Cyan color */}
        {isActive && (
          <span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00F0FF] shadow-[0_0_8px_rgba(0,240,255,0.7)]"
            aria-hidden="true"
          />
        )}
      </>
    )}
  </NavLink>
);

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A061C]/80 backdrop-blur-sm border-b border-purple-900/50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-2">
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-serif font-bold text-white">Echo</span>
          <div className="hidden md:flex items-center">
            {/* NavItem components use the 'to' prop for routing */}
            <NavItem to="/">Home</NavItem>
            <NavItem to="/moodsetter">Moodsetter</NavItem>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/help">Help</NavItem>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500/50 text-gray-300 hover:border-white transition-colors">
            <User size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}