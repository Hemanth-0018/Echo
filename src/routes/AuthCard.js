import React, { useState } from 'react';

// --- Reusable Input Field Component ---
const GlowInput = ({ id, label, type = 'text', placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">
            {label}
        </label>
        <input
            id={id}
            name={id}
            type={type}
            required
            placeholder={placeholder}
            className="
                w-full px-4 py-2 bg-gray-800/80 border 
                border-gray-700 rounded-lg text-white 
                focus:outline-none 
                // Faint Teal Blue glow on focus
                focus:ring-1 focus:ring-[#00F0FF] 
                focus:shadow-[0_0_10px_rgba(0,240,255,0.7)]
            "
        />
    </div>
);

// --- Login Form ---
const LoginForm = () => (
    <form className="space-y-4 pt-4">
        <GlowInput id="email" label="Email Address" type="email" placeholder="user@echo.com" />
        <GlowInput id="password" label="Password" type="password" placeholder="••••••••" />
        
        <button
            type="submit"
            className="
                w-full flex justify-center py-2 px-4 mt-6 
                border border-transparent rounded-lg 
                text-sm font-medium 
                text-black bg-[#00F0FF] 
                hover:bg-cyan-300 transition duration-150 ease-in-out
                // Button glow effect
                shadow-[0_0_15px_rgba(0,240,255,0.7)]
            "
        >
            Log In
        </button>
    </form>
);

// --- Sign Up Form ---
const SignUpForm = () => (
    <form className="space-y-4 pt-4">
        <GlowInput id="username" label="Username" type="text" placeholder="EchoUser123" />
        <GlowInput id="email" label="Email Address" type="email" placeholder="user@echo.com" />
        <GlowInput id="password" label="Password" type="password" placeholder="••••••••" />
        
        <button
            type="submit"
            className="
                w-full flex justify-center py-2 px-4 mt-6 
                border border-transparent rounded-lg 
                text-sm font-medium 
                text-black bg-[#00F0FF] 
                hover:bg-cyan-300 transition duration-150 ease-in-out
                // Button glow effect
                shadow-[0_0_15px_rgba(0,240,255,0.7)]
            "
        >
            Create Account
        </button>
    </form>
);

// --- Authentication Card Component (Main Export) ---
export default function AuthCard() {
    const [isLogin, setIsLogin] = useState(true);

    const activeTabClasses = "border-[#00F0FF] text-[#00F0FF] shadow-[0_4px_10px_rgba(0,240,255,0.5)]";
    const inactiveTabClasses = "border-gray-700 text-gray-500 hover:text-gray-300";

    return (
        // Full page container, dark background
        <div className="flex items-center justify-center min-h-screen bg-[#0A061C] text-white">
            
            {/* Auth Card: Dark frosted glass with Teal Blue Glow */}
            <div className="
                w-full max-w-sm p-8 space-y-6 
                bg-gray-900/70 backdrop-blur-md 
                rounded-2xl shadow-2xl 
                border border-gray-700/50
                // Teal Blue glow border
                shadow-[0_0_20px_rgba(0,240,255,0.4)]
            ">
                
                {/* Title */}
                <h2 className="
                    text-3xl font-serif text-center 
                    text-white 
                    // Glowing white text
                    drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]
                ">
                    {isLogin ? 'Welcome Back' : 'Join Echo'}
                </h2>
                
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-700/50 mb-6">
                    <button
                        className={`flex-1 py-2 text-lg font-medium border-b-2 transition-all duration-300 ${
                            isLogin ? activeTabClasses : inactiveTabClasses
                        }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Log In
                    </button>
                    <button
                        className={`flex-1 py-2 text-lg font-medium border-b-2 transition-all duration-300 ${
                            !isLogin ? activeTabClasses : inactiveTabClasses
                        }`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Content */}
                {isLogin ? <LoginForm /> : <SignUpForm />}
                
                {/* Optional Footer Link */}
                <p className="text-center text-xs text-gray-500 pt-2">
                    Start tracking your mood under the same sky.
                </p>
            </div>
        </div>
    );
}