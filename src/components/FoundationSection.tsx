import React from 'react';
import IconCard from './IconCard';

const FoundationSection: React.FC = () => {
  return (
    <section id="foundation" className="py-20">
      <div className="container text-center">
        <h2 className="text-4xl font-bold text-white mb-12">An Architecture of Trust</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <IconCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            }
            title="Local-First"
          >
            Your data and intelligence live on your machine, under your control. Always.
          </IconCard>
          <IconCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            }
            title="Agentic Architecture"
          >
            Our V4 framework enables complex, cyclical reasoning and self-correction.
          </IconCard>
          <IconCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            }
            title="Systemic Observability"
          >
            A "glass box" approach provides deep insight into the AI's thought process.
          </IconCard>
          <IconCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
            title="Sovereign Audit Trail"
          >
            Human-readable logs ensure full transparency and accountability.
          </IconCard>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
