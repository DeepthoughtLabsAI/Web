import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Typewriter from './Typewriter';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

describe('Typewriter', () => {
  it('should type out the text when it becomes visible', async () => {
    const text = 'Hello, World!';
    render(<Typewriter text={text} speed={1} />);

    // The observer callback is what triggers the animation.
    // We need to manually call it here to simulate intersection.
    const observerCallback = mockIntersectionObserver.mock.calls[0][0];
    observerCallback([{ isIntersecting: true, target: document.createElement('div') }]);

    // Wait for the full text to be typed out
    await waitFor(() => {
      expect(screen.getByText(text)).toBeInTheDocument();
    }, { timeout: 2000 }); // Adjust timeout based on text length and speed
  });
});
