
import React from 'react';
import NotificationCard from './NotificationCard';
import { Bell, Mail, Calendar, Settings } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const NotificationPanel: React.FC = () => {
  return (
    <div className="cyber-card p-4 pt-2 w-full max-w-md mx-auto h-full flex flex-col fade-in-delay-1 dot-matrix-container relative overflow-hidden">
      {/* Console Header Bar */}
      <div className="console-header flex items-center justify-between mb-4 border-b border-cyber-dim/30 pb-2">
        <div className="flex items-center">
          <Bell className="h-4 w-4 text-cyber-neon mr-2 animate-pulse-slow" />
          <h2 className="text-cyber-dim font-micro uppercase tracking-widest text-xl">
            NOTIFICATIONS
          </h2>
        </div>
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-cyber-neon animate-ping-slow"></div>
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
        </div>
      </div>
      
      <ScrollArea className="pr-4 flex-1">
        {/* Email Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Mail className="h-3 w-3 text-cyber-dim mr-2" />
            <h3 className="text-cyber-dim font-micro uppercase tracking-wider">
              EMAIL
            </h3>
          </div>
          <NotificationCard 
            type="email"
            title="LOVE YOUR WORK + NEW PROJECT REQUEST"
            subtitle="VALERIE TETU"
            className="fade-in-delay-1"
          />
        </div>
        
        {/* Calendar Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Calendar className="h-3 w-3 text-cyber-dim mr-2" />
            <h3 className="text-cyber-dim font-micro uppercase tracking-wider">
              CALENDAR
            </h3>
          </div>
          <NotificationCard 
            type="calendar"
            title="TEAM WEEKLY SYNC"
            subtitle="ZOOM • 10:05 AM"
            className="fade-in-delay-2"
          />
        </div>
        
        {/* System Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Settings className="h-3 w-3 text-cyber-dim mr-2" />
            <h3 className="text-cyber-dim font-micro uppercase tracking-wider">
              SYSTEM
            </h3>
          </div>
          <NotificationCard 
            type="system"
            title="UPDATE FIRMWARE V 1.0.3"
            subtitle="OPEN APP"
            className="fade-in-delay-3"
          />
        </div>
      </ScrollArea>
      
      {/* Console Footer */}
      <div className="mt-4 border-t border-cyber-dim/30 pt-2 text-[10px] font-micro text-cyber-dim/70 flex justify-between">
        <span>SYSTEM OK</span>
        <span className="blink-text">CONSOLE READY</span>
        <span>v1.0.3</span>
      </div>
      
      {/* Screen Overlay Effects */}
      <div className="screen-glitch absolute inset-0 pointer-events-none"></div>
      <div className="screen-vignette absolute inset-0 pointer-events-none"></div>
    </div>
  );
};

export default NotificationPanel;
