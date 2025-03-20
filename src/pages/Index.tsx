
import React from 'react';
import NotificationPanel from '@/components/NotificationPanel';
import { Terminal, Info, Power, HelpCircle, Settings, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-2 md:p-4 lg:p-8 overflow-hidden">
      <div className="w-full max-w-3xl md:max-w-4xl">
        {/* Terminal header */}
        <div className="bg-[#111] border border-[#33FF00]/30 rounded-sm p-2 mb-2 md:mb-4 flex justify-between items-center">
          <div className="text-[#33FF00]/70 font-micro text-[10px] md:text-xs tracking-widest flex items-center">
            <Terminal className="h-3 w-3 mr-1 md:mr-2 text-[#33FF00]" />
            <span className="hidden sm:inline">MWAC-6500 TERMINAL</span>
            <span className="inline sm:hidden">MWAC-6500</span>
          </div>
          <div className="text-[#33FF00] font-micro text-[10px] md:text-xs tracking-widest blink-text">
            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-2 md:gap-4 relative">
          {/* Main terminal display */}
          <div className="bg-[#111] border-2 border-[#33FF00]/30 rounded-sm p-2 md:p-4 dot-matrix-container relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
            <div className="text-[#33FF00] font-micro uppercase tracking-widest text-center mb-2 md:mb-4 text-xs md:text-base">
              *** MAINFRAME COMMUNICATION SYSTEM ***
            </div>
            
            <NotificationPanel />
            
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
          </div>
          
          {/* Control panel */}
          <div className="grid grid-cols-5 gap-1 md:gap-3 mt-1 md:mt-2">
            {isMobile ? (
              // Mobile view: collapse some buttons
              <>
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <Menu className="h-4 w-4 md:h-5 md:w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-[8px] md:text-xs mt-1 group-hover:text-[#33FF00]">MENU</span>
                </button>
                
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <Info className="h-4 w-4 md:h-5 md:w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-[8px] md:text-xs mt-1 group-hover:text-[#33FF00]">INFO</span>
                </button>
                
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <HelpCircle className="h-4 w-4 md:h-5 md:w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-[8px] md:text-xs mt-1 group-hover:text-[#33FF00]">HELP</span>
                </button>
                
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <Settings className="h-4 w-4 md:h-5 md:w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-[8px] md:text-xs mt-1 group-hover:text-[#33FF00]">CONFIG</span>
                </button>
                
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <Power className="h-4 w-4 md:h-5 md:w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-[8px] md:text-xs mt-1 group-hover:text-[#33FF00]">POWER</span>
                </button>
              </>
            ) : (
              // Desktop view: show all buttons
              <>
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <Info className="h-5 w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-xs mt-1 group-hover:text-[#33FF00]">INFO</span>
                </button>
                
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <HelpCircle className="h-5 w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-xs mt-1 group-hover:text-[#33FF00]">HELP</span>
                </button>
                
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <Settings className="h-5 w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-xs mt-1 group-hover:text-[#33FF00]">CONFIG</span>
                </button>
                
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <Terminal className="h-5 w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-xs mt-1 group-hover:text-[#33FF00]">CMDS</span>
                </button>
                
                <button className="bg-[#111] border border-[#33FF00]/30 p-2 rounded-sm flex flex-col items-center justify-center hover:bg-[#222] transition-colors group">
                  <Power className="h-5 w-5 text-[#33FF00]/70 group-hover:text-[#33FF00]" />
                  <span className="text-[#33FF00]/70 font-micro text-xs mt-1 group-hover:text-[#33FF00]">POWER</span>
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Terminal footer */}
        <div className="bg-[#111] border border-[#33FF00]/30 rounded-sm mt-2 md:mt-4 p-1 md:p-2 flex justify-between items-center">
          <div className="text-[#33FF00]/70 font-micro text-[8px] md:text-xs tracking-widest">
            MEM: 64K
          </div>
          <div className="text-[#33FF00]/70 font-micro text-[8px] md:text-xs tracking-widest">
            CPU: 4MHz
          </div>
          <div className="text-[#33FF00]/70 font-micro text-[8px] md:text-xs tracking-widest">
            SYS: READY
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
