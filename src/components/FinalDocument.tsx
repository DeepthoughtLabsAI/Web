import React from 'react';

const FinalDocument: React.FC = () => {
  const documentText = "Imagine having an expert assistant who knows your business, your projects, or your research inside and out. An assistant that doesn't just pull answers from the public internet, but from your own private documents, notes, and data. An assistant you can build, shape, and trust to help you with your most important work.";

  return (
    <div className="bg-gray-50 rounded-md shadow-lg w-full max-w-2xl overflow-hidden border border-gray-200">
      <div className="p-12 text-gray-800 text-base leading-loose">
        <p>{documentText}</p>
      </div>
    </div>
  );
};

export default FinalDocument;
