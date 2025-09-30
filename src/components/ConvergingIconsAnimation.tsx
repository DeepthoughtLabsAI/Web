'use client';

import React, { useState, useEffect, useRef } from 'react';
import DataSourceIcon, { IconName } from './DataSourceIcon';
import FinalDocument from './FinalDocument';

const icons: IconName[] = [
  'Mail', 'FileText', 'FileSpreadsheet', 'Database', 'File', 'FileCode',
  'MailPlus', 'Sheet', 'DatabaseZap', 'MailQuestion', 'Circle', 'Square', 'Triangle'
];

const allIcons: IconName[] = [...icons, ...icons, 'Mail', 'File', 'Database'];

type AnimationPhase = 'initial' | 'converging' | 'merging' | 'final';

interface AnimatedIcon {
  id: number;
  name: IconName;
  style: React.CSSProperties;
  isSurvivor: boolean;
}

const ConvergingIconsAnimation: React.FC = () => {
  const [animatedIcons, setAnimatedIcons] = useState<AnimatedIcon[]>([]);
  const [phase, setPhase] = useState<AnimationPhase>('initial');
  const containerRef = useRef<HTMLDivElement>(null);
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  // Generate the icons and their properties
  useEffect(() => {
    const survivors = new Set<number>();
    while (survivors.size < 5) {
      survivors.add(Math.floor(Math.random() * allIcons.length));
    }

    const generatedIcons = allIcons.map((name, index) => {
      const side = Math.floor(Math.random() * 4);
      let startTop, startLeft;

      switch (side) {
        case 0: // Top
          startTop = -10 - Math.random() * 20;
          startLeft = Math.random() * 100;
          break;
        case 1: // Right
          startTop = Math.random() * 100;
          startLeft = 110 + Math.random() * 20;
          break;
        case 2: // Bottom
          startTop = 110 + Math.random() * 20;
          startLeft = Math.random() * 100;
          break;
        case 3: // Left
        default:
          startTop = Math.random() * 100;
          startLeft = -10 - Math.random() * 20;
          break;
      }

      return {
        id: index,
        name,
        style: {
          position: 'absolute' as 'absolute',
          top: `${startTop}%`,
          left: `${startLeft}%`,
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.5)',
          transition: `all 4s ease-in-out, opacity 2s ease-in-out`,
        },
        isSurvivor: survivors.has(index),
      };
    });
    setAnimatedIcons(generatedIcons);
  }, []);

  // Main animation orchestration effect
  useEffect(() => {
    // Always clear previous timeouts when this effect runs
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    if (phase === 'converging') {
      setAnimatedIcons(prevIcons => prevIcons.map(icon => ({
        ...icon,
        style: { ...icon.style, top: '50%', left: '50%', opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
      })));
      timeouts.current.push(setTimeout(() => setPhase('merging'), 5000));
    } else if (phase === 'merging') {
      setAnimatedIcons(prevIcons => prevIcons.map(icon => ({
        ...icon,
        style: {
          ...icon.style,
          opacity: icon.isSurvivor ? 1 : 0,
          transform: icon.isSurvivor ? 'translate(-50%, -50%) scale(1.2)' : 'translate(-50%, -50%) scale(0.5)',
        }
      })));
      timeouts.current.push(setTimeout(() => setPhase('final'), 3000));
    } else if (phase === 'final') {
      setAnimatedIcons(prevIcons => prevIcons.map(icon => (
        icon.isSurvivor ? { ...icon, style: { ...icon.style, opacity: 0 } } : icon
      )));
    } else if (phase === 'initial') {
      // Reset to initial styles
      setAnimatedIcons(prevIcons => prevIcons.map(icon => {
        const angle = Math.random() * 2 * Math.PI;
        const radius = 400 + Math.random() * 150;
        const startTop = 50 + Math.sin(angle) * (radius / 2);
        const startLeft = 50 + Math.cos(angle) * (radius / 2.5);
        return {
          ...icon,
          style: {
            ...icon.style,
            top: `${startTop}%`,
            left: `${startLeft}%`,
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(0.5)',
          }
        }
      }));
    }
  }, [phase]);

  // Observer to trigger animation
  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('converging');
        } else {
          setPhase('initial');
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
      timeouts.current.forEach(clearTimeout); // Cleanup timeouts on unmount
    };
  }, []);

  return (
    <section className="py-20">
      <div ref={containerRef} className="container text-center w-full aspect-video relative overflow-hidden">
        {animatedIcons.map((icon) => (
          <div key={icon.id} style={icon.style}>
            <DataSourceIcon
              name={icon.name}
              className="text-text-muted"
              size={32}
            />
          </div>
        ))}
        <div style={{ transition: 'opacity 1s ease-in-out 0.5s', opacity: phase === 'final' ? 1 : 0 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FinalDocument />
        </div>
      </div>
    </section>
  );
};

export default ConvergingIconsAnimation;
