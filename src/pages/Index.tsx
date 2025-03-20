
import React, { useState } from 'react';
import Timer from '@/components/Timer';
import NotificationPanel from '@/components/NotificationPanel';
import { ArrowLeft, ArrowRight, Bell, Clock } from 'lucide-react';

const Index = () => {
  const [currentView, setCurrentView] = useState<'timer' | 'notifications'>('timer');

  return (
    <div className="min-h-screen bg-cyber-black flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="w-full max-w-4xl">
        {/* Console header */}
        <div className="cyber-card mb-4 p-2 flex justify-between items-center">
          <div className="text-cyber-dim font-micro text-xs tracking-widest flex items-center">
            <span className="inline-block h-2 w-2 bg-cyber-neon rounded-full mr-2 animate-pulse-slow"></span>
            <span>SYSTEM ONLINE</span>
          </div>
          <div className="text-cyber-neon font-micro text-xs tracking-widest blink-text">
            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Navigation Tabs for Desktop */}
          <div className="absolute -top-12 hidden md:flex space-x-2 left-0">
            <button 
              className={`px-4 py-1 font-micro text-xs uppercase tracking-widest transition-colors flex items-center ${
                currentView === 'timer' 
                  ? 'bg-cyber-darkgray text-cyber-neon border-b-2 border-cyber-neon' 
                  : 'text-cyber-dim hover:text-cyber-neon'
              }`}
              onClick={() => setCurrentView('timer')}
            >
              <Clock className="w-3 h-3 mr-1" />
              Fitness
            </button>
            <button 
              className={`px-4 py-1 font-micro text-xs uppercase tracking-widest transition-colors flex items-center ${
                currentView === 'notifications' 
                  ? 'bg-cyber-darkgray text-cyber-neon border-b-2 border-cyber-neon' 
                  : 'text-cyber-dim hover:text-cyber-neon'
              }`}
              onClick={() => setCurrentView('notifications')}
            >
              <Bell className="w-3 h-3 mr-1" />
              Notifications
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="absolute -top-12 left-0 right-0 flex justify-between items-center md:hidden">
            <button 
              className={`text-cyber-dim hover:text-cyber-neon transition-colors font-micro flex items-center ${currentView === 'notifications' ? 'visible' : 'invisible'}`}
              onClick={() => setCurrentView('timer')}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="text-xs uppercase">Fitness</span>
            </button>
            <div className="flex space-x-1">
              <div className={`h-2 w-2 rounded-full ${currentView === 'timer' ? 'bg-cyber-neon' : 'bg-cyber-dim/30'}`}></div>
              <div className={`h-2 w-2 rounded-full ${currentView === 'notifications' ? 'bg-cyber-neon' : 'bg-cyber-dim/30'}`}></div>
            </div>
            <button 
              className={`text-cyber-dim hover:text-cyber-neon transition-colors font-micro flex items-center ${currentView === 'timer' ? 'visible' : 'invisible'}`}
              onClick={() => setCurrentView('notifications')}
            >
              <span className="text-xs uppercase">Notifications</span>
              <ArrowRight className="w-4 h-4 ml-1" />
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
        
        {/* Console footer */}
        <div className="cyber-card mt-4 p-2 flex justify-between items-center">
          <div className="text-cyber-dim font-micro text-xs tracking-widest">
            MEM: 16MB
          </div>
          <div className="text-cyber-dim font-micro text-xs tracking-widest">
            CPU: STABLE
          </div>
          <div className="text-cyber-dim font-micro text-xs tracking-widest">
            BATT: 87%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
