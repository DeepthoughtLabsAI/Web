import React from 'react';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, children }) => {
  return (
    <div className="bg-bg-card p-8 rounded-xl border border-border-color flex flex-col items-center text-center">
      <div className="w-12 h-12 text-accent-blue mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-text-primary">{title}</h3>
      <p className="text-text-muted">{children}</p>
    </div>
  );
};

export default IconCard;
