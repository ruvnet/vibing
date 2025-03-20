
import React, { useState } from 'react';
import Timer from '@/components/Timer';
import NotificationPanel from '@/components/NotificationPanel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Index = () => {
  const [currentView, setCurrentView] = useState<'timer' | 'notifications'>('timer');

  return (
    <div className="min-h-screen bg-cyber-black flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Mobile Navigation */}
          <div className="absolute -top-12 left-0 right-0 flex justify-between items-center md:hidden">
            <button 
              className={`text-cyber-dim hover:text-cyber-neon transition-colors ${currentView === 'notifications' ? 'visible' : 'invisible'}`}
              onClick={() => setCurrentView('timer')}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <span className="text-cyber-dim font-mono uppercase tracking-widest">
              {currentView === 'timer' ? 'FITNESS' : 'NOTIFICATIONS'}
            </span>
            <button 
              className={`text-cyber-dim hover:text-cyber-neon transition-colors ${currentView === 'timer' ? 'visible' : 'invisible'}`}
              onClick={() => setCurrentView('notifications')}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Timer Section */}
          <div className={`md:block ${currentView === 'timer' ? 'block' : 'hidden'}`}>
            <Timer />
          </div>
          
          {/* Notifications Section */}
          <div className={`md:block ${currentView === 'notifications' ? 'block' : 'hidden'}`}>
            <NotificationPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
