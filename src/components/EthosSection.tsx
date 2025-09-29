import React from 'react';
import Blockquote from './Blockquote';

const EthosSection: React.FC = () => {
  return (
    <section id="ethos" className="py-20">
      <div className="container max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-12">From Our Charter</h2>
        <div className="text-left">
          <Blockquote text='"Quality enables Velocity."' />
          <Blockquote text='"The UI Must Serve the &apos;Flow State.&apos; The primary feature of a tool for thought is the absence of friction."' />
          <Blockquote text='"Inference over Instruction. The user&apos;s primary task is not to write instructions, but to define an identity and provide the grounding knowledge."' />
        </div>
      </div>
    </section>
  );
};

export default EthosSection;
