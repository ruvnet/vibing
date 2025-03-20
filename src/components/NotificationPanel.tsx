
import React from 'react';
import NotificationCard from './NotificationCard';
import { Mail, Calendar, Settings } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const NotificationPanel: React.FC = () => {
  return (
    <div className="bg-[#111]/80 border border-[#33FF00]/20 p-4 pt-2 w-full mx-auto flex flex-col fade-in-delay-1 relative overflow-hidden">
      {/* Console Header Bar */}
      <div className="flex items-center justify-between mb-4 border-b border-[#33FF00]/30 pb-2">
        <div className="flex items-center">
          <div className="h-2 w-2 bg-[#33FF00] mr-2 animate-pulse-slow"></div>
          <h2 className="text-[#33FF00]/70 font-micro uppercase tracking-widest text-lg">
            MESSAGES
          </h2>
        </div>
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-[#33FF00] animate-ping-slow"></div>
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
        </div>
      </div>
      
      <ScrollArea className="pr-4 flex-1 max-h-[400px]">
        {/* Email Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Mail className="h-3 w-3 text-[#33FF00]/70 mr-2" />
            <h3 className="text-[#33FF00]/70 font-micro uppercase tracking-wider">
              EMAIL
            </h3>
          </div>
          <NotificationCard 
            type="email"
            title="LOVE YOUR WORK + NEW PROJECT REQUEST"
            subtitle="VALERIE TETU"
            className="fade-in-delay-1"
          />
          <NotificationCard 
            type="email"
            title="SYSTEM DATA ANALYSIS COMPLETED"
            subtitle="CENTRAL AI"
            className="fade-in-delay-1"
          />
        </div>
        
        {/* Calendar Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Calendar className="h-3 w-3 text-[#33FF00]/70 mr-2" />
            <h3 className="text-[#33FF00]/70 font-micro uppercase tracking-wider">
              CALENDAR
            </h3>
          </div>
          <NotificationCard 
            type="calendar"
            title="TEAM WEEKLY SYNC"
            subtitle="ZOOM • 10:05 AM"
            className="fade-in-delay-2"
          />
          <NotificationCard 
            type="calendar"
            title="QUARTERLY PLANNING MEETING"
            subtitle="CONFERENCE ROOM • 02:30 PM"
            className="fade-in-delay-2"
          />
        </div>
        
        {/* System Section */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Settings className="h-3 w-3 text-[#33FF00]/70 mr-2" />
            <h3 className="text-[#33FF00]/70 font-micro uppercase tracking-wider">
              SYSTEM
            </h3>
          </div>
          <NotificationCard 
            type="system"
            title="UPDATE FIRMWARE V 1.0.3"
            subtitle="OPEN APP"
            className="fade-in-delay-3"
          />
          <NotificationCard 
            type="system"
            title="MEMORY USAGE: 72%"
            subtitle="OPTIMIZE RECOMMENDED"
            className="fade-in-delay-3"
          />
        </div>
      </ScrollArea>
      
      {/* Console Footer */}
      <div className="mt-4 border-t border-[#33FF00]/30 pt-2 text-[10px] font-micro text-[#33FF00]/70 flex justify-between">
        <span>READY</span>
        <span className="blink-text">{">"}</span>
        <span>v1.0.3</span>
      </div>
      
      {/* Screen Overlay Effects */}
      <div className="screen-glitch absolute inset-0 pointer-events-none"></div>
      <div className="screen-vignette absolute inset-0 pointer-events-none"></div>
    </div>
  );
};

export default NotificationPanel;
