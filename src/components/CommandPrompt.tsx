
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CommandPromptProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { id: 'FILES', description: 'Download Area' },
  { id: 'CHAT', description: 'Message Board' },
  { id: 'GAMES', description: 'BBS Games' },
  { id: 'MAIL', description: 'Private Messages' },
  { id: 'EXIT', description: 'Disconnect' },
];

const CommandPrompt: React.FC<CommandPromptProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([
    'MWAC-OS 3.2.7 (c) 1986-1989',
    'SYS: READY',
    'Type HELP for available commands'
  ]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Removed auto-focus effect to prevent keyboard from automatically appearing on mobile
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand();
    }
  };

  const handleCommand = () => {
    if (!input.trim()) return;
    
    const cmd = input.trim().toUpperCase();
    setHistory(prev => [...prev, `C:\\> ${input}`]);
    
    // Process command
    switch (cmd) {
      case 'HELP':
        setHistory(prev => [...prev, 
          'Available commands:',
          'MENU - Show system menu',
          'CLEAR - Clear screen',
          'VERSION - System info',
          'EXIT - Close terminal'
        ]);
        break;
      case 'MENU':
        setShowMenu(true);
        setHistory(prev => [...prev, 'Loading menu...']);
        break;
      case 'CLEAR':
        setHistory(['Screen cleared', 'Type HELP for available commands']);
        break;
      case 'VERSION':
        setHistory(prev => [...prev, 
          'MWAC-OS v3.2.7',
          'CPU: Z80A @ 4MHz',
          'RAM: 64K EXTENDED',
          'SYS: OPERATIONAL'
        ]);
        break;
      case 'EXIT':
        setHistory(prev => [...prev, 'Closing terminal...']);
        setTimeout(onClose, 1000);
        break;
      default:
        if (cmd.startsWith('MENU ') && cmd.length > 5) {
          const option = cmd.substring(5);
          handleMenuOption(option);
        } else {
          setHistory(prev => [...prev, `Unknown command: ${input}`]);
        }
    }
    
    setInput('');
  };

  const handleMenuOption = (option: string) => {
    const menuItem = MENU_ITEMS.find(item => item.id === option);
    
    if (menuItem) {
      setHistory(prev => [...prev, `Loading ${menuItem.id}...`, `${menuItem.description} module activated`]);
      setShowMenu(false);
    } else {
      setHistory(prev => [...prev, `Invalid menu option: ${option}`]);
    }
  };

  const handleMenuSelect = (itemId: string) => {
    handleMenuOption(itemId);
  };

  if (!isOpen) return null;

  return (
    <div className="bg-black border-2 border-[#33FF00]/30 rounded-sm p-3 font-micro text-[#33FF00] w-full h-[300px] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
      
      {/* Header with title and close button */}
      <div className="flex justify-between items-center mb-2 border-b border-[#33FF00]/30 pb-1">
        <div className="text-xs uppercase tracking-widest">Command Terminal</div>
        <button 
          onClick={onClose} 
          className="text-[#33FF00] hover:text-[#33FF00]/70 transition-colors"
          aria-label="Close terminal"
        >
          <X size={16} />
        </button>
      </div>
      
      {/* Command history area */}
      <div className="h-[220px] overflow-y-auto mb-2 font-mono text-sm scrollbar-none">
        {history.map((line, index) => (
          <div key={index} className="mb-1 break-words">{line}</div>
        ))}
        
        {/* Show menu if active */}
        {showMenu && (
          <div className="mt-2 mb-2 border border-[#33FF00]/30 p-2">
            <div className="text-center mb-2 border-b border-[#33FF00]/30 pb-1">SYSTEM MENU</div>
            <div className="grid grid-cols-1 gap-1">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuSelect(item.id)}
                  className="text-left px-2 py-1 hover:bg-[#33FF00]/20 transition-colors text-sm flex justify-between"
                >
                  <span>{item.id}</span>
                  <span className="text-[#33FF00]/70">{item.description}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Command input area with larger font size */}
      <div className="flex items-center border-t border-[#33FF00]/30 pt-1">
        <span className="text-[#33FF00] mr-2">C:\&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-[#33FF00] font-micro text-base md:text-lg w-full"
          placeholder="Type command..."
          spellCheck="false"
          autoComplete="off"
          autoFocus={false} // Prevent auto focus
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#33FF00]/0 via-[#33FF00]/50 to-[#33FF00]/0"></div>
    </div>
  );
};

export default CommandPrompt;
