
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface NotificationCardProps {
  title: string;
  subtitle: string;
  type: 'email' | 'calendar' | 'system';
  className?: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  title, 
  subtitle,
  type,
  className
}) => {
  const getIcon = () => {
    switch (type) {
      case 'email':
        return '📨';
      case 'calendar':
        return '📅';
      case 'system':
        return '⚙️';
      default:
        return '';
    }
  };

  return (
    <div className={cn(
      "cyber-card p-4 mb-4 transition-all duration-300 hover:bg-cyber-darkgray/80 cursor-pointer dot-matrix-bg border-[2px] border-cyber-dim/30 relative group",
      className
    )}>
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xl opacity-70">
        {getIcon()}
      </div>
      
      <div className="ml-7">
        <h3 className="text-cyber-neon font-micro uppercase tracking-wide text-lg font-medium cyber-glow truncate">
          {title}
        </h3>
        <p className="text-cyber-dim font-micro uppercase tracking-wide mt-1 truncate">
          {subtitle}
        </p>
      </div>
      
      <ArrowRight className="h-4 w-4 text-cyber-dim absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="absolute top-0 left-0 h-full w-[2px] bg-cyber-neon/50 screen-flicker"></div>
    </div>
  );
};

export default NotificationCard;
