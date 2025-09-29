import React from 'react';
import Card from './Card';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-bg-pane">
      <div className="container text-center">
        <h2 className="text-4xl font-bold text-white mb-12">The Deepthought Paradigm</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Card title="Persona">
            We give the AI a clear identity and role. This provides powerful,
            implicit instructions on its expected reasoning, knowledge base, and
            professional tone.
          </Card>
          <Card title="Charter">
            We instill the AI with your core philosophy and guiding principles.
            This teaches it *how to think*, fostering resilience and enabling
            autonomous, aligned decisions.
          </Card>
          <Card title="Plan">
            We provide the AI with a clear, actionable mission. This ensures its
            execution is not just technically correct, but strategically aligned
            with your ultimate goals.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
