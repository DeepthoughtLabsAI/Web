import React from 'react';
import Typewriter from './Typewriter';

interface BlockquoteProps {
  text: string;
}

const Blockquote: React.FC<BlockquoteProps> = ({ text }) => {
  return (
    <blockquote className="bg-bg-pane border-l-4 border-accent-blue p-6 rounded-r-lg italic text-text-muted mb-6">
      <Typewriter text={text} className="text-lg" />
    </blockquote>
  );
};

export default Blockquote;
