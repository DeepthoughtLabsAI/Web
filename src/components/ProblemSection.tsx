import React from 'react';
import Typewriter from './Typewriter';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 text-center">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-12">Beyond Generic AI</h2>
        <Typewriter
          text='Today&apos;s AI is an "amnesiac master craftsman"—possessing vast skill but no specific context. Low-context prompts lead to generic "AI slop," while centralized platforms create a new "digital serfdom," holding your data hostage. This is not a partnership; it&apos;s a limitation.'
          className="text-lg text-text-muted"
        />
      </div>
    </section>
  );
};

export default ProblemSection;
