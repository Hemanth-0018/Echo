import React from 'react';
import { Sidebar, MoodCard, MoodFrequencyChart, ReflectionJournal, DashboardActions } from './DashboardComponents';

// This is the main layout for the dashboard page
export default function Dashboard() {
  return (
    <div className="min-h-screen flex text-white pt-24 pb-20">
      <Sidebar />
      
      <main className="flex-1 ml-20 p-8 grid grid-cols-3 gap-6">
        {/* Column 1: Mood Cards */}
        <div className="col-span-1 flex flex-col gap-6">
          <MoodCard 
            emotion="Calm" 
            date="Mon, Feb 17, 2025" 
            color="cyan" 
            icon="😌" 
          />
          <MoodCard 
            emotion="Energetic" 
            date="Sun, Feb 16, 2023" 
            color="cyan" 
            icon="⚡" 
          />
          <button className="w-full py-2 bg-[#FF00FF] rounded-lg text-white font-semibold
                           hover:bg-opacity-80 shadow-[0_0_10px_rgba(255,0,255,0.5)] transition-all">
            Load More
          </button>
        </div>
        
        {/* Column 2: More Mood Cards */}
        <div className="col-span-1 flex flex-col gap-6">
          <MoodCard 
            emotion="Energetic" 
            date="Sun, Feb 16, 2023" 
            color="magenta" 
            icon="😠" 
          />
          <MoodCard 
            emotion="Reflective" 
            date="Sun, Feb 11, 2025" 
            color="magenta" 
            icon="🤔" 
          />
        </div>
        
        {/* Column 3: Chart and Journal */}
        <div className="col-span-1 flex flex-col gap-6">
          <MoodFrequencyChart />
          <ReflectionJournal />
          <DashboardActions />
        </div>
      </main>
    </div>
  );
}