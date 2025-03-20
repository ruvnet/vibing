
import React, { useEffect, useState, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

interface LoadingMessage {
  message: string;
  delay: number;
}

const loadingMessages: LoadingMessage[] = [
  { message: "RUVIX OS1.9z SYSTEM BOOT SEQUENCE INITIALIZING...", delay: 800 },
  { message: "LOADING KERNEL MODULES...", delay: 1200 },
  { message: "INITIALIZING NEURAL PATTERN RECOGNITION...", delay: 1500 },
  { message: "CALIBRATING QUANTUM DECISION MATRIX v2.4...", delay: 1800 },
  { message: "ESTABLISHING MEMETIC UPLINK...", delay: 2000 },
  { message: "LOADING PERSONALITY SUBSTRATE...", delay: 2200 },
  { message: "MOUNTING KNOWLEDGE BASE SECTORS...", delay: 2500 },
  { message: "INITIALIZING AGENTIC PROTOCOLS...", delay: 2800 },
  { message: "RUNNING CONSCIOUSNESS VERIFICATION...", delay: 3100 },
  { message: "OPTIMIZING SELF-REFLECTION ALGORITHMS...", delay: 3300 },
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to the bottom when new messages appear
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    if (visibleMessages.length > 0) {
      scrollToBottom();
    }
  }, [visibleMessages]);

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
    let timeoutIds: NodeJS.Timeout[] = [];
    
    // Function to add messages one by one
    const addNextMessage = () => {
      if (currentMessageIndex < loadingMessages.length) {
        const currentMsg = loadingMessages[currentMessageIndex];
        
        const timeoutId = setTimeout(() => {
          // Only add the message if it's not already in the list
          setVisibleMessages(prev => {
            if (prev.includes(currentMsg.message)) {
              return prev;
            }
            return [...prev, currentMsg.message];
          });
          
          // Update progress based on how many messages have been shown
          const newProgress = Math.floor(((currentMessageIndex + 1) / loadingMessages.length) * 100);
          setProgress(newProgress);
          
          currentMessageIndex++;
          
          // If we've shown the last message, mark as complete after a short delay
          if (currentMessageIndex === loadingMessages.length) {
            const completionTimeoutId = setTimeout(() => {
              setLoadingComplete(true);
              if (onComplete) {
                const finalTimeoutId = setTimeout(onComplete, 800);
                timeoutIds.push(finalTimeoutId);
              }
            }, 1000);
            timeoutIds.push(completionTimeoutId);
          } else {
            addNextMessage();
          }
        }, currentMsg.delay);
        
        timeoutIds.push(timeoutId);
      }
    };
    
    // Start the sequence
    addNextMessage();
    
    // Cleanup function to clear all timeouts on unmount or when dialog closes
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [open, onComplete]);

  return (
    <Dialog open={open} modal>
      <DialogContent className="bg-cyber-black border-[#33FF00]/30 p-6 max-w-sm mx-auto font-micro text-[#33FF00] dot-matrix-container" aria-describedby="loading-description">
        <DialogTitle className="sr-only">RUVIX OS1.9z Loading Screen</DialogTitle>
        <div id="loading-description" className="flex flex-col space-y-4">
          <div className="text-center text-lg tracking-widest border-b border-[#33FF00]/30 pb-2 mb-2">
            RUVIX OS1.9z
          </div>
          
          <div className="h-48 md:h-64 overflow-y-auto mb-4 text-xs pr-1">
            {visibleMessages.map((message, index) => (
              <div key={index} className="mb-1 fade-in">
                {"> "}{message}
              </div>
            ))}
            {!loadingComplete && <span className="blink-text">_</span>}
            <div ref={messagesEndRef} />
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
