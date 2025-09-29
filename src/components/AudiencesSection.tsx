import React from 'react';
import Card from './Card';

const AudiencesSection: React.FC = () => {
  return (
    <section id="audiences" className="py-20 bg-bg-pane">
      <div className="container text-center">
        <h2 className="text-4xl font-bold text-white mb-12">For Those Who Build Intelligence</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Card title="The Sovereign Individual">
            For developers, researchers, and knowledge workers seeking tools for
            thought that respect privacy, enhance workflow, and provide ultimate
            control.
          </Card>
          <Card title="The Visionary Educator">
            For teachers and academic institutions who need scalable,
            personalized learning tools that capture and amplify their unique
            pedagogical expertise.
          </Card>
          <Card title="The Strategic Director">
            For enterprise leaders and R&D heads who require reliable, secure,
            and auditable AI systems that can be trusted with high-stakes,
            complex tasks.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AudiencesSection;
