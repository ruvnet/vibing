
import React from 'react';
import { cn } from '@/lib/utils';

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
  return (
    <div className={cn(
      "cyber-card p-4 mb-4 transition-all duration-300 hover:bg-cyber-darkgray/80 cursor-pointer dot-matrix-bg",
      className
    )}>
      <h3 className="text-cyber-neon font-micro uppercase tracking-wide text-lg font-medium cyber-glow">
        {title}
      </h3>
      <p className="text-cyber-dim font-micro uppercase tracking-wide mt-1">
        {subtitle}
      </p>
    </div>
  );
};

export default NotificationCard;
