
import React from 'react';
import NotificationPanel from '@/components/NotificationPanel';
import { Terminal } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import NavigationMenu from '@/components/NavigationMenu';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="h-[100vh] min-h-screen bg-black flex flex-col items-center justify-center p-2 md:p-4 lg:p-8 overflow-hidden">
      <div className="w-full max-w-3xl md:max-w-4xl h-full flex flex-col">
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
        
        <div className="grid grid-cols-1 gap-2 md:gap-4 relative flex-1">
          {/* Main terminal display */}
          <div className="bg-[#111] border-2 border-[#33FF00]/30 rounded-sm p-2 md:p-4 dot-matrix-container relative overflow-hidden flex-1 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
            <div className="text-[#33FF00] font-micro uppercase tracking-widest text-center mb-2 md:mb-4 text-xs md:text-base">
              *** MAINFRAME COMMUNICATION SYSTEM ***
            </div>
            
            <div className="flex-1 flex flex-col overflow-hidden">
              <NotificationPanel />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
          </div>
          
          {/* Control panel - made sticky at the bottom */}
          <div className="sticky bottom-0 z-10">
            <NavigationMenu />
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
