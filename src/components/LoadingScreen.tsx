
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

interface LoadingMessage {
  message: string;
  delay: number;
}

const loadingMessages: LoadingMessage[] = [
  { message: "RUVIX OS1.9z SYSTEM BOOT SEQUENCE INITIALIZING...", delay: 800 },
  { message: "LOADING KERNEL MODULES...", delay: 1200 },
  { message: "INITIALIZING NEURAL PATTERN RECOGNITION...", delay: 1500 },
  { message: "LOADING HEURISTIC DECISION MATRIX v2.4...", delay: 1800 },
  { message: "CALIBRATING AGENT RESPONSE PROTOCOLS...", delay: 2000 },
  { message: "ESTABLISHING CYBERSPACE UPLINK...", delay: 2200 },
  { message: "LOADING PERSONALITY MATRIX...", delay: 2500 },
  { message: "MOUNTING KNOWLEDGE BASE SECTORS...", delay: 2800 },
  { message: "CHECKING MEMORY INTEGRITY...", delay: 3100 },
  { message: "PREPARING INTERFACE SUBSYSTEMS...", delay: 3300 },
  { message: "SYSTEM READY...", delay: 3600 }
];

interface LoadingScreenProps {
  open: boolean;
  onComplete?: () => void;
}

const LoadingScreen = ({ open, onComplete }: LoadingScreenProps) => {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (!open) {
      setVisibleMessages([]);
      setProgress(0);
      setLoadingComplete(false);
      return;
    }
    
    // Reset states when opened
    setVisibleMessages([]);
    setProgress(0);
    setLoadingComplete(false);
    
    let currentMessageIndex = 0;
    
    // Function to add messages one by one
    const addNextMessage = () => {
      if (currentMessageIndex < loadingMessages.length) {
        const currentMsg = loadingMessages[currentMessageIndex];
        
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, currentMsg.message]);
          
          // Update progress based on how many messages have been shown
          const newProgress = Math.floor(((currentMessageIndex + 1) / loadingMessages.length) * 100);
          setProgress(newProgress);
          
          currentMessageIndex++;
          
          // If we've shown the last message, mark as complete after a short delay
          if (currentMessageIndex === loadingMessages.length) {
            setTimeout(() => {
              setLoadingComplete(true);
              if (onComplete) {
                setTimeout(onComplete, 800);
              }
            }, 1000);
          } else {
            addNextMessage();
          }
        }, currentMsg.delay);
      }
    };
    
    // Start the sequence
    addNextMessage();
  }, [open, onComplete]);

  return (
    <Dialog open={open} modal>
      <DialogContent className="bg-cyber-black border-[#33FF00]/30 p-6 max-w-md mx-auto font-micro text-[#33FF00] dot-matrix-container">
        <div className="flex flex-col space-y-4">
          <div className="text-center text-lg tracking-widest border-b border-[#33FF00]/30 pb-2 mb-2">
            RUVIX OS1.9z
          </div>
          
          <div className="h-48 md:h-64 overflow-y-auto mb-4 text-xs">
            {visibleMessages.map((message, index) => (
              <div key={index} className="mb-1 fade-in">
                {"> "}{message}
              </div>
            ))}
            {!loadingComplete && <span className="blink-text">_</span>}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>LOADING SYSTEM</span>
              <span>{progress}%</span>
            </div>
            <Progress 
              value={progress} 
              className="h-2 bg-[#111] border border-[#33FF00]/30"
              indicatorClassName="bg-[#33FF00]" 
            />
          </div>
          
          {loadingComplete && (
            <div className="text-center text-sm mt-2 animate-pulse-slow">
              SYSTEM READY - PRESS ANY KEY
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingScreen;
