import React from 'react';
import Link from 'next/link';
import Typewriter from './Typewriter';

const Hero: React.FC = () => {
  return (
    <section className="hero text-center py-24">
      <div className="container">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Your Expertise, Amplified.
          <br />
          Your Data, Sovereign.
        </h1>
        <div className="max-w-3xl mx-auto mb-8">
          <Typewriter
            text="We build high-fidelity digital partners, transforming generalist AI into specialized collaborators that respect your privacy and amplify your unique knowledge."
            className="text-xl text-text-muted"
          />
        </div>
        <Link href="#contact" className="bg-accent-blue text-white py-3 px-6 rounded-lg font-semibold no-underline transition-colors hover:bg-accent-blue-hover">
          Join the Waitlist
        </Link>
      </div>
    </section>
  );
};

export default Hero;
