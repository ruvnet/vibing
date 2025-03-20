
import { useState, useEffect, useCallback } from 'react';

interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  distance: number;
}

export const useTimer = (initialDistance: number = 0) => {
  const [state, setState] = useState<TimerState>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
    distance: initialDistance
  });

  const start = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: true }));
  }, []);

  const stop = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: false }));
  }, []);

  const reset = useCallback(() => {
    setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
      distance: 0
    });
  }, []);

  const incrementDistance = useCallback((amount: number = 0.1) => {
    setState(prev => ({
      ...prev,
      distance: parseFloat((prev.distance + amount).toFixed(1))
    }));
  }, []);

  // Update timer every second when running
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (state.isRunning) {
      interval = setInterval(() => {
        setState(prev => {
          let newSeconds = prev.seconds + 1;
          let newMinutes = prev.minutes;
          let newHours = prev.hours;
          
          if (newSeconds >= 60) {
            newSeconds = 0;
            newMinutes += 1;
          }
          
          if (newMinutes >= 60) {
            newMinutes = 0;
            newHours += 1;
          }
          
          // Randomly increment distance for simulation
          const newDistance = parseFloat((prev.distance + Math.random() * 0.05).toFixed(1));
          
          return {
            ...prev,
            seconds: newSeconds,
            minutes: newMinutes,
            hours: newHours,
            distance: newDistance
          };
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [state.isRunning]);

  const formattedTime = `${state.hours.toString().padStart(2, '0')}:${state.minutes.toString().padStart(2, '0')}:${state.seconds.toString().padStart(2, '0')}`;
  
  return {
    time: formattedTime,
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    isRunning: state.isRunning,
    distance: state.distance,
    start,
    stop,
    reset,
    incrementDistance
  };
};
