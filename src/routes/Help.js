import React from 'react';
// Import Sidebar, assuming it's exported from your DashboardComponents.js
import { Sidebar } from '../components/DashboardComponents'; 

// --- CHATBOT HELP COMPONENT (Teal Blue Aesthetic) ---
const ChatbotHelp = () => {
    return (
        // Chatbot Card (Central Focus: Dark Frosted Glass with Teal Blue Glow)
        <div className="
            relative w-full max-w-2xl mx-auto 
            bg-gray-900/70 backdrop-blur-md 
            rounded-2xl p-6 shadow-2xl 
            border border-gray-700/50
            // Thin, continuous Teal Blue glow border
            shadow-[0_0_20px_rgba(0,240,255,0.4)]
        ">
            
            {/* Header: "Echo Assist" - Simple, centered, glowing white text */}
            <h2 className="
                text-3xl font-serif text-center mb-6 
                text-white 
                // Teal Blue Glow on text
                drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]
            ">
                Echo Assist Help Center 🤖
            </h2>

            <div className="space-y-6">
                
                {/* Section 1: Interaction */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#00F0FF] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                        💬 Interacting with Echo
                    </h3>
                    <p className="text-gray-300 mb-4">
                        Be **clear and direct** with your questions. Echo remembers the context within the current chat session.
                    </p>
                    
                    <ul className="list-disc list-inside text-gray-400 pl-4 space-y-2">
                        <li>**Specify Format:** Ask for lists, summaries, or steps.</li>
                        <li>**Follow-Up:** Use the current chat for continuous, related topics.</li>
                    </ul>
                </div>

                <hr className="border-gray-700/50" />

                {/* Section 2: Interface Components */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#00F0FF] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                        ⚙️ Chat Interface Visuals
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left text-gray-400 border-collapse">
                            <thead className="text-xs uppercase bg-gray-800/50 text-[#00F0FF]">
                                <tr>
                                    <th scope="col" className="px-3 py-2 border-b border-gray-700/50">Item</th>
                                    <th scope="col" className="px-3 py-2 border-b border-gray-700/50">Aesthetic/Behavior</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-transparent border-b border-gray-800">
                                    <td className="px-3 py-2 font-medium text-white">Bot Messages</td>
                                    <td className="px-3 py-2">Light gray bubbles (left); text glows **Teal Blue**.</td>
                                </tr>
                                <tr className="bg-transparent border-b border-gray-800">
                                    <td className="px-3 py-2 font-medium text-white">Input Bar</td>
                                    <td className="px-3 py-2">Sleek, dark field with **faint Teal Blue glow** border.</td>
                                </tr>
                                <tr className="bg-transparent border-b border-gray-800">
                                    <td className="px-3 py-2 font-medium text-white">Send Icon</td>
                                    <td className="px-3 py-2">Minimalist icon, **glowing Teal Blue**.</td>
                                </tr>
                                <tr className="bg-transparent border-b border-gray-800">
                                    <td className="px-3 py-2 font-medium text-white">AI Indicator</td>
                                    <td className="px-3 py-2">"Echo is typing..." or "...", **glowing Teal Blue**.</td>
                                </tr>
                                <tr className="bg-transparent">
                                    <td className="px-3 py-2 font-medium text-white">Scrollbar</td>
                                    <td className="px-3 py-2">Thin, almost invisible **Teal Blue** scrollbar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="border-gray-700/50" />

                {/* Section 3: Troubleshooting */}
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#00F0FF] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                        ⚠️ Troubleshooting
                    </h3>
                    <ul className="list-disc list-inside text-gray-400 pl-4 space-y-2">
                        <li>**Inaccurate Information:** Verify critical facts. All AI can make errors.</li>
                        <li>**Lost Context:** Start a new chat if the topic changes completely.</li>
                        <li>**Response Cut Off:** Type "**Continue**" to prompt Echo to finish its reply.</li>
                    </ul>
                </div>
            </div>

            {/* Footer Text */}
            <p className="text-xs text-gray-500 text-center mt-6">
                For urgent issues, please refresh the interface.
            </p>
        </div>
    );
};

// Main Export Component (Page Wrapper)
export default function HelpPage() {
    return (
        // min-h-[calc(100vh-140px)] ensures content fills space between header and footer
        <div className="min-h-[calc(100vh-140px)] flex text-white pt-24 pb-20">
            
            {/* 1. Sidebar - Reused from Dashboard */}
            <Sidebar />
            
            {/* 2. Main Content Area - Offset by the Sidebar's width (ml-20) */}
            <main className="flex-1 ml-20 p-8 max-w-5xl mx-auto">
                <ChatbotHelp />
            </main>
        </div>
    );
}