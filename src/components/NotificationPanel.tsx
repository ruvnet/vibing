import React, { useState } from 'react';
import NotificationCard from './NotificationCard';
import { Mail, Calendar, Settings, User, X, Globe } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import RuvServiceDetail from './RuvServiceDetail';

const NotificationPanel: React.FC = () => {
  const [selectedNotification, setSelectedNotification] = useState<{
    title: string;
    content: string;
    type: string;
  } | null>(null);
  
  const [showRuvServices, setShowRuvServices] = useState(false);

  const handleCardClick = (title: string, type: string) => {
    if (type === 'ruvservices') {
      setShowRuvServices(true);
      return;
    }
    
    // Generate content based on the notification type and title
    const content = getContentForNotification(title, type);
    setSelectedNotification({ title, content, type });
  };

  const getContentForNotification = (title: string, type: string): string => {
    switch (type) {
      case 'email':
        if (title.includes('LOVE YOUR WORK')) {
          return "Hello, I've been following your work and I'm impressed with your latest project. Would you be interested in collaborating on a new AI-driven interface? Let me know your thoughts. Best regards, Valerie";
        } else if (title.includes('SYSTEM DATA ANALYSIS')) {
          return "System data analysis complete. No anomalies detected in main processor. Memory optimization recommended for sectors 4A through 7C. Backup completed successfully.";
        } else if (title.includes('EY.AI DEPLOYMENT')) {
          return "Congratulations on the successful deployment of EY.ai! Your pivotal role in this enterprise AI stack implementation has been noted. The system is now serving 400,000+ employees and 1.5M end users with the allocated $1.4B budget performing as expected. Outstanding work, rUv.";
        } else if (title.includes('CLOUD COMPUTING PIONEER')) {
          return "Your recent talk on the evolution of cloud computing was enlightening. As the person who coined 'infrastructure as a service' in 2005 before AWS EC2 launched, your insights are invaluable. The Enomaly Inc. case study continues to inspire new cloud ventures.";
        } else if (title.includes('INTERVIEW REQUEST')) {
          return "I'm reaching out from Tech Visionaries Magazine. We're doing a feature on AI pioneers and would love to interview you about your three decades in the industry, from early internet days with Napster and AOL to your current work with enterprise AI systems. Your experience as an alpha/beta tester for OpenAI is particularly interesting to our readers.";
        } else if (title.includes('AGENTICS FOUNDATION')) {
          return "⭐ Introducing the Agentics Foundation, a vibrant community and the literal foundation for innovation and collaboration in the field of agent-based AI systems.\n\nBy bringing together forward-thinking individuals and organizations, we empower members to design, deploy, and manage autonomous agents that enhance human potential through intuitive, accessible interfaces.\n\nQuick Links:\n- 🚀 Agentics Foundation: https://agentics.org\n- 👩‍🏫 Membership: https://lnkd.in/gTk3QEGH\n- 🦄 Dashboard: https://lnkd.in/ggc7-bJk\n- 🐙 Github: https://lnkd.in/gk8y2ZdZ\n\nOur Vision:\nAt Agentics, we envision a future where artificial intelligence seamlessly integrates into daily life as a natural extension of human capability. We strive to create flexible technologies that adapt effortlessly to human needs, enabling individuals and communities to achieve greater outcomes without compromising their natural workflows.\n\nJoin the movement and help shape the future of AI!";
        }
        return "No additional information available for this email.";
      
      case 'calendar':
        if (title.includes('TEAM WEEKLY')) {
          return "Agenda: \n- Project status update \n- New feature discussion \n- Resource allocation \n- Q&A \n\nPlease prepare your weekly progress report.";
        } else if (title.includes('QUARTERLY PLANNING')) {
          return "Quarterly planning for upcoming system enhancements. All department heads must attend. Bring documentation on resource requirements for next fiscal period.";
        } else if (title.includes('VIBE CODING SESSION')) {
          return "Upcoming vibe coding session with rUv scheduled. Duration: 30 minutes. Topics to cover: aesthetic code optimization, agent alignment protocols, and intuitive design principles for your current project.";
        } else if (title.includes('FUNGIBILITY PODCAST')) {
          return "Recording session for the Fungibility Podcast. Episode topic: 'The Evolution of AI Agents in Enterprise Settings.' Guest: Dr. Ada Chen from MIT Media Lab. Pre-recording briefing starts 15 minutes before the scheduled time.";
        } else if (title.includes('US FEDERAL CIO COUNCIL')) {
          return "Advisory meeting with the US Federal CIO Council on AI implementation strategies for government systems. Your presentation on secure agent deployment is scheduled for 25 minutes, followed by a 15-minute Q&A session.";
        }
        return "No additional information available for this calendar event.";
      
      case 'system':
        if (title.includes('GITHUB INSTALLATION GUIDE')) {
          return "VIBING TERMINAL INTERFACE - INSTALLATION PROTOCOL\n\n:: SYSTEM REQUIREMENTS ::\n* NODE.JS 18+ ENVIRONMENT\n* NPM OR BUN PACKAGE MANAGER\n* 64K MEMORY ALLOCATION\n\n:: INSTALLATION SEQUENCE ::\n\n1. CLONE REPOSITORY\n   git clone https://github.com/ruvnet/vibing.git\n\n2. NAVIGATE TO DIRECTORY\n   cd vibing\n\n3. INSTALL DEPENDENCIES\n   npm i\n\n4. INITIATE DEVELOPMENT SERVER\n   npm run dev\n\n:: DEPLOYMENT OPTIONS ::\n\n* FLY.IO DEPLOYMENT:\n  curl -L https://fly.io/install.sh | sh\n  fly auth login\n  fly deploy\n\n* VERCEL COMPATIBLE\n* NETLIFY COMPATIBLE\n\n:: ACCESS PROTOCOLS ::\n\nAfter initialization, system will be available at:\nhttp://localhost:5173\n\nDeployed URL: https://vibing.fly.dev/\nRepository: https://github.com/ruvnet/vibing\n\n:: END OF TRANSMISSION ::";
        } else if (title.includes('UPDATE FIRMWARE')) {
          return "Critical update available. This update includes important security patches and performance improvements. Estimated installation time: 5 minutes. System will need to restart.";
        } else if (title.includes('MEMORY USAGE')) {
          return "Memory usage exceeding optimal levels. Recommended actions: \n- Close unused applications \n- Clear temporary cache \n- Run diagnostic scan";
        } else if (title.includes('NIST CLOUD DEFINITION')) {
          return "Historical document retrieved: Co-authored US Cloud Definition with the National Institute of Standards and Technology (009). This document provided the foundation for cloud policy and implementation across federal agencies. Reference ID: NIST-SP-800-145.";
        } else if (title.includes('CLOUDCAMP ANALYTICS')) {
          return "CloudCamp initiative statistics update: Now active in 278 cities globally. Total participants to date: 103,450. Impact assessment shows 72% of participants implemented cloud technologies within 6 months of attendance. Co-founding this grassroots movement in 2008 continues to yield exponential returns.";
        }
        return "No additional information available for this system notification.";
      
      case 'ruvservices':
        return "AGENTIC ENGINEER SERVICES OVERVIEW:\n\n* VIBE CODING SESSIONS - $99/15MIN\n* CONSULTING PACKAGES - CUSTOM RATES\n* AGENT ALIGNMENT - STARTING $499\n* SYSTEM ARCHITECTURE - STARTING $999\n\nContact: ruv@ruv.net";
      
      default:
        return "No additional information available.";
    }
  };

  const handleCloseRuvServices = () => {
    setShowRuvServices(false);
  };

  const returnToMainView = () => {
    setSelectedNotification(null);
    setShowRuvServices(false);
  };

  return (
    <div className="bg-[#111]/80 border border-[#33FF00]/20 p-4 pt-2 w-full h-full mx-auto flex flex-col fade-in-delay-1 relative overflow-hidden">
      {/* Console Header Bar - Now Clickable */}
      <div 
        className="flex items-center justify-between mb-4 border-b border-[#33FF00]/30 pb-2 cursor-pointer hover:border-[#33FF00]/60 transition-colors"
        onClick={returnToMainView}
      >
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
      
      {showRuvServices ? (
        <RuvServiceDetail onClose={handleCloseRuvServices} />
      ) : selectedNotification ? (
        <div className="flex-1 mb-4 relative flex flex-col min-h-0">
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
          
          <ScrollArea className="flex-1 pr-2 max-h-full touch-auto overflow-y-auto">
            <div className="font-micro text-[#33FF00]/90 text-xs md:text-sm whitespace-pre-line">
              {selectedNotification.content}
            </div>
          </ScrollArea>
        </div>
      ) : (
        <ScrollArea className="pr-4 flex-1 min-h-0 touch-auto overflow-y-auto">
          {/* rUv Section - Moved to top and added new message */}
          <div className="mb-4 md:mb-6">
            <div className="flex items-center mb-2 md:mb-3">
              <User className="h-3 w-3 text-[#33FF00]/70 mr-2" />
              <h3 className="text-[#33FF00]/70 font-micro uppercase tracking-wider text-xs md:text-sm">
                AGENTIC ENGINEER
              </h3>
            </div>
            
            {/* New message - VIBE CODING SESSIONS with RUV NOW AVAILABLE */}
            <NotificationCard 
              type="ruvservices"
              title="VIBE CODING SESSIONS with RUV NOW AVAILABLE"
              subtitle="STARTING AT $99 FOR 15 MIN"
              className="fade-in-delay-1 border-l-[#FF33CC] animate-pulse-slow"
              onClick={() => handleCardClick("VIBE CODING SESSIONS with RUV NOW AVAILABLE", "ruvservices")}
            />
            
            <NotificationCard 
              type="calendar"
              title="VIBE CODING SESSION WITH rUv"
              subtitle="TOMORROW • 14:30 HRS"
              className="fade-in-delay-1 border-l-[#FF33CC]"
              onClick={() => handleCardClick("VIBE CODING SESSION WITH rUv", "calendar")}
            />
            
            <NotificationCard
              type="email"
              title="AGENTICS FOUNDATION LAUNCH"
              subtitle="COMMUNITY ANNOUNCEMENT"
              className="fade-in-delay-1 border-l-[#FF33CC]"
              onClick={() => handleCardClick("AGENTICS FOUNDATION LAUNCH", "email")}
            />
            
            <NotificationCard
              type="system"
              title="GITHUB INSTALLATION GUIDE"
              subtitle="VIBING TERMINAL INTERFACE"
              className="fade-in-delay-1 border-l-[#FF33CC] animate-pulse-slow"
              onClick={() => handleCardClick("GITHUB INSTALLATION GUIDE", "system")}
            />
            
            <NotificationCard
              type="ruvservices"
              title="rUv CODING SERVICES NOW AVAILABLE"
              subtitle="STARTING AT $99 FOR 15 MIN"
              className="fade-in-delay-1 border-l-[#FF33CC]"
              onClick={() => handleCardClick("rUv CODING SERVICES NOW AVAILABLE", "ruvservices")}
            />
          </div>
          
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
              title="CLOUD COMPUTING PIONEER RECOGNITION"
              subtitle="TECH HERITAGE FOUNDATION"
              className="fade-in-delay-1 border-l-[#FF33CC]"
              onClick={() => handleCardClick("CLOUD COMPUTING PIONEER RECOGNITION", "email")}
            />
            <NotificationCard 
              type="email"
              title="INTERVIEW REQUEST: TECH VISIONARIES"
              subtitle="MEDIA INQUIRY"
              className="fade-in-delay-1 border-l-[#FF33CC]"
              onClick={() => handleCardClick("INTERVIEW REQUEST: TECH VISIONARIES", "email")}
            />
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
            <NotificationCard 
              type="email"
              title="EY.AI DEPLOYMENT SUCCESS"
              subtitle="ENTERPRISE SYSTEMS"
              className="fade-in-delay-1 border-l-[#FF33CC]"
              onClick={() => handleCardClick("EY.AI DEPLOYMENT SUCCESS", "email")}
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
              title="FUNGIBILITY PODCAST RECORDING"
              subtitle="STUDIO B • 15:00 HRS"
              className="fade-in-delay-2 border-l-[#FF33CC]"
              onClick={() => handleCardClick("FUNGIBILITY PODCAST RECORDING", "calendar")}
            />
            <NotificationCard 
              type="calendar"
              title="US FEDERAL CIO COUNCIL ADVISORY"
              subtitle="VIRTUAL • 09:00 HRS"
              className="fade-in-delay-2 border-l-[#FF33CC]"
              onClick={() => handleCardClick("US FEDERAL CIO COUNCIL ADVISORY", "calendar")}
            />
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
              title="NIST CLOUD DEFINITION ARCHIVE"
              subtitle="HISTORICAL DOCUMENT"
              className="fade-in-delay-3 border-l-[#FF33CC]"
              onClick={() => handleCardClick("NIST CLOUD DEFINITION ARCHIVE", "system")}
            />
            <NotificationCard 
              type="system"
              title="CLOUDCAMP ANALYTICS UPDATE"
              subtitle="GLOBAL INITIATIVE STATS"
              className="fade-in-delay-3 border-l-[#FF33CC]"
              onClick={() => handleCardClick("CLOUDCAMP ANALYTICS UPDATE", "system")}
            />
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
        <span>{showRuvServices ? "rUv SERVICES" : selectedNotification ? "VIEWING" : "READY"}</span>
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
