'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

// A simple function to decode basic HTML entities.
const decodeEntities = (str: string) => {
  return str.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
};

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 30, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const elementRef = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);
  const decodedText = decodeEntities(text);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const type = () => {
            setDisplayedText(prev => {
              if (prev.length < decodedText.length) {
                setTimeout(type, speed);
                return decodedText.substring(0, prev.length + 1);
              }
              return prev;
            });
          };
          type();
          observer.unobserve(currentElement);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [decodedText, speed]);

  const isDone = displayedText.length === decodedText.length;

  return (
    <p ref={elementRef} className={`typewriter-text ${isDone ? 'done' : ''} ${className}`}>
      {displayedText}
    </p>
  );
};

export default Typewriter;
