import React from 'react';
// 💡 REQUIRED: Import useNavigate for routing
import { useNavigate } from 'react-router-dom'; 

// Reusable MoodBubble component (Unchanged)
function MoodBubble({ color, label, glowColor }) {
  // Tailwind doesn't support dynamic classes well,
  // so we use inline styles for the dynamic colors.
  const style = {
    backgroundColor: `${color}80`, // 80 = 50% opacity
    borderColor: color,
    boxShadow: `0 0 15px ${glowColor || color}80`,
  };
  
  const hoverStyle = {
     boxShadow: `0 0 25px ${glowColor || color}`
  };

  return (
    <div className="flex flex-col items-center space-y-2 group">
      <button
        className="w-20 h-20 rounded-full border-2 transition-all duration-300 ease-in-out transform group-hover:scale-110"
        style={style}
        onMouseOver={e => e.currentTarget.style.boxShadow = hoverStyle.boxShadow}
        onMouseOut={e => e.currentTarget.style.boxShadow = style.boxShadow}
      >
        {/* Icon could go here */}
      </button>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}

// 💡 MODIFIED: Removed the onStartJourney prop
export default function LandingPage() { 
  // Initialize navigation hook
  const navigate = useNavigate();

  // Handler to redirect to the authentication page
  const handleStartJourney = () => {
    navigate('/auth'); // Redirects the user to a route where AuthCard is rendered
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white pt-20 pb-20">
      <h1 className="text-8xl md:text-9xl font-serif text-white animate-pulse-slow">
        Echo
      </h1>
      <p className="mt-4 text-xl text-gray-300">
        Where Emotions Meet Sound.
      </p>

      <button
        onClick={handleStartJourney} // 💡 MODIFIED: Use the new handler
        className="mt-12 px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-[#00F0FF] rounded-full
                   shadow-[0_0_20px_rgba(0,240,255,0.6)]
                   hover:bg-[#00F0FF]/20 hover:shadow-[0_0_30px_rgba(0,240,255,1)]
                   transition-all duration-300 transform hover:scale-105"
      >
        Start My Mood Journey
      </button>

      <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10 px-4">
        <MoodBubble color="#EF4444" label="Joyful" /> {/* red-500 */}
        <MoodBubble color="#3B82F6" label="Calm" /> {/* blue-500 */}
        <MoodBubble color="#00F0FF" label="Sad" glowColor="#00F0FF" /> {/* Cyan */}
        <MoodBubble color="#EC4899" label="Energetic" /> {/* pink-500 */}
        <MoodBubble color="#FF00FF" label="Reflective" glowColor="#FF00FF" /> {/* Magenta */}
      </div>
      <p className="mt-8 text-gray-400">
        Your feelings. Your colors. Your sound.
      </p>
    </div>
  );
}