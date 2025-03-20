
import React, { useState } from 'react';
import { Info, HelpCircle, Settings, Terminal, Power, Menu, X } from 'lucide-react';
import NavButton from './NavButton';
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

interface NavigationScreen {
  id: string;
  title: string;
  content: React.ReactNode;
}

const NavigationMenu: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const screens: NavigationScreen[] = [
    {
      id: 'info',
      title: 'SYSTEM INFORMATION',
      content: (
        <div className="p-4">
          <h2 className="text-[#33FF00] font-micro mb-4 uppercase tracking-widest">System Information</h2>
          <div className="space-y-2 text-[#33FF00]/70 font-micro text-sm">
            <p>OS: MWAC-OS v3.2.7</p>
            <p>CPU: Z80A @ 4MHz</p>
            <p>RAM: 64K EXTENDED</p>
            <p>DISPLAY: 40×25 TEXT MODE</p>
            <p>BUILD: 19840112</p>
            <p>STATUS: OPERATIONAL</p>
          </div>
        </div>
      )
    },
    {
      id: 'help',
      title: 'HELP TERMINAL',
      content: (
        <div className="p-4">
          <h2 className="text-[#33FF00] font-micro mb-4 uppercase tracking-widest">Command Reference</h2>
          <div className="space-y-2 text-[#33FF00]/70 font-micro text-sm">
            <p><span className="text-[#33FF00]">INFO</span> - System status and specifications</p>
            <p><span className="text-[#33FF00]">HELP</span> - This help screen</p>
            <p><span className="text-[#33FF00]">CONFIG</span> - System configuration</p>
            <p><span className="text-[#33FF00]">CMDS</span> - Command line access</p>
            <p><span className="text-[#33FF00]">POWER</span> - System shutdown</p>
          </div>
        </div>
      )
    },
    {
      id: 'config',
      title: 'SYSTEM CONFIGURATION',
      content: (
        <div className="p-4">
          <h2 className="text-[#33FF00] font-micro mb-4 uppercase tracking-widest">System Configuration</h2>
          <div className="space-y-3 text-[#33FF00]/70 font-micro text-sm">
            <div>
              <p className="mb-1">DISPLAY BRIGHTNESS</p>
              <div className="w-full bg-[#111] h-4 rounded-sm overflow-hidden border border-[#33FF00]/30">
                <div className="bg-[#33FF00]/70 h-full w-3/4"></div>
              </div>
            </div>
            <div>
              <p className="mb-1">AUDIO VOLUME</p>
              <div className="w-full bg-[#111] h-4 rounded-sm overflow-hidden border border-[#33FF00]/30">
                <div className="bg-[#33FF00]/70 h-full w-1/2"></div>
              </div>
            </div>
            <div>
              <p className="mb-1">NOTIFICATION ALERTS</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-3 bg-[#33FF00] rounded-full"></div>
                <span>ENABLED</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cmds',
      title: 'COMMAND TERMINAL',
      content: (
        <div className="p-4">
          <h2 className="text-[#33FF00] font-micro mb-4 uppercase tracking-widest">Command Line</h2>
          <div className="font-micro text-[#33FF00]/70 text-sm mb-4 h-40 overflow-y-auto border border-[#33FF00]/30 p-2 bg-black/50">
            <p>MWAC-OS v3.2.7</p>
            <p>READY.</p>
            <p>{`C:\\>`} _</p>
          </div>
          <div className="border border-[#33FF00]/30 p-2 bg-black/50 flex">
            <span className="text-[#33FF00] mr-2">{`C:\\>`}</span>
            <input 
              type="text" 
              className="bg-transparent border-none outline-none text-[#33FF00] font-micro text-sm w-full" 
              placeholder="Type command..."
            />
          </div>
        </div>
      )
    },
    {
      id: 'power',
      title: 'POWER OPTIONS',
      content: (
        <div className="p-4">
          <h2 className="text-[#33FF00] font-micro mb-4 uppercase tracking-widest">System Power Options</h2>
          <div className="space-y-3">
            <button className="w-full p-3 border border-[#33FF00]/30 bg-[#111] hover:bg-[#222] text-[#33FF00] font-micro uppercase text-sm transition-colors">
              RESTART SYSTEM
            </button>
            <button className="w-full p-3 border border-[#33FF00]/30 bg-[#111] hover:bg-[#222] text-[#33FF00] font-micro uppercase text-sm transition-colors">
              SLEEP MODE
            </button>
            <button className="w-full p-3 border border-red-500/30 bg-[#111] hover:bg-[#220000] text-red-500 font-micro uppercase text-sm transition-colors">
              SHUT DOWN
            </button>
          </div>
        </div>
      )
    }
  ];

  const handleNavButtonClick = (screenId: string) => {
    if (activeScreen === screenId) {
      setActiveScreen(null);
    } else {
      setActiveScreen(screenId);
      setIsDrawerOpen(true);
    }
  };

  // Desktop Navigation
  const renderDesktopNav = () => (
    <div className="grid grid-cols-5 gap-1 md:gap-3 mt-1 md:mt-2">
      <NavButton 
        icon={Info} 
        label="INFO" 
        onClick={() => handleNavButtonClick('info')}
      />
      <NavButton 
        icon={HelpCircle} 
        label="HELP" 
        onClick={() => handleNavButtonClick('help')}
      />
      <NavButton 
        icon={Settings} 
        label="CONFIG" 
        onClick={() => handleNavButtonClick('config')}
      />
      <NavButton 
        icon={Terminal} 
        label="CMDS" 
        onClick={() => handleNavButtonClick('cmds')}
      />
      <NavButton 
        icon={Power} 
        label="POWER" 
        onClick={() => handleNavButtonClick('power')}
      />
    </div>
  );

  // Mobile Navigation
  const renderMobileNav = () => (
    <div className="grid grid-cols-5 gap-1 md:gap-3 mt-1 md:mt-2">
      <NavButton 
        icon={Menu} 
        label="MENU" 
        onClick={() => setIsDrawerOpen(true)}
      />
      <NavButton 
        icon={Info} 
        label="INFO" 
        onClick={() => handleNavButtonClick('info')}
      />
      <NavButton 
        icon={HelpCircle} 
        label="HELP" 
        onClick={() => handleNavButtonClick('help')}
      />
      <NavButton 
        icon={Settings} 
        label="CONFIG" 
        onClick={() => handleNavButtonClick('config')}
      />
      <NavButton 
        icon={Power} 
        label="POWER" 
        onClick={() => handleNavButtonClick('power')}
      />
    </div>
  );

  // Render active screen content
  const activeScreenContent = () => {
    const screen = screens.find(s => s.id === activeScreen);
    
    if (!screen) return null;
    
    return (
      <div className="bg-[#111] border-2 border-[#33FF00]/30 rounded-sm p-2 md:p-4 dot-matrix-container relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
        <div className="text-[#33FF00] font-micro uppercase tracking-widest text-center mb-2 md:mb-4 text-xs md:text-base">
          {screen.title}
        </div>
        {screen.content}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
      </div>
    );
  };

  return (
    <>
      {/* Responsive navigation */}
      <div className="hidden md:block">
        {renderDesktopNav()}
      </div>
      <div className="block md:hidden">
        {renderMobileNav()}
      </div>

      {/* Main content drawer for mobile and active screens */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-black p-4 max-h-[85vh] border-t border-[#33FF00]/30">
          <DrawerClose className="absolute right-4 top-4 text-[#33FF00]">
            <X className="h-5 w-5" />
          </DrawerClose>
          
          {/* Show drawer menu on mobile or activeScreenContent */}
          {activeScreen ? (
            activeScreenContent()
          ) : (
            <div className="p-4">
              <h2 className="text-[#33FF00] font-micro mb-4 uppercase tracking-widest text-center">SYSTEM MENU</h2>
              <div className="space-y-2">
                {screens.map(screen => (
                  <button 
                    key={screen.id}
                    className="w-full p-3 border border-[#33FF00]/30 bg-[#111] hover:bg-[#222] text-[#33FF00] font-micro uppercase text-sm transition-colors text-left"
                    onClick={() => {
                      setActiveScreen(screen.id);
                    }}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>

      {/* Desktop active screen content */}
      {activeScreen && !isDrawerOpen && (
        <div className="mt-4 hidden md:block">
          {activeScreenContent()}
        </div>
      )}
    </>
  );
};

export default NavigationMenu;
