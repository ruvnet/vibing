
import React from 'react';
import NotificationCard from './NotificationCard';

const NotificationPanel: React.FC = () => {
  return (
    <div className="cyber-card p-8 w-full max-w-md mx-auto h-full flex flex-col fade-in-delay-1 dot-matrix-container">
      <h2 className="text-cyber-dim font-micro uppercase tracking-widest text-3xl mb-8">
        NOTIFICATIONS
      </h2>
      
      {/* Email Section */}
      <div className="mb-6">
        <h3 className="text-cyber-dim font-micro uppercase tracking-wider mb-3">
          EMAIL
        </h3>
        <NotificationCard 
          type="email"
          title="LOVE YOUR WORK + NEW PROJECT REQUEST"
          subtitle="VALERIE TETU"
          className="fade-in-delay-1"
        />
      </div>
      
      {/* Calendar Section */}
      <div className="mb-6">
        <h3 className="text-cyber-dim font-micro uppercase tracking-wider mb-3">
          CALENDAR
        </h3>
        <NotificationCard 
          type="calendar"
          title="TEAM WEEKLY SYNC"
          subtitle="ZOOM • 10:05 AM"
          className="fade-in-delay-2"
        />
      </div>
      
      {/* System Section */}
      <div className="mb-6">
        <h3 className="text-cyber-dim font-micro uppercase tracking-wider mb-3">
          SYSTEM
        </h3>
        <NotificationCard 
          type="system"
          title="UPDATE FIRMWARE V 1.0.3"
          subtitle="OPEN APP"
          className="fade-in-delay-3"
        />
      </div>
    </div>
  );
};

export default NotificationPanel;
