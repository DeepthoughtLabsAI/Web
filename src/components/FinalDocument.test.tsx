import React from 'react';
import { render, screen } from '@testing-library/react';
import FinalDocument from './FinalDocument';

describe('FinalDocument', () => {
  it('should render the document text correctly', () => {
    const documentText = "Imagine having an expert assistant who knows your business, your projects, or your research inside and out. An assistant that doesn't just pull answers from the public internet, but from your own private documents, notes, and data. An assistant you can build, shape, and trust to help you with your most important work.";
    render(<FinalDocument />);
    expect(screen.getByText(documentText)).toBeInTheDocument();
  });


});
