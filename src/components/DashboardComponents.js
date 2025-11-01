import React from 'react';
import { LayoutDashboard, CalendarDays, Filter, Settings } from 'lucide-react';

// You would import a chart library like 'recharts' or 'chart.js' here
// This is a static SVG placeholder for the design
const ChartPlaceholder = () => (
  <svg viewBox="0 0 300 150" className="w-full h-full">
    {/* Grid lines */}
    {[1, 2, 3, 4, 5].map(y => (
      <line key={y} x1="20" y1={130 - y * 20} x2="290" y2={130 - y * 20} stroke="#4B5563" strokeWidth="0.5" />
    ))}
    {/* Labels */}
    <text x="5" y="130" fill="#9CA3AF" fontSize="10">0</text>
    <text x="5" y="110" fill="#9CA3AF" fontSize="10">2</text>
    <text x="5" y="90" fill="#9CA3AF" fontSize="10">4</text>
    <text x="5" y="70" fill="#9CA3AF" fontSize="10">6</text>
    <text x="5" y="50" fill="#9CA3AF" fontSize="10">8</text>
    <text x="0" y="30" fill="#9CA3AF" fontSize="10">10</text>
    
    <text x="40" y="145" fill="#9CA3AF" fontSize="10">Mon</text>
    <text x="90" y="145" fill="#9CA3AF" fontSize="10">Tue</text>
    <text x="140" y="145" fill="#9CA3AF" fontSize="10">Wed</text>
    <text x="190" y="145" fill="#9CA3AF" fontSize="10">Thu</text>
    <text x="240" y="145" fill="#9CA3AF" fontSize="10">Fri</text>

    {/* Data Lines with Glow */}
    <defs>
      <filter id="glow-cyan">
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00F0FF" />
      </filter>
      <filter id="glow-magenta">
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FF00FF" />
      </filter>
    </defs>
    <path d="M 40 100 Q 70 50, 90 80 T 140 100 T 190 60 T 240 90 T 280 70" stroke="#00F0FF" fill="none" strokeWidth="2" style={{ filter: 'url(#glow-cyan)' }} />
    <path d="M 40 80 Q 70 110, 90 90 T 140 70 T 190 100 T 240 60 T 280 80" stroke="#FF00FF" fill="none" strokeWidth="2" style={{ filter: 'url(#glow-magenta)' }} />
  </svg>
);


// --- Components for Export ---

export function Sidebar() {
  const IconWrapper = ({ children, label }) => (
    <button className="group relative flex justify-center items-center w-12 h-12 text-gray-400 hover:text-[#00F0FF] transition-colors">
      {children}
      <span className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 
                       group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </button>
  );

  return (
    <aside className="fixed top-0 left-0 h-full w-20 pt-20 flex flex-col items-center 
                     bg-gray-900/40 backdrop-blur-sm border-r border-purple-900/50 z-40">
      <div className="flex flex-col space-y-4 mt-4">
        <IconWrapper label="Dashboard"><LayoutDashboard size={24} /></IconWrapper>
        <IconWrapper label="Date Range"><CalendarDays size={24} /></IconWrapper>
        <IconWrapper label="Filter Bins"><Filter size={24} /></IconWrapper>
        <IconWrapper label="Settings"><Settings size={24} /></IconWrapper>
      </div>
    </aside>
  );
}

export function MoodCard({ emotion, date, color, icon }) {
  const isCyan = color === 'cyan';
  const colorClasses = {
    border: isCyan ? 'border-[#00F0FF]' : 'border-[#FF00FF]',
    shadow: isCyan ? 'shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'shadow-[0_0_15px_rgba(255,0,255,0.3)]',
    tagBg: isCyan ? 'bg-cyan-500/30' : 'bg-fuchsia-500/30',
    tagText: isCyan ? 'text-cyan-300' : 'text-fuchsia-300',
  };

  return (
    <div className={`p-4 rounded-2xl bg-gray-900/40 border ${colorClasses.border} ${colorClasses.shadow} transition-all hover:shadow-lg`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`px-3 py-1 text-sm rounded-full ${colorClasses.tagBg} ${colorClasses.tagText}`}>
          {emotion}
        </span>
        <span className="text-4xl">{icon}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{date}</p>
      <button className={`w-full py-2 text-sm font-medium rounded-lg border ${colorClasses.border} 
                         text-white/80 hover:bg-white/10 transition-colors`}>
        View Playlist
      </button>
    </div>
  );
}

export function MoodFrequencyChart() {
  return (
    <div className="p-4 rounded-2xl bg-gray-900/40 border border-purple-500/50 h-64 flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-2">Mood Frequency</h3>
      <div className="flex-1">
        <ChartPlaceholder />
      </div>
    </div>
  );
}

export function ReflectionJournal() {
  return (
    <div className="p-4 rounded-2xl bg-gray-900/40 border border-purple-500/50 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-3">Reflection Journal</h3>
      <textarea
        placeholder="Write about your night..."
        className="w-full flex-1 bg-transparent border border-white/20 rounded-lg p-3 text-sm text-gray-300
                   placeholder-gray-500 resize-none focus:outline-none focus:border-[#00F0FF]"
      />
    </div>
  );
}

export function DashboardActions() {
  const ActionButton = ({ children }) => (
    <button className="px-4 py-2 text-sm text-gray-300 border border-gray-600 rounded-lg
                       hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors">
      {children}
    </button>
  );

  return (
    <div className="flex items-center justify-between">
      <ActionButton>Add Mood</ActionButton>
      <ActionButton>Export Data</ActionButton>
      <ActionButton>Contact Us</ActionButton>
    </div>
  );
}