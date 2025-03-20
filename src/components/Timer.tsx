
import React, { useEffect, useState } from 'react';
import { useTimer } from '../hooks/useTimer';

const Timer: React.FC = () => {
  const { time, distance, isRunning, start, stop } = useTimer(5.5);
  const [heartRate, setHeartRate] = useState(122);
  
  // Simulate fluctuating heart rate
  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setHeartRate(prev => {
          const fluctuation = Math.floor(Math.random() * 5) - 2; // -2 to +2
          return Math.max(100, Math.min(160, prev + fluctuation));
        });
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="cyber-card p-8 w-full max-w-md mx-auto flex flex-col items-center fade-in">
      {/* Timer Display */}
      <div className="text-cyber-neon text-7xl font-mono tracking-wider font-bold mb-8 animate-glow">
        {time}
      </div>
      
      {/* Distance */}
      <div className="mb-20 flex flex-col items-center">
        <div className="text-cyber-neon text-8xl font-mono font-bold mb-2 animate-glow">
          {distance.toFixed(1)}
        </div>
        <div className="text-cyber-dim uppercase tracking-widest font-mono text-xl">
          KILOMETERS
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="cyber-card bg-cyber-black/80 w-full p-4 mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-cyber-neon animate-pulse-neon mr-4"></div>
          <span className="text-cyber-dim uppercase tracking-wider text-xl font-mono">HR</span>
        </div>
        <div className="text-cyber-neon text-xl font-mono tracking-wider">
          {heartRate} <span className="text-cyber-dim">BPM</span>
        </div>
      </div>
      
      {/* Button */}
      <button 
        className={`w-full py-4 rounded-xl font-mono uppercase tracking-wider text-2xl transition-all duration-300 ${
          isRunning 
            ? "bg-cyber-dim/30 text-cyber-neon hover:bg-cyber-dim/40" 
            : "bg-cyber-dim text-cyber-black hover:bg-cyber-neon"
        }`}
        onClick={isRunning ? stop : start}
      >
        {isRunning ? "STOP" : "START"}
      </button>
    </div>
  );
};

export default Timer;
