import { render, screen } from '@testing-library/react';
import Home from './page';
import { expect } from 'vitest';

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Get started by editing/i);
    expect(heading).toBeInTheDocument();
  });
});
