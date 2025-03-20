
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Globe } from 'lucide-react';

interface NotificationCardProps {
  title: string;
  subtitle: string;
  type: 'email' | 'calendar' | 'system' | 'ruvservices';
  className?: string;
  onClick?: () => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  title, 
  subtitle,
  type,
  className,
  onClick
}) => {
  const getIcon = () => {
    switch (type) {
      case 'email':
        // Special icon for Agentics Foundation message
        if (title.includes('AGENTICS FOUNDATION')) {
          return <Globe className="h-4 w-4 text-[#33FF00]" />;
        }
        return '📨';
      case 'calendar':
        return '📅';
      case 'system':
        return '⚙️';
      case 'ruvservices':
        return '👾';
      default:
        return '';
    }
  };

  return (
    <div 
      className={cn(
        "cyber-card p-3 md:p-4 mb-3 transition-all duration-300 hover:bg-[#222]/80 cursor-pointer dot-matrix-bg border-l-4 border-[#33FF00] border-t border-r border-b border-[#33FF00]/30 relative group",
        // Special styling for Agentics Foundation card
        title.includes('AGENTICS FOUNDATION') ? "bg-[#112211]/80" : "",
        className
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-sm md:text-xl opacity-70">
        {getIcon()}
      </div>
      
      <div className="ml-7">
        <h3 className="text-[#33FF00] font-micro uppercase tracking-wide text-base md:text-xl font-medium truncate">
          {title}
        </h3>
        <p className="text-[#33FF00]/70 font-micro uppercase tracking-wide mt-1 text-sm md:text-base truncate">
          {subtitle}
        </p>
      </div>
      
      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-[#33FF00]/70 absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="absolute top-0 left-0 h-full w-[2px] bg-[#33FF00]/50 screen-flicker"></div>
    </div>
  );
};

export default NotificationCard;
