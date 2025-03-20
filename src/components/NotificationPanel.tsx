
import React, { useState } from 'react';
import NotificationCard from './NotificationCard';
import { Mail, Calendar, Settings, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

const NotificationPanel: React.FC = () => {
  const [selectedNotification, setSelectedNotification] = useState<{
    title: string;
    content: string;
    type: string;
  } | null>(null);

  const handleCardClick = (title: string, type: string) => {
    // Generate content based on the notification type and title
    const content = getContentForNotification(title, type);
    setSelectedNotification({ title, content, type });
  };

  const getContentForNotification = (title: string, type: string): string => {
    switch (type) {
      case 'email':
        return title.includes('LOVE YOUR WORK') 
          ? "Hello, I've been following your work and I'm impressed with your latest project. Would you be interested in collaborating on a new AI-driven interface? Let me know your thoughts. Best regards, Valerie"
          : "System data analysis complete. No anomalies detected in main processor. Memory optimization recommended for sectors 4A through 7C. Backup completed successfully.";
      case 'calendar':
        return title.includes('TEAM WEEKLY') 
          ? "Agenda: \n- Project status update \n- New feature discussion \n- Resource allocation \n- Q&A \n\nPlease prepare your weekly progress report."
          : "Quarterly planning for upcoming system enhancements. All department heads must attend. Bring documentation on resource requirements for next fiscal period.";
      case 'system':
        return title.includes('UPDATE FIRMWARE') 
          ? "Critical update available. This update includes important security patches and performance improvements. Estimated installation time: 5 minutes. System will need to restart."
          : "Memory usage exceeding optimal levels. Recommended actions: \n- Close unused applications \n- Clear temporary cache \n- Run diagnostic scan";
      default:
        return "No additional information available.";
    }
  };

  return (
    <div className="bg-[#111]/80 border border-[#33FF00]/20 p-4 pt-2 w-full h-full mx-auto flex flex-col fade-in-delay-1 relative overflow-hidden">
      {/* Console Header Bar */}
      <div className="flex items-center justify-between mb-4 border-b border-[#33FF00]/30 pb-2">
        <div className="flex items-center">
          <div className="h-2 w-2 bg-[#33FF00] mr-2 animate-pulse-slow"></div>
          <h2 className="text-[#33FF00]/70 font-micro uppercase tracking-widest text-sm md:text-lg">
            MESSAGES
          </h2>
        </div>
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-[#33FF00] animate-ping-slow"></div>
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
        </div>
      </div>
      
      {selectedNotification ? (
        <div className="flex-1 mb-4 relative flex flex-col overflow-hidden">
          <button 
            className="absolute right-0 top-0 text-[#33FF00]/70 hover:text-[#33FF00] z-10"
            onClick={() => setSelectedNotification(null)}
          >
            <X size={16} />
          </button>
          
          <div className="mb-3 pb-2 border-b border-[#33FF00]/30">
            <div className="text-[#33FF00] font-micro uppercase text-sm md:text-base tracking-wide">
              {selectedNotification.title}
            </div>
            <div className="text-[#33FF00]/50 font-micro text-xs uppercase mt-1">
              {selectedNotification.type.toUpperCase()} • RECEIVED TODAY
            </div>
          </div>
          
          <ScrollArea className="flex-1 pr-2 h-full min-h-0 touch-auto overflow-y-auto">
            <div className="font-micro text-[#33FF00]/90 text-xs md:text-sm whitespace-pre-line">
              {selectedNotification.content}
            </div>
          </ScrollArea>
        </div>
      ) : (
        <ScrollArea className="pr-4 flex-1 h-full min-h-0 touch-auto overflow-y-auto">
          {/* Email Section */}
          <div className="mb-4 md:mb-6">
            <div className="flex items-center mb-2 md:mb-3">
              <Mail className="h-3 w-3 text-[#33FF00]/70 mr-2" />
              <h3 className="text-[#33FF00]/70 font-micro uppercase tracking-wider text-xs md:text-sm">
                EMAIL
              </h3>
            </div>
            <NotificationCard 
              type="email"
              title="LOVE YOUR WORK + NEW PROJECT REQUEST"
              subtitle="VALERIE TETU"
              className="fade-in-delay-1"
              onClick={() => handleCardClick("LOVE YOUR WORK + NEW PROJECT REQUEST", "email")}
            />
            <NotificationCard 
              type="email"
              title="SYSTEM DATA ANALYSIS COMPLETED"
              subtitle="CENTRAL AI"
              className="fade-in-delay-1"
              onClick={() => handleCardClick("SYSTEM DATA ANALYSIS COMPLETED", "email")}
            />
          </div>
          
          {/* Calendar Section */}
          <div className="mb-4 md:mb-6">
            <div className="flex items-center mb-2 md:mb-3">
              <Calendar className="h-3 w-3 text-[#33FF00]/70 mr-2" />
              <h3 className="text-[#33FF00]/70 font-micro uppercase tracking-wider text-xs md:text-sm">
                CALENDAR
              </h3>
            </div>
            <NotificationCard 
              type="calendar"
              title="TEAM WEEKLY SYNC"
              subtitle="ZOOM • 10:05 AM"
              className="fade-in-delay-2"
              onClick={() => handleCardClick("TEAM WEEKLY SYNC", "calendar")}
            />
            <NotificationCard 
              type="calendar"
              title="QUARTERLY PLANNING MEETING"
              subtitle="CONFERENCE ROOM • 02:30 PM"
              className="fade-in-delay-2"
              onClick={() => handleCardClick("QUARTERLY PLANNING MEETING", "calendar")}
            />
          </div>
          
          {/* System Section */}
          <div className="mb-4 md:mb-6">
            <div className="flex items-center mb-2 md:mb-3">
              <Settings className="h-3 w-3 text-[#33FF00]/70 mr-2" />
              <h3 className="text-[#33FF00]/70 font-micro uppercase tracking-wider text-xs md:text-sm">
                SYSTEM
              </h3>
            </div>
            <NotificationCard 
              type="system"
              title="UPDATE FIRMWARE V 1.0.3"
              subtitle="OPEN APP"
              className="fade-in-delay-3"
              onClick={() => handleCardClick("UPDATE FIRMWARE V 1.0.3", "system")}
            />
            <NotificationCard 
              type="system"
              title="MEMORY USAGE: 72%"
              subtitle="OPTIMIZE RECOMMENDED"
              className="fade-in-delay-3"
              onClick={() => handleCardClick("MEMORY USAGE: 72%", "system")}
            />
          </div>
        </ScrollArea>
      )}
      
      {/* Console Footer */}
      <div className="mt-4 border-t border-[#33FF00]/30 pt-2 text-[10px] font-micro text-[#33FF00]/70 flex justify-between">
        <span>{selectedNotification ? "VIEWING" : "READY"}</span>
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
