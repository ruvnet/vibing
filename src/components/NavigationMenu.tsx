
import React, { useState } from 'react';
import { Info, HelpCircle, Settings, Terminal, Power, Menu, X, ChevronLeft, MessageCircle } from 'lucide-react';
import NavButton from './NavButton';
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';
import CommandPrompt from './CommandPrompt';
import { Button } from './ui/button';

interface NavigationScreen {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface PowerAction {
  id: string;
  title: string;
  description: string;
  confirmText: string;
  color: string;
  hoverColor: string;
  action: () => void;
}

const NavigationMenu: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [confirmPowerAction, setConfirmPowerAction] = useState<PowerAction | null>(null);
  const [showCommandPrompt, setShowCommandPrompt] = useState(false);
  
  const powerActions: PowerAction[] = [
    {
      id: 'restart',
      title: 'RESTART SYSTEM',
      description: 'All system functions will be temporarily suspended during restart sequence. Proceed?',
      confirmText: 'CONFIRM RESTART',
      color: 'border-[#33FF00]/30 bg-[#111] text-[#33FF00]',
      hoverColor: 'hover:bg-[#222]',
      action: () => {
        console.log('System restart initiated');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    },
    {
      id: 'sleep',
      title: 'SLEEP MODE',
      description: 'System will enter low-power state. All open operations will be suspended. Proceed?',
      confirmText: 'CONFIRM SLEEP',
      color: 'border-[#33FF00]/30 bg-[#111] text-[#33FF00]',
      hoverColor: 'hover:bg-[#222]',
      action: () => {
        console.log('Sleep mode activated');
        document.body.classList.add('sleep-mode');
        setTimeout(() => {
          document.body.classList.remove('sleep-mode');
        }, 5000);
      }
    },
    {
      id: 'shutdown',
      title: 'SHUT DOWN',
      description: 'WARNING: All system functions will terminate. Unsaved data may be lost. Proceed?',
      confirmText: 'CONFIRM SHUTDOWN',
      color: 'border-red-500/30 bg-[#111] text-red-500',
      hoverColor: 'hover:bg-[#220000]',
      action: () => {
        console.log('System shutdown initiated');
        document.body.classList.add('shutdown');
        setTimeout(() => {
          document.body.classList.add('shutdown-complete');
        }, 1500);
      }
    }
  ];
  
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
          {showCommandPrompt ? (
            <CommandPrompt 
              isOpen={showCommandPrompt} 
              onClose={() => setShowCommandPrompt(false)} 
            />
          ) : (
            <>
              <div className="font-micro text-[#33FF00]/70 text-sm mb-4 h-40 overflow-y-auto border border-[#33FF00]/30 p-2 bg-black/50">
                <p>MWAC-OS v3.2.7</p>
                <p>READY.</p>
                <p>{`C:\\>`} _</p>
              </div>
              <button 
                onClick={() => setShowCommandPrompt(true)}
                className="w-full border border-[#33FF00]/30 p-2 bg-black/50 flex justify-center items-center text-[#33FF00] hover:bg-[#111] transition-colors"
              >
                OPEN TERMINAL
              </button>
            </>
          )}
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
            {powerActions.map(action => (
              <button 
                key={action.id}
                className={`w-full p-3 border ${action.color} ${action.hoverColor} font-micro uppercase text-sm transition-colors`}
                onClick={() => setConfirmPowerAction(action)}
              >
                {action.title}
              </button>
            ))}
          </div>
        </div>
      )
    }
  ];

  // Function to handle closing drawer and returning to main message UI
  const handleReturnToMessages = () => {
    setActiveScreen(null);
    setIsDrawerOpen(false);
    // Add any additional logic needed to return to main message UI
  };

  const handleNavButtonClick = (screenId: string) => {
    if (activeScreen === screenId) {
      setActiveScreen(null);
    } else {
      setActiveScreen(screenId);
      setIsDrawerOpen(true);
    }
  };

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

  const activeScreenContent = () => {
    const screen = screens.find(s => s.id === activeScreen);
    
    if (!screen) return null;
    
    return (
      <div className="bg-[#111] border-2 border-[#33FF00]/30 rounded-sm p-2 md:p-4 dot-matrix-container relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
        <div className="flex justify-between items-center mb-2 md:mb-4">
          <Button 
            variant="ghost"
            size="sm"
            className="text-[#33FF00]/70 hover:text-[#33FF00] hover:bg-transparent p-0"
            onClick={() => setActiveScreen(null)}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="font-micro uppercase text-xs">Back</span>
          </Button>
          <div className="text-[#33FF00] font-micro uppercase tracking-widest text-center text-xs md:text-base">
            {screen.title}
          </div>
          <Button 
            variant="ghost"
            size="sm"
            className="text-[#33FF00]/70 hover:text-[#33FF00] hover:bg-transparent p-0"
            onClick={() => setActiveScreen(null)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {screen.content}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
      </div>
    );
  };

  return (
    <>
      <div className="hidden md:block">
        {renderDesktopNav()}
      </div>
      <div className="block md:hidden">
        {renderMobileNav()}
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-black p-4 max-h-[85vh] border-t border-[#33FF00]/30">
          <DrawerClose className="absolute right-4 top-4 text-[#33FF00]">
            <X className="h-5 w-5" />
          </DrawerClose>
          
          {activeScreen ? (
            <div className="relative">
              <Button 
                variant="ghost"
                size="sm"
                className="absolute left-0 top-0 text-[#33FF00]/70 hover:text-[#33FF00] hover:bg-transparent p-0"
                onClick={() => setActiveScreen(null)}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span className="font-micro uppercase text-xs">Back</span>
              </Button>
              {activeScreenContent()}
            </div>
          ) : (
            <div className="p-4">
              <h2 className="text-[#33FF00] font-micro mb-4 uppercase tracking-widest text-center">SYSTEM MENU</h2>
              <div className="space-y-2">
                {/* Main Messages option as the first item */}
                <button 
                  className="w-full p-3 border border-[#33FF00]/30 bg-[#111] hover:bg-[#222] text-[#33FF00] font-micro uppercase text-sm transition-colors text-left flex items-center"
                  onClick={handleReturnToMessages}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  MAIN MESSAGES
                </button>
                
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

      {activeScreen && !isDrawerOpen && (
        <div className="mt-4 hidden md:block">
          {activeScreenContent()}
        </div>
      )}

      <AlertDialog open={confirmPowerAction !== null} onOpenChange={(open) => !open && setConfirmPowerAction(null)}>
        <AlertDialogContent className="bg-black border-2 border-[#33FF00]/30 p-6 font-micro text-[#33FF00] dot-matrix-container max-w-sm animate-[scale-in_0.2s_ease-out,fade-in_0.3s_ease-out]">
          <AlertDialogHeader>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
            <AlertDialogTitle className="text-center text-[#33FF00] uppercase tracking-widest text-lg mb-4 border-b border-[#33FF00]/30 pb-2">
              {confirmPowerAction?.title || 'SYSTEM ACTION'}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#33FF00]/80 mb-4 text-center">
              {confirmPowerAction?.description || 'Confirm this action?'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col space-y-3 mt-6 mb-2">
            <AlertDialogFooter className="flex flex-col space-y-3">
              <AlertDialogAction
                className={`w-full p-3 border ${confirmPowerAction?.color || 'border-[#33FF00]/30 bg-[#111] text-[#33FF00]'} ${confirmPowerAction?.hoverColor || 'hover:bg-[#222]'} font-micro uppercase text-sm transition-colors animate-pulse`}
                onClick={() => {
                  if (confirmPowerAction) {
                    confirmPowerAction.action();
                    setConfirmPowerAction(null);
                  }
                }}
              >
                {confirmPowerAction?.confirmText || 'CONFIRM'}
              </AlertDialogAction>
              <AlertDialogCancel className="w-full p-3 border border-[#33FF00]/30 bg-[#111] hover:bg-[#222] text-[#33FF00] font-micro uppercase text-sm transition-colors">
                CANCEL
              </AlertDialogCancel>
            </AlertDialogFooter>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default NavigationMenu;
