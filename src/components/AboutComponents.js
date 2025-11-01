import React from 'react';
// Import Chart.js components and utilities
import { Chart as ChartJS, ArcElement, RadialLinearScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register the required Chart.js elements
ChartJS.register(ArcElement, RadialLinearScale);


// --- STEP CARD COMPONENT (Unchanged) ---
export const StepCard = ({ title, icon }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-28 h-28 rounded-2xl bg-gray-900/60 flex items-center justify-center 
                   border-2 border-purple-600/70 
                   shadow-[0_0_20px_rgba(192,38,211,0.5)] mb-3">
      <span className="text-5xl">{icon}</span>
    </div>
    <h4 className="text-lg font-semibold text-white">{title}</h4>
  </div>
);


// --- Chart.js Plugin to draw Mood Labels inside the arcs ---
const moodLabelPlugin = {
  id: 'moodLabelPlugin',
  afterDraw: (chart) => {
    const { ctx, data } = chart;
    ctx.save();
    
    // Get the mood names, which were passed in the dataset's labels array
    const moodNames = data.datasets[0].labels; 

    chart.getDatasetMeta(0).data.forEach((arc, index) => {
      // 1. Calculate the center point of the arc
      // Get mid angle
      const midAngle = (arc.startAngle + arc.endAngle) / 2;
      // Define a radius for the text (halfway between cutout and outer edge)
      const outerRadius = arc.outerRadius;
      const innerRadius = arc.innerRadius;
      // 55% out from the center
      const midRadius = innerRadius + (outerRadius - innerRadius) * 0.55; 

      // Calculate the (x, y) coordinates for the text
      const x = arc.x + midRadius * Math.cos(midAngle);
      const y = arc.y + midRadius * Math.sin(midAngle);
      
      // 2. Configure and draw the text
      // 🎨 MODIFIED: Set fillStyle to white for the text color
      ctx.fillStyle = 'white'; 
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '10px sans-serif'; 

      // The chart rotation is -90deg (Math.PI / -2) by default, so we rotate text back
      // and align it with the arc.
      ctx.translate(x, y);
      ctx.rotate(midAngle + Math.PI / 2); // Rotate to align with the arc
      ctx.fillText(moodNames[index].name, 0, 0);
      ctx.restore();
      ctx.save(); // Restore and save for the next arc
    });
  }
};


// --- CIRCULAR MOOD CHART COMPONENT (Using Chart.js) ---
export const MoodChart = () => {
  // 1. Define the mood data
  const moods = [
    { name: 'Joyful', color: '#F87171', angle: 90 },
    { name: 'Calm', color: '#22D3EE', angle: 45 },
    { name: 'Energetic', color: '#A855F7', angle: 0 },
    { name: 'Reflective', color: '#D946EF', angle: 315 },
    { name: 'Listless', color: '#EC4899', angle: 270 },
    { name: 'Stolid', color: '#3B82F6', angle: 225 },
    { name: 'Vibrant', color: '#2DD4BF', angle: 180 }, 
    { name: 'Playful', color: '#FB923C', angle: 135 },
  ];
  
  const sortedMoods = moods.sort((a, b) => b.angle - a.angle);
  
  // 2. Prepare data for Chart.js
  const chartData = {
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1], // 8 equal segments
        backgroundColor: sortedMoods.map(mood => mood.color),
        borderWidth: 0,
        // Pass the names and colors to the plugin via a custom 'labels' property
        labels: sortedMoods.map(mood => ({ name: mood.name, color: mood.color })),
      },
    ],
  };

  // 3. Configure Chart.js options
  const chartOptions = {
    cutout: '56%', 
    rotation: 90, 
    circumference: 360,
    plugins: {
      legend: { display: false },
      tooltip: { display: false },
    },
  };

  return (
    <div 
      className="w-72 h-72 relative flex items-center justify-center"
      style={{
        filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.3))'
      }}
    >
      
      {/* 1. The Chart.js Canvas */}
      <Doughnut 
        data={chartData} 
        options={chartOptions} 
        plugins={[moodLabelPlugin]} // Register the custom plugin here
      />
        
      {/* 2. The Donut Hole Overlay (unchanged) */}
      <div 
        className="absolute rounded-full bg-[#0A061C]"
        style={{
          top: '22%', 
          left: '22%', 
          right: '22%', 
          bottom: '22%',
        }}
      ></div>
    </div>
  );
};