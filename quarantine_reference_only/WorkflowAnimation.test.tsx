import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkflowAnimation from './WorkflowAnimation';

describe('WorkflowAnimation', () => {
  it('renders without crashing', () => {
    render(<WorkflowAnimation />);
    expect(screen.getByText('Synthesized Document')).toBeInTheDocument();
  });
});
