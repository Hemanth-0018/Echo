import React from 'react';
// Import the updated components
import { StepCard, MoodChart } from '../components/AboutComponents'; 

export default function About() {
  return (
    // Removed min-h calc, assuming header/footer handle padding (pt-24, pb-20)
    <div className="flex flex-col text-white pt-24 pb-20">
      
      {/* REMOVED: Sidebar component is not in the target image.
      */}
      
      {/* 2. Main Content Area - Centered layout */}
      <main className="flex-1 p-8 max-w-5xl mx-auto text-center">
        
        {/* Title and Intro Section - Updated text from image */}
        <h1 className="text-5xl font-serif text-white mb-6">
          Echo listens. Echo understand. Echo connects.
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          The inqestion be is sme ewil the pod sus epting the mosinols moc the deming 
          slowslnd ins sonent. ousledl aro line your linood this at the deas to the 
          tinippstect the peiecls.
        </p>

        {/* How It Works Section - Centered */}
        <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-8 text-white">How It Works</h2>
            
            {/* How It Works Diagram 
              - Uses updated StepCard component
              - Omits the complex curved lines from image for simplicity
            */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 relative">
                <StepCard icon="🎙️" title="Input" />
                <StepCard icon="🧠" title="Detect" />
                <StepCard icon="💬" title="Reflect" />
            </div>
        </div>
        
        {/* Mood Chart Section - Placed below "How It Works" */}
        <div className="flex flex-col items-center justify-center p-4 mt-16">
            <MoodChart />
        </div>

        
      </main>
    </div>
  );
}