'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FileText,
  FileJson,
  FileCode,
  Share2,
  Database,
  BrainCircuit,
  Bot,
  MoveRight,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 md:w-24 md:h-24 bg-background-muted border-2 border-text-muted rounded-lg flex items-center justify-center">
    {children}
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-2 text-xs md:text-sm font-semibold text-text-muted tracking-wider uppercase">
    {children}
  </p>
);

const ProcessDiagram = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="mb-12"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            The Process Diagram
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            From raw data to intelligent insight, this is how our system synthesizes knowledge.
          </p>
        </motion.div>

        <motion.div
          className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* SVG for connecting lines */}
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            className="absolute top-0 left-0"
          >
            {/* Line from Ingestion to DBs */}
            <motion.line
              x1="120" y1="100"
              x2="350" y2="100"
              stroke="hsl(var(--text-muted))" strokeWidth="2"
              variants={draw} custom={1}
            />
            {/* Line from DBs to LLM */}
            <motion.line
              x1="450" y1="100"
              x2="680" y2="100"
              stroke="hsl(var(--text-muted))" strokeWidth="2"
              variants={draw} custom={2}
            />
            {/* Line from LLM to Agent */}
            <motion.line
              x1="780" y1="100"
              x2="980" y2="100"
              stroke="hsl(var(--text-muted))" strokeWidth="2"
              variants={draw} custom={3}
            />
          </motion.svg>

          {/* Stage 1: Ingestion */}
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <IconWrapper>
              <div className="flex items-center justify-center space-x-1">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-text-accent" />
                <FileJson className="w-6 h-6 md:w-8 md:h-8 text-text-accent" />
                <FileCode className="w-6 h-6 md:w-8 md:h-8 text-text-accent" />
              </div>
            </IconWrapper>
            <Label>Ingestion</Label>
          </motion.div>

          {/* Stage 2: Databases */}
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <IconWrapper>
              <div className="flex items-center justify-center space-x-2">
                <Share2 className="w-8 h-8 md:w-10 md:h-10 text-text-accent" />
                <Database className="w-8 h-8 md:w-10 md:h-10 text-text-accent" />
              </div>
            </IconWrapper>
            <Label>Graph & Vector DBs</Label>
          </motion.div>

          {/* Stage 3: LLM Processing */}
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <IconWrapper>
              <BrainCircuit className="w-10 h-10 md:w-12 md:h-12 text-text-accent" />
            </IconWrapper>
            <Label>LLM Processing</Label>
          </motion.div>

          {/* Stage 4: Agent Response */}
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <IconWrapper>
              <Bot className="w-10 h-10 md:w-12 md:h-12 text-text-accent" />
            </IconWrapper>
            <Label>Agent Response</Label>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessDiagram;